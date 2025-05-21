[⬅️ Torna indietro](../README.md)

## Modulo 5: Copilot chat modes: Ask, Edit, Agent

### Esercizio pratico
#### Scenario: Utilizzo di Ask, Edit e Agent

#### Obiettivi dell'esercizio:
1. Capire i differenti casi d'uso di Ask, Edit e Agent

Inizia aprendo i file `Modulo 5/Esercizio/**/TaskManagement.**` e segui i commenti nei file contrassegnati da // ASK, // EDIT, // AGENT. Ognuno suggerisce quale modalità usare e in che punto applicarla

**Modalità ASK:**
- **Quando**: Per ottenere informazioni, spiegazioni o chiarimenti su un argomento, snippet di codice o concetti
- **Esercizio**: Chiedere come funziona il metodo GetPendingTasks.

**Modalità EDIT:**
- **Quando**: Durante la scrittura del codice, per ottenere suggerimenti e completamenti.
- **Esercizio**: Chiedere di implementazione di un sistema di priorità dei task.

**Modalità AGENT:**
- **Quando**: Per eseguire azioni complesse o trasformazioni del codice.
- **Esercizio**: Chiedere di creare una batteria di tests.

Successivamente effettuare altre domande per esplorare le potenzialità di ogni modalità.

## Tips:
### ASK
La modalità ASK serve a ottenere informazioni, spiegazioni o chiarimenti su un argomento, snippet di codice o concetti. È utile per:
- Comprendere il funzionamento di un metodo o di un algoritmo
- Ottenere chiarimenti su codice legacy
- Ricevere suggerimenti su refactoring o miglioramenti

Come usarlo:
- Seleziona una porzione di codice
- Tasto destro → Copilot: Explain
- Oppure apri Copilot Chat, seleziona la modalità "Ask" dalla dropdown e digita una domanda:
```
// come funziona il metodo GetPendingTasks?
```
### EDIT
La modalità EDIT è ottimizzata per effettuare modifiche su più file, mantenendo il contesto limitato alla selezione. È ideale per:
- Completare funzioni o metodi
- Aggiungere nuove funzionalità
- Modificare porzioni di codice esistenti

Come usarlo:
- Apri Copilot Chat, seleziona la modalità "Edit" dalla dropdown
- Trascina o seleziona i file su cui vuoi lavorare
- Digita un prompt chiaro e specifico, ad esempio:
```
Estendi la classe Task e il sistema di gestione dei task in modo da supportare la gestione delle priorità.
In particolare:
- Aggiungi una proprietà Priority alla classe Task. La priorità deve essere rappresentata come un valore enumerato (ad esempio: Low, Medium, High).
- Modifica i metodi di aggiunta dei task per permettere di specificare la priorità al momento della creazione.
- Implementa nella classe TaskManager un metodo che restituisca tutti i task ordinati per priorità (dal più alto al più basso).
- Scrivi eventuali altri metodi utili per filtrare o gestire i task in base alla priorità.
Assicurati che il codice sia ben strutturato e che le modifiche siano coerenti con l’architettura esistente. 
```
- Copilot analizzerà il contesto e suggerirà modifiche


Note:
- Il codice modificato può essere accettato o scartato tramite l’interfaccia editor-friendly
- Se il prompt è troppo vago, Copilot potrebbe non agire o proporre una modifica generica

### AGENT
La modalità AGENT è progettata per eseguire azioni complesse o trasformazioni del codice. È utile per:
- Creare o modificare file multipli
- Eseguire operazioni che richiedono una comprensione più ampia del progetto
- Automatizzare attività ripetitive

Come usarlo:
- Apri Copilot Chat, seleziona la modalità "Agent" dalla dropdown
- Digita un prompt chiaro e specifico, ad esempio:
```
// crea una batteria di tests per la classe TaskManager
```
- Copilot analizzerà il progetto e genererà i file necessari

Nota: avendo aggiunto le istruzioni custom, non è necessario essere troppo specifici. Copilot capirà il contesto e genererà i test in modo appropriato.

### Link utili:
- [Ask mode](https://code.visualstudio.com/docs/copilot/chat/chat-ask-mode)
- [Edit mode](https://code.visualstudio.com/docs/copilot/chat/copilot-edits)
- [Agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode)