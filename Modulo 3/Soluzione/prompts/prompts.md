## Prompt per Modulo 3

### 1. Identificazione bug con slash command /fix
Seleziona il metodo add() della classe Calculator e digitare in chat:
```
@workspace /fix
```
Copilot dovrebbe identificare il bug dell'aggiunta di +1 e suggerire una correzione

#### 2. Spiegazione del codice con slash command /explain  
Seleziona il metodo power() e digitare in chat:
```
@workspace /explain What's wrong with this implementation?
```
Copilot dovrebbe spiegare il problema e suggerire una correzione

#### 3. Documentazione con slash command /doc
Seleziona la classe WebScraper e usa:
```
@workspace /doc document even the potential security issues
```
Copilot dovrebbe generare una documentazione dettagliata della classe, comprese le funzioni e i potenziali problemi di sicurezza```

#### 4. Prompt vari per debugging
```
I have a calculator class with several bugs. Can you help me identify all the issues in the add, subtract, and power methods?

The web scraper is missing error handling. What are the main issues and how should I fix them?

Generate comprehensive error handling for the WebScraper class including timeout, URL validation, and proper exception management
```
#### 5. Prompt per miglioramento del codice
```
Refactor this Calculator class to:
- Fix all mathematical operations
- Add proper input validation  
- Implement error handling
- Add XML documentation
- Follow [LANGUAGE] best practices
```