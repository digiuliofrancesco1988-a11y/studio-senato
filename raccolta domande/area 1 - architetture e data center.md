# Area 1 — Architetture dei sistemi elaborativi e data center

Questa area è la prima parte del gruppo 1 della seconda prova e il colloquio orale sulle architetture. Si legge insieme all’area 2, perché un centro dati di oggi è quasi sempre ferro che ospita macchine virtuali. Allo scritto ogni voce è un quesito da una o due pagine. Nella prima prova gli stessi concetti diventano scelte: quanti nodi, che copie, che sala.

### Il filo

Si parte dalla macchina: processore, memoria, disco, rete, e il sistema operativo che li amministra. Poi si sale al modo in cui più persone usano lo stesso servizio, a due o a tre livelli. Il data center è il luogo fisico di quelle macchine: requisiti, classificazione, ridondanza, energia e raffreddamento. La scalabilità dice come il servizio cresce. Lo storage dice dove stanno i dati che devono sopravvivere allo spegnimento. Backup, replica e snapshot dicono che cosa si può perdere e in quanto tempo si torna. I siti caldo, tiepido e freddo sono la stessa domanda spostata in un altro edificio. Il client leggero chiude il cerchio: dove sta il dato, sulla scrivania o nel centro.

### Come si risponde

Una risposta di architettura nomina il pezzo e il guasto che quel pezzo regge. «Abbiamo il RAID» non basta: si dice il livello e si aggiunge che il RAID non è un backup. «Il server è potente» non basta: si dice se manca RAM, rete o un secondo nodo. I numeri, RPO e RTO, si scelgono e poi il disegno deve essere capace di mantenerli.

### Da dove partire

Verde, e in quest’ordine: sistema operativo, architettura a tre livelli, backup con RPO e RTO, backup completo incrementale e differenziale. Il data center e i Tier stanno subito dopo. Il client leggero e il sito caldo si studiano quando i verdi sono già riscrivibili a memoria.

## Da che cosa è composto un sistema elaborativo

**Prove:** seconda prova gruppo 1, orale
**Tag:** CPU, memoria, bus, I/O, server
**Semaforo:** giallo

### Inquadramento

La macchina si racconta per ciò che fa ciascun pezzo quando il servizio è sotto carico, non per il catalogo dei componenti. Processore, memoria volatile, memoria di massa, rete e sistema operativo sono cinque risposte a cinque colli di bottiglia. In un quesito si sceglie il collo che la traccia suggerisce, per esempio la RAM che finisce e costringe il sistema a paginare, e si dice che cosa si aggiunge. Sul foglio, dopo la definizione, si dedica un capoverso a un nodo di un ente: chi esegue, chi ricorda, chi conserva, chi parla con gli altri nodi. Si chiude con il pezzo unico che, se manca, isola il servizio anche se il processore è libero.

### Definizione

Un sistema elaborativo è l’insieme delle componenti che acquisiscono dati, li elaborano secondo istruzioni e restituiscono risultati. Nel modello classico di von Neumann la macchina esegue un programma memorizzato: le istruzioni e i dati stanno in memoria, e l’unità centrale le preleva ed esegue una dopo l’altra. Un server è un sistema elaborativo specializzato nell’erogare servizi ad altri sistemi, i client, in modo continuativo e spesso multiutente.

### Le componenti e il loro ruolo

L’unità centrale di elaborazione, la CPU, esegue le istruzioni. Al suo interno contano l’unità aritmetico-logica, i registri e l’unità di controllo, che scandisce il ciclo fetch-decode-execute. Più core permettono di eseguire più flussi di istruzioni in parallelo. La frequenza di clock non basta da sola a descrivere la potenza: contano anche il numero di core, la cache e l’ampiezza dei dati trattati in un ciclo.

La memoria centrale, in genere RAM, è veloce e volatile: allo spegnimento il contenuto si perde. La CPU non lavora direttamente sui dischi, troppo lenti. Usa una gerarchia. I registri sono i più veloci e i più piccoli. Poi vengono le cache L1, L2 e L3, la RAM e infine la memoria di massa, persistente: dischi a stato solido, dischi magnetici, nastri per l’archiviazione. Più si scende nella gerarchia, più crescono capacità e tempi di accesso.

Il bus è il canale su cui viaggiano dati, indirizzi e segnali di controllo fra CPU, memoria e periferiche. Le unità di ingresso e uscita collegano il sistema al mondo esterno: rete, tastiera, storage. Un controller e un driver mediano tra l’hardware e il sistema operativo. Il sistema operativo gestisce processi, memoria, file e dispositivi, e offre alle applicazioni un’interfaccia stabile.

In un centro dati il «sistema» utile all’esame non è il singolo PC. È un nodo server: alimentatori ridondati, molta RAM, schede di rete multiple, dischi in RAID oppure, più spesso, storage esterno condiviso, e un sistema operativo per server o un hypervisor.


### Nel dettaglio

Il ciclo che la commissione si aspetta di sentire nominato ha tre passi, e conviene raccontarlo su un’istruzione sola. Il processore tiene nel registro contatore l’indirizzo della prossima istruzione. Nel fetch legge quell’indirizzo dalla memoria e porta l’istruzione in un registro interno. Nel decode capisce di che operazione si tratta e quali registri o indirizzi usa. Nell’execute l’unità aritmetico-logica la compie, per esempio somma due registri, e scrive il risultato. Poi il contatore avanza. Un programma è questa sequenza ripetuta milioni di volte al secondo. Se i dati dell’istruzione non sono già in cache, il processore si ferma ad aspettare la RAM: il clock alto non serve se a ogni somma si attende la memoria.

Gli ordini di grandezza rendono credibile il discorso sul collo di bottiglia. Un registro risponde in una frazione di nanosecondo. Una cache di primo livello sta nell’ordine del nanosecondo. La RAM sta nell’ordine del centinaio di nanosecondi, decine o centinaia di volte più lenta della cache. Un disco a stato solido sta nei microsecondi o nelle decine di microsecondi. Un disco magnetico sta nei millisecondi, un milione di volte più lento della RAM. La rete di sala, se il dato è su un altro nodo, aggiunge il suo ritardo e può diventare il limite prima del disco. Per questo la CPU non «lavora sul database»: lavora su copie in RAM, e il disco entra quando la RAM non basta o quando il dato va reso durevole.

Quando la RAM finisce, il sistema operativo pagina: sposta sul disco pagine di memoria poco usate e le richiama se servono. Una pagina è un blocco di alcuni kilobyte. Un page fault, cioè un accesso a una pagina che non è in RAM, costa il tempo del disco, non il tempo della RAM. Se le pagine attive sono più della RAM, il sistema passa il tempo a scaricare e ricaricare le stesse pagine. Si chiama thrashing: il processore è quasi ozioso e il disco è saturo. In un quesito sul rallentamento brusco di un server sotto carico, la risposta forte è questa, non «serve una CPU più veloce». Si misura la RAM occupata, lo swap, e si aggiunge memoria oppure si riduce il numero di processi.

In un nodo di sala i dettagli che distinguono un server da un PC da scrivania sono pochi e vanno saputi. La RAM dei server è spesso ECC: corregge l’errore di un bit, frequente quando la memoria è tanta e resta accesa per anni. Gli alimentatori sono due, e ciascuno regge da solo il nodo. Le schede di rete sono due, legate in modo che il cavo o la porta guasta non isolino la macchina. I dischi locali, se ci sono, stanno in RAID oppure il nodo non ha dati propri e legge da uno storage esterno. Il sistema operativo è un sistema per server, senza interfaccia grafica obbligatoria, e sopra spesso sta un hypervisor.

Sul foglio, dopo i cinque pezzi, si scrive un dimensionamento minimo di un nodo applicativo. Due alimentatori. RAM dimensionata sul numero di processi concorrenti, con margine, perché la paginazione costa più della RAM che si è risparmiata. Due interfacce di rete. Nessun dato durevole solo sul disco interno, se il servizio deve sopravvivere alla morte del nodo. Il pezzo unico da citare in chiusura è quello che nel disegno è disegnato una volta sola: una sola scheda, un solo switch, un solo alimentatore di rack.

### Esempio

Un’applicazione di gestione ticket non «gira sul processore» in astratto. Il processo del server applicativo sta in RAM, la CPU esegue la logica a ogni richiesta, i dati persistenti stanno su storage, e la scheda di rete porta le richieste HTTP. Se la RAM è insufficiente il sistema usa la memoria virtuale su disco e rallenta in modo brusco. Se la scheda di rete è unica, un guasto isola il server anche se CPU e dischi sono sani.

### In sede di prova

Se il quesito chiede l’architettura di un sistema, nominare CPU, memoria, storage, rete e sistema operativo, e dire a che cosa serve ciascuno. Se il quesito è su un’applicazione, usare gli stessi pezzi per giustificare il dimensionamento: più utenti contemporanei chiedono più RAM e più capacità di rete, non soltanto «un server più potente».

### Errori da evitare

- Confondere la memoria RAM, volatile, con il disco, persistente.
- Dire che un server è soltanto un computer più grande, senza dire che eroga un servizio a più client.
- Descrivere solo la CPU e dimenticare rete e storage, che in un data center sono spesso il collo di bottiglia.

### Approfondire

- [CPU](https://it.wikipedia.org/wiki/CPU)

## Architettura client-server e uso multiutente

**Prove:** prima prova, seconda prova gruppo 1, orale
**Tag:** client, server, concorrenza, sessione
**Semaforo:** verde

### Inquadramento

Multiutente non è «tanti PC accesi». È un servizio che più persone usano insieme, con sessioni distinte e dati che non si mescolano. Il client chiede, il server decide e conserva. In un elaborato questa voce è la premessa dell'architettura a tre livelli: si annuncia qui e si disegna dopo. Sul foglio si descrive una richiesta concreta, dall'azione della persona fino alla riga scritta, e si dice dove sta la sessione. Si evita di chiamare server qualunque computer acceso in una stanza.

### Definizione

L’architettura client-server divide i ruoli. Il client chiede un servizio. Il server lo esegue e risponde. In un’applicazione web il client è di solito il browser: mostra l’interfaccia e invia richieste. Il server applica le regole e decide che cosa è lecito. Più client usano lo stesso server nello stesso momento: questo è il senso di applicazione multiutente.

### Come si svolge una richiesta

L’utente compila un modulo. Il browser costruisce una richiesta HTTP, protetta da TLS se l’indirizzo è HTTPS, e la invia al server. Il server ricostruisce l’identità dell’utente dalla sessione o da un token, controlla se quel ruolo può compiere l’operazione, valida i dati, eventualmente interroga il database e restituisce una risposta: una pagina, un frammento, o un oggetto JSON se a parlare è un’interfaccia moderna con una API.

Il controllo non può stare soltanto nel browser. Il browser è sotto il controllo di chi lo usa: un modulo può essere modificato, una richiesta può essere riscritta. Ogni operazione che cambia dati o mostra dati riservati va autorizzata di nuovo sul server.

Multiutente significa anche concorrenza. Due persone possono leggere lo stesso dato e tentare di modificarlo insieme. Se il server accetta entrambe le scritture senza criterio, l’ultima cancella il lavoro della prima senza accorgersene. Si usano transazioni nel database, un numero di versione del record, oppure un blocco temporaneo. La scelta va detta nell’elaborato, anche in una frase.

La sessione è il modo in cui il server ricorda l’utente fra una richiesta e l’altra. HTTP da solo non ha memoria. Un identificativo di sessione, custodito in un cookie protetto, oppure un token, collega le richieste successive allo stesso utente già autenticato. La sessione ha una scadenza. Il logout la invalida.


### Nel dettaglio

HTTP è senza stato: ogni richiesta è un messaggio a sé, e il server non ricorda la precedente solo perché arriva dallo stesso browser. La memoria fra una richiesta e l’altra si costruisce. Nel modo classico il server, dopo il login, crea una sessione e manda al browser un identificativo dentro un cookie. Il cookie ha gli attributi che contano: Secure, così viaggia solo su HTTPS; HttpOnly, così uno script della pagina non lo legge; SameSite, che riduce l’invio verso altri siti. A ogni richiesta successiva il browser rimanda il cookie, il server ritrova la sessione e sa chi è l’utente. La sessione scade per inattività e il logout la cancella sul server: cancellare solo il cookie nel browser lascia la sessione viva, se qualcuno ha copiato l’identificativo.

L’alternativa è un token firmato che il server non deve memorizzare. Il token contiene identità, ruolo e scadenza, e una firma che solo il server sa produrre. A ogni richiesta si verifica la firma e la scadenza. Il vantaggio è che qualunque nodo applicativo può controllarlo senza consultare una sessione centrale. Il costo è la revoca: un token già emesso resta valido fino alla scadenza, salvo una lista di token revocati. In un elaborato basta scegliere uno dei due e dire dove sta la scadenza. Mescolarli senza dire chi decide è il modo in cui il discorso si ingarbuglia.

La concorrenza va mostrata con i numeri, non solo nominata. Due tecnici aprono lo stesso ticket, versione 4. Il primo scrive un commento e chiude: il server accetta perché la versione che il client dichiara è ancora 4, scrive, porta la versione a 5. Il secondo, che aveva letto la 4, invia la propria modifica. Il server vede che il record ora è a 5 e rifiuta, chiedendo di rileggere. Senza versione, la seconda scrittura copre la prima e il commento del primo tecnico sparisce. Questo si chiama controllo ottimistico. Il controllo pessimistico invece blocca la riga alla lettura: il secondo attende. In un’applicazione di ufficio, con letture lunghe e modifiche brevi, l’ottimistico è la scelta da scrivere, perché un blocco dimenticato terrebbe ferma la pratica.

Multiutente significa anche che i dati di una persona non si mescolano con quelli di un’altra per un errore di filtro. La query che elenca i ticket deve contenere il vincolo sull’identità, preso dalla sessione e non dal parametro che il browser può cambiare. Se l’elenco filtra con un identificativo arrivato dall’indirizzo, chiunque cambia quel numero e vede la pratica del collega. Il pulsante nascosto nell’interfaccia non corregge questa query.

Sul foglio si raccontano quattro tempi di una sola operazione. Il browser manda la richiesta con il cookie. Il server risolve la sessione. Il server autorizza il ruolo su quell’oggetto. Il server scrive in transazione e risponde. Poi una seconda frase dice che cosa succede se due richieste toccano la stessa riga.

### Esempio

Nel portale di assistenza il dipendente apre un ticket e il tecnico, nello stesso minuto, lo prende in carico. Sono due client, due ruoli, due richieste. Il server deve impedire che il dipendente, modificando la pagina nel browser, si assegni da solo la priorità «critica» riservata all’amministratore. Il permesso si verifica sul server a ogni cambio di stato.

### In sede di prova

Disegnare tre blocchi: browser, server applicativo, database. La freccia fra browser e server si chiama HTTPS. La freccia fra server e database non esce verso Internet. Scrivere dove avvengono login, autorizzazione e validazione: tutti e tre sul server.

### Errori da evitare

- Far controllare i permessi solo dall’interfaccia, nascondendo i pulsanti. Nascondere un pulsante non è una misura di sicurezza.
- Dimenticare che due utenti possono agire insieme.
- Chiamare «server» in modo indistinto la macchina fisica, il sistema operativo, l’applicazione e il database.

### Approfondire

- [Sistema client/server](https://it.wikipedia.org/wiki/Sistema_client/server)
- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

## Architettura a due e a tre livelli

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** presentazione, logica, persistenza, tre livelli
**Semaforo:** verde

### Inquadramento

I livelli sono responsabilità, non obbligatoriamente tre computer. Presentazione, regole, dati. Il punto d'esame è dove si ricontrolla il permesso: sul nodo che applica le regole, a ogni richiesta, mai solo nel browser. Il modello a due livelli si cita per rifiutarlo, con il motivo che disperderebbe credenziali e regole sulle postazioni. Sul foglio si disegnano i tre rettangoli e si scrive sulla freccia il protocollo. Una nota dice che il database non ha un indirizzo pubblico.

### Definizione

Un’architettura a livelli separa parti del sistema che cambiano per ragioni diverse. Nell’architettura a tre livelli si distinguono la presentazione, la logica applicativa e la persistenza dei dati. L’architettura a due livelli accorpa, in genere, presentazione e logica sul client, che parla direttamente con il database.

### Perché si separano

La presentazione è ciò che l’utente vede e usa: pagine, moduli, elenchi, messaggi di errore. Cambia quando si ridisegna l’interfaccia o si aggiunge un’app, senza che debbano cambiare le regole.

La logica applicativa è il luogo delle regole: chi può approvare, quali campi sono obbligatori, come si calcola una priorità, quali transizioni di stato sono ammesse. Sta sul server. È l’unico punto che il client non può aggirare.

La persistenza conserva i dati oltre la singola richiesta: database relazionale, file, eventualmente un archivio documentale. Il database non deve conoscere i colori dell’interfaccia, e l’interfaccia non deve conoscere la disposizione fisica dei dischi.

La separazione permette di sostituire un pezzo. Si può rifare l’interfaccia e lasciare invariati i servizi. Si può aggiungere un secondo server applicativo dietro un bilanciatore senza riprogettare le tabelle. Si possono fare test sulla logica senza aprire il browser.

Nel modello a due livelli, tipico di vecchie applicazioni desktop, il client contiene le regole e si collega al database con le credenziali di accesso ai dati. Ogni postazione diventa una superficie di attacco. Cambiare una regola obbliga ad aggiornare tutti i client. Per un’applicazione multiutente esposta anche solo alla rete interna di un ente, i tre livelli sono la scelta da spiegare per prima.

Un raffinamento frequente è inserire un reverse proxy davanti al server applicativo: termina TLS, filtra, e inoltra solo il traffico lecito. Il database resta in una rete raggiungibile soltanto dai server applicativi.


### Nel dettaglio

Conviene seguire una richiesta e dire, a ogni salto, che cosa quel livello ha il diritto di sapere. Il browser conosce la schermata e i valori digitati. Non conosce la password del database e non dovrebbe conoscere la forma delle tabelle. Il reverse proxy conosce il certificato, l’indirizzo pubblico e le regole grossolane: dimensione massima della richiesta, provenienza, percorso lecito. Non applica la regola «solo il tecnico chiude il ticket». Il nodo applicativo conosce l’utente, il ruolo e la regola, e traduce l’operazione in una chiamata al database. Il database conosce tabelle, vincoli e transazioni. Non sa se a chiamare è stato un modulo o un’altra schermata.

Il punto che in un tema resta spesso vago è il collegamento tra nodo applicativo e database. Aprire una connessione nuova a ogni richiesta costa: l’autenticazione e l’allocazione pesano più della query breve. Si tiene un insieme di connessioni già aperte, il pool, e ogni richiesta ne prende una e la restituisce. Se il pool è di venti connessioni e arrivano duecento richieste insieme, le altre attendono. Questo numero va dimensionato insieme al database, che a sua volta ha un massimo di connessioni: due nodi applicativi con un pool da cento possono esaurire un database configurato per centocinquanta. In un elaborato basta una frase: le connessioni sono in pool, e il database accetta connessioni solo dagli indirizzi dei nodi applicativi, su una sola porta.

Il modello a due livelli fallisce in modo preciso, e conviene dirlo con l’aggiornamento di una regola. La regola «un ticket critico lo chiude solo il responsabile» sta compilata dentro il programma sulla postazione. L’ufficio ha ottanta postazioni. Si cambia la regola. Finché una postazione non viene aggiornata, quella postazione applica la regola vecchia. Se la postazione è stata modificata, applica qualunque regola. Le credenziali del database, uguali o ricavabili, stanno sul disco di ogni ufficio. Un tre livelli sposta la regola in un solo punto: si aggiorna il nodo, e dalla richiesta successiva tutti vedono la regola nuova. Le postazioni non hanno credenziali del database.

Due livelli logici possono convivere con tre macchine, e tre livelli logici possono stare su una macchina sola in laboratorio. La frase che chiude la confusione è: i livelli sono responsabilità, i nodi sono pezzi di ferro, le zone di rete sono il modo in cui si impedisce a un utente di saltare un livello. In produzione si separano almeno la zona degli utenti, la zona dei nodi applicativi e la zona del database. In laboratorio si può dichiarare che stanno sullo stesso host, e che il disegno di rete è quello che si adotterebbe in esercizio.

Se il tema chiede di crescere, il livello che si duplica per primo è l’applicativo, perché è senza stato durevole: la sessione sta in un deposito condiviso oppure il token si verifica in locale, e un bilanciatore manda la richiesta al nodo sano. Il database non si duplica con la stessa leggerezza: due copie che accettano scritture insieme richiedono un criterio di coerenza. Si dice esplicitamente che si aggiungono nodi applicativi e si lascia un solo punto di scrittura dei dati, con una replica per la lettura o per il guasto.

### Esempio

Richiesta di assistenza. Presentazione: modulo «nuovo ticket» e elenco filtrabile. Logica: solo un tecnico può passare lo stato a «risolto»; l’oggetto non può essere vuoto; l’utente vede solo i propri ticket. Persistenza: tabelle utente, ticket, commento. Se domani si aggiunge una vista per il responsabile con i tempi medi, si aggiunge una schermata e una interrogazione, senza cambiare il significato di «risolto».

### In sede di prova

Usare i tre nomi e una frase sul beneficio: manutenzione indipendente, sicurezza, possibilità di crescere. Scrivere esplicitamente che il browser non ha una connessione verso il database.

### Errori da evitare

- Chiamare «tre livelli» una pila in cui il browser interroga il database e il server è solo un passaggio vuoto.
- Confondere i livelli logici (presentazione, logica, dati) con le macchine fisiche. Due livelli logici possono stare sulla stessa macchina in un laboratorio, e tre livelli logici possono stare su molte macchine in produzione. In un tema serio si dice anche come sono disposti in rete.
- Dimenticare il reverse proxy o, all’opposto, aggiungere cinque strati che non si sanno spiegare.

### Svolgimento da consegnare
Un'applicazione multiutente destinata a un ente non va disegnata come un programma unico in cui la postazione dell'utente contiene le regole e si collega da sola al database. Quella disposizione, a due livelli, era tipica di vecchie applicazioni da scrivania: il client mostrava le finestre e contemporaneamente decideva che cosa era lecito, e apriva una connessione verso il DBMS con credenziali che stavano sulla postazione. Funziona finché gli utenti sono pochi, le regole non cambiano e nessuno modifica il client. In un ufficio reale non regge. Ogni postazione diventa una via d'accesso ai dati. Cambiare una regola obbliga ad aggiornare tutti i client. Due utenti che lavorano insieme non hanno un punto solo in cui la concorrenza viene decisa.

L'architettura a tre livelli separa ciò che cambia per ragioni diverse. Il primo livello è la presentazione: le schermate, i moduli, i messaggi di errore, ciò che la persona vede e capisce. Il secondo è la logica applicativa, sul server: chi può fare che cosa, quali campi sono obbligatori, quali passaggi di stato sono ammessi, come si calcola un termine. Il terzo è la persistenza: il database e, se servono, i file. Il browser parla solo con il server, in HTTPS. Il server parla con il database, su una rete che gli utenti non raggiungono. Questa frase va scritta nel tema, perché è il punto in cui si vede se il candidato ha capito la sicurezza oppure ha solo nominato tre scatole.

La separazione non è un vezzo di disegno. Permette di rifare l'interfaccia senza riscrivere le regole, di aggiungere un secondo server applicativo dietro un bilanciatore quando crescono gli utenti, di sostituire il DBMS senza toccare le schermate, e di provare le regole senza aprire il browser. Permette anche il controllo vero dei permessi. Il browser è sul computer di chi lo usa: un pulsante nascosto si può far ricomparire, un identificativo nell'indirizzo si può cambiare. Per questo ogni operazione che legge un dato riservato o ne modifica uno deve essere autorizzata di nuovo sul server, a ogni richiesta, non solo al momento del login.

In un elaborato il disegno minimo ha quattro blocchi, non tre, se il servizio è raggiungibile da una rete non del tutto fidata: browser, reverse proxy, server applicativo, database. Il proxy termina TLS, applica le prime regole di rete e inoltra solo il traffico HTTP atteso. I nodi applicativi sono almeno due se si è promesso che il guasto di una macchina non ferma il servizio; altrimenti si dichiara il fermo accettato. Il database sta in una zona propria. La freccia che non deve esistere è quella dal browser al database.

```disegno
titolo: Architettura a tre livelli, da ridisegnare sul foglio
riga: Browser dell'utente
freccia: HTTPS, porta 443, unica freccia che arriva dall'utente
riga: Reverse proxy
freccia: HTTP interno, solo dalla DMZ verso i nodi
riga: Nodo applicativo 1 | Nodo applicativo 2
freccia: SQL, solo dagli indirizzi dei nodi, una sola porta
riga: Database
nota: I permessi si ricontrollano sul nodo applicativo a ogni richiesta. Il database non ha un indirizzo pubblico.
```

La chiusura del quesito può essere questa. I tre livelli non sono tre computer obbligatori: sono tre responsabilità. In laboratorio possono stare sulla stessa macchina. In esercizio si separano almeno logicamente, e in rete si separano il database dagli utenti. Il modello a due livelli si cita come alternativa scartata, con il motivo: disperderebbe le regole e le credenziali sulle postazioni.

### Approfondire

- [Architettura multi-tier](https://it.wikipedia.org/wiki/Architettura_multi-tier)
- [Server web](https://it.wikipedia.org/wiki/Server_web)

## Che cos’è un data center e quali requisiti ha

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** CED, continuità, facility
**Semaforo:** verde

### Inquadramento

Il data center è il luogo che tiene in vita i servizi, non un magazzino di computer. Energia, raffreddamento, controllo degli accessi fisici, connettività e spazio per crescere sono requisiti, e ciascuno si lega a un guasto. In un tema si dichiara la sala che si ha, anche se è modesta, invece di promettere un edificio che l'ente non possiede. Sul foglio si elencano i requisiti e, accanto, la conseguenza se quel requisito manca: un condizionatore fermo spegne i server quanto un'interruzione elettrica.

### Definizione

Un data center, o centro di elaborazione dati, è un locale o un edificio progettato per ospitare sistemi informatici, apparati di rete e le infrastrutture che li tengono in funzione: energia, raffreddamento, connettività e sicurezza fisica. Non è un ufficio con dei server in un angolo. È un impianto il cui scopo è la continuità del servizio.

### I requisiti che vanno saputi elencare

L’alimentazione deve reggere un black-out e un guasto di un componente. Si usano gruppi di continuità, gli UPS, che intervengono subito grazie alle batterie, e gruppi elettrogeni che subentrano se l’interruzione dura. I percorsi elettrici dei siti più esigenti sono doppi, fino a doppi alimentatori dentro al singolo server.

Il raffreddamento tiene temperatura e umidità in una fascia adatta all’elettronica. L’aria fredda è inviata verso le prese d’aria degli apparati e l’aria calda è estratta, spesso con corridoi freddi e corridoi caldi separati, per non mescolare i due flussi. Senza raffreddamento i server si spengono o si guastano anche se l’energia c’è.

La connettività è ridondata: più operatori, più percorsi di fibra, apparati di rete in coppia. Un data center isolato dalla rete non eroga servizi, per quanto siano sani i server.

La sicurezza fisica comprende controllo degli accessi, registrazione degli ingressi, videosorveglianza, e protezione antincendio adatta all’elettronica, non un impianto che allaga le sale. Gli armadi sono chiusi. Le zone sono distinte: sala sistemi, sala rete, locali tecnici per gli impianti.

La gestione operativa è parte del requisito. Servono monitoraggio, procedure di cambio, inventario dei cavi e delle macchine, e un piano per il ripristino. Un impianto perfetto senza persone e procedure si ferma al primo allarme ignorato.


### Nel dettaglio

Una sala si racconta dalla porta verso il rack, non dal software. L’accesso è a zone. Il corridoio dell’edificio non è la sala. La sala non è l’armadio. Un badge apre la sala e un secondo controllo, o una chiave registrata, apre l’armadio. Gli ingressi restano in un registro: chi, quando, perché. Senza registro, un guasto fisico scoperto il lunedì non ha un sospetto orario. La videosorveglianza copre gli accessi e non sostituisce il controllo: una telecamera senza qualcuno che risponda all’allarme documenta il fatto dopo.

L’energia si descrive come una catena, e ogni anello ha un compito diverso. La rete elettrica dell’edificio alimenta il gruppo di continuità. Il gruppo di continuità, in linea, condiziona l’alimentazione e, se la rete cade, le batterie reggono senza interruzione avvertibile dai server: il tempo di intervento è nullo perché le batterie sono già in linea. Il gruppo elettrogeno non è istantaneo: parte, si stabilizza, e poi un commutatore gli affida il carico. Le batterie devono coprire almeno quell’avvio, con margine, spesso diversi minuti. Se le batterie durano due minuti e il generatore ne impiega quattro, la sala cade nel buco. Due percorsi, A e B, arrivano a due prese diverse del rack, e ogni server con doppio alimentatore ne usa una per parte. Un interruttore solo a monte dei due percorsi annulla la doppia via.

Il calore si conta. Un rack denso può dissipare diversi kilowatt. L’aria fredda entra dal fronte degli apparati, attraversa le macchine ed esce calda dal retro. Se fronte e retro guardano dalla stessa parte, il retro di un rack scalda il fronte del successivo e il condizionatore raffredda aria già mescolata. I corridoi freddi e caldi, con la chiusura che impedisce il mescolamento, esistono per questo. La temperatura si tiene in una fascia, spesso intorno ai venti-ventisette gradi in ingresso alle macchine, e l’umidità si tiene lontana dai due estremi: troppo secca favorisce le scariche, troppo umida la condensa. Un condizionatore fermo di sabato spegne i server per protezione termica anche con la rete elettrica presente. Per questo il raffreddamento è ridondato come l’energia, e l’allarme temperatura chiama una persona.

La rete della sala non è un dettaglio del server. Due switch di accesso, cablaggio ordinato e etichettato, percorsi di fibra che non passano dallo stesso cavedio se il servizio è serio. Un cavo senza etichetta diventa, durante un incidente, un cavo che nessuno osa staccare. L’antincendio ad acqua dell’edificio, se investe la sala, distrugge ciò che doveva salvare: in sala si usa un sistema adatto all’elettronica e si separa la zona. Sul foglio bastano cinque righe, una per famiglia, ciascuna con il guasto che copre: badge e registro, UPS più generatore con il buco di avvio coperto, doppia via elettrica, corridoio freddo e condizionatore ridondato, cavi etichettati e fibra non unica.

### Esempio

Un ente che tiene in casa il portale documentale deve poter dire dove sono i server, chi entra in sala, quanto a lungo l’UPS regge, e che cosa succede se il condizionatore si ferma di sabato. Se non sa rispondere, il «data center» è soltanto uno stanzino, e in un elaborato è più onesto proporre una sala idonea o un servizio di housing in un sito certificato.

### In sede di prova

Quattro famiglie bastano, dette con i nomi giusti: energia, raffreddamento, rete, sicurezza fisica, più la conduzione. Collegarle al servizio che si sta progettando: un’interruzione del centro è un’interruzione dell’applicazione.

### Errori da evitare

- Elencare solo firewall e antivirus. Quelli sono sicurezza logica. Il data center ha prima di tutto un problema fisico.
- Credere che il cloud faccia sparire il data center. Lo sposta presso il fornitore, che deve avere gli stessi requisiti, spesso a un livello più alto.
- Inventare percentuali di disponibilità senza collegarle alla classificazione Tier.

### Approfondire

- [Data center](https://it.wikipedia.org/wiki/Data_center)

## La classificazione Tier del data center

**Prove:** seconda prova gruppo 1, orale
**Tag:** Tier I, Tier II, Tier III, Tier IV, disponibilità
**Semaforo:** verde

### Inquadramento

I Tier misurano la manutenzione e la ridondanza degli impianti, non la bravura del software. Un livello più alto costa anche quando non succede nulla, e va citato solo se il requisito di disponibilità lo paga. Sul foglio si dice che cosa un Tier superiore consente di fare senza spegnere il servizio, per esempio la manutenzione di un percorso elettrico, e si rifiuta un Tier IV per uno sportello che ammette un fermo di ore. La classificazione non sostituisce il backup.

### Definizione

La classificazione Tier dell’Uptime Institute descrive come un data center è costruito rispetto ai guasti e alla manutenzione. Non misura quanto è «moderno» il software. Misura i percorsi di energia e raffreddamento, la ridondanza e la possibilità di fare manutenzione senza spegnere i sistemi. I livelli vanno da I a IV.

### I quattro livelli

Il Tier I ha un solo percorso per l’energia e il raffreddamento, e pochi o nessun componente ridondato. Ogni manutenzione e ogni guasto interrompono il servizio. La disponibilità attesa di riferimento è circa il 99,671 per cento, nell’ordine di quasi ventinove ore di fermo l’anno. Va bene per ambienti di prova, non per servizi continui.

Il Tier II aggiunge componenti ridondati, per esempio un UPS o un condizionatore in più, ma il percorso resta sostanzialmente unico. Un guasto di un componente può essere retto. Una manutenzione sul percorso unico no. Riferimento circa 99,741 per cento.

Il Tier III ha più percorsi di distribuzione e i componenti sono ridondati in modo che il sito sia manutenibile in contemporanea all’esercizio: si può intervenire su un percorso mentre l’altro alimenta i sistemi. Ogni apparato informatico rilevante è alimentato da due vie. Riferimento circa 99,982 per cento, poco più di un’ora e mezza di fermo l’anno. È il livello di cui si parla più spesso per servizi importanti.

Il Tier IV è tollerante ai guasti. I percorsi sono doppi e attivi, e un guasto qualunque su un percorso, compreso un guasto mentre si fa manutenzione, non ferma il servizio. Riferimento circa 99,995 per cento, nell’ordine di mezz’ora l’anno. Costa molto di più, in impianti e in esercizio.

I numeri sono valori di progetto della classificazione, non una garanzia misurata sul singolo sito. Un sito Tier III condotto male si ferma più di un sito inferiore condotto bene. In prova si possono citare gli ordini di grandezza, dicendo che sono i riferimenti dell’Uptime Institute.


### Nel dettaglio

Il criterio che fa salire di livello non è il numero di apparati comprati. È la risposta a due domande. Si può spegnere un componente per manutenzione mentre il servizio resta su? Un guasto durante quella manutenzione ferma ancora il servizio? Il Tier I risponde no e sì. C’è un percorso solo: per lavorare sul quadro elettrico si spegne la sala. Il Tier II aggiunge un componente di riserva, N+1, per esempio un condizionatore in più rispetto a quelli necessari. Il guasto di un’unità è coperto. Il percorso di distribuzione resta uno: la manutenzione di quel percorso spegne comunque.

Il Tier III è il primo in cui la manutenzione è concorrente con l’esercizio. I percorsi di distribuzione sono più di uno, e ogni apparato informatico è alimentato in modo da restare acceso mentre un percorso è spento per lavori. La ridondanza dei componenti è almeno N+1. Il fermo di progetto scende a circa un’ora e mezza l’anno, il 99,982 per cento. Quel numero va tradotto: un’ora e mezza è il budget annuo, non il permesso di fermare un’ora e mezza ogni martedì. Un singolo incidente lungo può consumarlo tutto. Il Tier IV risponde sì alla manutenzione e no al guasto durante la manutenzione: i percorsi sono doppi e attivi, la ridondanza è dell’ordine di 2N, e il riferimento è circa 99,995 per cento, ventisei minuti l’anno. Costa impianti, spazio, collaudi e persone, anche negli anni in cui non succede nulla.

Un esempio numerico evita la citazione a memoria. Un servizio d’ufficio che può fermarsi di notte e nel fine settimana ha un budget di fermo molto più largo di un’ora e mezza: un Tier II, o un housing senza inseguire il IV, è una scelta motivata, non una rinuncia. Un servizio che raccoglie atti durante una seduta non può perdere la mattina: si motiva un sito di livello alto oppure, se l’ente ha una sala modesta, si dice che la sala locale è il sito secondario e il servizio corre in un centro che il livello lo ha. Inventare un Tier IV nella sala attuale, con un solo quadro elettrico, è il errore che la classificazione serve a smascherare.

La certificazione è dell’impianto, non del singolo UPS doppio. Due gruppi di continuità in uno stanzino con un condizionatore solo e un ingresso solo non sono un Tier III. In prova si può dire «sito con requisiti analoghi al Tier III» se non c’è certificazione, e descrivere i due percorsi. I Tier non coprono il ransomware, l’errore umano che cancella una tabella, né l’incendio dell’intero edificio: coprono il guasto e la manutenzione degli impianti di quella sala. Backup e secondo sito restano necessari, e si nominano nella stessa risposta perché la commissione ascolta se il candidato usa il Tier al posto di tutto il resto.

### Esempio

Per il portale interno di un ufficio, con fermi possibili di notte e un ripristino in poche ore, non serve dichiarare un Tier IV. Per un sistema che raccoglie atti in tempo reale durante i lavori, un fermo non pianificato ha un impatto istituzionale: si motiva allora un sito di livello alto, oppure un servizio su un centro che quel livello lo certifica, con un piano di disaster recovery su un secondo sito.

### In sede di prova

Dire che il Tier cresce con la ridondanza e con la possibilità di manutenzionare senza fermare. Citare III come manutenibile in esercizio e IV come tollerante al guasto. Aggiungere che il livello si sceglie in base all’impatto del fermo, non per sfoggio. Collegare a RPO e RTO se si ha spazio: il Tier riduce la probabilità di un fermo locale, non sostituisce le copie di backup.

### Errori da evitare

- Confondere Tier con «livello di cloud» o con le classi di un indirizzo IP.
- Attribuire il 99,999 per cento al Tier IV. Il riferimento usuale è 99,995.
- Pensare che due UPS bastino per dichiarare un Tier IV. Conta il disegno dell’intero percorso, certificato, non un singolo apparato doppio.

### Approfondire

- [Data center](https://it.wikipedia.org/wiki/Data_center)

## Ridondanza, alta disponibilità e singolo punto di guasto

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** HA, SPOF, cluster, failover
**Semaforo:** giallo

### Inquadramento

Ridondanza vuol dire che un pezzo può morire e il servizio no. Alta disponibilità è l'esito, non un prodotto. Il singolo punto di guasto è il componente che, da solo, interrompe tutto: l'unico alimentatore, l'unico switch, l'unico nodo applicativo. Sul foglio si prende un servizio e si segna il punto unico, poi lo si toglie con un secondo esemplare e con una regola di instradamento. Due copie nello stesso armadio, sullo stesso interruttore, non sono ridondanza.

### Definizione

Un singolo punto di guasto è un componente il cui cedimento ferma da solo l’intero servizio. La ridondanza mette almeno due componenti capaci della stessa funzione, così il cedimento di uno non ferma il servizio. L’alta disponibilità è la proprietà di un sistema progettato per restare in servizio entro un tempo di fermo molto basso, grazie a ridondanza, monitoraggio e passaggio automatico sul componente sano.

### Come si applica, strato per strato

Sull’energia: doppio alimentatore nel server, UPS in coppia, due linee. Sul raffreddamento: più unità, così una può fermarsi. Sulla rete: due switch di accesso, due schede nel server, due collegamenti verso l’esterno. Sui server applicativi: almeno due nodi dietro un bilanciatore; se uno cade, l’altro continua a ricevere richieste. Sul database: una replica sincrona o un cluster, con promozione del nodo secondario. Promuovere un secondario non è la stessa cosa che avere un backup: la replica può copiare anche un dato già corrotto da un errore logico.

Il bilanciatore stesso non deve diventare il nuovo singolo punto di guasto: se ne tengono due, in coppia attiva-passiva o attiva-attiva. Lo stesso vale per il firewall perimetrale.

L’alta disponibilità ha un costo e una complessità. Ogni componente doppio va provato: un failover mai collaudato è una speranza, non una misura. Il collaudo periodico del passaggio fa parte del progetto.

Esiste anche la distinzione fra guasto dell’infrastruttura e disastro del sito. Due server nella stessa sala protetti dallo stesso incendio o dalla stessa interruzione elettrica lunga non bastano come disaster recovery. Per quello serve un secondo sito, oppure un servizio in un’altra zona di disponibilità, e una procedura di ripartenza.


### Nel dettaglio

Si cerca il singolo punto di guasto percorrendo una richiesta e segnando ogni pezzo che compare una volta sola. Il cavo dell’utente non conta, perché il suo guasto ferma un solo utente. Conta il pezzo il cui guasto ferma tutti. In una sala piccola l’elenco tipico è: un solo switch di accesso, un solo firewall, un solo alimentatore di rack, un solo nodo applicativo, un solo disco con i dati, una sola persona che conosce la password di amministrazione. Ognuno di questi, da solo, è un fermo totale. La ridondanza è l’eliminazione di quella unicità, un pezzo alla volta, finché il budget di fermo è soddisfatto. Non si raddoppia tutto per principio.

Due copie non bastano se condividono una causa. Due server nello stesso rack, alimentati dalla stessa presa, si spengono insieme quando scatta l’interruttore. Due collegamenti che passano nello stesso scavo si tagliano insieme. Due nodi applicativi che leggono lo stesso disco guasto si fermano insieme. La regola è separare anche la causa: prese diverse, percorsi diversi, dischi diversi, e un guasto che non si propaga. Questo si chiama evitare il modo di guasto comune, e in un tema si mostra con un solo esempio, non con la definizione.

Il passaggio sul componente sano va descritto. Il bilanciatore interroga i nodi a intervalli brevi. Se un nodo non risponde, esce dal turno e le richieste nuove vanno all’altro. Le richieste già in corso su quello morto falliscono: il client ripete. Perché questo funzioni, il nodo non deve tenere stato che esiste solo nella sua memoria. Una sessione tenuta nella RAM di un solo nodo rende quel nodo necessario proprio per quegli utenti: il suo guasto li scollega anche se l’altro nodo è sano. Si sposta la sessione in un deposito condiviso, oppure si usa un token che ogni nodo verifica da solo.

Sul database il failover è un altro meccanismo. La replica tiene un secondario aggiornato. Se il primario muore, il secondario viene promosso e i nodi applicativi devono imparare il nuovo indirizzo, tramite un nome che si sposta o un proxy. C’è una finestra in cui le ultime scritture, se la replica era asincrona, possono mancare: quella finestra è l’RPO reale di quel disegno. Se la replica è sincrona, la scrittura non è confermata finché il secondario non l’ha ricevuta, e l’RPO di quel guasto è zero, al prezzo di una latenza aggiunta. Due nodi che si credono entrambi primari, lo split brain, scrivono in parallelo e i dati divergono. Lo si evita con un quorum: servono tre voti, e una copia sola non si promuove da sé.

Sul foglio si prende un servizio e si scrivono tre righe. Il punto unico che c’era. Il secondo esemplare e la causa che non condivide. Il modo in cui il traffico o il ruolo si sposta, e che dato si può perdere in quella finestra.

### Esempio

Portale con un solo server applicativo e un solo database sullo stesso disco. Il disco è un singolo punto di guasto per i dati. Il server è un singolo punto di guasto per il servizio. Una prima contromisura ragionevole in un tema: due server applicativi, database con replica e backup su un supporto separato, firewall in coppia. Non serve disegnare un Tier IV per dirlo.

### In sede di prova

Usare l’espressione «singolo punto di guasto» e indicarne uno nella propria architettura, insieme al modo in cui lo si elimina o lo si accetta. Accettarlo è lecito se si dichiara l’impatto e il tempo di ripristino. La commissione valuta la consapevolezza, non la quantità di apparati.

### Errori da evitare

- Dire «tutto ridondato» senza dire che cosa è doppio.
- Scambiare backup e alta disponibilità. Il backup serve a recuperare dati. L’alta disponibilità serve a non interrompere il servizio.
- Dimenticare che anche il sito, il fornitore di rete e il sistema di autenticazione possono essere un punto unico.

### Approfondire

- [Tolleranza ai guasti](https://it.wikipedia.org/wiki/Tolleranza_ai_guasti)

## Alimentazione e raffreddamento di una sala sistemi

**Prove:** seconda prova gruppo 1, orale
**Tag:** UPS, gruppo elettrogeno, PDU, corridoio caldo
**Semaforo:** giallo

### Inquadramento

L'energia e il calore sono requisiti del servizio quanto il software. Un gruppo di continuità copre i secondi e i minuti, un gruppo elettrogeno le ore, e il raffreddamento deve essere quello della sala, non quello dell'ufficio accanto. Sul foglio si mette in ordine il percorso: rete elettrica, continuità, generazione, distribuzione, calore che esce. Si dice ogni quanto si prova il generatore. Una prova mai fatta è un impianto che esiste solo sulla carta.

### Definizione

L’alimentazione di una sala sistemi è la catena che porta energia stabile agli apparati anche quando la rete elettrica pubblica manca o è disturbata. Il raffreddamento asporta il calore prodotto dagli apparati e mantiene temperatura e umidità nei limiti di funzionamento.

### La catena elettrica

La rete pubblica alimenta i quadri. L’UPS, gruppo di continuità, sta in mezzo: raddrizza, carica le batterie e, nell’istante del distacco, continua ad alimentare il carico senza interruzione percepibile dai server. Le batterie durano minuti, non ore: il tempo necessario a spegnere in modo ordinato oppure a far partire i gruppi elettrogeni. Il gruppo elettrogeno, alimentato a gasolio o altro combustibile, copre le interruzioni lunghe, purché sia avviato in prova con regolarità e abbia scorta di combustibile. La PDU, unità di distribuzione, porta le prese fino all’armadio. Nei disegni seri ogni server ha due cordoni, su due PDU, su due linee.

Va detto anche il coordinamento: se l’UPS non è dimensionato sul carico reale, in un black-out cade prima del gruppo. Se il gruppo non parte perché non è mai stato provato, l’UPS si esaurisce e la sala si spegne tutta insieme.

### Il calore

Quasi tutta l’energia assorbita dai server diventa calore. Un condizionatore di precisione, diverso da quello di un ufficio, controlla temperatura e umidità in modo stretto e funziona tutto l’anno. La disposizione a corridoi freddi e caldi chiude il percorso dell’aria: il fronte degli apparati riceve aria fredda, il retro espelle aria calda, e i due flussi non si rimescolano. Sensori sotto il pavimento o nei corridoi segnalano i punti caldi. Anche il raffreddamento si ridonda: un solo condizionatore è un singolo punto di guasto estivo.

L’umidità troppo bassa favorisce le scariche elettrostatiche. Troppo alta favorisce la condensa. Per questo non basta «tenere freddo».


### Nel dettaglio

Il gruppo di continuità online fa da filtro permanente. La rete entra, raddrizza e carica le batterie, e un inverter ricostruisce la corrente che alimenta i server. I server non vedono i disturbi della rete, e quando la rete manca non c’è un tempo di commutazione: l’inverter continua, alimentato dalle batterie. Un gruppo line-interactive costa meno e commuta sulle batterie al momento del guasto: la commutazione dura millisecondi, in genere retta dagli alimentatori, ma non condiziona allo stesso modo. In una sala, online è la scelta da nominare. La potenza del gruppo si dimensiona sul carico reale, con margine: un gruppo all’ottanta per cento continuo vive meglio di uno al cento, e il picco di accensione delle macchine va contato.

Le batterie sono il ponte, non la soluzione. Durano minuti, non ore, e degradano con gli anni e con il calore. Si scrive l’autonomia a carico pieno e la si confronta con il tempo di avvio del generatore. Un generatore diesel parte, arriva a regime e accetta il carico in diversi secondi o in qualche minuto, secondo l’impianto e se è già in preriscaldo. Il commutatore automatico gli affida il carico solo quando la tensione è stabile. Se l’autonomia delle batterie è inferiore a questo tempo, esiste un buco nero in cui la sala si spegne con il generatore che sta ancora salendo. La prova periodica a carico, non a vuoto, è l’unica verifica: un generatore provato senza carico può fallire il giorno in cui il carico c’è.

Dentro il rack le due vie devono restare due fino all’alimentatore. La presa A arriva da un quadro, la presa B dall’altro. Il server con due alimentatori eroga il servizio anche con una presa morta. Un server con un alimentatore solo, anche in una sala a due vie, è spento se la sua unica presa cade: la doppia via della sala non lo protegge. Le ciabatte e gli adattatori che riuniscono A e B sulla stessa striscia sono un modo comune di buttare la ridondanza. In un inventario serio ogni apparato è segnato come a doppio alimentatore oppure accettato come punto unico.

Il raffreddamento ha la stessa logica di ridondanza e un vincolo in più, il verso dell’aria. Le macchine espellono sul retro quasi tutto il watt che consumano. Un rack da cinque kilowatt vuole una portata d’aria capace di portarsi via cinque kilowatt. Se il corridoio freddo non è confinato, l’aria calda torna in aspirazione e la temperatura sale anche con il condizionatore acceso. Due condizionatori in N+1 permettono di fermarne uno per manutenzione o guasto. L’allarme non può limitarsi alla spia in sala: a sala vuota, di notte, serve una chiamata. La chiusura sul foglio collega i due impianti: senza energia il raffreddamento si ferma, e senza raffreddamento l’energia da sola non basta, perché le macchine si proteggono e si spengono.

### Esempio

Durante un’interruzione di due ore, la sequenza attesa è: la rete pubblica cade, l’UPS regge senza che i server se ne accorgano, il gruppo parte entro i minuti di autonomia delle batterie, la sala resta accesa, il condizionamento continua perché è sotto la stessa catena. Se il condizionamento non è sotto l’UPS e il gruppo, i server restano accesi e si scaldano fino allo spegnimento termico.

### In sede di prova

Nominare UPS e gruppo elettrogeno e dire la differenza di ruolo: il primo è immediato e breve, il secondo è lento a partire ma dura. Aggiungere una frase sul raffreddamento. È uno dei modi più chiari per mostrare che si è capito che un sistema informativo ha un impianto sotto.

### Errori da evitare

- Attribuire alle batterie dell’UPS un’autonomia di giorni.
- Pensare che lo spegnimento brusco sia innocuo. I database possono corrompersi se si interrompe la scrittura.
- Descrivere il raffreddamento come un dettaglio secondario.

### Approfondire

- [Gruppo di continuità](https://it.wikipedia.org/wiki/Gruppo_di_continuità)
- [Data center](https://it.wikipedia.org/wiki/Data_center)

## Scalabilità verticale, orizzontale e bilanciamento

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** scale up, scale out, load balancer
**Semaforo:** giallo

### Inquadramento

Crescere in verticale è rendere più grande un nodo. Crescere in orizzontale è aggiungere nodi uguali. Il bilanciatore manda le richieste ai nodi sani. La scelta dipende da ciò che si può duplicare: un'applicazione senza stato locale si duplica, un database chiede un disegno a parte. Sul foglio si parte dal requisito di utenti contemporanei e si sceglie una delle due vie, con il motivo. Aggiungere CPU a un nodo che pagina per mancanza di RAM non è scalabilità.

### Definizione

Scalare un sistema significa aumentarne la capacità quando crescono utenti, dati o richieste. La scalabilità verticale aumenta le risorse di una singola macchina: più CPU, più RAM, dischi più veloci. La scalabilità orizzontale aggiunge altre macchine che si dividono il lavoro. Il bilanciatore di carico distribuisce le richieste fra quelle macchine.

### Quando si usa l’una o l’altra

La crescita verticale è semplice: non si riscrive l’applicazione. Ha un tetto, perché una macchina non si potenzia all’infinito, e non elimina il singolo punto di guasto. Spenta quella macchina, il servizio si ferma. È spesso la prima mossa su un database, che è più difficile da suddividere di uno strato web.

La crescita orizzontale aggiunge nodi. Se uno cade, gli altri restano. Chiede che l’applicazione non tenga stato locale insostituibile: due richieste successive dello stesso utente possono finire su due server diversi. Lo stato di sessione sta allora in un deposito condiviso, oppure viaggia nel token firmato. I nodi devono essere equivalenti e sostituibili.

Il bilanciatore controlla quali nodi sono sani, tramite una sonda periodica, e non inoltra traffico a un nodo che non risponde. Può distribuire a turno, oppure privilegiare il nodo meno carico. Può anche terminare TLS, così i certificati si gestiscono in un punto solo.

La scalabilità dei dati è il punto duro. Si può leggere da repliche in sola lettura e scrivere sul nodo primario. Si possono partizionare i dati, ma il partizionamento va progettato: una chiave sbagliata concentra tutto il carico su un nodo. In un tema d’esame basta dire che lo strato web scala in orizzontale dietro un bilanciatore e che il database ha un primario, una replica e i backup.


### Nel dettaglio

La scala verticale ha un tetto fisico e un tetto economico. Si aggiungono core, RAM, dischi più veloci nello stesso nodo. Il servizio non cambia forma: la stessa applicazione, la stessa sessione in memoria, lo stesso disco. È la mossa giusta quando il collo è uno e misurato, per esempio la RAM che pagina, e il nodo ha slot liberi. Il tetto arriva presto. Un processore ha un numero finito di core. La RAM ha un numero finito di slot. Soprattutto, la macchina resta una: la sua manutenzione spegne il servizio, e il suo guasto pure. Scalare in verticale senza un secondo nodo migliora la capacità e lascia intatto il singolo punto di guasto.

La scala orizzontale aggiunge nodi uguali. Funziona se la richiesta può essere servita da un nodo qualunque. Un’applicazione che tiene la sessione solo in RAM locale non è in questa condizione: l’utente dovrebbe tornare sempre allo stesso nodo, e se quel nodo muore la sessione muore. Si rende la richiesta autonoma, con token o con sessione in un deposito comune, e a quel punto un nodo nuovo si aggiunge senza spiegare agli altri chi è. Il database è il pezzo che resiste di più a questa mossa. Le letture si possono distribuire su repliche. Le scritture, se devono restare coerenti, convergono ancora su un primario, che diventa il tetto. In un tema si dice questo limite, invece di promettere nodi infiniti.

Il bilanciatore sta davanti ai nodi e decide. Un controllo di salute periodico, una richiesta breve o una connessione sulla porta del servizio, toglie dal turno chi non risponde. Gli algoritmi semplici bastano in un elaborato: a turno, oppure verso il nodo con meno connessioni aperte. La sessione persistente, che manda lo stesso utente allo stesso nodo, è un rimedio quando l’applicazione non è ancora senza stato: va dichiarata come debito, perché reintroduce un legame fra utente e nodo. Due bilanciatori, con un indirizzo che si sposta, evitano che il bilanciatore sia l’unico pezzo. Il controllo di salute deve provare il servizio, non solo il fatto che la macchina sia accesa: un nodo con il processo applicativo bloccato e il sistema operativo vivo va tolto dal turno.

Un numero rende la scelta. Ottanta utenti interni, poche richieste al secondo, un nodo che regge e un secondo nodo spento di riserva: la scala verticale più un failover è onesta. Duemila persone in una finestra di un’ora, con picco, un nodo solo che satura la CPU: si aggiungono nodi dietro il bilanciatore, dopo aver misurato che il database non è già il limite. Sul foglio si scrive la misura che farebbe cambiare idea, non solo la parola «scalabile».

### Esempio

Il portale di ricerca documentale è letto da molte persone e scritto da poche. Si mettono due o più server applicativi dietro il bilanciatore, e una replica del database dedicata alle ricerche pesanti, così i report non rallentano gli inserimenti. Se gli utenti raddoppiano, si aggiunge un nodo applicativo invece di sostituire il server con uno più grande.

### In sede di prova

Definire i due termini con una frase ciascuno. Dire che l’orizzontale migliora anche la disponibilità, non solo la potenza. Accennare al fatto che la sessione non può restare nella memoria di un solo nodo se il nodo successivo deve riconoscerla.

### Errori da evitare

- Credere che due server senza bilanciatore e senza stato condiviso «scalinino» da soli.
- Proporre dieci nodi applicativi e un database unico senza copie, e chiamare il tutto ad alta disponibilità.
- Usare «scalabile» come aggettivo vuoto, senza dire in quale strato e con quale gesto.

### Approfondire

- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)
- [Scalabilità, Microsoft Learn](https://learn.microsoft.com/it-it/azure/architecture/guide/design-principles/scale-out)

## Storage: dischi locali, RAID, NAS e SAN

**Prove:** seconda prova gruppo 1, orale
**Tag:** RAID, NAS, SAN, SSD
**Semaforo:** giallo

### Inquadramento

Lo storage è dove il dato resta dopo lo spegnimento. Il RAID combina dischi per velocità o per tollerare un guasto, e non è un backup. Il NAS offre file in rete, la SAN offre dischi di blocco per nodi che si spostano. Sul foglio si sceglie un livello RAID e si dice quale guasto regge, poi si sceglie NAS o SAN in base al bisogno: cartelle condivise, oppure dischi per un cluster. Si chiude ripetendo che un file cancellato è cancellato anche sullo specchio.

### Definizione

Lo storage è l’insieme delle tecnologie che conservano i dati in modo persistente. Può essere locale al server, oppure condiviso in rete fra più server. Il RAID è un modo di combinare più dischi per ottenere prestazioni, capacità o tolleranza ai guasti. NAS e SAN sono due modi diversi di condividere storage in rete.

### RAID, nei livelli che bastano

RAID 0 affianca i dischi e somma velocità e capacità. Non ha ridondanza: un disco perso distrugge l’insieme. Non si usa per dati che devono sopravvivere.

RAID 1 specchia: gli stessi dati stanno su due dischi. Se ne perde uno, l’altro continua. Si sacrifica metà della capacità.

RAID 5 suddivide i dati e la parità su almeno tre dischi. Regge il guasto di un disco. La ricostruzione dopo la sostituzione è pesante e, su dischi molto grandi, è il momento in cui un secondo guasto sarebbe fatale.

RAID 6 usa doppia parità e regge due dischi guasti. Costa un disco in più di capacità rispetto al RAID 5 ed è più prudente quando la ricostruzione dura molte ore.

RAID 10 combina specchi e affiancamento: veloce e tollerante, a prezzo di metà capacità. È una scelta frequente per database che devono scrivere molto.

Il RAID non è un backup. Protegge dal guasto di un disco, non da una cancellazione, da un ransomware o da un incendio. Un file cancellato è cancellato anche sullo specchio, nello stesso istante.

### NAS e SAN

Il NAS, network attached storage, è un apparato di file in rete. I server vedono cartelle, tramite protocolli di file come NFS o SMB. È più semplice. Va bene per documenti, archivi, home directory.

La SAN, storage area network, offre blocchi, come se fossero dischi locali, su una rete dedicata ad alta velocità. Più server condividono lo stesso storage di blocco, ed è la base tipica di cluster e di macchine virtuali che si spostano da un host all’altro. Costa di più e si progetta a parte.

I dischi a stato solido sono più rapidi e senza parti meccaniche. I dischi magnetici costano meno a parità di capacità e restano usati per grandi archivi. I nastri, o gli archivi a oggetti molto economici, servono per copie che si consultano di rado e si conservano a lungo.


### Nel dettaglio

Il RAID va calcolato su un gruppo piccolo, così i numeri si rifanno a mano. Quattro dischi da un terabyte. Il RAID 0 affianca le strisce: capacità quattro, e un disco morto perde tutto, perché ogni striscia è un pezzo del file. Serve la velocità e non serve la tenuta: non è un disegno da dati di un ente. Il RAID 1 specchia: capacità uno se la coppia è di due, e nel caso di quattro dischi in due coppie la capacità è due. Si legge da entrambi, si scrive due volte. Muore un disco, la copia resta. Il RAID 5 divide i dati e la parità ruota fra i dischi: con quattro dischi la capacità è tre, e si regge un disco morto. La scrittura di un blocco legge il vecchio dato e la vecchia parità per calcolare la nuova: costa più di una scrittura semplice. Durante la ricostruzione, che può durare ore su dischi grandi, un secondo disco morto perde l’intero gruppo. Il RAID 6 tiene due parità: capacità due su quattro, regge due dischi morti, e si sceglie quando la ricostruzione è lunga. Il RAID 10 specchia e poi affianca: capacità due, regge un disco per coppia, scritture più semplici del 5. Per i dati che contano, 10 o 6 sono le scelte da saper motivare.

Il disco locale è il disco dentro al nodo. È veloce e muore con il nodo, o resta prigioniero di quel nodo. Va bene per il sistema operativo e per dati che si possono ricostruire. I dati del servizio, quelli che non si vogliono perdere con la macchina, stanno su uno storage condiviso. Il NAS offre file: il server monta una cartella di rete, protocolli di file. È semplice e va bene per documenti, condivisioni, file di backup. La SAN offre blocchi, come se il disco fosse locale, su una rete dedicata. Il database, che vuole controllare da sé i blocchi, sta più spesso su SAN o su dischi locali in RAID che su una cartella di rete. Nominare «un NAS per il database» senza dire come si garantisce la coerenza è una frase debole.

Le prestazioni si dicono in operazioni, non solo in terabyte. Un disco magnetico fa nell’ordine del centinaio di operazioni casuali al secondo. Un disco a stato solido ne fa decine o centinaia di migliaia. Un database di sportello, fatto di letture e scritture piccole e sparse, satura i magnetici molto prima di riempirli. Aggiungere terabyte magnetici non cura un problema di operazioni. Lo snapshot è una fotografia istantanea sullo stesso storage: è utile per tornare indietro di un’ora dopo un errore, e sparisce insieme allo storage se il gruppo RAID si perde o se il ransomware cifra anche lo snapshot. Per questo lo snapshot non chiude il discorso del backup.

### Esempio

I file di un’applicazione e il database non dovrebbero stare sullo stesso disco unico del server. In un disegno sobrio: sistema operativo su dischi locali in RAID 1, dati del database su storage con RAID 10 o su una LUN di SAN, backup su un altro sistema, fisicamente o logicamente separato, meglio se immutabile per un periodo.

### In sede di prova

Se si cita il RAID, dire quale livello e che cosa regge. Chiudere sempre con la frase che il RAID non sostituisce il backup. Scegliere NAS o SAN in base al bisogno: file condivisi, oppure dischi per un cluster.

### Errori da evitare

- Proporre RAID 0 per il database di produzione.
- Dire «abbiamo il RAID, quindi i dati sono al sicuro» dopo un ransomware.
- Confondere NAS e SAN. File condivisi non sono la stessa cosa di dischi di blocco.

### Approfondire

- [RAID](https://it.wikipedia.org/wiki/RAID)
- [NAS](https://it.wikipedia.org/wiki/Network_Attached_Storage)
- [SAN](https://it.wikipedia.org/wiki/Storage_Area_Network)

## Backup, replica, snapshot, RPO e RTO

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** backup, RPO, RTO, replica
**Semaforo:** verde

### Inquadramento

RPO è quanto dato ci si può permettere di perdere. RTO è quanto tempo ci si può permettere per tornare. Backup, replica e snapshot rispondono a guasti diversi: l'errore umano e il ransomware, il nodo morto, l'aggiornamento fallito. La replica copia anche l'errore. Lo snapshot sullo stesso disco muore con quel disco. Sul foglio si fissano i due numeri e si fa corrispondere una copia a ciascuno. Un backup notturno con un RPO di un'ora è una contraddizione, e va corretta in rilettura.

### Definizione

Il backup è una copia dei dati, conservata per poterli recuperare dopo una cancellazione, un guasto, un errore umano o un attacco. La replica tiene una copia aggiornata, spesso in continuo, per far ripartire il servizio su un altro nodo. Lo snapshot è una fotografia dello stato di un disco o di una macchina in un istante. RPO e RTO misurano quanta perdita di dati e quanto fermo si è disposti a accettare.

### Le differenze che la commissione ascolta

RPO, recovery point objective, è l’età massima accettabile dei dati che si possono perdere. Un RPO di un’ora significa: posso perdere al massimo l’ultima ora di modifiche, quindi mi serve una copia almeno oraria. Un RPO vicino allo zero chiede replica continua, non un nastro notturno.

RTO, recovery time objective, è il tempo massimo accettabile per rimettere in servizio il sistema dopo l’incidente. Include il tempo per accorgersi del guasto, decidere, ripristinare e verificare. Un backup che si restaura in due giorni non soddisfa un RTO di quattro ore, anche se le copie ci sono.

Il backup è fatto per tornare indietro nel tempo. Si conservano più generazioni: ieri, la settimana scorsa, il mese scorso. Serve quando il danno è stato notato in ritardo, come una cancellazione scoperta dopo dieci giorni o un ransomware che ha cifrato anche i file visti di recente. Per questo una copia sola, sovrascritta ogni notte, è fragile: la notte successiva al danno la copia buona non c’è più.

La replica è fatta per continuare. Il secondario è quasi identico al primario. Se qualcuno cancella una tabella sul primario, la replica esegue la stessa cancellazione. Senza backup, la replica non salva da quell’errore.

Lo snapshot è rapido e utile prima di un aggiornamento rischioso: se l’aggiornamento fallisce si torna all’istante dello scatto. Non è un backup se vive sullo stesso storage del dato originale. Un guasto di quello storage porta via dato e fotografia insieme.

Una copia di backup seria è separata dalla rete di produzione (copia offline, oppure immutabile per un periodo in cui non può essere cancellata né cifrata), cifrata, e periodicamente restaurata in prova. Un backup mai restaurato non è una misura verificata. La prova di restore fa parte della procedura, con data e esito.

La regola pratica 3-2-1 riassume un disegno difendibile: tre copie dei dati, su due tipi di supporto diversi, di cui una copia fuori dal sito, o comunque fuori dal dominio di guasto del sito principale.


### Nel dettaglio

I due numeri si scelgono prima del prodotto, e poi il disegno deve essere capace di mantenerli. L’RPO è quanto passato si accetta di perdere. Un’ora significa che fra una copia e la successiva non passa più di un’ora: o il backup è almeno orario, o i log delle transazioni si spediscono abbastanza spesso da rifare l’ultima ora. Quindici minuti con un backup notturno è una frase contraddittoria, e la commissione la sente. L’RTO è quanto si impiega a tornare. Quattro ore comprendono: accorgersi del guasto, decidere, trovare la copia, ripristinare i dati, riaccendere l’applicazione, verificare, riammettere gli utenti. Una copia da due terabyte su un disco lento può impiegare da sola più di quattro ore. L’RTO si prova con un cronometro, non si dichiara.

La replica copia i dati su un altro nodo, quasi subito. Se è sincrona, il primario aspetta il secondario prima di confermare la scrittura: un guasto del primario non perde transazioni già confermate. Se è asincrona, il primario conferma e spedisce dopo: si perde la coda non ancora arrivata, e quella coda è l’RPO. La replica non è un backup perché obbedisce. Una cancellazione, un aggiornamento sbagliato, un ransomware che cifra i file vengono replicati con la stessa fedeltà dei dati buoni. Il secondario, dopo pochi minuti, è guasto quanto il primario. Il backup è una copia che non si sovrascrive subito: se ne tengono più generazioni, e la generazione di ieri esiste ancora quando quella di oggi è già cifrata.

Lo snapshot congela una vista sullo stesso sistema di dischi, in pochi secondi, sfruttando il fatto che i blocchi nuovi non coprono subito i vecchi. È il modo giusto per prendere un backup coerente di un database: si congela, si copia con calma, si rilascia. Non è una seconda copia. Se lo scaffale dei dischi brucia, bruciano i dati e gli snapshot. La frase da scrivere è: snapshot per la coerenza e per l’errore recente, replica per il guasto del nodo, backup su un altro supporto e in un altro luogo per la cancellazione, il ransomware e l’incendio.

Un caso chiude. Portale documentale, RPO di un’ora, RTO di quattro. Backup completo la domenica, incrementale ogni ora, copia su un secondo supporto fuori dalla sala, una replica asincrona per il guasto del nodo con perdita massima di qualche minuto. Una volta al trimestre si ripristina su un sistema di prova e si misura il tempo. Senza quella prova, i quattro ore sono un augurio.

### Esempio

Sistema di protocollo. L’ente stabilisce RPO di quindici minuti e RTO di quattro ore. Allora non basta il backup notturno: serve almeno un log delle transazioni copiato ogni quindici minuti, così si può ricostruire il database fino a un quarto d’ora prima del guasto. Il ripristino va provato, perché quattro ore di RTO includono il tempo umano, non solo la copia dei file. Una replica in un secondo sito copre il guasto della sala. Il backup immutabile copre il ransomware, che altrimenti cifrerebbe primario e replica.

### In sede di prova

Definire RPO e RTO con le parole «dati che posso perdere» e «tempo per ripartire». Distinguere in tre righe backup, replica e snapshot. Chiudere con la prova di ripristino. In un progetto, proporre numeri coerenti con il servizio: un portale informativo può tollerare un RPO di un giorno; un registro di atti no.

### Errori da evitare

- Scambiare le due sigle. RPO parla di dati, RTO di tempo di servizio.
- Rispondere a un quesito sul ransomware citando solo la replica.
- Dare numeri di RPO e RTO incompatibili con la tecnica scelta.

### Svolgimento da consegnare
La domanda chiede di non confondere tre tecniche che in un tema mediocre vengono usate come sinonimi. Il backup è una copia fatta per tornare indietro nel tempo. La replica è una copia fatta per continuare il servizio su un altro nodo. Lo snapshot è la fotografia rapida di un disco o di una macchina in un istante, utile prima di un cambiamento rischioso, e inutile come unica difesa se vive sullo stesso storage del dato originale.

Si parta dagli obiettivi, non dal prodotto. L'RPO, recovery point objective, è la quantità massima di dati che si accetta di perdere, misurata in tempo. Un RPO di un'ora significa che deve esistere un modo di ricostruire il lavoro fino ad almeno un'ora prima del guasto: un backup notturno non basta, servono i log delle transazioni copiati con quella frequenza, oppure una replica. L'RTO, recovery time objective, è il tempo massimo per rimettere il servizio a disposizione, compreso il tempo per accorgersi del guasto, decidere, ripristinare e verificare. Un backup che si restaura in un giorno non soddisfa un RTO di quattro ore, anche se le copie sono perfette.

La replica non sostituisce il backup per una ragione precisa. Il secondario applica le stesse scritture del primario. Se un operatore cancella una tabella, o se un ransomware cifra i file, la replica esegue la stessa operazione entro pochi minuti. A quel punto le due copie sono entrambe danneggiate. Il backup, se conserva generazioni precedenti e se non è raggiungibile con le stesse credenziali della produzione, permette di tornare a ieri, o alla settimana scorsa. Per questo una copia sola, sovrascritta ogni notte, è fragile: la notte successiva al danno la copia buona non c'è più.

Una formulazione difendibile in un ente è la regola 3-2-1. Tre copie dei dati, su due tipi di supporto, di cui una fuori dal sito o comunque fuori dal dominio di guasto del sito principale. La copia esterna, o quella immutabile per un periodo in cui non può essere cancellata né cifrata, è la risposta al ransomware. La replica in un'altra zona è la risposta al guasto di un nodo. Lo snapshot è la risposta all'aggiornamento del giovedì sera: se l'aggiornamento fallisce si torna all'istante dello scatto, senza aprire il backup della notte. Nessuna delle tre, da sola, copre gli altri due casi.

Il punto che chiude la risposta, e che molti dimenticano, è la prova di ripristino. Un backup mai restaurato è un'ipotesi. La prova va fatta su un ambiente isolato, con un utente che verifica un caso reale, e con il tempo misurato, perché l'RTO include le persone, non solo la velocità del disco. In un progetto si scrivono i due numeri, la tecnica che li rende veri, e la cadenza della prova. Per un portale informativo può bastare un RPO di un giorno. Per un registro di atti no. I numeri senza la tecnica, o la tecnica senza i numeri, sono una risposta a metà.

```disegno
titolo: Che cosa copre ciascuna copia
riga: Errore umano o ransomware | Guasto di un nodo | Aggiornamento fallito
freccia: si torna indietro | si continua | si torna all'istante
riga: Backup con più generazioni, immutabile | Replica | Snapshot
nota: La replica copia anche l'errore. Lo snapshot sullo stesso disco non sopravvive al guasto di quel disco.
```

### Approfondire

- [Backup](https://it.wikipedia.org/wiki/Backup)
- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)
- [Microsoft Learn, backup e ripristino](https://learn.microsoft.com/it-it/azure/architecture/framework/resiliency/backup)

## Continuità operativa e disaster recovery

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** BC, DR, BIA, sito secondario
**Semaforo:** giallo

### Inquadramento

La continuità è tenere il servizio nei limiti dichiarati. Il disaster recovery è tornare dopo un guasto che la sala non regge. I due piani si scrivono a partire dall'impatto: quali servizi, in quale ordine, con quali persone. Sul foglio si distingue un guasto di un nodo, che si cura con la ridondanza, da un guasto della sala, che chiede un sito o un ripristino lungo. Si nomina la prova periodica. Senza una prova, i tempi dichiarati sono un desiderio.

### Definizione

La continuità operativa è la capacità di un’organizzazione di continuare a svolgere le attività essenziali durante e dopo un’interruzione. Il disaster recovery è la parte tecnica: ripristinare sistemi, dati e connettività dopo un evento che mette fuori uso il sito principale. La continuità dice che cosa deve restare vivo per l’ente. Il disaster recovery dice come si riaccendono gli strumenti informatici.

### Che cosa contiene un piano

Si parte dall’analisi di impatto. Per ogni servizio si chiede: quanto fermo è tollerabile, quanti dati si possono perdere, quali attività hanno un’alternativa manuale, quali dipendono da un fornitore. Da lì escono RPO e RTO, che non sono uguali per tutti i servizi. Il protocollo e la posta possono avere obiettivi diversi dal sito pubblico di consultazione.

Poi si scelgono le misure, proporzionate. Per un servizio si accetta il ripristino da backup in un giorno. Per un altro si tiene un sito secondario caldo, già alimentato e quasi allineato, pronto a ricevere gli utenti con un cambio di instradamento. Un sito freddo è soltanto uno spazio predisposto: costa meno e riparte più lentamente. Un sito caldo costa di più e riduce l’RTO.

Il piano nomina le persone, non solo gli apparati. Chi dichiara il disastro, chi parla con i fornitori, chi verifica che i dati ripristinati siano integri, come si avvisano gli utenti. Un piano che esiste solo in una cartella sul server del sito che è appena bruciato non è disponibile. La copia delle procedure sta anche fuori banda.

Il piano si prova. Una prova da tavolo controlla che i ruoli siano chiari. Una prova tecnica restaura davvero un sistema in un ambiente isolato e misura il tempo. Gli esiti aggiornano il piano. Senza prove, i numeri di RTO sono auguri.

Il disaster recovery non copre solo l’incendio. Copre il guasto esteso, l’errore di un aggiornamento, l’attacco che rende inservibile il sito, l’indisponibilità di un fornitore cloud di una intera regione. Per questo le copie e le credenziali di ripartenza non stanno nello stesso dominio di guasto, e gli account di emergenza sono custoditi.


### Nel dettaglio

La continuità risponde a una domanda diversa dal backup. Il backup risponde: i dati ci sono ancora? La continuità risponde: l’ufficio lavora ancora, e con quale degrado, mentre il sistema manca? Si parte dall’analisi di impatto. Per ogni servizio si chiede quanto fermo è tollerabile prima che il danno diventi inaccettabile, e quanto dato si può rifare a mano. Quel tempo massimo è il punto di partenza dell’RTO, non il contrario. Un protocollo fermo due giorni può essere un danno istituzionale. Un cruscotto statistico fermo due giorni può essere un fastidio. Metterli nello stesso piano, con lo stesso RTO, spreca o espone.

Il piano nomina persone, non solo sistemi. Chi dichiara l’incidente. Chi parla con gli uffici. Chi decide di passare al sito secondario, perché quella decisione ha un costo e non è automatica per ogni allarme. L’ordine di riaccensione conta: prima l’identità, poi la rete, poi il database, poi l’applicazione, poi le postazioni. Riaccendere l’applicazione con il database ancora fermo produce una coda di errori e, a volte, scritture nel posto sbagliato. Le procedure stanno scritte in un luogo che resta leggibile quando la sala non c’è: se l’unica copia del piano è sul server spento, il piano non esiste.

Le prove sono di tre gradi, e un piano non provato è una bozza. La prova a tavolino legge il piano e cerca i buchi: manca un numero di telefono, un passo assume un accesso che nel disastro non ci sarebbe. La prova in parallelo accende il sito secondario senza spegnere il primario, e verifica che i dati e le funzioni ci siano. La prova completa sposta davvero il servizio, di solito in una finestra dichiarata, e misura l’RTO vero, compreso il tempo delle persone. Si scrive che cosa non ha funzionato e si aggiorna il piano. Un disastro che non si è mai simulato dura più del numero dichiarato.

Il disaster recovery è la parte del piano che riguarda il ritorno del sistema informatico dopo un evento che ha reso la sala inutilizzabile: incendio, allagamento, guasto esteso, ransomware che ha tolto ogni copia locale. Usa il secondo sito e le copie. Non copre, da solo, il lavoro manuale degli uffici durante le ore di fermo: quella è la continuità, e va detta insieme. Sul foglio, per un servizio solo, bastano l’impatto, il tempo massimo, chi decide, l’ordine di riaccensione e la prova che si farà.

### Esempio

Un’applicazione di gestione documentale ha RTO di otto ore. Il piano prevede: backup immutabile fuori dal sito, procedure stampate e in una cassetta di emergenza, un ambiente di ripristino già contrattualizzato, un responsabile e un sostituto. Due volte l’anno si restaura il database e si fa accedere un utente di prova. Due ore di quella prova misurano se le otto ore sono realistiche.

### In sede di prova

Distinguere continuità e disaster recovery nella prima frase. Citare l’analisi di impatto come origine di RPO e RTO. Dire che il piano include persone, sedi e una prova periodica. Se si sta progettando un’applicazione, dedicare un paragrafo breve a questi tre punti invece di scrivere «è previsto il disaster recovery».

### Errori da evitare

- Trattare il disaster recovery come un sinonimo di backup notturno.
- Dimenticare le persone e le comunicazioni.
- Fissare un RTO di quindici minuti senza un secondo sito e senza averlo mai provato.

### Approfondire

- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)
- [Continuità operativa](https://it.wikipedia.org/wiki/Business_continuity)
- [Agenzia per la cybersicurezza nazionale](https://www.acn.gov.it/)

## Backup completo, incrementale e differenziale

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** backup, incrementale, differenziale, finestra
**Semaforo:** verde

### Inquadramento

La differenza sta in «rispetto a che cosa» si copia, e soprattutto in che cosa si deve rileggere per tornare a un giovedì. L'incrementale è corto da copiare e lungo da ricostruire. Il differenziale è il contrario. Il completo è la base di entrambi. Sul foglio si fa un esempio con i giorni della settimana e si dice quanti pezzi servono per ricostruire. Si aggiunge che, se l'RPO è di minuti, il differenziale notturno non basta: servono i log. Si chiude con la prova di un ripristino in un ambiente isolato.

### Definizione

Un backup completo copia tutti i dati da proteggere. Un backup incrementale copia solo ciò che è cambiato dall'ultimo backup di qualunque tipo. Un backup differenziale copia ciò che è cambiato dall'ultimo backup completo. La differenza si vede al momento del ripristino, non solo al momento della copia. È una delle domande più probabili quando il quesito parla di continuità, e va tenuta distinta da replica e snapshot.

### Come si sceglie, con i tempi veri

Il completo è il più semplice da restaurare: si parte da quella copia e il sistema torna a quell'istante. Costa tempo e spazio ogni notte. Su un database grande la finestra può non bastare, e tenere sette completi occupa sette volte lo spazio.

L'incrementale è il più leggero da produrre. La notte dopo il completo si copiano le modifiche di quel giorno. La notte successiva solo le modifiche nuove, non quelle già copiate. Il ripristino è una catena. Per tornare a giovedì servono il completo di domenica e tutti gli incrementali di lunedì, martedì, mercoledì e giovedì, nell'ordine. Se un anello manca o è illeggibile, la catena si ferma. È efficiente e fragile se non si verifica ogni pezzo.

Il differenziale sta in mezzo. Ogni differenziale contiene tutte le modifiche dal completo, non solo quelle dell'ultimo giorno. Il differenziale di giovedì è più grosso di quello di lunedì. Il ripristino chiede due pezzi soli: il completo e l'ultimo differenziale. Si paga in spazio ciò che si guadagna in semplicità.

In un ente una combinazione usuale è il completo nel fine settimana, quando la finestra è larga, e il differenziale ogni notte feriale, se lo spazio c'è, oppure l'incrementale se i dati crescono molto e si accetta la catena, a condizione di provarla. Per un database il «completo» spesso è un dump coerente più l'archivio dei log: i log permettono di arrivare a un minuto preciso, che è il modo di ottenere un RPO breve senza copiare tutto ogni ora. Dire «facciamo un incrementale» senza dire da quale completo dipende, e senza dire come si restaura, è una risposta incompleta.

Il tipo di backup non risolve la separazione. Anche il completo, se sta sullo stesso server e con le stesse credenziali, viene cifrato dal ransomware insieme ai dati. La politica di conservazione dice quante generazioni si tengono e per quanto. Un completo di sei mesi fa serve a una cancellazione scoperta tardi. Un incrementale di stanotte serve al guasto di stamattina. Servono entrambi gli orizzonti.

```disegno
titolo: Che cosa si rilegge per tornare a giovedì
riga: Completo di domenica
freccia: poi, nell'ordine, se la strategia è incrementale
riga: Incrementale lun | Incrementale mar | Incrementale mer | Incrementale gio
freccia: se invece la strategia è differenziale, bastano due pezzi
riga: Completo di domenica | Differenziale di giovedì
nota: Il differenziale di giovedì contiene già lunedì, martedì e mercoledì. Non si sommano i differenziali fra loro.
```


### Nel dettaglio

Conviene usare una settimana e dei numeri tondi, e rifare il conto sul foglio. Completo la domenica: tutto, un terabyte, quattro ore di finestra. Da lunedì a sabato il dato nuovo è circa cinquanta gigabyte al giorno. L’incrementale di lunedì copia quei cinquanta. Quello di martedì copia solo ciò che è cambiato rispetto a lunedì, altri cinquanta, non rispetto alla domenica. Il differenziale di lunedì copia cinquanta rispetto alla domenica. Quello di martedì copia i cento cambiati dalla domenica. Quello di venerdì copia duecentocinquanta. L’incrementale resta piccolo ogni giorno. Il differenziale cresce, e il venerdì può durare quanto un completo piccolo.

Il ripristino inverte il conto. Con gli incrementali, per tornare alla situazione di venerdì sera servono il completo di domenica e poi, in ordine, gli incrementali di lunedì, martedì, mercoledì, giovedì e venerdì. Cinque nastri, cinque passi, e un incrementale illeggibile in mezzo spezza la catena: da quel punto in poi non si ricostruisce. Con i differenziali servono due pezzi: il completo e il differenziale di venerdì, che contiene già tutta la settimana. Meno pezzi, meno punti di rottura, più tempo speso ogni sera a copiare. La scelta si scrive così: incrementale se la finestra notturna è stretta e si accetta una catena al ripristino; differenziale se si vuole un ripristino in due passi e la finestra lo consente. Molti enti fanno il completo settimanale, il differenziale giornaliero, e tengono diverse generazioni.

La regola tre-due-uno rende il conto una strategia. Tre copie, contando l’originale. Due supporti di tipo diverso, così un difetto di una tecnologia non colpisce tutto: disco e nastro, oppure disco e un oggetto immutabile. Una copia in un altro luogo, così l’incendio della sala non è anche l’incendio del backup. La copia nello stesso rack, sullo stesso gruppo dischi, viola l’ultima condizione anche se il software dice «backup riuscito». La copia che il ransomware può cifrare perché è una cartella di rete sempre montata e scrivibile viola la separazione: almeno una generazione deve essere immutabile o staccata, non raggiungibile con le credenziali del server colpito.

Si aggiunge la verifica. Un backup non letto non è un backup. A calendario si ripristina un file, e a intervallo più lungo si ripristina il servizio intero su un sistema di prova, misurando le ore. Quel numero misurato sostituisce, nel discorso, le quattro ore sperate.

### Esempio da scrivere sul foglio

Il database del protocollo pesa 200 GB. Il completo di domenica dura tre ore e sta su un sistema immutabile per trenta giorni. Ogni notte feriale un differenziale copia il cambiato rispetto a domenica e dura quaranta minuti. I log delle transazioni si copiano ogni quindici minuti su un altro supporto, perché l'RPO dichiarato è un quarto d'ora e il differenziale notturno da solo non lo soddisfa. Una volta al mese si restaura il completo e un differenziale in un ambiente isolato e si apre un atto a caso. Il tempo misurato entra nel giudizio sull'RTO.

### In sede di prova

Definire i tre tipi con la frase «rispetto a che cosa». Dedicare più spazio al ripristino che alla copia. Collegare all'RPO: il tipo di backup notturno non sostituisce i log se l'RPO è di minuti. Chiudere con la prova e con la copia fuori dalla portata della produzione.

### Errori da evitare

- Sommare più differenziali come se fossero incrementali.
- Credere che l'incrementale sia «più sicuro» perché è più moderno. È più leggero e più lungo da restaurare.
- Non dire da quale completo dipende la catena.

### Approfondire

- [Backup](https://it.wikipedia.org/wiki/Backup)

## Sito caldo, sito tiepido e sito freddo

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** disaster recovery, sito caldo, RTO
**Semaforo:** giallo

### Inquadramento

I tre siti misurano quanto del servizio è già pronto altrove. Il freddo è spazio e corrente. Il tiepido ha sistemi predisposti e dati da allineare. Il caldo è già instradabile. Il costo segue la prontezza, anche nei mesi in cui non succede nulla. Sul foglio si parte dall'RTO e si sceglie il sito che quell'RTO può pagare. Un RTO di ore non giustifica un sito caldo. In tutti e tre i casi il backup immutabile resta, perché il disastro può essere una cancellazione e non un incendio.

### Definizione

Quando il disastro non è un disco ma l'intero sito, la replica nello stesso edificio non basta. Il secondo sito si classifica per quanto è pronto. Un sito caldo elabora già, o può prendere il servizio in minuti, con dati quasi allineati. Un sito tiepido ha macchine e software predisposti, ma i dati vanno aggiornati o il servizio va avviato, e il ritorno chiede decine di minuti o poche ore. Un sito freddo è spazio, energia e connettività, senza sistemi già installati: costa meno e riparte in giorni. I nomi variano tra i testi. Conta la definizione operativa che si dà: quanto tempo, quanti dati, che cosa è già acceso.

### Come si sceglie senza fingere un secondo data center

La scelta segue l'RTO, non il prestigio. Un inventario dei beni con RTO di un giorno lavorativo non giustifica un sito caldo. Un sistema che deve seguire i lavori di un'aula, con un fermo di minuti inaccettabile, non si accontenta di un contratto che promette «un ambiente di ripristino entro una settimana». Si scrive il numero, poi la tecnica. Il sito caldo implica una replica continua o quasi, un modo già provato di spostare gli utenti, e persone che sanno eseguire il passaggio. Costa il doppio dell'esercizio, o poco meno. Il sito freddo è onesto quando il piano di continuità dell'ente prevede, per quel servizio, un modo manuale per qualche giorno.

Anche il cloud usa la stessa logica con altri nomi: due zone della stessa regione assomigliano a un sito caldo o tiepido, a seconda della replica del database; una copia in un'altra regione, da restaurare, assomiglia a un tiepido. Chiamarlo «multi-region active-active» senza saper dire come si evita di scrivere due volte lo stesso atto è peggio che scegliere un tiepido e descriverlo.

Il passaggio va provato. Un sito caldo mai commutato è un sito di cui non si conosce l'RTO. La prova può essere parziale: si accende il servizio in isolamento, si verifica un utente, si misura il tempo, non si sposta per forza tutto l'ente. Il piano dice chi dichiara il disastro. Senza quella persona, il sito pronto aspetta un ordine che non arriva.

```disegno
titolo: Prontezza del secondo sito e tempo di ritorno
riga: Freddo | Spazio e corrente, sistemi da installare | Giorni
riga: Tiepido | Sistemi predisposti, dati da allineare o servizio da avviare | Ore
riga: Caldo | Dati allineati, passaggio già instradabile | Minuti
nota: Più il sito è pronto, più costa anche quando non succede nulla. Il backup immutabile serve in tutti e tre i casi, perché il disastro può essere logico e non fisico.
```


### Nel dettaglio

I tre siti si distinguono per ciò che è già acceso e per quanto dato è già lì, non per la temperatura della sala. Il sito freddo è spazio, energia, rete, e poco altro. Le macchine arrivano o si installano al momento. I dati arrivano dall’ultima copia, che può avere giorni. L’RTO si misura in giorni: procurare o installare, ripristinare terabyte, riconfigurare, provare. Costa poco finché il disastro non accade, e costa il fermo lungo quando accade. Ha senso per un servizio il cui impatto, nell’analisi, ammette quel fermo, o come rete di sicurezza oltre un sito più rapido.

Il sito tiepido ha macchine già presenti, sistema operativo e applicazione installati, accesi o accendibili in poco tempo, e dati non aggiornatissimi: una replica asincrona lenta o un ripristino dell’ultimo backup. L’RTO sta nelle ore. Il lavoro del disastro è promuovere i dati, controllare la coerenza, spostare il nome con cui gli utenti raggiungono il servizio, provare. È il compromesso che in un ente pubblico si riesce spesso a motivare: non si paga un secondo centro a pieno carico, e non si accetta un fermo di una settimana.

Il sito caldo ha sistemi già in esercizio, dati allineati con replica stretta, e un passaggio che può essere di minuti. Si paga tutto due volte: licenze, energia, conduzione, e la replica continua. Ha senso quando l’RTO dichiarato è così breve che non c’è il tempo di installare o di ripristinare da nastro. Un caldo spento nella pratica, con la replica trascurata e la procedura mai provata, è un tiepido che si crede caldo. La prova periodica di passaggio è parte del sito, non un optional.

Il passaggio ha i suoi trabocchetti, e uno va scritto. Lo split brain: il sito primario non è morto, è solo isolato dalla rete, e entrambi accettano scritture. Al ritorno si hanno due verità. La regola è che un sito si promuove solo se ha il quorum o se una persona decide, e il primario isolato smette di scrivere. L’altro trabocchetto è il nome: gli utenti e i nodi raggiungono il servizio per un nome. Quel nome deve spostarsi sul sito nuovo, oppure un apparato deve instradare verso il sito sano. Cambiare l’indirizzo a mano su ottanta postazioni non è un RTO di minuti.

Si chiude legando il sito al numero. RTO di giorni: freddo, con la copia fuori sede. RTO di ore: tiepido, con hardware presente e backup recente. RTO di minuti: caldo, con replica e prova di failover. Il sito, qualunque esso sia, sta abbastanza lontano da non condividere l’incendio, l’allagamento e il quadro elettrico del primo.

### In sede di prova

Non promettere un sito caldo se l'RTO del tema è di ore. Descrivere il tiepido con che cosa è già lì e che cosa si deve ancora fare. Ricordare che nessuno dei tre sostituisce le generazioni di backup.

### Errori da evitare

- Due server nella stessa sala chiamati «sito secondario».
- Un RTO di quindici minuti e un sito freddo nella stessa frase.
- Dimenticare il modo in cui gli utenti arrivano al nuovo sito: DNS, indirizzi, VPN.

### Approfondire

- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)

## Il sistema operativo, fra l'hardware e le applicazioni

**Prove:** seconda prova gruppo 1, orale
**Tag:** kernel, processi, memoria virtuale, file system
**Semaforo:** verde

### Inquadramento

Il sistema operativo è il confine fra il ferro e i programmi. Nucleo, processi, memoria virtuale e file sono i quattro nomi da saper dire, ciascuno con il guasto che spiega. Due applicazioni sono due processi e non si vedono la memoria. Se la RAM finisce, le pagine vanno su disco e il servizio rallenta in modo brusco. Sul foglio si prende il processo del portale e si dice che cosa gli manca se gli utenti raddoppiano. Si distingue il sistema sul ferro, quello dentro una macchina virtuale e il nucleo condiviso dai container.

### Definizione

Il sistema operativo è il programma che amministra l'hardware e offre alle applicazioni un ambiente stabile. Non è «il computer» e non è l'applicazione dell'ente. Sta in mezzo: assegna il processore, la memoria e i dispositivi, isola i programmi fra loro e presenta file, rete e utenti come astrazioni, così ogni applicazione non deve conoscere il modello del disco o della scheda.

### Che cosa fa, e che cosa si deve saper dire

Il nucleo, il kernel, gira con i privilegi sull'hardware. Le applicazioni girano in modalità utente e, per usare un disco o la rete, chiedono un servizio al nucleo. Questa separazione è il motivo per cui un programma difettoso non dovrebbe riscrivere la memoria di un altro. Quando succede lo stesso, è un difetto del sistema o un attacco, non il funzionamento normale.

Un processo è un programma in esecuzione, con la sua memoria e le sue risorse. Un thread è un flusso di esecuzione dentro quel processo: condivide la memoria con gli altri thread dello stesso processo. Due richieste contemporanee dello stesso server applicativo sono spesso due thread. Due applicazioni diverse sono due processi, e non si vedono la memoria.

La memoria virtuale dà a ogni processo l'impressione di avere un proprio spazio di indirizzi, continuo e privato. Il sistema traduce quegli indirizzi in pagine di RAM. Se la RAM non basta, pagine poco usate finiscono su disco: è lo swap, o paginazione. Il processo continua, ma diventa lento in modo brusco, perché il disco non ha i tempi della RAM. In un quesito questo distingue «manca memoria» da «il processore è lento».

Lo scheduler decide quale processo o thread usa il processore in ciascun intervallo. Su un server con molti utenti la giustizia e la latenza contano più del far correre un solo programma fino in fondo.

Il file system presenta i dati persistenti come file e cartelle, con permessi. Il driver adatta un dispositivo particolare all'interfaccia unica del nucleo. Senza questa mediazione ogni applicazione dovrebbe conoscere ogni disco.

In un centro dati il sistema operativo del nodo può essere quello di un server, oppure non esserci affatto come sistema «generale» se sul ferro è installato un hypervisor. Le macchine virtuali, sopra, hanno ciascuna il proprio sistema operativo. Il container, invece, condivide il nucleo dell'host e isola il resto. Confondere le tre cose è l'errore tipico.

```disegno
titolo: Dove sta il sistema operativo
riga: Applicazioni, in modalità utente
freccia: chiedono un servizio, non toccano il disco da sole
riga: Nucleo | processi, memoria, file, rete, driver
freccia: comanda l'hardware
riga: CPU | RAM | dischi | schede di rete
nota: La memoria virtuale isola i processi. Se la RAM finisce, le pagine vanno su disco e il sistema rallenta.
```


### Nel dettaglio

Il kernel è la parte che gira con il privilegio di parlare all’hardware. Tutto il resto, comprese le applicazioni dell’ente, gira in modalità utente e chiede al kernel ciò che non può fare da sé: leggere un file, aprire una connessione, allocare memoria. La chiamata di sistema è quel confine. Senza questo confine un programma qualunque scriverebbe sui dischi degli altri e leggerebbe la memoria del processo vicino. In un quesito sulla stabilità, la frase è: un’applicazione può terminare senza trascinare le altre, perché il kernel le separa. Un errore nel kernel, invece, può fermare la macchina.

Il processo è un programma in esecuzione con il suo spazio di memoria, i suoi file aperti, la sua identità. Due processi non si vedono la memoria. Il thread è un flusso di esecuzione dentro lo stesso processo: condivide la memoria con gli altri thread e costa meno da creare. Un server web tiene spesso più thread o più processi per servire più richieste insieme. Condividere la memoria fra thread è veloce e pericoloso: due thread che aggiornano la stessa variabile senza un criterio si pestano i piedi. In un elaborato non serve progettare i thread. Serve dire che il server applicativo è un processo, gira con un utente di sistema che non è l’amministratore, e ha solo i permessi dei file e della rete che gli servono.

La memoria virtuale dà a ogni processo l’illusione di uno spazio continuo, e il kernel traduce in pagine fisiche. Pagine poco usate finiscono su disco. Il processo non se ne accorge, se non per la lentezza. Da qui il thrashing già visto sulla macchina: è il kernel che obbedisce, non un difetto del disco. Il filesystem aggiunge la durevolezza. Un filesystem con giornale annota l’intenzione di una scrittura prima di compierla: se la corrente manca a metà, al riavvio si completa o si annulla, e la struttura dei file non si corrompe. Il giornale non sostituisce il backup. Una cancellazione voluta, o cifrata da un malware, è coerente per il filesystem.

L’identità è il pezzo da collegare all’applicazione. Ogni processo ha un utente. I file hanno un proprietario e permessi di lettura, scrittura, esecuzione, distinti per proprietario, gruppo e altri. Il servizio che legge il database non deve poter leggere i backup, e l’utente con cui si entra in sala comandi non deve essere lo stesso con cui gira il servizio, esposto alla rete. Gli aggiornamenti del sistema chiudono vulnerabilità del kernel e delle librerie: un’applicazione corretta sopra un sistema non aggiornato resta esposta. Sul foglio si nominano quattro compiti: separare i processi, amministrare la memoria, custodire i file con i permessi, offrire la rete. E una frase: l’applicazione non parla ai dischi, parla al sistema operativo.

### Esempio

Il portale delle richieste gira come processo sul server applicativo. La CPU esegue la logica delle richieste, la RAM tiene sessioni e codice, il disco tiene i log locali, il database sta su un'altra macchina. Se gli utenti raddoppiano e la RAM non basta, il sistema inizia a paginare e le pagine web passano da un secondo a decine di secondi. Aggiungere «un processore più veloce» non cura quel sintomo. Si aumenta la RAM, si limita ciò che si tiene in memoria, oppure si aggiunge un secondo nodo. Il sistema operativo non decide questa architettura: la rende osservabile, con i contatori di memoria, di CPU e di disco.

### In sede di prova

Definire il sistema operativo come amministratore dell'hardware e confine fra le applicazioni. Nominare nucleo, processo, memoria virtuale e file, ciascuno con una frase sul perché esiste. Se il quesito è di progettazione, usare la memoria e i processi per motivare quanti nodi servono, non per recitare la storia di von Neumann, che appartiene alla voce sul sistema elaborativo.

### Errori da evitare

- Chiamare sistema operativo un pacchetto applicativo, o il browser.
- Dire che la memoria virtuale «è più veloce della RAM». È un'astrazione: quando trabocca sulla memoria di massa, è più lenta.
- Trattare thread e processi come sinonimi. Il thread condivide la memoria del processo. Il processo no.

### Approfondire

- [Sistema operativo](https://it.wikipedia.org/wiki/Sistema_operativo)
- [Memoria virtuale](https://it.wikipedia.org/wiki/Memoria_virtuale)
- [CPU](https://it.wikipedia.org/wiki/CPU)

## Client leggero, postazione tradizionale e desktop virtuale

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** thin client, VDI, postazione
**Semaforo:** giallo

### Inquadramento

La scelta dice dove sta il dato e che cosa succede se cade la rete della sede. La postazione tradizionale lavora anche da sola e disperde i file. L'applicazione web tiene logica e dati nei server. Il desktop virtuale sposta nel centro anche il sistema di lavoro, e si paga in server e in banda. Sul foglio si sceglie l'applicazione web per un servizio nuovo. Il desktop virtuale si cita solo se la traccia ha un programma che esiste soltanto come client installato. Si scrive, in una riga, il comportamento a rete assente.

### Definizione

Il client è il posto da cui la persona usa il servizio. Può essere una postazione tradizionale, che esegue programmi e conserva file in locale, un client leggero, che mostra soprattutto ciò che elabora un server, oppure un desktop virtuale, in cui l'intero sistema di lavoro gira nel centro dati e alla scrivania arriva solo l'immagine. La scelta cambia dove stanno i dati, che cosa si rompe se si rompe la rete, e quanto costa assistere cento postazioni uguali.

### Le tre forme

Nella postazione tradizionale il programma è installato sul PC. Funziona anche con la rete assente, se i dati sono locali, e spreca questa autonomia nel momento in cui i dati dovevano essere centrali: copie divergenti, backup dimenticati, un portatile perso con i fascicoli sopra. L'assistenza è per macchina.

Il client leggero, nel senso stretto, ha poca logica. L'elaborazione sta sul server. Il vantaggio è il controllo: il dato non nasce sulla scrivania. Il limite è la rete. Senza rete non c'è lavoro. Un'applicazione web a tre livelli è la forma più comune di questo modello, anche se il «client» è un browser su un PC normale e non un apparecchio dedicato.

Il desktop virtuale sposta nel centro dati non solo l'applicazione, ma l'intero ambiente di lavoro: sistema, programmi da ufficio, profilo. La scrivania è un terminale, o un programma che mostra quello schermo. La persona cambia stanza e ritrova la stessa sessione. Il costo si sposta sui server, sullo storage e sulla rete, che deve reggere molti schermi contemporanei. Non è gratuito solo perché i PC di scrivania diventano più piccoli.

Per un'applicazione nuova dell'ente, la scelta da scrivere quasi sempre è l'applicazione web, non un desktop virtuale. Il desktop virtuale si cita quando la traccia parla di postazioni intercambiabili, di aule, di sportelli, o del fatto che sulla scrivania non deve restare nulla. Si rifiuta quando la rete delle sedi è povera e il lavoro deve continuare in isolamento: allora servono dati minimi in locale e una sincronizzazione, e lo si scrive come compromesso, non come ideologia.

```disegno
titolo: Dove sta il dato, nelle tre scelte
riga: Postazione tradizionale | programmi e file sul PC
riga: Applicazione web | browser sulla scrivania, logica e dati nei server
riga: Desktop virtuale | anche il sistema di lavoro è nel centro dati
nota: Meno dati sulla scrivania, più dipendenza dalla rete e dal centro dati.
```


### Nel dettaglio

La postazione tradizionale tiene in locale sistema operativo, programmi e una parte dei dati. Funziona anche se il collegamento con la sala cade, per tutto ciò che è installato in locale, e smette di funzionare per ciò che sta sul server. Il costo è la conduzione: ottanta postazioni sono ottanta sistemi da aggiornare, ottanta dischi su cui può restare un documento che non doveva uscire dall’ufficio, ottanta punti in cui un malware parte. In un elaborato si sceglie questa forma quando il lavoro include applicazioni che non si possono centralizzare, e si dice come si aggiornano e come si impedisce che l’unica copia di un atto stia sul disco locale.

Il client leggero è una macchina minima. Il sistema e le applicazioni stanno nel centro, e la postazione disegna lo schermo e manda tastiera e mouse. Sul disco locale non resta la pratica. Aggiornare significa aggiornare l’immagine centrale, non l’ufficio. Il prezzo è il collegamento: se la rete fra la stanza e il centro cade, la postazione non ha nulla da mostrare. Serve anche banda e latenza adatte, perché ogni azione viaggia. Per un ufficio nello stesso edificio, con la rete di sala, è spesso la scelta più pulita. Per una sede collegata da un filo modesto, va misurata.

Il desktop virtuale è la stessa idea con una macchina virtuale per persona, oppure una sessione su un server di sessione. La persona ritrova il proprio ambiente da qualunque stanza, anche da casa, e i dati non scendono sul portatile personale. Si dimensiona il server sulle sessioni contemporanee, non sul numero di dipendenti: se un terzo lavora insieme, si dimensiona quel terzo, con un margine. Il profilo dell’utente, cioè le sue impostazioni, va separato dall’immagine comune, altrimenti ogni aggiornamento dell’immagine cancella le preferenze o, peggio, si finisce per non aggiornare mai.

La sicurezza cambia verso. Nel client tradizionale il dato esce e va protetto sul disco, con cifra del disco e una regola su che cosa si può copiare. Nel client leggero e nel desktop virtuale il dato resta, e va protetto il canale e l’accesso: chi entra nella sessione da fuori passa per l’identità dell’ente e per un secondo fattore, e la sessione si chiude. Si dice anche che cosa è vietato: copiare la pratica sul dispositivo personale. Sul foglio si sceglie una forma, si scrive dove sta il dato, che cosa succede se la rete cade, e come si aggiorna un’unica immagine invece di ottanta dischi.

### Esempio

Gli uffici di un ente hanno PC diversi, e i verbali finiscono sui desktop. Una applicazione web, con i documenti sul server e i permessi sul server, toglie il verbale dal PC senza costringere a virtualizzare l'intero desktop. Il desktop virtuale entrerebbe in gioco se gli stessi uffici usassero ancora un programma che esiste solo come client installato e non si può riscrivere quest'anno. In quel caso il programma resta, ma gira su macchine nel centro dati, e la scrivania non ha la copia.

### In sede di prova

Dire dove sta il dato e che cosa succede se la rete della sede cade. Scegliere l'applicazione web per un servizio nuovo. Citare il desktop virtuale solo se risolve un vincolo della traccia, e nominarne il costo di rete e di server. Non chiamare «client leggero» qualunque PC che abbia un browser.

### Errori da evitare

- Promettere che il client leggero funziona offline.
- Virtualizzare cento desktop per un servizio che è una sola applicazione web.
- Lasciare i file di lavoro sul PC e dire che la sicurezza è risolta dal firewall perimetrale.

### Approfondire

- [Sistema client/server](https://it.wikipedia.org/wiki/Sistema_client/server)
- [Architettura multi-tier](https://it.wikipedia.org/wiki/Architettura_multi-tier)
- [Virtualizzazione](https://it.wikipedia.org/wiki/Virtualizzazione)

## Come si avvia un server, dal firmware al sistema operativo

**Prove:** seconda prova gruppo 1, orale
**Tag:** UEFI, boot, firmware
**Semaforo:** giallo

### Inquadramento

La domanda chiede il percorso fra l’accensione e il primo processo, non la marca della scheda madre. Sul foglio si nominano firmware, ordine dei dischi, bootloader e kernel, e si dice chi può modificare quell’ordine.

### Definizione

All’accensione il firmware della macchina, oggi di solito UEFI, inizializza il processore e la memoria, cerca un dispositivo di avvio secondo un ordine configurato e consegna il controllo a un bootloader. Il bootloader carica il kernel del sistema operativo, che monta il filesystem di radice e avvia i servizi.

### Nel dettaglio

L’ordine di avvio è una decisione di sicurezza e di esercizio. Se una porta USB precede il disco di sistema, chi ha accesso fisico avvia un altro sistema e legge i dischi. In sala l’ordine è il disco interno, oppure la rete di installazione usata solo durante il provisioning, e l’avvio da USB è disabilitato. UEFI può richiedere un bootloader firmato: un kernel o un bootloader modificato non parte. È la misura contro un malware che si installa prima del sistema operativo.

Il primo servizio che conta, dopo il kernel, è la rete e l’orologio. Un nodo che parte con l’ora sbagliata firma registri inutilizzabili e può rifiutare certificati non ancora validi o già scaduti secondo il suo orologio. Poi parte l’agente di gestione, se c’è, e solo dopo l’applicazione. Un’applicazione che parte prima del database, in un avvio di sala dopo un black-out, fallisce e va ritentata: l’ordine di riaccensione è parte del piano, non un dettaglio del firmware.

Il firmware si aggiorna. Un firmware vecchio ha difetti noti, e l’aggiornamento si fa in finestra, con la doppia immagine che molte schede tengono proprio per poter tornare indietro se il nuovo non parte. Aggiornare il firmware di venti nodi lo stesso venerdì, senza averne provato uno, è il modo di non riaprire lunedì.

### Esempio

Dopo un black-out la sala torna. I nodi partono insieme, chiedono tutti il DHCP e il database nello stesso secondo, e il servizio di indirizzi ne serve pochi. Si scaglionano gli avvii, o si danno indirizzi stabili ai nodi, e il database parte prima dei nodi applicativi.

### In sede di prova

Quattro passi: firmware, ordine di boot, kernel, servizi nell’ordine giusto. Una frase sulla firma del bootloader e una sull’orologio. Non serve il nome commerciale del firmware.

### Errori da evitare

- Dire che il sistema operativo è già in esecuzione quando il firmware sceglie il disco.
- Lasciare l’avvio da USB come comodità permanente in una sala.
- Riaccendere applicazione e database nello stesso istante dopo un fermo elettrico.

### Approfondire

- [UEFI](https://it.wikipedia.org/wiki/UEFI)
- [Boot](https://it.wikipedia.org/wiki/Boot)

## Interrupt, polling e accesso diretto alla memoria

**Prove:** seconda prova gruppo 1, orale
**Tag:** interrupt, DMA, I/O
**Semaforo:** giallo

### Inquadramento

La domanda chiede come la CPU venga a sapere che un disco o una scheda di rete ha finito un lavoro. Si confrontano tre modi e si dice quale usa una macchina moderna per il traffico grosso.

### Definizione

Il polling è la CPU che chiede di continuo al dispositivo se ha finito. L’interrupt è il dispositivo che interrompe la CPU quando ha qualcosa da dire. Il DMA, accesso diretto alla memoria, permette al dispositivo di scrivere i dati in RAM senza far passare ogni byte dal processore.

### Nel dettaglio

Il polling spreca processore: la CPU gira a vuoto chiedendo «fatto?». Ha senso solo su attese brevissime, in cui il costo di un cambio di contesto supererebbe l’attesa. L’interrupt costa un cambio di contesto e poi torna al lavoro. Se gli interrupt sono troppi, la CPU passa il tempo a entrarci e uscirci: è il caso di una scheda di rete che interrompe a ogni pacchetto piccolo, sotto un carico alto. Si raggruppano, oppure si passa a modi in cui la CPU svuota una coda a intervalli.

Il DMA esiste perché copiare un blocco di disco byte per byte attraverso la CPU saturerebbe il processore prima del disco. Il dispositivo e la RAM si scambiano il blocco, la CPU viene interrotta a trasferimento concluso. Il prezzo è che quel blocco di RAM non va toccato dal programma mentre il dispositivo ci scrive, e il sistema operativo gestisce questa coerenza.

In un quesito sul rallentamento, i tre meccanismi diventano una diagnosi. CPU alta e disco ozioso può essere polling o un ciclo applicativo. CPU bassa e disco saturo è un collo di I/O, e il DMA sta già facendo il suo: aggiungere CPU non serve. Tanti interrupt di rete e CPU alta a fare poco lavoro utile è un problema di ritmo degli interrupt, non di «server lento».

### Esempio

Un nodo che serve file grandi mostra la CPU quasi libera e il disco al limite: i dati vanno in RAM per DMA e la CPU si sveglia a blocco pronto. Aggiungere core non alza il numero di file serviti. Serve un disco con più operazioni al secondo, o meno letture.

### In sede di prova

Definire i tre modi in una frase ciascuno e dire che il trasferimento grosso usa il DMA. Chiudere con il collo di bottiglia: CPU, disco o interrupt.

### Errori da evitare

- Dire che la CPU legge ogni byte del disco nei trasferimenti ordinari.
- Trattare l’interrupt come un errore. È il modo normale di avvisare.
- Proporre più CPU per un sistema limitato dal disco.

### Approfondire

- [Interrupt](https://it.wikipedia.org/wiki/Interrupt)
- [DMA](https://it.wikipedia.org/wiki/DMA)

## Pagine di memoria, swap e thrashing

**Prove:** seconda prova gruppo 1, orale
**Tag:** memoria virtuale, swap, page fault
**Semaforo:** verde

### Inquadramento

È il quesito sul server che «ha ancora CPU» eppure non risponde. Si racconta la paginazione con i tempi, e si chiude con la misura che decide se aggiungere RAM.

### Definizione

La memoria virtuale dà a ogni processo uno spazio di indirizzi che il sistema operativo traduce in pagine fisiche. Le pagine poco usate possono stare su disco, nello swap. Un accesso a una pagina che non è in RAM è un page fault e costa il tempo del disco.

### Nel dettaglio

Una pagina è un blocco fisso, spesso quattro kilobyte. La tabella delle pagine traduce l’indirizzo del processo in quello fisico. Se la pagina è su disco, il processo si ferma, il kernel legge la pagina, e solo dopo l’istruzione riprende. Una lettura da RAM sta nel centinaio di nanosecondi. Una lettura da disco sta nei microsecondi o nei millisecondi. Il rapporto è di mille o di un milione. Pochi page fault si assorbono. Diventano il sistema quando le pagine attive non entrano in RAM.

Il thrashing è quella condizione: il kernel scarica una pagina per farne entrare un’altra che servirà subito, e viceversa. La CPU è oziosa, in attesa, e il disco è occupato da questo traffico, non dal lavoro dell’applicazione. Aggiungere CPU peggiora o non cambia nulla, perché più processi competono per la stessa RAM scarsa. Si aggiunge RAM, si riducono i processi, o si toglie il carico. Lo swap piccolo «tanto per sicurezza» non cura il thrashing: gli dà solo un disco su cui dibattersi.

Si misura prima di comprare. RAM libera vicina a zero, swap in crescita continua, tempo di CPU in attesa di I/O alto, latenza dell’applicazione a gradini. Un picco di RAM una volta al giorno, che rientra, è un dimensionamento stretto da allargare con margine. Uno swap che cresce per giorni è una perdita di memoria dell’applicazione, e aggiungere RAM sposta solo il momento del fermo.

### Esempio

Il nodo applicativo ha otto gigabyte e, all’apertura degli uffici, la coda dei ticket porta i processi oltre. Le pagine vanno su disco, la pagina dei ticket passa da due decimi di secondo a diversi secondi. Si porta la RAM a sedici, si mette un tetto ai processi e si verifica il giorno dopo che lo swap resta fermo.

### In sede di prova

Tempi di RAM e di disco, definizione di page fault, nome del thrashing, e la misura. La cura è RAM o meno processi, non una CPU più veloce.

### Errori da evitare

- Confondere lo swap, che è un’estensione lenta della RAM, con il disco dei dati.
- Dire che la memoria virtuale «raddoppia la RAM». Ne cambia l’indirizzamento e ne sposta l’eccesso su disco.
- Ignorare una perdita di memoria e limitarsi ad aggiungere RAM ogni mese.

### Approfondire

- [Memoria virtuale](https://it.wikipedia.org/wiki/Memoria_virtuale)
- [Paging](https://it.wikipedia.org/wiki/Paging)

## Processi, thread e scheduler

**Prove:** seconda prova gruppo 1, orale
**Tag:** processo, thread, scheduling
**Semaforo:** giallo

### Inquadramento

La domanda distingue ciò che è isolato da ciò che condivide la memoria. Si usa per spiegare un server che serve più richieste, e per spiegare un guasto che abbatte solo una richiesta oppure tutta l’applicazione.

### Definizione

Un processo è un programma in esecuzione con il proprio spazio di memoria, i propri file aperti e una propria identità. Un thread è un flusso di esecuzione dentro un processo: condivide la memoria con gli altri thread dello stesso processo. Lo scheduler del kernel decide quale flusso gira, e per quanto, su ciascun core.

### Nel dettaglio

Due processi non si vedono la memoria. Un errore che corrompe i dati di uno non corrompe l’altro, e il kernel può terminarne uno solo. Il costo è la separazione: comunicare richiede una pipe, un socket, una coda, non una variabile. Un server fatto di più processi paga questo costo e guadagna l’isolamento. Se un processo muore, gli altri continuano.

I thread costano meno da creare e comunicano subito, perché la memoria è la stessa. Il difetto è lo stesso: un thread che scrive male una struttura la scrive male per tutti, e un errore grave nel processo li abbatte insieme. Servono regole quando due thread aggiornano lo stesso dato. Senza una di queste regole il risultato dipende da chi arriva prima, ed è il difetto più difficile da riprodurre, perché in prova, con un utente solo, non compare.

Lo scheduler dà fette di tempo. Un core esegue un flusso alla volta. Con quattro core, quattro flussi procedono davvero insieme. Il quinto aspetta. Un’applicazione con duecento thread su quattro core non va duecento volte più veloce: va al massimo quattro volte, meno il costo di passare da un thread all’altro. Se i thread aspettano il disco o la rete, il core si libera e lo scheduler ne manda un altro: qui i thread numerosi hanno un senso. Se i thread calcolano, oltre il numero dei core sono solo coda.

### Esempio

Il server dei ticket usa un processo con un pool di thread. Una richiesta lenta, bloccata sul database, occupa un thread e non un core intero. Se il pool è di venti thread e venti richieste sono bloccate, la ventunesima aspetta anche se la CPU è libera. Si alza il pool solo insieme al numero di connessioni che il database regge.

### In sede di prova

Processo isolato, thread che condivide, scheduler che assegna i core. Una frase sul pool e sul suo tetto. Non serve disegnare le code dello scheduler.

### Errori da evitare

- Dire che cento thread usano cento core.
- Trattare i thread come processi isolati. Condividono la memoria e il destino del processo.
- Alzare il pool all’infinito quando il collo è il database.

### Approfondire

- [Processo (informatica)](https://it.wikipedia.org/wiki/Processo_(informatica))
- [Thread (informatica)](https://it.wikipedia.org/wiki/Thread_(informatica))

## Lavoro limitato dalla CPU e lavoro limitato dal disco

**Prove:** seconda prova gruppo 1, orale
**Tag:** CPU bound, I/O bound, collo di bottiglia
**Semaforo:** verde

### Inquadramento

È la domanda che impedisce di rispondere «mettiamo un server più potente» a ogni rallentamento. Si classifica il lavoro, si misura, e solo poi si aggiunge il pezzo che manca.

### Definizione

Un lavoro è limitato dalla CPU quando il processore è occupato e i dispositivi aspettano. È limitato dall’ingresso e uscita quando il processore aspetta disco, rete o un altro sistema. Il collo di bottiglia è il pezzo saturo: migliorarlo alza il rendimento, migliorare gli altri no.

### Nel dettaglio

Si riconoscono dai contatori, non dal sintomo «è lento», che è comune a entrambi. CPU alta per minuti, disco e rete bassi: il lavoro calcola. Esempi in un ente: generare un indice, cifrare un grande archivio, trasformare un lotto di immagini. La cura è meno lavoro, un algoritmo meno ingenuo, o più core se il calcolo si divide. Un core più veloce aiuta un calcolo che non si divide. Dieci core non aiutano un calcolo fatto di un solo flusso.

CPU bassa, disco al cento per cento delle operazioni, tempi di attesa alti: il lavoro aspetta i dati. Esempi: elenchi su tabelle grandi senza indice, backup, ricerca su dischi magnetici. La cura è un indice, un disco con più operazioni al secondo, meno letture. Aggiungere CPU lascia il disco dov’è. Il caso misto è il più comune nelle applicazioni di ufficio: la richiesta è breve di CPU e lunga di attesa del database. Il nodo applicativo sembra libero e il database è il collo. Scalare i nodi applicativi, in quel caso, moltiplica le attese e peggiora il database.

Si misura nell’ora di punta, non di domenica. Un campione di un minuto può cadere in una pausa. Si guarda la stessa ora per più giorni. Poi si scrive il numero: CPU media, operazioni disco, tempo della query più lenta. Senza numero la cura è un’opinione.

### Esempio

L’elenco dei ticket impiega otto secondi. La CPU del nodo applicativo è al dieci per cento. La query legge duecentomila righe perché manca l’indice su ufficio e stato. Si aggiunge l’indice, la query scende sotto il decimo di secondo. Un secondo nodo applicativo non avrebbe cambiato nulla.

### In sede di prova

Definire i due limiti, dire come si distinguono, e applicare la cura giusta a un caso. Chiudere con la frase: si potenzia il pezzo saturo.

### Errori da evitare

- Potenziare la CPU di un sistema che aspetta il disco.
- Duplicare i nodi applicativi quando il database è già saturo.
- Decidere il collo senza una misura nell’ora di punta.

### Approfondire

- [Collo di bottiglia](https://it.wikipedia.org/wiki/Collo_di_bottiglia_(ingegneria))
- [CPU](https://it.wikipedia.org/wiki/CPU)

## Disponibilità numerica: MTBF, MTTR e i nove

**Prove:** seconda prova gruppo 1, orale
**Tag:** disponibilità, MTBF, MTTR
**Semaforo:** verde

### Inquadramento

La domanda chiede di trasformare un percentuale in ore, e di far vedere che la disponibilità nasce da quanto spesso ci si ferma e da quanto si impiega a tornare. Il Tier e l’RTO si agganciano a questo conto, non lo sostituiscono.

### Definizione

L’MTBF è il tempo medio fra un guasto e il successivo. L’MTTR è il tempo medio per rimettere in servizio. La disponibilità è il rapporto fra il tempo in servizio e il tempo totale, e si approssima con MTBF diviso MTBF più MTTR, quando il guasto è l’unica causa di fermo.

### Nel dettaglio

Un anno ha 8760 ore. Il 99 per cento lascia fuori circa 87 ore, più di tre giorni. Il 99,9 per cento lascia fuori 8,8 ore. Il 99,99 per cento lascia fuori 52 minuti. Il 99,999 per cento lascia fuori circa 5 minuti. Recitare i nove senza questo conto è vuoto. Un ufficio aperto otto ore per duecentoventi giorni ha 1760 ore utili: il 99,9 per cento di quelle ore è circa un’ora e tre quarti di fermo nell’anno lavorativo. Si dichiara su quale calendario si misura, perché il fermo di notte, per un ufficio, può non contare.

Il rapporto dice anche dove agire. Un guasto ogni mille ore con un ripristino di dieci ore dà una disponibilità di 1000/1010, circa 99 per cento. Accorciare il ripristino a un’ora, con una procedura provata e i pezzi a portata, porta a 1000/1001, circa 99,9, senza rendere il componente più affidabile. Allungare l’MTBF con ridondanza è l’altra leva: il servizio non vede il guasto del singolo disco. Le due leve si sommano. La ridondanza senza una persona che sostituisce il disco guasto entro un giorno consuma la ridondanza e al secondo guasto si ferma.

I nove di un fornitore sono del suo pezzo, in condizioni sue. La disponibilità del servizio è la catena: rete, identità, applicazione, database, sala. Due pezzi in serie al 99,9 danno insieme circa 99,8. Si scrive la catena e si mette il margine sul pezzo più debole, non si copia il nove del depliant.

### Esempio

Lo sportello lavora 1760 ore l’anno e accetta quattro ore di fermo. È circa il 99,8 per cento sull’orario di ufficio. Un nodo solo, con ripristino di mezza giornata, non ci sta. Due nodi e un ripristino del nodo rotto in un giorno ci stanno, se il passaggio è automatico.

### In sede di prova

Tradurre un nove in ore, scrivere la formula in parole, e dire le due leve: guastarsi meno, tornare prima. Dichiarare il calendario.

### Errori da evitare

- Citare il 99,999 senza dire di quale anno e di quale orario.
- Sommare i nove di due componenti in serie come se il risultato fosse il migliore dei due.
- Inseguire l’MTBF e lasciare l’MTTR a una persona che non ha la procedura.

### Approfondire

- [Disponibilità](https://it.wikipedia.org/wiki/Disponibilit%C3%A0)
- [Affidabilità](https://it.wikipedia.org/wiki/Affidabilit%C3%A0)

## Ridondanza N, N+1 e 2N

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** N+1, 2N, ridondanza
**Semaforo:** verde

### Inquadramento

La domanda chiede quanti pezzi servono rispetto a quelli necessari, e che guasto ciascuno schema regge. Si applica a condizionatori, alimentatori, nodi, UPS, non a un prodotto.

### Definizione

N è il numero di componenti necessari a reggere il carico. N+1 aggiunge un componente di riserva. 2N raddoppia l’intero insieme, così un insieme intero può morire e l’altro regge. N+1 regge un guasto. 2N regge il guasto di una via intera.

### Nel dettaglio

Se il raffreddamento della sala richiede tre unità, N è tre. N+1 è quattro: una si ferma per guasto o manutenzione e le tre restanti bastano. Due guasti contemporanei no. Per questo, durante la manutenzione della quarta, la sala è tornata a N e un guasto ulteriore la scopre. Si fa la manutenzione quando si può accettare questa finestra, o si sale di schema.

2N, per la stessa sala, è sei unità su due vie da tre. Si può perdere una via. Costa il doppio di impianti, di spazio e di energia di controllo, anche quando tutto funziona. Si giustifica con un fermo inaccettabile, non con l’abitudine. Fra i due sta N+2, due riserve, utile quando la riparazione è lenta: si reggono due guasti, o un guasto durante la manutenzione.

Il conto si rifà sul carico vero. Se le tre unità bastano solo in inverno e d’estate ne servono quattro, N è quattro e l’impianto venduto come N+1 è di fatto N. La ridondanza si calcola sul picco, non sulla giornata media. E i pezzi della riserva devono essere davvero alternativi: due cavi nello stesso scavo sono 2N nel disegno e N nel primo cantiere stradale.

### Esempio

Due UPS da dieci kilowatt per un carico di nove sono quasi 2N, e uno solo regge. Due UPS da dieci per un carico di quindici sono N+qualcosa che non regge: al guasto di uno, l’altro va in sovraccarico e stacca. Si scrive il carico di picco accanto allo schema.

### In sede di prova

Definire N con il carico, poi lo schema, poi il guasto che regge e quello che non regge. Un numero, anche tondo.

### Errori da evitare

- Chiamare N+1 due componenti che insieme bastano appena.
- Dimenticare che durante la manutenzione la riserva è già consumata.
- Mettere le due vie di un 2N nello stesso punto fisico.

### Approfondire

- [Tolleranza ai guasti](https://it.wikipedia.org/wiki/Tolleranza_ai_guasti)
- [Ridondanza (ingegneria)](https://it.wikipedia.org/wiki/Ridondanza_(ingegneria))

## Quorum e split brain

**Prove:** seconda prova gruppo 1, orale
**Tag:** quorum, split brain, cluster
**Semaforo:** giallo

### Inquadramento

È la domanda sul cluster che si divide in due e ogni metà si crede quella giusta. Si spiega perché due nodi non bastano a decidere da soli, e che dato si rovina se entrambi scrivono.

### Definizione

Il quorum è il numero minimo di voti per decidere chi è attivo. Lo split brain è la condizione in cui due parti isolate si credono entrambe primarie e accettano scritture diverse. Al ritorno della rete i dati hanno divergere e non si fondono da soli.

### Nel dettaglio

Con due nodi, se il cavo fra loro si taglia, ciascuno vede l’altro morto. Se la regola è «se non vedo il collega divento primario», nascono due primari. Le applicazioni scrivono su entrambi. Le due copie, da quel momento, sono due verità. Rimetterle insieme richiede di buttare una delle due o di riconciliare a mano, e a mano, su migliaia di righe, non si fa.

Il quorum impedisce la promozione solitaria. Servono tre voti. I due nodi dati più un testimone piccolo, che non tiene i dati e sta in un terzo punto, oppure tre nodi dati. Una metà resta con un voto solo e smette di scrivere. L’altra, con due voti, continua. Il testimone deve stare dove il guasto che isola un nodo non lo isola insieme a lui: non nella stessa sala dello stesso nodo, se il rischio è la sala.

Il quorum non sostituisce il backup. Decide chi scrive. Una scrittura sbagliata, replicata prima della partizione, è su entrambi i lati e il quorum la conserva con diligenza. E un testimone spento da mesi, scoperto il giorno del guasto, non vota: si prova il failover, testimone compreso.

### Esempio

Due nodi di database in due armadi e il testimone nel sito di gestione. Cade la rete fra gli armadi. Il nodo che vede il testimone continua. L’altro passa a sola lettura o si ferma. Nessuna pratica viene confermata due volte.

### In sede di prova

Raccontare i due primari, poi il terzo voto, poi dove sta il testimone. Chiudere: il quorum evita le due verità, non le cancellazioni.

### Errori da evitare

- Fare un cluster di due nodi senza un terzo voto e senza una regola di fencing.
- Mettere il testimone nello stesso armadio di un nodo.
- Credere che lo split brain si risolva da solo al ritorno della rete.

### Approfondire

- [Split-brain (informatica)](https://it.wikipedia.org/wiki/Split-brain_(informatica))
- [Cluster (informatica)](https://it.wikipedia.org/wiki/Computer_cluster)

## Gruppo di continuità, batterie e gruppo elettrogeno

**Prove:** seconda prova gruppo 1, orale
**Tag:** UPS, batterie, generatore
**Semaforo:** verde

### Inquadramento

La domanda chiede la catena elettrica di una sala e, in particolare, chi copre i primi secondi e chi copre le ore. Si fa il conto del buco fra la caduta della rete e il generatore a regime.

### Definizione

Il gruppo di continuità alimenta i sistemi senza interruzione quando la rete manca, grazie alle batterie già in linea. Il gruppo elettrogeno produce energia per le interruzioni lunghe, ma ha bisogno di un tempo di avvio. Le batterie devono coprire almeno quel tempo.

### Nel dettaglio

Nell’UPS online la rete alimenta un raddrizzatore, che carica le batterie, e un inverter ricostruisce la corrente verso i server. I server non vedono la caduta: l’inverter non commuta, continua. L’autonomia si misura a carico pieno, non a sala semivuota. Una sala cresciuta di rack senza rifare il conto può essere scesa da venti minuti a cinque. Le batterie invecchiano e il caldo le accorcia: si provano, non si crede alla targa di cinque anni prima.

Il generatore parte, si stabilizza e accetta il carico. Possono volerci decine di secondi o alcuni minuti. Se l’autonomia residua delle batterie è minore, esiste un intervallo in cui nessuno alimenta. Si dimensiona l’autonomia con margine su questo tempo, e si prova il ciclo vero: si toglie la rete, si cronometra l’avvio, si verifica che il carico sia passato, si verifica che al ritorno della rete il ritorno indietro non stacchi. Una prova a vuoto, generatore acceso senza i server, non dice se regge il picco.

Il combustibile è parte del disegno. Un’interruzione di un giorno richiede serbatoio e un contratto di rifornimento. Un serbatoio da due ore con un RTO di giornata è coerente solo se il rifornimento è certo. Si scrive anche che il condizionamento deve stare sul generatore: i server alimentati e non raffreddati si spengono da soli per temperatura.

### Esempio

Rete assente alle quindici. Le batterie sono dimensionate per quindici minuti, il generatore in prova prende il carico in quattro. La sala non vede il buco. Il condizionamento è sulla stessa via del generatore e non si ferma. Il serbatoio copre otto ore e il rifornimento è contrattualizzato.

### In sede di prova

UPS per i secondi, generatore per le ore, batterie dimensionate sull’avvio misurato, raffreddamento sulla stessa via, prova a carico.

### Errori da evitare

- Trattare il generatore come istantaneo.
- Dimenticare il condizionamento sulla via di emergenza.
- Citare l’autonomia di targa senza una prova a carico recente.

### Approfondire

- [Gruppo di continuità](https://it.wikipedia.org/wiki/Gruppo_di_continuit%C3%A0)
- [Gruppo elettrogeno](https://it.wikipedia.org/wiki/Gruppo_elettrogeno)

## Corridoi, calore e efficienza della sala

**Prove:** seconda prova gruppo 1, orale
**Tag:** corridoio freddo, PUE, raffreddamento
**Semaforo:** giallo

### Inquadramento

La domanda lega il disegno fisico dei rack al fermo. Si spiega il verso dell’aria e si usa un indice, il PUE, come indizio, non come voto della sala.

### Definizione

L’aria fredda entra dal fronte delle macchine ed esce calda dal retro. I corridoi freddi e caldi separano i due flussi. Il PUE è il rapporto fra l’energia totale della sala e l’energia che arriva davvero all’informatica. Un PUE vicino a uno significa pochi sprechi di impianto. Un PUE di due significa che per ogni watt dei server se ne spende un altro in raffreddamento e perdite.

### Nel dettaglio

Se due rack si guardano con il retro verso il fronte, il secondo aspira l’aria appena scaldata dal primo. Il condizionatore lavora di più e, oltre una soglia, le macchine in cima al rack superano la temperatura e si spengono a macchia, le più calde prima. Il corridoio freddo confinato, chiuso da pannelli e da porte, costringe l’aria fredda a passare dentro le macchine. È un intervento da sala, spesso più utile di un condizionatore nuovo.

Il PUE si legge con il periodo. D’inverno una sala può sembrare efficiente perché l’aria esterna aiuta, d’estate no. Un PUE basso non dice che i server sono ridondati, né che il backup esiste. Dice quanto costa, in energia, tenere accesa l’informatica. In un quesito sul dimensionamento si usa così: un rack da cinque kilowatt informatici, con PUE due, chiede dieci kilowatt all’impianto. L’UPS e il generatore si calcolano sui dieci, non sui cinque.

La temperatura di ingresso alle macchine ha una fascia, spesso fra i venti e i ventisette gradi secondo le specifiche. Tenerla più bassa «per sicurezza» costa energia e non allunga la vita in proporzione. Un allarme sulla temperatura di ingresso, inviato a una persona, vale più di un grado in meno non sorvegliato.

### Esempio

Una fila di rack senza pannelli spegne il nodo in alto ogni pomeriggio d’agosto. Si chiudono i corridoi e si sposta il nodo più critico più in basso, dove l’aria è più fredda. Il condizionatore resta quello.

### In sede di prova

Verso dell’aria, corridoio confinato, PUE come rapporto e non come certificato di qualità, allarme a una persona.

### Errori da evitare

- Inseguire un PUE basso al posto della ridondanza.
- Raffreddare una sala mescolata comprando solo più potenza frigorifera.
- Calcolare l’UPS sui watt dei server e dimenticare gli impianti.

### Approfondire

- [Data center](https://it.wikipedia.org/wiki/Data_center)
- [Efficienza energetica](https://it.wikipedia.org/wiki/Efficienza_energetica)

## Rame, fibra e dove passa il cavo

**Prove:** seconda prova gruppo 1, orale
**Tag:** fibra, rame, cablaggio
**Semaforo:** giallo

### Inquadramento

La domanda chiede il mezzo giusto per la tratta, non una preferenza. Si distinguono le distanze, il disturbo e il punto unico costituito da un percorso solo.

### Definizione

Il rame, nelle reti locali, porta il segnale elettrico su doppini, per distanze dell’ordine dei cento metri a un gigabit e oltre, secondo la categoria del cavo. La fibra porta luce, su distanze molto maggiori, immune ai disturbi elettrici, e collega armadi, piani e edifici.

### Nel dettaglio

Dentro il rack e verso l’armadio di piano il rame basta, costa poco e si attesta in campo. Oltre il centinaio di metri, o fra edifici, la fibra è la scelta: il rame non regge la distanza e raccoglie i disturbi delle linee elettriche se ci cammina accanto. Fibra e cavi di energia si tengono separati. La fibra multimodale copre i collegamenti di campus. La monomodale copre le distanze lunghe. In un tema basta dire fibra fra gli edifici e rame in ufficio, e nominare la categoria solo se si è sicuri.

Il percorso è un componente. Due fibre nello stesso cavidotto sono un solo percorso il giorno in cui un lavoro le taglia. La ridondanza chiede un secondo percorso che entri da un altro lato dell’edificio. Costa e si giustifica per il collegamento da cui dipende la sede. Un’etichetta a ogni estremità, con la porta di partenza e di arrivo, è la differenza fra un incidente di mezz’ora e uno di un pomeriggio: senza etichetta nessuno stacca il cavo giusto.

La portata si dice in gigabit e in quanti flussi servono. Un collegamento a un gigabit verso un’altra sede, su cui passano i desktop virtuali di quaranta persone, può essere il collo, anche se «la fibra c’è». Si misura l’uso prima di promettere un servizio nuovo su quel filo.

### Esempio

L’ufficio al terzo piano è a meno di cento metri dall’armadio: rame. L’archivio nell’altro edificio, a quattrocento metri, passa su fibra, con un secondo percorso sul lato opposto del cortile. I cavi sono etichettati alle due estremità.

### In sede di prova

Rame in sede breve, fibra fra edifici e per la distanza, percorso doppio per il collegamento vitale, etichette. Una frase sulla portata misurata.

### Errori da evitare

- Portare il rame per centinaia di metri perché «è già comprato».
- Chiamare ridondanti due fibre nello stesso scavo.
- Dare per veloce un collegamento senza sapere quanti gigabit ha.

### Approfondire

- [Fibra ottica](https://it.wikipedia.org/wiki/Fibra_ottica)
- [Cavo di rete](https://it.wikipedia.org/wiki/Cavo_di_rete)

## Storage a oggetti, file e blocchi

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** object storage, blocchi, file
**Semaforo:** giallo

### Inquadramento

La domanda chiede dove mettere un dato secondo il modo in cui lo si legge. Si distinguono tre forme e si assegna ciascuna a un uso dell’ente, senza innamorarsi di una.

### Definizione

Lo storage a blocchi presenta dischi. Il sistema operativo ci mette un filesystem o il database ci scrive direttamente. Lo storage a file presenta cartelle, in rete. Lo storage a oggetti presenta contenitori di oggetti, ciascuno con un nome e metadati, raggiunti da un’API, senza una cartella vera e senza una modifica parziale comoda.

### Nel dettaglio

Il database vuole i blocchi: controlla da sé la disposizione e le scritture. Un disco di rete a file sotto un database è una scelta da giustificare, spesso da evitare. I documenti di ufficio, aperti e salvati dalle persone, vivono bene su file, con i permessi delle cartelle. Gli oggetti vanno bene per i file che si scrivono interi e si leggono interi: allegati, copie di backup, immagini, registri chiusi. Non si apre un oggetto per cambiarne un pezzo. Si scrive un oggetto nuovo.

L’oggetto porta con sé durabilità e costo diversi. Si può chiedere che sia replicato, o che una versione non si possa cancellare per un periodo. È il posto naturale di una copia immutabile. Non è il posto della riga che cambia ogni minuto: non ci sono transazioni. Un’applicazione che tiene lo stato del ticket in un oggetto, e lo riscrive tutto a ogni click, perde il beneficio del database e ne inventa uno peggiore.

I nomi e i permessi sono la sicurezza. Un contenitore pubblico per errore rende pubblici gli allegati. Il permesso sta sul servizio, e l’applicazione usa un’identità che può leggere solo il contenitore del proprio servizio. Il collegamento diretto consegnato al browser, a scadenza breve, evita di far passare file grandi dal nodo applicativo, e scade.

### Esempio

I ticket e gli stati stanno nel DBMS, a blocchi. Gli allegati stanno a oggetti, con un contenitore non pubblico e un collegamento a scadenza per il download. Le bozze di ufficio che le persone si scambiano restano sul file server. Tre dati, tre forme.

### In sede di prova

Assegnare ciascun dato del tema alla forma, con il motivo: transazioni, modifica parziale, immutabilità. Dire chi può leggere il contenitore.

### Errori da evitare

- Mettere il database su un file share perché era più semplice da montare.
- Tenere lo stato modificabile frequente negli oggetti.
- Lasciare un contenitore di allegati leggibile da chiunque abbia l’indirizzo.

### Approfondire

- [Object storage](https://it.wikipedia.org/wiki/Object_storage)
- [Storage](https://it.wikipedia.org/wiki/Storage)

## Operazioni al secondo, e perché il terabyte non misura la velocità

**Prove:** seconda prova gruppo 1, orale
**Tag:** IOPS, latenza, SSD
**Semaforo:** verde

### Inquadramento

È la domanda sul disco «grande» che resta lento. Si distingue la capacità dalle operazioni, e si sceglie il supporto secondo il tipo di lettura.

### Definizione

La capacità è quanti byte stanno sul supporto. Le operazioni al secondo sono quante letture o scritture piccole e casuali il supporto compie in un secondo. La latenza è quanto aspetta la singola operazione. Un carico di database è fatto di operazioni piccole e sparse. Un carico di backup è fatto di letture lunghe e sequenziali.

### Nel dettaglio

Un disco magnetico esegue nell’ordine del centinaio di operazioni casuali al secondo, perché una testina si sposta. In sequenza legge molto, centinaia di megabyte al secondo. Un disco a stato solido fa decine o centinaia di migliaia di operazioni casuali, e la latenza scende dai millisecondi alle decine di microsecondi. Per un database di sportello, il magnetico si satura di operazioni quando è ancora vuoto di byte. Aggiungere terabyte magnetici non cambia il numero di pratiche aperte al secondo.

Si dimensiona sul carico. Se ogni richiesta dell’utente provoca venti operazioni e si vogliono cento richieste al secondo, servono duemila operazioni al secondo, più il margine, più le scritture dei registri. Un gruppo di dischi magnetici non ci arriva. Un gruppo di dischi a stato solido sì. Il backup notturno, sequenziale, può invece stare su magnetico o su nastro: lì conta la banda e il costo del byte, non l’operazione casuale.

La coda rivela il collo. Se le operazioni aspettano in coda e la latenza cresce mentre la CPU del database è libera, il collo è il disco. Un indice mancante produce lo stesso sintomo, perché trasforma una ricerca in tante letture. Prima si guarda se la query legge più del dovuto, poi si cambia supporto. Cambiare supporto sotto una query che legge un milione di righe per niente è costoso e inutile.

### Esempio

Il database sta su quattro magnetici da quattro terabyte, pieni al venti per cento, e lo sportello è lento. Le operazioni casuali sono al limite. Si sposta il database su stato solido e si tiene il magnetico per le copie sequenziali. La capacità cala, la velocità sale, ed era quello che mancava.

### In sede di prova

Capacità, operazioni, latenza. Magnetico per la sequenza, stato solido per il casuale. Un conto tondo di operazioni per la propria applicazione.

### Errori da evitare

- Scegliere il disco solo dai terabyte.
- Mettere il backup e il database sullo stesso tipo di disco per simmetria.
- Cambiare dischi prima di aver guardato se la query legge troppo.

### Approfondire

- [Disco a stato solido](https://it.wikipedia.org/wiki/Unit%C3%A0_a_stato_solido)
- [Disco rigido](https://it.wikipedia.org/wiki/Disco_rigido)

## Copie immutabili e supporto staccato

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** immutabile, air gap, ransomware
**Semaforo:** verde

### Inquadramento

La domanda nasce dal ransomware che cifra anche il backup. Si spiega quale copia l’attaccante, entrato con le credenziali del server, non riesce a riscrivere.

### Definizione

Una copia immutabile non si può modificare né cancellare prima di una scadenza, nemmeno da chi amministra il sistema di origine. Una copia staccata, o air gap, non è raggiungibile in rete dal sistema di produzione per la maggior parte del tempo. Entrambe sopravvivono a una cancellazione logica che colpisce le copie in linea.

### Nel dettaglio

Il backup su una cartella di rete sempre montata e scrivibile è una seconda copia dello stesso incidente: il malware cifra i dati e poi cifra la cartella, oppure l’amministratore colpito lancia la cancellazione. L’immutabilità toglie la cancellazione per un periodo, per esempio trenta giorni. Anche un’identità rubata, se non è l’identità che gestisce la politica di immutabilità, non accorcia quel periodo. Le due identità devono essere diverse, e la seconda custodita meglio, con un secondo fattore e senza uso quotidiano.

Lo stacco è più ruvido e più chiaro. Il nastro esce dalla libreria e va in un altro luogo. Il disco di copia si collega solo nella finestra di backup e poi si smonta. Per il resto del giorno, dal server compromesso, quella copia non ha un indirizzo. Il prezzo è il tempo di ripristino: bisogna recuperare il supporto, e l’RTO deve contenerlo. Una copia immutabile in rete si ripristina prima. Una copia staccata regge anche il caso in cui l’intero dominio di identità è caduto.

Si tengono generazioni. L’immutabilità di sette giorni non basta se l’intrusione è stata scoperta al decimo. Si concilia con l’RPO: la copia di stanotte può già contenere il malware dormiente. Servono generazioni abbastanza indietro da precedere l’ingresso, e un modo per saperlo, cioè i registri. Poi si prova il ripristino da quella copia, su un sistema isolato, perché ripristinare nella rete ancora compromessa reinfetta.

### Esempio

Completo settimanale immutabile per quaranta giorni, incrementali quotidiani immutabili per quattordici, una copia su nastro fuori sede una volta al mese. L’identità che scrive non può togliere l’immutabilità. Una volta al trimestre si ripristina il completo del mese prima su una rete di prova.

### In sede di prova

Dire perché la cartella sempre scrivibile non è una difesa. Distinguere immutabile e staccato. Legare le generazioni al tempo in cui un’intrusione può restare nascosta.

### Errori da evitare

- Chiamare sicuro un backup che l’utente del server può cancellare.
- Tenere una sola generazione, della notte in cui il danno c’era già.
- Ripristinare nella stessa rete senza averla pulita.

### Approfondire

- [Ransomware](https://it.wikipedia.org/wiki/Ransomware)
- [Backup](https://it.wikipedia.org/wiki/Backup)

## Prova di ripristino: che cosa si cronometra

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** restore, RTO, prova
**Semaforo:** verde

### Inquadramento

La domanda distingue un backup che il software segna come riuscito da un ripristino che torna a funzionare. Si descrive una prova vera, con il cronometro e con un esito da far vedere a un ufficio.

### Definizione

La prova di ripristino rimette i dati e il servizio su un sistema, a partire dalle copie, e misura il tempo e la completezza. Un backup non provato è una supposizione. La prova è l’unica misura dell’RTO.

### Nel dettaglio

Si provano due cose diverse, a ritmi diversi. Spesso, il ripristino di un file o di una riga, perché è il caso dell’errore umano del martedì. A intervallo più lungo, il ripristino dell’intero servizio su macchine che non sono la produzione, perché è il caso dell’incendio e del ransomware. La seconda prova è quella che rivela i buchi: manca la copia di una configurazione, la procedura è sulla macchina spenta, un certificato non è nella copia, nessuno ricorda la password del deposito delle chiavi.

Il cronometro parte da quando si decide di ripristinare, non da quando il software comincia a copiare. Include trovare la copia giusta, portarla, attendere i terabyte, riconfigurare, avviare, verificare con l’ufficio che i numeri tornino. Un ripristino tecnico in due ore e una verifica mai fatta possono diventare una giornata. L’RTO dichiarato si confronta con questo totale. Se non ci sta, si cambia la copia, il mezzo, o il numero promesso.

Si scrive il risultato. Data, copia usata, tempo, che cosa non ha funzionato, chi verifica i dati. Una prova senza difetti scritti è sospetta, oppure è stata troppo piccola. Il difetto trovato è il valore della prova: diventa una modifica del piano, non una nota a verbale.

### Esempio

Si ripristina il portale su una rete isolata a partire dal completo di domenica e dagli incrementali fino a mercoledì. La copia dei file ci mette tre ore. Manca la configurazione del proxy, che non era nel backup. Tempo totale, cinque ore, contro un RTO di quattro. Si include la configurazione nella copia e si rimisura il trimestre dopo.

### In sede di prova

Due ritmi di prova, cronometro dalla decisione alla verifica dell’ufficio, difetti scritti, RTO confrontato con il misurato.

### Errori da evitare

- Accontentarsi della spunta verde del software di backup.
- Provare solo il file singolo e credere di aver provato il disastro.
- Tenere la procedura di ripristino esclusivamente sul sistema da ripristinare.

### Approfondire

- [Backup](https://it.wikipedia.org/wiki/Backup)
- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)

## Housing, hosting e che cosa resta all’ente

**Prove:** seconda prova gruppo 1, orale
**Tag:** housing, hosting, perimetro
**Semaforo:** giallo

### Inquadramento

La domanda serve quando l’ente non ha una sala vera. Si distingue chi mette il ferro, chi lo conduce, e quale responsabilità non si trasferisce con il contratto.

### Definizione

L’housing è spazio, energia e rete in un data center altrui, dove l’ente mette macchine proprie e le amministra. L’hosting è un servizio in cui anche le macchine, o il software, sono del fornitore e l’ente amministra solo la propria applicazione o solo i dati. In entrambi i casi il dato e le decisioni sul dato restano dell’ente.

### Nel dettaglio

Nell’housing l’ente si porta dietro il sistema operativo, le patch, il backup, il monitoraggio applicativo. Il fornitore garantisce energia, raffreddamento, accesso fisico, spesso la connettività. Il contratto deve dire il livello della sala, le finestre, come si entra di notte, e i tempi di intervento sul filo e sull’energia. Un housing in una sala ben fatta non ripara un sistema operativo non aggiornato: quella patch è ancora dell’ente.

Nell’hosting il confine si sposta in su. Se il fornitore gestisce il sistema e l’ente ci mette l’applicazione, siamo vicini a un servizio gestito. Le patch di sistema sono sue. Le patch dell’applicazione, i permessi e i backup dei dati vanno letti nel contratto una riga alla volta, perché il default è che il dato sia un problema del cliente. Si prova il ripristino comunque.

Ciò che non si delega: quali dati si mettono lì, la base giuridica, gli accessi delle persone dell’ente, la decisione di spegnere il servizio, la prova che si riesce a uscire portandosi via i dati. Un housing economico con un’uscita di rete unica resta un punto unico, e si chiede il secondo percorso se il servizio lo richiede. Si visita, o si legge un rapporto di audit, invece di fidarsi dell’aggettivo «certificato» senza il livello.

### Esempio

L’ente chiude lo stanzino e mette due nodi in housing presso una sala con percorsi elettrici doppi. Le macchine restano sue, le patch anche, il backup pure, copiato verso un secondo luogo. Il fornitore risponde di energia e di accesso fisico, con un tempo di intervento scritto.

### In sede di prova

Definire i due confini, elencare che cosa resta all’ente, citare uscita dei dati e prova di ripristino. Non chiamare cloud un armadio affittato, se è housing.

### Errori da evitare

- Credere che in housing le patch le faccia il fornitore della sala.
- Omettere dal contratto l’accesso di notte e il secondo percorso di rete.
- Non provare l’export dei dati prima di averne bisogno.

### Approfondire

- [Data center](https://it.wikipedia.org/wiki/Data_center)
- [Housing](https://it.wikipedia.org/wiki/Housing)

## Cancellare i dati da un disco che esce dall’ente

**Prove:** seconda prova gruppo 1, orale
**Tag:** cancellazione, smaltimento, dischi
**Semaforo:** giallo

### Inquadramento

La domanda chiude la vita della macchina. Si distingue buttare un file, formattare, e rendere illeggibile il supporto, e si sceglie secondo il dato che c’era sopra.

### Definizione

Cancellare un file toglie il riferimento e lascia i byte finché non vengono sovrascritti. Formattare rifà la struttura e, nella forma veloce, non rilegge nemmeno i dati. Rendere illeggibile il supporto significa sovrascrivere in modo controllato, cifrare e distruggere la chiave, o distruggere fisicamente il disco.

### Nel dettaglio

Un disco di un database, anche guasto, contiene pratiche. Mandarlo in assistenza con la garanzia, senza un accordo sulla distruzione, è far uscire i dati. La cifratura del disco fatta da vivo risolve il caso se la chiave non è sul disco: il disco guasto, senza chiave, è illeggibile e si può spedire. Se non era cifrato, serve la distruzione, e si tiene il verbale. Per un disco a stato solido la sovrascrittura semplice non raggiunge tutte le celle, che il controller sposta: si usa il comando di cancellazione sicura del supporto, o la distruzione, o la cifra preventiva.

L’inventario deve sapere quali dischi hanno contenuto dati e quali solo il sistema operativo reinstallabile. Trattarli tutti con distruzione è lecito e semplice. Trattarli tutti con una format veloce non è lecito per quelli con i dati. Le copie fanno lo stesso percorso: un nastro scartato, un disco di backup sostituito, la macchina virtuale esportata su un USB dimenticato.

Si registra. Numero di serie, data, metodo, chi ha eseguito. In un’ispezione la domanda non è «cancellate?» ma «come, e dov’è il verbale del disco di marzo». Senza registro la procedura è una intenzione.

### Esempio

I nodi hanno i dischi cifrati. Al guasto si sfila il disco, la chiave resta nel deposito dell’ente, il disco va in distruzione documentata anche se è illeggibile, per non dover spiegare l’eccezione. Il verbale sta con l’inventario.

### In sede di prova

Tre livelli: cancellare il file, formattare, rendere illeggibile. La cifra preventiva come misura, il verbale come prova. I dischi a stato solido non si fidano della sovrascrittura domestica.

### Errori da evitare

- Formattare veloce e rivendere la macchina.
- Spedire un disco non cifrato in garanzia senza condizioni.
- Dimenticare nastri, USB e vecchie copie nello stesso processo.

### Approfondire

- [Cancellazione dei dati](https://it.wikipedia.org/wiki/Cancellazione_dei_dati)
- [Cifratura](https://it.wikipedia.org/wiki/Crittografia)

## Orologio unico e perché i registri devono coincidere

**Prove:** seconda prova gruppo 1, orale
**Tag:** NTP, orario, registri
**Semaforo:** giallo

### Inquadramento

È una domanda piccola che regge l’incidente e la marca. Si spiega da dove arriva l’ora e che cosa si rompe se ogni macchina ha la sua.

### Definizione

Un servizio di tempo, in rete locale di solito NTP, distribuisce l’ora da sorgenti note ai nodi. I registri di sistemi diversi si possono mettere in fila solo se l’ora è la stessa, entro una tolleranza piccola.

### Nel dettaglio

Un nodo avanti di quattro minuti e un proxy indietro di due rendono impossibile dire se la richiesta è arrivata prima o dopo l’errore. Nell’incidente si perde l’ordine. Nei certificati, un nodo con l’ora ferma al mese scorso rifiuta certificati validi o ne accetta di scaduti. Nella marca temporale il discorso è un altro: l’ora del server non è opponibile, la marca di un certificatore sì. Non si confondono. L’orologio unico serve all’esercizio. La marca serve al diritto.

Si prendono almeno due sorgenti, o una sorgente interna a sua volta agganciata a riferimenti esterni ridondati, e i nodi parlano con il servizio interno, non ciascuno con un server pubblico a caso. Parlare a caso divide l’ente in fusi leggermente diversi e apre uscite di rete inutili. L’offset si sorveglia. Un nodo che deriva di secondi al giorno ha la batteria dell’orologio morta o un carico che lo disturba, e va visto prima che derivi di minuti.

Il fuso e l’ora legale si impostano una volta, in modo uguale. Registri in UTC e interfaccia in ora locale sono una scelta pulita, da dichiarare, così nessuno somma un’ora a mano durante l’incidente. Cambiare fuso a metà dell’esercizio di un sistema già in produzione sposta le scadenze.

### Esempio

Dopo un disservizio, il proxy e l’applicazione non si accordano su chi ha chiuso per primo la connessione. Gli orologi differiscono di sei minuti. Si mette un NTP interno, si allineano i nodi, si riscrive la procedura di incidente: prima si verifica l’offset, poi si leggono i registri.

### In sede di prova

A che serve l’ora comune, da dove arriva, chi non deve andare a prendersela da solo su Internet, differenza fra orologio di esercizio e marca temporale.

### Errori da evitare

- Lasciare ogni macchina sull’orologio hardware.
- Usare l’ora del server come prova giuridica di una scadenza.
- Confrontare registri senza aver controllato l’offset.

### Approfondire

- [Network Time Protocol](https://it.wikipedia.org/wiki/Network_Time_Protocol)
- [Marca temporale](https://it.wikipedia.org/wiki/Marca_temporale)

## Rete di gestione separata dalla rete dei dati

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** out of band, gestione, iLO
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si amministra una macchina che non risponde sulla rete degli utenti. Si descrive una via di gestione distinta, e chi può usarla.

### Definizione

La gestione fuori banda raggiunge il nodo per una interfaccia propria, con alimentazione e rete dedicate, anche quando il sistema operativo del nodo è fermo. La rete di gestione è la rete a cui quelle interfacce, gli switch e gli UPS sono collegati, e non è la rete su cui passano i servizi.

### Nel dettaglio

Se l’unica via di amministrazione è la stessa rete del servizio, un errore di configurazione della rete toglie il servizio e toglie anche il modo di ripararlo. Si va in sala con una tastiera. La porta di gestione del server, quella del controller di scheda, resta accesa con il sistema spento e permette di vedere la console, riavviare, montare un’immagine. Sta su una rete diversa, con indirizzi diversi, e ci arrivano poche postazioni, con un’identità nominativa e un secondo fattore.

Quella rete è preziosa e fragile. Chi entra sulla gestione può spegnere macchine, leggere console, cambiare firmware. Non si mette sulla VLAN degli uffici. Non si pubblica su Internet «per comodità del fornitore». Il fornitore, se deve entrare, entra per un varco temporaneo, registrato, a scadenza. Le parole d’ordine di fabbrica delle porte di gestione si cambiano il giorno dell’installazione: sono note e scritte nei manuali.

Anche gli apparati di rete e l’UPS hanno una porta di gestione, e finiscono sulla stessa rete controllata. Un UPS raggiungibile da ogni postazione è un interruttore generale in mano a tutti. Si registrano gli accessi. Una modifica di firmware passa da qui e segue la regola dei cambiamenti: finestra, prova, ritorno.

### Esempio

Il nodo non risponde. Dalla postazione di gestione si apre la console, si vede il kernel fermo, si riavvia. Non si è attraversata la rete degli utenti, che infatti era il pezzo rotto. L’accesso resta nel registro della porta di gestione.

### In sede di prova

Via separata, funziona a sistema fermo, poche persone, password non di fabbrica, niente esposizione a Internet. Dire che cosa si riesce a fare: console e riavvio.

### Errori da evitare

- Amministrare solo dalla rete del servizio.
- Lasciare le password di fabbrica sulle porte di gestione.
- Pubblicare la gestione per evitare un viaggio in sala.

### Approfondire

- [Gestione fuori banda](https://it.wikipedia.org/wiki/Out-of-band_management)
- [Server](https://it.wikipedia.org/wiki/Server)

## Immagine standard e deriva delle configurazioni

**Prove:** seconda prova gruppo 1, orale
**Tag:** immagine, configurazione, deriva
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché due server «uguali» non si comportano uguale. Si contrappone l’installazione a mano ripetuta all’immagine, e si dice come si scopre la deriva.

### Definizione

Un’immagine standard è un sistema preparato una volta, con le scelte dell’ente, da cui si generano i nodi. La deriva è l’allontanarsi nel tempo di un nodo da quella base, per modifiche fatte a mano e non riportate nella base.

### Nel dettaglio

Installare venti nodi a mano produce venti varianti. Una patch applicata su diciannove, un file di configurazione diverso sul ventesimo, un servizio inutile lasciato acceso su tre. Il giorno dell’incidente il nodo colpito è proprio quello diverso, e la procedura non torna. L’immagine chiude la variante: si aggiorna l’immagine, si genera un nodo nuovo, si spegne il vecchio. Il nodo non si cura all’infinito. Si sostituisce.

La deriva rientra dalla porta di servizio. Una correzione urgente, fatta sul nodo vivo e non riportata nell’immagine, funziona oggi e sparisce al prossimo rifacimento, oppure resta solo su quel nodo. La regola è: la correzione entra nella definizione dell’immagine lo stesso giorno, anche se il nodo vivo è stato già toccato. Meglio, la correzione si fa solo nella definizione e si ridistribuisce. Le configurazioni che cambiano fra i nodi, nome e indirizzo, stanno fuori dall’immagine, in un inventario.

Si verifica. Un confronto periodico fra ciò che è dichiarato e ciò che gira segnala il servizio acceso in più e il file diverso. Senza confronto, l’immagine è una buona intenzione di sei mesi prima. Il primo nodo su cui si prova l’immagine nuova non è quello dello sportello nell’ora di punta.

### Esempio

Tutti i nodi applicativi nascono dalla stessa immagine, con il linguaggio e l’agente di monitoraggio già dentro. La correzione di una libreria entra nell’immagine e si sostituiscono i nodi uno alla volta, togliendoli dal bilanciatore. Nessuno si collega in console a «sistemare solo questo».

### In sede di prova

Perché la mano produce varianti, come si sostituisce invece di curare, dove sta la correzione urgente, come si scopre la deriva.

### Errori da evitare

- Installare a mano «tanto i nodi sono pochi».
- Correggere sul vivo e dimenticare l’immagine.
- Mettere nell’immagine i segreti e gli indirizzi del singolo nodo.

### Approfondire

- [Gestione della configurazione](https://it.wikipedia.org/wiki/Gestione_della_configurazione)
- [System image](https://it.wikipedia.org/wiki/Immagine_di_sistema)

## Cache applicativa: che cosa accelera e che cosa non va conservato

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** cache, invalidazione, coerenza
**Semaforo:** giallo

### Inquadramento

La domanda chiede di accelerare senza servire un dato vecchio o un dato di un altro utente. Si sceglie che cosa può stare in cache e per quanto, e si dice chi la invalida.

### Definizione

Una cache tiene una copia di un risultato già calcolato, più vicina a chi lo chiede, per non rifare il lavoro. È corretta finché il risultato originale non cambia, o finché si accetta un ritardo dichiarato. Invalidare significa togliere la copia quando l’originale cambia.

### Nel dettaglio

Si mette in cache ciò che è uguale per molti e cambia poco: un elenco di uffici, una pagina pubblica, un documento chiuso. Non si mette in cache ciò che è personale o che cambia a ogni operazione: la coda dei miei ticket, il permesso, la pagina appena aggiornata. Una cache condivisa che conserva una pagina con i dati di un utente e la serve a un altro è una perdita di riservatezza, ed è un difetto grave nato da un’ottimizzazione. La chiave della cache deve contenere ciò che distingue i risultati. Se due utenti vedono elenchi diversi, la chiave include l’utente, oppure quella pagina non si condivide.

Il tempo di vita è il ritardo che si ammette. Un minuto su un elenco pubblico può andare. Zero su un permesso. All’invalidazione esplicita, a ogni modifica si toglie la copia, è più precisa e va scritta: chi modifica il documento invalida quella chiave. Dimenticare l’invalidazione è il difetto tipico: si corregge il dato e gli utenti vedono il vecchio fino alla scadenza, e nel frattempo qualcuno decide sul vecchio.

La cache sta in memoria, spesso in un deposito condiviso se i nodi sono più d’uno, così non divergono. Non è un database. Si può perdere e si ricostruisce. Non ci si mette l’unica copia di nulla. Aggiungere una cache davanti a una query senza indice sposta il problema di un minuto e lo nasconde. Prima la query, poi, se il costo resta e il dato lo consente, la cache.

### Esempio

L’elenco degli uffici sta in cache per un’ora e si invalida quando un ufficio cambia. La pagina del ticket non sta in cache condivisa. Il permesso si rilegge a ogni richiesta. Un nodo nuovo, a cache vuota, risponde solo più piano, non in modo sbagliato.

### In sede di prova

Che cosa entra, per quanto, quale chiave, chi invalida. La frase sulla riservatezza: mai una pagina personale in una cache condivisa senza identità nella chiave.

### Errori da evitare

- Mettere in cache le pagine private per «alleggerire il database».
- Dimenticare l’invalidazione dopo la modifica.
- Trattare la cache come archivio.

### Approfondire

- [Cache](https://it.wikipedia.org/wiki/Cache)
- [Coerenza dei dati](https://it.wikipedia.org/wiki/Coerenza_(informatica))

## Monitorare i nodi prima che l'ufficio telefoni

**Prove:** seconda prova gruppo 1, orale
**Tag:** monitoraggio, soglie, allarmi
**Semaforo:** verde

### Inquadramento

La domanda chiede come ci si accorge del guasto. Si descrive che cosa si misura, chi riceve l'allarme, e quale allarme si è disposti a seguire di notte.

### Definizione

Il monitoraggio raccoglie misure e registri dai sistemi e avvisa quando una misura supera una soglia o un servizio smette di rispondere. Serve a intervenire prima, o almeno non dopo, la telefonata dell'ufficio.

### Nel dettaglio

Si misurano poche cose, le stesse per ogni nodo: CPU, RAM, swap, spazio disco, errori dei dischi, raggiungibilità del servizio, tempo di risposta di una pagina vera e non solo della macchina accesa. Una sonda che chiede solo se il sistema operativo risponde tiene per sano un'applicazione bloccata. La sonda chiede una funzione, per esempio l'apertura dell'elenco, e fallisce se la risposta non arriva entro un tempo.

Le soglie hanno due livelli. L'avviso lascia il tempo di agire di giorno: disco all'ottanta per cento, certificato che scade fra venti giorni, batteria dell'UPS sotto una curva. L'allarme è ciò che interrompe il servizio ora: nodo irraggiungibile, disco pieno, temperatura. Se tutto è allarme, nessuno legge. Si scrivono i destinatari. Un allarme verso una casella che non guarda nessuno è un registro. Di notte si chiama una persona per gli allarmi, non per gli avvisi.

Si tiene la storia. Il disco che cresce di un gigabyte al giorno si vede dal grafico della settimana, non dal valore di questa mattina. Senza storia si scopre il pieno il giorno del pieno. Il monitoraggio sta su un sistema diverso da quello monitorato, altrimenti muore insieme a lui e non avvisa.

### Esempio

Il disco dei registri cresce. L'avviso all'ottanta per cento arriva di martedì. Si accorcia la ritenzione dei registri di debug e si alza il disco. L'ufficio non si è fermato. La sonda sull'applicazione, distinta da quella sulla macchina, è quella che fa scattare la chiamata.

### In sede di prova

Misure poche e uguali, sonda sulla funzione, due livelli di soglia, un destinatario, storia, monitoraggio fuori dal sistema monitorato.

### Errori da evitare

- Sondare solo il ping e credere di misurare il servizio.
- Mandare cento allarmi al giorno, così si ignorano tutti.
- Tenere il monitoraggio sulla stessa macchina che deve avvisare di essere morta.

### Approfondire

- [Monitoraggio di sistema](https://it.wikipedia.org/wiki/Monitoraggio_(informatica))
- [Log](https://it.wikipedia.org/wiki/Log)

## Come si dimensiona un servizio prima di comprarlo

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** capacità, dimensionamento, picco
**Semaforo:** verde

### Inquadramento

È la domanda che trasforma «un server adeguato» in un conto. Si parte dagli utenti contemporanei e si arriva a RAM, operazioni disco e banda, con un margine.

### Definizione

Il dimensionamento stima le risorse necessarie a reggere il carico previsto, picco compreso, per un periodo. Il picco conta più della media. Il margine copre la crescita e la misura sbagliata.

### Nel dettaglio

Si stimano gli utenti contemporanei, non gli utenti totali. Trecento dipendenti di cui quaranta lavorano insieme sono quaranta sessioni, più un margine. Per ciascuna sessione si stima la RAM del processo e quante richieste al minuto. Da lì la RAM del nodo e il numero di nodi. Le operazioni disco si stimano dalle query per richiesta. La banda si stima dalla dimensione delle pagine e degli allegati, non dal numero di persone: dieci persone che scaricano verbali pesano più di cento che leggono un elenco.

Si dimensiona sull'ora di punta e sul giorno di punta, la chiusura del mese, una seduta. La media annuale sottostima quel giorno e il sistema cade proprio allora. Si scrive l'ipotesi. «Quaranta concorrenti, due richieste al secondo di picco, pagina da duecento kilobyte»: chi legge può dire se l'ipotesi è falsa. Un numero senza ipotesi non si discute.

La crescita si dichiara. Se fra un anno gli utenti raddoppiano, il disegno deve poter aggiungere un nodo, non richiedere di rifare la sala. Il margine del trenta per cento sulla RAM è ragionevole. Il margine del triplo su tutto è un acquisto che non si sa spiegare. Dopo tre mesi di esercizio si confronta la stima con la misura e si corregge il metodo, non solo il nodo.

### Esempio

Picco di cinquanta persone, ciascuna con una sessione da duecento megabyte nel caso peggiore del processo, sono dieci gigabyte, più sistema e cache, quindi sedici, su due nodi da sedici così uno solo regge il picco se l'altro è fermo. Il database si dimensiona sulle operazioni misurate in prova, non sulla RAM dei nodi.

### In sede di prova

Utenti contemporanei, picco, ipotesi scritte, RAM, disco, banda, margine, come si cresce. Un conto tondo che torna.

### Errori da evitare

- Dimensionare sui dipendenti totali come se lavorassero tutti nello stesso minuto.
- Usare la media e ignorare il giorno di punta.
- Dare numeri senza scrivere l'ipotesi da cui vengono.

### Approfondire

- [Capacity planning](https://it.wikipedia.org/wiki/Capacity_planning)
- [Scalabilità](https://it.wikipedia.org/wiki/Scalabilit%C3%A0)

## Iperconvergenza: calcolo e dischi negli stessi nodi

**Prove:** seconda prova gruppo 1, orale
**Tag:** iperconvergenza, storage, nodi
**Semaforo:** giallo

### Inquadramento

La domanda chiede che cosa cambia se i dischi condivisi spariscono come apparato a sé e stanno dentro i nodi di calcolo. Si dicono il beneficio e il vincolo di crescere a blocchi.

### Definizione

Un sistema iperconvergente riunisce calcolo, rete e storage software negli stessi nodi. I dischi locali dei nodi formano un pool distribuito. Si aggiunge capacità aggiungendo un nodo, che porta insieme CPU, RAM e dischi.

### Nel dettaglio

Il beneficio è operativo. Un solo tipo di mattonella da gestire, niente rete di storage separata da specialisti scarsi, e un nodo in più allunga tutto. Per un ente con una sala piccola e poche persone, togliere un apparato specialistico è un argomento serio. Il cluster tollera la perdita di un nodo se i dati sono replicati su almeno un altro, e questa replica va dichiarata: occupa capacità. Tre copie del dato significano che un terzo dei dischi tiene dati utili.

Il vincolo è l'accoppiamento. Serve più disco e non più CPU: si compra lo stesso un nodo intero, oppure il prodotto permette di aggiungere dischi, e va chiesto. Un nodo solo non è iperconvergenza, è un server. Il minimo per reggere un guasto è tre nodi, spesso, per avere quorum e una replica. Sotto quel numero si torna a un disco condiviso classico, più semplice da spiegare.

Le prestazioni dipendono dalla rete fra i nodi, perché il dato può stare su un nodo diverso da quello che calcola. Quella rete si dimensiona e si ridonda. Un backup resta necessario: la replica interna protegge dal nodo morto e replica anche la cancellazione. Si esporta una copia fuori dal cluster.

### Esempio

Tre nodi uguali, dati replicati due volte, un nodo può fermarsi. La rete fra loro è dedicata e doppia. Il backup notturno esce dal cluster verso un deposito immutabile. Aggiungere capacità vuol dire un quarto nodo, non un disco solo.

### In sede di prova

Definire il mattone, il minimo di nodi, il costo della replica in capacità, la rete interna, il backup fuori. Dire per chi ha senso: gruppi piccoli che non vogliono un apparato storage a parte.

### Errori da evitare

- Credere che l'iperconvergenza sostituisca il backup.
- Partire con due nodi e chiamarlo cluster tollerante.
- Ignorare la rete fra i nodi come se i dischi fossero locali per davvero.

### Approfondire

- [Iperconvergenza](https://it.wikipedia.org/wiki/Iperconvergenza)
- [Storage](https://it.wikipedia.org/wiki/Storage)

## Rack, densità e perché lo spazio non è il limite

**Prove:** seconda prova gruppo 1, orale
**Tag:** rack, densità, alimentazione
**Semaforo:** giallo

### Inquadramento

La domanda guarda l'armadio come un limite elettrico e termico, non come uno scaffale. Si dice che cosa si esaurisce prima, fra lo spazio in unità, i watt e il freddo.

### Definizione

Il rack è l'armadio standard che ospita i nodi, misurato in unità. La densità è quanta informatica si mette in un rack. Il limite pratico è la potenza che si può alimentare e raffreddare, spesso prima del posto fisico.

### Nel dettaglio

Un rack ha quarantadue unità, e sembra poter ospitare quaranta server piatti. Se ciascuno assorbe cinquecento watt, sono venti kilowatt, e molti rack di sala sono cablati e raffreddati per cinque o dieci. Si riempie a metà e l'altra metà resta vuota di proposito. Riempirlo perché «c'è posto» fa scattare l'interruttore o alza la temperatura della fila. Si scrive il budget di watt del rack accanto al disegno.

La doppia via arriva a due prese diverse, alimentate da quadri diversi, e ogni nodo con due alimentatori ne usa una per parte. Una ciabatta che riunisce le due vie su un solo interruttore annulla la ridondanza dentro l'armadio, nel punto più banale. I cavi si ordinano da un lato, l'aria non si ostruisce con matasse sul fronte. Un nodo messo con il verso sbagliato soffia caldo nel corridoio freddo.

In un tema, il rack si nomina così: quanti nodi, quanti watt, due prese, corridoio. Non si disegnano quaranta macchinette. Si dice anche il peso e il pavimento solo se la sala è vecchia e il pavimento è un vincolo vero.

### Esempio

Dieci nodi da quattrocento watt sono quattro kilowatt, sotto un budget di sei, con margine per un undicesimo e per gli switch. Due PDU, A e B. Metà dei nodi potrebbe sembrare «poco» in quarantadue unità, ed è il pieno elettrico onesto.

### In sede di prova

Unità, watt, raffreddamento, doppia presa. La frase: lo spazio vuoto può essere il margine termico, non uno spreco.

### Errori da evitare

- Riempire il rack perché le unità avanzano.
- Unire le due vie elettriche sulla stessa ciabatta.
- Ostruire il fronte e poi abbassare il condizionatore di tutta la sala.

### Approfondire

- [Rack (informatica)](https://it.wikipedia.org/wiki/Rack_(informatica))
- [Data center](https://it.wikipedia.org/wiki/Data_center)

## Cluster attivo-passivo e attivo-attivo

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** cluster, failover, attivo-attivo
**Semaforo:** verde

### Inquadramento

La domanda chiede se il secondo nodo lavora o aspetta. Si scelgono i due schemi secondo che cosa si sa condividere, e si dice che cosa perde l'utente durante il passaggio.

### Definizione

Nell'attivo-passivo un nodo eroga e l'altro è pronto a prendere il suo posto. Nell'attivo-attivo più nodi erogano insieme e, se uno cade, gli altri assorbono il suo carico. Il passaggio si chiama failover quando è automatico.

### Nel dettaglio

L'attivo-passivo è più semplice da ragionare per ciò che ha stato e non si divide bene, spesso il database. Il passivo riceve la replica e non scrive. Quando il primario muore, il passivo viene promosso e i client devono raggiungere il nuovo indirizzo, tramite un nome che si sposta. C'è un intervallo di secondi o minuti in cui le richieste falliscono, e si dichiara. Le sessioni in memoria sul primario muoiono. Il passivo va provato: un passivo che non parte da mesi non è un passivo, è un acquisto.

L'attivo-attivo sfrutta entrambi e regge il picco con le macchine che comunque si sono comprate. Funziona se qualunque nodo può servire qualunque richiesta, quindi se lo stato non sta nella memoria di uno solo. Il bilanciatore toglie il nodo morto. Il carico che resta deve entrare nei nodi superstiti: se due nodi sono al settanta per cento, la morte di uno porta l'altro oltre il cento. Si tengono a un carico tale che n meno uno basti, e questo è il vero costo dello schema.

Si dice anche il failback, il ritorno. Tornare il traffico sul nodo riparato è un secondo cambiamento, in finestra, non un automatismo lasciato a metà giornata. Due passaggi non provati sono due fermi.

### Esempio

I nodi applicativi sono attivo-attivo dietro il bilanciatore, tenuti al cinquanta per cento. Il database è attivo-passivo con replica sincrona. Cade un nodo applicativo: gli utenti riprovano la richiesta. Cade il primario del database: un minuto di errore, poi il nome punta al secondario promosso.

### In sede di prova

Definire i due schemi, dire quale si usa per l'applicazione e quale per il dato, il buco del passaggio, il carico che n meno uno deve reggere.

### Errori da evitare

- Tenere due nodi al novanta per cento e chiamarli alta disponibilità.
- Dimenticare che le sessioni in RAM non passano da sole.
- Non provare mai la promozione del passivo.

### Approfondire

- [Computer cluster](https://it.wikipedia.org/wiki/Computer_cluster)
- [Failover](https://it.wikipedia.org/wiki/Failover)

## Replica sincrona e asincrona

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** replica, RPO, latenza
**Semaforo:** verde

### Inquadramento

La domanda chiede se la scrittura aspetta la copia lontana. Si lega la scelta all'RPO e al prezzo in latenza, con un caso di distanza.

### Definizione

Nella replica sincrona il primario conferma la scrittura al client solo dopo che il secondario l'ha ricevuta. Nella asincrona conferma subito e spedisce dopo. La sincrona perde zero scritture confermate se il primario muore. L'asincrona perde ciò che era in coda.

### Nel dettaglio

La sincrona rende l'RPO di quel guasto uguale a zero, per le transazioni confermate. Il costo è il viaggio di andata e ritorno verso il secondario, aggiunto a ogni scrittura. Fra due armadi della stessa sala sono frazioni di millisecondo e spesso si accetta. Fra due città sono millisecondi di rete, e un'applicazione che fa molte scritture in serie diventa lenta. Non si mette un secondario sincrono a cinquecento chilometri per abitudine. Si misura.

L'asincrona non aggiunge quel viaggio. La coda può essere di millisecondi o di minuti, secondo il carico e il filo. Quella coda è l'RPO reale, e va misurata, non sperata. Un ritardo che di giorno è un secondo e di notte, durante il backup, è venti minuti, va detto. Se l'RPO promesso è cinque minuti, una coda da venti è una violazione.

Si scrive il guasto che ciascuna regge. Entrambe reggono la morte del primario. Nessuna regge la cancellazione logica, che viene replicata. Nessuna sostituisce il backup. La sincrona non si usa verso un sito che si vuole tenere indietro di ore proprio per avere un punto di ritorno: lì serve una copia ferma, non una replica.

### Esempio

Primario e secondario nella stessa sala, in replica sincrona, per non perdere pratiche confermate. Una terza copia asincrona nell'altra sede, indietro di al più cinque minuti, per la perdita della sala. Il backup immutabile resta, per la cancellazione.

### In sede di prova

Definire che cosa aspetta la conferma, tradurre il ritardo in RPO, dire quando la distanza rende la sincrona troppo lenta, ricordare che la replica non è il backup.

### Errori da evitare

- Dire che la replica sincrona fra due città è sempre trasparente.
- Promettere RPO zero con una replica asincrona.
- Spegnere il backup perché «tanto c'è la replica».

### Approfondire

- [Replica (informatica)](https://it.wikipedia.org/wiki/Replica_(informatica))
- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)

## Snapshot coerente con un database

**Prove:** seconda prova gruppo 1, orale
**Tag:** snapshot, coerenza, database
**Semaforo:** giallo

### Inquadramento

La domanda chiede una copia istantanea che si possa riaprire, non una fotografia a metà di una scrittura. Si distingue lo snapshot del disco dallo snapshot fatto dall'applicazione.

### Definizione

Uno snapshot è una vista dei dati a un istante, creata in pochi secondi, che conserva i blocchi precedenti quando arrivano modifiche nuove. È coerente se quell'istante corrisponde a uno stato che l'applicazione sa riaprire, non a una scrittura lasciata a metà.

### Nel dettaglio

Fotografare i dischi mentre il database scrive può catturare una pagina mezza aggiornata e un giornale non allineato. Molti motori, al riavvio, recuperano dal giornale, e uno snapshot di tutti i loro file nello stesso istante si riapre. Uno snapshot di un solo disco, se i file sono sparsi su più dischi non fotografati insieme, no. La condizione è: tutti i volumi del database nello stesso istante, e meglio se il motore ha preparato lo stato, per esempio forzando i dati sul disco prima dello scatto.

Lo snapshot sta sullo stesso storage. Serve a tornare indietro di un'ora dopo un errore, o a ricavare con calma un backup senza tenere fermo il servizio. Non sopravvive al guasto dello storage. Non si conserva per mesi come unica storia, perché consuma spazio man mano che i blocchi divergono, e perché un ransomware che arriva allo storage arriva anche agli snapshot scrivibili.

La coerenza applicativa, per un insieme di più sistemi, chiede un punto comune: o si fermano le scritture per pochi secondi, o si accetta un recupero. In un tema si dice quale delle due si è scelta. «Snapshot ogni ora» senza dire se il database si riapre è una frase incompleta.

### Esempio

Ogni ora il motore forza i dati e lo storage fotografa insieme i volumi del database. Da quella foto si copia il backup verso il deposito immutabile, con calma. La foto dell'ora precedente si butta dopo che la copia è riuscita. Un errore di caricamento si annulla tornando alla foto, senza toccare il backup di ieri.

### In sede di prova

Istantaneo, stesso istante su tutti i volumi, preparazione da parte del motore, utilità per l'errore recente e per il backup coerente, limite: stesso storage.

### Errori da evitare

- Trattare lo snapshot come un backup su un altro mezzo.
- Fotografare un solo disco di un database che ne usa due.
- Tenere snapshot scrivibili e crederli una difesa dal ransomware.

### Approfondire

- [Snapshot](https://it.wikipedia.org/wiki/Snapshot_(informatica))
- [Database](https://it.wikipedia.org/wiki/Database)

## Nastro e che ruolo ha ancora

**Prove:** seconda prova gruppo 1, orale
**Tag:** nastro, archivio, costo
**Semaforo:** giallo

### Inquadramento

La domanda sembra fuori tempo e torna per il costo del byte e per lo stacco dalla rete. Si dice a che cosa il nastro serve ancora e a che cosa non serve.

### Definizione

Il nastro magnetico conserva grandi quantità di dati a basso costo, in sequenza, e può essere portato fuori dalla sala. Non serve alle letture casuali. Serve all'archivio e a una copia che di solito non è in linea.

### Nel dettaglio

Un nastro si legge in ordine. Recuperare un file piccolo in mezzo a un nastro lungo costa il tempo di arrivare fin lì, minuti, non millisecondi. Per questo il nastro non è il disco del database e non è il posto da cui ripristinare un singolo documento di fretta, se esiste una copia su disco più recente. È il posto del completo settimanale che deve durare anni e costare poco, e della copia che si chiude in un armadio in un altro edificio.

Lo stacco è il suo argomento di sicurezza. Il nastro estratto non ha un indirizzo IP. Un ransomware nella sala non lo cifra. Il prezzo è organizzativo: qualcuno lo porta, qualcuno lo registra, qualcuno lo prova. Un nastro non letto da due anni può essere illeggibile, o il lettore nuovo può non capire il vecchio formato. Si prova un ripristino a calendario, e si migra il formato prima che i lettori spariscano.

La durata non è infinita. Si segue la vita dichiarata del supporto e lo si ricopia. L'etichetta, il registro di dove si trova l'armadio e chi può aprirlo fanno parte del backup tanto quanto il software che ha scritto il nastro. Un nastro senza registro è un nastro perso.

### Esempio

Ogni domenica il completo va su nastro, il lunedì il nastro va nell'altro edificio, il registro segna la cassetta. I ripristini di un file del giorno si fanno dal disco. Una volta al semestre si legge un nastro di tre mesi prima per intero, su un sistema di prova.

### In sede di prova

Costo e stacco a favore, lentezza casuale contro, prova di lettura, registro fisico. Non proporlo come storage primario.

### Errori da evitare

- Usare il nastro per le query o per i file caldi.
- Non provare mai la lettura.
- Cambiare lettore e scoprire che i vecchi nastri non si leggono, senza una copia ponte.

### Approfondire

- [Nastro magnetico](https://it.wikipedia.org/wiki/Nastro_magnetico)
- [Backup](https://it.wikipedia.org/wiki/Backup)

## Deduplica e compressione, e dove si mettono

**Prove:** seconda prova gruppo 1, orale
**Tag:** deduplica, compressione, backup
**Semaforo:** giallo

### Inquadramento

La domanda chiede come la stessa copia occupi meno byte, e che cosa non si deve deduplicare alla cieca. Si distingue ridurre i duplicati da comprimere i byte.

### Definizione

La compressione rappresenta gli stessi dati con meno byte, e si inverte alla lettura. La deduplica tiene una sola volta un blocco identico che compare in più copie, e al suo posto mette un riferimento. Entrambe risparmiano spazio. Nessuna sostituisce una copia in più luoghi.

### Nel dettaglio

Nel backup la deduplica rende conveniente tenere molte generazioni: il completo di questa settimana condivide quasi tutto con quello della scorsa, e si conserva il diverso. È il motivo per cui trenta completi non costano trenta volte. Si paga in CPU al momento della copia e in dipendenza dal magazzino dei blocchi: se quel magazzino si corrompe, molte generazioni cadono insieme. Per questo il magazzino deduplicato non è l'unica copia. Una copia in un altro formato, anche più piccola di numero, sta altrove.

La compressione aiuta i documenti e i registri, aiuta poco i dati già compressi o già cifrati. Cifrare prima di deduplicare rende i blocchi diversi anche quando il contenuto è uguale, e la deduplica non rende. L'ordine si dice: deduplica e compressione sul sistema di copia, cifra del deposito, oppure cifra prima solo se si è accettato di perdere la deduplica. I dati personali deduplicati restano dati personali: un blocco condiviso non è anonimo.

Il risparmio si misura sul proprio dato, non sul depliant. Documenti d'ufficio ripetitivi si riducono molto. Immagini già compresse e archivi cifrati poco. Si fa una prova su un campione prima di dimensionare il deposito sulla metà promessa.

### Esempio

I completi settimanali finiscono su un deposito che deduplica. Trenta settimane occupano poco più di due completi. Una volta al mese una generazione viene copiata, senza dipendere da quel magazzino, su nastro. La cifra è del deposito, dopo la deduplica.

### In sede di prova

Definire le due tecniche, dire il beneficio sulle generazioni, il rischio del magazzino unico, l'ordine rispetto alla cifra, la prova sul proprio dato.

### Errori da evitare

- Dimensionare contando sul risparmio del produttore senza un campione.
- Cifrare prima e poi stupirsi che la deduplica non funzioni.
- Tenere tutte le generazioni in un solo magazzino deduplicato.

### Approfondire

- [Deduplicazione](https://it.wikipedia.org/wiki/Deduplicazione)
- [Compressione dei dati](https://it.wikipedia.org/wiki/Compressione_dei_dati)

## Antincendio in una sala macchine

**Prove:** seconda prova gruppo 1, orale
**Tag:** incendio, estinguente, sala
**Semaforo:** giallo

### Inquadramento

La domanda è di continuità fisica. Si dice quale estinguente non distrugge le macchine, e come si spegne in modo ordinato invece di aspettare l'acqua dell'edificio.

### Definizione

La sala ha un rivelamento di fumo precoce e un estinguente adatto all'elettronica, in genere un gas che soffoca la fiamma senza bagnare i circuiti. L'impianto ad acqua dell'edificio, se investe i rack, li distrugge anche quando spegne il fuoco.

### Nel dettaglio

Il fumo si rileva prima della fiamma, con sensori in sala e sotto il pavimento, se il pavimento è flottante e ci passa l'aria. L'allarme chiama una persona e, secondo la procedura, può togliere l'energia prima che l'estinguente parta, perché un corto che resta alimentato riaccende. La sequenza si scrive e si prova come ogni altra procedura. Un gas si respira male o sposta l'ossigeno: la sala si evacua, e la procedura dice il tempo e la porta.

La compartimentazione evita che l'incendio della sala diventi l'incendio dell'edificio e viceversa. Muri e passaggi cavi chiusi valgono quanto l'estinguente. Le copie stanno fuori da questo compartimento, altrimenti il fuoco che giustifica il secondo sito brucia anche il backup. È il collegamento con il sito remoto: l'antincendio riduce la probabilità, il sito copre il caso in cui la sala è comunque persa.

Si distingue un principio di incendio, spento in minuti con il servizio che torna, da una sala inagibile per settimane. Il piano di continuità ha entrambe le righe. Nessuno dei due casi si improvvisa la sera dell'evento.

### Esempio

I sensori avvisano, la sala si evacua, l'energia dei rack si toglie secondo la procedura, il gas parte. Il servizio cade. Le copie sono nell'altro edificio e il ripristino segue il piano già provato. L'acqua dell'impianto generale non entra in sala.

### In sede di prova

Rivelamento precoce, estinguente che non bagna, evacuazione, energia, copie fuori dal compartimento. Due scenari: principio spento, sala persa.

### Errori da evitare

- Dare per buono l'impianto ad acqua dell'edificio dentro la sala.
- Tenere l'unica copia di backup nello stesso compartimento.
- Non avere una procedura di spegnimento, solo un estintore a mano.

### Approfondire

- [Data center](https://it.wikipedia.org/wiki/Data_center)
- [Sistema antincendio](https://it.wikipedia.org/wiki/Impianto_antincendio)

## Sonde del bilanciatore: che cosa significa «sano»

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** bilanciatore, health check, sonda
**Semaforo:** verde

### Inquadramento

La domanda entra nel punto in cui il bilanciatore decide di non mandare più traffico a un nodo. Si distingue un nodo acceso da un nodo che risponde davvero.

### Definizione

La sonda è una verifica periodica che il bilanciatore fa verso ogni nodo. Se la sonda fallisce per un numero di volte deciso, il nodo esce dal turno. Quando torna a riuscire, il nodo rientra.

### Nel dettaglio

Una sonda che apre solo la porta TCP dice che qualcuno ascolta. L'applicazione può essere bloccata e accettare la connessione senza rispondere. Una sonda migliore chiede una pagina di controllo che verifica le dipendenze necessarie: se il database non c'è, la pagina fallisce e il nodo esce, invece di ricevere utenti e produrre errori. La pagina di controllo non deve essere pesante e non deve chiamare servizi secondari la cui assenza non impedisce il lavoro, altrimenti un guasto marginale svuota tutto il turno.

I numeri si scrivono. Ogni cinque secondi, tre fallimenti di fila, poi fuori. Rientro dopo due successi, non dopo uno, per non far oscillare un nodo instabile. Un nodo che entra e esce ogni minuto è peggio di un nodo fermo, perché gli utenti ci finiscono a intermittenza. Si toglie a mano finché non si capisce.

Il bilanciatore stesso si sonda, o meglio si ridonda. Due bilanciatori, un indirizzo che si sposta se uno muore. La sonda del bilanciatore morto non protegge gli utenti. E la pagina di controllo non si pubblica sul mondo con i dettagli interni del database: risponde sano o non sano, e i dettagli stanno nel registro interno.

### Esempio

La sonda chiede all'applicazione se sa eseguire una query breve. Il database cade. Le sonde falliscono, i nodi escono, il bilanciatore risponde errore in modo pulito invece di tenere aperte sessioni destinate a fallire a metà modulo. Al ritorno del database i nodi rientrano dopo due sonde buone.

### In sede di prova

Sonda sulla funzione, numeri di fallimento e di rientro, niente oscillazioni, bilanciatore ridondato, pagina di controllo senza segreti.

### Errori da evitare

- Accontentarsi del ping o della porta aperta.
- Far dipendere la sonda da un componente accessorio e svuotare il servizio.
- Pubblicare i dettagli interni nella pagina di sonda.

### Approfondire

- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)
- [Alta disponibilità](https://it.wikipedia.org/wiki/Alta_disponibilit%C3%A0)

## Applicazione senza stato e che cosa resta condiviso

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** stateless, sessione, scalabilità
**Semaforo:** verde

### Inquadramento

È la condizione per aggiungere nodi. Si dice quale stato può restare sul nodo e quale deve stare fuori, con un esempio di ciò che succede se si sbaglia.

### Definizione

Un'applicazione senza stato durevole sul nodo tratta ogni richiesta in base a ciò che la richiesta porta e a ciò che sta nei depositi condivisi. Qualunque nodo può rispondere. Lo stato di lavoro, la sessione e i dati, stanno fuori dal nodo.

### Nel dettaglio

Sul nodo possono restare cache ricostruibili. Non può restare l'unica copia della sessione, né un file caricato a metà e tenuto in una cartella locale, né un progressivo calcolato in memoria. Se quel nodo muore, la sessione sparisce e il file a metà pure, e il bilanciatore manderà l'utente altrove, dove quelle cose non ci sono. Si sposta la sessione in un deposito condiviso o in un token firmato. Il file va sullo storage comune appena arriva. Il progressivo lo dà il database.

Il token firmato evita il deposito di sessione: ogni nodo verifica la firma e non deve ricordare nulla. La revoca prima della scadenza richiede una lista condivisa, piccola. È una scelta da scrivere, non un dettaglio. Il deposito di sessione, invece, è un nuovo componente da rendere disponibile: se è uno solo, è il nuovo punto unico, e va ridondato o accettato.

Senza stato il rilascio è più semplice. Si toglie un nodo dal turno, lo si aggiorna, lo si rimette, si passa al successivo. Nessun utente è legato a quel nodo. Con le sessioni locali si aspetta che scadano o si interrompono. In un elaborato questa è la frase che giustifica due nodi applicativi.

### Esempio

Il caricamento di un allegato da duecento megabyte non resta nella memoria del nodo in attesa del passo successivo. Va subito sullo storage a oggetti, e la richiesta seguente, su un altro nodo, lo ritrova per nome. La sessione è un token. Un nodo si aggiorna in orario d'ufficio.

### In sede di prova

Definire che cosa non sta sul nodo, dove sta la sessione, come si rilascia un nodo alla volta. Dire che la cache si può perdere.

### Errori da evitare

- Dire «senza stato» e poi salvare i file in una cartella locale.
- Dimenticare che il deposito di sessione va a sua volta reso disponibile.
- Legare l'utente al nodo con l'affinità e chiamarla comunque alta disponibilità piena.

### Approfondire

- [Architettura multi-tier](https://it.wikipedia.org/wiki/Architettura_multi-tier)
- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)

## Replica di lettura e unico punto di scrittura

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** replica, letture, primario
**Semaforo:** giallo

### Inquadramento

La domanda serve quando il database è il collo e le letture sono molte. Si spiega che cosa si può moltiplicare e quale ritardo vede l'utente.

### Definizione

Una replica di lettura riceve i dati dal primario e risponde alle query che non modificano. Le scritture vanno solo al primario, che poi le propaga. La replica può essere indietro di un poco.

### Nel dettaglio

Gli elenchi e i report pesano di letture. Spostarli su una replica alleggerisce il primario, che resta libero per le transazioni. Subito dopo una scrittura, però, una lettura sulla replica può non vedere ancora il dato. Per un cruscotto va bene. Per la pagina che conferma «ho preso in carico» e poi rilegge lo stato, no: l'utente vedrebbe il vecchio e riproverebbe. Quelle letture si fanno sul primario, oppure si aspetta la propagazione, e la scelta si scrive.

Le scritture non si moltiplicano con questo schema. Il primario resta il tetto. Se il collo sono le scritture, una replica di lettura non cambia nulla e servono altre strade: query più leggere, meno indici inutili, o una riprogettazione. Aggiungere tre repliche «per le prestazioni» senza dire quali query ci finiscono è uno spreco.

La replica di lettura non è il passivo di failover, anche se a volte è lo stesso nodo. Se la si usa per i report lunghi, quei report la tengono occupata e, il giorno in cui deve diventare primaria, parte già carica. Si separano i ruoli se il servizio è serio: una replica per leggere i report, un'altra pronta per la promozione.

### Esempio

Il primario esegue prese in carico e aggiornamenti. I report del venerdì, che leggono un anno di ticket, vanno su una replica in ritardo ammesso di un minuto. La schermata appena dopo un click legge dal primario. Il ritardo è scritto accanto al report: «dati aggiornati al minuto».

### In sede di prova

Chi scrive, chi legge, quale lettura non può vedere un dato vecchio, il primario che resta il tetto delle scritture.

### Errori da evitare

- Mandare ogni lettura, anche quella appena dopo una scrittura, sulla replica in ritardo.
- Credere di aver scalato le scritture.
- Far coincidere il report pesante con l'unico nodo di failover.

### Approfondire

- [Replica (informatica)](https://it.wikipedia.org/wiki/Replica_(informatica))
- [Database](https://it.wikipedia.org/wiki/Database)

## Rete di distribuzione e che cosa non va in cache ai bordi

**Prove:** seconda prova gruppo 1, orale
**Tag:** CDN, cache, bordo
**Semaforo:** rosso

### Inquadramento

È un argomento di contorno, utile se il tema ha un pubblico largo che scarica gli stessi contenuti. Si dice che cosa può stare vicino all'utente e che cosa deve restare nell'ente.

### Definizione

Una rete di distribuzione tiene copie di contenuti statici in punti vicini a chi li chiede, così il viaggio fino alla sede è più corto e il server di origine lavora meno. Non esegue la logica dell'applicazione e non deve ricevere i dati riservati.

### Nel dettaglio

Ci stanno le pagine pubbliche, i fogli di stile, i documenti già pubblicati e uguali per tutti. Non ci sta la pagina del ticket, la sessione, l'elenco personalizzato, un allegato riservato. Mettere in una rete esterna un contenuto con un indirizzo indovinabile e una cache lunga lo rende di fatto pubblico per la durata della cache. Il contenuto riservato resta sull'origine, con il controllo di accesso, e la rete di distribuzione non lo vede.

La cache ha una scadenza. Un documento sostituito resta il vecchio ai bordi finché la scadenza, o una invalidazione esplicita, non arriva. Si scrive questo ritardo, come per ogni cache. L'origine deve reggere il carico da sola nel momento in cui la cache è vuota, per esempio al mattino di un picco, altrimenti la distribuzione maschera un dimensionamento insufficiente e il giorno senza cache il servizio cade.

È un componente in più, con un fornitore in più, e per un'applicazione usata da ottanta persone in un edificio non serve. La rete locale è già vicina. Lo si nomina per un servizio rivolto al pubblico che distribuisce gli stessi file a molti. Negli altri temi si dice che non serve e perché.

### Esempio

Il sito pubblico dell'ente distribuisce modulistica tramite una rete di distribuzione, con scadenza di un'ora. Il portale dei dipendenti, con pratiche riservate, non passa da lì. Il modulo sostituito in mattinata è ovunque entro l'ora, e l'origine da sola reggerebbe il carico interno se la distribuzione mancasse.

### In sede di prova

Che cosa ci sta, che cosa non ci sta, il ritardo di aggiornamento, quando non serve. La frase sulla riservatezza.

### Errori da evitare

- Far passare l'applicazione riservata da una cache pubblica.
- Dare per immediata la sostituzione di un file ai bordi.
- Aggiungerla a un servizio usato da un solo ufficio.

### Approfondire

- [Content delivery network](https://it.wikipedia.org/wiki/Content_delivery_network)
- [Cache](https://it.wikipedia.org/wiki/Cache)

## Analisi di impatto prima di scegliere l'RTO

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** BIA, impatto, RTO
**Semaforo:** giallo

### Inquadramento

La domanda chiede da dove escono i numeri di continuità. Si parte dal danno dell'ufficio e si arriva al numero, non dal prodotto che si vorrebbe comprare.

### Definizione

L'analisi di impatto stima, per ogni servizio, che danno produce un fermo man mano che le ore passano, e quanto dato si può perdere o rifare. Da quella stima vengono l'RTO e l'RPO. Il servizio più urgente riceve la protezione più cara.

### Nel dettaglio

Si chiede all'ufficio, non solo all'informatica. Dopo un'ora di fermo dello sportello, che cosa non si fa più. Dopo un giorno. Dopo una settimana. Le risposte sono diverse per il protocollo, per la posta, per un cruscotto. Metterli tutti a quattro ore costa come il più esigente e non è motivato. Si ordinano. Il protocollo forse sta in un'ora. Il cruscotto sta in due giorni, e per due giorni si può anche lavorare con l'estrazione di ieri.

Si chiede anche che cosa si può rifare a mano e per quanto. Se per mezza giornata le prenotazioni si segnano su un foglio e poi si ricaricano, l'RTO tecnico può essere più lungo della pazienza dell'ufficio, e il foglio è parte del piano, con il modo di ricaricare senza duplicare. Se non si può rifare a mano, il numero tecnico è il numero dell'ufficio.

L'analisi si aggiorna quando il servizio cambia. Un portale diventato obbligatorio per una scadenza di legge non può tenere l'RTO di quando era sperimentale. In un elaborato, anche solo per il servizio del tema, si scrivono tre righe: danno a un'ora, danno a un giorno, che cosa si fa nel frattempo a mano. I numeri di backup vengono dopo e devono essere coerenti con quelle righe.

### Esempio

Lo sportello pratica non può fermarsi più di mezza giornata in periodo di scadenze, e non può perdere le pratiche già consegnate: RPO vicino a zero con replica, RTO di quattro ore con due nodi. Il report mensile può fermarsi una settimana e si ricalcola: backup ordinario, niente secondo sito.

### In sede di prova

Partire dall'ufficio, distinguere i servizi, dire il lavoro manuale, far discendere RPO e RTO. Non partire dal prodotto.

### Errori da evitare

- Assegnare lo stesso RTO a tutti i servizi.
- Decidere il numero senza chiedere quale danno produce il fermo.
- Dimenticare il modo manuale di andare avanti durante il fermo.

### Approfondire

- [Business impact analysis](https://it.wikipedia.org/wiki/Business_impact_analysis)
- [Continuità operativa](https://it.wikipedia.org/wiki/Continuit%C3%A0_operativa)

## Finestra di backup e impatto su chi lavora

**Prove:** seconda prova gruppo 1, orale
**Tag:** finestra, backup, carico
**Semaforo:** giallo

### Inquadramento

La domanda lega la copia al disturbo. Si sceglie l'orario e il modo, e si dice che cosa vede l'utente se la copia passa di giorno.

### Definizione

La finestra di backup è l'intervallo in cui la copia si esegue. Dentro quell'intervallo il sistema può essere più lento o, nei modi più ruvidi, fermo alle scritture. La finestra va scelta quando il disturbo è accettabile, e va finita prima che l'ufficio rientri.

### Nel dettaglio

Un completo che legge tutto il disco compete con le query. Di notte, in un ufficio che chiude, è il momento giusto. Se il completo dura dieci ore e la notte è otto, entra nel mattino e lo sportello parte lento. Si accorcia la copia con incrementali, si velocizza il mezzo, o si sposta il completo al fine settimana e di notte si fa solo l'incrementale. Il conto della durata si fa sul dato di fra un anno, non su quello di oggi: i dati crescono e la finestra che oggi basta fra un anno morde il mattino.

Alcuni servizi non hanno notte: un monitoraggio, un sito pubblico. Lì la copia non può fermare le scritture. Si usa uno snapshot coerente e si copia da quello, accettando il carico di lettura, distribuito. Si misura il rallentamento e lo si dichiara. Un backup che rende il servizio inutilizzabile per tre ore ha un RTO di fatto di tre ore ogni giorno, autoinflitto.

Si sorveglia la fine, non solo l'inizio. Un job partito alle ventidue che resta appeso fino a mezzogiorno è peggio di un job fallito, perché occupa il disco e non produce una copia chiusa. L'allarme scatta se alle sei del mattino non è finito. Qualcuno guarda l'allarme prima dell'apertura.

### Esempio

Completo la domenica, sei ore, dentro la notte del fine settimana. Incrementale ogni ora nei giorni lavorativi, pochi minuti, da snapshot, senza fermare lo sportello. Allarme se il completo non è chiuso entro le cinque del lunedì, così si rimedia prima dell'ufficio pieno.

### In sede di prova

Durata contro notte disponibile, crescita del dato, snapshot se non esiste una notte, allarme sulla fine e non solo sull'avvio.

### Errori da evitare

- Far coincidere il completo con l'apertura dello sportello.
- Ignorare la crescita e scoprire fra un anno che la finestra non basta.
- Controllare solo che il job sia partito.

### Approfondire

- [Backup](https://it.wikipedia.org/wiki/Backup)
- [Snapshot (informatica)](https://it.wikipedia.org/wiki/Snapshot_(informatica))

## Ricostruzione di un RAID e tempo in cui si è esposti

**Prove:** seconda prova gruppo 1, orale
**Tag:** RAID, ricostruzione, hot spare
**Semaforo:** giallo

### Inquadramento

La domanda entra nel buco fra il guasto di un disco e il ritorno della ridondanza. Si stima la durata e si dice quale secondo guasto, in quelle ore, è fatale.

### Definizione

La ricostruzione ricalcola i dati del disco morto sugli altri dischi o su un disco di riserva. Dura ore, a volte un giorno, secondo la capacità e il carico. Finché non finisce, il gruppo regge un guasto in meno di quanto promesso.

### Nel dettaglio

Un RAID 5 con un disco morto è di fatto un insieme senza parità. Un secondo disco che muore durante la ricostruzione perde il gruppo. I dischi grandi, da molti terabyte, si ricostruiscono a lungo, e la probabilità di un errore di lettura su uno dei superstiti durante quella lettura integrale non è trascurabile. È il motivo per cui, sui dischi grandi, si preferisce il RAID 6, che ha ancora una parità durante la ricostruzione del primo guasto, o il RAID 10.

Un disco di riserva già inserito, hot spare, parte da solo e accorcia l'attesa umana. Non accorcia la lettura dei dati: la ricostruzione dura comunque. E lo spare va tenuto sano. Uno spare morto da mesi, scoperto nel momento del bisogno, non esiste. L'allarme sul disco degradato deve arrivare a una persona lo stesso giorno, e il disco sostitutivo deve essere in casa o in contratto con consegna breve. La ricostruzione automatica senza nessuno che sostituisce il pezzo consuma la riserva e al guasto successivo si è senza.

Durante la ricostruzione le prestazioni calano, perché i dischi leggono tutto mentre servono gli utenti. Si fa, se si può scegliere, in un orario quieto, sapendo che un disco morto non aspetta l'orario quieto. Si dichiara il rallentamento piuttosto che spegnere il servizio per paura.

### Esempio

Quattro dischi in RAID 6, uno spare. Muore un disco alle undici. Lo spare entra, la ricostruzione finisce alle diciannove, il gruppo nel frattempo regge ancora un guasto. L'allarme è arrivato, il disco nuovo è in armadio, il giorno dopo lo spare viene reintegrato. Gli utenti vedono il database più lento, non fermo.

### In sede di prova

Durata, che cosa non è più tollerato durante quelle ore, perché il 6 o il 10 sui dischi grandi, spare, allarme a una persona, ricambio pronto.

### Errori da evitare

- Dire che il RAID ha risolto il guasto nell'istante in cui il disco muore.
- Usare il 5 su dischi enormi senza dire il rischio della ricostruzione.
- Non avere un disco sostitutivo e non avere un allarme.

### Approfondire

- [RAID](https://it.wikipedia.org/wiki/RAID)
- [Tolleranza ai guasti](https://it.wikipedia.org/wiki/Tolleranza_ai_guasti)

## Percorsi multipli verso lo storage

**Prove:** seconda prova gruppo 1, orale
**Tag:** multipath, SAN, percorso
**Semaforo:** giallo

### Inquadramento

La domanda chiede che cosa succede se un cavo o uno switch della rete dischi muore. Si descrivono due percorsi e il comportamento del nodo.

### Definizione

Il multipath tiene più percorsi fra il nodo e i dischi. Se un percorso cade, il nodo continua sugli altri, senza smontare il filesystem e senza far cadere il database.

### Nel dettaglio

Un solo cavo fra il nodo e lo storage è un singolo punto di guasto anche quando i dischi sono in RAID. Il RAID protegge il disco. Non protegge il cavo, la porta, lo switch di quella rete. Due schede nel nodo, due switch, due porte sullo storage, e i percorsi si incrociano così che la perdita di uno switch lasci l'altro intero. I due percorsi non devono passare dallo stesso cavidotto.

Il sistema operativo vede più vie verso lo stesso disco e ne tiene una attiva, o le usa insieme, secondo la configurazione. Al guasto riprova sull'altra via in pochi secondi. Quei secondi si sentono come una pausa delle query, non come un fermo, se tutto è configurato. Se il multipath non è configurato, il nodo vede un disco sparito e il database si chiude. La differenza sta nella configurazione, non nel fatto di aver comprato due cavi e averne lasciato uno staccato.

Si prova staccando un cavo in finestra. Un percorso mai usato può essere guasto da sempre, e lo si scopre il giorno in cui serve. La prova è togliere una via e vedere le query continuare. Si rimette la via e si verifica che torni disponibile, non che resti esclusa per sempre.

### Esempio

Ogni nodo di database ha due schede verso due switch di storage. Si stacca un cavo in prova: le transazioni segnano una pausa di pochi secondi e proseguono. L'allarme dice che una via è degradata, così si rimette il cavo prima che muoia anche l'altra.

### In sede di prova

Due vie che non condividono lo switch né il cavidotto, comportamento atteso al distacco, prova vera. Distinguere dal RAID.

### Errori da evitare

- Proteggere i dischi in RAID e lasciare un solo cavo.
- Dare per buoni due percorsi senza averne staccato uno.
- Far passare le due vie nello stesso fascio di cavi.

### Approfondire

- [Storage area network](https://it.wikipedia.org/wiki/Storage_area_network)
- [RAID](https://it.wikipedia.org/wiki/RAID)

## Disco pieno: registri, code e come si evita il fermo

**Prove:** seconda prova gruppo 1, orale
**Tag:** disco pieno, registri, capacità
**Semaforo:** verde

### Inquadramento

È un guasto frequentissimo e poco nobile, quindi esce meno nei temi e più negli orali. Si dice che cosa cresce, come si avvisa, e che cosa si può cancellare senza cancellare le prove.

### Definizione

Un disco pieno ferma le scritture. L'applicazione non registra, il database può fermarsi per non corrompersi, il nodo non scrive più nemmeno i propri registri. È un fermo di disponibilità causato da mancanza di capacità, non da un guasto hardware.

### Nel dettaglio

A crescere sono quasi sempre i registri, le code di messaggi non consumate, gli allegati e i backup lasciati sullo stesso disco del servizio. Il registro di debug acceso «per un pomeriggio» e dimenticato riempie il disco in giorni. Si separano i dischi: sistema, dati, registri, e se possibile le copie su un altro mezzo. Un registro che riempie il disco dei dati porta con sé il database. Un registro su un disco suo riempie quel disco e si perde il dettaglio, ma il servizio può continuare se l'applicazione regge il mancato scrittura del log, cosa che va decisa e non sperata.

La soglia all'ottanta per cento, con la storia della crescita, dà giorni di preavviso. Si sa quanti gigabyte al giorno, quindi si sa fra quanti giorni si è pieni. La cura ordinaria è la ritenzione: i registri si tengono per il tempo necessario a un incidente e a un obbligo, poi si archiviano o si cancellano. Cancellare a mano il giorno del pieno, nel panico, è il modo di buttare proprio i registri dell'incidente in corso.

Si mette un tetto. L'applicazione ruota i registri da sola e non tiene più di un certo volume. Il database ha un allarme prima del pieno e una procedura: quale tabella cresce, chi decide di archiviare. Un tetto senza procedura sposta solo il messaggio di errore.

### Esempio

I registri applicativi stanno su un disco dedicato, ruotati ogni giorno, tenuti quattordici giorni, poi archiviati. L'ottanta per cento avvisa. Il disco dei dati non riceve quei file. Un debug acceso viene segnato in un elenco di cose da spegnere la sera stessa.

### In sede di prova

Che cosa cresce, dischi separati, soglia e trend, ritenzione, che cosa non cancellare durante un incidente.

### Errori da evitare

- Tenere dati, registri e backup sullo stesso disco.
- Accorgersi del pieno solo quando il servizio si è fermato.
- Cancellare i registri dell'incidente per far ripartire il servizio, senza averne copiato una parte.

### Approfondire

- [Log](https://it.wikipedia.org/wiki/Log)
- [Monitoraggio (informatica)](https://it.wikipedia.org/wiki/Monitoraggio_(informatica))

## Riaccendere una sala in ordine

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** riaccensione, dipendenze, black-out
**Semaforo:** verde

### Inquadramento

La domanda è operativa e sta benissimo in un tema di continuità. Si scrive l'ordine, perché accendere tutto insieme non produce un servizio, produce una coda di errori.

### Definizione

La riaccensione ordinata avvia i sistemi secondo le dipendenze: prima ciò da cui gli altri dipendono, poi il resto, verificando ciascun passo prima del successivo. L'ordine è scritto, non ricostruito a memoria nel buio.

### Nel dettaglio

Prima l'energia stabile e il raffreddamento, altrimenti i nodi partono e si spengono per calore o cadono al buco del generatore. Poi la rete di base: switch, firewall, DNS, DHCP, orologio. Senza DNS i nodi non trovano il database anche se il database è su. Poi l'identità, perché le applicazioni non autenticano nessuno se il directory è spento. Poi lo storage e il database, e si verifica che abbia fatto il recupero e accetti connessioni. Poi i nodi applicativi, pochi alla volta. Poi il proxy, o il proxy prima se è il controllo, secondo come è disegnato, e lo si è scritto. Infine si prova una funzione vera con un utente di prova, e solo dopo si riammettono gli uffici.

Ogni passo ha un esito osservabile e un tempo massimo. Se il database non è su entro venti minuti, si segue il ramo alternativo, non si accendono lo stesso le applicazioni «tanto intanto». Le applicazioni che partono prima falliscono e, in alcuni casi, fanno danni ritentando a vuoto. Si aspetta.

La procedura sta scritta fuori dalla sala: su carta in portineria tecnica, e in una copia nel sito remoto. La persona che la esegue l'ha già eseguita in una prova. Una procedura letta per la prima volta durante il black-out dura il triplo e salta un passo.

### Esempio

Torna la rete elettrica. Raffreddamento e UPS stabili. Switch, DNS, NTP. Directory. Database, si attende il recupero. Due nodi applicativi. Proxy. Un utente di prova apre un ticket di prova. Poi si avvisa che lo sportello può rientrare. Tempo misurato in prova: novanta minuti. L'RTO di quattro ore li contiene.

### In sede di prova

L'elenco in ordine, l'esito di ogni passo, dove sta la procedura, la prova fatta prima. Identità e DNS prima dell'applicazione.

### Errori da evitare

- Accendere tutti i rack insieme e sperare.
- Tenere l'unica copia della procedura sul file server spento.
- Riammettere gli utenti prima di una prova vera.

### Approfondire

- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)
- [Continuità operativa](https://it.wikipedia.org/wiki/Continuit%C3%A0_operativa)

## Memoria con correzione degli errori

**Prove:** seconda prova gruppo 1, orale
**Tag:** ECC, RAM, server
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché la memoria di un server non è la stessa di un portatile. Il punto è accorgersi di un bit che cambia da solo, e correggerlo, prima che diventi un dato o un crash.

### Definizione

La memoria ECC aggiunge informazione di controllo a ogni blocco e corregge l'errore di un bit, segnalando quelli che non sa correggere. Il processore e la scheda devono supportarla. Senza, un bit alterato dai raggi, dal calore o da un difetto passa all'applicazione come dato vero.

### Nel dettaglio

Su una postazione l'effetto è raro e il danno è di una persona. Su un server acceso sempre, con molta memoria, la probabilità nel tempo non è trascurabile, e il danno è una riga sbagliata o un processo ucciso. Per questo la sala usa ECC, e un allarme quando la correzione avviene spesso: correggere è il mestiere, correggere di continuo è un modulo da sostituire. L'errore non correggibile si tratta come un guasto, non come un evento da ignorare perché la macchina è ancora su.

ECC non sostituisce il backup e non corregge un errore di software. Non rende affidabile un alimentatore. È una misura sul singolo bit di memoria. In un elaborato basta nominarla fra i requisiti della macchina che tiene il database, insieme alla ridondanza dei dischi, senza farne un capitolo.

La prova che sia accesa non è il nome sul preventivo. È il sistema che la vede e che conta gli errori. Una memoria ECC montata su una scheda che non la usa è memoria normale pagata di più.

### Esempio

Il server del database ha memoria ECC. Il monitoraggio conta le correzioni. Un modulo che in una settimana corregge centinaia di volte si sostituisce in una finestra, prima dell'errore non correggibile. I portatili dell'ufficio non hanno questo requisito, e non si usa il loro tipo di memoria «per risparmiare» sul server. Nel tema la riga sta nei requisiti hardware del nodo dati.

### In sede di prova

Corregge un bit, segnala ciò che non corregge, serve sul server acceso sempre, l'allarme sulla frequenza, non sostituisce backup né ridondanza dei dischi.

### Errori da evitare

- Considerarla un sinonimo di alta disponibilità.
- Non allarmare un modulo che corregge di continuo.
- Metterla nel preventivo senza verificare che il sistema la usi.

### Approfondire

- [Memoria RAM](https://it.wikipedia.org/wiki/RAM)
- [Server](https://it.wikipedia.org/wiki/Server)

## Il giornale del filesystem

**Prove:** seconda prova gruppo 1, orale
**Tag:** journal, filesystem, coerenza
**Semaforo:** giallo

### Inquadramento

La domanda chiede che cosa succede a un disco se manca la corrente a metà di una scrittura. Si distingue il giornale del filesystem dal giornale del database: fanno un mestiere simile a livelli diversi.

### Definizione

Un filesystem con giornale annota, prima di farla, l'operazione sui metadati, e in alcuni modi anche sui dati. Dopo un'interruzione ripete o annulla l'operazione incompleta e torna coerente in fretta. Senza giornale, il controllo dopo uno stacco può essere lungo e può trovare la struttura da riparare a mano.

### Nel dettaglio

La coerenza del filesystem non è la coerenza della prenotazione. Il giornale del filesystem evita una directory a metà. Il giornale del database evita una prenotazione a metà. Servono tutti e due. Un filesystem «sicuro» non sostituisce la transazione, e una transazione non ripara una tabella di allocazione corrotta se il filesystem mente.

Lo stacco di corrente si prova, in una finestra e su un sistema che non è l'unico, oppure si ragiona sull'effetto: all'avvio il controllo deve finire da solo e il servizio deve ripartire. Se riparte e il database fa il recovery dal proprio giornale, la catena è quella giusta. Se qualcuno deve lanciare un controllo a mano ogni volta, manca il giornale o c'è un disco che non mantiene ciò che dice di aver scritto.

Si nomina anche il caso del disco che conferma la scrittura prima di averla fatta. Contro quello il filesystem può poco: servono dischi e controllori che non mentono, e l'alimentazione che dà il tempo di chiudere. È il collegamento con l'UPS, non un dettaglio da filologi.

### Esempio

Manca la corrente in sala. L'UPS tiene i minuti necessari allo spegnimento ordinato. Se non bastano e un nodo cade, all'accensione il filesystem ripassa il giornale in pochi secondi e il database applica il proprio. Le prenotazioni confermate ci sono, quella a metà no. Non si lancia un controllo manuale di ore. Se si dovesse, si scriverebbe un incidente sul disco, non si chiamerebbe normale.

### In sede di prova

Giornale del filesystem per la struttura, giornale del database per i dati, non si sostituiscono, spegnimento ordinato grazie all'UPS, il disco non deve mentire sulla scrittura.

### Errori da evitare

- Dire che il filesystem con giornale rende inutili le transazioni.
- Spegnere le macchine togliendo corrente, per abitudine.
- Ignorare un controllo manuale che si ripete a ogni avvio.

### Approfondire

- [File system](https://it.wikipedia.org/wiki/File_system)
- [Disco rigido](https://it.wikipedia.org/wiki/Disco_rigido)

## Permessi su un file: chi può leggerlo

**Prove:** seconda prova gruppo 1, orale
**Tag:** permessi, ACL, POSIX
**Semaforo:** giallo

### Inquadramento

La domanda da orale, semplice, chiede come un sistema impedisce a un processo di leggere il file di un altro. Si descrive il modello a tre soggetti e si dice quando non basta.

### Definizione

Nel modello tradizionale un file ha un proprietario, un gruppo e gli altri. Per ciascuno si distingue lettura, scrittura ed esecuzione. È chiaro e spesso basta. Una lista di controllo aggiunge voci per singole persone o gruppi, quando tre soggetti non descrivono la regola.

### Nel dettaglio

Il servizio gira con un utente proprio e legge solo i file di cui è proprietario o che il gruppo gli concede. I file delle credenziali non sono leggibili da «altri». Un file di configurazione lasciato leggibile da tutti, perché un programma non partiva, è un incidente frequente e si cerca. L'esecuzione su una directory significa poterla attraversare, non è un dettaglio: senza, il permesso sul file interno non si raggiunge. Con l'esecuzione e senza lettura, si attraversa e non si elenca. Vale la pena saperlo dire.

La lista di controllo serve quando, per esempio, due uffici devono leggere un archivio e un terzo no, e i tre non stanno in un gruppo solo senza creare un gruppo ad hoc. Il gruppo ad hoc, però, è spesso più leggibile della lista. Si preferisce il gruppo finché la regola è stabile. La lista si usa per l'eccezione, e si documenta, perché guardando i tre permessi classici non si vede.

Nessuno dei due modelli è l'autorizzazione applicativa. Il processo dell'applicazione, se può leggere tutto l'archivio, deve filtrare lui per utente. Il permesso di file protegge dal processo sbagliato e dall'amministratore distratto. Non distingue Maria da Luca se entrambi passano dallo stesso processo.

### Esempio

L'applicazione dei visitatori gira come utente `visitatori`, gruppo `visitatori`. La chiave sta in un file leggibile solo da quell'utente. Il deposito allegati è del gruppo, senza permesso per gli altri. Un secondo ufficio che deve leggere le copie di backup sta in un gruppo `backup`, non nel permesso «altri». Maria e Luca, con ruoli diversi nell'applicazione, non hanno due utenti di sistema: li distingue l'applicazione.

### In sede di prova

Proprietario, gruppo, altri. Esecuzione su una directory è attraversarla. Liste solo per l'eccezione. Il permesso di file non sostituisce il ruolo applicativo.

### Errori da evitare

- Rendere un file leggibile da tutti per far partire un servizio.
- Credere che i permessi sul disco distinguano gli utenti dell'applicazione.
- Usare liste di controllo ovunque, senza un gruppo, e non saper più leggere la regola.

### Approfondire

- [Controllo degli accessi](https://it.wikipedia.org/wiki/Controllo_degli_accessi)
- [File system](https://it.wikipedia.org/wiki/File_system)

## I registri di sistema in un solo posto

**Prove:** seconda prova gruppo 1, orale
**Tag:** syslog, registri, raccolta
**Semaforo:** verde

### Inquadramento

La domanda chiede dove si guarda quando un nodo è già compromesso o già pieno. I registri che stanno solo lì possono essere stati cancellati o non essere più raggiungibili.

### Definizione

Un servizio di raccolta riceve i registri di sistema e applicativi dagli altri nodi, al momento in cui nascono, e li conserva su un sistema diverso, con accessi propri. Il nodo sorgente tiene un breve giro locale. La copia utile è quella raccolta.

### Nel dettaglio

Si mandano gli eventi che servono a ricostruire: accessi privilegiati, rifiuti del firewall, avvii e spegnimenti, errori dell'applicazione, disco che si riempie. Non si manda tutto il debug di ogni processo, che annega il resto e costa. Il canale verso il raccoglitore sta su una rete che il nodo compromesso non riscrive a piacere, e il raccoglitore non accetta di essere spento dal mittente. I registri già arrivati non si modificano.

L'orologio è lo stesso, altrimenti la raccolta mescola sequenze. Si prova il silenzio: se un nodo smette di mandare, è un allarme, non una giornata tranquilla. Un raccoglitore fermo, con i nodi che credono di aver mandato, è il difetto simmetrico. Si guarda anche la coda del raccoglitore.

La conservazione ha un tempo, già detto per i registri in generale. Il raccoglitore non è un motivo per tenerli per sempre. È un motivo per tenerli al sicuro per il tempo scelto.

### Esempio

Firewall, server e applicazione mandano al raccoglitore in sala, su un sistema che gli amministratori dell'applicazione non cancellano. Il disco di un nodo si riempie e il nodo smette di scrivere in locale: gli eventi precedenti sono già al raccoglitore. Un nodo che non manda nulla da un'ora compare nell'allarme. Si conserva per il tempo già scritto nella scelta dell'ente, non a tempo indeterminato.

### In sede di prova

Copia fuori dal nodo, al momento dell'evento, allarme se un nodo tace, orologio unico, conservazione a tempo, niente debug in massa.

### Errori da evitare

- Lasciare i registri solo sulla macchina esposta.
- Raccogliere tutto e non guardare nulla.
- Non accorgersi che il raccoglitore è fermo.

### Approfondire

- [Log](https://it.wikipedia.org/wiki/Log)
- [Syslog](https://it.wikipedia.org/wiki/Syslog)

## Ricambi e contratto, prima del guasto

**Prove:** seconda prova gruppo 1, orale
**Tag:** manutenzione, ricambi, MTTR
**Semaforo:** giallo

### Inquadramento

La domanda collega il tempo di ripristino a qualcosa di poco eroico: avere il pezzo e avere chi lo cambia. Senza, il conto delle ore di disponibilità è una speranza.

### Definizione

Un ricambio è un componente pronto a sostituirne uno guasto: disco, alimentatore, modulo di memoria. Un contratto di manutenzione dice chi interviene, in quante ore, su quali apparati, con quali pezzi. Il tempo di ripristino promesso non può essere più corto di ciò che il contratto e i ricambi consentono.

### Nel dettaglio

Si tiene in casa ciò che si rompe spesso e senza cui il servizio non parte: un disco identico a quelli dell'array, un alimentatore del server che non ha il secondo. Non si tiene «un po' di hardware vario». Il disco di ricambio va provato, perché un disco fermo da anni in un cassetto può essere già morto. La lista è scritta e si rivede quando si cambia modello: il ricambio del modello vecchio non entra in quello nuovo.

Il contratto copre la sala e dice l'orario. Un intervento il giorno lavorativo successivo, su un database senza ridondanza, è un RTO di un giorno, anche se la slide dice un'ora. Si allineano i due numeri, o si mette la ridondanza che rende accettabile l'attesa. Si sa chi apre la chiamata, di notte, e il numero non è nella memoria di una persona sola.

I ricambi non sono un deposito di dati. Un disco sostituito, che conteneva dati, segue la cancellazione già prevista prima di uscire. Il disco nuovo entra vuoto.

### Esempio

L'array ha un disco di scorta già inserito e un secondo disco in armadio, dello stesso modello, provato un anno fa. Il contratto interviene in quattro ore, in orario di sala presidiata. L'RTO del database, che è ridondato, è compatibile con quelle quattro ore per il pezzo non ridondato che resta, l'array a un solo controllore: o si accetta, e l'RTO è onesto, o si toglie quel singolo punto. La chiamata di notte è una procedura appesa in sala, non un numero nel telefono di una persona in ferie.

### In sede di prova

Il pezzo e la persona fanno il tempo di ripristino. Lista corta e provata. Contratto allineato all'RTO. Il disco uscito si cancella. Il numero di chiamata è scritto.

### Errori da evitare

- Promettere un'ora di ripristino con un contratto «il giorno dopo».
- Un cassetto di ricambi di modelli che non ci sono più.
- Un solo numero di telefono, privato, per aprire la chiamata.

### Approfondire

- [Disponibilità](https://it.wikipedia.org/wiki/Disponibilit%C3%A0)
- [Server](https://it.wikipedia.org/wiki/Server)

## Quando una GPU non serve

**Prove:** seconda prova gruppo 1, orale
**Tag:** GPU, dimensionamento, server
**Semaforo:** rosso

### Inquadramento

Voce di contorno, utile se in un preventivo compare una scheda grafica potente per un'applicazione di prenotazioni o per «fare intelligenza artificiale». Si dice a quale lavoro serve e a quale no.

### Definizione

Un processore grafico esegue moltissime operazioni semplici in parallelo. Serve al calcolo di quel tipo: addestrare o far girare certi modelli, elaborare immagini in grande quantità. Non accelera una transazione su un database, una pagina web, un firewall, un file server.

### Nel dettaglio

Il collo di bottiglia di un'applicazione di ente sta nel disco, nella rete, nei lock del database, nel codice che aspetta. Una GPU lì è spenta e costa alimentazione e raffreddamento, che in sala sono il vincolo vero. Prima di inserirla si nomina il calcolo parallelo che la terrebbe occupata, con una misura. «Potrebbe servire per l'AI» non è una misura. Se l'uso previsto è un riassunto ogni tanto su un servizio esterno, la GPU in sala non entra in quel percorso.

Quando serve, entra nel dimensionamento con i suoi watt, il suo calore e il suo driver, che è un software da aggiornare. Una GPU ferma da un anno perché il driver non è stato tenuto è un costo, non una capacità. Si decide anche chi la usa: un processo, un account, una coda. Una GPU condivisa senza coda diventa il posto in cui un lavoro di prova blocca quello di esercizio.

In orale la frase che chiude è: si dimensiona il collo di bottiglia che si è misurato. La GPU non è un segno di serietà dell'architettura.

### Esempio

Il portale di prenotazione ha CPU, memoria, dischi e rete dimensionati sul numero di richieste. Nessuna GPU. Un progetto di classificazione di immagini, se un giorno ci fosse, avrebbe una macchina a parte, con il calore contato nel condizionamento e una coda di lavori, e non si installerebbe «già ora» dentro il server del database.

### In sede di prova

Serve al calcolo parallelo misurato. Non serve a database, pagine, firewall. Costa watt e calore. Senza un lavoro, non si compra.

### Errori da evitare

- Metterla nel server del database per completezza.
- Giustificarla con un uso di intelligenza artificiale non ancora deciso.
- Ignorare il calore in una sala già al limite.

### Approfondire

- [CPU](https://it.wikipedia.org/wiki/CPU)
- [Server](https://it.wikipedia.org/wiki/Server)

## Il dato che non può andare in un centro lontano

**Prove:** seconda prova gruppo 1, orale
**Tag:** edge, latenza, sede
**Semaforo:** rosso

### Inquadramento

Voce laterale. Serve a non usare «edge» come sinonimo di moderno. Si descrive il caso in cui un po' di calcolo sta vicino alla sede perché il dato o il tempo non consentono il viaggio.

### Definizione

L'elaborazione al bordo tiene un lavoro vicino a dove il dato nasce: una sede, un varco, una sala. Si usa quando il tempo di andata e ritorno verso il centro non è accettabile, o quando il collegamento non c'è sempre, o quando il dato non deve uscire. Il resto, ciò che può aspettare e può viaggiare, sta al centro, dove si amministra meglio.

### Nel dettaglio

Un controllo di accesso al varco, che deve aprire una porta anche se la sede è isolata, tiene in locale l'elenco minimo e la decisione, e riallinea dopo. Un backup che può partire di notte non ha bisogno del bordo: ha bisogno di banda e di una finestra. Mettere server in ogni sede «per essere edge» moltiplica le sale da proteggere, da aggiornare e da spegnere bene. Ogni bordo è una piccola sala, con gli stessi doveri, in formato ridotto.

Si decide che cosa resta al bordo quando il collegamento cade. Se la risposta è «nulla», il bordo non serve e si tiene un servizio centrale con un collegamento ridondato. Se la risposta è «il varco apre per le persone già note», quell'elenco, la sua freschezza e il suo aggiornamento sono il progetto. Un elenco vecchio di un anno al bordo è un varco che conosce chi non lavora più lì.

In un tema ordinario di applicazione multiutente il bordo non compare. L'applicazione sta in un centro, gli utenti arrivano in rete. Lo si dice, così la commissione vede che l'esclusione è una scelta.

### Esempio

I varchi di una sede distaccata tengono l'elenco degli accrediti del giorno e aprono anche se il collegamento con il centro cade. La sera, o appena il collegamento torna, gli esiti di ingresso salgono al centro. L'applicazione di prenotazione delle sale, invece, sta solo al centro: se il collegamento cade, si prenota dopo, non si installa un server di sale in ogni palazzo.

### In sede di prova

Bordo solo se il tempo, il collegamento o il dato lo impongono. È una piccola sala. L'elenco locale ha una freschezza. Il tema ordinario può farne a meno, e lo dice.

### Errori da evitare

- Chiamare edge un server centrale con un nome nuovo.
- Replicare una sala completa in ogni sede senza un requisito.
- Lasciare al bordo un elenco di accessi che non scade.

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Latenza](https://it.wikipedia.org/wiki/Latenza)

## Dimensionare l'UPS in watt, non a sentimento

**Prove:** seconda prova gruppo 1, orale
**Tag:** UPS, watt, autonomia
**Semaforo:** verde

### Inquadramento

La domanda prende il gruppo di continuità e chiede il numero. Quanti minuti, e rispetto a quale carico. Senza il carico, i minuti non significano nulla.

### Definizione

L'autonomia è il tempo per cui le batterie reggono un carico dato. Il carico si misura in watt, sommandolo degli apparati che devono restare accesi per spegnersi bene o per tenere il servizio finché parte il generatore. Un UPS scelto sui soli volt-ampere di targa, senza misurare, o è enorme o si spegne prima.

### Nel dettaglio

Si sommano i nodi che servono allo spegnimento ordinato: storage, un nodo di database, la rete minima per raggiungerlo, la consolle. Non tutta la sala, se il piano è spegnere. Si applica un margine, perché le batterie invecchiano e il carico cresce. Si verifica a banco, una volta l'anno, con il carico vero o con un carico di prova: l'autonomia di targa dopo quattro anni non è l'autonomia di oggi. La prova si fa in una finestra, con il generatore o con lo spegnimento già pronto, non un venerdì a sorpresa.

Se c'è un generatore, l'UPS deve tenere i secondi o i minuti dell'avvio del generatore, non un'ora. Se non c'è, l'UPS deve tenere il tempo dello spegnimento ordinato, e quel tempo si misura spegnendo, non si stima. I due piani sono diversi e si scrive quale dei due è in sala.

Il condizionamento entra nel conto se, senza di lui, in quei minuti la sala supera la temperatura. Un UPS che tiene i server e non i ventilatori può essere una scelta, ed è esplicita. Tacitamente, d'estate, è un surriscaldamento durante «l'autonomia».

### Esempio

Il piano è spegnere in otto minuti se il generatore non parte. Il carico misurato di storage, database e rete è noto, il margine c'è, la prova dell'anno scorso ha retto dodici minuti. Si ritesta dopo l'aggiunta di un nodo, perché il numero vecchio non vale. Il condizionamento in quei minuti è nel piano, non spento. Nel tema si scrive il piano, non il modello delle batterie.

### In sede di prova

Minuti rispetto a un carico misurato, margine per l'invecchiamento, prova annuale, piano di spegnimento o di attesa del generatore detti in modo esplicito, il calore entra nel piano.

### Errori da evitare

- Dire «abbiamo un UPS» senza minuti e senza carico.
- Non riprovare dopo aver aggiunto macchine.
- Tenere i server e perdere il condizionamento senza saperlo.

### Approfondire

- [Gruppo di continuità](https://it.wikipedia.org/wiki/Gruppo_di_continuit%C3%A0)
- [Gruppo elettrogeno](https://it.wikipedia.org/wiki/Gruppo_elettrogeno)

## Disco sottile: lo spazio promesso e lo spazio vero

**Prove:** seconda prova gruppo 1, orale
**Tag:** thin provisioning, storage, capacità
**Semaforo:** giallo

### Inquadramento

La domanda chiede come mai la somma dei dischi delle macchine superi il disco dello storage, e che rischio sia. È lecito, se qualcuno guarda il consumo vero.

### Definizione

Il provisioning sottile assegna a una macchina uno spazio logico grande e occupa sullo storage solo i blocchi scritti. Permette di non comprare subito il picco di tutte le macchine. Il giorno in cui molte macchine scrivono insieme fino al massimo, lo spazio fisico finisce, e finisce per tutte, non per una.

### Nel dettaglio

Si tiene una soglia sull'occupazione fisica, con un margine per la crescita di una settimana, non di un'ora. L'allarme lascia il tempo di aggiungere dischi o di cancellare. Un allarme al novantanove per cento è una constatazione. Si sa quali volumi crescono: i registri, i backup lasciati sullo stesso storage dei dati, le macchine di prova. I backup sullo stesso pool che devono salvare sono il modo più rapido di riempirlo. Stanno altrove.

Cancellare file dentro la macchina non restituisce sempre i blocchi allo storage. Dipende dal sistema. Un amministratore che «libera» spazio nel sistema operativo e non lo vede tornare nello storage sta osservando questo. La restituzione va fatta in modo esplicito, e non si conta su di lei durante un incidente.

Nel dimensionamento si scrive lo spazio fisico, lo spazio logico promesso e il rapporto. Un rapporto alto è una scommessa sulla non contemporaneità delle scritture. La scommessa si rivede se le macchine fanno tutte il backup alla stessa ora.

### Esempio

Lo storage ha venti terabyte fisici. Le macchine ne vedono quaranta sommati, e ne usano dodici. L'allarme è a quattordici, così c'è margine. I backup vanno su un altro pool. Una macchina di prova, cancellata, non ha restituito i blocchi: si fa la restituzione e i dodici scendono. Nessuno alza il logico a ottanta «tanto è thin» senza alzare la soglia e senza un piano di acquisto.

### In sede di prova

Logico diverso dal fisico, soglia anticipata, i backup non stanno sul pool che devono salvare, cancellare dentro la macchina non libera sempre lo storage, il rapporto si rilegge.

### Errori da evitare

- Sommare i dischi logici e comprarli tutti «per sicurezza», senza dirlo, o il contrario: promettere senza allarme.
- Mettere i backup sullo stesso pool dei dati.
- Scoprire il disco pieno quando tutte le macchine si fermano insieme.

### Approfondire

- [Storage area network](https://it.wikipedia.org/wiki/Storage_area_network)
- [Disco rigido](https://it.wikipedia.org/wiki/Disco_rigido)
