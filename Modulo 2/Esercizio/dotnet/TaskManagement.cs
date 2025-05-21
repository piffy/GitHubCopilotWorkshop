using System.Collections.Generic;

// TODO: Create a comprehensive task management system
// The system should handle task creation, completion, deletion, and listing
// Each task should have: id, title, description, completed status, created date

namespace TaskManagementApp
{
    public class Task
    {
        // Define the Task properties here
    }

    public class TaskManager
    {
        private List<Task> tasks;

        public TaskManager()
        {
            // Initialize the tasks list
        }

        // Add a new task to the list
        public Task AddTask(string title, string description)
        {
            // Implementation needed
        }

        // Remove a task by its ID
        public bool RemoveTask(string id)
        {
            // Implementation needed
        }

        // Mark a task as completed
        public bool CompleteTask(string id)
        {
            // Implementation needed
        }

        // Get all tasks
        public List<Task> GetAllTasks()
        {
            // Implementation needed
        }

        // Get only completed tasks
        public List<Task> GetCompletedTasks()
        {
            // Implementation needed
        }

        // Get only pending tasks
        public List<Task> GetPendingTasks()
        {
            // Implementation needed
        }
    }
}