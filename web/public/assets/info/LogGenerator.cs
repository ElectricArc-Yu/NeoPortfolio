#region Editor

// ---------------------------------
// Class : LogGenerator
// Creator : Electric Arc( Yu chenhaoran)
// Co-Workers : None
// Create Date : 
// File Version : v 1.0.0
// ---------------------------------

#endregion

using System;
using System.IO;
using Services.EventDispatcherService;
using Services.LogService.Exceptions;
using UnityEngine;

namespace Services.LogService
{
    /// <summary>
    /// LogGenerator class: responsible for system log persistence.
    /// Manages log rotation automatically and subscribes to the global event system to record logs of different levels.
    /// </summary>
    public class LogGenerator
    {
        private readonly StreamWriter _streamWriter;

        /// <summary>
        /// Constructor: initializes the log directory and file.
        /// </summary>
        public LogGenerator()
        {
            // 1. Determine log storage path (Log folder under Unity project data path)
            string logDirectory = Path.Combine(Application.dataPath, "Log");
            if (!Directory.Exists(logDirectory))
            {
                Directory.CreateDirectory(logDirectory);
            }
            
            // 2. Log rotation logic: check file count; if it exceeds 4, delete oldest logs to keep disk usage manageable.
            DirectoryInfo directoryInfo = new DirectoryInfo(logDirectory);
            FileInfo[] files = directoryInfo.GetFiles();
            if (files.Length >= 4)
            {
                // Sort by creation time in ascending order
                Array.Sort(files, (a, b) => a.CreationTime.CompareTo(b.CreationTime));
                // Delete oldest files until 3 remain (making space for the new log)
                for (int i = 0; i < files.Length - 3; i++)
                {
                    files[i].Delete();
                }
            }
            
            // 3. Generate a unique log filename based on current time
#if UNITY_EDITOR
            string logFileName = $"log - {DateTime.Now:yyyy-MM-dd_HHmm} - UNITY_EDITOR.log";
#else
            string logFileName = $"log - {DateTime.Now:yyyy-MM-dd_HHmm} - Runtime.log";
#endif
            string logFilePath = Path.Combine(logDirectory, logFileName);

            // 4. Initialize stream writer
            _streamWriter = new StreamWriter(logFilePath);

            // 5. Start listening for application start
            OnApplicationStart();
        }
        
        /// <summary>
        /// Subscribes to all log level events.
        /// Uses an event-driven architecture to decouple business logic from the log service.
        /// </summary>
        private void OnApplicationStart()
        {
            EventDispatcher.Instance.Subscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventInfo, LogInfo);
            EventDispatcher.Instance.Subscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventSuccess, LogSuccess);
            EventDispatcher.Instance.Subscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventWarning, LogWarning);
            EventDispatcher.Instance.Subscribe<Exception>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventError, LogError);
        }
        
        /// <summary>
        /// Cleanup operations when the game exits.
        /// </summary>
        public void OnApplicationQuit()
        {
            EventDispatcher.Instance.Unsubscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventInfo, LogInfo);
            EventDispatcher.Instance.Unsubscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventSuccess, LogSuccess);
            EventDispatcher.Instance.Unsubscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventWarning, LogWarning);
            EventDispatcher.Instance.Unsubscribe<Exception>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventError, LogError);
            Close();
        }
        
        /// <summary>
        /// Performs the actual file write operation with a timestamp.
        /// </summary>
        private void Log(string message)
        {
            try
            {
                _streamWriter.WriteLine($"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] {message}");
            }
            finally
            {
                // Flush the buffer immediately to ensure logs are not lost during a crash
                _streamWriter.Flush();
            }
        }

        private void Close()
        {
            _streamWriter.Flush();
            _streamWriter.Close();
        }

        public void LogInfo(string message)
        {
            string logMessage = $"INFO - {message}";
            Log(logMessage);
        }

        public void LogSuccess(string message)
        {
            string logMessage = $"SUCCESS - {message}";
            Log(logMessage);
        }
        
        private void LogWarning(string message)
        {
            string logMessage = $"WARNING - {message}";
            Log(logMessage);
        }
        
        /// <summary>
        /// Detailed recording for exceptions.
        /// Distinguishes between custom business exceptions and standard system exceptions, recording the stack trace.
        /// </summary>
        private void LogError(Exception ex)
        {
            string message;
            if (ex is ICustomException customException)
            {
                // Provide additional description if it's a custom exception
                message = $"ERROR - {customException.Problem.Message} | " + customException.CustomDescription + "\n" +
                          $"Type: {customException.GetType().Name}\n" +
                          $"Stack Trace: {customException.Problem.StackTrace}\n";
            }
            else
            {
                // Standard system exception recording
                message = $"ERROR - {ex.Message}" + "\n" +
                          $"Type: {ex.GetType().Name}\n" +
                          $"Stack Trace: {ex.StackTrace}\n";
            }
            Log(message);
        }
    }
}