using System;
using System.Collections.Generic;
using Enums.PlayerEnums;
using Exceptions;
using JetBrains.Annotations;
using Logic.Structs;
using UnityEngine;

namespace Logic.Class
{
    public class HandList
    {
        private readonly string _steamID;
        private int _currentIndex;

        /// <summary>
        ///     0 : The new drawed pai , 1 ~ 13 : The hand pai
        /// </summary>
        private SPai[] _handList;

        private bool[] _isAvailable;

        /// <summary>
        ///     0 : Not in Paired , 1 : In Paired , 2 : Tapped in Paired , 3 : Reverse in Paired , 4 : Tapped and stack in Paired
        /// </summary>
        private byte[] _isPaired;

        private int[] _reverseSortedHandList;
        private int[] _sortedHandList;

        private HandList()
        {
        }

        public HandList(string steamID)
        {
            _steamID = steamID;
            _handList = new SPai[14];
            _isAvailable = new bool[14];
            for (var i = 0; i < _isAvailable.Length; i++) _isAvailable[i] = false;
            _isPaired = new byte[14];
            for (var i = 0; i < _isPaired.Length; i++) _isPaired[i] = 0;
            _currentIndex = 1;
        }

        /// <summary>
        ///     Checks if the provided Steam ID matches the stored Steam ID.
        /// </summary>
        /// <param name="steamID">The Steam ID to be checked.</param>
        /// <returns>Returns true if the provided Steam ID matches the stored Steam ID, otherwise returns false.</returns>
        public bool IsSteamIDCorrect(string steamID)
        {
            return _steamID.Equals(steamID);
        }

        /// <summary>
        ///     Adds a set of four tiles (pai) to the player's hand.
        ///     This method is used when filling the player's hand initially. For adding a newly drawn tile, use AddOnePai(SPai
        ///     pai).
        /// </summary>
        /// <param name="pai">An array of tiles (pai) to be added to the hand. The length of the array should be 4.</param>
        /// <exception cref="ParameterNumberNotCorrectException">
        ///     Thrown when the length of the provided array is not 4 or when
        ///     adding the tiles would exceed the hand's capacity.
        /// </exception>
        public void AddFourPai(SPai[] pai)
        {
            if (pai.Length != 4 || _currentIndex + 4 > _handList.Length) throw new ParameterNumberNotCorrectException();
            for (var i = 0; i < 4; i++)
            {
                _handList[_currentIndex + i] = pai[i];
                _isAvailable[_currentIndex + i] = true;
            }

            _currentIndex += 4;
        }

        /// <summary>
        ///     Adds a tile (pai) to the player's hand at a specified index.
        ///     This method is used when filling the player's hand initially. For adding a newly drawn tile, use AddOnePai(SPai
        ///     pai).
        /// </summary>
        /// <param name="pai">The tile (pai) to be added to the hand.</param>
        /// <param name="index">
        ///     The index at which the tile should be added. It is recommended to use 13 to fill the hand to 13
        ///     tiles.
        /// </param>
        /// <exception cref="ParameterNumberNotCorrectException">
        ///     Thrown when the provided index is out of the valid range (0 to the
        ///     length of the hand list).
        /// </exception>
        /// <exception cref="MultipleDrawException">Thrown when a tile is already available at the provided index.</exception>
        public void AddOnePai(SPai pai, int index)
        {
            if (index < 0 || index >= _handList.Length) throw new ParameterNumberNotCorrectException();
            if (_isAvailable[index]) throw new MultipleDrawException();
            _handList[index] = pai;
            _isAvailable[index] = true;
            _currentIndex++;
        }

        /// <summary>
        ///     Adds a tile (pai) to the player's hand at the first index (0).
        /// </summary>
        /// <param name="pai">The tile (pai) to be added to the hand.</param>
        /// <exception cref="MultipleDrawException">Thrown when a tile is already available at the first index.</exception>
        public void AddOnePai(SPai pai)
        {
            if (_isAvailable[0]) throw new MultipleDrawException();
            _handList[0] = pai;
            _isAvailable[0] = true;
        }

        /// <summary>
        ///     Replaces a tile (pai) in the player's hand at a specified index with the tile at the first index (0).
        /// </summary>
        /// <param name="index">The index at which the tile should be replaced. When index is 0 discard drawed tile.</param>
        /// <exception cref="ParameterNumberNotCorrectException">
        ///     Thrown when the provided index is out of the valid range (0 to the
        ///     length of the hand list).
        /// </exception>
        /// <exception cref="MultipleDrawException">Thrown when a tile is already available at the provided index.</exception>
        public SPai ReplaceOnePai(int index)
        {
            if (index < 0 || index >= _handList.Length) throw new ParameterNumberNotCorrectException();
            if (_isAvailable[index]) throw new MultipleDrawException();
            var result = _handList[index];
            _handList[index] = _handList[0];
            DiscardCard(0);
            return result;
        }

        /// <summary>
        ///     Discards a tile (pai) from the player's hand at a specified index.
        /// </summary>
        /// <param name="index">The index at which the tile should be discarded.</param>
        /// <exception cref="ParameterNumberNotCorrectException">
        ///     Thrown when the provided index is out of the valid range (0 to the
        ///     length of the hand list).
        /// </exception>
        private void DiscardCard(int index)
        {
            if (index < 0 || index >= _handList.Length) throw new ParameterNumberNotCorrectException();
            _isAvailable[index] = false;
        }

        /// <summary>
        ///     Discards multiple tiles (pai) from the player's hand at specified indices.
        /// </summary>
        /// <param name="indices">The indices at which the tiles should be discarded.</param>
        /// <exception cref="ParameterNumberNotCorrectException">
        ///     Thrown when any of the provided indices are out of the valid range
        ///     (0 to the length of the hand list).
        /// </exception>
        private void DiscardCards(params int[] indices)
        {
            foreach (var index in indices)
            {
                if (index < 0 || index >= _handList.Length) throw new ParameterNumberNotCorrectException();
                _isAvailable[index] = false;
            }
        }

        /// <summary>
        ///     Adds multiple tiles (pai) to the player's hand.
        /// </summary>
        /// <param name="pais">An array of tiles (pai) to be added to the hand.</param>
        /// <exception cref="ParameterNumberNotCorrectException">
        ///     Thrown when there is no available space in the hand for the new
        ///     tiles.
        /// </exception>
        private void AddCards(params SPai[] pais)
        {
            foreach (var pai in pais)
                for (var i = 1; i < _isAvailable.Length; i++)
                {
                    if (_isAvailable[i])
                    {
                        _handList[i] = pai;
                        _isAvailable[i] = true;
                        continue;
                    }

                    throw new ParameterNumberNotCorrectException();
                }
        }

        /// <summary>
        ///     Retrieves the current hand list of the player.
        /// </summary>
        /// <param name="hasDrawedPai">Out parameter indicating whether a new tile has been drawn.</param>
        /// <param name="currentHandList">Out parameter representing the current hand list.</param>
        /// <param name="isPaired">Out parameter representing the pairing status of each tile in the hand.</param>
        public void GetHandList(out bool hasDrawedPai, out SPai[] currentHandList, out byte[] isPaired)
        {
            var tempResultSPais = new SPai[_handList.Length];
            var resultBool = false;
            var pointer = 0;
            if (_isAvailable[0])
            {
                tempResultSPais[pointer++] = _handList[0];
                resultBool = true;
            }
            else
            {
                pointer++;
                resultBool = false;
            }

            for (var i = 1; i < _isAvailable.Length; i++)
                if (_isAvailable[i])
                    tempResultSPais[pointer++] = _handList[i];
            var resultSPais = new SPai[pointer + 1];
            for (var i = 0; i < resultSPais.Length; i++) resultSPais[i] = tempResultSPais[i];
            hasDrawedPai = resultBool;
            currentHandList = resultSPais;
            isPaired = _isPaired;
        }

        /// <summary>
        ///     Resets the player's hand.
        /// </summary>
        /// <remarks>
        ///     This method is used to clean up the player's hand by setting all elements of the _isAvailable array to false,
        ///     indicating that no tiles are available in the hand. It also resets the _currentIndex to 1.
        /// </remarks>
        public void ClearHandList()
        {
            for (var i = 0; i < _isAvailable.Length; i++) _isAvailable[i] = false;
            _currentIndex = 1;
        }

        /// <summary>
        ///     This method is responsible for retrieving the current hand list of the player.
        /// </summary>
        /// <remarks>
        ///     This method is primarily used for the ron, tsumo, and chankan operations in the game of Mahjong.
        ///     For other operations, use GetHandList(out bool hasDrawedPai, out SPai[] currentHandList, out byte[] isPaired).
        /// </remarks>
        /// <returns>
        ///     An array of SPai objects representing the player's current hand.
        /// </returns>
        public SPai[] GetHandList()
        {
            return _handList;
        }

        #region Clean up

        /// <summary>
        ///     Resets the player's hand.
        /// </summary>
        /// <remarks>
        ///     This method is used to clean up the player's hand by setting all elements of the _isAvailable array to false,
        ///     indicating that no tiles are available in the hand. It also resets the _currentIndex to 1.
        /// </remarks>
        /// <returns>
        ///     Always returns true to indicate the operation was successful.
        /// </returns>
        public bool Clean()
        {
            for (var i = 0; i < _isAvailable.Length; i++)
            {
                _isAvailable[i] = false;
                _isPaired[i] = 0;
            }

            _currentIndex = 1;
            return true;
        }

        #endregion

        #region Sorting

        /// <summary>
        ///     Sorts the player's hand list based on a custom comparison logic.
        /// </summary>
        private void SortHandList()
        {
            var beforeSort = new int[_handList.Length];
            for (var i = 0; i < _handList.Length; i++) beforeSort[i] = i;
            var length = 1;
            foreach (var b in _isPaired)
                if (b == 0)
                    length++;
                else
                    beforeSort[length - 1] = length - 1;
            for (var i = length - 1; i >= 1; i--)
            for (var j = 1; j < length - 1; j++)
                if (_handList[beforeSort[j]].SimpleCompare(_handList[beforeSort[j - 1]]))
                    (beforeSort[j], beforeSort[j - 1]) = (beforeSort[j - 1], beforeSort[j]);
            _sortedHandList = beforeSort;
        }

        /// <summary>
        ///     Sorts the player's hand list in reverse order based on a custom comparison logic.
        /// </summary>
        private void ReverseSortHandList()
        {
            var beforeSort = new int[_handList.Length];
            for (var i = 0; i < _handList.Length; i++) beforeSort[i] = i;
            var length = 1;
            foreach (var b in _isPaired)
                if (b == 0)
                    length++;
                else
                    beforeSort[length - 1] = length - 1;
            for (var i = length - 1; i >= 1; i--)
            for (var j = 1; j < length - 1; j++)
                if (_handList[beforeSort[j - 1]].SimpleCompare(_handList[beforeSort[j]]))
                    (beforeSort[j], beforeSort[j - 1]) = (beforeSort[j - 1], beforeSort[j]);
            _reverseSortedHandList = beforeSort;
        }

        #endregion

        #region Chi & Pon & Kan

        /// <summary>
        ///     Performs the Pon operation in the game of Mahjong.
        /// </summary>
        /// <param name="pai">The tile (pai) that is used to form a Pon.</param>
        /// <param name="type">The position of the player who discards the tile.</param>
        /// <param name="indices">The indices of the tiles in the hand that will form a Pon with the discarded tile.</param>
        /// <exception cref="ParameterNumberNotCorrectException">Thrown when the number of indices provided is not equal to 2.</exception>
        public void DoPon(SPai pai, EPlayerRelativelyPosition type, params int[] indices)
        {
            if (indices.Length != 2) throw new ParameterNumberNotCorrectException();
            var tempSPais = new SPai[3];
            var tempIsPaired = new byte[3];
            switch (type)
            {
                case EPlayerRelativelyPosition.Left:
                    tempSPais[0] = pai;
                    tempIsPaired[0] = 2;
                    tempSPais[1] = _handList[indices[0]];
                    tempIsPaired[1] = 1;
                    tempSPais[2] = _handList[indices[1]];
                    tempIsPaired[2] = 1;
                    break;
                case EPlayerRelativelyPosition.Opposite:
                    tempSPais[0] = _handList[indices[0]];
                    tempIsPaired[0] = 1;
                    tempSPais[1] = pai;
                    tempIsPaired[1] = 2;
                    tempSPais[2] = _handList[indices[1]];
                    tempIsPaired[2] = 1;
                    break;
                case EPlayerRelativelyPosition.Right:
                    tempSPais[0] = _handList[indices[0]];
                    tempIsPaired[0] = 1;
                    tempSPais[1] = _handList[indices[1]];
                    tempIsPaired[1] = 1;
                    tempSPais[2] = pai;
                    tempIsPaired[2] = 2;
                    break;
            }

            DiscardCards(indices);
            var tempHandList = new SPai[_handList.Length];
            var tempIsPairedList = new byte[_isPaired.Length];
            var tempIsAvailableList = new bool[_isAvailable.Length];
            for (var i = 0; i < tempIsAvailableList.Length; i++) tempIsAvailableList[i] = true;
            var tempIndex = 0;
            var needInsert = true;
            for (var i = 0; i < _handList.Length; i++)
                if (_isAvailable[tempIndex])
                {
                    if (needInsert)
                        if (_isPaired[tempIndex] != 0)
                        {
                            tempHandList[i] = tempSPais[0];
                            tempIsPairedList[i] = tempIsPaired[0];
                            tempHandList[i + 1] = tempSPais[1];
                            tempIsPairedList[i + 1] = tempIsPaired[1];
                            tempHandList[i + 2] = tempSPais[2];
                            tempIsPairedList[i + 2] = tempIsPaired[2];
                            i += 2;
                            needInsert = false;
                        }

                    tempHandList[i] = _handList[tempIndex];
                    tempIsPairedList[i] = _isPaired[tempIndex];
                    tempIndex++;
                    if (tempIndex == _handList.Length && needInsert)
                    {
                        tempHandList[i] = tempSPais[0];
                        tempIsPairedList[i] = tempIsPaired[0];
                        tempHandList[i + 1] = tempSPais[1];
                        tempIsPairedList[i + 1] = tempIsPaired[1];
                        tempHandList[i + 2] = tempSPais[2];
                        tempIsPairedList[i + 2] = tempIsPaired[2];
                        i += 2;
                        needInsert = false;
                    }
                }
                else
                {
                    tempIndex++;
                    i--;
                }

            _handList = tempHandList;
            _isPaired = tempIsPairedList;
            _isAvailable = tempIsAvailableList;
        }

        /// <summary>
        ///     Performs the Chi operation in the game of Mahjong.
        /// </summary>
        /// <param name="pai">The tile (pai) that is used to form a Chi.</param>
        /// <param name="type">The position of the player who discards the tile.</param>
        /// <param name="indices">The indices of the tiles in the hand that will form a Chi with the discarded tile.</param>
        /// <exception cref="ParameterNumberNotCorrectException">Thrown when the number of indices provided is not equal to 2.</exception>
        public void DoChi(SPai pai, EPlayerRelativelyPosition type, params int[] indices)
        {
            if (indices.Length != 2) throw new ParameterNumberNotCorrectException();
            var tempSPais = new SPai[3];
            var tempIsPaired = new byte[3];
            switch (type)
            {
                case EPlayerRelativelyPosition.Left:
                    tempSPais[0] = pai;
                    tempIsPaired[0] = 2;
                    tempSPais[1] = _handList[indices[0]];
                    tempIsPaired[1] = 1;
                    tempSPais[2] = _handList[indices[1]];
                    tempIsPaired[2] = 1;
                    break;
                case EPlayerRelativelyPosition.Opposite:
                    tempSPais[0] = _handList[indices[0]];
                    tempIsPaired[0] = 1;
                    tempSPais[1] = pai;
                    tempIsPaired[1] = 2;
                    tempSPais[2] = _handList[indices[1]];
                    tempIsPaired[2] = 1;
                    break;
                case EPlayerRelativelyPosition.Right:
                    tempSPais[0] = _handList[indices[0]];
                    tempIsPaired[0] = 1;
                    tempSPais[1] = _handList[indices[1]];
                    tempIsPaired[1] = 1;
                    tempSPais[2] = pai;
                    tempIsPaired[2] = 2;
                    break;
            }

            DiscardCards(indices);
            var tempHandList = new SPai[_handList.Length];
            var tempIsPairedList = new byte[_isPaired.Length];
            var tempIsAvailableList = new bool[_isAvailable.Length];
            for (var i = 0; i < tempIsAvailableList.Length; i++) tempIsAvailableList[i] = true;
            var tempIndex = 0;
            var needInsert = true;
            for (var i = 0; i < _handList.Length; i++)
                if (_isAvailable[tempIndex])
                {
                    if (needInsert)
                        if (_isPaired[tempIndex] != 0)
                        {
                            tempHandList[i] = tempSPais[0];
                            tempIsPairedList[i] = tempIsPaired[0];
                            tempHandList[i + 1] = tempSPais[1];
                            tempIsPairedList[i + 1] = tempIsPaired[1];
                            tempHandList[i + 2] = tempSPais[2];
                            tempIsPairedList[i + 2] = tempIsPaired[2];
                            i += 2;
                            needInsert = false;
                        }

                    tempHandList[i] = _handList[tempIndex];
                    tempIsPairedList[i] = _isPaired[tempIndex];
                    tempIndex++;
                    if (tempIndex == _handList.Length && needInsert)
                    {
                        tempHandList[i] = tempSPais[0];
                        tempIsPairedList[i] = tempIsPaired[0];
                        tempHandList[i + 1] = tempSPais[1];
                        tempIsPairedList[i + 1] = tempIsPaired[1];
                        tempHandList[i + 2] = tempSPais[2];
                        tempIsPairedList[i + 2] = tempIsPaired[2];
                        i += 2;
                        needInsert = false;
                    }
                }
                else
                {
                    tempIndex++;
                    i--;
                }

            _handList = tempHandList;
            _isPaired = tempIsPairedList;
            _isAvailable = tempIsAvailableList;
        }

        /// <summary>
        ///     Performs the AddKan operation in the game of Mahjong.
        /// </summary>
        /// <param name="index">The index of the tile in the hand that will be used to form a Kan.</param>
        /// <exception cref="ParameterNumberNotCorrectException">Thrown when the index provided is out of range.</exception>
        public void DoAddKan(int index)
        {
            if (index < 0 || index >= _handList.Length) throw new ParameterNumberNotCorrectException();
            var tempPai = _handList[index];
            DiscardCard(index);
            var tempSPais = new SPai[_handList.Length + 1];
            var tempIsPaired = new byte[_isPaired.Length + 1];
            var tempIsAvailable = new bool[_isAvailable.Length + 1];
            for (var i = 0; i < tempIsAvailable.Length; i++) tempIsAvailable[i] = true;
            var tempIndex = 0;
            for (var i = 0; i < tempSPais.Length; i++)
                if (_isPaired[i] == 2 && tempPai.SimpleEqual(_handList[i]))
                {
                    tempSPais[tempIndex] = tempPai;
                    tempIsPaired[tempIndex] = 4;
                    tempSPais[tempIndex + 1] = _handList[i];
                    tempIsPaired[tempIndex + 1] = _isPaired[i];
                    tempIndex += 2;
                }
                else
                {
                    tempSPais[tempIndex] = _handList[i];
                    tempIsPaired[tempIndex] = _isPaired[i];
                }

            _handList = tempSPais;
            _isPaired = tempIsPaired;
            _isAvailable = tempIsAvailable;
        }

        /// <summary>
        ///     Performs the Kan operation in the game of Mahjong.
        /// </summary>
        /// <param name="sPai">The tile (sPai) that is used to form a Kan.</param>
        /// <param name="type">The position of the player who discards the tile.</param>
        /// <param name="indices">The indices of the tiles in the hand that will form a Kan with the discarded tile.</param>
        /// <exception cref="ParameterNumberNotCorrectException">Thrown when the number of indices provided is not equal to 3.</exception>
        public void DoKan(SPai sPai, EPlayerRelativelyPosition type, params int[] indices)
        {
            if (indices.Length != 3) throw new ParameterNumberNotCorrectException();
            var tempSPai = new SPai[4];
            var tempIsPaired = new byte[4];
            switch (type)
            {
                case EPlayerRelativelyPosition.Left:
                    tempSPai[0] = sPai;
                    tempIsPaired[0] = 2;
                    tempSPai[1] = _handList[indices[0]];
                    tempIsPaired[1] = 1;
                    tempSPai[2] = _handList[indices[1]];
                    tempIsPaired[2] = 1;
                    tempSPai[3] = _handList[indices[2]];
                    tempIsPaired[3] = 1;
                    break;
                case EPlayerRelativelyPosition.Opposite:
                    tempSPai[0] = _handList[indices[0]];
                    tempIsPaired[0] = 1;
                    tempSPai[1] = sPai;
                    tempIsPaired[1] = 2;
                    tempSPai[2] = _handList[indices[1]];
                    tempIsPaired[2] = 1;
                    tempSPai[3] = _handList[indices[2]];
                    tempIsPaired[3] = 1;
                    break;
                case EPlayerRelativelyPosition.Right:
                    tempSPai[0] = _handList[indices[0]];
                    tempIsPaired[0] = 1;
                    tempSPai[1] = _handList[indices[1]];
                    tempIsPaired[1] = 1;
                    tempSPai[2] = _handList[indices[2]];
                    tempIsPaired[2] = 1;
                    tempSPai[3] = sPai;
                    tempIsPaired[3] = 2;
                    break;
            }

            DiscardCards(indices);
            var tempHandList = new SPai[_handList.Length];
            var tempIsPairedList = new byte[_isPaired.Length];
            var tempIsAvailableList = new bool[_isAvailable.Length];
            for (var i = 0; i < tempIsAvailableList.Length; i++) tempIsAvailableList[i] = true;
            var tempIndex = 0;
            var needInsert = true;
            for (var i = 0; i < _handList.Length; i++)
                if (_isAvailable[tempIndex])
                {
                    if (needInsert)
                        if (_isPaired[tempIndex] != 0)
                        {
                            tempHandList[i] = tempSPai[0];
                            tempIsPairedList[i] = tempIsPaired[0];
                            tempHandList[i + 1] = tempSPai[1];
                            tempIsPairedList[i + 1] = tempIsPaired[1];
                            tempHandList[i + 2] = tempSPai[2];
                            tempIsPairedList[i + 2] = tempIsPaired[2];
                            tempHandList[i + 3] = tempSPai[3];
                            tempIsPairedList[i + 3] = tempIsPaired[3];
                            i += 3;
                            needInsert = false;
                        }

                    tempHandList[i] = _handList[tempIndex];
                    tempIsPairedList[i] = _isPaired[tempIndex];
                    tempIndex++;
                    if (tempIndex == _handList.Length && needInsert)
                    {
                        tempHandList[i] = tempSPai[0];
                        tempIsPairedList[i] = tempIsPaired[0];
                        tempHandList[i + 1] = tempSPai[1];
                        tempIsPairedList[i + 1] = tempIsPaired[1];
                        tempHandList[i + 2] = tempSPai[2];
                        tempIsPairedList[i + 2] = tempIsPaired[2];
                        tempHandList[i + 3] = tempSPai[3];
                        tempIsPairedList[i + 3] = tempIsPaired[3];
                        i += 3;
                        needInsert = false;
                    }
                }
                else
                {
                    tempIndex++;
                    i--;
                }

            _handList = tempHandList;
            _isPaired = tempIsPairedList;
            _isAvailable = tempIsAvailableList;
        }

        /// <summary>
        ///     Performs the AnKan operation in the game of Mahjong.
        /// </summary>
        /// <param name="indices">The indices of the tiles in the hand that will form an AnKan.</param>
        /// <exception cref="ParameterNumberNotCorrectException">Thrown when the number of indices provided is not equal to 4.</exception>
        public void DoAnKan(params int[] indices)
        {
            if (indices.Length != 4) throw new ParameterNumberNotCorrectException();
            var tempSPai = new SPai[4];
            var tempIsPaired = new byte[4];
            tempSPai[0] = _handList[indices[0]];
            tempIsPaired[0] = 3;
            tempSPai[1] = _handList[indices[1]];
            tempIsPaired[1] = 1;
            tempSPai[2] = _handList[indices[2]];
            tempIsPaired[2] = 1;
            tempSPai[3] = _handList[indices[3]];
            tempIsPaired[3] = 3;
            DiscardCards(indices);
            var tempHandList = new SPai[_handList.Length];
            var tempIsPairedList = new byte[_isPaired.Length];
            var tempIsAvailableList = new bool[_isAvailable.Length];
            for (var i = 0; i < tempIsAvailableList.Length; i++) tempIsAvailableList[i] = true;
            var tempIndex = 0;
            var needInsert = true;
            for (var i = 0; i < _handList.Length; i++)
                if (_isAvailable[tempIndex])
                {
                    if (needInsert)
                        if (_isPaired[tempIndex] != 0)
                        {
                            tempHandList[i] = tempSPai[0];
                            tempIsPairedList[i] = tempIsPaired[0];
                            tempHandList[i + 1] = tempSPai[1];
                            tempIsPairedList[i + 1] = tempIsPaired[1];
                            tempHandList[i + 2] = tempSPai[2];
                            tempIsPairedList[i + 2] = tempIsPaired[2];
                            tempHandList[i + 3] = tempSPai[3];
                            tempIsPairedList[i + 3] = tempIsPaired[3];
                            i += 3;
                            needInsert = false;
                        }

                    tempHandList[i] = _handList[tempIndex];
                    tempIsPairedList[i] = _isPaired[tempIndex];
                    tempIndex++;
                    if (tempIndex == _handList.Length && needInsert)
                    {
                        tempHandList[i] = tempSPai[0];
                        tempIsPairedList[i] = tempIsPaired[0];
                        tempHandList[i + 1] = tempSPai[1];
                        tempIsPairedList[i + 1] = tempIsPaired[1];
                        tempHandList[i + 2] = tempSPai[2];
                        tempIsPairedList[i + 2] = tempIsPaired[2];
                        tempHandList[i + 3] = tempSPai[3];
                        tempIsPairedList[i + 3] = tempIsPaired[3];
                        i += 3;
                        needInsert = false;
                    }
                }
                else
                {
                    tempIndex++;
                    i--;
                }

            _handList = tempHandList;
            _isPaired = tempIsPairedList;
            _isAvailable = tempIsAvailableList;
        }

        #endregion

        #region Return sort hand method

        /// <summary>
        ///     Retrieves the sorted hand list of the player.
        /// </summary>
        /// <remarks>
        ///     This method is primarily used for operations in the game of Mahjong that require the player's hand to be sorted in
        ///     ascending order.
        /// </remarks>
        /// <returns>
        ///     An array of integers representing the player's sorted hand.
        /// </returns>
        public int[] GetSortedHandList()
        {
            SortHandList();
            return _sortedHandList;
        }

        /// <summary>
        ///     Retrieves the reverse sorted hand list of the player.
        /// </summary>
        /// <remarks>
        ///     This method is primarily used for operations in the game of Mahjong that require the player's hand to be sorted in
        ///     descending order.
        /// </remarks>
        /// <returns>
        ///     An array of integers representing the player's reverse sorted hand.
        /// </returns>
        public int[] GetReverseSortedHandList()
        {
            SortHandList();
            return _reverseSortedHandList;
        }


        // Temporary storage for the original hand list
        private int[] _tempOriginHandList;

        /// <summary>
        ///     Retrieves the original hand list of the player.
        /// </summary>
        /// <remarks>
        ///     This method is primarily used for operations in the game of Mahjong that require the player's original ( without
        ///     sorted ) hand list.
        ///     The original hand list is a list of indices representing the initial order of the player's hand.
        /// </remarks>
        /// <returns>
        ///     An array of integers representing the player's original hand list.
        /// </returns>
        public int[] GetOriginHandList()
        {
            if (_tempOriginHandList.Length == _handList.Length) return _tempOriginHandList;
            var result = new int[_handList.Length];
            for (var i = 0; i < _handList.Length; i++) result[i] = i;
            _tempOriginHandList = result;
            return result;
        }

        #endregion

        #region Check Chi & Pon & Kan

        /// <summary>
        ///     Checks if the player can perform a Chi operation in the game of Mahjong.
        /// </summary>
        /// <returns>
        ///     A SortedSet of SSimplePai objects representing the tiles that can be used to form a Chi.
        /// </returns>
        public SortedSet<SSimplePai> CheckCanChi()
        {
            var result = new SortedSet<SSimplePai>();
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                for (var j = 0; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[i].SimpleEqualWithoutJihai(_handList[j])) continue;
                    var diff = Mathf.Abs(_handList[i].Number - _handList[j].Number);
                    if (diff is > 2 or 0) continue;
                    var lowerNumber = Math.Min(_handList[i].Number, _handList[j].Number);
                    var higherNumber = Math.Max(_handList[i].Number, _handList[j].Number);
                    switch (diff)
                    {
                        case 1 when lowerNumber == 1:
                            result.Add(new SSimplePai(_handList[i].GetSimpleType(), 3));
                            break;
                        case 1 when higherNumber == 9:
                            result.Add(new SSimplePai(_handList[i].GetSimpleType(), 7));
                            break;
                        case 1:
                            result.Add(new SSimplePai(_handList[i].GetSimpleType(), higherNumber + 1));
                            result.Add(new SSimplePai(_handList[i].GetSimpleType(), lowerNumber - 1));
                            break;
                        case 2:
                            result.Add(new SSimplePai(_handList[i].GetSimpleType(), lowerNumber + 1));
                            break;
                    }
                }
            }

            return result;
        }

        /// <summary>
        ///     Checks if the player can perform a Chi operation with a specific tile in the game of Mahjong.
        /// </summary>
        /// <param name="pai">The tile (pai) to check for a possible Chi operation.</param>
        /// <returns>
        ///     A SortedSet of tuples representing the indices of the tiles in the hand that can form a Chi with the provided tile.
        ///     Returns null if the provided tile is a honor tile (Jihai).
        /// </returns>
        [CanBeNull]
        public SortedSet<(int, int)> CheckCanChi(SPai pai)
        {
            if (pai.isJihai()) return null;
            var result = new SortedSet<(int, int)>();
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                if (!_handList[i].SimpleEqualWithoutJihai(pai)) continue;
                if (Mathf.Abs(pai.Number - _handList[i].Number) is > 2 or 0) continue;
                var lowerNumber = Math.Min(pai.Number, _handList[i].Number);
                var higherNumber = Math.Max(pai.Number, _handList[i].Number);
                int[] targetNumbers;
                if (higherNumber - lowerNumber == 1)
                    targetNumbers = new[] { lowerNumber - 1, higherNumber + 1 };
                else
                    targetNumbers = new[] { lowerNumber + 1 };
                for (var j = 0; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[j].SimpleEqualWithoutJihai(pai)) continue;
                    if (Math.Abs(pai.Number - _handList[j].Number) is > 2 or 0) continue;
                    foreach (var target in targetNumbers)
                        if (pai.Number == target)
                            result.Add((i, j));
                }
            }

            return result;
        }

        /// <summary>
        ///     Checks if the player can perform a Pon operation in the game of Mahjong.
        /// </summary>
        /// <returns>
        ///     A SortedSet of SSimplePai objects representing the tiles that can be used to form a Pon.
        /// </returns>
        public SortedSet<SSimplePai> CheckCanPon()
        {
            var result = new SortedSet<SSimplePai>();
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                for (var j = i + 1; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[i].SimpleEqual(_handList[j])) continue;
                    result.Add(new SSimplePai(_handList[i].GetSimpleType(), _handList[i].Number));
                }
            }

            return result;
        }

        /// <summary>
        ///     Checks if the player can perform a Pon operation with a specific tile in the game of Mahjong.
        /// </summary>
        /// <param name="pai">The tile (pai) to check for a possible Pon operation.</param>
        /// <returns>
        ///     A tuple representing the indices of the tiles in the hand that can form a Pon with the provided tile.
        ///     Returns (-1, -1) if no valid Pon operation can be performed.
        /// </returns>
        public (int, int) CheckCanPon(SPai pai)
        {
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                if (!_handList[i].SimpleEqual(pai)) continue;
                for (var j = i + 1; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[i].SimpleEqual(_handList[j])) continue;
                    return (i, j);
                }
            }

            return (-1, -1);
        }

        /// <summary>
        ///     Checks if the player can perform a Kan operation in the game of Mahjong.
        /// </summary>
        /// <returns>
        ///     A SortedSet of SSimplePai objects representing the tiles that can be used to form a Kan.
        /// </returns>
        public SortedSet<SSimplePai> CheckCanKan()
        {
            var result = new SortedSet<SSimplePai>();
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                for (var j = i + 1; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[i].SimpleEqual(_handList[j])) continue;
                    for (var k = j + 1; k < _handList.Length; k++)
                    {
                        if (_isPaired[k] > 0) break;
                        if (!_isAvailable[k] || !_handList[i].SimpleEqual(_handList[k])) continue;
                        result.Add(new SSimplePai(_handList[i].GetSimpleType(), _handList[i].Number));
                    }
                }
            }

            return result;
        }

        /// <summary>
        ///     Checks if the player can perform a Kan operation with a specific tile in the game of Mahjong.
        /// </summary>
        /// <param name="pai">The tile (pai) to check for a possible Kan operation.</param>
        /// <returns>
        ///     A tuple representing the indices of the tiles in the hand that can form a Kan with the provided tile.
        ///     Returns (-1, -1, -1) if no valid Kan operation can be performed.
        /// </returns>
        public (int, int, int) CheckCanKan(SPai pai)
        {
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                if (!_handList[i].SimpleEqual(pai)) continue;
                for (var j = i + 1; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[i].SimpleEqual(_handList[j])) continue;
                    for (var k = j + 1; k < _handList.Length; k++)
                    {
                        if (_isPaired[k] > 0) break;
                        if (!_isAvailable[k] || !_handList[i].SimpleEqual(_handList[k])) continue;
                        return (i, j, k);
                    }
                }
            }

            return (-1, -1, -1);
        }

        /// <summary>
        ///     Checks if the player can perform an AddKan operation in the game of Mahjong.
        /// </summary>
        /// <returns>
        ///     A SortedSet of SSimplePai objects representing the tiles that can be used to form an AddKan.
        /// </returns>
        public SortedSet<SSimplePai> CheckCanAddKan()
        {
            var result = new SortedSet<SSimplePai>();
            for (var i = 0; i < _handList.Length - 2; i++)
            {
                if (_isPaired[i] == 0) continue;
                if (!_handList[i].SimpleEqual(_handList[i + 1])) continue;
                if (!_handList[i].SimpleEqual(_handList[i + 2]) &&
                    _handList[i].SimpleEqual(_handList[i - 1])) continue;
                if (i + 3 < _handList.Length && _handList[i].SimpleEqual(_handList[i + 3])) continue;
                result.Add(new SSimplePai(_handList[i].GetSimpleType(), _handList[i].Number));
            }

            return result;
        }

        /// <summary>
        ///     Checks if the player can perform an AddKan operation with a specific tile in the game of Mahjong.
        /// </summary>
        /// <param name="pai">The tile (pai) to check for a possible AddKan operation.</param>
        /// <returns>
        ///     An integer representing the index of the tile in the hand that can be used to form an AddKan with the provided
        ///     tile.
        ///     Returns -1 if no valid AddKan operation can be performed.
        /// </returns>
        public int CheckCanAddKan(SPai pai)
        {
            for (var i = 0; i < _handList.Length; i++)
            {
                if (_isPaired[i] != 2) continue;
                if (!_isAvailable[i] || !_handList[i].SimpleEqual(pai)) continue;
                if (!_handList[i].SimpleEqual(_handList[i + 1])) return i;
            }

            return -1;
        }

        /// <summary>
        ///     Checks if the player can perform an AnKan operation in the game of Mahjong.
        /// </summary>
        /// <returns>
        ///     A tuple representing the indices of the tiles in the hand that can form an AnKan.
        ///     Returns (-1, -1, -1, -1) if no valid AnKan operation can be performed.
        /// </returns>
        public (int, int, int, int) CheckCanAnKan()
        {
            for (var i = 0; i < _handList.Length - 3; i++)
            {
                if (_isPaired[i] > 0) break;
                if (!_isAvailable[i]) continue;
                for (var j = i + 1; j < _handList.Length; j++)
                {
                    if (_isPaired[j] > 0) break;
                    if (!_isAvailable[j] || !_handList[i].SimpleEqual(_handList[j])) continue;
                    for (var k = j + 1; k < _handList.Length; k++)
                    {
                        if (_isPaired[k] > 0) break;
                        if (!_isAvailable[k] || !_handList[i].SimpleEqual(_handList[k])) continue;
                        for (var l = k + 1; l < _handList.Length; l++)
                        {
                            if (_isPaired[l] > 0) break;
                            if (!_isAvailable[l] || !_handList[i].SimpleEqual(_handList[l])) continue;
                            return (i, j, k, l);
                        }
                    }
                }
            }

            return (-1, -1, -1, -1);
        }

        #endregion
    }
}