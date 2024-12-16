(function() {
    // Style principal
    const style = document.createElement('style');
    style.innerHTML = `
/* Script Hub */
#script-hub {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1c1c1c;
    color: white;
    border: 2px solid #444;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
    z-index: 9999;
    width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    cursor: move;
    justify-content: flex-start;
    align-items: center;
    opacity: 0;
    animation: openScriptHub 1s ease-out forwards;
    box-sizing: border-box;
}

/* Animation d'ouverture du Script Hub */
@keyframes openScriptHub {
    0% {
        opacity: 0;
        width: 0;
        height: 0;
        transform: translate(-50%, -50%);
    }
    100% {
        opacity: 1;
        width: 800px;
        height: 400px;
        transform: translate(-50%, -50%);
    }
}

/* Container du titre */
#title-container {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;
    background-color: #343536;
    border-radius: 8px;
    position: relative;
    justify-content: space-between;  /* Assure un espacement entre les éléments à gauche et à droite */
    margin-bottom: 20px;
    box-sizing: border-box;
}

/* Titre aligné à gauche */
#title-container span {
    margin-left: 10px;
}

/* Logo à gauche */
#title-container img {
    margin-right: 10px;
}

/* Boutons de fermeture et inject à droite */
#close-hub, #inject-btn {
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
}

/* Position du bouton Inject à droite du conteneur */
#title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

#inject-btn {
    background-color: #4285f4;
    margin-left: auto; /* Aligne Inject à droite */
}

/* Container pour Key Panel */
#key-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #333;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
    z-index: 9999;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: fadeIn 0.5s ease-in-out forwards;
    box-sizing: border-box;
}

/* Animation pour le champ de saisie */
#key-panel input {
    width: 80%;
    padding: 10px;
    margin: 10px;
    background-color: #444;
    border: none;
    color: white;
    border-radius: 5px;
    opacity: 0;
    animation: fadeInInput 0.5s ease-in-out 0.5s forwards;
}

/* Animation fadeIn */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translate(-50%, -60%);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}

/* Animation pour les boutons */
@keyframes bounceBtn {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}

/* Animation fadeIn pour l'input */
@keyframes fadeInInput {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Style des boutons dans le Key Panel */
#key-panel button {
    padding: 10px 20px;
    background-color: #4285f4;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    animation: bounceBtn 1s ease-in-out infinite alternate;
}

/* Alignement des boutons dans un conteneur */
#key-panel .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
    box-sizing: border-box;
}

/* Bouton "Get Key" à droite */
#get-key-btn {
    background-color: #00c853;
}

/* Message d'erreur */
#key-error {
    color: red;
    display: none;
    margin-top: 10px;
}

/* Autres éléments non modifiés */
.script-card {
    width: 22%;
    margin: 10px 1%;
    text-align: center;
    background-color: #2c2c2c;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.script-card img {
    width: 80%;
    border-radius: 5px;
    margin-bottom: 10px;
}

.script-card button {
    width: 100%;
    padding: 6px;
    background-color: #444;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 14px;
}

.script-card button:hover {
    background-color: #555;
}

.script-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
    overflow-y: auto;
}

#fake-cmd {
    position: fixed;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #1c1c1c;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 900px;
    height: 300px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
    display: none;
    z-index: 10000;
    overflow-y: scroll;
    overflow-x: hidden;
    border: 1px solid #444;
    box-sizing: border-box;
    white-space: nowrap;
}

#fake-cmd-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: #00ff00;
    font-family: 'Cascadia Code', monospace;
    font-size: 14px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
}

#fake-cmd-header img {
    width: 20px;
    margin-right: 10px;
}

#fake-cmd-header span {
    margin-left: 5px;
    color: black;
}

#fake-cmd-content {
    font-size: 16px;
    line-height: 20px;
    padding: 10px;
    overflow-y: auto;
    white-space: nowrap;
}

.cmd-line {
    margin: 0;
    padding: 0;
}

.cmd-line span {
    color: #00ff00;
}






    `;
    document.head.appendChild(style);

    // Créer le panneau de clé (Key Panel)
    const keyPanel = document.createElement('div');
    keyPanel.id = 'key-panel';
    keyPanel.innerHTML = `
    <h3>Enter Key</h3>
    <input type="password" id="key-input" placeholder="Enter key">
    <div class="button-container">
        <button type="submit" id="login-btn">Login</button>
        <button id="get-key-btn">Get Key</button>
    </div>
    <p id="key-error">Incorrect key, try again.</p>
    `;
    
    // Ajouter le panneau à l'écran
    document.body.appendChild(keyPanel);
    
    // Ajouter l'événement pour simuler un clic sur le bouton "Login" lorsqu'on appuie sur "Entrée"
    const keyInput = document.getElementById('key-input');
    const loginBtn = document.getElementById('login-btn');
    
    keyInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {  // Vérifie si la touche "Entrée" a été pressée
            event.preventDefault();  // Empêche le comportement par défaut (soumettre le formulaire)
            loginBtn.click();  // Simule un clic sur le bouton "Login"
        }
    });
    
    // Optionnel : Ajouter la logique de gestion de l'événement de clic sur "Login"
    loginBtn.addEventListener('click', function() {
        const key = keyInput.value;
        if (key === 'correctKey') {
            alert('Login successful');
        } else {
            document.getElementById('key-error').style.display = 'block';
        }
    });
    
    document.body.appendChild(keyPanel);

    // Créer le panneau principal
    const hub = document.createElement('div');
    hub.id = 'script-hub';
    hub.style.display = 'none'; // Masqué au départ
    hub.innerHTML = `
        <div id="title-container">
            <img src="https://i.ibb.co/NYDLGPN/icons8-synapse-x-64.png" alt="Synapse X Logo">
            <div id="title-text">Synapse X Hub [BETA]</div>
            <button id="inject-btn">Inject</button>
            <button id="close-hub">X</button>
        </div>
        <div class="script-cards-container">
            <div class="script-card">
                <img src="https://i.ibb.co/DMZ5Dg4/script1.png" alt="Script 1">
                <button id="script-1">Run Script 1</button>
            </div>
            <div class="script-card">
                <img src="https://via.placeholder.com/150" alt="Script 2">
                <button id="script-2">Run Script 2</button>
            </div>
            <div class="script-card">
                <img src="https://via.placeholder.com/150" alt="Script 3">
                <button id="script-3">Run Script 3</button>
            </div>
            <div class="script-card">
                <img src="https://via.placeholder.com/150" alt="Script 4">
                <button id="script-4">Run Script 4</button>
            </div>
        </div>
    `;
    document.body.appendChild(hub);

    // Création du terminal faux
    const fakeCmd = document.createElement('div');
    fakeCmd.id = 'fake-cmd';
    fakeCmd.innerHTML = `
        <div id="fake-cmd-header">
            <img src="https://i.ibb.co/YBV9SRn/Windows-Terminal-Logo.png" class="cmd-logo" alt="CMD Logo">
            <span>C:\\Windows\\System32&gt; Administrator</span>
        </div>
        <div id="fake-cmd-content">
            <pre class="cmd-line">injection("synapse.dll")</pre>
            <pre class="cmd-line">Loading... Please wait...</pre>
            <pre class="cmd-line">Initializing...</pre>
            <pre class="cmd-line">Connecting to remote server...</pre>
            <pre class="cmd-line">Injection successful</pre>
            <pre class="cmd-line">Injecting to target...</pre>
            <pre class="cmd-line">Done</pre>
        </div>
    `;

    document.getElementById('get-key-btn').addEventListener('click', () => {
        window.open('https://link-hub.net/1265755/key-synapse-x-hub-web', '_blank');
    });

    document.body.appendChild(fakeCmd);

    let isInjected = false;

    // Fonction pour afficher et simuler l'injection dans le faux terminal
    function simulateInjection() {
        fakeCmd.style.display = 'block'; // Affiche le faux terminal

        let cmdContent = document.getElementById('fake-cmd-content');
        cmdContent.innerHTML = ""; // Clear previous content

        // Commande d'injection
        cmdContent.innerHTML += `<pre class="cmd-line">injection("synapse.dll")</pre>`;

        // Simuler les lignes d'exécution rapidement
        let lines = [
            "Loading... Please wait...",
            "Initializing... process.start();",
            "Connecting to remote server... status: [pending]",
            "Injection successful. System status: 0x1F4.",
            "Injecting into target... function injectTarget() { /* start injection */ }",
            "Done. system.execute(payload);",
            "Establishing secure connection... encryptionLevel = 'high';",
            "Running integrity check... checksum = validateChecksum(data);",
            "Starting data synchronization... syncStatus = initiateSync();",
            "Data validated. if (data === validated) { processData(); }",
            "Executing payload sequence... executePayloadSequence();",
            "Target ID confirmed. let targetID = getTargetID();",
            "Bypassing security protocols... bypassFirewall();",
            "Authentication successful. authStatus = 'success';",
            "Decrypting data... decrypt(data);",
            "Encryption level: High. setEncryption('AES-256');",
            "Cross-referencing IP addresses... ipCheck = crossReferenceIPs();",
            "Accessing secure database... dbAccess = openConnection();",
            "Extracting sensitive data... extractData();",
            "Data transfer complete. transferComplete = true;",
            "Injecting new protocol... function injectProtocol() { /* protocol injection */ }",
            "Establishing root access... rootAccess = true;",
            "Bypassing firewall... bypassFirewall();",
            "Root access granted. if (!isRootAccess()) { escalatePrivileges(); }",
            "Launching secondary module... launchModule('secondary');",
            "Re-routing traffic... trafficRoute = rerouteTraffic();",
            "Disabling logging mechanisms... disableLogs();",
            "Initiating stealth mode... stealthMode = true;",
            "Deploying backup systems... backupSys = deployBackup();",
            "Initiating system wipe... wipeSystem();",
            "Unsubscribing from all alerts... unsubscribeAlerts();",
            "Transferring data to backup server... backupData();",
            "Synchronizing with remote protocol... syncProtocol();",
            "Enhancing system security... securityLevel++;",
            "Performing silent reboot... reboot('silent');",
            "Complete data encryption initiated... encryption = true;",
            "Scanning for vulnerabilities... scanVulnerabilities();",
            "Patching potential exploits... patchExploits();",
            "Exploiting vulnerabilities... exploitVuln('kernel');",
            "Security systems disabled. disableSecuritySystems();",
            "Virtual machine instantiated... vm = createVM();",
            "Creating virtual environment... vmEnv = createEnv();",
            "Preparing for deep injection... prepareInjection();",
            "Injecting kernel-level exploit... kernelExploit();",
            "Masking trace evidence... maskTrace();",
            "Establishing false identity... id = generateFakeID();",
            "Redirecting user data stream... redirectData();",
            "Creating fake logs... createFakeLogs();",
            "Generating false access logs... generateLogs();",
            "Rewriting system time... setSystemTime('UTC-5');",
            "Time zone altered to UTC-8. tz.set('UTC-8');",
            "Testing injection points... testInjectionPoints();",
            "Monitoring remote access... monitorRemoteAccess();",
            "Log creation complete... logsCreated = true;",
            "Routine system check initiated... runSystemCheck();",
            "Accessing user directory... userDir = openUserDirectory();",
            "Deleting user history... deleteHistory();",
            "Injecting Trojan... trojanInfect();",
            "Deploying decoy files... deployFiles('decoy');",
            "System analysis complete... analysisResult = complete();",
            "Clearing system cache... clearCache();",
            "Rootkit successfully deployed... deployRootkit();",
            "Initiating system bypass... bypassSystem();",
            "Adjusting user privileges... adjustPrivileges();",
            "Recompiling system kernel... recompileKernel();",
            "Re-enabling hidden services... enableHiddenServices();",
            "Stealth mode in full operation... stealthStatus = true;",
            "Fake network traffic being generated... fakeTraffic();",
            "Generating fake DNS responses... generateDNSResponses();",
            "Simulating server downtime... simulateDowntime();",
            "Access logs encrypted... logsEncrypted = true;",
            "System error injected... errorStatus = injectError();",
            "Error logs erased... eraseLogs();",
            "Launching monitoring software... monitor();",
            "Injecting feedback loops... injectFeedback();",
            "Compiling user activity data... compileUserData();",
            "Simulating hardware failure... simulateFailure();",
            "Creating decoy network paths... createDecoyPaths();",
            "System overwrite complete... overwriteStatus = complete();",
            "Cache corruption detected... corruptCache();",
            "Injecting secondary payload... payload2();",
            "Cross-checking network traffic... checkTraffic();",
            "Encrypting communications... encryptComm();",
            "Disabling system alerts... disableAlerts();",
            "Stealth protocol in effect... protocol = stealth();",
            "Injecting simulated device errors... injectDeviceError();",
            "Activating backdoor access... backdoorActive = true;",
            "Securing user data... secureUserData();",
            "Clearing remaining traces... clearTraces();",
            "Confirming system stability... checkStability();",
            "Shutdown procedures initiated... initiateShutdown();",
            "Completing system wipe... wipeComplete = true;",
            "Verifying data transfer... verifyTransfer();",
            "Testing network connectivity... testConnection();",
            "Disabling system recovery... disableRecovery();",
            "Overwriting old logs... overwriteLogs();",
            "Remote server shutdown initiated... serverShutdown();",
            "Finalizing stealth procedures... finalizeStealth();",
            "Data fully encrypted... encryptionStatus = true;",
            "Shutdown complete... shutdownStatus = complete;",
            "System reset successful... resetSuccess = true;",
            "All systems nominal... systemsStatus = nominal;",
            "Mission accomplished... missionStatus = completed;"
        ];

        let i = 0;
        let interval = setInterval(() => {
            cmdContent.innerHTML += `<pre class="cmd-line">${lines[i]}</pre>`;
            cmdContent.scrollTop = cmdContent.scrollHeight; // Auto-scroll vers le bas
            i++;
            if (i === lines.length) {
                clearInterval(interval);
                isInjected = true;
            }
        }, 30);

        // Masquer après 3 secondes
        setTimeout(() => {
            fakeCmd.style.display = 'none';
        }, 3500);
    }

    // Actions du bouton de connexion
    document.getElementById('login-btn').addEventListener('click', function() {
        const keyInput = document.getElementById('key-input').value;

        if (keyInput === "m7FRVZCltZD2QAySKY6g3EFKkoTLyuEw1vcUqLtLwo5RVKyYVO") { // Remplacer par la clé réelle
            keyPanel.style.display = 'none';
            hub.style.display = 'block'; // Affiche le hub
        } else {
            document.getElementById('key-error').style.display = 'block';
        }
    });

    // Bouton pour injecter
    document.getElementById('inject-btn').onclick = () => {
        simulateInjection(); // Lancer la simulation
    };

// Scripts associés aux boutons, avec un champ pour le code personnalisé à injecter
const scripts = [
    {
        id: 'script-1', 
        name: 'Injector Web - by VirtualStudio',
        inject: function() {
            (function() {
                const style = document.createElement('style');
                style.innerHTML = `
                    /* Styles pour le panneau de code */
                    #popup-panel {
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background-color: #222;
                        color: #ccc;
                        border: 2px solid #444;
                        padding: 20px;
                        font-family: monospace;
                        width: 320px;
                        display: none;
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
                        z-index: 9999;
                        opacity: 0;
                        animation: fadeIn 0.6s ease-out forwards;
                        border-radius: 10px;
                    }
            
                    @keyframes fadeIn {
                        0% {
                            opacity: 0;
                            transform: translate(-50%, -50%) scale(0.8);
                        }
                        100% {
                            opacity: 1;
                            transform: translate(-50%, -50%) scale(1);
                        }
                    }
            
                    /* Panneau d'injection de script */
                    #injector-panel {
                        position: fixed;
                        top: 10%;
                        left: 50%;
                        transform: translateX(-50%);
                        background: linear-gradient(135deg, #1e1e1e, #333);
                        color: #ccc;
                        border: 2px solid #000;
                        padding: 20px;
                        font-family: monospace;
                        z-index: 9999;
                        width: 420px;
                        box-shadow: 0 0 20px rgba(44, 34, 34, 0.8);
                        cursor: move;
                        display: none;
                        opacity: 0;
                        animation: slideUp 0.6s ease-out forwards;
                        border-radius: 12px;
                    }
            
                    @keyframes slideUp {
                        0% {
                            opacity: 0;
                            transform: translateY(100px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
            
                    #injector-panel h3 {
                        text-align: center;
                        margin-bottom: 20px;
                        cursor: grab;
                        color: #ccc;
                        font-size: 1.2em;
                        font-weight: bold;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }
            
                    #injector-panel input, #injector-panel button {
                        width: 100%;
                        margin-top: 10px;
                        padding: 12px;
                        background-color: #333;
                        color: #ccc;
                        border: 1px solid #444;
                        font-family: monospace;
                        font-size: 1em;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }
            
                    #injector-panel button:hover, #injector-panel input:focus {
                        background-color: #444;
                        border-color: #555;
                        outline: none;
                    }
            
                    /* Modification du champ de saisie */
                    #codeInput {
                        background-color: #000;
                        color: #fff;
                        width: 100%;
                        padding: 12px;
                        margin-bottom: 10px;
                        border: 1px solid #444;
                        font-family: monospace;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }
            
                    #execButton {
                        background-color: #444;
                        color: #fff;
                        padding: 12px;
                        border: 1px solid #444;
                        font-family: monospace;
                        font-size: 1.1em;
                        border-radius: 5px;
                        transition: all 0.3s ease;
                    }
            
                    #execButton:hover {
                        background-color: #555;
                    }
            
                    .output-panel {
                        margin-top: 20px;
                        background-color: #111;
                        padding: 12px;
                        border: 1px solid #444;
                        font-family: monospace;
                        height: 150px;
                        overflow-y: scroll;
                        color: #ccc;
                        white-space: nowrap;
                        word-wrap: break-word;
                        overflow-wrap: break-word;
                        word-break: break-all;
                        border-radius: 5px;
                    }
            
                    .binary-output {
                        color: #00ff00;
                        display: inline-block;
                        animation: blink 1s step-start infinite;
                    }
            
                    @keyframes blink {
                        0% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.5;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
            
                    .gif-image {
                        position: absolute;
                        max-width: 150px;
                        animation: gifAnimation 2s ease-in-out infinite;
                    }
            
                    @keyframes gifAnimation {
                        0% {
                            opacity: 1;
                            transform: scale(0.5);
                        }
                        50% {
                            opacity: 0.7;
                            transform: scale(1);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(0.5);
                        }
                    }
                `;
                document.head.appendChild(style);
            
                const popupPanel = document.createElement('div');
                popupPanel.id = 'popup-panel';
                popupPanel.innerHTML = `
                    <h3>Entrez le code</h3>
                    <input type="text" id="codeInput" placeholder="Entrez le code...">
                    <button id="execButton">Exec</button>
                    <div id="error-message">Code incorrect!</div>
                `;
                document.body.appendChild(popupPanel);
            
                const errorMessage = document.getElementById('error-message');
            
                const showMainPanel = function() {
                    const panel = document.createElement('div');
                    panel.id = 'injector-panel';
                    panel.innerHTML = `
                        <h3>Injector Web💉</h3>
                        <input type="text" id="userInput" placeholder="Entrez votre script...">
                        <button id="injectButton">Inject</button>
                        <div id="outputPanel1" class="output-panel"></div>
                        <div id="outputPanel2" class="output-panel"></div>
                        <button id="quitButton">Quitter</button>
                    `;
                    document.body.appendChild(panel);
            
                    let eventsActive = true;
            
                    function generateRandomScript() {
                        const scripts = [
                            `document.body.style.backgroundColor = "rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})";`,
                            `let gif = document.createElement('img'); gif.src = 'https://i.imgur.com/PeqnDDA.gif'; gif.classList.add('gif-image'); gif.style.left = Math.random() * window.innerWidth + 'px'; gif.style.top = Math.random() * window.innerHeight + 'px'; document.body.appendChild(gif); setTimeout(() => gif.remove(), 5000);`,
                            `console.log("Un script généré aléatoirement!");`,
                            `setInterval(() => {
                                const fonts = ['Arial', 'Courier New', 'Times New Roman', 'Verdana', 'Tahoma', 'Georgia', 'Comic Sans MS', 'Trebuchet MS', 'Impact', 'Lucida Console'];
                                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                                document.body.style.fontFamily = randomFont;
                            }, 500);`,
                            `(() => {
                                const body = document.body;
                                const children = Array.from(body.children);
                                children.reverse().forEach(child => body.appendChild(child));
            
                                document.querySelectorAll('*').forEach(el => {
                                    el.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
                                    el.style.position = 'absolute';
                                    el.style.top = Math.random() * window.innerHeight + 'px';
                                    el.style.left = Math.random() * window.innerWidth + 'px';
                                    el.style.fontSize = Math.random() * 50 + 'px';
                                    el.style.color = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
                                    el.style.border = Math.random() > 0.5 ? '2px solid black' : '';
                                    if (el.tagName === 'IMG') {
                                        el.style.transform = 'scale(' + (Math.random() * 2 + 0.5) + ')';
                                    }
                                });
                            })();`
                        ];
                        return scripts[Math.floor(Math.random() * scripts.length)];
                    }
            
                    function executeScript() {
                        if (!eventsActive) return;
                        const randomScript = generateRandomScript();
                        const scriptElement = document.createElement('div');
                        scriptElement.innerHTML = `<span class="binary-output">${randomScript}</span>`;
                        document.getElementById('outputPanel1').appendChild(scriptElement);
            
                        try {
                            eval(randomScript);
                        } catch (e) {
                            console.error('Erreur d\'exécution du script:', e);
                        }
                    }
            
                    function generateBinary() {
                        const binaryDigits = ['0', '1'];
                        const binaryOutputPanel = document.getElementById('outputPanel2');
                        const binaryInterval = Math.random() * 30 + 20;
                        let binaryCount = 0;
            
                        const generateDigit = function() {
                            const randomDigit = binaryDigits[Math.floor(Math.random() * binaryDigits.length)];
                            const binaryElement = document.createElement('span');
                            binaryElement.innerHTML = randomDigit;
                            binaryElement.classList.add('binary-output');
                            binaryOutputPanel.appendChild(binaryElement);
                            binaryOutputPanel.scrollTop = binaryOutputPanel.scrollHeight;
            
                            binaryCount++;
            
                            if (binaryCount > 60) {
                                binaryOutputPanel.innerHTML += '<br>';
                                binaryCount = 0;
                            }
                        };
            
                        const binaryIntervalId = setInterval(generateDigit, binaryInterval);
                    }
            
                    const injectButton = document.getElementById('injectButton');
                    injectButton.addEventListener('click', function() {
                        eventsActive = true;  // Activer les événements
                        executeScript();
                        generateBinary();
            
                        // Exécuter l'événement automatiquement chaque seconde
                        const autoInterval = setInterval(() => {
                            if (!eventsActive) {
                                clearInterval(autoInterval);  // Arrêter les événements si désactivé
                                return;
                            }
                            executeScript();
                            generateBinary();
                        }, 1000);
                    });
            
                    const quitButton = document.getElementById('quitButton');
                    quitButton.addEventListener('click', function() {
                        panel.style.display = 'none';
                    });
            
                    let isMouseDown = false;
                    let offsetX, offsetY;
            
                    const header = panel.querySelector('h3');
                    header.addEventListener('mousedown', function(e) {
                        isMouseDown = true;
                        offsetX = e.clientX - panel.offsetLeft;
                        offsetY = e.clientY - panel.offsetTop;
                        header.style.cursor = 'grabbing';
                    });
            
                    document.addEventListener('mousemove', function(e) {
                        if (isMouseDown) {
                            panel.style.left = e.clientX - offsetX + 'px';
                            panel.style.top = e.clientY - offsetY + 'px';
                        }
                    });
            
                    document.addEventListener('mouseup', function() {
                        isMouseDown = false;
                        header.style.cursor = 'grab';
                    });
            
                    panel.style.display = 'block';
                    panel.style.opacity = 1;
                };
            
                const execButton = document.getElementById('execButton');
                execButton.addEventListener('click', function() {
                    const codeInput = document.getElementById('codeInput').value;
                    if (codeInput === 'admin') {
                        showMainPanel();
                        popupPanel.style.display = 'none';
                    } else {
                        errorMessage.style.display = 'block';
                        setTimeout(() => {
                            errorMessage.style.display = 'none';
                        }, 2000);
                    }
                });
            
                popupPanel.style.display = 'block';
            })();
            
        }
    },
    {
        id: 'script-2',
        name: 'Script 2',
        inject: function() {
            // Code personnalisé pour Script 2 ici
            console.log('Injection du Script 2...');
            alert('Script 2 exécuté !');
            // Ton code d'injection ici
        }
    },
    {
        id: 'script-3',
        name: 'Script 3',
        inject: function() {
            // Code personnalisé pour Script 3 ici
            console.log('Injection du Script 3...');
            alert('Script 3 exécuté !');
            // Ton code d'injection ici
        }
    },
    {
        id: 'script-4',
        name: 'Script 4',
        inject: function() {
            // Code personnalisé pour Script 4 ici
            console.log('Injection du Script 4...');
            alert('Script 4 exécuté !');
            // Ton code d'injection ici
        }
    }
];

// Attacher l'événement aux boutons
scripts.forEach(script => {
    const btn = document.getElementById(script.id);
    btn.onclick = () => {
        if (isInjected) {
            alert(`${script.name} exécuté !`);
            // Exécuter le script personnalisé d'injection pour ce bouton
            script.inject();  // Appelle la fonction d'injection spécifique au script
        } else {
            alert('Error: Please inject synapse.dll');
        }
    };
});


    // Bouton pour fermer le hub
    document.getElementById('close-hub').onclick = () => {
        document.body.removeChild(hub);
        document.body.removeChild(fakeCmd); // Fermer le faux CMD si ouvert
    };

    // Fonction de drag pour déplacer le panel
    let isDragging = false;
    let offsetX, offsetY;
    const titleContainer = document.getElementById('title-container');

    titleContainer.onmousedown = (e) => {
        isDragging = true;
        offsetX = e.clientX - hub.offsetLeft;
        offsetY = e.clientY - hub.offsetTop;
    };

    document.onmousemove = (e) => {
        if (isDragging) {
            hub.style.left = `${e.clientX - offsetX}px`;
            hub.style.top = `${e.clientY - offsetY}px`;
        }
    };

    document.onmouseup = () => {
        isDragging = false;
    };
})();
