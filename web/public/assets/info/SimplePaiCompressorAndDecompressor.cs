using System;
using System.Collections.Generic;
using Logic.Structs;
using Util;

namespace Logic.Util
{
    /// <summary>
    /// SimplePaiCompressorAndDecompressor class: high-performance tile data compression engine.
    /// Core goal: Compresses complex tile data (Type, Number, Owner, Special States) into a 4-byte space, significantly reducing synchronization overhead in multiplayer matches.
    /// </summary>
    public static class SimplePaiCompressorAndDecompressor
    {
        /// <summary>
        /// Internal method: executes compression logic for a single tile.
        /// 4-byte layout:
        /// [Byte 0]: Tile type character
        /// [Byte 1]: Number (4 bits) + Owner ID (4 bits)
        /// [Byte 2-3]: 16-bit special state bits
        /// </summary>
        private static byte[] SimplePaiCompressor(string str)
        {
            var result = new byte[4];
            // Byte 0 stores the type (e.g., 'm', 'p', 's', 'z')
            result[0] = Convert.ToByte(str[0]);

            // Merges two 4-bit data points using bit stitching
            var temp1 = FormatUtil.ToBinaryString(str[1], 4);
            var temp2 = FormatUtil.ToBinaryString(str[18], 4); // Extracts data from specific string positions
            var temp3 = temp1 + temp2;
            result[1] = Convert.ToByte(temp3, 2);

            // Splits 16-bit SpecialType into two bytes for storage
            result[2] = Convert.ToByte(str.Substring(2, 8), 2);
            result[3] = Convert.ToByte(str.Substring(10, 8), 2);
            return result;
        }

        /// <summary>
        /// Internal method: executes decompression/restoration for a single tile.
        /// </summary>
        private static SSimplePai SimplePaiDecompressor(byte[] bytes)
        {
            var result = new SSimplePai();
            // Restore type character
            result.Type = Convert.ToChar(bytes[0]);
            // Restore Number and Owner ID
            result.Number = Convert.ToInt32(FormatUtil.ToBinaryString(bytes[1], 8).Substring(0, 4), 2);
            result.Owner = Convert.ToUInt16(FormatUtil.ToBinaryString(bytes[1], 8).Substring(4, 4), 2);
            // Combine and restore 16-bit special state
            result.SpecialType =
                Convert.ToUInt16(FormatUtil.ToBinaryString(bytes[2], 8) + FormatUtil.ToBinaryString(bytes[3], 8), 2);
            return result;
        }

        /// <summary>
        /// Batch compression interface.
        /// Converts a list of deck items into a compact byte array.
        /// </summary>
        public static byte[] GeneratorDeckList(List<SSimplePai> list)
        {
            var result = new byte[list.Count * 4];
            for (var i = 0; i < list.Count; i++)
            {
                var temp = SimplePaiCompressor(list[i].ToString());
                // Fill 4-byte data in order
                result[i * 4] = temp[0];
                result[i * 4 + 1] = temp[1];
                result[i * 4 + 2] = temp[2];
                result[i * 4 + 3] = temp[3];
            }

            return result;
        }

        /// <summary>
        /// Batch decompression interface.
        /// Restores an object list from a byte array.
        /// </summary>
        public static List<SSimplePai> AnalysisDeckList(byte[] bytes)
        {
            var result = new List<SSimplePai>();
            // Traverse array with a 4-byte step
            for (var i = 0; i < bytes.Length / 4; i++)
            {
                var temp = new byte[4];
                temp[0] = bytes[i * 4];
                temp[1] = bytes[i * 4 + 1];
                temp[2] = bytes[i * 4 + 2];
                temp[3] = bytes[i * 4 + 3];
                // Decompress and add back to the list
                result.Add(SimplePaiDecompressor(temp));
            }

            return result;
        }
    }
}