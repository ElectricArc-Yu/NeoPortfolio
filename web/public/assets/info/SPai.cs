using System;
using Const;
using Exceptions;
using Logic.Enums;

namespace Logic.Structs
{
    [Serializable]
    public struct SPai
    {
        public EPaiType Type;

        /// <summary>
        ///     Shuupai : 1 ~ 9 = 1 ~ 9
        ///     Kazehai : 1 ~ 4 = East,South,West,North
        ///     Sangenpai : 1 ~ 3 = Haku, Hatsu, Chun
        /// </summary>
        public int Number;

        public EPaiOwner Owner;

        public SPai(EPaiType type, int number, EPaiOwner owner)
        {
            Type = type;
            Number = number;
            Owner = owner;
        }

        public override string ToString()
        {
            var temp = (EPaiType)((int)Type & 0b0111_0001_1000_0000);
            return $"{temp}:{Number} \r";
        }

        public override bool Equals(object obj)
        {
            if (obj == null || GetType() != obj.GetType()) return false;

            var other = (SPai)obj;
            return Type == other.Type && Number == other.Number && Owner == other.Owner;
        }

        public override int GetHashCode()
        {
            return Type.GetHashCode() ^ Number.GetHashCode() ^ Owner.GetHashCode();
        }

        public void OwnerSetter(EPaiOwner owner)
        {
            Owner = owner;
        }

        /// <summary>
        ///     Compares the current instance of SPai with the provided SPai instance for equality.
        /// </summary>
        /// <param name="pai">The SPai instance to compare with the current instance.</param>
        /// <returns>
        ///     Returns true if the current instance's Type (after applying the SimplePaiTypeFilter) is equal to the provided
        ///     instance's Type (after applying the SimplePaiTypeFilter) and the Numbers are equal.
        ///     Otherwise, it returns false.
        /// </returns>
        public bool SimpleEqual(SPai pai)
        {
            return (Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) ==
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) && Number == pai.Number;
        }

        public bool SimpleEqualWithoutJihai(SPai pai)
        {
            if (((int)Type & PaiAndPositionLib.SimplePaiTypeFilterWithoutJihai) == 0) return false;
            return (Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilterWithoutJihai) ==
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilterWithoutJihai) && Number == pai.Number;
        }

        public bool SimpleEqual(SSimplePai simplePai)
        {
            var temp = ' ';
            switch ((EPaiType)((int)Type & PaiAndPositionLib.SimplePaiTypeFilter))
            {
                case EPaiType.Wanzu:
                    temp = 'm';
                    break;
                case EPaiType.Pinzu:
                    temp = 'p';
                    break;
                case EPaiType.Souzu:
                    temp = 's';
                    break;
                case EPaiType.Kazehai:
                    temp = 'w';
                    break;
                case EPaiType.Sangenpai:
                    temp = 'd';
                    break;
            }

            if (temp == ' ') throw new TryToDeserializeANullObjectException();
            return temp == simplePai.Type && Number == simplePai.Number;
        }

        public bool SimpleEqualWithoutJihai(SSimplePai simplePai)
        {
            var temp = ' ';
            switch ((EPaiType)((int)Type & PaiAndPositionLib.SimplePaiTypeFilter))
            {
                case EPaiType.Wanzu:
                    temp = 'm';
                    break;
                case EPaiType.Pinzu:
                    temp = 'p';
                    break;
                case EPaiType.Souzu:
                    temp = 's';
                    break;
            }

            if (temp == ' ') return false;
            return temp == simplePai.Type && Number == simplePai.Number;
        }

        public bool ColorEqual(SPai pai)
        {
            return (Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) == (pai.Type &
                (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter);
        }

        public char GetSimpleType()
        {
            var type = ' ';
            switch ((EPaiType)((int)Type & PaiAndPositionLib.SimplePaiTypeFilter))
            {
                case EPaiType.Wanzu:
                    type = 'm';
                    break;
                case EPaiType.Pinzu:
                    type = 'p';
                    break;
                case EPaiType.Souzu:
                    type = 's';
                    break;
                case EPaiType.Kazehai:
                    type = 'w';
                    break;
                case EPaiType.Sangenpai:
                    type = 'd';
                    break;
            }

            return type;
        }

        public bool isJihai()
        {
            return Type.HasFlag(EPaiType.Jihai);
        }

        /// <summary>
        ///     Compares the current instance of SPai with the provided SPai instance.
        /// </summary>
        /// <param name="pai">The SPai instance to compare with the current instance.</param>
        /// <returns>
        ///     Returns true if the current instance's Type (after applying the SimplePaiTypeFilter) is greater than the provided
        ///     instance's Type (after applying the SimplePaiTypeFilter).
        ///     If the Types are equal, it checks the Number. If the Number is equal, it checks if the current instance's Type has
        ///     the Akadora flag. If it does, it returns true. If the provided instance's Type has the Akadora flag, it returns
        ///     false.
        ///     If the Numbers are not equal, it returns true if the provided instance's Number is greater than the current
        ///     instance's Number.
        ///     Otherwise, it returns false.
        /// </returns>
        public bool SimpleCompare(SPai pai)
        {
            if ((Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) >
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter))
                return true;
            if ((Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) <
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter))
                return false;
            if (pai.Number == Number)
            {
                if (Type.HasFlag(EPaiType.Akadora)) return true;
                if (pai.Type.HasFlag(EPaiType.Akadora)) return false;
            }

            return pai.Number > Number;
        }
    }
}