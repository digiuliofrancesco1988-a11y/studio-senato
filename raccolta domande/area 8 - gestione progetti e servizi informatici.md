# Area 8 — Gestione di progetti e servizi informatici

Il gruppo 3 della seconda prova chiede la gestione di progetti software, di progetti infrastrutturali e dei servizi informatici. L’orale ha la stessa materia. La distinzione da tenere per tutta l’area è questa: il progetto finisce, il servizio continua.

### Il filo

Un progetto bilancia ambito, tempo e costo, e la qualità non è il quarto lato gratuito. Le fasi, l’ambito, la scomposizione del lavoro e gli stakeholder dicono che cosa si è promesso e a chi. Tempi, dipendenze e percorso critico dicono quale ritardo sposta la fine. I rischi si nominano prima che accadano. Scrum organizza il ritmo dello sviluppo. ITIL separa incidente, problema e cambiamento nell’esercizio. SLA e OLA danno i numeri del servizio. Kanban sta accanto a Scrum quando il lavoro arriva di continuo e non a sprint. DevOps è il modo in cui la modifica arriva in esercizio e i numeri del servizio tornano a chi sviluppa. La conduzione di un progetto infrastrutturale aggiunge i tempi che non dipendono dal gruppo: hardware, finestre, autorizzazioni.

### Come si risponde

Si definisce la parola e si porta un fatto di un ente. Un incidente si chiude quando il servizio torna. Un problema si chiude quando si è tolta la causa. Uno SLA senza un numero e senza una misura è un augurio. Il percorso critico è la catena che sposta la data di fine, anche se l’attività è poco prestigiosa, come ottenere un certificato. In un ente l’approvazione del rilascio può restare di una persona diversa da chi ha scritto la modifica.

### Da dove partire

Verde: che cos’è un progetto, Scrum, ITIL, SLA. Subito dopo le fasi, l’ambito, i tempi, i rischi, Kanban e DevOps. La scheda rossa su come si risponde a un quesito è un metodo, si legge una volta e non si memorizza come definizione.

## Che cos’è un progetto e che cosa si bilancia

**Prove:** seconda prova gruppo 3, orale
**Tag:** progetto, ambito, tempo, costo, qualità
**Semaforo:** verde

### Inquadramento

Un progetto è un impegno temporaneo, con un inizio e una fine, per produrre qualcosa che prima non c'era. Si bilanciano ambito, tempi e costi. Allargare l'ambito senza toccare gli altri due riduce la qualità o fa slittare la fine. Il servizio, a differenza del progetto, non finisce. Sul foglio si prende un cambiamento della traccia e si dice che cosa è progetto e che cosa, dal giorno dell'avvio, diventa servizio. Una richiesta di «già che ci siamo» è un cambio di ambito, e si tratta come tale.

### Definizione

Un progetto è uno sforzo temporaneo per produrre un risultato unico. Temporaneo significa che ha un inizio e una fine, non che dura poco. Unico significa che non è la ripetizione identica di un esercizio già stabile: quello, quando si stabilizza, diventa un servizio. Costruire il portale dei ticket è un progetto. Tenere acceso il portale, con turni, ticket e patch, è un servizio.

### I vincoli

Il triplo vincolo classico lega ambito, tempo e costo. L’ambito è l’insieme delle cose da fare e, altrettanto importante, di quelle da non fare. Il tempo è la scadenza. Il costo sono persone, contratti e beni. Se si allarga l’ambito senza toccare tempo e costo, la qualità scende, anche quando nessuno la nomina. Per questo è più onesto parlare di quattro elementi: ambito, tempo, costo e qualità. La qualità include i requisiti non funzionali, la sicurezza e l’accettazione del risultato.

Un vincolo si allenta solo decidendo. Si può ridurre l’ambito, spostare la data, aumentare le persone, oppure accettare un rischio più alto. «Fare tutto, subito, con le stesse persone e senza difetti» non è un piano. Il project manager rende visibile il trade-off a chi ha l’autorità di decidere. Non lo nasconde sperando di recuperare.

I progetti informatici falliscono in modi noti. Requisiti vaghi che crescono durante i lavori, senza una decisione. Persone assegnate a percentuale, che in realtà non ci sono. Dipendenze da un fornitore non scritte. Rischi non detti finché diventano ritardi. Un metodo di gestione è un modo di far emergere queste cose prima dell’ultimo mese.

Il progetto ha un committente, che vuole il risultato e decide le priorità, e un responsabile di progetto, che coordina il lavoro e segnala gli scostamenti. Se le due figure coincidono sempre, nessuno segnala più nulla. In un ente le figure possono avere nomi amministrativi diversi. I ruoli, però, vanno distinti.


### Nel dettaglio

Un progetto è un’impresa temporanea per produrre un risultato definito. Temporanea: ha un inizio e una fine, e alla fine il risultato passa a chi lo esercita. Se non finisce mai, è un servizio, non un progetto, e si conduce in un altro modo. Definita: si sa che cosa si consegna, abbastanza da poter dire se ci si è arrivati. «Migliorare il sistema» non è un risultato. «Mettere in esercizio il registro delle prenotazioni, con questi requisiti, entro questa data» lo è.

Si bilanciano ambito, tempo e costo, e sotto c’è la qualità. Allargare l’ambito, a parità di tempo e di costo, abbassa la qualità o fa slittare la data, anche se nessuno lo dice. Tenere la data, senza togliere ambito e senza aggiungere persone, comprime le prove. Le persone aggiunte tardi non accorciano in proporzione: vanno istruite, e per un periodo rallentano. Questo vincolo si dice all’inizio, quando un ufficio chiede una funzione in più «già che ci siamo». Si risponde con una scelta: entra, e allora esce un’altra cosa o si sposta la data; oppure non entra e va in un elenco per dopo.

La qualità non è il quarto vertice libero. È ciò che resta quando gli altri tre si sono presi tutto. Fissare una prova minima, quella senza cui non si rilascia, protegge da questo resto. Si scrive che cosa non si taglia mai: i permessi, il backup, la prova del requisito principale. Si taglia, se serve, una schermata secondaria.

Sul foglio si descrive il progetto del tema in quattro righe. Risultato, data, chi paga il lavoro, che cosa è fuori ambito. Poi un esempio di richiesta a metà che si rifiuta o si scambia. Il bilanciamento si vede nel rifiuto motivato, non nella definizione.

### Esempio

Il progetto «nuova prenotazione sale» dura quattro mesi, costa il tempo di tre persone e di un contratto di supporto, e consegna la prenotazione semplice, non i report avanzati, che sono un secondo lotto. A metà strada un ufficio chiede anche la gestione delle pulizie collegate alla sala. Il responsabile non la aggiunge in silenzio: la porta al committente, con l’effetto sulla data. O si sposta la data, o quella funzione aspetta, o si toglie un’altra funzione di pari peso. La traccia di questa decisione è il governo del progetto.

### In sede di prova

Definire il progetto come temporaneo e unico, e distinguerlo dal servizio. Elencare ambito, tempo, costo e qualità. Dire che un vincolo si cambia con una decisione esplicita. Un esempio breve vale più di uno schema di processi.

### Errori da evitare

- Chiamare progetto la gestione ordinaria della posta.
- Promettere ambito, tempo e costo rigidi insieme, senza una riserva.
- Non nominare chi decide quando i tre non stanno insieme.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [PRINCE2](https://it.wikipedia.org/wiki/PRINCE2)

## Le fasi di un progetto

**Prove:** seconda prova gruppo 3, orale
**Tag:** avvio, pianificazione, esecuzione, controllo, chiusura
**Semaforo:** giallo

### Inquadramento

Le fasi portano da un'idea approvata a un risultato consegnato: avvio, pianificazione, esecuzione, controllo, chiusura. I nomi cambiano secondo il metodo, il contenuto no. Saltare la pianificazione fa sembrare veloce l'inizio e lungo il resto. Sul foglio si assegna a ogni fase un prodotto visibile: un mandato, un piano, un incremento, un rapporto di scostamento, un verbale di chiusura. La chiusura comprende il passaggio a chi esercirà il sistema, non solo la festa di fine.

### Definizione

Un modo consolidato di descrivere il governo di un progetto, quello diffuso dal PMBOK, raggruppa il lavoro in cinque gruppi di processi: avvio, pianificazione, esecuzione, monitoraggio e controllo, chiusura. Non sono cinque mesi in sequenza rigida. Il controllo accompagna l’esecuzione. In un progetto agile i gruppi si ripetono a ogni incremento. I nomi servono a non saltare una domanda.

### Che cosa si produce in ciascun gruppo

L’avvio stabilisce che il progetto esiste, perché, chi lo vuole e chi lo conduce. Il documento di avvio, comunque lo si chiami, dice l’obiettivo in poche righe, il risultato atteso, i confini grossolani, il committente e il responsabile. Senza avvio, il progetto è un’attività ufficiosa che nessuno può chiudere.

La pianificazione rende l’obiettivo eseguibile. Si scompone l’ambito, si stimano tempi e risorse, si identificano rischi, qualità e comunicazioni. Il piano non è una camicia di forza: è lo strumento con cui, dopo, si misura lo scostamento. Un piano che non si aggiorna diventa narrativa.

L’esecuzione è il lavoro che produce il risultato: analisi, sviluppo, configurazione degli apparati, prove, incontri con gli utenti. Consuma la gran parte delle ore. È anche il momento in cui il piano incontra i fatti.

Il monitoraggio confronta i fatti con il piano. Avanzamento, costi, rischi diventati problemi, difetti, decisioni da prendere. Il controllo è la decisione conseguente: si ri-pianifica, si riduce l’ambito, si chiede una risorsa, si ferma un filone. Un progetto che «monitora» e non decide accumula ritardo educato.

La chiusura consegna in modo formale, ottiene l’accettazione, rilascia le persone, chiude i contratti, scrive che cosa si è imparato e consegna al servizio ciò che serve per esercire: credenziali, procedure, backup, known error. Un progetto senza chiusura resta aperto e continua a consumare attenzione. La chiusura include anche il caso in cui si decide di non finire: meglio una chiusura esplicita di un progetto fantasma.


### Nel dettaglio

Le fasi si possono nominare in modo classico, e per ciascuna si dice il prodotto e la decisione. Avvio: si decide se farlo, si nomina chi è responsabile, si scrive il risultato in una pagina. Senza questa pagina le fasi successive lavorano su interpretazioni diverse. Pianificazione: ambito, tempi, costi, rischi, persone. Il prodotto è il piano, corto, che si potrà aggiornare. Esecuzione: si produce il risultato, e il piano si confronta con ciò che accade. Controllo: si misura lo scostamento e si decide, non si misura per il resoconto. Chiusura: si consegna, si verifica che l’ufficio abbia ciò che era scritto, si raccolgono i conti aperti, si scrive che cosa si è imparato, si sciolgono le persone.

Il controllo è la fase che nei temi resta un aggettivo. In concreto, a intervalli fissi, si guarda che cosa è finito rispetto a ciò che si era previsto di finire, quanto si è speso, quali rischi si sono avverati. Se lo scostamento supera una soglia, si decide: si toglie ambito, si sposta la data, si aggiunge una risorsa, si ferma. Non decidere è una decisione, e di solito è la peggiore. Un progetto che scopre a una settimana dalla fine di essere a metà è un progetto che non ha avuto controllo, anche se ha avuto tante riunioni.

La chiusura si distingue dal rilascio. Il rilascio mette il sistema in mano agli utenti. La chiusura accerta che gli obblighi del progetto sono finiti: documentazione consegnata, accessi di progetto revocati, ambiente di prova sistemato, fornitore pagato per ciò che è stato accettato, punti aperti assegnati a qualcuno che li seguirà nell’esercizio. Un progetto «finito» con gli accessi dei consulenti ancora aperti e con un elenco di difetti senza padrone non è chiuso.

Sul foglio, per il tema, una tabella di quattro righe: fase, prodotto, chi decide. È più utile di un discorso sul ciclo di vita, e si ricollega al ciclo del software senza coincidere con esso. Le fasi del progetto contengono il ciclo del software, e contengono anche gare, formazioni, migrazioni.

### Esempio

Avvio: «entro giugno gli uffici prenotano le sale senza sovrapposizioni, sostituendo il foglio condiviso». Pianificazione: quattro incrementi, il primo è la prenotazione semplice, rischi sull’integrazione con l’identità. Esecuzione del primo incremento. Controllo: l’identità richiede due settimane in più, si sposta il report all’incremento successivo, la data di giugno del primo incremento resta. Chiusura dell’intero progetto: collaudo firmato, procedure consegnate al gruppo che gestisce i servizi interni, retrospettiva di una pagina.

### In sede di prova

Dire i cinque nomi e, per ciascuno, il prodotto, non la definizione circolare. Sottolineare che controllo significa decidere, e che la chiusura consegna al servizio. Se il metodo è agile, dire in quale punto i cinque gruppi si ripetono, invece di opporre i due mondi.

### Errori da evitare

- Una fase di «controllo» descritta solo come fare riunioni.
- Nessuna chiusura e nessun passaggio di consegne.
- Trattare la pianificazione come un documento che si scrive una volta e non si tocca più.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)

## Ambito, scomposizione del lavoro e stakeholder

**Prove:** seconda prova gruppo 3, prima prova
**Tag:** ambito, WBS, stakeholder, esclusi
**Semaforo:** giallo

### Inquadramento

L'ambito è ciò che si è promesso di fare e di non fare. La scomposizione spezza il lavoro in parti che si sanno assegnare e stimare. Gli stakeholder sono chi influenza il progetto o ne è influenzato, e non sono solo il committente. Sul foglio si scrive un ambito in cinque righe, con due esclusioni, e si spezza in parti. Si nomina uno stakeholder che non è nel gruppo di progetto, per esempio chi gestisce l'identità, e si dice di che decisione è padrone.

### Definizione

L’ambito è il confine del lavoro: i prodotti che il progetto consegna e i prodotti che non consegna. La scomposizione del lavoro, WBS, spezza il risultato in parti più piccole, fino a pezzi che si sanno stimare e assegnare. Gli stakeholder sono le persone e i gruppi che influenzano il progetto o ne sono influenzati, non solo il committente.

### Come si delimita

Si scrive che cosa è dentro. «Prenotazione, annullamento, divieto di sovrapposizione, elenco per sala». Si scrive che cosa è fuori. «Non la fatturazione, non l’app per i visitatori, non la gestione delle chiavi fisiche». Le esclusioni evitano il crescere silenzioso dell’ambito, lo scope creep, che è la prima causa di ritardo nei progetti osservati da vicino. Una richiesta nuova non è un nemico: è una richiesta, e si valuta contro le esclusioni. Se la si accoglie, si cambia il piano.

La WBS si organizza per prodotti, non per i nomi degli uffici. «Modulo di prenotazione», «base dati», «regole di autorizzazione», «passaggio dal foglio elettronico», «formazione dei referenti», «collaudo». Un ramo «varie» è un sintomo di ambito non capito. La WBS non è il piano temporale: non dice l’ordine. Dice di che cosa è fatto il risultato. L’ordine viene dopo, con le dipendenze.

Gli stakeholder si elencano presto. Chi userà il sistema ogni giorno. Chi autorizza le prenotazioni eccezionali. Chi gestisce le sale fisiche. Chi amministra l’identità. Chi dovrà esercire il sistema. Il revisore della sicurezza, se i dati lo richiedono. Dimenticare chi esercisce produce un sistema che nessuno sa accendere. Dimenticare l’utente produce un sistema corretto e inutilizzabile. Per ciascuno si annota che cosa gli importa e come lo si coinvolge. Non tutti stanno in ogni riunione. Tutti sanno quando possono parlare.

La comunicazione è parte dell’ambito di governo. Un progetto che non dice chi viene informato delle variazioni viene giudicato, alla fine, sulle aspettative di chi non era stato informato.


### Nel dettaglio

L’ambito si scrive in positivo e in negativo. In positivo, i risultati: il sistema fa queste cose, per questi utenti. In negativo, le esclusioni: non fa queste altre, che un lettore distratto potrebbe crederci dentro. Le esclusioni si concordano con chi ha chiesto il progetto, perché sono la parte che poi genera le discussioni. Un ambito «flessibile», da definire strada facendo, si può accettare solo se il tempo e il costo sono altrettanto flessibili. Di solito non lo sono. Allora l’ambito si chiude almeno per la fetta in corso.

La scomposizione spezza il risultato in pezzi che si sanno assegnare e finire. Il primo livello sono i grandi blocchi: dati, interfaccia, migrazione, formazione, prove. Sotto, i pezzi veri: la tabella delle prenotazioni, la schermata di richiesta, lo script di importazione, la mattina di prova con l’ufficio. Si scende finché un pezzo si può dare a una persona e ha un fatto osservabile alla fine. Non si scende fino al singolo file. Un pezzo senza fine osservabile, «curare la sicurezza», non è un pezzo di lavoro. È un tema, e va tradotto in pezzi: configurare i ruoli, provare gli accessi negati, cifrare la copia.

Gli stakeholder sono le persone che il progetto tocca o che possono fermarlo. Non è la rubrica. Per ciascuno si sa che cosa gli interessa e che cosa può fare al progetto. L’ufficio che userà il sistema decide se i requisiti sono giusti e va coinvolto presto, non alla consegna. Chi conduce l’esercizio dirà se il sistema si può tenere acceso. Chi autorizza la spesa può fermare tutto. Un consulente ha un interesse diverso da un interno. Si parla con loro in modi diversi: una prova con l’ufficio, un resoconto corto a chi autorizza, un piano di conduzione a chi erediterà il sistema.

Sul foglio: cinque risultati dentro, due esclusi, la scomposizione del primo risultato in tre pezzi osservabili, e quattro stakeholder con che cosa ci si aspetta da ciascuno. Una pagina, e l’ambito smette di essere una nuvola.

### Esempio

Stakeholder della prenotazione sale: i dipendenti che prenotano, i responsabili di piano che possono prevaricare una prenotazione, l’ufficio che gestisce le sale, l’amministratore dell’identità, il gruppo sistemi che terrà il servizio. Esclusione scritta: la prenotazione delle auto. Quando qualcuno la chiederà, e la chiederà, la risposta è «è fuori dall’ambito, apriamo una richiesta di cambiamento», non una modifica fatta il venerdì.

### In sede di prova

In un quesito, definire ambito e stakeholder e citare lo scope creep. In un progetto della prima prova, le prime due sezioni sono già questo: attori e requisiti, più una riga di esclusioni. Vale la pena scriverla.

### Errori da evitare

- Una WBS che è l’elenco delle persone.
- Coinvolgere solo il committente e scoprire gli utenti al collaudo.
- Accettare ogni richiesta per sembrare collaborativi, senza registrare l’effetto.

### Approfondire

- [Scomposizione del lavoro](https://it.wikipedia.org/wiki/Work_breakdown_structure)
- [Project management](https://it.wikipedia.org/wiki/Project_management)

## Tempi, dipendenze e piano

**Prove:** seconda prova gruppo 3
**Tag:** Gantt, dipendenza, percorso critico, milestone
**Semaforo:** giallo

### Inquadramento

Il piano mette le attività in ordine secondo le dipendenze. Il percorso critico è la catena che, se slitta, sposta la fine. Le altre attività hanno un margine. Le persone non sono disponibili per intero: hanno l'esercizio, le riunioni, le ferie. Sul foglio si fa una catena di quattro attività della traccia e si dice quale è critica. Una milestone senza un criterio per dire se è superata è una data vuota. Aggiungere persone a un lavoro che non si divide non lo accorcia quanto sembra.

### Definizione

Il piano temporale ordina le attività, mostra che cosa dipende da che cosa e rende visibile la data che non si può anticipare senza cambiare il lavoro. Il diagramma di Gantt rappresenta le attività come barre su un calendario. Il percorso critico è la catena di attività che determina la durata minima del progetto: se una di quelle slitta, slitta la fine.

### Come si costruisce un piano credibile

Si parte dalla WBS. Si stimano le attività in giorni di lavoro, non in date, e si dice chi le farebbe. Una stima senza un nome è un desiderio. Poi si segnano le dipendenze. Non si collauda ciò che non è stato integrato. Non si integra ciò che dipende dall’identità, se l’identità non è pronta. Le dipendenze fra uffici, non solo fra task tecnici, sono quelle che sfuggono.

Il percorso critico si riconosce perché quelle attività non hanno margine. Se la connessione con l’identità ritarda di una settimana e sta sul percorso critico, la fine ritarda di una settimana, a meno di non cambiare modo di lavorare. Un’attività fuori dal percorso critico può ritardare entro il suo margine senza spostare la fine. Distinguere le due cose è il senso del metodo: non tutte le urgenze sono uguali.

Le milestone sono punti di verifica, non lavori. «Identità collegata e provata», «collaudo del primo ufficio firmato». Una milestone senza un criterio di superamento è una data su un foglio.

Il piano si aggiorna quando i fatti cambiano. La data originale resta visibile, così lo scostamento si vede. Cancellare la data vecchia e scrivere quella nuova fa sembrare il progetto sempre in orario.

Le persone non rendono il cento per cento. Riunioni, supporto al servizio esistente, ferie. Un piano che assegna qualcuno per cinque giorni alla settimana a tempo pieno, mentre quella persona tiene anche l’esercizio, è un piano falso. In un ente questo è il caso normale, e dirlo è realismo, non pessimismo.

Per un progetto infrastrutturale si aggiungono i tempi che non dipendono dal team: consegna dell’hardware, finestre di fermo concordate, autorizzazioni. Ignorarle produce il Gantt in cui tutto è «configurazione» e la data è ottimista di due mesi.


### Nel dettaglio

Un piano è un elenco di pezzi, ciascuno con una durata, un predecessore e un responsabile. La durata si stima sul pezzo, non sul desiderio. Si stima con chi lo farà, e si tiene un margine sui pezzi incerti, visibile, non nascosto dentro ogni numero. Un piano senza margine è un piano che slitta il primo giorno di malattia. Un margine unico in fondo, del dieci o quindici per cento, è più onesto di un ottimismo distribuito.

La dipendenza è il vincolo che impedisce di fare tutto insieme. Non si prova il ripristino prima di avere la copia. Non si forma l’ufficio prima di avere la schermata stabile. Non si migra prima di aver provato su una copia dei dati. Da queste dipendenze esce il percorso critico: la catena più lunga, quella che determina la data di fine. Un ritardo su un pezzo del percorso critico sposta la fine. Un ritardo su un pezzo fuori dal percorso, entro il suo margine, no. Sapere quali sono i pezzi critici dice dove stare attenti e dove no. Accorciare un pezzo che non è critico non anticipa la consegna, e spendere lì è uno spreco.

Il calendario si aggancia alle date vere. Le ferie, una seduta, la chiusura di un esercizio contabile, una gara che ha i suoi tempi. Un piano fatto di settimane lavorative ideali, che ignora agosto e ignora che una gara chiede mesi, consegna una data che non esiste. Si segnano le date esterne e si fa passare il percorso critico in mezzo.

Il piano si aggiorna. Una volta alla settimana si segna che cosa è finito, che cosa slitta, e se il percorso critico è cambiato. Un piano iniziale incorniciato, mentre il lavoro vero è un altro, toglie credibilità a tutto il progetto. Sul foglio si disegna una sequenza di sei o sette pezzi del tema, con le frecce di dipendenza, si marca il percorso critico e si indica un margine. Non serve un diagramma perfetto. Serve che una dipendenza sia vera e che la data di fine sia la somma della catena lunga, non una data scelta e poi giustificata.

### Esempio

Attività: accordo con l’identità, schema dati, percorso di prenotazione, integrazione, prova con un ufficio, formazione, collaudo. L’accordo con l’identità e l’integrazione sono sul percorso critico. Lo schema dati ha margine. Se l’identità slitta, si può anticipare lo schema e i test con un’identità finta, ma non si può fingere che il collaudo finale sia indipendente. Il Gantt mostra questa catena, non tutte le sotto-attività di un’ora.

### In sede di prova

Definire Gantt e percorso critico. Dire che il critico è ciò che sposta la fine. Citare le dipendenze fra uffici e il fatto che le persone non sono disponibili per intero. Non serve disegnare un Gantt enorme in un quesito teorico: una catena di quattro attività basta.

### Errori da evitare

- Un elenco di date senza dipendenze.
- Credere che aggiungere persone a una attività già in ritardo la accorci sempre. Coordinarsi ha un costo, e alcune attività non si dividono.
- Chiamare percorso critico «le cose importanti». Può essere critica una attività poco prestigiosa, come ottenere un certificato.

### Approfondire

- [Metodo del percorso critico](https://it.wikipedia.org/wiki/Metodo_del_percorso_critico)
- [Diagramma di Gantt](https://it.wikipedia.org/wiki/Diagramma_di_Gantt)

## I rischi di progetto

**Prove:** seconda prova gruppo 3, prima prova
**Tag:** rischio, probabilità, impatto, mitigazione
**Semaforo:** giallo

### Inquadramento

Un rischio è un evento incerto che, se accade, sposta ambito, tempi o costi. Si nomina, si dice quanto è plausibile, quanto farebbe male, e che cosa si fa prima: evitarlo, ridurlo, trasferirlo, accettarlo. Un problema già accaduto non è più un rischio. Sul foglio se ne scrivono tre, specifici della traccia, per esempio il ritardo dell'identità o la sala macchine che non regge il nuovo carico. «Il progetto potrebbe ritardare» non è un rischio: è la conseguenza di rischi che non si sono voluti nominare.

### Definizione

Un rischio di progetto è un evento incerto che, se si verifica, ha un effetto sugli obiettivi. L’effetto può essere negativo o, meno spesso, positivo. Gestire i rischi non è essere pessimisti. È decidere in anticipo quali incertezze meritano un’azione e quali si accettano.

### Il registro, che è la risposta operativa

Per ogni rischio si scrive: la descrizione dell’evento, non del timore vago; la causa; l’effetto sugli obiettivi; una probabilità in scala semplice, alta media bassa; un impatto in scala semplice; un proprietario, una persona, non un ufficio intero; una risposta.

Le risposte tipiche sono quattro. Evitare: cambiare il piano così che l’evento non possa accadere. Ridurre: abbassare probabilità o impatto. Trasferire: spostare l’effetto, per esempio con un contratto, sapendo che la responsabilità verso gli utenti non si trasferisce per intero. Accettare: non fare nulla di preventivo, eventualmente preparare un’azione se l’evento si verifica. Accettare senza scriverlo è rimozione. Accettare scrivendolo è una decisione.

Il registro si rilegge. Un rischio che si è verificato diventa un problema, e va gestito come tale, non lasciato fra le ipotesi. Un rischio nuovo si aggiunge. I rischi con probabilità e impatto alti si trattano per primi. Moltiplicare le scale in un punteggio finto-preciso non serve, se le scale sono stime. Serve l’ordine.

Nei progetti software i rischi ricorrenti sono: requisiti che cambiano senza decisore; una persona sola che sa come funziona un pezzo; un ambiente di prova diverso dalla produzione; un fornitore in ritardo; dati di partenza sporchi; una finestra di fermo che l’utente non concederà. Nei progetti infrastrutturali si aggiungono consegne, impianti, e la scoperta che l’armadio non ha spazio o energia. Nominarne uno specifico del caso vale più che citare «i rischi informatici».

La sicurezza entra nel registro. «Le credenziali di amministrazione restano condivise» è un rischio di progetto se il nuovo sistema va in esercizio così. La mitigazione è una attività in piano, con una data, non un auspicio.


### Nel dettaglio

Un rischio è un evento incerto che, se accade, sposta il progetto. Si distingue dal problema, che è già accaduto e si gestisce, e dal vincolo, che è certo. «Il fornitore consegna in otto settimane» è un’ipotesi. «Il fornitore consegna in ritardo» è un rischio. «La legge obbliga a tenere i dati dieci anni» è un vincolo. Trattare un vincolo come rischio, o un problema già aperto come rischio futuro, ingombra il registro e nasconde ciò che è incerto davvero.

Il registro ha poche colonne. L’evento. La conseguenza concreta, in giorni o in denaro o in ambito. La probabilità, anche solo alta, media, bassa. Il segnale che fa capire che sta accadendo. La risposta decisa prima. Il padrone, una persona. Un rischio senza padrone è una preoccupazione. Le risposte sono di quattro tipi. Evitare: cambiare il piano così l’evento non può accadere, per esempio non dipendere da un componente fuori supporto. Ridurre: rendere meno probabile o meno grave, una prova in più, un secondo fornitore per la parte critica. Trasferire: un’assicurazione, un contratto che mette il ritardo in capo a chi può governarlo, sapendo che il danno istituzionale spesso non si trasferisce. Accettare: cosciente, per i rischi piccoli, con un margine che li copre.

Si tengono i primi rischi, non trenta. Per un sistema di ente i soliti sono: requisito capito tardi, dato di partenza più sporco del previsto, persona chiave assente, integrazione con un sistema antico più difficile, gara che slitta. Per ciascuno, la risposta si scrive ora. Il dato sporco si scopre con un campione nelle prime due settimane, non il giorno della migrazione. La persona chiave documenta e un secondo segue. L’integrazione si prova con un prototipo prima di impegnare la data.

Sul foglio, quattro rischi del tema, in tabella, con conseguenza, risposta e padrone. Una tabella piena di «monitorare» nella colonna risposta è una tabella vuota. Monitorare non è una risposta. È il modo per accorgersi che è ora di applicare la risposta.

### Esempio

Rischio: l’integrazione con l’identità non è pronta per il primo incremento. Probabilità media, impatto alto, perché blocca il collaudo. Proprietario: il responsabile di progetto. Riduzione: incontro di verifica due settimane prima, e un’identità di prova nel frattempo così lo sviluppo non si ferma. Azione se si verifica: si consegna il primo incremento solo all’ufficio pilota interno, e si sposta il collaudo generale. Il rischio è accettato nel suo residuo, non ignorato.

### In sede di prova

Definire il rischio come evento incerto con effetto. Descrivere il registro con i suoi campi. Elencare le quattro risposte. Compilare due rischi veri di un esempio, con il proprietario. Una tabella mentale completa batte un paragrafo sulla cultura del rischio.

### Errori da evitare

- Scrivere «rischio: ritardo» senza dire quale evento lo causa.
- Un registro senza proprietari.
- Trattare tutti i rischi allo stesso modo, o pretendere di azzerarli.

### Approfondire

- [Gestione del rischio](https://it.wikipedia.org/wiki/Gestione_del_rischio)

## Scrum: ruoli, eventi e artefatti

**Prove:** seconda prova gruppo 3, gruppo 2, orale
**Tag:** Scrum, sprint, product owner, backlog
**Semaforo:** verde

### Inquadramento

Scrum ha tre ruoli, il responsabile del prodotto, lo scrum master, il gruppo di sviluppo. Gli eventi danno il ritmo: pianificazione, breve incontro quotidiano, rassegna, retrospettiva. Gli artefatti sono il backlog ordinato, l'incremento, e la definizione di fatto. Sul foglio si spiega un solo sprint di un progetto d'ente, e si dice che cosa significa «fatto»: provato, non solo scritto. Lo scrum master non è il capo progetto che assegna i compiti. In un ente la rassegna è il momento in cui chi userà il sistema vede l'incremento.

### Definizione

Scrum è un metodo agile per sviluppare e sostenere prodotti complessi, organizzato in sprint: iterazioni di lunghezza fissa, di solito da una a quattro settimane, al termine delle quali c’è un incremento di prodotto utilizzabile. Ha tre responsabilità, cinque eventi e tre artefatti. I nomi vanno usati con precisione.

### Le responsabilità

Il Product Owner è una persona, non un comitato, e risponde del valore del prodotto. Tiene il product backlog, l’elenco ordinato di ciò che si vorrebbe fare, e decide l’ordine. Quando due uffici vogliono cose diverse, è il Product Owner a scegliere, dopo aver ascoltato, non il team e non il più insistente.

Lo Scrum Master risponde dell’efficacia del metodo. Toglie ostacoli, aiuta il team e l’organizzazione a capire Scrum, non assegna i compiti come un capoufficio. Non è un project manager rinominato, anche se in molti enti gli si chiede di fare entrambe le cose: se accade, va detto che si stanno sommando due ruoli.

I Developers, gli sviluppatori in senso ampio, includono tutte le competenze necessarie a produrre l’incremento: analisi, sviluppo, test, documentazione operativa. Sono loro a decidere quanto lavoro entra nello sprint, perché sono loro a saperlo fare. Un Product Owner che impone l’impegno dello sprint rompe il metodo.

### Gli eventi e gli artefatti

Lo sprint contiene gli altri eventi. Lo sprint planning sceglie un obiettivo e gli elementi del backlog che lo realizzano. Il daily scrum è un quarto d’ora del team per rivedere l’avanzamento verso l’obiettivo, non un resoconto al capo. La sprint review mostra l’incremento a chi ha interesse e raccoglie feedback. La retrospettiva è del team, sul modo di lavorare, e produce un miglioramento concreto per lo sprint successivo.

Il product backlog è ordinato e vivo. Lo sprint backlog è il piano dello sprint, di proprietà del team. L’incremento è il risultato, che rispetta una definizione di fatto: testato, integrato, documentato quanto basta, non «quasi pronto». Senza definizione di fatto, la review mostra prototipi e il progetto non avanza.

Scrum non elimina il bisogno di un orizzonte. Una roadmap di massima può esistere. Ciò che non si fa è fingere che il contenuto dello sprint di fra tre mesi sia un impegno dettagliato. L’impegno è l’obiettivo dello sprint in corso.


### Nel dettaglio

Scrum organizza il lavoro in sprint, periodi fissi di una o due settimane, alla fine dei quali c’è un incremento che si può guardare, meglio se si può usare. Il periodo non si allunga per finire il lavoro. Si finisce meno cose, e si capisce quanto il gruppo riesce a fare davvero. Questa regolarità è il punto. Senza di essa si torna a una consegna unica lontana.

I ruoli sono tre. Il product owner ordina il lavoro secondo il valore e dice che cosa significa fatto per ciascun pezzo. È una persona, non un comitato: un comitato non sceglie in tempo. In un ente è chi risponde dell’ufficio che userà il sistema, o qualcuno delegato che parla con quell’ufficio ogni settimana. Lo scrum master cura il metodo: toglie gli ostacoli, protegge il periodo dalle interruzioni, aiuta a tenere gli eventi. Non assegna i compiti e non è il capo del gruppo. Il gruppo di sviluppo decide come fare il lavoro e quanto ne entra nel periodo. Nessuno glielo impone dall’esterno. Se il gruppo è di due persone, i ruoli si possono concentrare con giudizio, e lo si dice: l’importante è che chi ordina il lavoro e chi lo fa non siano in conflitto di interesse sullo stesso punto.

Gli eventi stanno dentro lo sprint. La pianificazione, all’inizio: si sceglie quanto entra, in base a ciò che il gruppo ha dimostrato di finire le volte precedenti, non in base alla speranza. Il breve incontro quotidiano: che cosa è stato fatto, che cosa si farà, che cosa blocca. Non è un resoconto al capo. La revisione, alla fine: si mostra l’incremento a chi ha chiesto il lavoro, e si raccoglie che cosa cambiare. La retrospettiva: il gruppo guarda come ha lavorato e sceglie un miglioramento solo, per il periodo successivo.

Gli artefatti sono tre. Il product backlog, l’elenco ordinato di tutto ciò che si vorrebbe. Lo sprint backlog, ciò che è entrato in questo periodo. L’incremento, il risultato, che rispetta la definizione di fatto: provato, integrato, documentato quanto basta. Una definizione di fatto scritta evita il «è fatto, manca solo da provare». Sul foglio si applicano i tre ruoli al tema, con nomi di uffici, e si racconta uno sprint: che cosa entra, che cosa si mostra al quattordicesimo giorno, che cosa resta fuori.

### Esempio

Sprint di due settimane sul portale dei ticket. Obiettivo: il dipendente apre un ticket e lo vede in elenco. Nel backlog restano fuori i report, voluti dal responsabile e rimandati dal Product Owner. Il team rifiuta di aggiungere, a metà sprint, la gestione degli allegati, e la mette in cima al backlog successivo. Alla review un dipendente vero prova il percorso e scopre che manca la conferma via mail: entra nel backlog, non nello sprint già chiuso. In retrospettiva il team nota che l’ambiente di prova era instabile e chiede mezza giornata di sistemazione nel prossimo sprint.

### In sede di prova

Dire i tre ruoli con la responsabilità, non con un aggettivo. Dire che lo sprint ha una lunghezza fissa e produce un incremento. Citare la definizione di fatto e il fatto che il backlog ha un solo ordinatore. Distinguere Scrum dal project management tradizionale invece di dichiararli nemici: in un ente possono convivere un perimetro di progetto e uno Scrum sul prodotto.

### Errori da evitare

- Uno Scrum Master che assegna le attività ogni mattina e un daily di un’ora.
- Sprint che non producono nulla di provabile, chiamati comunque Scrum.
- Due Product Owner in disaccordo, cioè nessun Product Owner.

### Approfondire

- [La guida di Scrum](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Italian.pdf)
- [Manifesto agile in italiano](https://agilemanifesto.org/iso/it/manifesto.html)

## Servizi IT: ITIL, incidente, problema e cambiamento

**Prove:** seconda prova gruppo 3, orale
**Tag:** ITIL, incident, problem, change, servizio
**Semaforo:** verde

### Inquadramento

ITIL è un quadro per l'esercizio, non per il cantiere. L'incidente è un servizio interrotto o degradato: si chiude quando il servizio torna. Il problema è la causa, e si chiude quando la causa è tolta o aggirata in modo stabile. Il cambiamento è una modifica autorizzata, provata, con un ritorno indietro. Sul foglio si prende un guasto e lo si porta attraverso i tre, senza fermarsi all'incidente. Un cambiamento fatto di venerdì sera, senza prova, non diventa sano perché il gruppo usa altre parole di ITIL.

### Definizione

Un servizio informatico è un modo di fornire valore a chi lo usa, senza che chi lo usa debba gestire i costi e i rischi sottostanti. La gestione dei servizi è l’insieme delle pratiche per progettare, erogare e migliorare quei servizi. ITIL è il corpo di pratiche più citato. Non è un metodo di progetto. Presuppone che il servizio esista e debba restare utile.

### Le tre pratiche che finiscono nei quesiti

L’incident management si occupa dell’incidente: un’interruzione non pianificata o una riduzione della qualità del servizio. Lo scopo è ripristinare il servizio in fretta, anche con una correzione temporanea. Il server non risponde, la coda di stampa è ferma, nessuno riesce ad accedere. Si classifica l’impatto, si comunica, si ripristina, si chiude. Non è il momento di rifare l’architettura.

Il problem management si occupa del problema: la causa, o la causa potenziale, di uno o più incidenti. Lo scopo è capire e rimuovere la causa, o rendere nota una scorciatoia finché la causa resta. Tre incidenti di disco pieno in un mese sono un problema. L’incidente chiude il singolo disco pieno. Il problema chiede perché si riempie e che cosa si cambia.

Il change enablement, la gestione dei cambiamenti, si occupa di far passare le modifiche con un rischio controllato. Una modifica è l’aggiunta, la modifica o la rimozione di qualcosa che può avere effetto sul servizio. Si valuta, si autorizza, si pianifica, si prova, si ha un modo per tornare indietro, si verifica dopo. Non ogni modifica vuole lo stesso rito. Una correzione urgente segue un canale rapido, con un responsabile, e una revisione successiva. Una modifica normale segue il percorso ordinario. Una modifica standard, ripetitiva e a basso rischio, è pre-autorizzata. Il punto è che «siamo entrati in produzione perché serviva» non è un processo.

Accanto a queste, la richiesta di servizio è la domanda ordinaria di qualcosa di previsto: un accesso, un nuovo PC, una casella. Non è un incidente. Trattarla come un incidente intasa la coda di chi ha il servizio fermo.

ITIL 4 parla di co-creazione di valore, di pratiche invece che di processi rigidi, e delle quattro dimensioni: organizzazione e persone, informazione e tecnologia, partner e fornitori, flussi di valore e processi. In un orale, citare che la tecnologia è una delle quattro dimensioni evita la risposta tutta fatta di strumenti.


### Nel dettaglio

Il progetto finisce. Il servizio continua. ITIL è un insieme di pratiche per condurre i servizi, e in prova se ne usano tre, senza inseguire il glossario. L’incidente è un’interruzione o un degrado del servizio: la prenotazione non si apre, la stampa non esce. Si gestisce per ripristinare in fretta, anche con una correzione temporanea. Si classifica per impatto e urgenza, e da lì viene il tempo di risposta promesso. Un incidente si chiude quando il servizio è tornato, non quando si è capita la causa.

Il problema è la causa, spesso di più incidenti. Si indaga con calma, fuori dall’urgenza. Si trova, si registra, si decide se vale la pena rimuoverlo. Un problema noto, con una correzione temporanea scritta, permette al prossimo incidente uguale di durare minuti invece che ore. Confondere incidente e problema porta a due difetti opposti: cercare la causa mentre l’ufficio è fermo, oppure riavviare ogni volta senza mai chiedersi perché. Si fanno entrambi, in momenti diversi, da persone che possono anche coincidere, con due cappelli diversi.

Il cambiamento è una modifica deliberata: una patch, una configurazione, un rilascio. Si distingue dall’incidente perché lo si sceglie. Si valuta il rischio, si prova, si applica in una finestra, si tiene pronto il ritorno indietro, si registra. Un cambiamento di emergenza, fatto di notte per chiudere un incidente grave, esiste e subito dopo si registra lo stesso, perché altrimenti la sala del giorno dopo non sa più com’è fatta. La maggior parte dei fermi, in molte organizzazioni, nasce da un cambiamento, non da un guasto improvviso. Per questo la pratica del cambiamento protegge la disponibilità più di un apparato nuovo.

Sul foglio si raccontano tre fatti dello stesso sistema. Martedì la schermata non si apre: incidente, si torna alla versione precedente, servizio su in un’ora. Mercoledì si capisce che un rilascio ha introdotto il difetto: problema, si corregge. Venerdì la correzione esce come cambiamento, provata, con ritorno pronto. Tre parole, tre tempi, un esempio solo.

### Esempio

Alle 9 il portale non si apre. Incidente: il team riavvia il nodo e il servizio torna alle 9.20, gli utenti sono avvisati. Problema: il nodo si satura perché un report senza limiti viene lanciato ogni mattina. Si apre un problema, si documenta la scorciatoia «non lanciare quel report in orario», e si pianifica una modifica applicativa. La modifica passa dal change: prova in collaudo, finestra, piano di ritorno. Tre pratiche, tre scopi, un solo disservizio.

### In sede di prova

Aprire distinguendo servizio e progetto, poi incidente e problema, con l’esempio del ripristino rapido contro la causa. Descrivere il cambiamento con l’autorizzazione e il ritorno indietro. Usare i termini inglesi, perché sono quelli della pratica, e tradurli. Non riassumere ITIL in un elenco di quindici processi.

### Errori da evitare

- Chiamare problema ogni ticket, perdendo la distinzione.
- Un cambiamento urgente senza nessuna traccia, o un cambiamento ordinario che richiede tre settimane per alzare un limite e così spinge le persone ad aggirarlo.
- Confondere ITIL e Scrum. Possono toccarsi nel momento in cui una modifica sviluppata in uno sprint entra in esercizio.

### Svolgimento da consegnare
Un progetto finisce. Un servizio no. Costruire il portale è un progetto: ha un inizio, una fine e un risultato unico. Tenerlo acceso, con turni, richieste e correzioni, è un servizio. ITIL è il corpo di pratiche più citato per gestire servizi, non per scrivere il codice. In un quesito basta non mescolarlo con Scrum. Scrum organizza la costruzione di un incremento. ITIL organizza l'esercizio. Si toccano nel momento in cui una modifica entra in produzione.

L'incidente è un'interruzione non pianificata o una riduzione della qualità. Alle nove il portale non si apre. Lo scopo della gestione dell'incidente è ripristinare, anche con una correzione temporanea: si riavvia il nodo, il servizio torna alle nove e venti, gli utenti sono avvisati. Non è il momento di ridisegnare l'architettura. Il problema è la causa, o la causa potenziale, di uno o più incidenti. Se il nodo si satura ogni mattina perché un report senza limiti parte alle otto e mezzo, ripristinare non impedisce il ritorno. Si apre un problema, si documenta la scorciatoia «quel report non si lancia in orario di sportello», e si pianifica la correzione. La richiesta di servizio è un'altra cosa ancora: un accesso nuovo, una casella, un PC. Trattarla come un incidente intasa la coda di chi ha il servizio fermo.

Il cambiamento è l'aggiunta, la modifica o la rimozione di qualcosa che può avere effetto sul servizio. Non ogni cambiamento vuole lo stesso rito, e questo equilibrio va detto, perché un processo che richiede tre settimane per alzare un limite spinge le persone ad aggirarlo, e un cambiamento fatto «perché serviva» senza traccia è esso stesso un incidente in attesa. Il cambiamento normale si valuta, si autorizza, si prova, ha un modo per tornare indietro e si verifica dopo. Quello urgente ha un canale rapido, un responsabile nominato e una revisione successiva, non l'assenza di ogni regola. Quello standard, ripetitivo e a basso rischio, è pre-autorizzato. La correzione del report, nell'esempio, è un cambiamento normale: prova in collaudo, finestra, piano di ritorno. Non si infila nella stessa mattina dell'incidente, a meno che non sia l'unico modo di restare in servizio, e allora è urgente e si registra lo stesso.

Una risposta completa chiude sul valore per chi usa il servizio, non sul nome del processo. L'incidente restituisce il servizio. Il problema evita che l'incidente torni. Il cambiamento fa entrare la correzione senza produrne un altro. Se manca uno dei tre, il servizio o resta fermo, o si rompe ogni mattina, o si ripara in modo non riproducibile.

```disegno
titolo: Lo stesso disservizio, tre pratiche
passo: Incidente, ore 9.00 | Il portale non si apre. Si riavvia il nodo. Il servizio torna. Gli utenti sono avvisati.
passo: Problema, lo stesso giorno | La causa è un report senza limiti. Si scrive la scorciatoia e si tiene aperto il problema.
passo: Cambiamento, la settimana dopo | La correzione si prova, si rilascia in finestra, si può tornare indietro.
nota: Chiudere l'incidente non chiude il problema. Il problema senza cambiamento resta una nota.
```

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)

## SLA, OLA e misure

**Prove:** seconda prova gruppo 3, orale, prima prova
**Tag:** SLA, OLA, KPI, livello di servizio
**Semaforo:** verde

### Inquadramento

Lo SLA è l'accordo con chi usa il servizio: un numero, una finestra, una misura. L'OLA è l'accordo interno fra i gruppi che concorrono a mantenerlo. Senza misura, lo SLA non si sa se è stato rispettato. Sul foglio si scrive uno SLA per la traccia, per esempio il ripristino entro quattro ore fuori orario, e l'OLA corrispondente, chi interviene e in quanto. Si dice dove si legge il dato, un registro, non un'impressione. Un obiettivo che non si può misurare non si promette.

### Definizione

Uno SLA, service level agreement, è un accordo fra chi eroga il servizio e chi lo riceve, che descrive il servizio e fissa livelli misurabili. Un OLA, operational level agreement, è l’accordo interno fra i gruppi che insieme erogano quello SLA. Un KPI è un indicatore scelto per capire se le cose stanno andando come previsto. Lo SLA promette. L’OLA rende la promessa possibile. Il KPI avvisa.

### Come si scrive un livello che non sia una frase vuota

Un livello ha un servizio, una misura, una soglia, una finestra e una conseguenza. «Il servizio di prenotazione è disponibile nel 99 per cento degli orari di ufficio, misurato ogni mese, esclusa la finestra di manutenzione del sabato mattina comunicata prima. Se il mese scende sotto la soglia, il fornitore interno presenta la causa e il piano nella settimana successiva.» Senza finestra e senza misura, il 99 per cento non significa nulla.

Si promette ciò che si sa misurare e che si è in grado di tenere. Un RTO di quindici minuti scritto in uno SLA, senza un secondo nodo e senza una prova, è una promessa falsa. Meglio un RTO di quattro ore vero. I livelli si accordano con i requisiti non funzionali del progetto: non sono un documento di un altro ufficio.

L’OLA traduce lo SLA verso chi non parla con l’utente. Se lo SLA promette la presa in carico di un incidente bloccante in trenta minuti, l’OLA dice chi è di turno, come si passa la mano, e che il gruppo sistemi risponde al gruppo applicativo in quindici minuti. Senza OLA, lo SLA è un manifesto.

I KPI di un servizio di ticketing, per esempio, sono il tempo medio di presa in carico, la percentuale di ticket riaperti, il rispetto dello SLA, il numero di incidenti ripetuti dallo stesso problema. Non si misurano venti numeri. Si misurano quelli su cui si è disposti a intervenire. Un indicatore senza una soglia di azione è un cruscotto decorativo.

Lo SLA non è lo strumento con cui si punisce. È lo strumento con cui si discute di aspettative. Se gli utenti si aspettano un servizio h24 e lo SLA dice orario d’ufficio, o si cambia il servizio o si cambiano le aspettative. Tacerlo produce insoddisfazione che nessuna patch cura.


### Nel dettaglio

Uno SLA è un accordo con chi usa il servizio, o con chi lo paga. Dice che cosa si promette, in numeri, e che cosa succede se non si mantiene. Senza numeri è una frase di cortesia. Un OLA è l’accordo interno fra i gruppi che concorrono a mantenerlo: fra chi conduce l’applicazione e chi conduce la sala, fra l’applicazione e l’identità. Lo SLA verso l’ufficio non può promettere un’ora se l’OLA con la sala ne promette quattro. Si scrivono insieme, e lo SLA è la conseguenza degli OLA, non il contrario.

I numeri tipici, da scegliere con sobrietà. Orario di disponibilità: giorni lavorativi, dalle otto alle diciotto, non «sempre», se di notte non c’è nessuno. Tempo di presa in carico di un incidente, secondo la priorità. Tempo di ripristino obiettivo. Finestre di manutenzione, in cui il fermo è concordato e non conta come inadempienza. Un obiettivo di ripristino di quindici minuti, senza un secondo nodo e senza un presidio, è una promessa falsa. Si scrive il numero che il disegno regge.

Si misura ciò che si è promesso, e poco altro. La disponibilità si calcola sul periodo e sull’orario pattuito, togliendo le finestre concordate. Il tempo di ripristino si misura dal momento in cui l’incidente è segnalato, non dal momento in cui qualcuno ci si mette. Un cruscotto con quaranta indicatori non si legge. Quattro numeri, letti ogni mese, con una soglia oltre la quale si apre un problema, bastano. L’indicatore che non cambia alcuna decisione si toglie.

La sanzione, in un ente, spesso non è una penale. È un vincolo di miglioramento: se per due mesi il ripristino supera l’obiettivo, si apre un cambiamento, si rivede il disegno o si rivede l’obiettivo. Un obiettivo che si manca sempre e non produce alcuna azione è un numero decorativo. Sul foglio, per il servizio del tema: orario, tempo di presa in carico, tempo di ripristino, finestra di manutenzione, e l’OLA corrispondente con la sala. Cinque righe, tutte con un numero.

### Esempio

SLA del portale interno: disponibile dalle 8 alle 18 dei giorni lavorativi, presa in carico degli incidenti che bloccano tutti entro trenta minuti in quella fascia, ripristino entro quattro ore come obiettivo. OLA: il monitoraggio avvisa il turno, il turno applica la procedura di riavvio, se non basta chiama il reperibile del database entro trenta minuti. KPI mensile: percentuale di disponibilità, numero di incidenti, percentuale di ripristini entro il tempo. La manutenzione straordinaria è fuori dal calcolo solo se è stata comunicata il giorno prima.

### In sede di prova

Definire i tre acronimi senza scambiarli. Scrivere un livello completo, con soglia e finestra, non un aggettivo. Dire che lo SLA deve essere coerente con l’architettura: non si promette una disponibilità che il disegno non regge. In un progetto, un riquadro «livelli di servizio» di cinque righe è spesso ciò che manca.

### Errori da evitare

- SLA come sinonimo di contratto legale lungo. Può esserlo, e può essere un accordo interno: l’elemento è la misura.
- Scambiare OLA e SLA.
- Un KPI che nessuno calcola, perché i log non ci sono.

### Approfondire

- [Accordo sui livelli di servizio](https://it.wikipedia.org/wiki/Service_level_agreement)
- [ITIL](https://it.wikipedia.org/wiki/ITIL)

## Conduzione di un progetto infrastrutturale

**Prove:** seconda prova gruppo 3, prima prova
**Tag:** infrastruttura, finestra, collaudo, migrazione
**Semaforo:** giallo

### Inquadramento

Un progetto su sala, rete o posti di lavoro ha tempi che non dipendono dal gruppo: consegna dell'hardware, finestre in cui si può spegnere, autorizzazioni, prove degli impianti. Ignorarli produce un piano ottimista. Sul foglio si aggiungono queste voci a una catena tecnica e si dice quale sta sul percorso critico. Si prevede il ritorno indietro se la modifica di rete isola una sede. Il collaudo include l'impianto, non solo l'applicazione.

### Definizione

Un progetto infrastrutturale cambia la base su cui i servizi poggiano: rete, sale, server, identità, piattaforme. Si conduce con gli stessi principi di un progetto software e con vincoli in più, perché un errore ferma servizi che non sono l’oggetto del progetto e perché molte attività hanno tempi fisici e finestre rare.

### Che cosa cambia rispetto a un progetto solo software

Le dipendenze sono fisiche e contrattuali. La consegna di un apparato, l’intervento in sala, il certificato, il cambio di un record DNS pubblico, l’accordo con un altro ente. Vanno nel piano come attività, con un proprietario esterno e un margine. Non come note a piè di pagina.

Le finestre di modifica sono scarse. Un sabato mattina buttato via perché il piano di ritorno indietro non era pronto costa un mese. Per ogni intervento si scrivono: il criterio di successo, il criterio di annullamento, chi decide di tornare indietro, e l’ora oltre la quale si torna indietro comunque, anche se «manca poco». Questa regola salva i lunedì.

Il collaudo infrastrutturale osserva i servizi, non solo le spie degli apparati. Dopo aver spostato un firewall si prova l’applicazione, la posta e l’accesso di amministrazione, non solo il ping. Si prova dalla rete degli utenti, non solo dalla rete di chi ha fatto il lavoro.

La migrazione si fa per fasi quando è possibile. Un ufficio pilota, un servizio non critico, poi il resto. Il ritorno al vecchio percorso resta disponibile finché il nuovo non ha superato un periodo di osservazione. Spegnere il vecchio il venerdì sera è un gesto da registro rischi, non un gesto eroico.

La documentazione operativa è un prodotto del progetto, non un optional finale. Schemi di rete aggiornati, credenziali in un deposito, procedure di riavvio, numeri dei contratti di assistenza. Senza questi il progetto «finisce» e il servizio nasce già incidente.

La sicurezza si collauda insieme. Le regole del firewall nuovo si confrontano con quelle vecchie. Si verifica che l’amministrazione non sia rimasta esposta. Un progetto infrastrutturale che migliora le prestazioni e apre una porta in più ha peggiorato il sistema.


### Nel dettaglio

Un progetto infrastrutturale sposta o costruisce ciò su cui i servizi poggiano: sala, rete, storage, identità, virtualizzazione. Il difetto tipico è trattarlo come un acquisto. Arrivano le macchine, si accendono, e solo allora si scopre che le applicazioni non sanno spostarsi, che i cavi non passano, che la finestra di fermo non basta, che nessuno ha avvisato gli uffici. Si conduce come un progetto: risultato, ambito, dipendenze, rischi, e una prova prima del passaggio.

Le dipendenze sono fisiche e organizzative. Il nuovo storage deve esistere prima della migrazione delle macchine. La migrazione di una macchina richiede una finestra e un modo di tornare indietro, quindi una copia. L’identità deve funzionare nel posto nuovo prima che le applicazioni ci arrivino, altrimenti nessuno entra. La rete fra i due posti deve reggere il volume della copia iniziale, che è molto più grande del traffico di un giorno. Si prova con una macchina non critica. Poi con una critica, in una finestra. Poi il resto. Il big bang, tutto in una notte, si sceglie solo se non esiste un’alternativa, e si scrive perché.

Il rischio proprio di questi progetti è il fermo lungo di molti servizi insieme. Si riduce separando i passaggi e tenendo il vecchio acceso e integro finché il nuovo non ha lavorato per un periodo. Si riduce anche provando il ritorno: tornare indietro alle tre di notte, senza averlo mai provato, raddoppia il fermo. Un secondo rischio è la competenza concentrata in un fornitore. Il contratto prevede l’affiancamento, e una persona interna segue ogni passaggio, non per gentilezza: alla fine del progetto il fornitore esce e la sala resta.

Si misura la riuscita in modo osservabile. Le applicazioni critiche funzionano dal nuovo sito per due settimane. I tempi di risposta sono quelli di prima. Il vecchio si spegne a una data, non «quando si è pronti», perché senza data non si spegne mai e si pagano due infrastrutture. Sul foglio: l’ordine dei passaggi, la prova sulla macchina non critica, il ritorno, la data di spegnimento del vecchio, e chi resta a condurre.

### Esempio

Sostituzione del firewall perimetrale. Progetto con ambito: sostituzione senza nuove funzioni, le regole attuali riprodotte e poi ripulite in un secondo lotto. Finestra: sabato, inizio alle 6, punto di non ritorno alle 11, riapertura degli uffici lunedì. Prove: portale, posta, VPN, un accesso applicativo, un tentativo che deve essere rifiutato. Osservazione di una settimana con il firewall vecchio spento ma non smontato. Documentazione consegnata al gruppo reti. Il lotto due, la pulizia delle regole, è un altro progetto o un cambiamento ordinario, non si infila nella stessa notte.

### In sede di prova

Dire che l’infrastruttura si gestisce come progetto, con in più finestre, piano di ritorno, collaudo dei servizi e documentazione operativa. Raccontare una finestra con l’ora del ritorno indietro. Collegare al change management: l’intervento è un cambiamento autorizzato, non un’iniziativa del tecnico di turno.

### Errori da evitare

- Collaudare solo gli apparati e non i servizi.
- Nessun piano di ritorno, perché «andrà bene».
- Spegnere il vecchio prima del periodo di osservazione.

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)
- [Disaster recovery](https://it.wikipedia.org/wiki/Disaster_recovery)

## Come si risponde a un quesito di questa materia

**Prove:** seconda prova gruppo 3
**Tag:** metodo di risposta, quesito
**Semaforo:** rosso

### Inquadramento

La risposta di gestione ha sempre un termine definito, una distinzione dal termine vicino, e un esempio di ente con una decisione. Definizione, differenza, esempio, chiusura. Sul foglio si tiene questo ordine anche sotto pressione, perché è l'ordine in cui chi corregge cerca i punti. Si evita il glossario: tre termini usati bene valgono più di quindici nominati. Se il quesito cita un metodo che si conosce a metà, si descrive la funzione e non si inventano i rituali.

### Definizione

Un quesito del terzo gruppo chiede di mostrare che si sa governare un’attività, non di recitare un glossario. La risposta buona usa i termini giusti dentro un caso, e distingue ciò che va deciso da ciò che va eseguito.

### Uno schema da riempire in venti minuti

Si definisce il termine principale della domanda, in due frasi, senza esempi. Se la domanda confronta due termini, si definiscono entrambi e si dice la differenza in una frase sola, subito.

Si descrive il meccanismo con tre o quattro elementi, non con dieci. Per Scrum: ruoli, sprint, backlog. Per i servizi: incidente, problema, change. Per il progetto: vincoli e decisore.

Si dà un esempio piccolo e completo, preferibilmente un servizio di un ente. L’esempio contiene una decisione: qualcuno sceglie di rimandare una funzione, di tornare indietro da una finestra, di accettare un rischio residuo.

Si dice il limite del metodo. Scrum non stima i tempi di consegna dell’hardware. ITIL non scrive il codice. Il Gantt non è la realtà. Il limite dimostra che il metodo è stato capito come strumento.

Si chiude rispondendo alla domanda con una frase che potrebbe stare da sola. Chi legge solo l’ultima frase deve trovare la tesi.

Il lessico si tiene in italiano, con l’inglese tecnico fra parentesi alla prima occorrenza se serve. Non si alternano cinque marchi di metodi. Se si cita un marchio, un concetto deve seguirlo.


### Nel dettaglio

Un quesito di gestione chiede di applicare un metodo a un caso, non di definire il metodo. Si legge il caso e si sottolineano i fatti: che cosa va prodotto, per quando, chi è scontento, che cosa è già successo. Si sceglie uno strumento solo, quello che il caso chiede. Se il caso descrive un servizio che si ferma ogni settimana, lo strumento è incidente e problema, non il triangolo di progetto. Se il caso descrive una consegna che slitta e un ufficio che aggiunge richieste, lo strumento è l’ambito e il percorso critico. Mettere tutti i metodi nella stessa risposta produce una pagina generica.

La struttura, in quattro blocchi, si scrive quasi sempre uguale. Si dice che cosa sta succedendo, in due frasi, usando i fatti del caso e non altri. Si dice quale strumento si applica e perché è quello. Si applica: una tabella corta, quattro rischi, tre requisiti, uno sprint, un SLA con i numeri ricavati dal caso. Si chiude con la decisione e con che cosa si guarda per capire se ha funzionato. La decisione è la parte che manca nelle risposte deboli, che descrivono il metodo e non scelgono.

I numeri si prendono dal caso o si dichiarano. Se il caso non dà la data, si scrive «manca la data, la chiederei, e nel frattempo ragiono su quattro settimane». Inventare un dettaglio e trattarlo come un fatto è un difetto. Dichiarare un’assunzione è una competenza. Si resta dentro il caso: non si riscrive l’informatica dell’ente, non si propone una riorganizzazione, se non è chiesta.

A casa si prende un quesito e si risponde in quaranta minuti, a mano, una pagina e mezza. Poi si confronta con lo schema: fatti, strumento, applicazione, decisione. Se la pagina è tutta definizione, si butta e si rifà partendo dalla tabella. Il giorno della prova il metodo è già nella mano, e la testa sta sul caso.

### Esempio di chiusura

Domanda: differenza fra incidente e problema. Chiusura: «L’incidente è il disservizio da ripristinare subito; il problema è la causa da rimuovere perché gli incidenti non si ripetano. Ripristinare senza aprire il problema, quando l’incidente si ripete, lascia il servizio fragile.»

### In sede di prova

Riservare cinque minuti alla rilettura, cercando la definizione e l’esempio. Se manca uno dei due, aggiungerlo anche in fondo. Un quesito di questo gruppo si vince sulla distinzione netta fra due parole che nel linguaggio comune si mescolano.

### Errori da evitare

- Un elenco di certificazioni e di acronimi senza un caso.
- Rispondere di Scrum a una domanda sullo SLA, perché è l’argomento appena studiato.
- Nessuna decisione nell’esempio: solo «si fa una riunione».

### Approfondire

- [La guida di Scrum in italiano](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Italian.pdf)
- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [ITIL](https://it.wikipedia.org/wiki/ITIL)

## Kanban, accanto a Scrum

**Prove:** seconda prova gruppo 3, orale
**Tag:** Kanban, Scrum, flusso, WIP
**Semaforo:** giallo

### Inquadramento

Kanban rende visibile il flusso e limita quanto lavoro è aperto insieme. Sta bene quando le richieste arrivano di continuo, come l'assistenza, e non a blocchi di sprint. Scrum sta bene quando si costruisce un incremento su un obiettivo. I due possono convivere: Scrum per il progetto, Kanban per il servizio. Sul foglio si sceglie in base a come arriva il lavoro della traccia, e si dice il limite di lavori aperti, che è la parte che impedisce di iniziare tutto e finire niente.

### Definizione

Kanban è un modo di gestire un flusso di lavoro rendendo visibile lo stato di ogni elemento e limitando quanti elementi stanno in corso nello stesso momento. Non impone sprint di lunghezza fissa né un incremento da chiudere a una data. Scrum impone un ritmo: un obiettivo, una durata, una review. Kanban impone un limite al lavoro iniziato e non finito. Si possono usare insieme, e in un quesito vanno distinti.

### Il meccanismo

La tavola ha colonne che sono stati reali: da fare, in corso, in prova, fatto. Ogni richiesta è un cartellino. Il limite sul «in corso», per esempio due, impedisce di aprire la quinta attività mentre le prime due non sono finite. Il limite è la parte sostanziale, non la tavola disegnata. Senza limite, Kanban è un elenco colorato e il team accumula lavori a metà, che è il modo più comune di sembrare occupati e non consegnare.

Kanban si adatta bene al servizio e alla manutenzione, dove le richieste arrivano in continuo e non si raggruppano in un obiettivo di quindici giorni: un guasto, una piccola modifica, una domanda. Si misura il tempo da quando il cartellino entra a quando esce. Scrum si adatta meglio a un prodotto che si vuole far crescere a incrementi dimostrabili, con una persona che ordina il backlog. Un team di esercizio che ogni due settimane butta via il lavoro non finito per inseguire l'obiettivo dello sprint sta usando lo strumento sbagliato. Un team di prodotto che non ha un ritmo e non mostra mai nulla a chi ha chiesto il sistema sta usando Kanban come alibi.

In un ente i due possono convivere. Il gruppo che costruisce il portale lavora a sprint. Il gruppo che tiene i servizi usa una tavola con un limite, e distingue incidenti, problemi e richieste, che restano pratiche ITIL: Kanban non le sostituisce, le rende visibili. Il cambiamento urgente non aspetta la review dello sprint, e non salta il limite senza che qualcuno lo veda.

```disegno
titolo: Una tavola minima di esercizio
zona: Da fare, senza limite rigido | Incidenti nuovi, richieste
zona: In corso, limite 2 | Ciò che qualcuno sta davvero facendo
zona: In prova | La correzione c'è, non è ancora in servizio
zona: Fatto oggi | Ripristinato o rilasciato, con l'ora
nota: Il limite sulla colonna centrale è la regola. Aprirne cinque significa non aver finito le prime.
```


### Nel dettaglio

Kanban gestisce un flusso continuo, senza periodi fissi. Le richieste arrivano quando arrivano, e il lavoro si vede su una lavagna: da fare, in corso, in attesa, fatto. Il punto non è la lavagna. È il limite al lavoro in corso. In ogni colonna sta al massimo un certo numero di pezzi. Quando il limite è raggiunto, non si comincia nulla di nuovo: si finisce, oppure si sblocca ciò che è in attesa. Senza il limite, la lavagna è un elenco, e tutto è «in corso», cioè nulla lo è.

Si usa dove il lavoro non si pianifica a sprint perché arriva da fuori in modo irregolare: le richieste di assistenza, le piccole modifiche, i guasti. Uno sprint costringerebbe ad aspettare l’inizio del periodo per prendere un guasto, il che è assurdo, o a interromperlo di continuo, il che lo svuota. Kanban prende il pezzo, lo fa scorrere, e misura quanto ci mette da quando entra a quando esce. Quel tempo, più che la velocità di un periodo, è la misura. Se cresce, c’è un intasamento, e di solito l’intasamento è visibile nella colonna più piena.

Le politiche si scrivono. Che cosa significa «fatto». Chi può mettere un pezzo in cima. Che cosa fare quando arriva un’urgenza: si può superare il limite, e lo si segna, così le urgenze restano visibili e non diventano la norma. Una lavagna senza politiche diventa il modo più educato di ignorare la coda.

Sta benissimo accanto a Scrum, non al posto di tutto. Lo sviluppo di un sistema nuovo, con un incremento da mostrare, sta in Scrum. La conduzione delle richieste quotidiane, mentre il sistema vive, sta in Kanban. Lo stesso gruppo piccolo può usare l’uno per il progetto e l’altro per il servizio, e deve sapere in quale dei due sta ogni richiesta. Sul foglio si disegnano quattro colonne, si mette un limite sulla colonna in corso, e si racconta un’urgenza che sfora il limite e viene segnata. Poi una frase su che cosa, invece, resterebbe in uno sprint.

### In sede di prova

Definire Kanban con la visibilità e il limite al lavoro in corso. Confrontarlo con Scrum sul ritmo, non sulla bontà. Dire a quale dei due assomiglia di più un gruppo di esercizio e a quale un gruppo che costruisce un portale nuovo. Non chiamare Kanban ogni lavagna.

### Errori da evitare

- Scrum e Kanban come sinonimi di «lavoriamo in modo agile».
- Una tavola senza limite, presentata come metodo.
- Usare la tavola al posto del processo di cambiamento: il cartellino nella colonna «fatto» non è un'autorizzazione.

### Approfondire

- [Kanban](https://it.wikipedia.org/wiki/Kanban)
- [Guida di Scrum in italiano](https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Italian.pdf)

## DevOps, senza confonderlo con uno strumento

**Prove:** seconda prova gruppo 3
**Tag:** DevOps, esercizio, rilasci piccoli
**Semaforo:** giallo

### Inquadramento

DevOps è un modo di lavorare: chi costruisce guarda anche l'esercizio, i rilasci sono piccoli, le prove sono automatiche, i numeri del servizio tornano al gruppo. Non è un prodotto. In un ente chi scrive e chi approva il rilascio possono restare persone diverse. Sul foglio si descrive la catena di una modifica fino all'esercizio e si nominano due misure, una di progetto e una di servizio. I rilasci frequenti senza un modo di tornare indietro, e senza monitoraggio, sono fretta.

### Definizione

DevOps è un modo di organizzare il lavoro informatico in cui chi costruisce il sistema e chi lo tiene in esercizio non si passano il risultato da sopra un muro. Si usano rilasci piccoli, automatismi, misure prese dall'esercizio e una responsabilità condivisa sul servizio, non solo sulla data di consegna. Non è un prodotto da acquistare e non è un sinonimo di Scrum. Scrum organizza il ritmo con cui si sceglie il lavoro. DevOps organizza la strada fra la modifica e l'esercizio, e l'esercizio stesso.

### Che cosa cambia, in un ente

Nel modello a consegna, un progetto termina con un collaudo e un verbale. Poi un altro gruppo «prende in carico» e scopre, in produzione, ciò che il progetto non ha misurato. I difetti diventano contestazioni fra due uffici. Le modifiche aspettano il progetto successivo.

Nel modo DevOps la stessa linea di lavoro guarda due numeri. Quelli del progetto: le funzioni concordate, la data. Quelli del servizio: incidenti, tempo di ripristino, fallimenti dei rilasci. Un rilascio che rispetta la data e tiene fermo lo sportello per una giornata è un successo di progetto e un incidente di servizio. Dirlo è il punto della materia, perché il gruppo 3 dell'esame mette insieme progetti e servizi.

I rilasci piccoli abbassano il rischio di ciascun rilascio e rendono credibile il tornare indietro. L'automatismo della costruzione e delle prove toglie il «funzionava sulla mia macchina». Il monitoraggio dice, il giorno dopo, se la modifica ha peggiorato i tempi di risposta. Senza quel ritorno dall'esercizio, i rilasci frequenti sono solo fretta.

In un ente la stessa persona spesso non può scrivere la modifica e approvarla in produzione. Non è una sconfitta di DevOps. È un vincolo. Si automatizza il gesto tecnico e si lascia una approvazione, tracciata, a chi ha il ruolo. Le credenziali di produzione non stanno sul computer di chi sviluppa «per andare più veloci». La velocità si prende sull'automatismo, non sul salto dei controlli.

DevOps non abolisce ITIL. L'incidente, il problema e il cambiamento restano. Cambia la frequenza del cambiamento e il fatto che il cambiamento nasca già con una prova e un modo di tornare indietro. Un cambiamento di venerdì sera, senza prova e senza ritorno, non diventa sano solo perché il gruppo si chiama DevOps.

```disegno
titolo: Dal progetto al servizio, senza il muro
riga: Modifica piccola | prove automatiche
freccia: approvazione tracciata, poi esercizio
riga: Esercizio | incidenti, tempi, fallimenti di rilascio
freccia: questi numeri tornano a chi modifica
riga: Il prossimo rilascio tiene conto di ciò che si è rotto
nota: Scrum decide che cosa fare nello sprint. Questa catena decide come arriva in esercizio e come si impara dall'esercizio.
```


### Nel dettaglio

DevOps è un modo di organizzare il lavoro fra chi costruisce e chi tiene acceso, così che il sistema si possa modificare spesso e restare affidabile. Il nome viene da development e operations, e il punto è la rimozione del muro. Il muro classico: chi sviluppa consegna un pacchetto, chi esercisce lo accende e, se si rompe, lo restituisce. Nessuno dei due vede il lavoro dell’altro. Il risultato è rilasci rari, grandi, paurosi, e incidenti di cui non si capisce la causa.

Nel modo DevOps lo stesso flusso porta una modifica dal codice all’esercizio, con prove automatiche, e chi l’ha scritta vede che cosa succede quando gira. Non significa che ogni programmatore amministra la sala di notte. Significa che il rilascio è un atto del flusso, ripetibile, e che la conduzione dà requisiti al flusso: registri, metriche, ritorno indietro, allarmi. Si misura il tempo fra l’idea e l’esercizio, quanto spesso un rilascio fallisce, quanto si impiega a ripristinare. Tempi lunghi e fallimenti frequenti dicono che il muro c’è ancora, anche se si è comprato uno strumento.

Lo strumento, la pipeline, è il supporto, non la sostanza. Si può avere la pipeline e tenere il muro: la costruisce un gruppo, la guarda un altro, e in esercizio si entra a mano. Si può fare un passo verso DevOps anche senza un prodotto dedicato, con un rilascio piccolo, frequente, provato, e con una persona dell’esercizio nella revisione. In un ente i vincoli restano: finestre, autorizzazioni, separazione dei compiti. DevOps non li cancella. Li rende eseguibili in un flusso, invece che in una procedura a parte che nessuno segue.

Sul foglio si descrive il flusso di una modifica del tema, in sei passi, dal commit al rilascio, con la prova in mezzo e il ritorno pronto. Si dice chi guarda l’allarme la mattina dopo. Si evita di nominare prodotti. Se si nomina lo strumento, è un esempio, e la frase successiva dice che cosa resterebbe anche cambiando strumento: prove automatiche, stessa immagine in prova e in esercizio, misura del tempo di ripristino.

### Esempio

Il portale di assistenza rilascia ogni due settimane una modifica contenuta, in finestra, con il pacchetto già provato. Il gruppo che sviluppa guarda, il lunedì, se le prese in carico sono rallentate. Se lo sono, la modifica successiva è correttiva, anche se la tabella di marcia del progetto aveva previsto un'altra funzione. Il responsabile del servizio non scopre il rallentamento dal reclamo degli utenti tre mesi dopo, alla chiusura del progetto.

### In sede di prova

Definire DevOps come organizzazione e come responsabilità sul servizio, non come strumento. Distinguerlo da Scrum in una frase. Dire che in un ente l'approvazione del rilascio può restare separata da chi scrive. Collegare i rilasci piccoli al cambiamento gestito, non al suo contrario. Usare due misure, una di progetto e una di servizio.

### Errori da evitare

- Comprare una piattaforma e dire di «avere fatto DevOps».
- Rilasci continui senza monitoraggio e senza modo di tornare indietro.
- Abbattere la separazione dei privilegi in nome della velocità.

### Approfondire

- [DevOps](https://it.wikipedia.org/wiki/DevOps)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)
- [ITIL](https://it.wikipedia.org/wiki/ITIL)

## Matrice delle responsabilità

**Prove:** seconda prova gruppo 3, orale
**Tag:** RACI, responsabilità, ruolo
**Semaforo:** verde

### Inquadramento

La domanda chiede chi fa che cosa, quando intorno a un'attività ci sono troppe persone. Si compila una matrice corta e si evita che «responsabile» significhi quattro cose diverse.

### Definizione

Una matrice di responsabilità assegna, per ciascuna attività, chi esegue, chi è responsabile del risultato, chi viene consultato e chi viene informato. Ogni attività ha un solo responsabile del risultato.

### Nel dettaglio

Eseguire è fare il lavoro. Rispondere del risultato è un'altra cosa: può essere il capo ufficio che non scrive il codice e però risponde se la funzione non c'è. Consultare è chi deve dire la sua prima, per esempio la sicurezza su un accesso, e la cui risposta entra nella decisione. Informare è chi deve saperlo dopo, e non può bloccare. Mescolare consultati e informati riempie le riunioni di persone che non decidono.

Il difetto da correggere è l'attività con due responsabili, perché nel vuoto decidono entrambi o nessuno. Si lascia una sola lettera di responsabilità per riga. L'altro difetto è la riga senza esecutore. Si compila sulle attività vere del progetto, dieci righe, non su cinquanta. Una matrice che non sta in una pagina non si usa.

Quando qualcuno lascia l'incarico, si riassegna la lettera lo stesso giorno. La matrice vecchia con il nome di chi non c'è più è un buco di continuità.

### Esempio

Per il rilascio del portale: esegue il gruppo di sviluppo, risponde il responsabile del servizio, si consulta l'ufficio utente sulla finestra, si informa l'assistenza. Una sola persona risponde del risultato. Non «il gruppo» come responsabile indistinto.

### In sede di prova

Quattro lettere, un solo responsabile per riga, poche attività, riassegnazione quando i nomi cambiano.

### Errori da evitare

- Mettere tutti come responsabili.
- Consultare venti persone e chiamarla decisione condivisa.
- Lasciare nella matrice chi ha cambiato ufficio.

### Approfondire

- [RACI](https://it.wikipedia.org/wiki/RACI)
- [Project management](https://it.wikipedia.org/wiki/Project_management)

## Slittamento dell'ambito

**Prove:** seconda prova gruppo 3, prima prova
**Tag:** scope creep, ambito, cambiamento
**Semaforo:** verde

### Inquadramento

È la domanda sul progetto che non finisce perché a ogni settimana si aggiunge «una cosa piccola». Si descrive come si accoglie la richiesta senza fingere che sia gratuita.

### Definizione

Lo slittamento dell'ambito è l'aggiunta di lavoro non prevista, senza modificare tempi, costi o ciò che si toglie. Si cura con un confine scritto e con una decisione esplicita su ogni aggiunta.

### Nel dettaglio

La richiesta nuova si scrive, anche in tre righe, e si stima. Poi si sceglie: entra al posto di un'altra cosa di pari peso, oppure sposta la data, oppure va in un elenco successivo. Non esiste la quarta via «entra e non cambia nulla», salvo che la stima sia davvero trascurabile e lo si registri. Accumulare le trascurabili è lo slittamento: dieci mezze giornate sono due settimane.

Chi può dire sì è uno, il responsabile del risultato, non chiunque parli in riunione. Le richieste dette a voce a chi sviluppa, e realizzate per cortesia, sono il canale che aggira il confine. Si rimandano al responsabile. Il tono resta collaborativo: la richiesta può essere ottima e comunque non entrare in questa fetta.

Nel tema, le due esclusioni scritte in apertura sono la difesa. Quando si aggiunge un'esclusione che qualcuno vorrebbe dentro, la si è già dichiarata fuori, e la risposta è pronta.

### Esempio

A metà lavoro si chiede la notifica PEC, non prevista. Si stima una settimana e un pezzo di conservazione delle ricevute. Si decide di lasciarla fuori da questa consegna e di metterla nel foglio successivo. La data non si sposta. La cortesia di farla «in serata» non si accetta.

### In sede di prova

Definire lo slittamento, la stima, le tre vie, un solo soggetto che dice sì, le esclusioni già scritte.

### Errori da evitare

- Accettare le aggiunte piccole senza sommarle.
- Lasciare che chiunque nel gruppo dica sì.
- Trattare ogni richiesta nuova come un disturbo invece che come una decisione.

### Approfondire

- [Scope (project management)](https://it.wikipedia.org/wiki/Ambito_(project_management))
- [Project management](https://it.wikipedia.org/wiki/Project_management)

## Richiesta di cambiamento

**Prove:** seconda prova gruppo 3, orale
**Tag:** change request, baseline, decisione
**Semaforo:** giallo

### Inquadramento

La domanda formalizza lo slittamento. Si descrive il pezzo di carta, o il record, con cui un cambiamento entra, e che cosa contiene per essere decidibile.

### Definizione

Una richiesta di cambiamento descrive una modifica all'ambito, ai tempi o ai costi già concordati, con il motivo, l'impatto e la decisione. Prima della decisione, il piano resta quello precedente.

### Nel dettaglio

Il testo minimo ha: che cosa si vuole, perché, quali requisiti tocca, quanto tempo aggiunge o che cosa toglie, quali rischi porta, chi decide e la data. Senza l'impatto non si decide, si ascolta un desiderio. La decisione è sì, no, o sì a una data successiva. Il sì aggiorna il piano. Il no si conserva, così fra due mesi la stessa richiesta non riparte da zero e non si dice che «non ne sapevamo nulla».

Si distingue dal difetto. Un comportamento diverso dal requisito già accettato è un difetto e si corregge dentro il lavoro previsto. Un comportamento nuovo è un cambiamento. Classificare i cambiamenti come difetti per non toccare il piano gonfia il lavoro e nasconde lo slittamento. Classificare i difetti come cambiamenti per farli pagare a parte è un altro abuso. Si guarda il requisito scritto.

In un servizio già in esercizio la stessa forma serve per una modifica: è il cambiamento di ITIL, e il legame si può dire in una frase, senza fondere i due mondi.

### Esempio

Si chiede di aggiungere l'export per un ufficio. La richiesta stima tre giorni e nessun impatto sulla data se si toglie un report minore. Il responsabile dice sì, il piano sostituisce il report con l'export. La richiesta resta nell'archivio del progetto con la decisione.

### In sede di prova

Contenuto minimo, decisione tracciata, piano che cambia solo dopo il sì, differenza dal difetto.

### Errori da evitare

- Realizzare il cambiamento e documentarlo dopo, se si documenta.
- Decidere senza una stima.
- Chiamare difetto ogni nuova idea, o cambiamento ogni correzione.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [ITIL](https://it.wikipedia.org/wiki/ITIL)

## Caso di business, in una pagina

**Prove:** seconda prova gruppo 3, orale
**Tag:** business case, costi, benefici
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché si fa il progetto e non solo come. Si scrive una pagina con costi, benefici e l'alternativa di non farlo.

### Definizione

Il caso di business è il confronto fra fare e non fare, in termini di costi, benefici e rischi, sufficiente a decidere se impegnare le risorse. Non è la soluzione tecnica.

### Nel dettaglio

Si mettono i costi che si tendono a omettere: il tempo delle persone interne, la formazione, la conduzione annuale, non solo l'acquisto. Si mettono i benefici che si possono osservare: ore di un lavoro manuale che sparisce, errori che si riducono, un termine di legge che si riesce a rispettare. Un beneficio che non si sa nominare non si conta. L'alternativa di non fare ha un costo anche lei: lo sportello che resta a mano, il rischio che resta aperto. Confrontare il progetto solo con zero è il modo di farlo sembrare sempre conveniente o sempre caro.

Si dice che cosa renderebbe falsa la pagina. Se le persone interne non ci sono, il caso cade, e si scrive questa condizione. Una pagina onesta che sconsiglia il progetto è un buon risultato. Non si gonfiano i benefici per far passare l'acquisto.

Nel tema, se si chiede di impostare il progetto, mezza pagina di caso precede la soluzione. I numeri possono essere di ordine di grandezza, dichiarati come tali.

### Esempio

Mettere in rete le prenotazioni delle sale costa venti giornate interne e nessuna licenza, e leva il registro cartaceo che oggi sbaglia due sovrapposizioni al mese. Non farlo lascia il registro e il tempo di chi lo tiene. La condizione è una persona dell'ufficio sale disponibile per i criteri. Se non c'è, il progetto aspetta.

### In sede di prova

Costi completi, benefici osservabili, costo del non fare, condizione che farebbe cadere il caso, numeri dichiarati come ordini di grandezza se lo sono.

### Errori da evitare

- Contare solo l'acquisto e non il tempo delle persone.
- Promettere benefici che non si sanno misurare.
- Scrivere il caso dopo aver già scelto lo strumento, per giustificarlo.

### Approfondire

- [Business case](https://it.wikipedia.org/wiki/Business_case)
- [Project management](https://it.wikipedia.org/wiki/Project_management)

## Pietre miliari e che cosa le rende vere

**Prove:** seconda prova gruppo 3, orale
**Tag:** milestone, consegna, piano
**Semaforo:** giallo

### Inquadramento

La domanda chiede i punti del piano in cui si decide, non le percentuali di avanzamento. Si mettono poche pietre, ciascuna con un risultato visibile.

### Definizione

Una pietra miliare è un evento di controllo, a durata zero, in cui un risultato è accettato o non lo è. Non è un periodo di lavoro. «Analisi al cinquanta per cento» non è una pietra.

### Nel dettaglio

Buone pietre, in un sistema: requisiti accettati dall'ufficio, prima versione usabile su un caso vero, prova di ripristino superata, rilascio, chiusura. Ciascuna ha un artefatto. I requisiti accettati sono un elenco firmato, non una riunione fatta. Il ripristino superato è un tempo misurato. Senza artefatto la pietra si dichiara raggiunta per stanchezza.

Fra due pietre c'è lavoro, e il lavoro può essere in ritardo senza che si sposti la parola «pietra». Si guarda, a ogni controllo, se la prossima pietra è ancora credibile. Se non lo è, si decide prima, non la settimana in cui doveva arrivare. Le pietre troppo fitte, una a settimana, diventano rumore. Una al mese, su un progetto di qualche mese, basta, più l'inizio e la fine.

Si agganciano alle date esterne vere: una chiusura di esercizio, una seduta, una gara. Una pietra messa in un giorno in cui l'ufficio non può provare non è una pietra, è un augurio.

### Esempio

Tre pietre: elenco dei requisiti accettato il 15 marzo, prenotazione vera provata dall'ufficio sale il 30 aprile, rilascio il 20 maggio dopo la prova di ripristino. Il 10 aprile si vede che la prova dell'ufficio slitterebbe: si toglie un report e la pietra del 30 resta.

### In sede di prova

Evento e non periodo, artefatto che dimostra la pietra, poche date, decisione presa prima se la data non è più credibile.

### Errori da evitare

- Chiamare pietra una percentuale.
- Dichiararla raggiunta senza un risultato da mostrare.
- Metterne una in un giorno in cui nessuno può accettare il risultato.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [Diagramma di Gantt](https://it.wikipedia.org/wiki/Diagramma_di_Gantt)

## Priorità di un incidente: impatto e urgenza

**Prove:** seconda prova gruppo 3, orale
**Tag:** priorità, impatto, urgenza
**Semaforo:** verde

### Inquadramento

La domanda chiede perché non tutti i guasti si trattano in ordine di chi grida di più. Si incrociano impatto e urgenza e ne esce una priorità, con un tempo.

### Definizione

L'impatto è quanto del servizio è colpito e quante persone. L'urgenza è quanto si può aspettare prima che il danno cresca. La priorità è il risultato dei due, e determina il tempo di presa in carico e di ripristino.

### Nel dettaglio

Uno sportello fermo per tutti, in orario di apertura, ha impatto alto e urgenza alta. Lo stesso sportello fermo di notte, se al mattino deve esserci, ha impatto alto e urgenza che dipende dalle ore che restano. Un refuso in una pagina interna ha impatto basso. Si prepara una matrice piccola, tre per tre, e a ogni cella si associano un tempo di presa e un tempo obiettivo. I tempi sono quelli che il servizio può mantenere, gli stessi dello SLA, non tempi da copertina.

Chi grida non alza l'impatto. Alza, se mai, l'urgenza, e solo se il danno davvero cresce con le ore. La priorità si può rivedere quando si capisce meglio, e la revisione si registra: era sembrato un fermo totale ed era un ufficio solo. Senza registro, la priorità diventa il rango di chi ha telefonato.

Si usa la stessa scala per tutti i servizi, altrimenti ogni gruppo inventa la propria e l'assistenza non sa da dove partire.

### Esempio

Il portale non si apre per tutti alle nove: priorità uno, presa in quindici minuti. Un export sbagliato, usato una volta al mese, scoperto il dieci del mese con consegna il trenta: impatto medio, urgenza bassa, priorità tre, entro la settimana. La scala è scritta e l'assistenza non riordina a voce.

### In sede di prova

Impatto distinto dall'urgenza, matrice, tempi coerenti con lo SLA, la voce che non sostituisce la matrice, revisione registrata.

### Errori da evitare

- Trattare l'ordine di telefonata come priorità.
- Dare a tutto la priorità massima.
- Usare tempi che il turno di assistenza non può rispettare.

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)
- [Incident management](https://it.wikipedia.org/wiki/Incident_management)

## Catalogo dei servizi e base di configurazione

**Prove:** seconda prova gruppo 3, orale
**Tag:** catalogo, CMDB, servizio
**Semaforo:** giallo

### Inquadramento

Sono due strumenti che in un orale di servizi compaiono insieme e vanno distinti. Uno dice che cosa si offre. L'altro dice di quali pezzi è fatto.

### Definizione

Il catalogo dei servizi elenca i servizi visibili a chi li usa, con orario, come si chiede aiuto, e il livello promesso. La base di configurazione elenca i componenti e le loro relazioni: quale applicazione sta su quale nodo, quale nodo su quale storage, quale servizio dipende da quale identità.

### Nel dettaglio

Il catalogo si scrive con le parole dell'ufficio. «Prenotazione sale», non «cluster Kubernetes». Serve a chi chiede e a chi smista. Un servizio assente dal catalogo viene comunque usato, e nel fermo nessuno sa di chi è. Meglio poche schede aggiornate che un portale vuoto.

La base di configurazione serve nel fermo e nel cambiamento. Se cade uno storage, si legge quali servizi cadono. Se si aggiorna un nodo, si legge chi ci gira. Una base non aggiornata è peggio di nessuna base, perché si prende una decisione sul disegno sbagliato. Si aggiorna nel cambiamento, non con un censimento annuale che il giorno dopo è vecchio. Si tengono le relazioni che servono a un incidente, non ogni cavo.

I due oggetti si tengono allineati: ogni voce di catalogo punta ai componenti da cui dipende. Un servizio senza componenti è una brochure. Un componente senza servizio è un candidato allo spegnimento.

### Esempio

Il catalogo ha la scheda «assistenza informatica interna»: orario, come si apre un ticket, tempi. La base dice che il servizio dipende dal portale, dal database e dalla directory. Cade la directory: dalla base si sa che anche le prenotazioni e la posta interna ne risentono, e si avvisa prima che telefonino.

### In sede di prova

Catalogo per chi usa, base per chi conduce, relazioni utili all'incidente, aggiornamento dentro il cambiamento.

### Errori da evitare

- Scrivere il catalogo con i nomi dei prodotti.
- Tenere una base fatta una volta e mai più toccata.
- Non collegare la scheda del servizio ai componenti da cui dipende.

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)
- [Configuration management database](https://it.wikipedia.org/wiki/Configuration_Management_Database)

## Retrospettiva che cambia una cosa sola

**Prove:** seconda prova gruppo 3, gruppo 2
**Tag:** retrospettiva, miglioramento, Scrum
**Semaforo:** giallo

### Inquadramento

La domanda chiede a che serve fermarsi a guardare come si è lavorato. Si distingue dal demo del prodotto e si esce con un solo cambiamento.

### Definizione

La retrospettiva è l'incontro in cui il gruppo esamina il proprio modo di lavorare nel periodo appena chiuso e sceglie un miglioramento da provare nel periodo successivo. Non è la revisione del prodotto con l'ufficio.

### Nel dettaglio

Si guarda che cosa ha ostacolato: prove saltate, requisiti arrivati a voce, un ambiente di test rotto, interruzioni. Si sceglie un miglioramento, uno, assegnato a qualcuno, verificabile al giro dopo. «Comunicare meglio» non si verifica. «Nessuna richiesta a voce: tutto nel backlog entro il giorno» si verifica. Al giro dopo la prima domanda è se quel miglioramento è avvenuto, non un nuovo elenco di lamentele.

È un incontro del gruppo, corto. Non è la sede in cui il responsabile giudica le persone. Se diventa quello, le persone smettono di dire i problemi. I problemi di una persona si trattano altrove. Qui si trattano i modi di lavoro.

Si distingue dalla revisione dello sprint, in cui si mostra l'incremento a chi lo ha chiesto. Fare solo quella e mai la retrospettiva migliora il prodotto e lascia intatto il modo, compresi i difetti che costano tempo ogni volta.

### Esempio

Nel periodo le prove automatiche sono state ignorate due volte. Il miglioramento scelto: una modifica non si integra se la suite è rossa, e se ne discute il giorno stesso. Al periodo dopo si conta quante volte la suite rossa è stata aggirata. L'obiettivo è zero. Non si aggiunge un secondo miglioramento prima di aver visto questo.

### In sede di prova

Scopo sul modo di lavorare, un solo miglioramento verificabile, controllo al giro dopo, distinta dalla demo con l'ufficio.

### Errori da evitare

- Uscire con dieci propositi generici.
- Usarla per valutare le persone.
- Confonderla con la dimostrazione del prodotto.

### Approfondire

- [Scrum](https://it.wikipedia.org/wiki/Scrum)
- [Retrospettiva](https://it.wikipedia.org/wiki/Retrospettiva)

## Quattro rischi, su una matrice

**Prove:** seconda prova gruppo 3, orale
**Tag:** rischio, matrice, probabilità
**Semaforo:** verde

### Inquadramento

La domanda chiede di non elencare i rischi in un elenco piatto. Si mettono su due assi e si dice che cosa si fa con quelli alti.

### Definizione

Una matrice di rischio incrocia la probabilità e l'impatto. Ogni rischio sta in una cella. Le celle alte, probabili e gravi, hanno un'azione prima dell'inizio. Le celle basse si tengono d'occhio. I numeri, se si usano, sono una scala corta, uno a tre, non una precisione finta.

### Nel dettaglio

Si portano quattro rischi di un progetto vero, non dieci generici. Per un portale di prenotazione: il vincolo di concorrenza non provato, impatto alto e probabilità media, azione: prova prima del collaudo. La directory dell'ente non disponibile in prova, impatto alto, probabilità da verificare subito, azione: una prova di integrazione nella prima settimana, non all'ultimo. Un solo amministratore che sa farla funzionare, impatto alto, probabilità media, azione: una seconda persona percorre il rilascio. Il ritardo di un fornitore di mobili, impatto basso sul software, si registra e non si tratta come gli altri.

Per ciascuno: segnale che dice se si sta avverando, proprietario, azione. Un rischio senza proprietario è una frase. Si rilegge a ogni iterazione. Un rischio chiuso si chiude. Un rischio nuovo, emerso dal collaudo, entra. La matrice stampata il primo giorno e mai più toccata è un compito fatto, non un controllo.

L'impatto si dice sul servizio, non sul «progetto» in astratto: ore di fermo, prenotazioni doppie, dati esposti. Senza un effetto, tutto sembra grave e nulla lo è.

### Esempio

All'inizio, la directory è un'incognita. La prova della prima settimana riesce: il rischio si abbassa e resta solo come dipendenza da vigilare. La prova di concorrenza, invece, fallisce: la cella resta alta e il lavoro successivo è quello, prima di aggiungere funzioni. Il fornitore dei mobili slitta e non cambia il piano del software. In orale si raccontano queste tre sorti diverse, che mostrano che la matrice si usa.

### In sede di prova

Probabilità e impatto, quattro rischi concreti, effetto sul servizio, proprietario, azione, rilettura. La scala è corta.

### Errori da evitare

- Dieci rischi tutti «alti» e nessuna azione.
- Trattare allo stesso modo un ritardo di mobili e una prenotazione doppia.
- Non chiudere un rischio che la prova ha eliminato.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [Rischio](https://it.wikipedia.org/wiki/Rischio)

## Chi autorizza un cambiamento in esercizio

**Prove:** seconda prova gruppo 3, orale
**Tag:** CAB, cambiamento, esercizio
**Semaforo:** giallo

### Inquadramento

La domanda distingue il cambiare il codice, che è un lavoro di progetto, dal metterlo in esercizio, che tocca un servizio usato. Il secondo ha un punto di autorizzazione.

### Definizione

Un cambiamento in esercizio è qualsiasi modifica che può alterare il servizio: rilascio, regola di firewall, schema, capacità. Un gruppo di autorizzazione, anche piccolo, guarda il motivo, il ritorno indietro e la finestra, e dice sì o rinvia. Non è un comitato che progetta. È un controllo prima del gesto.

### Nel dettaglio

In un ente piccolo il gruppo sono tre persone: chi conduce il servizio, chi fa la modifica, chi rappresenta l'ufficio che la subisce. Manca uno, si rinvia, salvo l'incidente in corso, che segue un'altra strada, più corta, e si regolarizza dopo. Il cambiamento ordinario arriva con una pagina: che cosa cambia, che cosa può rompersi, come si torna indietro, in quale finestra, come si capisce che è andato bene. Senza il ritorno indietro, il sì non si dà.

Si tengono due corsie. La corsia normale, per ciò che può aspettare la finestra. La corsia urgente, per un difetto esposto, con un sì di una persona reperibile e un riesame il giorno dopo. Se tutto diventa urgente, la corsia normale non esiste. Si conta quante volte si usa l'urgente.

Il cambiamento si chiude. Dopo la finestra, qualcuno verifica il segnale scelto, gli errori, il login, la prenotazione di prova, e scrive l'esito. Un cambiamento «fatto» senza esito è aperto.

### Esempio

Lo schema compatibile delle prenotazioni entra martedì alle 18, quando le sale non si prenotano. C'è il modo di tornare alla versione precedente dello schema, già provato. Il gruppo di tre ha letto la pagina il lunedì. Alle 18.30 una prenotazione di prova riesce e gli errori non salgono. Si chiude. Un venerdì alle 17 un rilascio non urgente non si autorizza, e non si chiama urgente per comodità.

### In sede di prova

Pagina corta, ritorno indietro, finestra, corsia urgente rara e riesaminata, chiusura con un segnale, l'incidente vero non aspetta il comitato.

### Errori da evitare

- Riunire un comitato per un incidente in corso.
- Autorizzare senza ritorno indietro.
- Chiamare urgente ciò che è solo in ritardo.

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)
- [Gestione della configurazione](https://it.wikipedia.org/wiki/Gestione_della_configurazione)

## Errore noto: un difetto con un giro già scritto

**Prove:** seconda prova gruppo 3, orale
**Tag:** known error, problema, incidente
**Semaforo:** giallo

### Inquadramento

La domanda usa il vocabolario dei servizi. Un incidente si ripete. A un certo punto ha una causa e un modo di aggirarlo, in attesa della correzione. Quello è un errore noto.

### Definizione

L'errore noto è un problema di cui si conosce la causa e per il quale esiste un aggiramento, o una correzione non ancora messa in esercizio. L'incidente è il singolo disagio dell'utente. Il problema è la causa. L'errore noto è il problema scheda, con il giro che l'assistenza può già fare.

### Nel dettaglio

Senza la scheda, ogni lunedì l'assistenza riscopre lo stesso difetto e lo tratta come nuovo. Con la scheda, il primo livello riconosce il sintomo, applica l'aggiramento, e non riapre l'analisi. L'aggiramento ha un proprietario e una data di scadenza, perché un aggiramento eterno è la rinuncia alla correzione. La correzione entra nel registro dei cambiamenti, non resta un desiderio nella scheda.

Si scrive il sintomo in modo che lo riconosca chi non ha fatto l'analisi: che messaggio vede l'utente, in quale orario, dopo quale gesto. La causa si scrive a parte, per chi correggerà. Mescolare le due cose produce schede inutili al primo livello, che è l'unico che parla con l'utente.

Si conta quanti incidenti si chiudono con un errore noto. Se sono tanti e la correzione non arriva, il problema è la coda delle correzioni, non la diagnosi. La scheda non è un posto dove parcheggiare.

### Esempio

Ogni lunedì mattina il primo accesso al portale fallisce per un timeout, perché un lavoro notturno finisce tardi. Causa: il lavoro. Aggiramento: ripetere dopo dieci minuti, detto all'utente in una frase. Scadenza dell'aggiramento: il rilascio che sposta il lavoro alle cinque. Fino a quel rilascio l'assistenza non apre un'analisi nuova. Il rilascio è un cambiamento, con la sua finestra. Dopo, la scheda si chiude e si verifica il lunedì successivo.

### In sede di prova

Incidente, problema, errore noto. Sintomo riconoscibile, aggiramento con scadenza, correzione in coda vera, la scheda non sostituisce il rilascio.

### Errori da evitare

- Una scheda senza aggiramento e senza correzione.
- Riscrivere l'analisi ogni volta che il sintomo torna.
- Lasciare l'aggiramento senza una data.

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)
- [Gestione della configurazione](https://it.wikipedia.org/wiki/Gestione_della_configurazione)

## Incidente maggiore: un solo coordinamento

**Prove:** seconda prova gruppo 3, orale
**Tag:** incidente maggiore, comunicazione, servizio
**Semaforo:** verde

### Inquadramento

La domanda alza il tono dell'incidente ordinario. Quando il servizio è fermo per molti, il problema tecnico e il problema di coordinamento sono entrambi presenti, e il secondo si perde.

### Definizione

Un incidente maggiore interrompe un servizio critico per un numero largo di persone, o per una scadenza che non si sposta. Ha un coordinatore, un canale solo di comunicazione, e una precedenza sulle altre modifiche. Non è «un incidente con la priorità alta» lasciato al tecnico di turno che intanto risponde al telefono.

### Nel dettaglio

Il coordinatore non è necessariamente chi mette le mani. È chi tiene i tempi, allontana le richieste parallele, e aggiorna. Gli aggiornamenti hanno un ritmo, per esempio ogni venti minuti, anche se la notizia è «stiamo ancora isolando». Il silenzio lo riempiono gli altri, con ipotesi. Un canale solo: una pagina o una chiamata, non tre chat.

Si sospendono i cambiamenti non legati. Mettere in esercizio un'altra modifica durante l'incidente toglie la possibilità di capire. Si tiene un diario: ora, fatto, ipotesi scartata. Il diario del giorno dopo è l'unico modo di non ripetere. Le ipotesi scartate sono preziosi quanto la causa, perché la volta dopo qualcuno riparte da lì.

La comunicazione agli uffici dice l'effetto e il giro, non la causa tecnica a metà. «Le prenotazioni sono ferme, usate il registro cartaceo della portineria, prossimo aggiornamento alle undici.» La causa si dà quando è una causa, non quando è la prima idea.

### Esempio

Il portale non apre alle nove, giorno di seduta. Un coordinatore avvisa gli uffici in cinque righe e fissa l'aggiornamento. Due persone guardano i nodi, una sola parla. Si sospende il rilascio previsto alle dieci. Alle nove e trenta si trova un disco pieno di registri, si libera, si verifica una prenotazione. L'avviso di ripresa dice che cosa fare delle richieste accumulate. Il pomeriggio si scrive il diario e l'azione: allarme sul disco, che mancava.

### In sede di prova

Coordinatore, ritmo di aggiornamento, un canale, stop alle altre modifiche, diario, messaggio sull'effetto e non sulla prima ipotesi.

### Errori da evitare

- Tutti che telefonano a chi sta correggendo.
- Comunicare la causa prima di averla.
- Approfittare del fermo per mettere in esercizio un'altra cosa.

### Approfondire

- [ITIL](https://it.wikipedia.org/wiki/ITIL)
- [Continuità operativa](https://it.wikipedia.org/wiki/Continuit%C3%A0_operativa)

## A chi si dice che cosa, e quando

**Prove:** seconda prova gruppo 3, orale
**Tag:** comunicazione, stakeholder, progetto
**Semaforo:** giallo

### Inquadramento

La domanda sui portatori di interesse diventa concreta se chiede il piano di comunicazione. Non è l'elenco delle persone. È quale messaggio, a chi, con quale frequenza.

### Definizione

Un piano di comunicazione associa a ogni gruppo di interessati un contenuto, un canale e un ritmo. Chi decide riceve le scelte e i rischi. Chi userà il sistema riceve ciò che cambia nel proprio lavoro, in anticipo. Chi esegue riceve il dettaglio. Lo stesso testo non serve ai tre.

### Nel dettaglio

Si scrivono tre righe, non un piano di comunicazione di venti pagine. Direzione: stato, decisione richiesta, rischio alto, ogni due settimane, una pagina. Uffici: che cosa cambierà nel gesto quotidiano, un mese prima e di nuovo una settimana prima, con il nome di chi li accompagna. Gruppo di lavoro: dettaglio, nel registro che già usano, continuo. Un canale nuovo, aperto per l'occasione e non letto, non è un canale.

Si dice anche che cosa non si comunica ancora. Una data non decisa, detta come data, diventa una promessa. Si comunica la condizione: «se la prova di integrazione riesce questa settimana, la finestra è la successiva». Le persone tollerano l'incertezza detta. Non tollerano la data falsa.

Il piano prevede il momento noioso e necessario: il giorno prima del cambio, un promemoria di dieci righe con l'orario e il giro di riserva. I progetti falliscono l'adozione lì, non sulla tecnologia. Chi non sa che martedì si prenota in un altro modo userà il vecchio, e il vecchio non c'è più.

### Esempio

Per il registro visitatori: ai capi ufficio, una pagina con il rischio sulla capienza e la decisione che si chiede. Alla portineria, due incontri e una prova sul posto, più il promemoria del lunedì sera con l'orario di accensione. Al gruppo, i compiti nel registro. Nessuna data di «go-live» in una mail generica prima della prova di capienza.

### In sede di prova

Tre gruppi, tre contenuti, ritmo, condizione invece di data falsa, promemoria alla vigilia per chi cambia gesto.

### Errori da evitare

- Un'unica newsletter per tutti.
- Comunicare la data prima della prova che la condiziona.
- Dare per scontato che l'ufficio abbia letto il canale nuovo.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [ITIL](https://it.wikipedia.org/wiki/ITIL)

## La lezione che diventa un cambiamento

**Prove:** seconda prova gruppo 3, orale
**Tag:** lezioni apprese, retrospettiva, chiusura
**Semaforo:** giallo

### Inquadramento

La domanda chiede che cosa si fa alla fine di un progetto, o di un incidente, oltre all'archivio. Una lezione che non cambia un comportamento è un racconto.

### Definizione

Una lezione appresa è un fatto osservato, una causa, e una modifica a un modo di lavorare, con un proprietario. Si raccoglie a caldo e si rilegge a freddo. Si conserva solo ciò che si è trasformato in un cambiamento verificabile.

### Nel dettaglio

Si chiedono tre cose, non un giro di opinioni. Che cosa abbiamo scoperto troppo tardi. Che cosa rifaremmo prima. Quale regola, lista o prova cambia da lunedì. La terza è la lezione. Le prime due servono a arrivarci. «Comunicare di più» non è una lezione. «Il promemoria alla portineria parte il giorno prima, e lo manda questo ruolo» lo è.

Si scrive nel posto dove il lavoro successivo la vede: la lista di controllo del rilascio, la scheda dell'errore noto, la prova automatica. Una lezione nel verbale della riunione finale non la vede nessuno fra sei mesi. Il verbale può puntare alla lista. Non è la lista.

Si evitano due difetti. La caccia al colpevole, che fa tacere il fatto. L'elenco di trenta lezioni, che ne rende zero. Tre, messe in pratica, battono trenta archiviate. All'incidente maggiore si applica lo stesso schema il giorno dopo, quando il diario è ancora leggibile.

### Esempio

Dopo il disco pieno, la lezione non è «stare più attenti ai dischi». È un allarme all'ottanta per cento sul volume dei registri, e una riga nella lista di controllo dei sistemi nuovi. Il proprietario è chi presidia. La verifica è il mese dopo: l'allarme c'è, ed è scattato in prova. Il verbale dell'incidente rimanda a quella riga e non contiene un sermone.

### In sede di prova

Fatto, causa, modifica verificabile, proprietario, nel posto giusto. Non un proposito. Non un colpevole.

### Errori da evitare

- «Comunicare meglio» senza un gesto.
- Trenta lezioni nel verbale.
- Cercare il colpevole al posto della modifica.

### Approfondire

- [Retrospettiva](https://it.wikipedia.org/wiki/Retrospettiva)
- [Project management](https://it.wikipedia.org/wiki/Project_management)

## Mettere in ordine il backlog

**Prove:** seconda prova gruppo 3, orale
**Tag:** backlog, priorità, valore
**Semaforo:** verde

### Inquadramento

La domanda agile chiede chi decide che cosa si fa prima. L'ordine del backlog è quella decisione, visibile, e si cambia quando si sa di più.

### Definizione

Il backlog è l'elenco ordinato del lavoro non ancora fatto. In cima sta ciò che si farà adesso. L'ordine lo tiene una persona, il product owner nel vocabolario Scrum, che ascolta gli uffici e il gruppo e poi sceglie. Un elenco non ordinato, in cui tutto è prioritario, non è un backlog.

### Nel dettaglio

I criteri si dicono. Prima il vincolo che rende il sistema sbagliato se manca: senza la capienza, il registro visitatori non si può accendere. Poi ciò che sblocca gli altri, per esempio l'identità. Poi il resto, per valore d'uso. Un criterio nascosto, «si fa prima ciò che interessa a chi grida», produce un elenco che il gruppo non sa spiegare. Si può dire di no, e si dice che cosa sale al posto di ciò che scende.

L'ordine si rivede, non si difende per coerenza. Una scoperta sulla directory sposta in cima la prova di integrazione. Un ufficio che aggiunge un'idea la vede entrare in una posizione, non «in lista» in senso vago. Le voci in fondo si possono cancellare. Un backlog che solo cresce non è una memoria. È un luogo in cui le richieste vanno a morire, e gli uffici smettono di usarlo.

Ogni voce in cima è abbastanza chiara da essere presa. Se non lo è, il lavoro successivo è chiarirla, ed è esso stesso una voce. Non si stima con precisione una frase di tre parole.

### Esempio

In cima: prova di identità, poi capienza concorrente, poi ingresso in portineria, poi avviso. La richiesta di una statistica annuale sta in fondo ed è piccola. Arriva la notizia che la directory ha un vincolo di rete: la prova di identità resta in cima e si spezza in «aprire il flusso» e «usarlo nell'applicazione». La statistica non sale per far contento qualcuno, salvo decisione detta.

### In sede di prova

Elenco ordinato, una persona che ordina, criterio detto, si può dire di no, le voci in cima sono chiare, il fondo si pota.

### Errori da evitare

- Tutto in priorità uno.
- Un elenco che solo cresce.
- Mettere in cima una frase che il gruppo non sa iniziare.

### Approfondire

- [Scrum](https://it.wikipedia.org/wiki/Scrum)
- [Project management](https://it.wikipedia.org/wiki/Project_management)

## L'obiettivo di un'iterazione, in una frase

**Prove:** seconda prova gruppo 3, orale
**Tag:** sprint, obiettivo, scrum
**Semaforo:** verde

### Inquadramento

La domanda distingue l'elenco dei compiti di un'iterazione dal perché quei compiti stanno insieme. Senza il perché, l'iterazione è un contenitore di ore.

### Definizione

L'obiettivo dell'iterazione è l'esito verificabile alla fine del periodo: un utente di prova entra con l'identità dell'ente, oppure una prenotazione concorrente viene rifiutata. Non è «lavorare sull'identità». Si verifica sì o no.

### Nel dettaglio

Si sceglie un obiettivo che sta in un periodo corto, due settimane nell'ordine di grandezza, e che un ufficio riconoscerebbe. I compiti sono il modo. Se a metà un compito si rivela inutile per quell'esito, si lascia, anche se era stato stimato. Se un compito urgente non serve l'obiettivo, aspetta, salvo un incidente. L'obiettivo si cambia solo se è diventato impossibile, e si dice.

A fine periodo si guarda l'esito, non la percentuale di compiti chiusi. Tutti i compiti chiusi e l'utente che ancora non entra: l'obiettivo è mancato, e si vuole sapere perché. L'utente entra e un compito di contorno è rimasto fuori: l'obiettivo è raggiunto. Questa asimmetria va detta, perché i gruppi si affezionano alla percentuale.

L'obiettivo si scrive prima di iniziare, visibile. Un obiettivo deciso a posteriori, scegliendo ciò che è capitato di finire, non orienta nulla.

### Esempio

Obiettivo: «un operatore di prova prenota una sala con la propria identità, e una seconda prenotazione sovrapposta viene rifiutata». I compiti che non ci arrivano, la grafica del piè di pagina, restano fuori. Il venerdì l'operatore ci prova. Se il rifiuto non scatta, l'iterazione non ha raggiunto l'obiettivo anche se le pagine sono belle. Il periodo dopo inizia da quel rifiuto, non da una funzionalità nuova.

### In sede di prova

Una frase verificabile, decisa prima, i compiti servono l'esito, si giudica l'esito e non la percentuale.

### Errori da evitare

- Un obiettivo che è un elenco di compiti.
- Giudicare dal numero di schede chiuse.
- Scegliere l'obiettivo alla fine, guardando che cosa è pronto.

### Approfondire

- [Scrum](https://it.wikipedia.org/wiki/Scrum)
- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## Capacità del gruppo e velocità, senza confonderle

**Prove:** seconda prova gruppo 3, orale
**Tag:** capacità, velocità, stima
**Semaforo:** giallo

### Inquadramento

La domanda chiede quanto lavoro entra nel prossimo periodo. Si distinguono le ore disponibili e la quantità di lavoro che, in passato, il gruppo ha davvero chiuso.

### Definizione

La capacità è quanto tempo il gruppo può dedicare, tolti ferie, turni, riunioni inevitabili. La velocità è quanto lavoro completato, misurato in modo stabile, il gruppo ha consegnato nei periodi recenti. La prima è un calendario. La seconda è una memoria. Entrambe servono, e non si sostituiscono.

### Nel dettaglio

Si calcola la capacità sul serio. Quattro persone per due settimane non sono quattrocento ore di progetto. Tolti gli altri doveri, può essere la metà. Riempire il periodo fino all'ultima ora garantisce lo sforamento. Si lascia un margine per l'incidente e per la voce che si rivela più grande.

La velocità si usa solo se i periodi passati somigliano a questo: stesso gruppo, stesso tipo di lavoro, stessa definizione di fatto. Un gruppo appena formato non ha velocità. Si stima per confronto e si accetta l'errore. Dopo tre periodi si guarda la media, senza inseguire il numero più alto. Il numero più alto diventa un obiettivo di pressione, e le stime si gonfiano per raggiungerlo. A quel punto la misura è rotta.

Non si converte la velocità in una promessa di date lontane moltiplicando. Serve a scegliere quanto entra nel prossimo periodo, non a datare i sei mesi. Le date lontane restano a intervalli, con una condizione.

### Esempio

Il gruppo ha chiuso, in tre iterazioni, lavoro che sta intorno a una stessa misura, e una persona è in ferie. Nel periodo entra meno, non «la stessa quantità perché stringiamo». L'obiettivo è uno solo, la capienza, non la capienza più due abbellimenti. A fine periodo si registra che cosa è entrato davvero, ferie comprese, così il numero successivo non ignora le ferie.

### In sede di prova

Capacità come calendario, velocità come memoria di lavoro simile, margine, niente conversione magica in date lontane, un gruppo nuovo non ha velocità.

### Errori da evitare

- Riempire tutte le ore da calendario.
- Prendere il periodo migliore come norma.
- Moltiplicare la velocità per venti periodi e dare una data.

### Approfondire

- [Scrum](https://it.wikipedia.org/wiki/Scrum)
- [Project management](https://it.wikipedia.org/wiki/Project_management)
