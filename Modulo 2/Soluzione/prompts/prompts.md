## Prompt per Modulo 2

### 1. Prompt per generazione interfaccia e classe
```
Generate a [language] task management system that includes:

- A Task class with the following properties: ID (GUID), Title (string), Description (string), Completed (bool), and CreatedAt (DateTime)
- A TaskManager class that allows adding, removing, completing, and listing tasks
- Methods to get completed and pending tasks
- Use appropriate [language] naming conventions and best practices
```

Selezionare la classe Task, aprire l'editor inline (⌘I per Mac, Ctrl+I per Windows) e digitare in chat:
```
/explain explain the structure and design choices for a basic Task management system in [language]
```

### 2. Prompt per implementazione metodi
```
Implement the AddTask method in the TaskManager class that:
- Accepts a title and description
- Creates a new Task with a unique ID and current timestamp
- Adds it to the internal task list
- Returns the created Task object
- Includes input validation to ensure title and description are not null or empty
```

Selezionare il metodo AddTask, aprire l'editor inline (⌘I per Mac, Ctrl+I per Windows) e digitare in chat:
```
/fix improve this method to handle invalid input and add inline comments
```

### 3. Prompt per miglioramento codice
```
Review this TaskManager implementation. Suggest or apply improvements for:
- Null/empty input validation
- Exception handling
- XML comments for public methods
- Use modern [language] features
- Performance and readability
```

Selezionare la classe Task, aprire l'editor inline (⌘I per Mac, Ctrl+I per Windows) e digitare in chat:
```
/fix Review my TaskManager class for best practices and error handling
```