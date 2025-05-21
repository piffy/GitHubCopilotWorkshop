[⬅️ Torna indietro](../README.md)

## Modulo 6: Copilot extensions: Skillsets

### Esercizio pratico
#### Scenario: Configurazione di una skillset personalizzata per Github Copilot

#### Obiettivi dell'esercizio:
- Comprendere il concetto di Copilot Skillset
- Configurare e utilizzare skillset personalizzate

La skillset è già implementata in `Modulo 6/Esercizio/**/`, ma è necessario configurarla correttamente per poterla utilizzare in Copilot.

### 1. Port forwarding
1. Avviare la applicazione in debug e prendere nota della porta utilizzata
2. Fare click su Ports in basso
3. Cliccare su "Forward a Port" e inserire la porta utilizzata dalla applicazione
4. Impostare la visibilità della porta a "Public"
5. Prendere nota dell'URL generato

### 2. Creazione Github app
1. Vai su [GitHub Apps](https://github.com/settings/apps)
2. Clicca su "New GitHub App"
3. Compila i campi richiesti:
   - **App name**: `RandomUserDataSkillsetApp`
   - **Description**: `Skillset for generating random user data`
   - **Homepage URL**: `https://github.com/`
   - **Callback URL**: `https://<port-forwarding-url>/api/authCallback`
    - **Expire user authorization tokens**: abilita
   - **Webhook**: disabilita

### 3. Permessi
1. Andare nella sezione "Permissions & events", imposta i permessi come segue:
   - **Account permissions**: 
     - **Copilot Chat**: Read-only
2. Salvare le modifiche
  
### 3. Configurazione Copilot
1. Andare nella sezione "Copilot"
2. Accetta i termini di servizio di Copilot
3. **App Type**: `Skillset`
4. **Skill definitions**:
  - **Skillset name**: `RandomUserDataSkillset`
  - **Skillset description**: `When a user asks for random user data, this skillset will generate a random user profile with name, email, and address and so on.`
  - **URL**: `https://<port-forwarding-url>/api/generateRandomUser`
  - **Parameters**:
    ```json
    {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "This name of the user to generate"
        },
        "surname": {
          "type": "string",
          "description": "This surname of the user to generate"
        }
      }
    }
    ```
5. Salvare le modifiche

### 4. Installazione della app
1. Andare nella sezione "Install App"
2. Clicca su "Install" nella sezione relativa al tuo utente

### 5. Test della skillset
1. Vai su [Copilot Chat](https://github.com/copilot/)
2. Inizia una nuova conversazione
3. Scrivi il messaggio: `@RandomUserDataSkillsetApp genera i dati per l'utente Mario Rossi`
4. Verifica nella console di debug che la skillset sia stata chiamata correttamente e che i dati siano stati generati

## Tips:
### Cos'è una Skillset?
Una Skillset è un'estensione che consente a Copilot di delegare azioni a servizi esterni, tramite chiamate HTTP. Puoi usarla per:
- Interrogare API personalizzate
- Generare risposte dinamiche basate su input utente
- Aggiungere logiche aziendali specifiche alla chat Copilot

Puoi creare al massimo 5 skills per ogni skillset.

### Come funziona una Skillset?
- La skill viene registrata in Copilot come parte di una GitHub App
- Quando in chat viene richiamata con @NomeSkillApp, Copilot chiama la tua API esponendo i parametri definiti
- L’output dell’API viene trasformato in una risposta visibile nella chat

### Best practice per il JSON Schema dei parametri:
- Descrivi bene i parametri, Copilot userà queste descrizioni per costruire meglio i prompt
- Se la skill non ha parametri, utilizza
```json
{
  "type": "object",
  "properties": {}
}
```

### Link utili:
- [GitHub Copilot Skillset](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-skillset-for-your-copilot-extension/about-copilot-skillsets)
- [Building skillset](https://docs.github.com/en/copilot/building-copilot-extensions/building-a-copilot-skillset-for-your-copilot-extension/building-copilot-skillsets)
- [Examples](https://github.com/copilot-extensions/skillset-example)
