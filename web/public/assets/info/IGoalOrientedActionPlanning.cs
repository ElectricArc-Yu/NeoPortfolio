using System.Collections.Generic;

namespace Services.BehaviorControlService.GoalOrientedActionPlanning
{
    /// <summary>
    /// IGoalOrientedActionPlanning interface.
    /// Defines the standard process for interaction between an AI agent and the GOAP planner.
    /// Objects implementing this interface can use the planner to automatically derive a path to reach a "goal state" based on the current "world state."
    /// </summary>
    public interface IGoalOrientedActionPlanning
    {
        /// <summary>
        /// Retrieves the current world state as perceived by the AI agent.
        /// The planner uses this as the starting point for decision-making.
        /// </summary>
        /// <returns>A collection of key-value pairs representing the world state (e.g., "HasTile": true).</returns>
        HashSet<KeyValuePair<string, object>> GetWorldState();

        /// <summary>
        /// Creates the goal state that the AI currently wants to achieve.
        /// For example: if the goal is to "Win the round," the state might be "GoalAchieved": true.
        /// </summary>
        /// <returns>A collection of key-value pairs representing the goal state.</returns>
        HashSet<KeyValuePair<string, object>> CreateGoalState();

        /// <summary>
        /// Called when the planner cannot find a sequence of actions to reach the goal.
        /// Logic for finding alternative goals or re-scanning the environment can be executed here.
        /// </summary>
        /// <param name="failedGoal">The goal state that could not be reached.</param>
        void PlanFailed(HashSet<KeyValuePair<string, object>> failedGoal);

        /// <summary>
        /// Called when the planner successfully finds an action path.
        /// </summary>
        /// <param name="goal">The goal to be achieved.</param>
        /// <param name="actions">The planned action queue, which the AI will execute in order.</param>
        void PlanFound(HashSet<KeyValuePair<string, object>> goal, Queue<GoalOrientedActionPlanningAction> actions);

        /// <summary>
        /// Called when all actions in the plan have been successfully executed.
        /// </summary>
        void ActionsFinished();

        /// <summary>
        /// Called when an ongoing plan is aborted due to certain reasons (e.g., environmental changes, mid-execution failure).
        /// </summary>
        /// <param name="aborter">The specific action that caused the plan to be interrupted.</param>
        void PlanAborted(GoalOrientedActionPlanningAction aborter);

        /// <summary>
        /// Core method for controlling the AI agent's movement toward an action's target point.
        /// </summary>
        /// <param name="nextActionPlanningAction">The current next action, containing target location information.</param>
        /// <returns>Returns true if the agent has reached the target range via movement.</returns>
        bool MoveAgent(GoalOrientedActionPlanningAction nextActionPlanningAction);
    }
}