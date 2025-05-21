class Task {
    constructor() {
        this.id = this._generateId();
        this.title = '';
        this.description = '';
        this.completed = false;
        this.createdAt = new Date();
    }

    _generateId() {
        return Math.random().toString(36).substring(2, 11);
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(title, description) {
        const newTask = new Task();
        newTask.title = title;
        newTask.description = description;
        this.tasks.push(newTask);
        return newTask;
    }

    removeTask(id) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    getAllTasks() {
        return [...this.tasks];
    }

    getCompletedTasks() {
        return this.tasks.filter(t => t.completed);
    }

    getPendingTasks() {
        return this.tasks.filter(t => !t.completed);
    }
}

module.exports = { TaskManager };