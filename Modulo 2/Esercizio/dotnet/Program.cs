using System;

namespace TaskManagementApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var manager = new TaskManager();
            var task = manager.AddTask("Test Task", "This is a test task");
            Console.WriteLine($"Task created: {task.Title} - {task.Description}");
        }
    }
}
