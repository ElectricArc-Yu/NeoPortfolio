using System;
using Const;
using Exceptions;
using Logic.Enums;

namespace Logic.Structs
{
    /// <summary>
    /// SPai struct: The core data representation of a Mahjong tile.
    /// Stores tile type (suit), number, and its current owner/location.
    /// </summary>
    [Serializable]
    public struct SPai
    {
        /// <summary>
        /// Tile type: Uses [Flags] EPaiType enum.
        /// Information is stored using bit-wise flags to represent suits (Man, Pin, Sou, Honor) 
        /// and special properties like Dora and Akadora.
        /// </summary>
        public EPaiType Type;

        /// <summary>
        /// Tile number:
        /// Shuupai (Suit tiles) : 1 ~ 9
        /// Kazehai (Wind tiles) : 1:East, 2:South, 3:West, 4:North
        /// Sangenpai (Dragon tiles) : 1:White, 2:Green, 3:Red
        /// </summary>
        public int Number;

        /// <summary>
        /// The current owner or location of the tile (e.g., Wall, Player Hand, Discards).
        /// </summary>
        public EPaiOwner Owner;

        public SPai(EPaiType type, int number, EPaiOwner owner)
        {
            Type = type;
            Number = number;
            Owner = owner;
        }

        public override string ToString()
        {
            // Filters out property bits to show only the core type (Suit)
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
        /// Compares the current instance of SPai with the provided SPai instance for equality based on visual "face" only.
        /// Ignores ownership and secondary properties.
        /// </summary>
        /// <param name="pai">The SPai instance to compare with.</param>
        /// <returns>
        /// Returns true if basic Types (Suit) and Numbers match.
        /// </returns>
        public bool SimpleEqual(SPai pai)
        {
            // Apply mask to isolate the suit/type bits before comparison
            return (Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) ==
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) && Number == pai.Number;
        }

        /// <summary>
        /// Equality check for suit tiles only, ignoring honor tiles.
        /// </summary>
        public bool SimpleEqualWithoutJihai(SPai pai)
        {
            // Verify if it's a suit tile first
            if (((int)Type & PaiAndPositionLib.SimplePaiTypeFilterWithoutJihai) == 0) return false;
            return (Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilterWithoutJihai) ==
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilterWithoutJihai) && Number == pai.Number;
        }

        /// <summary>
        /// Compares current SPai with a simplified SSimplePai (typically for UI/DTO mapping).
        /// </summary>
        public bool SimpleEqual(SSimplePai simplePai)
        {
            var temp = ' ';
            // Map the bit-flag type to a single character identifier
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

        /// <summary>
        /// Compares current SPai with a simplified SSimplePai, excluding honor tiles.
        /// </summary>
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

        /// <summary>
        /// Checks if two tiles belong to the same suit/color.
        /// </summary>
        public bool ColorEqual(SPai pai)
        {
            return (Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) == (pai.Type &
                (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter);
        }

        /// <summary>
        /// Gets the character representation of the tile suit.
        /// </summary>
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

        /// <summary>
        /// Determines if the tile is an Honor tile (Wind or Dragon).
        /// </summary>
        public bool isJihai()
        {
            return Type.HasFlag(EPaiType.Jihai);
        }

        /// <summary>
        /// Sorting comparison function: Determines order in the hand.
        /// Primary priority: Suit (Man < Pin < Sou < Honor).
        /// Secondary priority: Number (1-9).
        /// Tertiary priority: Special flags (e.g., Akadora placement).
        /// </summary>
        /// <param name="pai">The SPai instance to compare with.</param>
        /// <returns>True if the current tile should be placed after the provided tile.</returns>
        public bool SimpleCompare(SPai pai)
        {
            // 1. Compare Suit Class
            if ((Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) >
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter))
                return true;
            if ((Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter) <
                (pai.Type & (EPaiType)PaiAndPositionLib.SimplePaiTypeFilter))
                return false;
            
            // 2. If suits match, compare Number
            if (pai.Number == Number)
            {
                // 3. If numbers match, sort by Akadora status
                if (Type.HasFlag(EPaiType.Akadora)) return true;
                if (pai.Type.HasFlag(EPaiType.Akadora)) return false;
            }

            return pai.Number > Number;
        }
    }
}