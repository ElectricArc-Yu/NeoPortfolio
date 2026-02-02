using System;
using System.Linq;
using Enums.RuleEnums;
using Exceptions;
using Logic.Class;
using Util;

namespace Logic.DTO
{
    /// <summary>
    /// MatchRuleDto class: implements efficient serialization for game rules.
    /// Core design: Extreme bit-packing, compressing 10+ rule items into a very small byte array to save bandwidth and enhance anti-tampering.
    /// </summary>
    public class MatchRuleDto : IDtoBase<MatchRule>
    {
        private const EDTOType Type = EDTOType.MatchRule;
        private readonly MatchRule _matchRule;
        private readonly byte[] _matchRuleBytes;

        private MatchRuleDto()
        {
        }

        public MatchRuleDto(byte[] data)
        {
            _matchRuleBytes = data;
        }

        public MatchRuleDto(MatchRule matchRule)
        {
            _matchRule = matchRule;
        }

        /// <summary>
        /// Core method: Serializes the rule data.
        /// Uses manual binary stitching to "stuff" multiple enums and integer values into different bits of a byte.
        /// </summary>
        public byte[] Serialize()
        {
            if (_matchRule == null) throw new TryToSerializeANullObjectException();
            
            // 1. DTO Type identifier bit
            byte[] typeResult = { (byte)Type };
            
            // 2. Pre-allocate 13 bytes of payload space
            var matchRuleResult = new byte[13];

            // Bit operation: Stitch GameMode, Round, and ThinkingTimeType into the 1st byte (Index 0)
            // [Mode(2bit)] [Round(2bit)] [TimeType(2bit)] [Padding(2bit)]
            matchRuleResult[0] = Convert.ToByte(
                FormatUtil.ToBinaryString((int)_matchRule.GameModeGetter(), 2) +
                FormatUtil.ToBinaryString((int)_matchRule.MatchRoundGetter(), 2) +
                FormatUtil.ToBinaryString((int)_matchRule.ThinkingTimeTypeGetter(), 2) + "00", 2);

            // Split 16-bit integer (MinorRule) into two 8-bit bytes
            matchRuleResult[1] =
                Convert.ToByte(FormatUtil.ToBinaryString((int)_matchRule.MinorRuleGetter(), 16).Substring(0, 8), 2);
            matchRuleResult[2] =
                Convert.ToByte(FormatUtil.ToBinaryString((int)_matchRule.MinorRuleGetter(), 16).Substring(7, 8), 2);

            // Split BasePoint and WinPointThreshold
            matchRuleResult[3] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.BasePointGetter(), 16).Substring(0, 8), 2);
            matchRuleResult[4] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.BasePointGetter(), 16).Substring(8, 8), 2);
            matchRuleResult[5] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.WinPointThresholdGetter(), 16).Substring(0, 8), 2);
            matchRuleResult[6] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.WinPointThresholdGetter(), 16).Substring(8, 8), 2);

            // Stitch two 4-bit values into 1 byte
            // [ThinkingTime(4bit)] [BackupTime(4bit)]
            matchRuleResult[7] =
                Convert.ToByte(
                    FormatUtil.ToBinaryString(_matchRule.ThinkingTimeGetter(), 4) +
                    FormatUtil.ToBinaryString(_matchRule.BackUpTimeGetter(), 4), 2);

            // [Akadora(2bit)] [Hanbaku(2bit)] [AddRule(4bit)]
            matchRuleResult[8] =
                Convert.ToByte(
                    FormatUtil.ToBinaryString((int)_matchRule.AkadoraTypeGetter(), 2) +
                    FormatUtil.ToBinaryString((int)_matchRule.HanbakuGetter(), 2) +
                    FormatUtil.ToBinaryString((int)_matchRule.AdditionRuleGetter(), 4), 2);

            // Combine the type header and the data payload
            var result = typeResult.Concat(matchRuleResult).ToArray();
            return result;
        }

        /// <summary>
        /// Core method: Deserialization.
        /// Restores the original rule object from the byte stream through bit-slicing.
        /// </summary>
        public MatchRule Deserialize()
        {
            if (_matchRuleBytes == null) throw new TryToDeserializeANullObjectException();
            // Verify if the packet header identifier matches first
            if (_matchRuleBytes[0] != (byte)Type) throw new DtoTypeNotMatchException();
            
            var result = new MatchRule();
            var waitForAnalysis = _matchRuleBytes.Skip(1).ToArray();

            // Reconstruct stored data using bit-slicing (Substring)
            result.GameModeSetter(
                (EGameMode)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[0], 8).Substring(0, 2), 2));
            result.MatchRoundSetter(
                (EMatchRound)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[0], 8).Substring(2, 2), 2));
            result.ThinkingTimeTypeSetter(
                (EThinkingTimeType)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[0], 8).Substring(4, 2),
                    2));

            // Combine multiple bytes to restore complete integers
            result.MinorRuleSetter((EMinorRule)Convert.ToInt32(
                FormatUtil.ToBinaryString(waitForAnalysis[1], 8) + FormatUtil.ToBinaryString(waitForAnalysis[2], 8),
                2));
            result.BasePointSetter(Convert.ToInt32(
                FormatUtil.ToBinaryString(waitForAnalysis[3], 8) + FormatUtil.ToBinaryString(waitForAnalysis[4], 8),
                2));
            result.WinPointThresholdSetter(Convert.ToInt32(
                FormatUtil.ToBinaryString(waitForAnalysis[5], 8) + FormatUtil.ToBinaryString(waitForAnalysis[6], 8),
                2));

            // Restore subdivided time
            result.ThinkingTimeSetter(
                Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[7], 8).Substring(0, 4), 2),
                Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[7], 8).Substring(4, 4), 2));
            
            // Restore Dora and other additional rules
            result.AkadoraTypeSetter(
                (EAkadoraType)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[8], 8).Substring(0, 2), 2));
            result.HanbakuSetter(
                (EHanbaku)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[8], 8).Substring(2, 2), 2));
            result.AdditionRuleSetter(
                (EAdditionRule)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[8], 8).Substring(4, 4), 2));
            
            return result;
        }
    }
}