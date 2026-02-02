using System.Collections.Generic;

namespace Services.BehaviorControlService.GoalOrientedActionPlanning
{
    /// <summary>
    ///     The IGoalOrientedActionPlanning interface represents an agent that can plan and execute actions.
    /// </summary>
    public interface IGoalOrientedActionPlanning
    {
        /// <summary>
        ///     Gets the current state of the world as perceived by the agent.
        /// </summary>
        /// <returns>A HashSet of key-value pairs representing the world state.</returns>
        HashSet<KeyValuePair<string, object>> GetWorldState();

        /// <summary>
        ///     Creates the goal state that the agent will aim to achieve.
        /// </summary>
        /// <returns>A HashSet of key-value pairs representing the goal state.</returns>
        HashSet<KeyValuePair<string, object>> CreateGoalState();

        /// <summary>
        ///     Called when the plan fails to find a sequence of actions that leads to the goal.
        /// </summary>
        /// <param name="failedGoal">The goal that could not be achieved.</param>
        void PlanFailed(HashSet<KeyValuePair<string, object>> failedGoal);

        /// <summary>
        ///     Called when the plan finds a sequence of actions that leads to the goal.
        /// </summary>
        /// <param name="goal">The goal that has been achieved.</param>
        /// <param name="actions">The queue of actions that will achieve the goal.</param>
        void PlanFound(HashSet<KeyValuePair<string, object>> goal, Queue<GoalOrientedActionPlanningAction> actions);

        /// <summary>
        ///     Called when all actions have been performed.
        /// </summary>
        void ActionsFinished();

        /// <summary>
        ///     Called when the plan is aborted.
        /// </summary>
        /// <param name="aborter">The action that caused the plan to be aborted.</param>
        void PlanAborted(GoalOrientedActionPlanningAction aborter);

        /// <summary>
        ///     Moves the agent towards the target of the next action.
        /// </summary>
        /// <param name="nextActionPlanningAction">The next action that the agent will perform.</param>
        /// <returns>A boolean indicating whether the agent successfully moved towards the target.</returns>
        bool MoveAgent(GoalOrientedActionPlanningAction nextActionPlanningAction);
    }
}