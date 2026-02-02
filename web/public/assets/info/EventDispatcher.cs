#region Editor

// ---------------------------------
// Class : EventDispatcher
// Creator : Electric Arc( Yu chenhaoran)
// Co-Workers : None
// Create Date : 2024/04/29
// File Version : v 1.0.0
// ---------------------------------

#endregion

using System;
using System.Collections.Generic;

namespace Services.EventDispatcherService
{
    /// <summary>
    ///     The EventDispatcher class is a singleton that manages event subscription, unsubscription, and dispatching.
    /// </summary>
    public sealed class EventDispatcher
    {
        private static EventDispatcher m_instance;

        private EventDispatcher()
        {
        } // Private constructor to prevent instantiation

        /// <summary>
        ///     Singleton instance of the EventDispatcher class.
        /// </summary>
        public static EventDispatcher Instance
        {
            get
            {
                if (m_instance == null) m_instance = new EventDispatcher();
                return m_instance;
            }
        }

        #region Delegates do not return a value

        // Dictionary to store event handlers
        private readonly Dictionary<string, Dictionary<string, Delegate>> _eventTypeDictionary = new();

        #region Delegate without parameter passing

        /// <summary>
        ///     Subscribes a handler to an event.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Subscribe(string eventType, string eventName, Action handler)
        {
            AddHandler(eventType, eventName, handler);
        }

        /// <summary>
        ///     Unsubscribes a handler from an event.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Unsubscribe(string eventType, string eventName, Action handler)
        {
            RemoveHandler(eventType, eventName, handler);
        }

        /// <summary>
        ///     Dispatches an event.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        public void Dispatch(string eventType, string eventName)
        {
            if (_eventTypeDictionary.ContainsKey(eventType))
                if (_eventTypeDictionary[eventType].TryGetValue(eventName, out var action))
                    ((Action)action)?.Invoke();
        }

        #endregion

        #region Delegate with parameter passing

        /// <summary>
        ///     Subscribes a handler to an event with a parameter.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Subscribe<T>(string eventType, string eventName, Action<T> handler)
        {
            AddHandler(eventType, eventName, handler);
        }

        /// <summary>
        ///     Unsubscribes a handler from an event with a parameter.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Unsubscribe<T>(string eventType, string eventName, Action<T> handler)
        {
            RemoveHandler(eventType, eventName, handler);
        }

        /// <summary>
        ///     Dispatches an event with a parameter.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="eventParam">The parameter for the event.</param>
        public void Dispatch<T>(string eventType, string eventName, T eventParam)
        {
            if (_eventTypeDictionary.ContainsKey(eventType))
                if (_eventTypeDictionary[eventType].TryGetValue(eventName, out var action))
                    ((Action<T>)action)?.Invoke(eventParam);
        }

        #endregion

        #region Delegate with multiple parameter passing

        /// <summary>
        ///     Subscribes a handler to an event with multiple parameters.
        /// </summary>
        /// <example>
        ///     <code>
        /// EventDispatcher.Instance.Subscribe("TestEvent", "OnTest", (params) =>
        /// {
        /// //Handle the event
        /// });
        /// </code>
        /// </example>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Subscribe(string eventType, string eventName, Action<object[]> handler)
        {
            AddHandler(eventType, eventName, handler);
        }

        /// <summary>
        ///     Unsubscribes a handler from an event with multiple parameters.
        /// </summary>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Unsubscribe(string eventType, string eventName, Action<object[]> handler)
        {
            RemoveHandler(eventType, eventName, handler);
        }

        /// <summary>
        ///     Dispatches an event with multiple parameters.
        /// </summary>
        /// <example>
        ///     <code>
        /// EventDispatcher.Instance.Dispatch("TestEvent", "OnTest", param1, param2, param3, ..., paramN);
        /// </code>
        /// </example>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="eventParams">The parameters for the event.</param>
        public void Dispatch(string eventType, string eventName, params object[] eventParams)
        {
            if (_eventTypeDictionary.ContainsKey(eventType))
                if (_eventTypeDictionary[eventType].TryGetValue(eventName, out var action))
                    ((Action<object[]>)action)?.Invoke(eventParams);
        }

        #endregion

        #region Handler

        /// <summary>
        /// Core method: Adds a handler to a specified event type and name.
        /// </summary>
        /// <param name="eventType">The category of the event (e.g., "UI", "Network").</param>
        /// <param name="eventName">The specific event name (e.g., "OnScoreChanged").</param>
        /// <param name="handler">The callback delegate.</param>
        private void AddHandler(string eventType, string eventName, Delegate handler)
        {
            // 1. If the event category doesn't exist in the dictionary, create a new sub-dictionary.
            if (!_eventTypeDictionary.ContainsKey(eventType))
                _eventTypeDictionary.Add(eventType, new Dictionary<string, Delegate>());

            var eventDictionary = _eventTypeDictionary[eventType];
            // 2. If the specific event name doesn't exist in the sub-dictionary, initialize the key.
            if (!eventDictionary.ContainsKey(eventName)) eventDictionary.Add(eventName, null);
            // 3. Use Delegate.Combine to merge the new handler into the multicast delegate.
            eventDictionary[eventName] = Delegate.Combine(eventDictionary[eventName], handler);
        }

        /// <summary>
        /// Core method: Removes a handler from a specified event type and name.
        /// </summary>
        private void RemoveHandler(string eventType, string eventName, Delegate handler)
        {
            // 1. Check if the category and specific event exist.
            if (_eventTypeDictionary.ContainsKey(eventType) && _eventTypeDictionary[eventType].ContainsKey(eventName))
            {
                var eventDictionary = _eventTypeDictionary[eventType];
                // 2. Use Delegate.Remove to remove the specified handler from the multicast delegate.
                eventDictionary[eventName] = Delegate.Remove(eventDictionary[eventName], handler);

                // 3. Memory management: If no handlers remain for this event, clear the key in the sub-dictionary.
                if (eventDictionary[eventName] == null)
                {
                    eventDictionary.Remove(eventName);
                    // 4. If the category dictionary is also empty, remove the entire category.
                    if (eventDictionary.Count == 0) _eventTypeDictionary.Remove(eventType);
                }
            }
        }

        #endregion

        #endregion

        #region Delegates returning a value

        // Dictionary to store event handlers that return a value
        private readonly Dictionary<string, Dictionary<string, Delegate>> _returningEventTypeDictionary = new();

        #region Delegates returning a value and with parameter passing

        /// <summary>
        ///     Subscribes a handler to an event that returns a value.
        /// </summary>
        /// <typeparam name="T">The type of the event parameter.</typeparam>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Subscribe<T, TResult>(string eventType, string eventName, Func<T, TResult> handler)
        {
            AddHandler(eventType, eventName, handler, _returningEventTypeDictionary);
        }

        /// <summary>
        ///     Unsubscribes a handler from an event that returns a value.
        /// </summary>
        /// <typeparam name="T">The type of the event parameter.</typeparam>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Unsubscribe<T, TResult>(string eventType, string eventName, Func<T, TResult> handler)
        {
            RemoveHandler(eventType, eventName, handler, _returningEventTypeDictionary);
        }

        /// <summary>
        ///     Dispatches an event that returns a value.
        /// </summary>
        /// <typeparam name="T">The type of the event parameter.</typeparam>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="eventParam">The parameter for the event.</param>
        /// <returns>The result of the event handler.</returns>
        public TResult Dispatch<T, TResult>(string eventType, string eventName, T eventParam)
        {
            if (_returningEventTypeDictionary.ContainsKey(eventType))
                if (_returningEventTypeDictionary[eventType].TryGetValue(eventName, out var action))
                    return ((Func<T, TResult>)action).Invoke(eventParam);
            return default;
        }

        #endregion

        #region Delegates returning a value and with multiple parameter passing

        /// <summary>
        ///     Subscribes a handler to an event that returns a value with multiple parameters.
        /// </summary>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Subscribe<TResult>(string eventType, string eventName, Func<object[], TResult> handler)
        {
            AddHandler(eventType, eventName, handler, _returningEventTypeDictionary);
        }

        /// <summary>
        ///     Unsubscribes a handler from an event that returns a value with multiple parameters.
        /// </summary>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Unsubscribe<TResult>(string eventType, string eventName, Func<object[], TResult> handler)
        {
            RemoveHandler(eventType, eventName, handler, _returningEventTypeDictionary);
        }

        /// <summary>
        ///     Dispatches an event that returns a value with multiple parameters.
        /// </summary>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="eventParams">The parameters for the event.</param>
        /// <returns>The result of the event handler.</returns>
        public TResult Dispatch<TResult>(string eventType, string eventName, params object[] eventParams)
        {
            if (_returningEventTypeDictionary.ContainsKey(eventType))
                if (_returningEventTypeDictionary[eventType].TryGetValue(eventName, out var action))
                    return ((Func<object[], TResult>)action).Invoke(eventParams);
            return default;
        }

        #endregion

        #region Delegates returning a value and without parameter passing

        /// <summary>
        ///     Subscribes a handler to an event that returns a value without parameter passing.
        /// </summary>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Subscribe<TResult>(string eventType, string eventName, Func<TResult> handler)
        {
            AddHandler(eventType, eventName, handler, _returningEventTypeDictionary);
        }

        /// <summary>
        ///     Unsubscribes a handler from an event that returns a value without parameter passing.
        /// </summary>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <param name="handler">The handler for the event.</param>
        public void Unsubscribe<TResult>(string eventType, string eventName, Func<TResult> handler)
        {
            RemoveHandler(eventType, eventName, handler, _returningEventTypeDictionary);
        }

        /// <summary>
        ///     Dispatches an event that returns a value without parameter passing.
        /// </summary>
        /// <typeparam name="TResult">The type of the return value.</typeparam>
        /// <param name="eventType">The type of the event.</param>
        /// <param name="eventName">The name of the event.</param>
        /// <returns>The result of the event handler.</returns>
        public TResult Dispatch<TResult>(string eventType, string eventName)
        {
            if (_returningEventTypeDictionary.ContainsKey(eventType))
                if (_returningEventTypeDictionary[eventType].TryGetValue(eventName, out var action))
                    return ((Func<TResult>)action).Invoke();
            return default;
        }

        #endregion

        #region Handler

        private void AddHandler(string eventType, string eventName, Delegate handler,
            Dictionary<string, Dictionary<string, Delegate>> eventTypeDictionary)
        {
            if (!eventTypeDictionary.ContainsKey(eventType))
                eventTypeDictionary.Add(eventType, new Dictionary<string, Delegate>());

            var eventDictionary = eventTypeDictionary[eventType];
            if (!eventDictionary.ContainsKey(eventName)) eventDictionary.Add(eventName, null);
            eventDictionary[eventName] = Delegate.Combine(eventDictionary[eventName], handler);
        }

        private void RemoveHandler(string eventType, string eventName, Delegate handler,
            Dictionary<string, Dictionary<string, Delegate>> eventTypeDictionary)
        {
            if (eventTypeDictionary.ContainsKey(eventType) && eventTypeDictionary[eventType].ContainsKey(eventName))
            {
                var eventDictionary = eventTypeDictionary[eventType];
                eventDictionary[eventName] = Delegate.Remove(eventDictionary[eventName], handler);

                // If there are no more events of this type, remove the event type
                if (eventDictionary[eventName] == null)
                {
                    eventDictionary.Remove(eventName);
                    if (eventDictionary.Count == 0) eventTypeDictionary.Remove(eventType);
                }
            }
        }

        #endregion

        #endregion
    }
}