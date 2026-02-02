using System;
using System.Linq;
using Enums.RuleEnums;
using Exceptions;
using Logic.Class;
using Util;

namespace Logic.DTO
{
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

        public byte[] Serialize()
        {
            if (_matchRule == null) throw new TryToSerializeANullObjectException();
            byte[] typeResult = { (byte)Type };
            var matchRuleResult = new byte[13];
            matchRuleResult[0] = Convert.ToByte(
                FormatUtil.ToBinaryString((int)_matchRule.GameModeGetter(), 2) +
                FormatUtil.ToBinaryString((int)_matchRule.MatchRoundGetter(), 2) +
                FormatUtil.ToBinaryString((int)_matchRule.ThinkingTimeTypeGetter(), 2) + "00", 2);
            matchRuleResult[1] =
                Convert.ToByte(FormatUtil.ToBinaryString((int)_matchRule.MinorRuleGetter(), 16).Substring(0, 8), 2);
            matchRuleResult[2] =
                Convert.ToByte(FormatUtil.ToBinaryString((int)_matchRule.MinorRuleGetter(), 16).Substring(7, 8), 2);
            matchRuleResult[3] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.BasePointGetter(), 16).Substring(0, 8), 2);
            matchRuleResult[4] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.BasePointGetter(), 16).Substring(8, 8), 2);
            matchRuleResult[5] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.WinPointThresholdGetter(), 16).Substring(0, 8), 2);
            matchRuleResult[6] =
                Convert.ToByte(FormatUtil.ToBinaryString(_matchRule.WinPointThresholdGetter(), 16).Substring(8, 8), 2);
            matchRuleResult[7] =
                Convert.ToByte(
                    FormatUtil.ToBinaryString(_matchRule.ThinkingTimeGetter(), 4) +
                    FormatUtil.ToBinaryString(_matchRule.BackUpTimeGetter(), 4), 2);
            matchRuleResult[8] =
                Convert.ToByte(
                    FormatUtil.ToBinaryString((int)_matchRule.AkadoraTypeGetter(), 2) +
                    FormatUtil.ToBinaryString((int)_matchRule.HanbakuGetter(), 2) +
                    FormatUtil.ToBinaryString((int)_matchRule.AdditionRuleGetter(), 4), 2);
            var result = typeResult.Concat(matchRuleResult).ToArray();
            return result;
        }

        public MatchRule Deserialize()
        {
            if (_matchRuleBytes[0] != (byte)Type) throw new DtoTypeNotMatchException();
            if (_matchRuleBytes == null) throw new TryToDeserializeANullObjectException();
            var result = new MatchRule();
            var waitForAnalysis = _matchRuleBytes.Skip(1).ToArray();
            result.GameModeSetter(
                (EGameMode)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[0], 8).Substring(0, 2), 2));
            result.MatchRoundSetter(
                (EMatchRound)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[0], 8).Substring(2, 2), 2));
            result.ThinkingTimeTypeSetter(
                (EThinkingTimeType)Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[0], 8).Substring(4, 2),
                    2));
            result.MinorRuleSetter((EMinorRule)Convert.ToInt32(
                FormatUtil.ToBinaryString(waitForAnalysis[1], 8) + FormatUtil.ToBinaryString(waitForAnalysis[2], 8),
                2));
            result.BasePointSetter(Convert.ToInt32(
                FormatUtil.ToBinaryString(waitForAnalysis[3], 8) + FormatUtil.ToBinaryString(waitForAnalysis[4], 8),
                2));
            result.WinPointThresholdSetter(Convert.ToInt32(
                FormatUtil.ToBinaryString(waitForAnalysis[5], 8) + FormatUtil.ToBinaryString(waitForAnalysis[6], 8),
                2));
            result.ThinkingTimeSetter(
                Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[7], 8).Substring(0, 4), 2),
                Convert.ToInt32(FormatUtil.ToBinaryString(waitForAnalysis[7], 8).Substring(4, 4), 2));
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