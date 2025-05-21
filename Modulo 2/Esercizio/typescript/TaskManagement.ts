// TODO: Create a comprehensive task management system
// The system should handle task creation, completion, deletion, and listing
// Each task should have: id, title, description, completed status, created date

export class Task {
    // Define the Task properties here
    constructor() {
        // Initialize properties
    }
}

export class TaskManager {
    private tasks: Task[];

    constructor() {
        // Initialize the tasks list
    }

    // Add a new task to the list
    addTask(title: string, description: string): Task {
        // Implementation needed
    }

    // Remove a task by its ID
    removeTask(id: string): boolean {
        // Implementation needed
    }

    // Mark a task as completed
    completeTask(id: string): boolean {
        // Implementation needed
    }

    // Get all tasks
    getAllTasks(): Task[] {
        // Implementation needed
    }

    // Get only completed tasks
    getCompletedTasks(): Task[] {
        // Implementation needed
    }

    // Get only pending tasks
    getPendingTasks(): Task[] {
        // Implementation needed
    }
}
