[⬅️ Torna indietro](../README.md)

## Modulo 8: Model Context Protocol (MCP)

### Prerequisiti

Assicurati di avere:

- Visual Studio Code installato ([download](https://code.visualstudio.com/)).
- Estensione **GitHub Copilot** installata.
- Accesso attivo a GitHub Copilot.
- Node.js ≥ 18 (richiesto per lanciare un MCP Server).
- Familiarità con TypeScript o JavaScript (per estendere MCP).
- UV Tool ([install](https://docs.astral.sh/uv/getting-started/installation/))

---

### Step 1: Installare GitHub Copilot in VSCode

1. Vai su VSCode.
2. Apri l’extension marketplace (Ctrl+Shift+X).
3. Cerca **GitHub Copilot**.
4. Clicca su “Install”.

Verifica che sia attivo e autenticato con il tuo account GitHub.

---

### Step 2: Eseguire un MCP Server in locale

Per configurare un MCP Server in Visual Studio Code, è necessario specificare i dettagli del server MCP tramite uno script di configurazione. Ecco come puoi procedere:

### Opzioni di configurazione MCP

Puoi configurare un server MCP in due modi:

1. **Per repository**  
    - Crea (o modifica) il file `.vscode/mcp.json` nella root del tuo repository. Questo file deve contenere la configurazione del server MCP che desideri utilizzare per quel progetto specifico.  
    **Esempio di `.vscode/mcp.json`:**
    ```json
    {
        "inputs": [
        // The "inputs" section defines the inputs required for the MCP server configuration.
        {
            "type": "promptString"
        }
        ],
        "servers": {
        // The "servers" section defines the MCP servers you want to use.
            "fetch": {
                "command": "uvx",
                "args": ["mcp-server-fetch"]
            }
        }
    }
    ```


    - Salva il file `.vscode/mcp.json`.

    - Apparirà un pulsante "Start" nella parte superiore del file `.vscode/mcp.json`, sopra l’elenco dei server. Clicca su "Start" per avviare i server MCP. Questa azione farà comparire una finestra di input e scoprirà i tool del server, che verranno memorizzati per le sessioni successive.

    - Apri Copilot Chat cliccando sull’icona nella barra del titolo di Visual Studio Code.

    - Nella chat di Copilot, seleziona "Agent" dal menu popup.

    - Per visualizzare l’elenco dei server MCP disponibili, clicca sull’icona degli strumenti nella chat. Si aprirà la lista dei server MCP, dove potrai vedere tutti i server e i tool associati attualmente disponibili nella tua istanza di Visual Studio Code.s

    - Facoltativamente, puoi definire dei *toolset*, ovvero gruppi di tool correlati che puoi richiamare in chat. I toolset facilitano la gestione di insiemi di strumenti MCP, permettendo di abilitarli o disabilitarli rapidamente. Per maggiori informazioni su come definire e utilizzare un toolset, consulta la documentazione di VS Code.
    
    - In Copilot Chat chiedi di effettuare il FECTH del repo: `https://github.com/github/docs`.

2. **A livello globale (per tutte le istanze di VS Code)**  
    Puoi configurare il server MCP globalmente tramite le impostazioni di VS Code:
    - Vai su **File > Preferences > Settings** (o usa `Ctrl+,`).
    - Cerca `Copilot: Model Context Protocol Server`.
    - Inserisci l’URL del tuo MCP Server e, se necessario, la chiave API.

### Step 3: Usare il GitHub MCP Server
Le istruzioni seguenti ti guidano nella configurazione del server GitHub MCP in Visual Studio Code.

- In Visual Studio Code, apri la command palette premendo Ctrl+Shift+P (Windows/Linux) oppure Command+Shift+P (Mac).
- Digita: `mcp: add server` e poi premi Invio.
- Dall’elenco, seleziona `HTTP (HTTP o Server-Sent Events)`.
- Nel campo Server URL, inserisci `https://api.githubcopilot.com/mcp/` e premi Invio.
- Alla voce Inserisci Server ID, premi Invio per usare l’ID server predefinito oppure inserisci un ID personalizzato.
- Alla voce Scegli dove salvare la configurazione, seleziona dove vuoi salvare la configurazione del server MCP. Visual Studio Code aprirà e aggiungerà la configurazione al file selezionato nell’editor, oppure creerà un nuovo file se non esiste.
- Nel popup di Visual Studio Code, per autorizzare il server MCP tramite OAuth, clicca su Consenti e seleziona il tuo account personale dall’elenco.
- Apri Copilot Chat cliccando sull’icona nella barra del titolo di Visual Studio Code.
- Nella chat di Copilot, seleziona "Agent" dal menu popup.
- Per visualizzare le azioni disponibili, nella chat di Copilot clicca sull’icona "Seleziona strumenti".
- Nel menu a discesa degli strumenti, sotto MCP Server:GitHub, vedrai l’elenco delle azioni disponibili.
- Nella chat di Copilot, digita un comando o una domanda relativa all’azione che vuoi eseguire e premi Invio. Ad esempio, puoi chiedere al server MCP di GitHub di creare una nuova issue, elencare le pull request o recuperare informazioni sul repository.
- Il server MCP di GitHub elaborerà la tua richiesta e fornirà una risposta nell’interfaccia della chat.
- Nella chat di Copilot, potrebbe esserti richiesto di concedere ulteriori permessi o fornire più informazioni per completare l’azione.
- Segui le istruzioni per completare l’azione.

### Note importanti

- Se esistono sia una configurazione locale (`.vscode/mcp.json`) che una globale, quella locale ha la precedenza.
- Dopo aver configurato il server MCP, riavvia VS Code per applicare le modifiche.
- Assicurati che il server MCP sia in esecuzione e accessibile dall’ambiente in cui lavori.

## Tips:
### Cos'è un Model Context Protocol Server?
Un Model Context Protocol (MCP) Server è un componente che estende le capacità di GitHub Copilot consentendo l'integrazione con sistemi e dati esterni. Permette di:
- Fornire contesto aggiuntivo ai modelli di AI
- Integrare knowledge base private
- Personalizzare le risposte di Copilot in base a policy aziendali
- Migliorare la precisione e la pertinenza delle risposte

### Come funziona un MCP Server?
- Quando viene fatta una richiesta a Copilot, questa può essere intercettata dal MCP Server
- Il server può arricchire la richiesta con informazioni aggiuntive
- Il risultato è una risposta più pertinente e contestualizzata
- Il MCP Server può anche filtrare o modificare le risposte in base a regole predefinite

### Best practice per la configurazione di un MCP Server:
- Inizia con una configurazione minima e aggiungi funzionalità in modo incrementale
- Testa ogni nuova integrazione per verificare che non introduca latenza
- Monitora l'utilizzo delle risorse del server
- Implementa la sicurezza a livello di rete e applicazione

### Link utili:
- [GitHub MCP Documentation](https://docs.github.com/en/copilot/customizing-copilot/using-model-context-protocol/extending-copilot-chat-with-mcp?tool=vscode)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/introduction)
- [Model Context Protocol Repository](https://github.com/modelcontextprotocol/servers/)