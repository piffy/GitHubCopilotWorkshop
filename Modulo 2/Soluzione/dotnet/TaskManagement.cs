using System;
using System.Collections.Generic;
using System.Linq;

namespace TaskManagementApp
{
    public class Task
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Completed { get; set; }
        public DateTime CreatedAt { get; set; }

        public Task()
        {
            Id = Guid.NewGuid().ToString();
            Completed = false;
            CreatedAt = DateTime.Now;
        }
    }

    public class TaskManager
    {
        private List<Task> tasks;

        public TaskManager()
        {
            tasks = new List<Task>();
        }

        public Task AddTask(string title, string description)
        {
            var newTask = new Task
            {
                Title = title,
                Description = description
            };
            
            tasks.Add(newTask);
            return newTask;
        }

        public bool RemoveTask(string id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task != null)
            {
                tasks.Remove(task);
                return true;
            }
            return false;
        }

        public bool CompleteTask(string id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task != null)
            {
                task.Completed = true;
                return true;
            }
            return false;
        }

        public List<Task> GetAllTasks()
        {
            return new List<Task>(tasks);
        }

        public List<Task> GetCompletedTasks()
        {
            return tasks.Where(t => t.Completed).ToList();
        }

        public List<Task> GetPendingTasks()
        {
            return tasks.Where(t => !t.Completed).ToList();
        }
    }
}