"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task() {
        this.id = this.generateId();
        this.completed = false;
        this.createdAt = new Date();
    }
    Task.prototype.generateId = function () {
        return Math.random().toString(36).substring(2, 11);
    };
    return Task;
}());
exports.Task = Task;
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (title, description) {
        var newTask = new Task();
        newTask.title = title;
        newTask.description = description;
        this.tasks.push(newTask);
        return newTask;
    };
    TaskManager.prototype.removeTask = function (id) {
        var index = this.tasks.findIndex(function (t) { return t.id === id; });
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    };
    TaskManager.prototype.completeTask = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    };
    TaskManager.prototype.getAllTasks = function () {
        return __spreadArray([], this.tasks, true);
    };
    TaskManager.prototype.getCompletedTasks = function () {
        return this.tasks.filter(function (t) { return t.completed; });
    };
    TaskManager.prototype.getPendingTasks = function () {
        return this.tasks.filter(function (t) { return !t.completed; });
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
