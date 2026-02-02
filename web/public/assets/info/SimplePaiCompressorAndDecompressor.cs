using System;
using System.Collections.Generic;
using Logic.Structs;
using Util;

namespace Logic.Util
{
    public static class SimplePaiCompressorAndDecompressor
    {
        private static byte[] SimplePaiCompressor(string str)
        {
            var result = new byte[4];
            result[0] = Convert.ToByte(str[0]);
            var temp1 = FormatUtil.ToBinaryString(str[1], 4);
            var temp2 = FormatUtil.ToBinaryString(str[18], 4);
            var temp3 = temp1 + temp2;
            result[1] = Convert.ToByte(temp3, 2);
            result[2] = Convert.ToByte(str.Substring(2, 8), 2);
            result[3] = Convert.ToByte(str.Substring(10, 8), 2);
            return result;
        }

        private static SSimplePai SimplePaiDecompressor(byte[] bytes)
        {
            var result = new SSimplePai();
            result.Type = Convert.ToChar(bytes[0]);
            result.Number = Convert.ToInt32(FormatUtil.ToBinaryString(bytes[1], 8).Substring(0, 4), 2);
            result.Owner = Convert.ToUInt16(FormatUtil.ToBinaryString(bytes[1], 8).Substring(4, 4), 2);
            result.SpecialType =
                Convert.ToUInt16(FormatUtil.ToBinaryString(bytes[2], 8) + FormatUtil.ToBinaryString(bytes[3], 8), 2);
            return result;
        }

        /// <summary>
        ///     Generates a byte array representation of a list of SSimplePai objects.
        /// </summary>
        /// <param name="list">A list of SSimplePai objects to be converted into a byte array.</param>
        /// <returns>A byte array where each SSimplePai object is represented by 4 bytes.</returns>
        public static byte[] GeneratorDeckList(List<SSimplePai> list)
        {
            var result = new byte[list.Count * 4];
            for (var i = 0; i < list.Count; i++)
            {
                var temp = SimplePaiCompressor(list[i].ToString());
                result[i * 4] = temp[0];
                result[i * 4 + 1] = temp[1];
                result[i * 4 + 2] = temp[2];
                result[i * 4 + 3] = temp[3];
            }

            return result;
        }

        /// <summary>
        ///     Converts a byte array into a list of SSimplePai objects.
        /// </summary>
        /// <param name="bytes">A byte array where each SSimplePai object is represented by 4 bytes.</param>
        /// <returns>A list of SSimplePai objects.</returns>
        public static List<SSimplePai> AnalysisDeckList(byte[] bytes)
        {
            var result = new List<SSimplePai>();
            for (var i = 0; i < bytes.Length / 4; i++)
            {
                var temp = new byte[4];
                temp[0] = bytes[i * 4];
                temp[1] = bytes[i * 4 + 1];
                temp[2] = bytes[i * 4 + 2];
                temp[3] = bytes[i * 4 + 3];
                result.Add(SimplePaiDecompressor(temp));
            }

            return result;
        }
    }
}