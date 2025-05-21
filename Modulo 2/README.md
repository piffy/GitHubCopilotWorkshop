[⬅️ Torna indietro](../README.md)

## Modulo 2: Prompt efficaci

### Esercizio pratico
#### Scenario: Creazione di una classe per gestire una lista di task

#### Obiettivi dell'esercizio:
1. Utilizzare commenti descrittivi per guidare Copilot tramite la chat o l'editor inline chat
2. Sfruttare l'autocompletamento per generare metodi
3. Implementare funzioni di base (add, remove, list, mark_complete)

Inizia aprendo il file `Modulo 2/Esercizio/**/TaskManagement.**` e segui le istruzioni per completare l'esercizio

## Tips:
### Usare Copilot in modo efficace
**Obiettivo**: non è scrivere tutto da zero, ma imparare a guidare Copilot scrivendo prompt chiari e localizzati nel contesto del codice.

### Scrivere commenti efficaci come prompt
GitHub Copilot può generare codice leggendo i commenti. Un buon prompt in forma di commento dovrebbe:

- Descrivere in modo conciso e preciso l’obiettivo della funzione.
- Usare parole chiave come Create, Return, Check, Update, Remove, Sort, Filter, ecc.
- Specificare il tipo di dato in input/output (se necessario)

Ad esempio, per creare un task:
```
Add a new task with title and description, and assign a unique ID and creation date
```
Evita commenti vaghi come:
```
Create a task
```

### Farti aiutare nella creazione di un metodo
Copilot può generare la struttura di un metodo partendo da un prompt. Per esempio, per un metodo che aggiunge un task:
```
Implement the AddTask method in the TaskManager class that:
- Accepts a title and description
- Creates a new Task with a unique ID and current timestamp
- Adds it to the internal task list
- Returns the created Task object
- Includes input validation to ensure title and description are not null or empty
```

### Guidare l’autocompletamento in modo efficace
Ricorda che Copilot impara dal contesto, quindi più è chiaro l’intento, migliore sarà il suggerimento. </br>
Scrivi il nome della variabile in modo descrittivo (task_list, completed_tasks) per aumentare la qualità dei suggerimenti.

### Utilizzare l'editor inline
L'editor inline permette di modificare il codice direttamente nel contesto, senza dover passare tra finestre. Per usarlo:
- Seleziona il codice o la classe su cui vuoi lavorare
- Premi `⌘I` (Mac) o `Ctrl+I`
- Digita il prompt nella chat per ottenere suggerimenti specifici
- Puoi anche usare comandi come `/explain` per spiegazioni dettagliate o `/fix` per miglioramenti del codice

### Link utili
- [Prompt engineering for Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/prompt-engineering-for-copilot-chat)
- [GitHub Copilot Fundamentals Part 1](https://learn.microsoft.com/en-us/training/paths/copilot/)
- [GitHub Copilot Fundamentals Part 2](https://learn.microsoft.com/en-us/training/paths/gh-copilot-2/)