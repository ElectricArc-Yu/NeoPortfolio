using System.Collections.Generic;
using System.Linq;
using Enums.PlayerEnums;
using Exceptions;
using Logic.Structs;
using Logic.Util;

namespace Logic.DTO
{
    /// <summary>
    /// MultiDrawInfoDto class: handles network transmission data for multiple tile draws.
    /// Application scenario: traffic optimization during initial hand dealing (sending multiple tiles at once).
    /// </summary>
    public class MultiDrawInfoDto : IDtoBase<(EPlayerPosition, List<SSimplePai>)>
    {
        private const EDTOType Type = EDTOType.MultiDrawInfo;
        private readonly EPlayerPosition _currentDrawer;
        private readonly List<SSimplePai> _drawedPaiList;
        private readonly byte[] _drawedPaiListBytes;

        private MultiDrawInfoDto()
        {
        }

        public MultiDrawInfoDto(EPlayerPosition currentDrawer, List<SSimplePai> drawedPaiList)
        {
            _currentDrawer = currentDrawer;
            _drawedPaiList = drawedPaiList;
        }

        public MultiDrawInfoDto(byte[] data)
        {
            _drawedPaiListBytes = data;
        }

        /// <summary>
        /// Core method: Serializes the draw list.
        /// </summary>
        public byte[] Serialize()
        {
            if (_drawedPaiList == null) throw new TryToSerializeANullObjectException();
            
            // 1. Write DTO Type header
            byte[] typeResult = { (byte)Type };
            // 2. Write the current drawer's position info
            byte[] currentDrawerResult = { (byte)_currentDrawer };
            // 3. Core compression: call dedicated SimplePaiCompressor for list-level deck compression
            var drawedPaiListResult = SimplePaiCompressorAndDecompressor.GeneratorDeckList(_drawedPaiList);
            
            // 4. Combine all byte segments
            var result = typeResult.Concat(currentDrawerResult).Concat(drawedPaiListResult).ToArray();
            return result;
        }

        /// <summary>
        /// Core method: Deserializes the draw list.
        /// Restores "who" drew "which tiles" from the byte stream.
        /// </summary>
        public (EPlayerPosition, List<SSimplePai>) Deserialize()
        {
            if (_drawedPaiListBytes == null) throw new TryToDeserializeANullObjectException();
            // Verify DTO Type
            if (_drawedPaiListBytes[0] != (byte)Type) throw new DtoTypeNotMatchException();
            
            // The 1st byte is the position
            var currentDrawer = (EPlayerPosition)_drawedPaiListBytes[1];
            // Remaining bytes are restored to tile list via decompression engine
            var waitForAnalysis = _drawedPaiListBytes.Skip(2).ToArray();
            var drawedPaiList = SimplePaiCompressorAndDecompressor.AnalysisDeckList(waitForAnalysis);
            
            return (currentDrawer, drawedPaiList);
        }
    }
}