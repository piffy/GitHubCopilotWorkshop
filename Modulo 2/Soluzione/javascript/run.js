const { TaskManager } = require('./TaskManagement');

const manager = new TaskManager();
manager.addTask("Prova", "Descrizione di prova");
console.log(manager.getAllTasks());