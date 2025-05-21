export class Task {
    public id: string;
    public title: string;
    public description: string;
    public completed: boolean;
    public createdAt: Date;

    constructor() {
        this.id = this.generateId();
        this.completed = false;
        this.createdAt = new Date();
    }

    private generateId(): string {
        return Math.random().toString(36).substring(2, 11);
    }
}

export class TaskManager {
    private tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    public addTask(title: string, description: string): Task {
        const newTask = new Task();
        newTask.title = title;
        newTask.description = description;
        this.tasks.push(newTask);
        return newTask;
    }

    public removeTask(id: string): boolean {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    public completeTask(id: string): boolean {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }

    public getAllTasks(): Task[] {
        return [...this.tasks];
    }

    public getCompletedTasks(): Task[] {
        return this.tasks.filter(t => t.completed);
    }

    public getPendingTasks(): Task[] {
        return this.tasks.filter(t => !t.completed);
    }
}
