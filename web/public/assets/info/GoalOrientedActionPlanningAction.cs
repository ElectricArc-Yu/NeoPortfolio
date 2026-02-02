using UnityEngine;

namespace Services.BehaviorControlService.GoalOrientedActionPlanning
{
    /// <summary>
    /// GoalOrientedActionPlanningAction abstract class.
    /// Represents an "action" within the GOAP (Goal-Oriented Action Planning) system.
    /// Each action includes preconditions and effects.
    /// The AI planner uses these conditions to chain together an optimal sequence of actions, much like solving a puzzle.
    /// </summary>
    public abstract class GoalOrientedActionPlanningAction
    {
        /// <summary>
        /// The name of the action, used for debugging and editor display.
        /// </summary>
        public string ActionName = "Action";

        /// <summary>
        /// The cost of the action. The planner will seek the path with the lowest (optimal) total cost.
        /// </summary>
        public float Cost = 1.0f;

        /// <summary>
        /// The estimated duration of the action execution.
        /// </summary>
        public float Duration = 0;

        /// <summary>
        /// The changes produced in the "world state" after executing this action.
        /// For example: if the action is "Pick up Mahjong tile," the Effect might be "HasTile: true."
        /// </summary>
        public SWorldState[] Effects;

        /// <summary>
        /// Indicates whether the action requires the AI to move within a specific range to execute.
        /// </summary>
        public bool InRange = false;

        /// <summary>
        /// The world state conditions that must be met before this action can be activated.
        /// For example: if the action is "Discard Tile," the Precondition must include "IsMyTurn: true."
        /// </summary>
        public SWorldState[] Preconditions;

        /// <summary>
        /// The target object for the action (optional).
        /// </summary>
        public GameObject Target;

        /// <summary>
        /// The tag of the target object, used for dynamically searching for targets.
        /// </summary>
        public string TargetTag;

        /// <summary>
        /// Determines if the action has been completed.
        /// </summary>
        /// <returns>Returns true to indicate the task has ended.</returns>
        public abstract bool IsDone();

        /// <summary>
        /// Procedural precondition check.
        /// Beyond static world states, complex logic checks (e.g., distance calculations) can be written here.
        /// </summary>
        /// <param name="agent">The AI agent performing the action.</param>
        public abstract bool CheckProceduralPrecondition(GameObject agent);

        /// <summary>
        /// Core method: Executes the specific logic.
        /// Write specific AI behaviors here (e.g., control animations, calculate scores).
        /// </summary>
        /// <param name="agent">The AI agent performing the action.</param>
        /// <returns>Returns true if execution was successful.</returns>
        public abstract bool Perform(GameObject agent);

        /// <summary>
        /// Queries if this action must require being within range of the target.
        /// </summary>
        public abstract bool RequiresInRange();

        /// <summary>
        /// Resets the action state to allow for reuse.
        /// </summary>
        public abstract void Reset();
    }
}