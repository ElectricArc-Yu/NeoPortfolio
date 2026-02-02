using System.Collections.Generic;
using System.Text;
using Const;
using Enums.MatchEnums;
using Enums.PlayerEnums;
using Enums.ReactEnums;
using Enums.RuleEnums;
using Logic.Class;
using Logic.DTO;
using Logic.Enums;
using Logic.Extensions;
using Logic.Structs;
using Logic.Util;
using Services.EventDispatcherService;
using Sirenix.OdinInspector;
using UnityEngine;
using Util;

namespace Logic.Manager
{
    public class HostMatchManager : ManagerBase
    {
        #region Preparation

        private void PreparationProgress()
        {
            var dto = new MatchRuleDto(_matchRule);
            var matchRuleSerialize = dto.Serialize();
            // Load Current Deck
            var tempstr = "";
            switch (_matchRule.GameModeGetter())
            {
                case EGameMode.FourPlayer:
                    tempstr = "PaiList/FourPlayer/";
                    break;
                case EGameMode.ThreePlayer:
                    tempstr = "PaiList/ThreePlayer/";
                    break;
                case EGameMode.TwoPlayer:
                    tempstr = "PaiList/TwoPlayer/";
                    break;
            }

            switch (_matchRule.AkadoraTypeGetter())
            {
                case EAkadoraType.None:
                    tempstr += "NoneAka/";
                    break;
                case EAkadoraType.TwoAka:
                    tempstr += "TwoAka/";
                    break;
                case EAkadoraType.ThreeAka:
                    tempstr += "ThreeAka/";
                    break;
                case EAkadoraType.FourAka:
                    tempstr += "FourAka/";
                    break;
            }

            switch (_matchRule.AdditionRuleGetter())
            {
                case EAdditionRule.None:
                    tempstr += "DefaultList";
                    break;
            }

            // Cache the match card lib
            _matchCardLibrary = ReadList.ListReader(tempstr);
            _matchState = EMatchState.NeedShuffle;
        }

        #endregion

        #region DrawCard

        private void DrawCardProgress()
        {
            var currentDraw = _currentDeck.AllOfPai.PopOne();
            _matchHandListContainer[_matchPlayerPositionAndID[_currentDrawer]].AddOnePai(currentDraw);
            _currentRiverRemain--;
            if (_currentRiverRemain == 0) _matchState = EMatchState.RoundEnd;
            _matchState = EMatchState.Thinking;
            _discardIndex = 0;
        }

        #endregion

        #region Implement

        public override int ScriptOrder => ScriptPriorityLib.HostMatchManager;
        private DiceManager _diceManager;
        private EPlayerPosition _selfPosition;

        /// <summary>
        /// Initialization method: Sets the initial match state and generates the random seed and salt.
        /// Ensures match randomness and replayability.
        /// </summary>
        public override void OnInit()
        {
            // 1. Set state to "BeforeCreateTable"
            _matchState = EMatchState.BeforeCreateTable;
            // 2. Generate unique Match UUID and random seeds
            MatchUUID = SeedGenerator.GenerateUUID();
            var temp = SeedGenerator.GenerateRandomString(64, MatchUUID);
            _matchSeed = temp.Substring(0, 32);
            _matchSalt = temp.Substring(32, 32).ToCharArray();
            // 3. Initial banker is set to East
            _currentBanker = EPlayerPosition.East;
            _currentRoundWind = EPlayerPosition.East;
            _currentDrawer = _currentBanker;
            _currentRoundProgress = 0;
            // 4. Subscribe to dice stop events
            EventDispatcher.Instance.Subscribe<int>(EventTypeAndNameLib.DiceEvents,
                EventTypeAndNameLib.OnAllDiceStoppedRolling, HandleAllDiceStoppedRolling);
            // 5. Get all player IDs and initialize hand/discard containers
            var steamIDs = EventDispatcher.Instance.Dispatch<string[]>(EventTypeAndNameLib.GameFlowEvents,
                EventTypeAndNameLib.GetAllPlayerID);
            _matchHandListContainer = new HandListContainer(steamIDs);
            _matchDiscardedListContainer = new DiscardedListContainer(steamIDs);
            _matchPlayerPositionAndID = new SPlayerPositionAndID(steamIDs);
            _matchPlayerPositionAndID.MoveToNextRound();
            // 6. Request and apply match rules
            _matchRule = EventDispatcher.Instance.Dispatch<string, MatchRule>(EventTypeAndNameLib.MatchRuleEvents,
                EventTypeAndNameLib.RequestMatchRule, "");
            _roundTime = new RoundTime(_matchRule.BackUpTimeGetter(), steamIDs);
            _roundThinkingTime = _matchRule.ThinkingTimeGetter();
        }

        /// <summary>
        /// Per-frame update: Executes corresponding driver logic based on current match state (EMatchState).
        /// This is a typical state machine architecture ensuring game logic runs in a single-threaded/deterministic environment.
        /// </summary>
        public override void OnUpdate(float deltaTime)
        {
            switch (_matchState)
            {
                case EMatchState.BeforeCreateTable: break;
                case EMatchState.Prepare:
                    PreparationProgress(); // Preparation phase (loading deck models, etc.)
                    break;
                case EMatchState.NeedShuffle:
                    ShuffleProgress();     // Shuffling phase (shuffling based on random seed)
                    break;
                case EMatchState.AfterShuffle:
                    RollingTheDiceProgress(); // Roll the dice
                    break;
                case EMatchState.GenerateRoundDeck:
                    GenerateRoundDeckProgress(); // Generate the wall for the current round (set Dora positions, etc.)
                    break;
                case EMatchState.StartOfInit:
                    InitHandProgress();    // 初始配牌阶段
                    break;
                // ... 更多状态 TODO: 摸打循环逻辑
            }
        }

        public override void OnRelease()
        {
            EventDispatcher.Instance.Unsubscribe<int>(EventTypeAndNameLib.DiceEvents,
                EventTypeAndNameLib.OnAllDiceStoppedRolling, HandleAllDiceStoppedRolling);
        }

        #endregion

        #region Property

        private List<SPai> _matchCardLibrary;
        private MatchRule _matchRule;
        private EPlayerPosition _currentRoundWind;
        private SPlayerPositionAndID _matchPlayerPositionAndID;
        private HandListContainer _matchHandListContainer;
        private DiscardedListContainer _matchDiscardedListContainer;
        private RoundTime _roundTime;
        private int _roundThinkingTime;

        #endregion

        #region MatchRandomer

        public string MatchUUID;
        private string _matchSeed;
        private char[] _matchSalt;
        private int _saltLength = 2;
        private int _saltPointer;

        public string GetNewSalt()
        {
            var result = new StringBuilder(_saltLength);
            for (var i = 0; i < _saltLength; i++)
            {
                var tempInt = (_saltPointer + i) % _matchSalt.Length;
                var c = _matchSalt[tempInt];
                result.Append(c);
            }

            _saltPointer++;
            if (_saltPointer >= _matchSalt.Length)
            {
                _saltPointer = 0;
                _saltLength++;
            }

            return result.ToString();
        }

        #endregion

        #region Shuffle

        private Deck _currentDeck;

        [SerializeField] private List<SPai> _pais;

        private void ShuffleProgress()
        {
            // Generate the RDM base on the rule
            var RDM = new RuleDeckModifier
            {
                Seed = _matchSeed + GetNewSalt(),
                AllOfPaiLength = _matchCardLibrary.Count,
                RiverLength = _matchCardLibrary.Count - 14
            };
            _currentDeck = DeckGeneratorUtility.DeckGenerator(RDM, _matchCardLibrary);
            _pais = _currentDeck.AllOfPai.GetAll();
            _matchState = EMatchState.AfterShuffle;
            // -----------------------------------------
            // Generate Networking Transfer Object
            var convertToSSimplePais = PaiConverter.ConvertToSSimplePais(_pais);
            var dto = new RiverDto(convertToSSimplePais);
            var riverSerialize = dto.Serialize();
        }

        #endregion

        #region RollingTheDiceSequence

        private bool _nowWaitingDiceResult;

        [ShowInInspector] private int _roundDice;

        private void RollingTheDiceProgress()
        {
            if (_nowWaitingDiceResult == false)
            {
                EventDispatcher.Instance.Dispatch(EventTypeAndNameLib.DiceEvents, EventTypeAndNameLib.OnNeedRollDice);
                _nowWaitingDiceResult = true;
            }
        }

        private void HandleAllDiceStoppedRolling(int result)
        {
            _roundDice = result;
            _matchState = EMatchState.GenerateRoundDeck;
            _nowWaitingDiceResult = false;
        }

        #endregion

        #region Generate Round Deck Progress

        private EPlayerPosition _currentBanker;

        private void GenerateRoundDeckProgress()
        {
            //------------------------ Lock the deck of current round -----------------------------------
            var wangpai = _currentDeck.AllOfPai.Freeze((int)_currentBanker, _roundDice);
            var fliper = false;
            var pointer = 0;
            for (var i = 0; i < wangpai.Length; i++)
            {
                var tempPai = wangpai[i];
                if (i < 10)
                {
                    if (fliper)
                    {
                        tempPai.Owner = EPaiOwner.DoraPointer;
                        _currentDeck.DoraPointer.Push(tempPai, false);
                        fliper = !fliper;
                    }
                    else
                    {
                        tempPai.Owner = EPaiOwner.WuraDoraPointer;
                        _currentDeck.WuraDoraPointer.Push(tempPai, false);
                        fliper = !fliper;
                    }
                }
                else
                {
                    tempPai.Owner = EPaiOwner.KanReward;
                    _currentDeck.KanReward.Push(tempPai);
                    _currentDeck.KanRewardBackup[pointer] = tempPai;
                    pointer++;
                }
            }

            _currentRiverRemain = _currentDeck.River.Length;
            //------------------------ Generate the Dora Message -------------------------------------
            var temp = new List<SSimplePai>();
            foreach (var pai in _currentDeck.WuraDoraPointer.GetKeys()) temp.Add(PaiConverter.SPaiToSSimplePai(pai));
            var dto = new PaiListDto(temp);
            var wuraDoraSerialize = dto.Serialize(); // Send this to the client
            temp = new List<SSimplePai>();
            foreach (var pai in _currentDeck.DoraPointer.GetKeys()) temp.Add(PaiConverter.SPaiToSSimplePai(pai));
            dto = new PaiListDto(temp);
            var doraSerialize = dto.Serialize(); // Send this to the client
            temp = new List<SSimplePai>();
            foreach (var pai in _currentDeck.KanReward) temp.Add(PaiConverter.SPaiToSSimplePai(pai));
            dto = new PaiListDto(temp);
            var kanRewardSerialize = dto.Serialize(); // Send this to the client
            //------------------------ Network sync and recheck -------------------------------------

            //------------------------ Changed to draw phase    -------------------------------------
            _matchState = EMatchState.StartOfInit;
        }

        #endregion

        #region Init Hand Progress

        private readonly float _drawFourAwaitTime = 0.6f;
        private float _drawFourAwaitTimer;
        private EPlayerPosition _currentDrawer;
        private EDrawType _currentDrawType;
        private EDiscardType _currentDiscardType;

        /// <summary>
        ///     0 ~ 2: Draw Four Card, 3: Draw One Card, 4: Draw One Card and -1: End of the init
        /// </summary>
        private int _currentRoundProgress;

        private int _currentRiverRemain;

        private void InitHandProgress()
        {
            //---------------------- Generate Default Card -------------------------------------------------
            if (_drawFourAwaitTimer < _drawFourAwaitTime)
            {
                _drawFourAwaitTimer += Time.deltaTime;
                return;
            }

            _drawFourAwaitTimer = 0;
            //---------------------- Draw Four Card --------------------------------------------------------
            if (_currentRoundProgress <= 2)
            {
                var drawFour = _currentDeck.AllOfPai.PopFour();
                _matchHandListContainer[_matchPlayerPositionAndID[_currentDrawer]].AddFourPai(drawFour);
                NextDrawer();
                if (_currentDrawer == _currentBanker) _currentRoundProgress++;
                _currentRiverRemain -= 4;
            }

            //---------------------- Draw One Card ---------------------------------------------------------
            if (_currentRoundProgress == 3)
            {
                var drawOne = _currentDeck.AllOfPai.PopOne();
                _matchHandListContainer[_matchPlayerPositionAndID[_currentDrawer]].AddOnePai(drawOne, 13);
                NextDrawer();
                if (_currentDrawer == _currentBanker)
                {
                    _currentRoundProgress++;
                    _currentRoundProgress = -1;
                }

                _currentRiverRemain--;
            }

            //---------------------- End of the init -------------------------------------------------------
            if (_currentRoundProgress == -1)
            {
                _matchState = EMatchState.EndOfInit;
                _matchState = EMatchState.DrawPhase;
            }
        }

        private void NextDrawer()
        {
            switch (_currentDrawer)
            {
                case EPlayerPosition.East:
                    _currentDrawer = EPlayerPosition.South;
                    break;
                case EPlayerPosition.South:
                    _currentDrawer = EPlayerPosition.West;
                    break;
                case EPlayerPosition.West:
                    _currentDrawer = EPlayerPosition.North;
                    break;
                case EPlayerPosition.North:
                    _currentDrawer = EPlayerPosition.East;
                    break;
            }
        }

        #endregion

        #region Thinking

        private int _thinkingTimer;

        private void ThinkingProgress(float deltaTime)
        {
            _thinkingTimer += (int)deltaTime;
            if (_thinkingTimer >= _roundThinkingTime)
            {
                if (_roundTime[_matchPlayerPositionAndID[_currentDrawer]] <= 0) _matchState = EMatchState.Discard;
                _roundTime[_matchPlayerPositionAndID[_currentDrawer]] -= deltaTime;
            }
        }

        #endregion

        #region Discard

        private int _discardIndex;

        private void DiscardProgress()
        {
            var tempDiscard = _matchHandListContainer[_matchPlayerPositionAndID[_currentDrawer]]
                .ReplaceOnePai(_discardIndex);
            _matchDiscardedListContainer[_matchPlayerPositionAndID[_currentDrawer]].AddPai(tempDiscard);
            _matchState = EMatchState.ReactWithDiscard;
        }

        #endregion

        #region React

        private void WaitingReactProgress()
        {
            //TODO : Network Sync
        }

        private void ReactProgress(EReactType reactType, SReactOfDiscardedPaiInfo reactOfDiscardedPaiInfo,
            ESignOutType signOutType)
        {
            var temp = _matchDiscardedListContainer[_matchPlayerPositionAndID[_currentDrawer]]
                .SignOutRecentOne(signOutType);
            switch (reactType)
            {
                case EReactType.Chi:
                    _matchHandListContainer[reactOfDiscardedPaiInfo.TargetSteamID].DoChi(reactOfDiscardedPaiInfo.Pai,
                        _matchPlayerPositionAndID[reactOfDiscardedPaiInfo.TargetSteamID]
                            .CheckRelativelyPosition(_matchPlayerPositionAndID[reactOfDiscardedPaiInfo.SourceSteamID]),
                        reactOfDiscardedPaiInfo.Indices);
                    break;
                case EReactType.Pon:
                    _matchHandListContainer[reactOfDiscardedPaiInfo.TargetSteamID].DoPon(reactOfDiscardedPaiInfo.Pai,
                        _matchPlayerPositionAndID[reactOfDiscardedPaiInfo.TargetSteamID]
                            .CheckRelativelyPosition(_matchPlayerPositionAndID[reactOfDiscardedPaiInfo.SourceSteamID]),
                        reactOfDiscardedPaiInfo.Indices);
                    break;
                case EReactType.Kan:
                    _matchHandListContainer[reactOfDiscardedPaiInfo.TargetSteamID].DoKan(reactOfDiscardedPaiInfo.Pai,
                        _matchPlayerPositionAndID[reactOfDiscardedPaiInfo.TargetSteamID]
                            .CheckRelativelyPosition(_matchPlayerPositionAndID[reactOfDiscardedPaiInfo.SourceSteamID]),
                        reactOfDiscardedPaiInfo.Indices);
                    break;
                case EReactType.Ron:
                    _matchState = EMatchState.HasRon;
                    break;
            }

            _matchState = EMatchState.DrawPhase;
        }

        private void NoReactProgress()
        {
            _matchState = EMatchState.DrawPhase;
        }

        #endregion


        #region MatchState

        /// <summary>
        ///     No setter for Match State, This property does not allow external changes
        /// </summary>
        private EMatchState _matchState;

        /// <summary>
        ///     Return the current match state, always using in state check.
        /// </summary>
        /// <returns>The current state of the match</returns>
        public EMatchState MatchStateGetter()
        {
            return _matchState;
        }

        public void StopWaiting()
        {
            if (!TraceUtil.GetCallerName().Equals("GameManager")) return;
            _matchState += 1;
        }

        #endregion
    }
}