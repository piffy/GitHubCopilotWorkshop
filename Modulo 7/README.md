[⬅️ Torna indietro](../README.md)

## Modulo 7: Copilot extensions: Agents

### Esercizio pratico
#### Scenario: Configurazione di un agent personalizzato per Github Copilot

### Obiettivi
- Comprendere il concetto di Copilot Agent
- Configurare e utilizzare Agent personalizzati

L'agent' è già implementato in `Modulo 7/Esercizio/**/`, ma è necessario configurarlo correttamente per poterlo utilizzare in Copilot.

### 1. Port forwarding
1. Avviare la applicazione in debug e prendere nota della porta utilizzata
2. Fare click su Ports in basso
3. Cliccare su "Forward a Port" e inserire la porta utilizzata dalla applicazione
4. Prendere nota dell'URL generato

### 2. Creazione Github app
1. Vai su [GitHub Apps](https://github.com/settings/apps)
2. Clicca su "New GitHub App"
3. Compila i campi richiesti:
   - **App name**: `RandomUserDataAgentApp`
   - **Description**: `Agent for generating random user data`
   - **Homepage URL**: `https://github.com/`
   - **Callback URL**: `https://<port-forwarding-url>/api/authCallback`
   - **Expire user authorization tokens**: abilita
   - **Request user authorization (OAuth) during installation**: abilita
   - **Webhook**: disabilita

### 3. Permessi
1. Andare nella sezione "Permissions & events", imposta i permessi come segue:
   - **Account permissions**: 
     - **Copilot Chat**: Read-only
2. Salvare le modifiche
  
### 3. Configurazione Copilot
1. Andare nella sezione "Copilot"
2. Accetta i termini di servizio di Copilot
3. **App Type**: `Agent`
4. **URL**:  `https://<port-forwarding-url>/`
5. **Inference description**: `When a user asks for random user data, this agent will generate a random user profile with name, email, and address and so on.`
6. Salvare le modifiche

### 4. Installazione della app
1. Andare nella sezione "Install App"
2. Clicca su "Install" nella sezione relativa al tuo utente

### 5. Test dell'agent
1. Vai su [Copilot Chat](https://github.com/copilot/)
2. Inizia una nuova conversazione
3. Scrivi il messaggio: `@RandomUserDataAgentApp genera i dati per l'utente Mario Rossi`
4. Verifica nella console di debug che la skillset sia stata chiamata correttamente e che i dati siano stati generati

## Tips:
### Cos'è un Agent
Un Agent in GitHub Copilot è un componente esterno che può gestire conversazioni complete con l’utente, non solo rispondere a una singola chiamata. È progettato per:

- Eseguire logica complessa
- Gestire più passaggi in una conversazione
- Rispondere in modo personalizzato e contestuale

È molto più potente di una Skillset, ma anche più complesso da gestire.

### Come funziona un Agent?
- Copilot riceve un prompt utente nella chat
- Riconosce che il messaggio è destinato a un agent (tramite @NomeApp)
- Inoltra il messaggio all’agent tramite POST HTTP
- L’agent risponde con un messaggio strutturato, eventualmente con follow-up
- Copilot mostra la risposta in chat

### Link utili:
- [GitHub Copilot Agents](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-agent-for-your-copilot-extension/about-copilot-agents)