# Area 10 — Progettazione di un’applicazione multiutente

La prima prova dura tre ore e vale fino a 30 punti. Si supera con almeno 18. Il bando chiede la progettazione di un’applicazione informatica multiutente e della sua interfaccia, insieme all’infrastruttura hardware e di rete. Multiutente vuol dire più persone, ciascuna con il proprio accesso e con permessi diversi. La prova chiede un elaborato coerente, non il programma.

### Il filo

Si legge prima l’impostazione: come si apre l’elaborato, e dove si nominano linguaggi, server e database. Poi la scaletta e i tempi delle tre ore, e che disegno fare se non si è grafici. Le tracce svolte, assistenza, sale, archivio e inventario, sono quattro storie sulla stessa ossatura. L’elaborato esteso sull’assistenza è la misura della lunghezza, circa dieci facciate più tre disegni. La traccia dei visitatori allena la minimizzazione dei dati. Lo spunto sulla commissione, con gli altri bisogni di un’assemblea, serve a cambiare i sostantivi senza cambiare i blocchi. La griglia finale è la rilettura.

### Come si risponde

Quindici minuti per sottolineare e numerare. Poi requisiti e schermate, dati e architettura, rete e copie, quattro prove e una rinuncia. I nomi dei disegni sono gli stessi del testo. Un requisito senza un dato, o un server nel testo che nel disegno non c’è, si corregge nell’ultima mezz’ora. Le tecnologie stanno in mezza facciata, dopo i tre livelli, quattro nomi e una ragione.

### Da dove partire

Verde: la scaletta, l’apertura, i linguaggi, una traccia svolta breve e poi l’elaborato esteso, ricopiato a mano una volta e rifatto su una storia diversa. Le altre tracce e lo spunto sono gialli: si fanno dopo aver chiuso un elaborato intero a tempo.

## La scaletta da memorizzare e come usare le tre ore

**Prove:** prima prova
**Tag:** metodo, scaletta, tempi
**Semaforo:** verde

### Inquadramento

Questa voce è il metodo, e si memorizza prima delle storie. Undici blocchi, sempre nello stesso ordine, e un budget dei minuti. Sul foglio, il giorno della prova, i blocchi si scrivono a matita nei primi minuti e si spuntano. Se si è in ritardo si accorciano gli esempi, non si saltano rete, sicurezza o dati. La scaletta si allena rifacendola su una traccia nuova, non rileggendola.

### Definizione

L’elaborato è un progetto motivato, non un catalogo di tecnologie. Ogni sezione esiste per rispondere a un pezzo della consegna. Se una sezione non si aggancia a un requisito, si taglia. Se un requisito non compare in nessuna sezione, manca un pezzo.

### Le sezioni, sempre nello stesso ordine

1. Obiettivo e confini. Che cosa il sistema fa, per chi, e che cosa non fa. Le esclusioni impediscono di promettere troppo.
2. Attori e ruoli. Pochi ruoli, con una frase ciascuno su ciò che possono fare.
3. Requisiti funzionali numerati e requisiti non funzionali misurabili. Più un vincolo, se c’è: identità dell’ente, niente cloud non qualificato, orari.
4. Interfaccia. I percorsi delle schermate principali, non un disegno artistico. Errori e conferme.
5. Dati. Entità, chiavi, cardinalità, un vincolo che non sia la sola chiave, cenni allo storico.
6. Architettura software. Presentazione, logica, dati. Dove sta il controllo dei permessi. API principali, se si usa il web.
7. Infrastruttura hardware e di rete. Zone, server, firewall, flussi con i protocolli.
8. Sicurezza. Autenticazione, autorizzazione, cifratura in transito, backup, amministrazione.
9. Continuità. RPO, RTO, che cosa è ridondato e che cosa no, in modo onesto.
10. Verifica. Quattro casi, di cui almeno uno negativo.
11. Motivazioni. Mezza pagina: perché relazionale, perché questa rete, perché questo livello di disponibilità.

### I tempi

Quindici minuti: leggere la traccia, sottolineare i sostantivi, scrivere la scaletta con i requisiti numerati a matita. Non si disegna ancora.

Sessanta minuti: requisiti, ruoli, interfaccia in parole e uno schema di schermate.

Quarantacinque minuti: dati e architettura, con il disegno a tre livelli.

Quaranta minuti: rete, sicurezza, continuità, allineati al disegno. Se nel testo ci sono due server e nel disegno uno, si corregge ora.

Venti minuti: verifica e motivazioni. Dieci minuti: rilettura cercando la contraddizione e il requisito orfano.

Se si è in ritardo si accorciano gli esempi, non si saltano rete o sicurezza. Sono nella frase del bando.

### Come si scrive

Frasi brevi, termini tecnici usati una volta nel senso giusto, poi riusati nello stesso senso. «Server» da solo non basta: server applicativo, o database, o host fisico. I disegni hanno una legenda. I requisiti hanno un numero e, più avanti, quel numero si richiama.

Si dichiara ciò che non si sa dimensionare. «Il numero di nodi si conferma dopo una misura del carico; in partenza si prevedono due nodi applicativi per non avere un singolo punto di guasto.» È più solido di un numero inventato di transazioni al secondo.

### Errori da evitare

- Partire dalla tecnologia («useremo Kubernetes») e cercare dopo un problema a cui applicarla.
- Dimenticare i dati, o dimenticare la rete.
- Un solo ruolo «utente» in un sistema che la traccia descrive con persone diverse.
- Controlli solo nell’interfaccia.

### Svolgimento da consegnare
La prima prova non è un questionario. È un solo progetto, da scrivere e disegnare in tre ore, fino a trenta punti, superato con almeno diciotto. Mezza pagina non può bastare, e nemmeno un elenco di tecnologie. Un elaborato che riempie il tempo ha circa otto-dieci facciate scritte a mano, più tre disegni. Il testo lungo che sta in questa stessa area, «Elaborato esteso», è un esempio di quella lunghezza sulla traccia delle richieste di assistenza. Non va mandato a memoria. Va smontato e rifatto su una traccia nuova, tenendo i blocchi.

Il tempo si divide prima di scrivere la bella copia. Quindici minuti per leggere, sottolineare i sostantivi e numerare i requisiti a matita. Un'ora per ruoli, requisiti e interfaccia. Tre quarti d'ora per i dati e l'architettura. Quaranta minuti per rete, sicurezza e continuità, allineate al disegno. Venti minuti per quattro casi di prova e le motivazioni. Dieci minuti per cercare la contraddizione: un attore che nel testo può una cosa e nel disegno un'altra, un database pubblicato, un requisito senza dati. Se si è in ritardo si accorciano gli esempi, non si saltano la rete o la sicurezza. Sono nella frase del bando.

Ogni facciata ha un lavoro. La prima dice che cosa il sistema fa, per chi, e che cosa non fa. Le esclusioni impediscono di promettere l'inventario dentro un sistema di prenotazione. La seconda e la terza sono i requisiti numerati, funzionali con un attore e un verbo, non funzionali con un numero: un tempo di risposta, un RPO, un RTO, una misura di accesso. La quarta è l'interfaccia, due percorsi e un errore. La quinta e la sesta sono le entità, con chiavi, cardinalità e un vincolo che l'interfaccia da sola non può garantire, più lo storico che non si cancella. La settima è l'architettura, con la frase sul controllo che sta sul server. L'ottava è la rete a zone. La nona è sicurezza e copie. L'ultima è la prova e il motivo di una rinuncia. Ciò che non si è fatto, e perché, mostra giudizio quanto ciò che si è fatto.

I tre disegni si rifanno a mano, grandi, con i nomi uguali al testo. Le schermate sono rettangoli con i campi obbligatori e i pulsanti. I dati sono rettangoli con la chiave sottolineata e la cardinalità sulla linea. La rete è una sequenza di zone, non una nuvola. Sulle frecce si scrive il protocollo. La freccia che non c'è, dal browser al database, si può anche scrivere come nota: chi corregge vede che è una scelta e non una dimenticanza.

```disegno
titolo: Budget delle tre ore, da tenere sul bordo del foglio
passo: 0-15 min | Sostantivi, ruoli, requisiti numerati a matita. Non si disegna ancora.
passo: 15-75 min | Requisiti e due percorsi di interfaccia.
passo: 75-120 min | Entità, chiavi, vincolo di dominio, architettura.
passo: 120-160 min | Zone di rete, sicurezza, RPO e RTO coerenti con il disegno.
passo: 160-180 min | Quattro casi di prova, una rinuncia motivata, rilettura dei nomi.
```


### Nel dettaglio

Le tre ore si dividono prima di sedersi, e la divisione si rispetta anche quando un pezzo appassiona. Venti minuti: leggere la traccia, sottolineare il vincolo difficile, scrivere in brutta l’obiettivo, due esclusioni, i ruoli. Se il vincolo difficile non si è capito, questi venti minuti sono il momento di capirlo, non l’ultima mezz’ora. Quarantacinque minuti: requisiti numerati e le due schermate, quella felice e quella di rifiuto. Quarantacinque minuti: i dati, con le chiavi e la frase sulla transazione che realizza il vincolo. Quarantacinque minuti: architettura, rete, tecnologie nominate qui e solo qui. Venti minuti: sicurezza, copie, prove, una rinuncia. Dieci minuti: rileggere solo le contraddizioni. L’ordine si può spostare di dieci minuti. Non si può cominciare dalle tecnologie.

Il vincolo difficile è quello che, se violato, rende il sistema sbagliato anche con un’architettura elegante. Due persone che prendono lo stesso ticket. Due riunioni nella stessa sala alla stessa ora. Un atto che dopo la scadenza non si modifica. Sala e interprete che si prenotano insieme o niente. Si scrive il vincolo in una riga, in brutta, e ogni sezione successiva deve essere compatibile con quella riga. I dati devono poterlo esprimere. La transazione deve garantirlo. Una prova deve tentare di violarlo. Se una sezione non tocca il vincolo, o è una sezione di contorno, e sta corta, o si è dimenticato di collegarla.

La rinuncia si scrive apposta. Un solo nodo applicativo, se l’ente è piccolo, e il fermo accettato. Nessuna app mobile. Nessuna firma qualificata, se il tema non la chiede. La rinuncia convince più di una funzione abbozzata. Due rinunce, non dieci. E ogni rinuncia ha il motivo in una frase: fuori ambito, oppure costo non giustificato dal requisito.

La rilettura finale non cerca l’aggettivo. Cerca quattro coerenze. Il ruolo che chiude, nominato all’inizio, è lo stesso nei requisiti e nella prova. Lo stato che esiste nello schema esiste nel disegno degli stati. La porta del database, chiusa nel disegno di rete, non è aperta in una frase della sicurezza. Il numero di nodi detto nell’architettura è quello detto nella disponibilità. Una contraddizione corretta in brutta, all’ultimo, vale più di una pagina nuova.

### Approfondire

- [Sistema client/server](https://it.wikipedia.org/wiki/Sistema_client/server)
- [Accessibilità dei servizi](https://www.agid.gov.it/it/design-servizi/accessibilita)

## Che cosa disegnare se non si è grafici

**Prove:** prima prova
**Tag:** disegni, wireframe, rete, ER
**Semaforo:** giallo

### Inquadramento

I disegni dell'elaborato sono rettangoli, frecce e nomi. Schermate, dati, zone di rete. Il tratto conta meno della coerenza con il testo. Sul foglio si lascia spazio largo, si scrive la legenda, e si usa lo stesso nome che nel paragrafo. Un disegno illeggibile non si recupera con una frase. Questa voce si prova una volta a mano, a grandezza di facciata, prima di rifare l'elaborato esteso.

### Definizione

I disegni dell’elaborato sono schemi di ragionamento. Devono essere rifatti da chi corregge senza chiedere spiegazioni a voce. Tre disegni bastano: le schermate del percorso principale, il modello dei dati, la rete.

### Le schermate

Per ogni schermata, un rettangolo con un titolo. Dentro, i campi con il nome, un asterisco su quelli obbligatori, e i pulsanti con il verbo. Sotto o di lato, una riga: chi la vede. Si collegano le schermate con frecce: dalla lista al dettaglio, dal dettaglio alla conferma. Si disegna anche la schermata di errore del caso più importante, anche solo con la frase che l’utente legge. Due percorsi completi valgono più di dieci rettangoli vuoti.

Non si usano colori come unica informazione. Si scrive «aperto» oltre, eventualmente, a un segno.

### I dati

Rettangoli per le entità, il nome della chiave primaria sottolineato, le chiavi esterne indicate con FK, le cardinalità sulle linee: 1, N. Una nota a margine per il vincolo più importante, quello che il DBMS deve garantire e che l’interfaccia da sola non garantisce. Se lo spazio finisce, ci si ferma a cinque entità. Un sesto rettangolo illeggibile è un danno.

### La rete

Da sinistra: utenti, poi firewall, poi le zone. Ogni zona è un riquadro con dentro i nodi. Sulle frecce il protocollo e la direzione. Il database non sta nel riquadro di Internet. L’amministrazione ha un percorso proprio, anche se è una freccia sola etichettata «VPN, MFA, SSH». Una legenda di cinque righe se i simboli non sono ovvi.

### Coerenza

Si rileggono i tre disegni insieme. L’attore del caso d’uso è il ruolo dei requisiti. L’entità del disegno è la tabella citata nel testo. Il flusso HTTPS del disegno è il flusso descritto nella sicurezza. I nomi identici sono il modo più semplice di sembrare padroni del progetto.


### Nel dettaglio

Si disegnano tre cose, e ciascuna sta in un rettangolo o in una riga, senza prospettiva. Le schermate sono riquadri con i campi scritti dentro, in ordine, e un pulsante con il verbo vero: prendi in carico, non ok. Sotto il riquadro, una riga dice che cosa succede se il server rifiuta, e dove compare il messaggio. Due schermate bastano. La terza si aggiunge solo se il tema ha un secondo attore con un lavoro diverso, per esempio il responsabile che vede la coda e non il modulo del richiedente.

I dati sono tabelle disegnate come griglie piccole: nome della tabella, chiave primaria sottolineata, chiavi esterne con una freccia verso la tabella puntata, e le due colonne che servono al vincolo. Non si disegnano tutte le colonne. Si disegnano quelle che, se mancassero, il vincolo non si potrebbe nemmeno scrivere. Accanto, una frase sulla transazione. Il disegno dei dati senza quella frase è un inventario.

La rete è una pila di rettangoli, dall’alto in basso, che è il verso della richiesta: postazione, firewall, proxy, nodi, database. Su ogni freccia, protocollo e porta. Una zona si segna con un tratteggio intorno a due rettangoli, e il nome della zona di fianco. La freccia che non c’è, dal browser al database, si può scrivere come nota sotto, «nessuna freccia diretta», perché l’assenza in un disegno non si vede.

Coerenza significa che le parole sono le stesse nei tre disegni e nel testo. Se il testo dice ticket, il disegno non dice richiesta. Se il testo dice due nodi, il disegno non ne mostra uno. Si lascia un quarto di pagina bianco sotto ogni disegno, e lì si scrivono le note che non stanno nelle forme. Un disegno pieno di note interne è illeggibile. Un disegno muto, senza porte e senza chiavi, è un’illustrazione. La commissione guarda se dal disegno si ricostruisce la regola.

### In sede di prova

Disegnare in matita, passare in penna solo alla fine, lasciare margine per una correzione. Un disegno sbagliato corretto e spiegato è meglio di un disegno sbagliato in bella copia.

### Errori da evitare

- Frecce senza etichetta.
- Uno schema di rete fatto solo di nuvole.
- Dati e schermate che usano parole diverse per la stessa cosa, «pratica» di qua e «ticket» di là, senza dire che sono la stessa entità.

## Traccia svolta: richieste di assistenza

**Prove:** prima prova
**Tag:** traccia, ticket, help desk
**Semaforo:** verde

### Inquadramento

È la storia più riusabile: qualcuno apre, qualcuno prende in carico, uno solo vince la gara, i ruoli vedono cose diverse. Si legge per impadronirsi dei blocchi, poi si chiude e si riscrive. Sul foglio il vincolo da non perdere è la presa in carico unica, in transazione. I sostantivi, il giorno della prova, saranno altri. La traccia lunga, più avanti, è la stessa storia scritta per dieci facciate.

### La consegna

Progettare un’applicazione web multiutente con cui il personale di un ente segnala richieste di assistenza informatica, i tecnici le prendono in carico e i responsabili osservano i tempi. Descrivere l’interfaccia, i dati, l’architettura, l’infrastruttura hardware e di rete, la sicurezza e la continuità.

### Obiettivo e confini

Il sistema sostituisce il foglio e la posta usati per chiedere assistenza. Un dipendente apre una richiesta, segue il suo stato e risponde ai chiarimenti. Un tecnico del gruppo competente la prende in carico e la chiude. Un responsabile legge i tempi, non modifica le richieste altrui. Non è un sistema di inventario, non è la posta istituzionale, non gestisce gli acquisti. Queste esclusioni vanno scritte.

### Ruoli

Dipendente: apre richieste e vede solo le proprie, aggiunge commenti, conferma la chiusura. Tecnico: vede la coda del proprio gruppo, prende in carico, chiede informazioni, propone la chiusura. Responsabile: vede gli indicatori del proprio settore e le richieste del settore, non cambia gli stati. Amministratore: gestisce gruppi, categorie e utenti tecnici. È un ruolo dato a poche persone, non a tutti i tecnici.

### Requisiti

F1. Il dipendente crea una richiesta con oggetto, descrizione e categoria. Il sistema assegna un numero e lo stato «aperta». F2. Il dipendente consulta l’elenco delle proprie richieste e il dettaglio, con i commenti. F3. Il tecnico prende in carico una richiesta aperta del suo gruppo; da quell’istante risulta assegnata a lui. F4. Il tecnico e il richiedente si scambiano commenti. F5. Il tecnico propone la chiusura; la richiesta risulta chiusa, e il richiedente può riaprirla entro cinque giorni con una motivazione. F6. Il responsabile ottiene, per un intervallo di date, il numero di richieste aperte e il tempo medio di chiusura del settore.

N1. In orario d’ufficio la ricerca dell’elenco risponde entro tre secondi su diecimila richieste. N2. Il servizio è disponibile dalle 8 alle 18 dei giorni lavorativi; fuori da quell’orario l’RTO è di quattro ore nel giorno lavorativo successivo. N3. RPO di un’ora. N4. Ogni funzione è usabile da tastiera. V1. L’identità è quella già in uso nell’ente, non una password locale.

### Interfaccia

Percorso del dipendente: dopo l’accesso, elenco delle proprie richieste con filtro per stato; pulsante «nuova richiesta»; modulo con oggetto e descrizione obbligatori e categoria scelta da un elenco; conferma con il numero. Il dettaglio mostra stato, cronologia e una casella di commento. Gli errori di validazione compaiono sul campo. Il dipendente non vede il pulsante «prendi in carico».

Percorso del tecnico: coda del gruppo, ordinata per data; dettaglio; azione «prendi in carico», rifiutata con un messaggio se un collega l’ha appena presa. Il responsabile ha una pagina di indicatori, con inizio e fine obbligatori, e nessun pulsante di cambio stato.

Il testo dei commenti è mostrato come testo, non interpretato come pagina. Gli allegati, se si decide di includerli, hanno una dimensione massima e non sono eseguiti: in questa traccia si possono escludere e dirlo, per non allargare l’ambito. È una scelta legittima.

### Dati

Utente(id, identità esterna unica, nome, gruppo_id, attivo). Gruppo(id, nome). Categoria(id, nome, gruppo_id). Richiesta(id, numero univoco, richiedente_id, categoria_id, oggetto, descrizione, stato, tecnico_id nullable, aperta_il, chiusa_il). Commento(id, richiesta_id, autore_id, testo, creato_il). Evento(id, richiesta_id, attore_id, tipo, quando): prende in carico, chiusura, riapertura. Serve all’audit e ai tempi.

Cardinalità: un gruppo ha molti utenti e molte categorie; una richiesta ha un richiedente e una categoria; una richiesta ha molti commenti. Lo stato ammette solo i valori previsti. tecnico_id, se presente, deve riferire un utente del gruppo della categoria. La riapertura oltre cinque giorni è un controllo dell’applicazione, oltre che un dato: si conserva la data di chiusura.

Non si cancella la richiesta chiusa. L’utente che lascia l’ente si disattiva, così lo storico conserva il nome.

### Architettura

Browser, reverse proxy, due nodi applicativi, database relazionale. Il proxy termina TLS e inoltra ai nodi. I nodi sono equivalenti: la sessione sta in un deposito condiviso o in un token, non nella memoria di un solo nodo. Ogni operazione che cambia lo stato controlla sul server il ruolo, il gruppo e lo stato attuale, dentro una transazione. La presa in carico condiziona l’aggiornamento allo stato «aperta»: se un altro ha già scritto, la transazione non sovrascrive e l’utente riceve un conflitto.

API essenziali: POST `/richieste`, GET `/richieste` con filtri secondo il ruolo, POST `/richieste/{id}/presa-in-carico`, POST `/richieste/{id}/commenti`, POST `/richieste/{id}/chiusura`, GET `/indicatori`. I codici: 201 alla creazione, 403 se il ruolo non basta, 409 se lo stato è cambiato.

### Rete e hardware

Rete uffici verso il firewall interno, VLAN dei server con proxy e nodi, VLAN dati con il solo database, VLAN di gestione. HTTPS dagli uffici al proxy. Dal proxy ai nodi, traffico interno. Dal nodo al database, una sola porta, solo dagli indirizzi dei nodi. Backup su un sistema che i nodi non possono cancellare. Gli host fisici sono almeno due, in modo che un nodo applicativo e il database non dipendano dallo stesso singolo server senza che sia dichiarato. In una sala piccola: due host virtuali in cluster e storage con RAID non sostitutivo del backup. Amministrazione via VPN con MFA, poi SSH, non dalla VLAN uffici verso il database.

### Sicurezza e continuità

Autenticazione sull’identità dell’ente. MFA per amministratori e per chi entra da VPN. Autorizzazione a ogni richiesta, filtrando per richiedente o per gruppo, non solo per il numero. Query parametrizzate. TLS fino al proxy. Dischi del database cifrati. Log degli accessi negati e delle prese in carico, su un server di log distinto. Backup almeno orario dei log di transazione, per l’RPO di un’ora, e una copia immutabile notturna. Prova di restore trimestrale. Un solo nodo applicativo caduto non ferma il servizio. Il guasto del database si copre con la replica se si vuole un RTO breve; con il solo backup, l’RTO di quattro ore va dichiarato come obiettivo da verificare con una prova, non come automatismo.

### Verifica

Caso normale: un dipendente apre una richiesta e la ritrova in elenco. Caso limite: oggetto vuoto, nessun inserimento. Caso di concorrenza: due tecnici prendono la stessa richiesta, uno riceve 409. Caso di autorizzazione: un dipendente cambia il numero nell’indirizzo e riceve 403, e la query non restituisce la richiesta altrui.

### Motivazioni

Relazionale, perché stati, ruoli e report sono legami e vincoli. Due nodi, perché l’applicazione non ha stato locale. Database unico con backup, perché il volume non giustifica un disegno più complesso e l’RTO dichiarato è di ore, non di secondi. Identità dell’ente, per non creare un altro archivio di password. Allegati esclusi, per contenere l’ambito: si potranno aggiungere senza cambiare i ruoli.

### Errori da evitare su questa traccia

- Il responsabile che «vede tutto e può tutto».
- Nessuna gestione della presa in carico contemporanea.
- Il database nella stessa zona dei PC.


### Nel dettaglio

Il vincolo di questa traccia è la presa in carico unica. Due tecnici aprono la stessa richiesta nello stesso minuto. Il sistema ne accetta una e rifiuta l’altra, e il richiedente non resta con due tecnici che si credono entrambi incaricati. Per realizzarlo servono uno stato e una versione. Lo stato parte aperto. L’operazione prendi in carico, in una transazione, legge la riga, verifica che lo stato sia aperto e che la versione sia quella letta, scrive lo stato preso, il tecnico, l’istante, e incrementa la versione. Se fra la lettura e la scrittura la versione è cambiata, la transazione non scrive e l’applicazione dice che la richiesta è già stata presa, da chi, se il ruolo può saperlo.

Gli stati leciti si elencano e i passaggi anche. Aperto, preso, in attesa di un chiarimento, risolto, chiuso. Il richiedente apre e aggiunge chiarimenti solo quando lo stato è in attesa. Il tecnico prende, chiede un chiarimento, propone la risoluzione. Il richiedente conferma la chiusura, oppure un tempo stabilito chiude in silenzio, e questa seconda regola, se si adotta, si scrive, perché cambia il significato di chiuso. Il responsabile vede i tempi e può riassegnare, e la riassegnazione è un passaggio registrato, non un aggiornamento muto. Ogni passaggio scrive una riga di storia: chi, quando, da quale stato, a quale.

I dati minimi sono utente, ruolo, ticket, storia dei passaggi, commento. L’allegato, se c’è, sta fuori dal database, e la riga tiene il riferimento e il permesso di scaricarlo, che è lo stesso permesso di vedere il ticket. Un tecnico vede i ticket del proprio gruppo. Un richiedente vede i suoi. Questa frase, detta sui dati e ripetuta sulla prova, è la riservatezza del tema.

La prova che va scritta per intero tenta la doppia presa. Due sessioni, lo stesso ticket aperto, la prima prende, la seconda riceve il rifiuto, e nel registro c’è un solo incaricato. Le altre prove si elencano: il richiedente che prova a chiudere da solo, il tecnico di un altro gruppo che indovina l’identificativo, il ripristino da una copia. Quattro prove, una sola raccontata passo per passo.

## Traccia svolta: prenotazione delle sale

**Prove:** prima prova
**Tag:** traccia, sale, concorrenza
**Semaforo:** giallo

### Inquadramento

Il vincolo è la sovrapposizione: stessa sala, intervalli che si toccano, una sola prenotazione che riesce. È la storia da rifare quando la traccia parla di risorse scarse. Sul foglio si disegna l'intervallo e si scrive la condizione di rifiuto. Si porta dietro, dalla traccia dell'assistenza, ruoli, server e copie, e si cambia solo il vincolo. Due sale prenotate senza un controllo sul server sono l'errore da cercare in rilettura.

### La consegna

Progettare un’applicazione multiutente per consultare la disponibilità delle sale riunioni di un ente, prenotarle, annullarle ed evitare le sovrapposizioni. I responsabili vedono i report di utilizzo. Descrivere interfaccia, dati, architettura, rete, sicurezza e continuità.

### Obiettivo, ruoli, confini

Il sistema fa prenotare una sala a un dipendente, impedisce due conferme sovrapposte, consente l’annullamento a chi ha prenotato e a un responsabile di piano, e mostra le ore utilizzate. Non assegna catering, non gestisce le pulizie, non prenota le auto. Ruoli: dipendente, responsabile di piano, amministratore delle anagrafiche sale. Il responsabile può annullare una prenotazione del proprio piano e vedere il report. Non può modificare le sale di un altro piano.

### Requisiti

F1. Consultare le sale e, per una data, gli intervalli già confermati. F2. Prenotare indicando sala, inizio, fine e titolo. Il sistema rifiuta se l’intervallo è invalido, se la sala non esiste, se il dipendente non può usare quella sala, o se l’intervallo si sovrappone a una prenotazione confermata. F3. Annullare una propria prenotazione futura. F4. Il responsabile annulla una prenotazione del proprio piano. F5. Report ore prenotate per sala in un mese.

N1. Il controllo di sovrapposizione è nel database, non solo nella pagina. N2. Disponibilità in orario d’ufficio, RPO di quindici minuti, RTO di quattro ore. N3. Accesso da tastiera. V1. Identità dell’ente.

Il confine di sovrapposizione va deciso e scritto: se una riunione finisce alle 10, un’altra può iniziare alle 10. Il criterio «si toccano ma non si sovrappongono» si dice, altrimenti due analisti lo implementano in modi diversi.

### Interfaccia

Una vista giorno: sale in riga, ore in colonna, occupato e libero scritti, non solo colorati. Selezione di un intervallo libero, modulo con titolo obbligatorio, conferma oppure messaggio «sala già prenotata in tutto o in parte dell’intervallo». Elenco «le mie prenotazioni» con annulla. Il responsabile ha lo stesso calendario del piano e il report mensile. L’amministratore ha una schermata sobria di sale: nome, piano, capienza, attiva.

### Dati

Sala(id, nome, piano_id, capienza, attiva). Piano(id, nome). Prenotazione(id, sala_id, utente_id, inizio, fine, titolo, stato). Lo stato è confermata o annullata. Non si cancella la riga, perché il report e gli abusi di prenotazione-annullamento si leggono sullo storico. Il vincolo di esclusione, nel DBMS, impedisce due confermate della stessa sala con intervalli sovrapposti. L’annullata non entra nel vincolo. Utente come nelle altre tracce, con piano_id se il dipendente è associato a un piano, oppure il diritto di prenotare qualunque sala dell’ente se la traccia non distingue: si sceglie e si scrive.

Transazione: il controllo e l’inserimento sono atomici. Due richieste simultanee sullo stesso intervallo producono una conferma e un rifiuto, anche se entrambe hanno letto «libero» un istante prima.

### Architettura e rete

La stessa architettura a tre livelli della traccia precedente. È voluto: in sede d’esame si riusa un’architettura capita, e si spende il tempo sulla regola di dominio, che qui è la sovrapposizione. API: GET disponibilità, POST prenotazione, POST annullamento, GET report. 409 sul conflitto. Rete a zone, database irraggiungibile dagli uffici, backup immutabile. Due nodi applicativi. Il report legge gli stessi dati; se diventasse pesante, una replica in sola lettura, non un secondo database scritto a mano.

### Sicurezza e continuità

Chi prenota può annullare solo le proprie, finché sono future. Il responsabile solo il suo piano: il server controlla il piano della sala, non il parametro inviato dal browser. TLS, query parametrizzate, account del DBMS senza diritti di amministrazione. Log delle annullamenti del responsabile, perché sono l’azione delicata. Backup dei log di transazione ogni quindici minuti per l’RPO dichiarato. La replica del database è opzionale: con RTO di quattro ore il ripristino da backup può bastare, se è stato provato. Lo si scrive così, senza promettere un secondo sito che non si sa descrivere.

### Verifica e motivazioni

Casi: prenotazione valida; fine precedente all’inizio, rifiuto e nessun inserimento; due POST simultanei, una sola conferma; dipendente che annulla la prenotazione di un collega, 403. Motivazione centrale: il vincolo sta nel DBMS perché l’interfaccia non vede le richieste concorrenti. Il resto dell’architettura è sobrio perché il rischio principale di questa traccia è la doppia prenotazione, non il volume di traffico.

### Errori da evitare su questa traccia

- Il controllo di sovrapposizione solo in JavaScript.
- DELETE fisica che impedisce il report.
- Non decidere se le 10 in punto sono libere.


### Nel dettaglio

Il vincolo è la sovrapposizione. Una sala non ospita due impegni nello stesso intervallo. L’intervallo si rappresenta con inizio e fine, e si decide il confine: la fine è esclusa, così un impegno che finisce alle dieci e uno che inizia alle dieci sono leciti. Senza questa convenzione, scritta, due implementazioni oneste si contraddicono. Il controllo, dentro la transazione, cerca una prenotazione della stessa sala il cui intervallo si interseca, e se non la trova inserisce. L’isolamento deve fare in modo che due controlli contemporanei non passino entrambi. Dirlo in una frase è il punto d’esame. Un vincolo di unicità su una colonna non basta, perché gli intervalli non sono valori uguali.

Si decide che cosa è una sala e che cosa è un impegno. La sala ha un nome, una capienza, un insieme di dotazioni. L’impegno ha sala, inizio, fine, titolo, richiedente, stato. Lo stato serve perché una bozza non deve bloccare la sala, e una prenotazione confermata sì. Se anche le bozze bloccano, si scrive. L’annullamento libera l’intervallo, e resta nella storia, perché il giorno dopo qualcuno chiederà chi aveva prenotato. Cancellare la riga cancella la domanda insieme alla risposta.

Il caso di rifiuto si disegna. Il richiedente vede la sala occupata, con la fascia oraria e senza i dettagli riservati dell’altro impegno, se i dettagli sono riservati. Questa è una scelta di riservatezza da scrivere: l’esistenza dell’impegno è visibile, il motivo forse no. Il responsabile può sbloccare, e lo sblocco è un passaggio con motivo, non un delete.

Le prove. Due prenotazioni sovrapposte di un minuto, rifiutate. Due prenotazioni adiacenti, accettate, perché si è scelta la fine esclusa. Una prenotazione che contiene l’altra per intero, rifiutata: è la sovrapposizione che i confronti sbagliati lasciano passare. Un utente senza ruolo che prenota, rifiutato. Quattro casi, e il terzo è quello che dimostra che l’intervallo si è capito.

## Traccia svolta: archivio di documenti con autorizzazioni

**Prove:** prima prova
**Tag:** traccia, documenti, autorizzazioni
**Semaforo:** giallo

### Inquadramento

Il vincolo è la lettura: la query contiene il diritto, e un identificativo cambiato non restituisce il documento di un altro. È la storia del riservato. Sul foglio si dice se un documento negato risponde 403 o 404, e si motiva. I ruoli sono pochi. Il pubblico, se c'è, è un ruolo con un filtro più stretto, non un'assenza di controllo.

### La consegna

Progettare un’applicazione multiutente per versare, cercare e consultare documenti di un ufficio, con livelli di autorizzazione diversi e accesso remoto sicuro. Descrivere interfaccia, dati, architettura, rete e sicurezza.

### Obiettivo e ruoli

Il sistema conserva documenti già prodotti altrove, con i metadati minimi per ritrovarli, e applica chi può leggerli. Non è un editor di testi e non sostituisce il protocollo generale dell’ente, se esiste: si scrive questa ipotesi. Se un domani l’ente volesse il protocollo, sarebbe un altro ambito. Ruoli: versatore, del proprio ufficio; lettore, sui documenti che una regola gli consente; responsabile d’ufficio, che decide le regole del proprio ufficio; amministratore tecnico, che non legge i documenti riservati solo perché amministra i server. Quest’ultima frase, in un ente, è una scelta di progetto e va detta. L’amministratore di sistema non è automaticamente autorizzato al contenuto.

### Requisiti

F1. Il versatore carica un documento e i metadati: titolo, data, ufficio, classificazione (interno oppure riservato). F2. Ricerca per titolo, intervallo di date e ufficio, limitata ai documenti che il ruolo può vedere. F3. Apertura del documento solo se autorizzati. F4. Il responsabile concede a un utente o a un ufficio il diritto di leggere un documento riservato. F5. Registro delle consultazioni dei riservati: chi, quando, quale documento.

N1. I documenti riservati non sono ottenibili cambiando l’identificativo nella richiesta. N2. Cifratura in transito e a riposo. N3. RPO di un’ora, RTO di otto ore. N4. Accessibilità da tastiera della ricerca e dell’elenco. V1. Accesso remoto solo tramite VPN con MFA, oppure, in alternativa motivata, tramite il proxy pubblicato con MFA. Si sceglie una delle due e si progetta quella. Qui si sceglie la VPN: i documenti riservati non stanno su un sito pubblico.

### Interfaccia

Ricerca con tre filtri e un elenco di titoli, date e classificazione. Il riservato compare nell’elenco solo se l’utente può aprirlo; non si mostra un titolo coperto a chi non ha diritto, perché anche il titolo può essere un dato. Questa è una decisione, e si può scegliere l’opposto se si argomenta: in questo svolgimento non si mostra. Dettaglio con metadati, pulsante di scaricamento, e, per il responsabile, il pannello «chi può leggere». Il versamento è un modulo con file obbligatorio e classificazione obbligatoria, default «interno» visibile, non implicito.

### Dati

Documento(id, titolo, data_doc, ufficio_id, classificazione, versatore_id, nome_file_interno, impronta, versato_il). Il file sta su storage, non nella tabella: la tabella ha il percorso interno e l’impronta SHA-256 per accorgersi di una sostituzione. Diritto(id, documento_id, utente_id nullable, ufficio_id nullable, concesso_da, concesso_il). Un diritto ha o un utente o un ufficio. Consultazione(id, documento_id, utente_id, quando) per i riservati. Ufficio e utente come altrove.

La ricerca non fa `SELECT * FROM documento WHERE id = :id` e poi controlla. La condizione di autorizzazione sta nella query: classificazione interno e stesso ufficio, oppure esiste un diritto. Così un errore nel codice di pagina non «dimentica» il controllo. È il punto tecnico di questa traccia.

### Architettura e rete

Tre livelli. Lo storage dei file è raggiunto solo dal server applicativo, con credenziali proprie, diverse da quelle del database. Il reverse proxy in VPN, non su Internet pubblica. Due nodi applicativi. Database e storage nella zona dati. Backup di entrambi, coerente: un database ripristinato senza i file, o il contrario, non ricostruisce il servizio. Si scrive la procedura: prima i file, poi il database, poi un controllo a campione sulle impronte. Rete: niente pubblicazione, VPN con MFA, zone, amministrazione separata.

### Sicurezza e continuità

Identità dell’ente, MFA sulla VPN. Autorizzazione per oggetto. File serviti attraverso l’applicazione, che registra la consultazione, non attraverso un URL fisso e indovinabile dello storage. Impronta al versamento e, se serve, verifica periodica. Log di concessione dei diritti. Cifratura dei dischi e TLS. Gli amministratori di sistema vedono i log tecnici e non hanno un ruolo applicativo di lettura. Se per un guasto un amministratore deve accedere ai file, è un incidente tracciato, non un uso ordinario. RPO un’ora via log e copie; RTO otto ore perché il ripristino coordinato di file e database si prova due volte l’anno.

### Verifica e motivazioni

Casi: versamento e ricerca da parte di un collega dello stesso ufficio su un interno; utente di un altro ufficio che non vede quel titolo; utente che indovina l’identificativo di un riservato e riceve 403, senza una riga nei risultati; concessione di un diritto e successiva apertura, con riga di consultazione. Motivazione: la difficoltà non è il volume, è la riservatezza. Per questo l’accesso è in VPN, il file non ha un indirizzo pubblico, e il filtro sta nella query.

### Errori da evitare su questa traccia

- Un link diretto al file che aggira l’applicazione.
- L’amministratore tecnico che può aprire ogni riservato «per manutenzione».
- Backup del solo database.


### Nel dettaglio

Il vincolo è che il permesso sta sull’oggetto, non sul menu. Un documento ha un livello, oppure un elenco di uffici che possono leggerlo, e l’applicazione, a ogni lettura e a ogni scaricamento, verifica l’identità contro quell’elenco. L’identificativo del documento nell’indirizzo non è un permesso. La prova è cambiare l’identificativo e ottenere un rifiuto, anche per un utente regolarmente entrato. Il menu mostra solo ciò che l’utente può vedere, e questa è comodità: la stessa regola sta sul server, e questa è sicurezza.

I documenti che escono dall’ufficio hanno una vita diversa da quelli di lavoro. Si distingue il file di lavoro, modificabile, dal documento chiuso, di cui si conserva l’impronta e che non si sostituisce. La sostituzione, se è ammessa, è un nuovo documento collegato, non una sovrascrittura. Per un atto che deve avere data certa, si nomina la marca temporale, e si dice che il backup non dà data certa. Se il tema non chiede valore legale, non si aggiunge la conservazione a norma per ornamento: si dice che i documenti di lavoro restano nell’applicazione per un tempo, e gli atti ufficiali seguono il protocollo dell’ente, che questo sistema non sostituisce.

I dati sono documento, versione, autorizzazione, registro degli accessi. L’autorizzazione ha soggetto, che può essere un ufficio, e azione, leggere o modificare. Una riga per coppia, non una colonna per ufficio. Il registro degli accessi tiene i rifiuti e le letture dei documenti riservati, e sta dove l’amministratore del sistema non lo altera. Senza registro, un accesso indebito di un utente legittimo non si vede.

Le prove. Un utente dell’ufficio giusto legge. Un utente di un altro ufficio, con l’identificativo indovinato, no. Un utente giusto scarica, e il file non è raggiungibile per un percorso diretto saltando l’applicazione. Una versione chiusa non si modifica. Il ripristino di una versione precedente è un’operazione riservata al ruolo, e resta nel registro. Il tema sta in piedi su queste prove anche con una rete disegnata in modo semplice.

## Traccia svolta: inventario dei beni informatici

**Prove:** prima prova
**Tag:** traccia, inventario, beni
**Semaforo:** giallo

### Inquadramento

Il vincolo è sapere chi ha un bene, e non perderne la storia quando la persona cambia ufficio. Si disattiva, non si cancella. Sul foglio l'assegnazione è una riga con una data di inizio e una di fine. È la storia da riusare per la consegna di un dispositivo a un ufficio. Il bene senza un responsabile, o con due assegnazioni aperte, è il caso di prova negativo.

### La consegna

Progettare un’applicazione multiutente per l’inventario dei beni informatici di un ente: registrazione del bene, assegnazione a una persona o a un ufficio, trasferimento, dismissione, e ricerche. Servono interfaccia, dati, architettura, rete e sicurezza.

### Obiettivo, ruoli, confini

Il sistema è la fonte unica su chi ha che cosa. Non è la contabilità economico-patrimoniale e non emette mandati di pagamento: se un codice contabile serve, è un attributo, non un modulo di bilancio. Ruoli: operatore di inventario, che registra e trasferisce; responsabile di ufficio, che vede i beni del proprio ufficio e conferma l’avvenuta consegna; auditor in sola lettura su tutto l’inventario; amministratore delle anagrafiche (tipi di bene, ubicazioni).

### Requisiti

F1. Registrare un bene con tipo, modello, numero di serie univoco, ubicazione, data. F2. Assegnarlo a una persona o a un ufficio. F3. Trasferirlo: l’assegnazione precedente si chiude, la nuova si apre, senza buco e senza sovrapposizione. F4. Dismissione con data e motivo; il bene dismesso non si assegna. F5. Ricerche: beni di una persona, beni di un ufficio, beni non assegnati, storico di un numero di serie.

N1. Il numero di serie è unico fra i beni non dismessi. N2. Lo storico non si cancella. N3. RPO di un giorno, RTO di un giorno lavorativo: l’inventario non è un servizio di sportello in tempo reale, e si motiva così. N4. Due operatori non chiudono in modo incoerente la stessa assegnazione. V1. Uso solo dalla rete interna o da VPN.

### Interfaccia

Scheda bene: dati, stato, assegnazione attuale in evidenza, storico sotto, in ordine di data. Azioni: assegna, trasferisci, dismetti, ciascuna con una conferma che ripete il nome della persona. Ricerca con un solo campo dominante e i filtri. Il responsabile vede l’elenco del proprio ufficio e un pulsante «confermo di aver visto questa assegnazione», se si vuole una quadratura: è un requisito piccolo che mostra il ruolo, e si può numerare F6. L’auditor non ha pulsanti di modifica. L’interfaccia li nasconde e il server rifiuta.

### Dati

Bene(id, tipo_id, modello, seriale, ubicazione_id, stato, registrato_il). Assegnazione(id, bene_id, persona_id nullable, ufficio_id nullable, inizio, fine nullable, operatore_id). Una assegnazione ha o la persona o l’ufficio. Fra le assegnazioni di uno stesso bene non ci sono intervalli sovrapposti, e una sola ha fine nulla: è l’attuale. Il vincolo si può realizzare con una transazione che chiude la precedente e apre la nuova, più un controllo che rifiuta l’operazione se i dati sono cambiati nel frattempo. Dismissione è uno stato del bene e una data, non la cancellazione delle assegnazioni. Persona e ufficio sono anagrafiche; la persona disattivata resta referenziata.

Questo schema è il cuore della traccia. Va disegnato con cura e vale più di un secondo strato di server.

### Architettura, rete, sicurezza, continuità

Architettura a tre livelli, anche con un solo nodo applicativo, perché l’RTO di un giorno lavorativo lo consente: lo si dice, e si dice che il nodo è una macchina virtuale ripristinabile da snapshot e backup, non un PC sotto una scrivania. Se si vuole togliere il singolo punto di guasto senza spendere il tema, due nodi restano una scelta semplice e migliore. Database relazionale. Rete interna, nessuna pubblicazione, VPN per il magazzino decentrato se la traccia lo cita. Ruoli sul server. Il seriale in conflitto risponde 409. Backup notturno immutabile, coerente con l’RPO di un giorno, restore provato. Log delle dismissioni e dei trasferimenti, che sono le azioni che alterano il patrimonio.

### Verifica e motivazioni

Casi: registrazione e assegnazione; secondo inserimento con lo stesso seriale, rifiuto; trasferimento che chiude la data precedente; dismissione e tentativo di nuova assegnazione, rifiuto; auditor che invia comunque una modifica, 403. Motivazione: si è scelto un RTO modesto perché il danno di un fermo di un giorno è limitato, mentre il danno di uno storico cancellato non lo è. Per questo il progetto spende in vincoli e backup, non in un sito gemello.

### Errori da evitare su questa traccia

- Sovrascrivere il nome della persona sull’unica riga del bene, perdendo lo storico.
- Cancellare il bene dismesso.
- Un RTO di pochi minuti non motivato, che impegna un disegno da data center per un inventario.


### Nel dettaglio

Il vincolo è l’unicità del bene e la storia di dove si trova. Un bene ha un identificativo inventariale che non si riusa. Ha uno stato: in magazzino, assegnato, in riparazione, dismesso. Ha, quando è assegnato, una persona o un ufficio, e una data di consegna. La riconsegna chiude l’assegnazione, non cancella la riga: si scrive la data di rientro. Cancellare l’assegnazione toglie la possibilità di sapere chi aveva il portatile il mese in cui è sparito. La storia è il requisito, anche se la traccia parla solo di inventario.

Si impedisce la doppia assegnazione contemporanea. Un bene assegnato non si assegna a un secondo senza un rientro. È un vincolo più semplice della sala, perché non ci sono intervalli sovrapposti da calcolare: c’è al massimo un’assegnazione aperta per bene, e questo si può esprimere con una regola di unicità sull’assegnazione aperta, oltre che con la transazione. Vale la pena dire entrambi. L’unicità protegge anche lo script di importazione, la transazione protegge due operatori contemporanei.

I dati minimi sono bene, categoria, ubicazione, assegnazione, evento. L’evento registra guasti, riparazioni, dismissione, con data e autore. La dismissione non cancella il bene: lo porta in uno stato da cui non si assegna più, perché l’inventario storico deve quadrare. Un bene dismesso che sparisce dall’elenco fa saltare i conti di fine anno.

Le prove. Assegnare due volte lo stesso bene, la seconda rifiutata. Riconsegnare e riassegnare, accettata, e le due assegnazioni visibili nella storia. Un operatore senza ruolo che dismette, rifiutato. L’elenco dei beni assegnati a una persona che ha cambiato ufficio, che è la domanda vera dell’inventario e che lo schema deve saper reggere. Se per rispondere a questa domanda serve esportare tutto e confrontare a mano, lo schema è sbagliato. Si chiude con una frase sul dato personale: il nome della persona sta perché serve a recuperare il bene, non si usa per altro, e l’elenco completo non è aperto a chiunque abbia l’accesso all’applicazione.

## Griglia di autovalutazione dell’elaborato

**Prove:** prima prova
**Tag:** checklist, rilettura
**Semaforo:** giallo

### Inquadramento

La griglia si usa a elaborato finito, nei minuti della rilettura. Requisiti numerati richiamati. Ruoli coerenti fra testo e disegno. Dati con un vincolo. Rete con le porte. Copie coerenti con RPO e RTO. Quattro prove. Una rinuncia. Sul foglio la si tiene in otto voci. Ogni voce senza un segno è un buco, e si riempie con una frase, non con un nuovo capitolo. La griglia non si consegna.

### Definizione

Negli ultimi dieci minuti si percorre questa lista. Ogni no è una correzione breve, a margine se non si fa in tempo a riscrivere.

### La lista

1. La prima pagina dice che cosa il sistema fa e che cosa non fa.
2. I ruoli sono almeno due e non possono le stesse cose.
3. I requisiti funzionali sono numerati e hanno un attore.
4. Almeno tre requisiti non funzionali si possono verificare, e fra loro ci sono una misura di continuità e una di sicurezza.
5. C’è un percorso di interfaccia, con un errore gestito.
6. Le entità hanno chiavi primarie e almeno una chiave esterna, e c’è un vincolo di dominio (sovrapposizione, unicità, stato).
7. È scritto dove sta il controllo dei permessi: sul server.
8. Il disegno di rete ha zone, e il database non è raggiungibile dagli utenti.
9. HTTPS, backup e un RPO o un RTO sono nel testo e non contraddicono il disegno.
10. C’è un caso di prova negativo.
11. Le motivazioni spiegano una rinuncia, non solo un acquisto. Ciò che non si è fatto, e perché, mostra giudizio.
12. Gli stessi nomi tornano in requisiti, dati e disegni.

Un elaborato che risponde sì a questi dodici punti è sopra la soglia di una prova impostata bene, anche senza tecnologie di moda. Un elaborato con Kubernetes e senza il punto 6 o il punto 8 non lo è.


### Nel dettaglio

La griglia si usa a elaborato finito, con dieci minuti ancora sul tavolo, e si usa anche a casa, su un tema fatto a tempo. Ogni voce è un sì o un no, e il no si corregge se è una frase, si segna se sarebbe una pagina. Obiettivo in apertura, detto come un difetto di oggi e un sistema che lo toglie. Due esclusioni presenti. Ruoli con un’azione ciascuno e un’azione vietata ciascuno. Requisiti numerati, almeno uno con la prova corrispondente. Vincolo difficile identificato, espresso nei dati, garantito da una transazione, tentato da una prova. Se una di queste quattro gambe manca, il tema è il candidato primo a una domanda della commissione.

Architettura dopo i dati, non prima. Tre livelli nominati come responsabilità. Tecnologie in quel punto e non in apertura: un linguaggio sul server, un proxy, un DBMS. Rete con una porta pubblica e la porta del database chiusa. Copie con un RPO e un RTO che il ritmo delle copie può mantenere. Una rinuncia esplicita. Una contraddizione cercata e non trovata: numero di nodi, nome degli stati, ruolo che compare in due sezioni con due poteri diversi.

Il voto che ci si dà da soli è severo su un punto solo, il vincolo. Se il vincolo è nominato e non è garantito dalla transazione, l’elaborato è una descrizione di un sito, non un progetto. Si torna indietro e si scrivono cinque righe sulla transazione, togliendo cinque righe di aggettivi da un’altra sezione. A casa, dopo due temi, si guarda quale voce della griglia è no entrambe le volte. Quella voce è il buco da studiare, non un altro tema completo.

### Approfondire

- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)
- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

## Elaborato esteso: richieste di assistenza, testo da ricopiare e poi rifare

**Prove:** prima prova
**Tag:** traccia, elaborato lungo, tre ore, schemi
**Semaforo:** verde

### Inquadramento

È la misura delle tre ore: il testo che, ricopiato a mano con i disegni grandi, riempie una decina di facciate. Si ricopia una volta per sentire la lunghezza, poi si chiude e si rifà su un'altra storia, commissione, visite o sale, tenendo i blocchi e cambiando i sostantivi. Sul foglio del giorno della prova questo testo non si riconosce. Se la traccia è diversa e l'elaborato parla ancora di ticket, è fuori consegna.

### A che cosa serve questo testo

Questo non è uno schema. È un esempio di quanto si scrive in tre ore, sulla traccia delle richieste di assistenza informatica. Ricopiato a mano, con i tre disegni rifatti in grande e non in miniatura, occupa circa otto-dieci facciate. Non va imparato parola per parola. Il giorno della prova la traccia avrà altri sostantivi. Si tengono i blocchi: confini, ruoli, requisiti numerati, due percorsi, dati con un vincolo vero, architettura, zone di rete, copie, quattro prove, una rinuncia. I nomi di questo testo si sostituiscono con quelli della traccia. Se si consegna questo elaborato su una traccia diversa, senza adattarlo, è un tema fuori consegna.

Si suppone un ente con alcune centinaia di persone, una sala sistemi già esistente ma non eccellente, un'identità interna già in uso, e l'obbligo di non pubblicare il servizio su Internet. Gli utenti sono i dipendenti. L'orario che conta è quello d'ufficio.

### Obiettivo, confini e ruoli

Il sistema sostituisce il foglio condiviso e i messaggi con cui oggi si chiede assistenza. Un dipendente apre una richiesta, la segue e risponde ai chiarimenti. Un tecnico del gruppo competente la prende in carico e la porta a chiusura. Un responsabile legge i tempi del proprio settore e non modifica le richieste. Un amministratore, poche persone, cura i gruppi e le categorie. Il sistema non è l'inventario dei PC, non è la posta istituzionale, non emette ordini di acquisto e non è il protocollo generale dell'ente. Le richieste restano dati di lavoro. Se da una richiesta nasce un atto che deve uscire, quell'atto si forma nel protocollo, non in questo portale. Scrivere le esclusioni evita di promettere, nell'ultima ora, funzioni che non hanno né dati né schermate.

I ruoli non sono etichette. Il dipendente crea richieste e vede solo le proprie, compresi i commenti su quelle richieste. Non vede la coda degli altri e non cambia lo stato in «preso in carico». Il tecnico vede la coda del proprio gruppo, prende in carico una richiesta aperta di quel gruppo, scrive commenti, propone la chiusura. Non vede i gruppi di cui non fa parte e non gestisce le anagrafiche. Il responsabile consulta gli indicatori e l'elenco del settore, per controllo del servizio, senza pulsanti di cambio stato. L'amministratore gestisce gruppi, categorie e l'appartenenza dei tecnici. Non si dà l'amministratore a tutti i tecnici «per comodità»: un permesso in più è una superficie in più, e l'audit di chi ha cambiato un gruppo deve indicare una persona.

L'identità non si reinventa. L'accesso usa il sistema già presente nell'ente. L'applicazione non conserva password. Per gli amministratori e per chi entra da fuori con la VPN si esige un secondo fattore. La sessione scade e si invalida all'uscita. Ogni richiesta successiva ricontrolla il ruolo sul server.

### Requisiti che si possano verificare

I funzionali hanno un attore. F1, il dipendente crea una richiesta con oggetto e descrizione obbligatori e una categoria scelta da un elenco; il sistema assegna un numero progressivo e lo stato «aperta», e mostra il numero. F2, il dipendente consulta l'elenco delle proprie richieste, filtra per stato e apre il dettaglio con la cronologia dei commenti. F3, il tecnico prende in carico una richiesta aperta del suo gruppo; da quell'istante la richiesta risulta assegnata a lui e non è più prendibile da un altro. F4, il richiedente e il tecnico si scambiano commenti in ordine di tempo. F5, il tecnico chiude la richiesta; il dipendente può riaprirla entro cinque giorni indicando una motivazione, e oltre quel termine la riapertura è rifiutata. F6, il responsabile ottiene, per un intervallo di date del proprio settore, il numero di richieste aperte e chiuse e il tempo medio fra apertura e chiusura.

I non funzionali hanno un numero o una condizione. N1, l'elenco del dipendente e la coda del tecnico rispondono entro tre secondi su diecimila richieste, in orario normale. N2, il servizio è disponibile dalle 8 alle 18 dei giorni lavorativi; fuori da quell'orario si accetta un ripristino entro quattro ore del giorno lavorativo successivo. N3, si possono perdere al massimo sessanta minuti di inserimenti, quindi l'RPO è di un'ora. N4, i due percorsi principali si compiono da tastiera, senza il solo mouse, e lo stato non è indicato dal solo colore. Il vincolo V1 è l'identità dell'ente. Il vincolo V2 è l'assenza di pubblicazione su Internet: da fuori si entra solo in VPN.

Questi numeri sono una scelta dichiarata, non una legge di natura. Un ente che tenesse lo sportello anche di sabato cambierebbe N2. L'importante è che il disegno che segue sia capace di mantenerli. Un RPO di un'ora con un solo backup notturno sarebbe una contraddizione, e in rilettura andrebbe corretta.

### Interfaccia, i due percorsi

Dopo l'accesso il dipendente vede l'elenco delle proprie richieste, dalla più recente, con lo stato scritto in parole: aperta, presa in carico, chiusa. Un filtro per stato. Un pulsante «nuova richiesta». Il modulo ha oggetto, descrizione e categoria. Oggetto e descrizione sono segnati come obbligatori. La conferma mostra il numero e non lascia il dubbio che l'invio sia fallito. Se l'oggetto è vuoto, il messaggio sta sul campo e nel database non entra una riga. Il dettaglio mostra i commenti in ordine e una casella per aggiungerne uno. Non mostra «prendi in carico».

Il tecnico vede la coda del gruppo, non un elenco generale. Nel dettaglio il pulsante «prendi in carico» c'è solo se lo stato è ancora «aperta». Se un collega ha appena preso la stessa richiesta, il messaggio è «già presa in carico da un altro tecnico», non un errore generico, e la pagina si aggiorna sullo stato vero. La chiusura chiede una conferma. Il responsabile non ha questi pulsanti. Ha due date obbligatorie e il riquadro degli indicatori del settore. L'amministratore ha una schermata sobria di gruppi e categorie, separata dal lavoro quotidiano sulla coda.

Il testo dei commenti si mostra come testo. Non diventa parte della pagina. Gli allegati si escludono da questa prima versione: appesantiscono il tema di un problema intero, i file caricati, e non sono nella necessità della traccia così come l'ho delimitata. Si potranno aggiungere senza cambiare i ruoli, con un tetto di dimensione e uno storage che non esegue ciò che riceve. La rinuncia si scrive, non si nasconde.

```disegno
titolo: Percorso del tecnico, da ridisegnare come quattro rettangoli
riga: Coda del mio gruppo
freccia: apre il dettaglio
riga: Dettaglio, stato scritto in parole
freccia: prendi in carico, oppure messaggio se lo stato è già cambiato
riga: Commenti in ordine
freccia: chiudi, con conferma
riga: Richiesta chiusa, data visibile
nota: Il dipendente non ha la seconda freccia. Il responsabile non ha né la seconda né la quarta.
```

### Dati

Le entità sono sei, e bastano. Gruppo, con identificativo e nome. Utente, con identificativo, l'identificativo esterno unico verso il sistema dell'ente, il nome, il gruppo, il fatto che sia attivo. Chi lascia l'ente si disattiva e non si cancella, altrimenti lo storico perde il nome. Categoria, con nome e gruppo competente: la stampante va al gruppo postazioni, l'accesso a un servizio va al gruppo identità. Richiesta, con numero univoco visibile all'utente, richiedente, categoria, oggetto, descrizione, stato, tecnico assegnato se c'è, data di apertura, data di chiusura. Commento, con richiesta, autore, testo, data. Evento, sottile, con richiesta, attore, tipo e data: serve a sapere quando è avvenuta la presa in carico, perché il tempo medio non si ricostruisce bene se si tiene solo la data di chiusura.

Le cardinalità si dicono a voce mentre si disegnano. Un gruppo ha molti utenti e molte categorie. Una categoria ha molte richieste. Una richiesta ha un solo richiedente e, al più, un tecnico assegnato. Una richiesta ha molti commenti e molti eventi. Lo stato ammette solo i tre valori. Il tecnico assegnato, se c'è, deve appartenere al gruppo della categoria: è un vincolo, non un augurio. La riapertura oltre cinque giorni si controlla confrontando la data di chiusura con la data del giorno, sul server.

Il vincolo che l'interfaccia non può garantire è la presa in carico unica. Due tecnici possono avere la pagina aperta. Il primo aggiornamento che passa lo stato da «aperta» a «presa in carico» riesce. Il secondo trova lo stato già cambiato e non sovrascrive. Questo è un aggiornamento condizionato, dentro una transazione. Scriverlo nel tema vale più di un quinto server.

```disegno
titolo: Schema dati, chiavi e il vincolo che conta
zona: Gruppo | id
zona: Utente | id, identità esterna unica, gruppo
zona: Categoria | id, gruppo competente
zona: Richiesta | id, numero unico, richiedente, categoria, stato, tecnico
zona: Commento ed Evento | ciascuno riferisce la richiesta e l'autore
nota: Non si cancella la richiesta chiusa. L'utente si disattiva. Due prese in carico sulla stessa richiesta aperta non possono riuscire entrambe.
```

### Architettura

Il browser è presentazione. Non contiene la regola dei cinque giorni né l'elenco dei gruppi del tecnico. Il reverse proxy sta davanti, termina TLS con un certificato il cui nome è quello del portale, e inoltra solo ai nodi che rispondono alla sonda. I nodi applicativi sono due, sulla stessa versione, senza stato locale: la sessione sta in un deposito condiviso, così la richiesta successiva può capitare sull'altro nodo. Il database è relazionale, uno, con una replica nello stesso sito se si vuole ridurre il tempo di ripartenza del solo database, e comunque con i backup descritti sotto. Non introduco microservizi. Il team che terrebbe in vita questo sistema è piccolo, le transazioni attraversano richieste, commenti ed eventi, e un monolite a moduli si rilascia e si capisce. Se un giorno la ricerca testuale diventasse un carico a parte, si potrà staccare quel solo pezzo. Oggi sarebbe complessità senza requisito.

Le chiamate essenziali, da citare senza trasformare il tema in un catalogo, sono la creazione, l'elenco filtrato secondo il ruolo, la presa in carico, il commento, la chiusura, la riapertura, gli indicatori. La creazione risponde 201 con il numero. Un ruolo insufficiente risponde 403. Una presa in carico arrivata tardi risponde 409. Un oggetto vuoto risponde 400 e non scrive. Un guasto del database risponde 500 senza mostrare la query. Le query sono parametrizzate. L'utente del database usato dall'applicazione può inserire e leggere quelle tabelle e non può distruggere lo schema.

### Rete e macchine

Gli uffici stanno su una VLAN. I server su un'altra. I dati su una terza. La gestione degli apparati su una quarta, senza strada da Internet e senza strada libera dagli uffici. Il firewall fra uffici e server consente solo la porta 443 verso il proxy. Fra i nodi e il database consente solo la porta del DBMS e solo dagli indirizzi dei nodi. Non c'è una regola «i PC raggiungono il database per i report»: i report li fa l'applicazione. L'amministrazione dei sistemi arriva da VPN, con secondo fattore, e poi con un accesso di gestione, non dalla VLAN degli uffici verso il database.

Due host fisici in cluster, con hypervisor di tipo 1, reggono le macchine virtuali del proxy, dei due nodi e del database, distribuiti in modo che il database e almeno un nodo non dipendano dallo stesso host. Lo storage dei dischi di sistema è in RAID, e il RAID non è il backup. Se la sala è modesta, lo si scrive: non si dichiara un Tier IV. Si dichiara un gruppo di continuità, un gruppo elettrogeno provato, un raffreddamento che non è quello dell'ufficio accanto, e un RTO compatibile con un guasto serio della sala, cioè le quattro ore del giorno lavorativo, non i minuti. Per i minuti servirebbe un secondo sito, che questo requisito non paga.

```disegno
titolo: Zone, da ridisegnare con le frecce e le porte
zona: Uffici | PC dei dipendenti | DNS interno
freccia: solo 443 verso il proxy
zona: Server | Reverse proxy | Nodo 1 | Nodo 2
freccia: solo la porta del database, solo dagli IP dei nodi
zona: Dati | Database | Copie immutabili, non cancellabili dai nodi
zona: Gestione | VPN con secondo fattore | Accesso di amministrazione
nota: Nessuna zona è Internet. Il nome del portale, nel DNS interno, punta al proxy.
```

### Sicurezza e continuità, allineate ai numeri

L'identità è quella dell'ente. Il secondo fattore copre gli amministratori e la VPN. L'autorizzazione è sul server a ogni operazione, e la query dell'elenco del dipendente contiene il filtro sul richiedente, così un numero cambiato nell'indirizzo non restituisce la riga di un altro: la risposta è 403, non un elenco vuoto ambiguo se si vuole essere precisi sul fatto che la risorsa esiste ma non è sua. In un tema è accettabile anche 404, se si motiva la scelta di non rivelare l'esistenza. Io scelgo 403 per i ruoli che saprebbero dell'esistenza, e lo scrivo per non lasciare la decisione in sospeso. I commenti sono testo. TLS arriva fino al proxy. I dischi del database sono cifrati, e le chiavi non stanno sullo stesso disco. I log di presa in carico, di chiusura e di rifiuto stanno su un sistema che l'applicazione non amministra. Gli orologi sono allineati, altrimenti il tempo medio è una fiction.

L'RPO di un'ora si ottiene copiando i log delle transazioni almeno ogni ora, meglio ogni quindici minuti se il costo è basso, su un supporto che i nodi non possono cifrare. Il completo settimanale e il differenziale notturno permettono di ricostruire. L'RTO di quattro ore fuori orario si ottiene con due nodi per il guasto di un applicativo, e con un ripristino provato per il guasto del database o della sala. Una volta a trimestre si restaura in isolamento e si apre una richiesta di prova. Senza quella prova, i quattro ore sono un desiderio. La replica del database, se c'è, non sostituisce il backup: copierebbe anche una cancellazione.

### Verifica e motivazioni

Quattro casi, legati ai requisiti. Il dipendente apre una richiesta con i campi pieni e la ritrova in elenco con il numero: è F1 e F2. L'oggetto vuoto non crea righe: è il confine di F1. Due tecnici premono insieme su una richiesta aperta e uno solo ottiene la presa in carico, l'altro il conflitto: è F3, ed è il caso che dimostra la transazione. Un dipendente cambia il numero nell'indirizzo e non vede la richiesta del collega: è il cuore di N della sicurezza, ed è il caso negativo di autorizzazione. Un quinto caso, se resta un minuto, è la riapertura al sesto giorno, rifiutata.

Le motivazioni sono le rinunce, non il catalogo. Relazionale, perché stati, gruppi e tempi sono vincoli e join, non documenti slegati. Monolite a due nodi, perché non c'è un pezzo che debba crescere da solo e c'è una transazione che attraversa più tabelle. Nessun cloud pubblico in questa versione, perché la sala esiste, i dati sono interni e non ho un requisito di elasticità: se la sala diventasse il rischio principale, il passaggio sarebbe verso un servizio qualificato per la pubblica amministrazione, non verso un account qualsiasi, e sarebbe un altro progetto. Niente allegati, per non aprire un problema di file eseguibili dentro un tema che deve soprattutto garantire la coda e la presa in carico. Niente sito caldo, perché l'RTO dichiarato è di ore e un secondo sito non è stato pagato da nessun requisito. Queste quattro rinunce sono la prova che il disegno è stato scelto, non accumulato.

### Che cosa rifare sulla traccia vera

Si sostituiscono i sostantivi. Se la traccia parla di sale, il vincolo di presa in carico diventa il vincolo di sovrapposizione, e l'evento diventa meno importante della data di inizio e fine. Se la traccia parla di documenti riservati, si toglie la coda e si aggiunge il diritto di lettura dentro la query, e la VPN diventa il punto centrale. Se la traccia chiede l'accesso dei cittadini, si toglie «niente Internet» e si aggiungono il livello di identità e ciò che non si pubblica. I blocchi restano. I numeri si ricalcolano. I disegni si rifanno con i nomi nuovi. Un elaborato memorizzato e incollato su un'altra storia si riconosce in dieci righe, ed è il modo più sicuro di perdere il tema.


### Nel dettaglio

Questo testo si ricopia una volta, a mano, per imparare la lunghezza e l’ordine. Poi si chiude e se ne scrive un altro, sullo stesso tema, senza guardarlo. Il confronto fra le due versioni mostra le frasi che si sono memorizzate e che vanno sostituite, perché il giorno della prova il tema sarà un altro e le frasi memorizzate stoneranno. Ciò che si tiene non è la prosa. È la sequenza: difetto di oggi, esclusioni, ruoli, requisiti numerati, schermate, dati, transazione della presa in carico unica, architettura con le tecnologie in quel punto, rete con le porte, copie con i due numeri, quattro prove, una rinuncia.

Nel rifare, si cambia di proposito un pezzo per verificare di aver capito. Si sposta il confine della chiusura: non più il richiedente che conferma, ma la chiusura automatica dopo cinque giorni senza obiezioni, e si guarda se stati, requisiti e prove cambiano insieme. Se nella seconda versione lo stato nuovo non compare nelle prove, si è ricopiata la struttura senza tenerla in mano. Si cambia anche un numero: RPO da un’ora a quindici minuti, e si controlla se il ritmo delle copie nel testo è ancora coerente. Un RPO nuovo con il backup notturno lasciato uguale è la contraddizione da imparare a vedere.

La transazione della presa in carico è il pezzo da saper riscrivere a occhi chiusi, perché torna in ogni tema sotto un altro nome. Leggere la riga e la sua versione. Verificare lo stato atteso. Scrivere il nuovo stato, l’attore e l’istante. Fallire se la versione è cambiata. Registrare il passaggio nella storia. Rifiutare senza rivelare dati di troppo. Sei passi. Sui visitatori diventeranno il permesso e il documento. Sulle sale diventeranno l’intervallo e la sala. I passi restano.

Si misura il tempo della riscrittura. Se servono quattro ore invece di tre, si sa dove si perde tempo, e di solito si perde nel disegnare colonne che nessuno userà. Nel terzo giro si scrive solo ciò che la griglia chiede, e si arriva a tre ore. Il testo esteso ha fatto il suo lavoro quando non serve più riaprirlo.

### Approfondire

- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)
- [ACID](https://it.wikipedia.org/wiki/ACID)

## Traccia lunga: registro dei visitatori e dei permessi di accesso

**Prove:** prima prova
**Tag:** traccia, visitatori, elaborato
**Semaforo:** giallo

### Inquadramento

La storia allena la minimizzazione: del documento si tengono gli estremi, non la scansione, e una persona non risulta dentro due volte. È il modello per l'accredito e per le audizioni. Sul foglio si dice che cosa non si raccoglie, ed è una scelta, non una dimenticanza. Il resto dell'architettura è quello già visto. Si allunga a mano fino alle tre ore aggiungendo i disegni e i casi, non inventando un secondo sistema.

### La consegna, e come riempirla

Un ente deve sostituire il registro cartaceo dei visitatori. Il personale dell'ingresso registra l'arrivo, la persona interna che riceve, l'orario e il documento esibito. Un responsabile vede i presenti. Al termine della visita si registra l'uscita. Non si può risultare presenti due volte. I dati del documento non restano in chiaro più del necessario. Si progetti l'applicazione, l'interfaccia, i dati, la rete e la sicurezza. Qui sotto c'è lo svolgimento già in forma di tema, più corto dell'elaborato sull'assistenza e comunque da espandere a mano con i disegni grandi. In tre ore si aggiungono gli schemi e si allungano i casi, non si cambia la struttura.

### Confini e ruoli

Il sistema registra l'ingresso e l'uscita. Non è il controllo degli accessi fisici con i tornelli, non è l'anagrafe e non conserva la scansione del documento. L'operatore di ingresso registra e chiude le visite. Il dipendente può vedere le visite di cui è l'ospitante, non quelle degli altri. Il responsabile della sicurezza vede i presenti in questo momento e lo storico del giorno. L'amministratore cura le postazioni di ingresso e non legge per questo lo storico dei documenti. L'identità degli interni è quella dell'ente. L'operatore di ingresso è un ruolo stretto, dato alle persone in turno, tolto quando il turno non c'è più.

### Requisiti

F1, l'operatore registra un ingresso con cognome, nome, persona interna ospitante, motivo, orario di ingresso preso dal server e non dal PC, e il tipo di documento esibito senza il numero completo: bastano le ultime quattro cifre, se servono a distinguere, e si motiva la minimizzazione. F2, il sistema rifiuta un secondo ingresso aperto per la stessa persona se ne esiste già uno senza uscita. F3, l'operatore registra l'uscita e l'orario di server. F4, il responsabile vede l'elenco dei presenti. F5, l'ospitante vede le proprie visite del giorno. N1, la postazione di ingresso funziona anche se il PC dell'ufficio al piano di sopra no: la rete dell'ingresso è separata. N2, RPO di quindici minuti durante l'orario di apertura, RTO di un'ora, perché un ingresso non registrato è un problema di sicurezza fisica, non un disagio. N3, i numeri di documento non si esportano in un foglio libero. V1, niente pubblicazione su Internet.

Il punto delicato è F1. Un registro che fotocopia la carta d'identità di ogni visitatore raccoglie più dati del necessario e li tiene per sempre. Si scrive che il tipo di documento e un riferimento corto bastano alla finalità di sapere chi è in sede, e che la conservazione dell'elenco ingressi ha un termine, per esempio un anno, dopo il quale si tiene solo il conteggio. Se la commissione volesse il numero intero, la scelta si può rovesciare, ma va detta la base e la durata. Un tecnico che non vede il dato personale in un registro visitatori ha perso metà del tema.

```disegno
titolo: Schermata dell'ingresso, un rettangolo solo ma completo
riga: Cognome | Nome | Ospitante, scelto dall'elenco interni
riga: Motivo | Tipo di documento | Ultime quattro cifre
freccia: Registra ingresso, orario del server
riga: Elenco dei presenti in questa sede | pulsante Uscita su ciascuna riga
nota: Il PC dell'ingresso non ha un pulsante «esporta tutto». Il responsabile, su un'altra postazione, vede i presenti senza le quattro cifre, se non gli servono.
```

### Dati, architettura, rete

Visita, con id, cognome, nome, ospitante, motivo, ingresso, uscita nulla finché la persona è dentro, operatore, tipo documento, ultime quattro cifre. Un vincolo impedisce due visite della stessa persona con uscita nulla. La persona si identifica in modo pratico, cognome nome e riferimento, accettando le omonimie con un controllo dell'operatore, non con un codice fiscale raccolto per abitudine. Operatore e ospitante sono utenti interni. Non c'è una tabella visitatori anagrafica permanente: sarebbe un archivio di persone esterne che il requisito non chiede.

Architettura a tre livelli, anche con un nodo solo più uno di riserva spento o pronto, perché le postazioni di ingresso sono poche. Database relazionale. La transazione dell'ingresso rilegge le visite aperte e inserisce, così due sportelli non fanno entrare due volte la stessa persona nello stesso secondo. Rete: una VLAN per le postazioni di ingresso, una per i server, una per i dati. Le postazioni degli uffici non raggiungono il database. Il responsabile usa l'applicazione, non una query. Backup dei log ogni quindici minuti per l'RPO. Completo notturno immutabile. Le postazioni di ingresso sono PC fissi, aggiornati, senza diritti di amministrazione per l'operatore.

### Sicurezza e prove

TLS interno, anche se non si esce su Internet: la VLAN non è un luogo fidato. Query parametrizzate. L'esportazione non esiste, oppure esiste per il responsabile della sicurezza, senza le quattro cifre, ed è registrata. I log dicono chi ha registrato l'ingresso. Casi di prova: ingresso normale; secondo ingresso a visita aperta, rifiuto; uscita e nuovo ingresso, accettato; dipendente che cerca di aprire l'elenco generale, 403; ripristino di una copia e verifica che un ingresso di prova ci sia ancora.

La motivazione centrale è la minimizzazione, insieme al vincolo di non essere presenti due volte. Il resto è un'applicazione interna sobria. Non si mette il riconoscimento facciale: non è nel requisito, raccoglierebbe dati biometrici, e sarebbe un altro progetto con un'altra base giuridica. Scriverlo come rinuncia è appropriato in un ente.


### Nel dettaglio

Il vincolo è il permesso valido nel momento dell’ingresso, non il nome scritto in un quaderno. Una visita ha un visitatore, un referente interno, un motivo, un inizio e una fine, e uno stato. Il permesso si concede prima, e all’ingresso si verifica che esista, che sia di oggi, che non sia già stato usato se è a ingresso singolo, che il documento esibito corrisponda. La verifica è un’operazione registrata: chi ha verificato, a che ora, con quale esito. Un ingresso senza questa riga non è avvenuto, dal punto di vista del sistema. Un rifiuto si registra lo stesso, perché la domanda «quante volte questa persona si è presentata senza permesso» è una domanda di sicurezza, e senza i rifiuti non ha risposta.

I dati personali qui sono il tema, non un contorno. Nome, documento, orario bastano. Non si chiede il motivo dettagliato se basta una categoria. Non si tiene la copia del documento se basta il tipo e le ultime cifre, e questa scelta di minimizzazione si scrive, perché è il punto in cui il GDPR entra nel progetto senza citare l’elenco dei principi. I tempi di conservazione si dichiarano: le visite si tengono per il tempo necessario a una verifica di sicurezza, e si dice chi decide quel tempo. Un registro che non si cancella mai è una scelta, e va motivata con un obbligo, non lasciata per inerzia.

Il referente interno è l’attore che manca nei temi fatti male. Senza referente, il permesso lo concede chiunque e non si sa chi risponde del visitatore in casa. Il referente chiede il permesso, un ruolo di sicurezza lo concede o lo nega, la portineria lo verifica. Tre ruoli, tre operazioni, e la portineria non modifica il permesso: se il visitatore è in anticipo, la portineria non allarga l’orario, chiede al referente. Questa separazione è il minimo privilegio del tema.

Le prove. Permesso valido, ingresso registrato. Permesso di ieri, rifiuto registrato. Permesso già usato, se è a ingresso singolo, rifiuto. Utente della portineria che tenta di creare un permesso, rifiuto. Poi la domanda di controllo: dato un giorno, l’elenco di chi è entrato, con il referente, prodotto dal sistema e non da un foglio ricostruito a mano.

### Approfondire

- [Testo del GDPR, minimizzazione](https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=celex%3A32016R0679)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Come si apre l'elaborato

**Prove:** prima prova
**Tag:** introduzione, impostazione, prima pagina
**Semaforo:** verde

### Inquadramento

L'apertura è la prima facciata: il difetto di oggi, che cosa il sistema fa, due esclusioni, i ruoli in una riga. I linguaggi qui non ci stanno. Sul foglio si scrivono le quattro mosse a matita nei primi minuti, con i sostantivi della traccia. Un'apertura che promette funzioni senza schermata né dato si paga alla fine. Si prova questa voce da sola, in venti minuti, prima di affrontare un elaborato intero.

### Definizione

L'apertura non è la tecnologia. È la prima pagina, e dice quale problema si sta chiudendo, per chi, e che cosa resta fuori. Un documento che parte da «useremo Java, MySQL e Tomcat» descrive un sistema già scelto. La prova chiede il contrario: dalla traccia si ricava il bisogno, e solo dopo, dentro l'architettura, si nominano i componenti. Un esempio trovato in rete, la descrizione di un sito già in esercizio per i corsi di laurea di un'università, è utile come scheletro e fuorviante come modello di tema: lì il software esiste, i nomi delle tecnologie aprono il testo, e non c'è una traccia da interpretare.

### Che cosa si scrive nella prima pagina

Quattro movimenti, in quest'ordine, e poi ci si ferma.

Il presente. Come si lavora oggi, con il difetto concreto: un foglio condiviso, una mail, un registro cartaceo, pagine aggiornate a mano. Una frase. Il difetto deve essere quello che la traccia lascia intendere, non un difetto inventato per giustificare un prodotto.

Il sistema. Che cosa lo sostituisce, in una frase con il verbo: si registrano le richieste, si prenotano le sale, si pubblicano gli avvisi. Il soggetto sono le persone della traccia, non «l'utente generico».

Il confine. Che cosa il sistema non è. Due esclusioni bastano. Impediscono, nell'ultima ora, di aggiungere l'inventario, la posta certificata o il protocollo generale perché «ci stavano bene».

I ruoli, ancora in una riga ciascuno. Si svilupperanno dopo. Qui servono solo i nomi, così chi legge sa già quante storie dovrà seguire.

Non si citano ancora linguaggi, marche, numeri di versione. Non si disegna ancora. Se l'apertura occupa più di una facciata, si sta già facendo il tema dentro il preambolo.

```disegno
titolo: La prima pagina, e dove non sta la tecnologia
passo: 1. Oggi si fa così, e questo è il difetto
passo: 2. Il sistema fa questa cosa, per queste persone
passo: 3. Non fa queste altre due
passo: 4. I ruoli, un nome e un verbo ciascuno
freccia: solo dopo, in un'altra sezione
passo: 5. Architettura, e lì una sola scelta di linguaggi e di server
nota: Partire dal punto 5 è il tema di chi descrive un prodotto, non un progetto.
```

### Un'apertura da adattare, non da imparare

Questo testo vale per un ente con lavoro d'assemblea. Il giorno della prova si sostituiscono i sostantivi. Non si consegna così com'è su una traccia diversa.

Oggi gli avvisi e il calendario di una commissione circolano per posta e su file aggiornati da persone diverse. Un membro non sa se sta leggendo l'ultima versione, e due segreterie possono assegnare la stessa sala allo stesso orario. Il sistema pubblica il calendario e i materiali della commissione, distingue ciò che è pubblico da ciò che resta riservato ai membri, e impedisce la sovrapposizione di una sala. Non è il protocollo generale dell'ente, non gestisce le presenze in aula e non sostituisce la posta certificata. Il pubblico legge. Il membro e il suo collaboratore abilitato leggono anche il riservato. La segreteria della commissione inserisce date, sale e materiali. Un amministratore, poche persone, assegna i ruoli e non lavora sul calendario quotidiano.

Manca, di proposito, ogni nome di linguaggio. Quella frase ha un altro posto.


### Nel dettaglio

La prima pagina si scrive quando la brutta è chiara, e occupa mezza pagina, non due. La prima frase dice il difetto di oggi, concreto, accaduto in un ufficio: le richieste si perdono nella posta, due tecnici rispondono alla stessa persona, una sala risulta libera e non lo è. La seconda frase dice che cosa il sistema farà, un verbo solo. La terza dice per chi. Poi due esclusioni, in un periodo: questo sistema non è il protocollo generale, non è la posta certificata, non sostituisce la conservazione a norma. Le esclusioni si scelgono fra le cose che la commissione potrebbe legittimamente aspettarsi, così si vede che la scelta è consapevole.

I ruoli stanno in un elenco di quattro righe. Nome del ruolo, chi lo ricopre, un’azione, un divieto. Il divieto è la riga che di solito manca e che regge poi la sicurezza. «Il richiedente non assegna la priorità. Il tecnico non vede i ticket di un altro gruppo. La portineria non crea permessi.» Scriverli qui evita di ritrovarseli contraddetti a pagina cinque.

Non si nomina il linguaggio. Non si nomina il database. Non si scrive «si userà un’architettura moderna a microservizi». Chi legge la prima pagina deve capire il lavoro dell’ufficio, anche se salta il resto. Se la prima pagina si capisce solo dopo aver letto l’architettura, è scritta al contrario. A casa si prova a far leggere la prima pagina a qualcuno che non sa nulla del tema, e gli si chiede che cosa farà il sistema e che cosa non farà. Se non sa rispondere, la pagina è un preambolo e si riscrive.

### In sede di prova

Si scrivono le quattro mosse a matita nei primi quindici minuti, usando i sostantivi sottolineati nella traccia. Poi si ricopiano in bella. Se la traccia è già ricca di vincoli, l'apertura è mezza facciata: il vincolo più duro si annuncia, non si dimostra. La dimostrazione sta nei dati.

### Errori da evitare

- Una premessa storica sull'informatica, o sul web in generale.
- Elencare le tecnologie prima di aver detto chi usa il sistema.
- Promettere, nell'apertura, funzioni che poi non hanno né schermata né dato.
- Copiare l'introduzione di un progetto universitario già realizzato, con le versioni dei prodotti di quell'anno.

### Approfondire

- [Sistema client/server](https://it.wikipedia.org/wiki/Sistema_client/server)
- [Ingegneria dei requisiti](https://it.wikipedia.org/wiki/Ingegneria_dei_requisiti)

## Dove nominare linguaggi, server e database

**Prove:** prima prova
**Tag:** linguaggi, client, server, DBMS, web server
**Semaforo:** verde

### Inquadramento

I nomi stanno in mezza facciata, dentro l'architettura, quattro riquadri: browser, reverse proxy, un solo linguaggio, un database relazionale. Un marchio che non si sa spiegare si omette, il ruolo resta. Sul foglio si rifiuta esplicitamente l'hash della password nel browser. Si sceglie un linguaggio e non se ne elencano cinque. Questa voce si incolla, come abitudine, a ogni traccia svolta, sempre con gli stessi quattro posti.

### Definizione

Nominare i linguaggi è utile, e sta in un solo blocco, dentro l'architettura, dopo che i tre livelli sono già stati decisi. Il blocco dice quale componente fa che cosa e perché quella scelta regge i requisiti. Non è un catalogo e non è l'apertura del tema. Quattro nomi bastano: che cosa gira nel browser, che cosa riceve la richiesta cifrata, in quale linguaggio è scritta l'applicazione, quale motore conserva i dati. Un quinto nome, il sistema operativo o l'hypervisor, si aggiunge solo se la traccia parla di macchine. Le versioni, «MySQL 5.0» o «Tomcat 7», non sono una risposta: invecchiano e non motivano nulla.

### I quattro posti

Nel browser stanno HTML, CSS e JavaScript. Producono le schermate e controllano subito un campo vuoto, per non far attendere la persona. Non custodiscono la regola. La regola dei cinque giorni, il permesso, la sovrapposizione di una sala si ricalcolano sul server. JavaScript che decidesse da solo se una persona può vedere un documento riservato sarebbe un controllo aggirabile.

Davanti all'applicazione sta un reverse proxy, che è il ruolo del server web in questo disegno. Termina TLS, presenta il certificato il cui nome è quello del portale, e inoltra solo verso i nodi che rispondono. Apache o nginx, in questo ruolo, si nominano se li si sa dire. Altrimenti si scrive «reverse proxy» e si dice che cosa non fa: non contiene la logica delle commissioni e non interroga il database. È diverso dal server applicativo. Nel progetto universitario che circola come esempio i due ruoli sono schiacciati su un solo prodotto, un contenitore di servlet che fa anche da server web. Si può dire, in una frase, che in un ente piccolo i due ruoli possono stare sulla stessa macchina. Non si deve far credere che siano la stessa responsabilità.

Il linguaggio dell'applicazione è uno solo. Java, Python o C# sono scelte difendibili. Se ne prende una e si dà una ragione da ente, non da moda: è il linguaggio che il gruppo sa mantenere, ha librerie mature per il web e per il database, e non costringe a inventare un secondo sistema. Elencarli tutti e tre per mostrare di conoscerli indebolisce il tema: una scelta non fatta è un progetto non chiuso. Non serve scrivere codice. Serve dire che la logica sta in quel linguaggio, sul server, e che le chiamate principali sono quelle già numerate nei requisiti.

Il database è relazionale. PostgreSQL o MySQL si nominano se si conosce il motore almeno quanto basta per parlare di transazioni, vincoli e join. La ragione non è il nome. È che gli stati, i ruoli e il vincolo «questa sala, in quest'ora, una volta sola» sono relazioni e transazioni, non documenti slegati. La versione non si scrive. Si scrive che le query sono parametrizzate e che l'utente del database usato dall'applicazione non può distruggere lo schema.

```disegno
titolo: Un nome per ciascun riquadro, non un elenco in apertura
riga: Browser | HTML, CSS, JavaScript | solo presentazione
freccia: HTTPS, porta 443
riga: Reverse proxy | termina TLS, non applica le regole
freccia: verso i nodi, rete interna
riga: Applicazione | un solo linguaggio, le regole e i permessi
freccia: SQL, solo da questi nodi
riga: Database relazionale | vincoli, transazioni, copie
nota: Se non si ricorda un nome di prodotto, si lascia il ruolo. Il ruolo vale più del marchio.
```

### Ciò che quell'esempio fa e non va ripetuto

Nel testo universitario le credenziali vengono trasformate nel browser con MD5, e poi confrontate. Non è il modello da portare in prova. MD5 è veloce, quindi è inadatto a una password, e il browser non è il posto fidato in cui custodire il segreto. L'applicazione del Senato, in un elaborato, non conserva le password: usa l'identità già presente nell'ente. Se un quesito costringe a prevedere una password locale, l'impronta si calcola sul server, con una funzione lenta e un sale diverso per ogni utente. Il client può al massimo evitare di spedire la password su un canale in chiaro, e questo lo fa TLS, non un hash fatto in JavaScript.

L'altra cautela è la quantità. Quel documento descrive molti servizi perché il sistema è stato davvero costruito. In tre ore se ne sviluppano i due percorsi principali e un vincolo duro. Gli altri si nominano come esclusi o come successivi. Un tema che elenca venti form senza un vincolo è più povero di un tema che ne disegna due e dimostra che due persone non possono occupare la stessa sala.


### Nel dettaglio

Le tecnologie stanno nel capitolo dell’architettura, dopo che i livelli sono stati giustificati, e occupano un capoverso. Prima si dice che la presentazione è un browser, perché non si distribuiscono client da aggiornare. Poi che un reverse proxy termina TLS e sta davanti ai nodi. Poi un solo linguaggio sul server, scelto perché l’ente lo sa mantenere, e lo si nomina, Python o Java o C#, uno. Poi un DBMS relazionale, PostgreSQL o MySQL, uno, con il motivo delle transazioni e dei vincoli. Quattro nomi. Non le versioni, che invecchiano e non aggiungono nulla. Non un secondo linguaggio «per i batch». Non un database non relazionale accanto, salvo un motivo scritto, per esempio la sessione in un deposito a chiave.

Il nome torna solo se serve un dettaglio. Nel capitolo dati si può dire che il vincolo di unicità è del DBMS scelto, senza ripetere il catalogo. Nel capitolo rete si dice la porta di quel DBMS, non si ripete perché lo si è scelto. Nella sicurezza si dice che le password, se sono locali, stanno con algoritmo lento, e se l’identità è quella dell’ente il DBMS non vede alcuna password. Questa è l’occasione in cui la tecnologia si lega a una regola, e vale più del nome del prodotto.

Ciò che non si scrive, da nessuna parte: il numero di versione, la marca dell’hardware, il nome di un prodotto di moda, il confronto lungo fra due linguaggi. Se si sente il bisogno di giustificare per mezza pagina la scelta del linguaggio, la scelta è troppo pesante per il tema. Una frase con il motivo basta. Il resto della pagina torna al vincolo del tema, che è la ragione per cui la commissione legge.

### In sede di prova

Si scrive il blocco dopo lo schema a tre livelli, in mezza facciata. Quattro frasi, una per riquadro, più la frase sull'identità. Se un nome di prodotto non si sa spiegare, si omette e si tiene il ruolo. Si richiama un requisito: il linguaggio e il database esistono per far rispettare quel vincolo, non per decorare il margine.

### Errori da evitare

- Aprire il tema con l'elenco delle tecnologie.
- Cinque linguaggi «possibili», senza sceglierne uno.
- Confondere il reverse proxy, il linguaggio applicativo e il database in un'unica frase.
- Cifrare la password nel browser con un hash veloce e chiamarlo sicurezza.
- Citare una versione vecchia di un prodotto come se fosse un requisito.

### Approfondire

- [Architettura multi-tier](https://it.wikipedia.org/wiki/Architettura_multi-tier)
- [Model-view-controller](https://it.wikipedia.org/wiki/Model-view-controller)
- [Base di dati](https://it.wikipedia.org/wiki/Base_di_dati)

## Spunto: calendario e materiali di una commissione

**Prove:** prima prova
**Tag:** spunto, commissione, impostazione
**Semaforo:** giallo

### Inquadramento

È un esercizio di dominio, non una traccia ufficiale e non la descrizione di un portale esistente. Serve a spostare i sostantivi verso il lavoro di un'assemblea, tenendo pubblico e riservato, e la sala che non si assegna due volte. Sul foglio si scrivono solo l'apertura e il blocco delle tecnologie, in quaranta minuti, e si confronta. Gli altri spunti in fondo alla voce, scadenza, accredito, biblioteca, delegazione, sono lo stesso esercizio con un vincolo diverso.

### Definizione

Questo non è una previsione della traccia. È un esercizio di impostazione su un dominio vicino al lavoro di un'assemblea, costruito sulla stessa ossatura di un sito universitario di corsi: qualcuno pubblica, qualcuno legge, un calendario non deve andare in collisione, una parte dei materiali non è pubblica. L'università diventa una commissione. Il resto del tema, dati completi, rete e prove, si svolge con la scaletta già nota. Qui ci si ferma al punto in cui di solito ci si perde: l'apertura e il blocco delle tecnologie.

Multiutente, nella prova, vuol dire che più persone entrano nello stesso sistema, ciascuna con il proprio accesso e con permessi diversi. Un portale interno, con credenziali personali e un token, è l'esempio pulito: gli accessi sono individuali proprio perché gli utenti sono molti e non devono vedersi i dati gli uni degli altri. Cercare un'app pubblica del Senato da scaricare e da usare in condivisione porta fuori strada. I servizi interni, la rassegna per i senatori, i siti aperti e i dati aperti sono contesti diversi, e la traccia non chiederà di descriverli. L'elaborato inventa un sistema sulla consegna del giorno, anche quando i sostantivi assomigliano al lavoro di un'assemblea.

### La consegna, come potrebbe essere formulata

Un ente parlamentare vuole sostituire i file e i messaggi con cui oggi si pubblicano il calendario di una commissione, gli avvisi e i materiali delle sedute. Il pubblico vede calendario, ordine del giorno e materiali non riservati. I membri della commissione e i collaboratori abilitati vedono anche i materiali riservati. La segreteria inserisce sedute, sale e documenti, e non può assegnare la stessa sala a due sedute sovrapposte. Un amministratore assegna i ruoli. Il sistema non è il resoconto stenografico, non è il protocollo e non gestisce il voto.

### Apertura, già in forma di tema

Oggi il calendario e i materiali circolano in file che più persone aggiornano, e la sala si verifica a voce. Un membro può leggere una bozza superata, e due sedute possono finire nella stessa sala alla stessa ora. Il sistema pubblica il calendario e i materiali della commissione, separa il pubblico dal riservato e rifiuta la sovrapposizione di una sala. Non redige il resoconto, non protocolla gli atti e non raccoglie voti. Il pubblico legge solo ciò che è stato marcato come pubblicabile. Il membro e il collaboratore abilitato leggono anche il riservato della propria commissione. La segreteria crea le sedute e carica i materiali. L'amministratore assegna le persone alle commissioni e non modifica il calendario per comodità.

### Il blocco delle tecnologie, mezza facciata

Il browser mostra le pagine con HTML, CSS e JavaScript e segnala subito un campo obbligatorio vuoto. Non decide se un documento è riservato. La richiesta arriva in HTTPS a un reverse proxy, che termina TLS e inoltra ai nodi applicativi. L'applicazione è scritta in un solo linguaggio, qui Python, perché il gruppo lo mantiene e perché la regola da proteggere è semplice e server-side: data la sala e l'intervallo, non esiste un'altra seduta sovrapposta, e un lettore pubblico non riceve una riga riservata. Un linguaggio diverso, Java o C#, sarebbe stato equivalente: la scelta è una, ed è motivata dalla manutenzione, non dal nome. I dati stanno in un database relazionale. La prenotazione della sala è una transazione che rilegge gli intervalli già occupati e inserisce solo se non c'è sovrapposizione. La query dei materiali del pubblico contiene il filtro «non riservato», così cambiare un numero nell'indirizzo non restituisce il documento di un'altra commissione. Le password non si conservano: l'identità è quella dell'ente. Il proxy non interroga il database. Il database non ha un indirizzo verso il pubblico.

Il seguito, da fare a mano in tre ore, è quello della scaletta: requisiti numerati, due percorsi di schermate, le entità Seduta, Sala, Materiale, Utente e Commissione, le zone di rete, le copie, quattro prove di cui una è la sala già occupata e una è il lettore pubblico sul documento riservato, e la rinuncia al resoconto stenografico.


### Nel dettaglio

Lo spunto serve a esercitare un vincolo doppio, che è il tipo di vincolo su cui un tema si distingue. Una commissione si riunisce in una sala, in una data, e per quella seduta servono materiali che i membri vedono e i non membri no. I vincoli sono due e si tengono insieme. La sala non ha due sedute sovrapposte, ed è il vincolo delle prenotazioni. Il materiale di una seduta riservata si legge solo dai membri di quella commissione, ed è il vincolo dell’archivio. Un tema che risolve solo la sala e lascia i materiali in una cartella condivisa ha fatto metà del lavoro. Un tema che protegge i file e prenota le sale a voce ha fatto l’altra metà.

Si aggiunge, se si vuole alzare il livello, un terzo vincolo di tempo. I materiali si possono sostituire fino a una scadenza, per esempio ventiquattro ore prima della seduta, e dopo la scadenza la versione è chiusa: si può aggiungere un errata corrige come nuovo file, non sovrascrivere. La versione chiusa ha un’impronta. Dopo la seduta il materiale resta ai membri per un tempo e poi si restringe secondo le regole dell’archivio, che non si inventano: si rimanda alle regole dell’ente e si dice che il sistema le applica, non le stabilisce.

I ruoli minimi sono il segretario della commissione, che convoca e carica i materiali, il membro, che legge i propri, l’amministratore delle sale, che può non coincidere con il segretario. La portineria, se i membri esterni entrano, è il tema dei visitatori e si può dichiarare fuori, oppure includere per una sola categoria di seduta. Dichiarare il confine è meglio che abbozzare un quarto ruolo.

Per esercitarsi si scrive solo la transazione della seduta e il controllo di accesso a un file. La seduta si conferma se la sala è libera nell’intervallo e se non esiste già una seduta di quella commissione nello stesso intervallo, se questa è la regola scelta. Il file si scarica se la sessione appartiene a un membro di quella commissione e se la seduta è fra quelle visibili. Due controlli, due prove negative. Se questi quattro pezzi stanno in una pagina, il resto del tema è applicazione della scaletta, non invenzione.

### In sede di prova

### Altri spunti dello stesso tipo

Sono consegne possibili, sullo stesso lavoro di un'assemblea. Si svolgono con la scaletta già nota. Cambia il vincolo duro, quello che la transazione deve impedire. Le richieste di assistenza, le sale, l'archivio, l'inventario e il registro dei visitatori sono già svolti in questa area: stessa ossatura, sostantivi diversi.

Audizioni. La segreteria fissa data, sala e invitati. I membri vedono il dossier, il pubblico vede solo l'annuncio. Il vincolo: un invitato e una sala non finiscono in due audizioni sovrapposte. È il calendario della commissione insieme al registro dei visitatori.

Testi con una scadenza. Fino a un'ora indicata un ufficio deposita una versione. Dopo, il sistema rifiuta. La versione pubblicata resta leggibile e non si riscrive in silenzio: una correzione è una versione nuova. Il vincolo è il tempo, insieme all'immutabilità di ciò che è già uscito.

Accredito per una seduta pubblica. I posti sono un numero finito, il titolo vale solo quel giorno, del documento si conservano gli estremi minimi. Il vincolo è la capienza e la scadenza, con la stessa minimizzazione del registro visitatori.

Prestito in biblioteca. Una copia è fuori una volta sola. Il senatore, il collaboratore e lo studioso esterno non hanno gli stessi diritti di durata e di richiesta. Il vincolo è la singola copia.

Delegazione. Servono insieme una sala e un interprete, entrambi liberi sull'intervallo. Se uno dei due è occupato, la prenotazione intera fallisce. Il vincolo è la transazione su due risorse, più stretto della sola sala.

Consegna di un dispositivo a un ufficio. Chi lo ha, da quando, e la restituzione. È l'inventario dei beni, con un assegnatario al posto dell'etichetta di magazzino.

### In sede di prova

Si usa questo spunto per esercitare l'apertura e il blocco tecnologico in quaranta minuti, a mano, poi si confronta. Non lo si memorizza. Se la traccia vera parla di sportello, di visite o di inventario, si buttano commissione e materiali e si tengono i quattro movimenti dell'apertura e i quattro riquadri della tecnologia.

### Errori da evitare

- Riscrivere il sito dei corsi di laurea cambiando solo le parole «esame» e «docente».
- Mettere Java, MySQL e il server applicativo nella prima riga.
- Dimenticare, in un dominio parlamentare, la distinzione fra pubblico e riservato: è il vincolo che rende il tema diverso da un calendario qualunque.
- Trattare lo spunto come la traccia ufficiale. Non lo è.

### Approfondire

- [Architettura multi-tier](https://it.wikipedia.org/wiki/Architettura_multi-tier)
- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [Base di dati](https://it.wikipedia.org/wiki/Base_di_dati)

## Spunto: prestito in biblioteca

**Prove:** prima prova
**Tag:** traccia, prestito, unicità
**Semaforo:** giallo

### Inquadramento

Lo spunto allena un vincolo di quantità: di un esemplare esistono tante copie quante sono in scaffale, non di più, e una copia non è in due prestiti aperti. È lo stesso disegno dell'inventario, con una data di restituzione.

### Definizione

Il sistema registra opere, copie e prestiti. Un prestito aperto occupa una copia. La restituzione chiude il prestito e libera la copia. La prenotazione, se c'è, non consegna la copia: mette in coda finché una copia torna.

### Nel dettaglio

Il vincolo si esprime così: per ogni copia esiste al massimo un prestito con restituzione nulla. È un'unicità parziale, più una transazione che impedisce a due banconi di prestare la stessa copia nello stesso minuto. Il numero di copie è un fatto, non un contatore aggiornato a mano: si conta dai prestiti aperti, oppure il contatore si aggiorna nella stessa transazione del prestito, mai in un secondo momento. Due numeri che divergono sono il bug di questo tema.

I ruoli sono chi presta, chi riceve, e chi cataloga. Chi riceve non si presta da solo un'opera esclusa dal prestito. Le opere escluse, la consultazione in sede, stanno nello schema come un attributo e la prova tenta di prestarle. La multa o il sollecito, se si vogliono, sono un'esclusione possibile: meglio dichiararli fuori e fare bene il prestito, che abbozzarli.

I dati personali del lettore si tengono per il tempo del prestito e del contenzioso, poi si riducono. Lo storico «chi ha letto che cosa» è il dato più sensibile del tema e non si lascia in un report aperto a tutto il personale.

### Esempio

Due copie di un volume, una già fuori. Il secondo prestito riesce sulla copia restante. Il terzo, con nessuna copia libera, fallisce e offre la prenotazione. La prenotazione non crea un prestito. Al rientro, la copia si assegna alla prenotazione più vecchia in una transazione, così due banconi non la consegnano a due persone.

### In sede di prova

Unicità del prestito aperto sulla copia, conteggio delle copie coerente, prenotazione distinta dal prestito, dato di lettura trattato come riservato.

### Errori da evitare

- Tenere solo un contatore «disponibili» senza il vincolo sulla copia.
- Far creare il prestito al lettore senza un operatore, se la regola non lo prevede, o il contrario senza dirlo.
- Conservare per sempre la storia di lettura in chiaro e visibile a tutti.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)

## Spunto: testi con una scadenza

**Prove:** prima prova
**Tag:** traccia, scadenza, immutabilità
**Semaforo:** verde

### Inquadramento

È il vincolo di tempo, diverso dalla sovrapposizione di una sala. Fino a un istante il testo si sostituisce. Dopo, la versione è chiusa e un cambiamento è un atto nuovo, non una correzione silenziosa.

### Definizione

Un deposito ha una scadenza. Prima della scadenza l'autore può caricare una nuova versione, e la precedente resta nella storia. Dopo la scadenza il sistema rifiuta la sostituzione. Un'integrazione successiva è un nuovo oggetto collegato, con il proprio autore e il proprio tempo.

### Nel dettaglio

L'istante si definisce nel fuso dell'ente, con l'estremo detto: le 24 del giorno indicato sono fuori o dentro, e la frase sta nel requisito. L'orologio del server si allinea a una fonte comune. Per una scadenza che produce effetti, la versione chiusa si può marcare: si conserva l'impronta e, se serve data opponibile, la marca di un certificatore, non l'ora del server da sola.

Il rifiuto dopo la scadenza è una prova. Anche un amministratore non modifica la versione chiusa. Se un amministratore può «riaprire», il gesto è un'operazione a parte, con motivo e registro, non un aggiornamento della stessa riga. Senza questo divieto il tema è un disco condiviso con una data scritta accanto.

Si decide che cosa resta modificabile: i metadati di catalogo forse sì, il contenuto no. Si scrive la riga. I permessi di lettura possono essere diversi prima e dopo: bozza visibile all'ufficio, versione chiusa visibile alla commissione.

### Esempio

I materiali si sostituiscono fino a ventiquattro ore prima della seduta. L'ultima versione viene chiusa, se ne calcola l'impronta, e il caricamento successivo riceve rifiuto. Un errata corrige è un secondo file collegato, non la sovrascrittura del primo. La prova automatica sposta l'orologio di prova oltre la scadenza e verifica il rifiuto.

### In sede di prova

Istante definito, rifiuto dopo, storia delle bozze, impronta della versione chiusa, riapertura solo come atto registrato se esiste.

### Errori da evitare

- Controllare la scadenza solo nel browser.
- Sovrascrivere il file chiuso lasciando la stessa impronta dichiarata.
- Usare l'ora del portatile dell'utente come orario della scadenza.

### Approfondire

- [Marca temporale](https://it.wikipedia.org/wiki/Marca_temporale)
- [Integrità dei dati](https://it.wikipedia.org/wiki/Integrit%C3%A0_dei_dati)

## Spunto: sala e interprete nella stessa prenotazione

**Prove:** prima prova
**Tag:** traccia, transazione, risorse
**Semaforo:** verde

### Inquadramento

È il vincolo doppio. Non basta che la sala sia libera: deve essere libero anche l'interprete della lingua richiesta, e i due si impegnano insieme. Se uno dei due manca, non si impegna neanche l'altro.

### Definizione

Una prenotazione di delegazione impegna, in una sola transazione, una sala e un interprete per lo stesso intervallo. Il fallimento di una delle due disponibilità annulla l'intera prenotazione. Non resta una sala bloccata senza interprete, né un interprete bloccato senza sala.

### Nel dettaglio

Si cercano le due risorse libere e si scrivono i due impegni nella stessa transazione, con un isolamento o un blocco che impedisce a una prenotazione concorrente di prendere l'interprete fra il controllo e la scrittura. L'ordine dei blocchi è sempre lo stesso, prima la sala e poi l'interprete, o il contrario, ma uguale in ogni transazione, per non fare un deadlock sistematico. Se non c'è un interprete di quella lingua, la transazione termina senza scritture e il messaggio dice quale risorsa manca.

L'intervallo ha la stessa convenzione delle sale: la fine è esclusa, così due incontri contigui sono leciti. Un interprete ha un calendario solo. Non si divide in due persone parallele. La sala, se ha una capienza, si controlla anche quella, ed è un terzo predicato nella stessa transazione, non un controllo estetico.

Si prova: sala libera e interprete occupato, rifiuto e sala non bloccata; due richieste simultanee sull'ultimo interprete, una sola riesce; due incontri che si toccano sul bordo, entrambi riescono.

### Esempio

Una delegazione chiede la sala A e l'inglese dalle dieci alle dodici. L'unico interprete di inglese è già impegnato fino alle dieci. Con la fine esclusa, l'impegno dalle dieci è lecito. Se l'altro impegno finisse alle dieci e un minuto, il rifiuto riguarderebbe l'interprete e la sala A resterebbe libera per chi la chiede senza interprete.

### In sede di prova

Una transazione, due risorse, nessun impegno parziale, ordine di blocco stabile, prove sul bordo dell'orario e sulla concorrenza.

### Errori da evitare

- Prenotare la sala e poi «cercare» l'interprete in un secondo momento.
- Lasciare l'impegno della sala se l'interprete fallisce.
- Trattare due richieste simultanee come un caso che non capita.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [ACID](https://it.wikipedia.org/wiki/ACID)

## Spunto: accredito per una seduta pubblica

**Prove:** prima prova
**Tag:** traccia, accredito, capienza
**Semaforo:** giallo

### Inquadramento

Lo spunto unisce un posto limitato e un ingresso. I posti non si promettono oltre la capienza, e il giorno della seduta entra chi ha un accredito valido, non chi ha solo un'annotazione.

### Definizione

L'accredito impegna un posto per una seduta, a nome di una persona. La capienza non si supera. All'ingresso si verifica l'accredito e si registra l'esito, compreso il rifiuto.

### Nel dettaglio

La transazione di richiesta conta i posti già impegnati per quella seduta e, se ne resta uno, inserisce. Due richieste sull'ultimo posto non devono entrambe riuscire. Il posto si libera se l'accredito viene annullato prima della seduta, e l'annullamento è registrato. Non si cancella la riga: si vuole sapere quante richieste c'erano.

All'ingresso il controllo è un'operazione diversa, fatta da un ruolo diverso. Chi accredita non necessariamente fa entrare. Chi fa entrare non crea accrediti il giorno stesso per aggirare la capienza, salvo una regola di riserva scritta, con un tetto anche sulla riserva. L'ingresso senza accredito resta nel registro come rifiuto.

I dati sono pochi: nome, documento nei limiti del necessario, seduta, esito. Non si chiede il motivo politico della presenza. La lista di una seduta pubblica e la lista di una seduta riservata non si trattano allo stesso modo: si dichiara la classe del dato.

### Esempio

La tribuna ha quaranta posti. La quarantesima richiesta riesce, la quarantunesima no e può restare in lista d'attesa senza occupare un posto. Il giorno della seduta la portineria registra gli ingressi. Un nome non in elenco viene rifiutato e il rifiuto si conta. La riserva di due posti per l'ufficio è un tetto scritto, non una deroga infinita.

### In sede di prova

Capienza come vincolo concorrente, ingresso distinto dall'accredito, rifiuti registrati, dati minimi, riserva con un tetto.

### Errori da evitare

- Contare i posti nell'interfaccia e non nel database.
- Cancellare gli annullati e perdere il conto delle richieste.
- Dare alla portineria il potere di creare accrediti senza una regola.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [Controllo degli accessi](https://it.wikipedia.org/wiki/Controllo_degli_accessi)

## Come si scrive la transazione del vincolo, in cinque righe

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** transazione, metodo, elaborato
**Semaforo:** verde

### Inquadramento

È la pagina da saper rifare su qualunque traccia. Il vincolo cambia nome. I cinque passi restano.

### Definizione

La transazione del vincolo è il pezzo dell'elaborato in cui si dice, in ordine, che cosa si legge, che cosa si verifica, che cosa si scrive, quando si conferma e che cosa vede l'utente se un altro è arrivato prima.

### Nel dettaglio

Primo, si apre la transazione e si leggono le righe che decidono, con la versione o con il blocco. Secondo, si valuta il predicato: stato atteso, intervallo libero, capienza non superata, scadenza non passata. Terzo, si scrivono tutte le righe che devono stare insieme, anche la riga di storia, e nessun effetto esterno. Quarto, si conferma. Quinto, se il predicato non vale più perché qualcuno ha scritto nel frattempo, si annulla e si risponde con un messaggio che non rivela dati di troppo. La notifica parte dopo la conferma.

Si adatta il predicato e non i passi. Sala: il predicato è l'intervallo. Presa in carico: il predicato è lo stato aperto. Scadenza: il predicato è l'istante. Interprete e sala: i predicati sono due e le scritture sono due, nella stessa conferma. Se in brutta i passi sono diventati quattro, manca o la storia o il caso concorrente. Si rimettono.

Questa è la sezione che si scrive per intero. Il resto del tema può essere più breve. Una transazione vaga e un'architettura lunga è l'elaborato che perde punti sul vincolo.

### Esempio

Per la sala: si leggono le prenotazioni di quella sala che intersecano l'intervallo; se ne esiste una, si annulla e si dice occupata; se non ne esiste, si inserisce la prenotazione e la riga di storia; si conferma; una seconda richiesta concorrente trova la riga appena inserita e fallisce. La mail di conferma si accoda dopo.

### In sede di prova

Riscrivere i cinque passi con i nomi della traccia. Inclusa la storia. Esclusa la notifica. Incluso il concorrente che arriva primo.

### Errori da evitare

- Descrivere il vincolo solo a parole, senza l'ordine delle scritture.
- Mettere la mail dentro la transazione.
- Dimenticare che due utenti possono eseguire il controllo nello stesso istante.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [ACID](https://it.wikipedia.org/wiki/ACID)

## Che cosa rispondere se la traccia non dice la tecnologia

**Prove:** prima prova
**Tag:** metodo, tecnologie, elaborato
**Semaforo:** verde

### Inquadramento

Le tracce serie non impongono il linguaggio. La domanda, che il candidato si fa da solo a un'ora dall'inizio, è dove e come nominarlo senza farne il tema.

### Definizione

La tecnologia si sceglie dopo i requisiti e i dati, si nomina nel capitolo dell'architettura, in un capoverso, e si motiva con la manutenzione e con il vincolo, non con la novità.

### Nel dettaglio

Si scrive: browser come presentazione, perché non si distribuiscono programmi; un reverse proxy che termina TLS; un solo linguaggio sul server, quello che si sa mantenere, e lo si nomina; un DBMS relazionale, e lo si nomina, perché il vincolo è una transazione. Quattro nomi. Se la traccia ha già detto che l'ente ha un directory, l'identità si aggancia a quello e non si inventa un archivio di password. Se la traccia tace sull'identità, si sceglie l'identità dell'ente e lo si dichiara come assunzione.

Ciò che non si fa: confrontare tre linguaggi, citare versioni, introdurre un secondo database, spostare i nomi nella prima pagina. Se avanza tempo, si torna sulla transazione del vincolo, non si aggiunge un quinto prodotto.

Un'assunzione si marca come tale. «Assumo che gli utenti interni siano già nel directory dell'ente.» L'assunzione è legittima. Far finta che la traccia l'abbia detta non lo è.

### Esempio

Dopo lo schema delle prenotazioni si scrive il capoverso: pagine nel browser, proxy TLS, applicazione in un solo linguaggio, PostgreSQL per l'unicità del prestito aperto e per la transazione. L'identità è quella dell'ente. Non c'è un secondo paragrafo sulle alternative scartate.

### In sede di prova

Quattro nomi, dopo i dati, un motivo ciascuno lungo una riga, assunzioni marchiate, il tempo che resta torna sul vincolo.

### Errori da evitare

- Aprire il tema con il nome del framework.
- Non nominare affatto il database.
- Elencare alternative per mostrare di conoscerle, senza scegliere.

### Approfondire

- [Architettura multi-tier](https://it.wikipedia.org/wiki/Architettura_multi-tier)
- [Database](https://it.wikipedia.org/wiki/Database)

## Spunto: consegna di un dispositivo

**Prove:** prima prova
**Tag:** traccia, inventario, consegna
**Semaforo:** verde

### Inquadramento

Lo spunto allena un passaggio di responsabilità. Un portatile non è «dato» perché qualcuno lo ha annotato. È in carico a una persona, e il carico precedente si chiude nello stesso gesto.

### Definizione

La consegna assegna un bene a una persona, in un luogo, con una data. Finché è aperta, quel bene non si consegna a un'altra persona. La restituzione chiude il carico. Lo storico resta.

### Nel dettaglio

Il vincolo è lo stesso del prestito: al più un carico aperto per bene. Si fa in una transazione che legge il bene, verifica che non sia già in carico, chiude un eventuale stato «in magazzino» e scrive la riga di consegna. Due banconi non consegnano lo stesso portatile. Il bene dismesso, perso o in riparazione non è consegnabile, e lo stato si controlla nella stessa transazione.

Chi consegna e chi riceve sono due ruoli. Chi riceve firma, anche solo con l'identità dell'ente sul proprio account, non con la password detta a un collega. La firma è un evento registrato, non un'immagine incollata senza data. Se il bene esce dall'edificio, si annota il luogo. Non si chiede, nel sistema, un dato personale che l'inventario non usa.

La restituzione è un'altra operazione, dello stesso bene, e fallisce se chi restituisce non è chi ha in carico, salvo un ruolo di recupero che si registra a parte. Cancellare la riga di consegna per «sistemare» è vietato. Si aggiunge la chiusura.

### Esempio

Il portatile 14 è in magazzino. L'ufficio lo consegna a Marta. Una seconda consegna, avviata un minuto prima e confermata un minuto dopo, fallisce. Marta lo restituisce, la riga si chiude, il bene torna in magazzino. Un collega non può restituirlo al posto suo senza il ruolo di recupero, che lascia il proprio nome nel registro.

### In sede di prova

Un carico aperto, transazione, stati non consegnabili, firma di chi riceve, restituzione come chiusura e non come cancellazione.

### Errori da evitare

- Aggiornare solo il campo «assegnato a» senza storico.
- Permettere due carichi aperti.
- Cancellare la consegna per correggere un errore.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)

## Spunto: iscrizione a un corso interno

**Prove:** prima prova
**Tag:** traccia, capienza, iscrizione
**Semaforo:** giallo

### Inquadramento

È la capienza senza il varco fisico. I posti sono un numero, le iscrizioni aperte non lo superano, e disiscriversi libera un posto. Somiglia all'accredito, con una coda.

### Definizione

Un corso ha una capienza e una scadenza di iscrizione. Un'iscrizione occupa un posto. L'annullamento, prima della scadenza, libera il posto e fa entrare il primo in lista d'attesa, in una transazione. Dopo la scadenza non ci si iscrive e non si libera più verso la lista, salvo una regola scritta.

### Nel dettaglio

Il posto non si conta nell'interfaccia. Si conta nella transazione, sulla riga del corso o con un vincolo. Due iscrizioni sull'ultimo posto: una sola riesce. La lista d'attesa non occupa un posto. Quando un posto si libera, la promozione del primo in attesa e la chiusura dell'annullamento stanno nella stessa transazione, così il posto non risulta libero e occupato insieme, e due processi non promuovono due persone.

Si decide se il corso è per un ufficio solo o per l'ente. Il predicato sta nella query. Un'iscrizione doppia della stessa persona è un vincolo di unicità, non un controllo di pagina. I dati sono nome dell'ente e ufficio, non un questionario sanitario «tanto può servire».

La scadenza usa l'orologio dell'ente. Un tentativo dopo la scadenza riceve un rifiuto previsto, ed è una prova che sposta l'orologio di prova.

### Esempio

Venti posti. La ventunesima richiesta entra in lista, senza incrementare il contatore. Un iscritto annulla: il primo in lista diventa iscritto e il contatore non cambia. Due annulli simultanei non promuovono due volte la stessa persona né perdono un posto. Alle 18 del giorno detto l'iscrizione rifiuta, e la prova lo verifica.

### In sede di prova

Capienza concorrente, lista distinta dal posto, promozione atomica, unicità della persona, scadenza sull'orologio dell'ente.

### Errori da evitare

- Contare i posti solo nel browser.
- Promuovere dalla lista in un secondo momento, a mano, senza vincolo.
- Tenere dati che il corso non richiede.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [ACID](https://it.wikipedia.org/wiki/ACID)

## Spunto: turni di una portineria

**Prove:** prima prova
**Tag:** traccia, turni, sovrapposizione
**Semaforo:** giallo

### Inquadramento

Lo spunto è la sala, con le persone al posto delle stanze. Una persona non copre due turni che si sovrappongono, e un turno scoperto si vede.

### Definizione

Un turno ha un inizio, una fine e un posto. L'assegnazione impegna una persona su quel turno. La stessa persona non ha due assegnazioni sovrapposte. Il posto, se deve essere coperto, segnala il turno ancora senza persona. La segnalazione non è un'assegnazione finta.

### Nel dettaglio

L'intervallo usa la fine esclusa, così un turno che finisce alle quattordici e uno che inizia alle quattordici sono leciti. Il controllo è lo stesso della sala e si scrive nella stessa forma, cambiando i nomi. Si aggiunge un vincolo che la sala non aveva: la persona appartiene al gruppo che può coprire quel posto. Un ospite non finisce in turno perché il nome c'era nell'anagrafe.

Il turno scoperto è una query: posti del giorno senza assegnazione. Non si crea una persona «vuoto» per riempire la riga. La query alimenta un avviso a chi organizza, entro un'ora decisa, non un allarme continuo.

Cambiare un turno già in corso è un'operazione diversa dall'assegnare il futuro. Si registra chi cambia e non si riscrive la storia. Se l'applicazione deve solo il futuro, il passato è immutabile e lo si dice.

### Esempio

Il posto nord il martedì, otto-quattordici, è scoperto: compare nell'elenco, senza un nome finto. Si assegna Luca. Un secondo turno otto-dodici per Luca viene rifiutato. Un turno quattordici-venti gli viene accettato. Alle quattordici il cambio è lecito perché la fine è esclusa. Un tentativo di assegnare un esterno, non nel gruppo di portineria, fallisce per il ruolo, prima ancora dell'intervallo.

### In sede di prova

Stesso vincolo della sala, fine esclusa, niente persona finta per il coperto, ruolo di chi può coprire, storia non riscritta.

### Errori da evitare

- Riempire il turno scoperto con un valore «da definire» che sembra una persona.
- Trattare due turni che si toccano sul bordo come un conflitto.
- Permettere a chiunque, nell'anagrafe, di essere messo in turno.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)

## La sessione sta fuori dal nodo

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** sessione, stato, elaborato
**Semaforo:** verde

### Inquadramento

È una decisione di tema che si scrive in dieci righe e toglie un'intera classe di guasti. Dove sta il fatto che questo browser è Maria, e che cosa succede se il nodo che l'ha vista cade.

### Definizione

La sessione è lo stato di un accesso già autenticato, con una scadenza. Sta in un archivio condiviso fra i nodi, oppure è un gettone firmato che ogni nodo verifica da solo, senza ricordare nulla. Non sta nella memoria di un solo processo, salvo un tema a un solo nodo, e anche lì con la consapevolezza che un riavvio disconnette.

### Nel dettaglio

Nel disegno a più nodi si sceglie e si scrive. Archivio condiviso: si revoca cancellando la riga, si scade con una data, si perde insieme al database se non si è capito che è un dato. Gettone firmato: il nodo non tiene stato, la revoca prima della scadenza è più difficile e va detta, per esempio con una lista corta di gettoni annullati. Per un'applicazione interna la sessione in database, con scadenza di una giornata di lavoro, è la scelta più facile da difendere. Il gettone si nomina se si sa dire la revoca.

Ciò che non è sessione non ci finisce. La prenotazione confermata è una riga di business, non un campo di sessione. Il ruolo si rilegge, o si tiene nella sessione con una scadenza breve, se i gruppi cambiano e si accetta il ritardo. Mettere in sessione l'elenco di tutte le sale «per non rileggere» sporca uno stato che deve restare piccolo e rende i nodi dipendenti da una copia vecchia.

Si prova il riavvio di un nodo: l'utente sul nodo restante continua, oppure ripete l'accesso, e la prenotazione già confermata c'è comunque. Le due cose si verificano separate.

### Esempio

Due nodi del portale. La sessione è una riga con identità, scadenza alle venti, identificativo casuale nel cookie. Il bilanciatore non inchioda l'utente al nodo. Si ferma un nodo: la richiesta successiva va all'altro, la sessione si legge, la prenotazione fatta un minuto prima è nel database. Un amministratore che disabilita l'account cancella le sessioni di quell'identità, e l'effetto è immediato, non «alla scadenza naturale», perché la scelta dell'archivio condiviso lo permette.

### In sede di prova

Dove sta, come scade, come si revoca, che cosa non ci va messo, che cosa succede spegnendo un nodo.

### Errori da evitare

- Tenere la sessione in memoria e mettere due nodi.
- Tenere la prenotazione solo in sessione.
- Non dire come si disconnette una persona disabilitata.

### Approfondire

- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)
- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)

## Scegliere RPO e RTO dentro il tema

**Prove:** prima prova
**Tag:** RPO, RTO, elaborato
**Semaforo:** verde

### Inquadramento

Il tema chiede l'infrastruttura. I due numeri della continuità si scelgono a partire dal danno, in una riga ciascuno, e poi si disegna solo ciò che quei numeri richiedono.

### Definizione

L'RPO è quanto lavoro si accetta di perdere: l'intervallo fra le copie, o il ritardo della replica. L'RTO è quanto si accetta di restare fermi: il tempo per tornare a un servizio usabile. Non sono lo stesso numero. Si scrivono prima dell'acquisto immaginario di un secondo sito.

### Nel dettaglio

Si parte dall'ufficio. Un registro di prenotazione delle sale, rifatto a mano nell'ora, tollera un RPO di un'ora e un RTO di un'ora, se le sale nel frattempo si tengono su un foglio. Un registro di accessi ai varchi, se il varco deve funzionare, chiede un RTO breve del varco e può accettare che il centro riallinei dopo: è il caso del bordo, e solo se il tema ha i varchi. Non si copia un RTO di quindici minuti da un testo generico.

Dal numero si deduce il disegno. RPO di un'ora: copie almeno ogni ora, e la prova che il ripristino torna. RPO di zero: replica sincrona, con il costo sulla latenza, e un secondo luogo. Se il tema non dà un secondo luogo, si scrive l'assunzione: un solo sito, RPO di un'ora, RTO di mezza giornata, copie fuori dal disco dei dati. Inventare due siti gemelli occupa la brutta e non è motivato.

Si nomina anche ciò che i numeri non coprono: il ransomware sulla copia collegata. Una copia immutabile o staccata entra se l'RPO lo consente. Se serve l'RPO zero, la copia staccata non è la replica: sono due meccanismi.

### Esempio

Per le sale si scrive: si perdono al massimo le prenotazioni dell'ultima ora, si torna entro mezza giornata con la copia della notte più i giornali, un solo sito, copia settimanale immutabile contro una cancellazione. Non si disegna un secondo data center. Per i varchi, se ci sono, si scrive un elenco locale e un RTO del centro separato. Due paragrafi, poi lo schema dei nodi coerente con quei numeri.

### In sede di prova

Numeri derivati dal danno, RPO diverso da RTO, disegno che ne consegue, assunzione se il sito è uno solo, copia staccata distinta dalla replica.

### Errori da evitare

- Scrivere «alta affidabilità» senza numeri.
- Un secondo sito non motivato dal RTO.
- Credere che la replica sostituisca la copia immutabile.

### Approfondire

- [Backup](https://it.wikipedia.org/wiki/Backup)
- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)

## Il protocollo non si sostituisce con l'applicazione

**Prove:** prima prova, orale
**Tag:** protocollo, confine, elaborato
**Semaforo:** verde

### Inquadramento

Molti temi parlano di documenti. Il candidato è tentato di costruire il protocollo dell'ente dentro l'applicazione. Il confine giusto si scrive, e salva un capitolo intero.

### Definizione

Il protocollo è il registro ufficiale dei documenti in entrata e in uscita, con data e numero, tenuto dal sistema previsto. Un'applicazione di prenotazione, di inventario o di commissione non diventa protocollo perché conserva un PDF. Se un atto deve essere protocollato, l'applicazione lo invia al protocollo o ne riceve gli estremi, e non inventa una numerazione parallela.

### Nel dettaglio

Nel tema si scrive una frase: gli estremi di protocollo, se servono, si ricevono dal sistema di protocollo; questa applicazione non assegna numeri di protocollo e non conserva in sostituzione del conservatore. Poi si progettano solo i documenti di lavoro: bozze, materiali di seduta, allegati della prenotazione. Hanno un identificativo proprio, che non si chiama protocollo per non confondere la commissione.

Se la traccia chiede espressamente il protocollo, allora sì: numero senza buchi assegnato al momento della registrazione, non della bozza, data del sistema, registro non modificabile, e si è nel tema giusto. Se la traccia non lo chiede, costruirlo è spendere l'ora su un vincolo non richiesto e sbagliarne la norma.

L'integrazione, se si nomina, è un contratto minimo: si manda un documento, si riceve numero e data, si conserva la ricevuta. Non si apre il database del protocollo. Un caricamento a mano degli estremi è lecito come assunzione, se l'integrazione non è il tema, e si marca come assunzione.

### Esempio

L'archivio materiali di una commissione conserva file e autorizza i commissari. Il numero, se un materiale diventa atto, arriva dal protocollo e si registra come attributo, univoco, non generato qui. Non c'è una tabella «protocollo» con un contatore. In orale si dice la stessa frase, e si cita la conservazione solo per distinguerla dal backup di questa applicazione.

### In sede di prova

Dire se il protocollo è nel tema. Se non c'è, non inventarlo e non chiamare protocollo un identificativo interno. Se c'è, numero al momento giusto e registro non riscrivibile.

### Errori da evitare

- Un contatore interno chiamato numero di protocollo.
- Promettere la conservazione sostituendola con il disco dell'applicazione.
- Leggere in diretto il database del protocollo.

### Approfondire

- [Protocollo informatico](https://it.wikipedia.org/wiki/Protocollo_informatico)
- [Conservazione digitale](https://it.wikipedia.org/wiki/Conservazione_digitale)

## Che cosa provare, nel tema, prima di aggiungere funzioni

**Prove:** prima prova
**Tag:** prove, vincolo, elaborato
**Semaforo:** verde

### Inquadramento

La sezione verifiche dell'elaborato spesso elenca «test unitari e di integrazione» senza un caso. Qui si scrive il caso che dimostra il vincolo, e nient'altro se il tempo scarseggia.

### Definizione

La prova del tema è un caso, con dati, che deve riuscire, e un caso che deve essere rifiutato, più il caso concorrente se il vincolo è di unicità o di capienza. È eseguita su un ambiente che non contiene i dati veri. Il nome della prova è il vincolo, non «test 1».

### Nel dettaglio

Si scrivono tre casi in prosa, già con i nomi della traccia. Sala: intervallo libero, riesce; intervallo sovrapposto, rifiuta e non scrive; due richieste insieme sullo stesso intervallo, una sola riesce. Si aggiunge il bordo se c'è, la fine uguale all'inizio dell'altra. Poi un caso di autorizzazione: un ruolo senza permesso riceve il rifiuto anche chiamando la funzione, non solo non vedendo il bottone. Poi, se c'è stato il tempo di nominarli, un riavvio di nodo con la prenotazione ancora presente.

Questo elenco è la sezione. Non si aggiunge una tassonomia di tipi di test. Si può dire che i tre casi stanno nel corredo automatico e si rieseguono a ogni modifica. È una frase, e collega la prova al rilascio.

I dati dei casi sono finti e pochi. Non si allega un'anagrafe. Non si descrive uno strumento commerciale. Chi corregge deve poter rifare il caso a mente.

### Esempio

«Maria prenota la sala A dalle dieci alle dodici: confermata. Paolo, stesse ore: rifiutato, una sola riga. Giulia, dalle dodici alle tredici: confermata, perché la fine è esclusa. Due richieste simultanee di Anna e Luca sulle quindici: una confermata, l'altra rifiutata. Un tirocinante senza ruolo: rifiutato, nessuna riga.» Cinque righe. Sono la verifica.

### In sede di prova

Casi con nomi, incluso il no, incluso il concorrente, incluso il bordo, ruolo aggirando l'interfaccia, dati finti.

### Errori da evitare

- Scrivere solo «si faranno i test».
- Provare il caso che riesce e non il rifiuto.
- Dimenticare due richieste nello stesso istante.

### Approfondire

- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)
- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
