using System.Collections.Generic;
using System.Linq;
using Enums.PlayerEnums;
using Exceptions;
using Logic.Structs;
using Logic.Util;

namespace Logic.DTO
{
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

        public byte[] Serialize()
        {
            if (_drawedPaiList == null) throw new TryToSerializeANullObjectException();
            byte[] typeResult = { (byte)Type };
            byte[] currentDrawerResult = { (byte)_currentDrawer };
            var drawedPaiListResult = SimplePaiCompressorAndDecompressor.GeneratorDeckList(_drawedPaiList);
            var result = typeResult.Concat(currentDrawerResult).Concat(drawedPaiListResult).ToArray();
            return result;
        }

        public (EPlayerPosition, List<SSimplePai>) Deserialize()
        {
            if (_drawedPaiListBytes[0] != (byte)Type) throw new DtoTypeNotMatchException();
            if (_drawedPaiListBytes == null) throw new TryToDeserializeANullObjectException();
            var currentDrawer = (EPlayerPosition)_drawedPaiListBytes[1];
            var waitForAnalysis = _drawedPaiListBytes.Skip(2).ToArray();
            var drawedPaiList = SimplePaiCompressorAndDecompressor.AnalysisDeckList(waitForAnalysis);
            return (currentDrawer, drawedPaiList);
        }
    }
}