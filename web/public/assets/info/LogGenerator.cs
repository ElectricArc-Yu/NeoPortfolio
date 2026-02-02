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
    public class LogGenerator
    {
        private readonly StreamWriter _streamWriter;
        public LogGenerator()
        {
            string logDirectory = Path.Combine(Application.dataPath, "Log");
            if (!Directory.Exists(logDirectory))
            {
                Directory.CreateDirectory(logDirectory);
            }
            
            // Check the logDirectory exist file number, if more than 4 delete the oldest file until only has 4 file.
            DirectoryInfo directoryInfo = new DirectoryInfo(logDirectory);
            FileInfo[] files = directoryInfo.GetFiles();
            if (files.Length >= 4)
            {
                Array.Sort(files, (a, b) => a.CreationTime.CompareTo(b.CreationTime));
                for (int i = 0; i < files.Length - 4; i++)
                {
                    files[i].Delete();
                }
            }
            
            // Create a log file with current time
            
#if UNITY_EDITOR
            string logFileName = $"log - {DateTime.Now:yyyy-MM-dd_HHmm} - UNITY_EDITOR.log";
#else
            string logFileName = $"log - {DateTime.Now:yyyy-MM-dd_HHmm} - Runtime.log";
#endif
            string logFilePath = Path.Combine(logDirectory, logFileName);

            _streamWriter = new StreamWriter(logFilePath);

            OnApplicationStart();
        }
        
        private void OnApplicationStart()
        {
            // Subscribe to the log events
            EventDispatcher.Instance.Subscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventInfo, LogInfo);
            EventDispatcher.Instance.Subscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventSuccess, LogSuccess);
            EventDispatcher.Instance.Subscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventWarning, LogWarning);
            EventDispatcher.Instance.Subscribe<Exception>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventError, LogError);
        }
        
        public void OnApplicationQuit()
        {
            // Unsubscribe from the log events
            EventDispatcher.Instance.Unsubscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventInfo, LogInfo);
            EventDispatcher.Instance.Unsubscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventSuccess, LogSuccess);
            EventDispatcher.Instance.Unsubscribe<string>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventWarning, LogWarning);
            EventDispatcher.Instance.Unsubscribe<Exception>(LogServiceEvent.LogEvent,LogServiceEvent.LogEventError, LogError);
            Close();
        }
        
        
        private void Log(string message)
        {
            try
            {
                _streamWriter.WriteLine($"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] {message}");
            }
            finally
            {
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
        
        
        
        private void LogError(Exception ex)
        {
            string message;
            if (ex is ICustomException customException)
            {
                message = $"ERROR - {customException.Problem.Message} | " + customException.CustomDescription + "\n" +
                          $"Type: {customException.GetType().Name}\n" +
                          $"Stack Trace: {customException.Problem.StackTrace}\n";
            }
            else
            {
                message = $"ERROR - {ex.Message}" + "\n" +
                          $"Type: {ex.GetType().Name}\n" +
                          $"Stack Trace: {ex.StackTrace}\n";
            }
            Log(message);
        }
    }
}