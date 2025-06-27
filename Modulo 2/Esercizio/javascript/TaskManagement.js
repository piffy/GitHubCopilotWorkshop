// Sistema di gestione dei task: consente di creare, completare, eliminare e visualizzare task

// Classe che rappresenta un singolo task
class Task {
    constructor(id, title, description, completed = false, createdDate = new Date()) {
        // Controllo che nessun campo sia nullo
        if (id == null) throw new Error('id non può essere nullo');
        if (title == null) throw new Error('title non può essere nullo');
        if (description == null) throw new Error('description non può essere nullo');
        if (completed == null) throw new Error('completed non può essere nullo');
        if (createdDate == null) throw new Error('createdDate non può essere nullo');

        this.id = id; // Identificativo univoco del task
        this.title = title; // Titolo del task
        this.description = description; // Descrizione del task
        this.completed = completed; // Stato di completamento (true/false)
        this.createdDate = createdDate; // Data di creazione
    }
}

// Classe che gestisce una lista di task
class TaskManager {
    constructor() {
        this.tasks = []; // Lista dei task
        this.nextId = 1; // Prossimo id disponibile per un nuovo task
    }

    // Metodo per aggiungere un nuovo task
    addTask(title, description) {
        if (title == null) throw new Error('title non può essere nullo');
        if (description == null) throw new Error('description non può essere nullo');
        const nuovoTask = new Task(this.nextId, title, description, false, new Date());
        this.tasks.push(nuovoTask);
        this.nextId++; // Incrementa l'id per il prossimo task
        return nuovoTask;
    }

    // Metodo per rimuovere un task tramite id
    removeTask(id) {
        const indice = this.tasks.findIndex(task => task.id === id);
        if (indice === -1) {
            // Nessun task trovato con quell'id
            return false;
        }
        this.tasks.splice(indice, 1); // Rimuove il task dalla lista
        return true;
    }

    // Metodo per segnare un task come completato tramite id
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            // Nessun task trovato con quell'id
            return false;
        }
        task.completed = true;
        return true;
    }

    // Restituisce la lista di tutti i task
    getAllTasks() {
        return [...this.tasks]; // Restituisce una copia della lista
    }

    // Restituisce solo i task completati
    getCompletedTasks() {
        return this.tasks.filter(task => task.completed);
    }

    // Restituisce solo i task non completati
    getPendingTasks() {
        return this.tasks.filter(task => !task.completed);
    }
}

module.exports = { TaskManager };