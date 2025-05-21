[⬅️ Torna indietro](../README.md)

## Modulo 3: Slash Commands e Chat Features

### Esercizio pratico
#### Scenario: Debug e miglioramento di un'applicazione web con bug intenzionali

#### Obiettivi dell'esercizio:
1. Utilizzare `/fix` per identificare e correggere bug
2. Utilizzare `/explain` per comprendere codice complesso
4. Utilizzare `/doc` per documentare le funzioni

Inizia aprendo i file `Modulo 3/Esercizio/**/WebScraper.**` e `Modulo 3/Esercizio/**/Calculator.**` e cerca i commenti con scritto `Bug`. Questi commenti indicano le aree in cui devi intervenire.

## Tips:
**Obiettivo**: imparare a collaborare con Copilot usando comandi mirati e conversazioni contestuali. Pensa a Copilot non solo come autocompletamento, ma come un collega in chat che conosce il tuo progetto.

Gli Slash Commands (/fix, /explain, /doc, ecc.) e i Chat Participants (@workspace, @terminal, @vscode, ecc.) sono strumenti progettati per aiutarti a collaborare con Copilot in modo più efficiente, contestuale e naturale.

### Panoramica dei principali Slash Commands:
  - `/explain` - Permette di ottenere spiegazioni sul codice. Può essere usato per capire un blocco di codice selezionato o un concetto di programmazione
  - `/fix` - Permette di correggere errori nel codice. Può essere usato per identificare e risolvere bug o problemi di performance
  - `/tests` - Permette di generare unit test. Può essere usato per creare test per funzioni o classi specifiche
  - `/doc` - Permette di generare documentazione. Può essere usato per creare docstring o commenti per funzioni e classi
  - `/new` - Permette di impostare un nuovo progetto, suggerendo una struttura di directory e il contenuto dei file
  - `/clear` - Permette di cancellare il contesto corrente della chat, utile per iniziare una nuova conversazione

### Come usare uno Slash Command
Puoi usare uno Slash Command semplicemente selezionando una porzione di codice (una funzione, un blocco, una riga) e scrivendo in chat:
```
/nome_comando [eventuale descrizione o richiesta]
```
Nota: I comandi funzionano meglio se guidati da contesto o una breve descrizione: non serve essere prolissi, ma chiari.

### Come usare un Chat Participant
I Chat Participants si attivano menzionandoli con @, ad esempio:
```
@nome_partecipant [descrizione o richiesta]
```
Nota: Trattali come "esperti specializzati" a cui rivolgere domande dirette: ognuno ha un ruolo preciso e può aiutarti in un ambito specifico.

### Panoramica dei principali Chat Partecipants:
  - `@workspace` - Permette di accedere al contesto del workspace corrente, utile per ottenere informazioni specifiche sul progetto
  - `@terminal` - Permette di eseguire comandi direttamente nel terminale, utile per testare il codice o eseguire script
  - `@vscode` - Permette di interagire con l'IDE, utile per modificare file o navigare nel progetto
  - `@github` - Permette di ottenere risposte basate sulla ricerca sul web, sul codice e sul knowledge base aziendale

### Link utili:
- [Copilot Chat Slash Commands](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet?tool=vscode#slash-commands-1)
- [Copilot Chat Participants](https://docs.github.com/en/copilot/using-github-copilot/copilot-chat/github-copilot-chat-cheat-sheet?tool=vscode#chat-participants)