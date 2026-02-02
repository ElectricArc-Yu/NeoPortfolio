using UnityEngine;

namespace Services.BehaviorControlService.GoalOrientedActionPlanning
{
    /// <summary>
    ///     The GoalOrientedActionPlanningAction abstract class represents an action that a GOAP agent can perform.
    /// </summary>
    public abstract class GoalOrientedActionPlanningAction
    {
        /// <summary>
        ///     The name of the action.
        /// </summary>
        public string ActionName = "Action";

        /// <summary>
        ///     The cost of performing the action.
        /// </summary>
        public float Cost = 1.0f;

        /// <summary>
        ///     The duration of the action.
        /// </summary>
        public float Duration = 0;

        /// <summary>
        ///     The effects of the action on the world state.
        /// </summary>
        public SWorldState[] Effects;

        /// <summary>
        ///     A flag indicating whether the agent must be in range to perform the action.
        /// </summary>
        public bool InRange = false;

        /// <summary>
        ///     The preconditions that must be met for the action to be performed.
        /// </summary>
        public SWorldState[] Preconditions;

        /// <summary>
        ///     The target GameObject of the action.
        /// </summary>
        public GameObject Target;

        /// <summary>
        ///     The tag of the target GameObject.
        /// </summary>
        public string TargetTag;

        /// <summary>
        ///     Checks if the action is done.
        /// </summary>
        /// <returns>A boolean indicating whether the action is done.</returns>
        public abstract bool IsDone();

        /// <summary>
        ///     Checks the procedural precondition for the action.
        /// </summary>
        /// <param name="agent">The agent that will perform the action.</param>
        /// <returns>A boolean indicating whether the procedural precondition is met.</returns>
        public abstract bool CheckProceduralPrecondition(GameObject agent);

        /// <summary>
        ///     Performs the action.
        /// </summary>
        /// <param name="agent">The agent that will perform the action.</param>
        /// <returns>A boolean indicating whether the action was performed successfully.</returns>
        public abstract bool Perform(GameObject agent);

        /// <summary>
        ///     Checks if the agent needs to be in range to perform the action.
        /// </summary>
        /// <returns>A boolean indicating whether the agent needs to be in range.</returns>
        public abstract bool RequiresInRange();

        /// <summary>
        ///     Resets the action.
        /// </summary>
        public abstract void Reset();
    }
}