// NOTE: before running this script, compile the TypeScript code with `tsc TaskManagement.ts --lib es2015`

const { TaskManager } = require('./TaskManagement');

const manager = new TaskManager();
manager.addTask("Prova", "Descrizione di prova");
console.log(manager.getAllTasks());