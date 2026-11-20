# Area 6 — Ingegneria del software e linguaggi di programmazione

Il gruppo 2 della seconda prova unisce ingegneria del software, linguaggi, intelligenza artificiale e prompt engineering. L’orale ripete queste materie. L’intelligenza artificiale è l’area 7. Nella prima prova l’ingegneria del software è il modo di ragionare: requisiti, interfaccia, dati, prova, e una ragione per ciò che non si costruisce.

### Il filo

Il ciclo di vita mette in ordine le fasi. Cascata, iterativo e agile sono tre modi di percorrerle, e la scelta dipende da quanto il requisito è stabile. I requisiti funzionali dicono che cosa il sistema fa; i non funzionali dicono con quali numeri. I casi d’uso e l’UML essenziale servono a non dimenticare un attore. La programmazione a oggetti, i linguaggi compilati e interpretati, l’algoritmo danno il lessico del colloquio. REST, monolite e microservizi, test, HTML XML e JSON, versionamento e accessibilità sono gli strumenti con cui il progetto diventa un sistema mantenibile. Il modello vista controllore dice dove sta la regola. L’integrazione continua dice come una modifica arriva in esercizio. Il software libero e il riuso dicono come una pubblica amministrazione sceglie, prima di comprare.

### Come si risponde

Si definisce, si distingue, si porta un pezzo della traccia. «Agile» senza ruoli, eventi e un requisito che cambia è una parola. «Microservizi» senza un pezzo che debba crescere da solo è una complicazione. Il modello vista controllore si chiude dicendo che la regola dei cinque giorni sta nel modello, sul server. Il numero dell’articolo sul software libero, se non si ricorda, si lascia: la valutazione comparativa e il riuso fra enti bastano.

### Da dove partire

Verde: cascata e agile, requisiti, REST, monolite e microservizi, test, modello vista controllore. Subito dopo il ciclo di vita, l’integrazione continua, il software libero, i casi d’uso e il versionamento. L’algoritmo è rosso: serve all’orale, poco come quesito autonomo.

## Il ciclo di vita del software

**Prove:** seconda prova gruppo 2, orale
**Tag:** requisiti, progettazione, test, manutenzione
**Semaforo:** giallo

### Inquadramento

Il ciclo è la sequenza con cui un bisogno diventa un sistema e poi un sistema da tenere in vita: requisiti, progetto, costruzione, prova, esercizio, modifica. Saltare una fase non la fa sparire: torna come difetto. Sul foglio si prende una modifica piccola della traccia e la si fa passare nelle fasi, dicendo che cosa si produce in ciascuna, un requisito numerato, un vincolo, una prova, una finestra di rilascio. L'esercizio non è la fine: è il momento in cui si scopre se il requisito era vero.

### Definizione

Il ciclo di vita del software è l’insieme delle attività che portano un sistema dall’idea al ritiro: capire che cosa serve, progettarlo, costruirlo, verificarlo, metterlo in esercizio e modificarlo finché serve. I modelli di ciclo di vita, a cascata o agili, cambiano l’ordine e la ripetizione di queste attività. Non le inventano.

### Le attività, al di là del modello

L’analisi dei requisiti stabilisce che cosa il sistema deve fare e sotto quali vincoli. È il momento in cui si parla con chi userà il sistema, si scrivono i casi, si scoprono le ambiguità. Un requisito non è un’idea vaga: è una frase verificabile.

La progettazione decide come soddisfarli: architettura, moduli, dati, interfacce. Anticipa i problemi che in costruzione costerebbero di più. Non è ancora il codice, anche se può includere prototipi.

La costruzione è la scrittura del software e la sua integrazione. Include la gestione delle versioni e la revisione del lavoro da parte di un’altra persona.

La verifica controlla che il software sia costruito correttamente e che sia quello giusto. Test, revisioni, prove con gli utenti. Un sistema può essere costruito correttamente rispetto a un requisito sbagliato: per questo esistono prove che confrontano con il bisogno, non solo con il documento.

Il rilascio mette il software a disposizione di chi lo usa, con un piano di ritorno indietro se il rilascio fallisce. Non è «copiare i file sul server» senza dire come si torna indietro.

La manutenzione è la parte più lunga della vita. Corregge difetti, adatta il sistema a norme e ambienti nuovi, aggiunge funzioni. Un sistema senza un modo di essere modificato diventa un rischio. La manutenzione non è un fallimento del progetto: è la ragione per cui servono requisiti chiari, test e codice comprensibile.

Il ritiro, infine, è deciso. I dati si conservano o si consegnano secondo le regole, gli accessi si chiudono, le copie si eliminano dove previsto. Anche questo è ingegneria, e in un ente capita più spesso di quanto i manuali lascino credere.


### Nel dettaglio

Il ciclo è l’insieme delle attività, qualunque sia l’ordine in cui un metodo le dispone. Capire il bisogno: chi userà il sistema, per quale decisione, con quali vincoli. Specificare: che cosa farà e che cosa non farà, in frasi verificabili. Progettare: livelli, dati, interfacce, scelte tecniche. Costruire: scrivere e integrare. Verificare: prove su ciò che si è specificato, non su ciò che «sembra funzionare». Rilasciare: metterlo in mano agli utenti, con un modo di tornare indietro. Esercire: tenerlo acceso, correggere, adattare. Ritirare: spegnerlo quando non serve, portando via i dati secondo le regole, non lasciandolo acceso e dimenticato.

Il punto che in un tema si dimentica è che il ritiro e la modifica fanno parte del ciclo. Un sistema che non si può modificare, perché nessuno ha il codice o perché non c’è un ambiente di prova, è già fuori ciclo: ogni correzione è un rischio. Un sistema che non si può spegnere, perché un ufficio sconosciuto ci si è agganciato, vincola l’ente per anni. Per questo all’inizio si scrivono le dipendenze e il proprietario. Il proprietario è un ufficio, non «l’informatica». L’ufficio decide le regole. L’informatica le realizza e dice che cosa costano.

Le attività si sovrappongono anche nei metodi ordinati. Durante la costruzione si scopre un requisito. Durante l’esercizio si riprogetta un pezzo. Il ciclo non è una retta che si percorre una volta. È un elenco di cose da non saltare. Si può saltare la documentazione ornamentale. Non si salta la prova del requisito principale, e non si salta la decisione su chi mantiene.

Sul foglio si prende il sistema del tema e si scrive, per tre attività, il prodotto concreto. Specificare produce l’elenco dei requisiti numerati. Verificare produce i casi di prova legati a quei numeri. Esercire produce il registro dei guasti e la copia di ripristino. Dire i prodotti è più convincente che nominare le fasi.

### Esempio

Un portale di ticketing. Requisiti: ruoli, stati, tempi di risposta. Progettazione: tre livelli, schema dati, API. Costruzione a incrementi, prima il percorso «apri un ticket», poi i report. Verifica su quel percorso, con un utente vero. Rilascio a un ufficio pilota. Manutenzione quando cambia la classificazione delle priorità. Nessuna di queste fasi è opzionale solo perché si è scelto un metodo agile: l’agile le ripete in piccolo, non le cancella.

### In sede di prova

Elencare le attività e dire che i modelli differiscono per ordine e ripetizione. Scegliere un esempio di una frase e portarlo attraverso tre attività, per non lasciare la risposta un elenco. Citare la manutenzione come fase lunga, non come appendice.

### Errori da evitare

- Identificare il ciclo di vita con il solo modello a cascata.
- Dimenticare verifica e manutenzione, che sono le fasi in cui i sistemi reali passano il tempo.
- Dire «sviluppo» per tutte le attività, perdendo le distinzioni.

### Approfondire

- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)

## Modello a cascata, iterativo e agile

**Prove:** seconda prova gruppo 2, gruppo 3, orale
**Tag:** waterfall, agile, feedback, requisiti
**Semaforo:** verde

### Inquadramento

La cascata percorre le fasi una volta, e sta bene se il requisito è stabile e il costo di cambiare dopo è alto. L'iterativo ripete il ciclo su pezzi. Agile accorcia il ciclo e accetta che il requisito si precisi vedendo il sistema. In un ente il ritmo agile convive con finestre e approvazioni. Sul foglio si sceglie un modello per la traccia e si dice perché gli altri due sarebbero peggio in quel caso. Nominare Scrum senza un requisito che può cambiare è decorazione.

### Definizione

Il modello a cascata organizza le attività in una sequenza: si chiudono i requisiti, poi si progetta, poi si costruisce, poi si verifica, poi si rilascia. I modelli iterativi e agili ripetono cicli brevi di tutte le attività, consegnando incrementi di software funzionante e correggendo la rotta con il feedback di chi usa.

### Il confronto che la commissione si aspetta

Il cascata ha un pregio: quando i requisiti sono davvero stabili, imposti da una norma o da un protocollo che non si negozia, la sequenza produce documenti completi e un contratto chiaro. Ha un difetto strutturale: il feedback di chi usa arriva tardi, quando cambiare costa di più. Gli errori di analisi si scoprono alla verifica finale. Funziona meglio se il problema è noto e il costo di un cambiamento successivo è accettato.

L’agile parte dall’osservazione che molti requisiti si capiscono vedendo il software. Si lavora a incrementi brevi, ciascuno con qualcosa che si può provare. Il committente, o un suo rappresentante, guarda il risultato spesso e può cambiare priorità. La documentazione esiste, ma si scrive ciò che serve a decidere e a mantenere, non un volume che anticipa ogni schermata prima di averne provata una. L’agile non è l’assenza di disciplina. Senza un elenco di cose da fare, senza una definizione di «finito», senza test, è solo fretta.

Il modello iterativo è la famiglia più ampia: si ripetono cicli, anche senza adottare tutti i riti di un metodo specifico. Scrum, che sta nell’area 8, è un modo di organizzare il lavoro agile, con ruoli e scadenze. Non è sinonimo di agile, è un’implementazione.

La scelta dipende dal contesto. Un componente di calcolo con una specifica matematica chiusa può seguire una sequenza. Un portale per i cittadini, di cui non si conoscono le abitudini reali, guadagna dai rilasci frequenti. In un ente pubblico il vincolo non è solo tecnico: tempi di acquisizione, collaudo, responsabilità. Un agile credibile in quel contesto dice chi ha l’autorità di cambiare le priorità e come si traccia la decisione. Un cascata credibile dice come si gestisce una modifica, perché le modifiche arrivano comunque.

Molti progetti veri sono ibridi. Si fissano in anticipo i vincoli non funzionali e l’architettura, e si fanno evolvere i dettagli funzionali per incrementi. Dirlo è segno di giudizio, non di indecisione, purché si dica che cosa è fisso e che cosa è incrementale.


### Nel dettaglio

Il cascata dispone le attività in sequenza: si specifica tutto, si progetta tutto, si costruisce, si prova, si consegna. Ha un senso quando il requisito è stabile e noto, e quando il costo di un cambiamento a metà è altissimo, per esempio un impianto. Ha un difetto noto quando il requisito non è stabile: l’utente vede il sistema alla fine, e lì si scopre che la regola di ufficio era un’altra. Tornare indietro costa quanto rifare. In un ente, un bando scritto troppo presto assomiglia a un cascata: si è promesso un comportamento prima di averlo visto.

L’iterativo consegna a fette. Ogni fetta passa da specifica, costruzione e prova, e alla fine della fetta c’è qualcosa che si usa, o almeno si guarda. Si impara dal fatto di usarlo, e la fetta successiva cambia. Il rischio si sposta: invece di sbagliare tutto in grande alla fine, si può sbagliare una fetta all’inizio, quando correggere costa poco. Il prezzo è la disciplina di avere davvero una fetta funzionante, non una fetta «quasi», per mesi.

Agile è un modo di organizzare l’iterativo, con principi precisi. Si accetta che il requisito cambi. Si preferisce il software che funziona alla documentazione che lo promette. Si parla con l’ufficio di continuo, non solo all’inizio e alla fine. Ci si ferma a intervalli fissi e si guarda che cosa migliorare nel modo di lavorare. Non è l’assenza di documenti. Un requisito non scritto, in un ente, non si può collaudare e non si può pagare. Si tengono i documenti che servono a decidere e a verificare, corti, aggiornati.

La scelta si motiva con il grado di incertezza. Regolamento già scritto, integrazione con un sistema noto, poca incertezza: un piano sequenziale, con prove in fondo a ogni fase, va bene. Processo di ufficio che nessuno ha mai formalizzato: iterativo, con un ufficio che prova la fetta ogni due settimane. Sul foglio si sceglie uno, si dice che cosa si consegna e ogni quanto, e che cosa resta scritto comunque: requisiti, prove, decisioni.

### Esempio

Il rifacimento di un sistema che deve applicare una regola di calcolo già scritta in un regolamento si presta a requisiti chiusi e a un collaudo contro quella regola. Il portale con cui gli uffici segnalano le richieste di assistenza no: solo usandolo si scopre che manca uno stato «in attesa del fornitore». Un incremento ogni due settimane, con un ufficio pilota, costa meno che scoprirlo al collaudo finale.

### In sede di prova

Definire i due approcci per il momento in cui arriva il feedback. Dare un vantaggio e un limite a ciascuno. Chiudere con il criterio di scelta: stabilità dei requisiti, costo del cambiamento, bisogno di un contratto chiuso, possibilità reale di avere un committente presente. Non dire che l’agile è moderno e il cascata è vecchio.

### Errori da evitare

- Descrivere l’agile come «si lavora senza documenti e senza piani».
- Descrivere il cascata come sempre sbagliato.
- Citare Scrum, Kanban e DevOps come se fossero la stessa cosa. Scrum organizza il team. DevOps è un modo di collaborare fra costruzione e esercizio, ed è nell’area 8 se serve.

### Svolgimento da consegnare
I due modelli non si distinguono perché uno sia moderno e l'altro no. Si distinguono per il momento in cui arriva il giudizio di chi userà il sistema. Nel modello a cascata le attività stanno in sequenza: si chiudono i requisiti, poi si progetta, poi si costruisce, poi si verifica, poi si rilascia. Il pregio è reale quando i requisiti sono stabili, imposti da una norma o da un calcolo che non si negozia, e quando serve un perimetro contrattuale chiaro. Il difetto è strutturale: chi usa il sistema lo vede tardi, quando cambiare costa di più. Un errore di analisi scoperto al collaudo finale si paga per intero.

I modelli iterativi e agili ripetono cicli brevi in cui c'è già qualcosa che si può provare. Il feedback arriva presto e le priorità si possono cambiare. La documentazione non sparisce: si scrive ciò che serve a decidere e a mantenere, non un volume che anticipa ogni schermata prima di averne provata una. L'agile senza un elenco di cose da fare, senza una definizione di «finito» e senza prove non è un metodo. È fretta. Scrum è un modo di organizzare quel lavoro, con ruoli e sprint, non un sinonimo di ogni forma di agilità. Va tenuto distinto, e se la domanda chiede Scrum si risponde con Product Owner, sprint e backlog, non con un discorso generico sul cambiamento.

La scelta si argomenta sul caso. Un componente che applica una formula già scritta in un regolamento può seguire una sequenza e un collaudo contro quella formula. Un portale interno di cui non si conoscono le abitudini reali guadagna da un incremento ogni due settimane e da un ufficio pilota. In una pubblica amministrazione il vincolo non è solo tecnico. Ci sono tempi di acquisizione, collaudi, responsabilità. Un agile credibile dice chi ha l'autorità di ordinare le priorità, una persona sola e non un comitato che non decide, e come si scrive la scelta di rimandare una funzione. Un cascata credibile dice come si gestisce una modifica, perché le modifiche arrivano comunque.

Molti progetti veri tengono fermi i vincoli non funzionali e l'architettura, e fanno evolvere i dettagli funzionali. Dirlo non è indecisione, se si indica che cosa è fisso: sicurezza, identità, conservazione degli atti. E che cosa è incrementale: l'ordine delle schermate, un report, un campo in più. La chiusura della risposta è il criterio, non il tifo. Stabilità dei requisiti, costo del cambiamento, presenza reale di un committente che guarda il risultato, vincoli che non si possono scoprire provando.

```disegno
titolo: Dove arriva il feedback
riga: Cascata | Requisiti chiusi, poi tutto il resto, feedback al collaudo
riga: Iterativo | Ciclo breve | Qualcosa che si prova | Si corregge la priorità
nota: In entrambi i casi restano analisi, prova e manutenzione. Cambia quando si ripetono.
```

### Approfondire

- [Manifesto per lo sviluppo agile del software](https://agilemanifesto.org/iso/it/manifesto.html)
- [Modello a cascata](https://it.wikipedia.org/wiki/Modello_a_cascata)

## Requisiti funzionali e non funzionali

**Prove:** prima prova, seconda prova gruppo 2
**Tag:** requisiti, verificabilità, qualità
**Semaforo:** verde

### Inquadramento

Il funzionale dice che cosa un attore fa, con un verbo. Il non funzionale dice con quale vincolo: tempo, disponibilità, quanti dati si possono perdere, accessibilità. I secondi hanno un numero, altrimenti non si possono verificare. Sul foglio se ne scrivono pochi e numerati, presi dalla traccia, e più avanti si richiamano per nome. Un requisito che non compare né nei dati né in una prova è orfano. Le esclusioni, ciò che il sistema non fa, sono requisiti anche loro.

### Definizione

Un requisito funzionale descrive un comportamento del sistema: che cosa deve fare, in risposta a chi, su quali dati. Un requisito non funzionale descrive una qualità o un vincolo: quanto deve essere rapido, disponibile, sicuro, accessibile, e in quale ambiente deve vivere. Entrambi devono essere verificabili. «Il sistema deve essere facile» non è un requisito. «Un operatore già formato completa l’apertura di un ticket in meno di due minuti» si può provare.

### Come si scrivono in un elaborato

I funzionali si scrivono dal punto di vista dell’attore. «Il dipendente crea un ticket con oggetto, descrizione e priorità suggerita. Il sistema assegna un numero e conferma.» «Il tecnico di un gruppo vede i ticket aperti di quel gruppo e può prenderne uno in carico.» «Il responsabile ottiene il numero di ticket chiusi nel mese, per gruppo.» Cinque o sei frasi di questo tipo valgono più di un paragrafo astratto. Ogni frase ha un attore, un verbo e un risultato.

I non funzionali si scrivono con un numero o con una condizione, quando si può. Tempo di risposta della ricerca sotto i tre secondi su un elenco di diecimila ticket, in condizioni normali. Disponibilità del servizio negli orari di ufficio, con un RTO di quattro ore fuori da quegli orari, se è ciò che si è deciso. Accesso solo con identità dell’ente. Interfaccia utilizzabile da tastiera, con contrasto sufficiente, perché un ente pubblico non progetta solo per chi vede bene e usa il mouse. Backup con RPO di un’ora. Compatibilità con i browser in uso nell’ente, da nominare solo se si conoscono.

I vincoli non sono qualità, ma si scrivono accanto: obbligo di conservare i log per un certo tempo, divieto di mandare i dati a un servizio non qualificato, uso di un’identità già esistente. Un vincolo restringe le scelte. Va distinto da un desiderio.

I requisiti si numerano. Nel resto dell’elaborato ci si riferisce al numero. «La tabella Ticket soddisfa R3 e R4.» È il modo in cui si mostra coerenza. Un requisito che non ha un riscontro nel resto del testo è stato dimenticato. Un pezzo di architettura che non soddisfa nessun requisito è stato messo per abitudine.

Le priorità contano quando il tempo non basta. Si segnano i requisiti senza i quali il sistema non ha senso, e quelli che possono arrivare dopo. In un tema, dichiarare che i report avanzati sono una fase successiva è meglio che prometterli e non progettare nulla.


### Nel dettaglio

Un requisito funzionale dice che cosa il sistema fa, in una frase che si può provare. «Il responsabile chiude il ticket» non basta. «Un utente con il ruolo responsabile può portare un ticket del proprio ufficio dallo stato preso allo stato chiuso, e il sistema registra chi e quando» si può provare. C’è l’attore, l’oggetto, la condizione, l’esito, la traccia. I requisiti si numerano. Da quel numero si ricaveranno i casi di prova, e nel tema la corrispondenza si mostra su due o tre requisiti, non su tutti.

Un requisito non funzionale dice una qualità misurabile. Tempo di risposta: l’elenco si apre in meno di due secondi con mille ticket. Disponibilità: in orario d’ufficio, con un RTO di quattro ore. Numero di utenti contemporanei. Conservazione: i ticket chiusi restano consultabili per dieci anni. Accessibilità: le funzioni principali si usano da tastiera e con un lettore di schermo. Sicurezza: la sessione scade dopo trenta minuti di inattività. Senza un numero o una condizione, il requisito è un aggettivo. «Il sistema deve essere veloce» non si collauda. «Il sistema deve essere sicuro» nemmeno.

Si separano dai vincoli. Il vincolo è una decisione già presa: si usa l’identità dell’ente, i dati restano in un certo perimetro, il browser è quello delle postazioni già presenti. Non è un requisito del software, è un confine dentro cui i requisiti si realizzano. Confonderli porta a «richiedere» ciò che non si può scegliere.

Si scrive anche ciò che il sistema non fa. Non manda PEC. Non tiene il protocollo generale. Non sostituisce la posta. Due esclusioni, nel tema, valgono quanto dieci requisiti, perché impediscono alla commissione di immaginare un perimetro diverso. Sul foglio: cinque requisiti funzionali numerati, tre non funzionali con un numero ciascuno, due esclusioni. Poi, per uno solo, il caso di prova corrispondente.

### Esempio

Funzionali per un archivio: F1 ricerca per titolo, data e ufficio; F2 apertura di un documento secondo il ruolo; F3 versamento di un nuovo documento con metadati obbligatori; F4 registro di chi ha letto un documento riservato. Non funzionali: N1 ricerca sotto i tre secondi sull’archivio attuale; N2 disponibilità in orario d’ufficio; N3 cifratura in transito; N4 ripristino entro otto ore; N5 interfaccia accessibile da tastiera. Il vincolo V1: identità tramite il sistema già in uso nell’ente, non un archivio locale di password.

### In sede di prova

Scrivere sempre entrambi i tipi, in elenchi separati e numerati. Rendere verificabile almeno tre non funzionali. Nel seguito dell’elaborato richiamarli. È una delle abitudini che fanno guadagnare punti sulla prima prova, e prepara anche il quesito teorico «che differenza c’è».

### Errori da evitare

- Mettere fra i funzionali «il sistema deve essere sicuro». È non funzionale, e così com’è non è verificabile.
- Scrivere dieci requisiti che sono la stessa funzione detta in tre modi.
- Non funzionali senza misura: «veloce», «sicuro», «moderno».

### Approfondire

- [Ingegneria dei requisiti](https://it.wikipedia.org/wiki/Ingegneria_dei_requisiti)
- [Accessibilità dei servizi](https://www.agid.gov.it/it/design-servizi/accessibilita)

## Casi d’uso e UML essenziale

**Prove:** prima prova, seconda prova gruppo 2
**Tag:** caso d’uso, attore, diagramma di sequenza, classi
**Semaforo:** giallo

### Inquadramento

Il caso d'uso è un attore che ottiene qualcosa dal sistema, raccontato nei passi principali e in un'eccezione. UML, per l'esame, basta nei disegni che si sanno rifare: il caso d'uso con gli omini e i confini, e le classi con la chiave e la cardinalità. Sul foglio si scrivono due casi, di cui uno negativo, e uno schema dati. Un diagramma che la commissione non sa leggere non vale quanto una frase chiara. I nomi degli attori sono quelli dei ruoli, non «utente».

### Definizione

Un caso d’uso descrive come un attore, una persona o un altro sistema, raggiunge un obiettivo usando il sistema. L’UML è una famiglia di diagrammi per rappresentare requisiti, struttura e interazioni. In un elaborato a tempo non serve l’UML completo. Servono tre diagrammi semplici, coerenti con il testo.

### Che cosa disegnare

Il diagramma dei casi d’uso mostra gli attori fuori dal sistema e, dentro, gli obiettivi: «apre un ticket», «prende in carico», «estrae un report». Una linea collega l’attore ai casi che gli competono. Non si mettono i passi interni. Il disegno serve a non dimenticare un attore e a non dare a tutti le stesse funzioni. Include, se esiste, un sistema esterno: l’identità dell’ente, la posta.

Il caso d’uso, in testo, ha il percorso normale e uno alternativo. Apre un ticket: il dipendente è autenticato, compila i campi obbligatori, il sistema valida, registra, mostra il numero. Alternativa: manca l’oggetto, il sistema rifiuta e non registra. Alternativa: la sessione è scaduta, il sistema chiede di nuovo l’accesso. Due alternative bastano. Scriverne dieci consuma l’ora.

Il diagramma di sequenza, uno solo, per il caso più importante, mostra l’ordine dei messaggi: utente, interfaccia, server, database. È il disegno che dimostra che il controllo sta sul server. Freccia «invia modulo», freccia «verifica ruolo e valida», freccia «inserisce», freccia «conferma». Se c’è un rifiuto, una freccia di ritorno con l’errore.

Il diagramma delle classi, se si usa, assomiglia allo schema dati: classe, attributi principali, legami con la cardinalità. Non è obbligatorio averlo oltre allo schema delle tabelle. Avere entrambi e farli divergere è peggio che averne uno solo. In un tema si può dire che il modello dei dati rappresenta le classi persistenti, e non disegnare due volte la stessa cosa in modi diversi.

La legenda e i nomi uguali al testo contano più della forma delle frecce. Un rettangolo chiamato «gestione» non dice nulla. Un rettangolo «prendi in carico il ticket» dice un requisito.


### Nel dettaglio

Un caso d’uso è una frase: un attore ottiene un risultato dal sistema. «Il tecnico prende in carico il ticket». L’attore è chi ha un comportamento, persona o sistema esterno. Il risultato è osservabile. Dentro il caso si raccontano i passi del corso normale, e poi i corsi alternativi: il ticket è già preso, l’utente non ha il ruolo, il campo è vuoto. Senza i corsi alternativi il caso descrive la giornata ideale e non il sistema. Tre o quattro casi, per un tema, coprono il cuore. Venti casi superficiali non coprono nulla.

Il diagramma è un riassunto, non il caso. Gli attori stanno fuori, i casi dentro, le linee dicono chi partecipa. Include significa che un caso ne richiama un altro sempre, per esempio «identificarsi» dentro ogni operazione, e anche lì si valuta se vale la pena o se l’identificazione è un presupposto. Extend è un comportamento che a volte si aggiunge. In un elaborato si può fare a meno di include ed extend se confondono. Meglio quattro ellissi chiare che un diagramma indecifrabile.

Gli altri diagrammi, se servono, sono due. La sequenza, per un solo caso difficile: utente, proxy, applicazione, database, e le frecce nell’ordine, con il punto in cui si rifiuta. Gli stati, per l’oggetto che ha una vita: aperto, preso, chiuso, e le frecce solo dove il passaggio è lecito, con il ruolo scritto sulla freccia. Uno stato «annullato» raggiungibile da tutti senza una regola è un buco. Non servono diagrammi di classi elaborati e non servono i simboli a memoria. Serve che il disegno e il testo dicano la stessa cosa.

Sul foglio si scrive un caso per intero, una dozzina di righe, e si disegnano gli stati dell’oggetto principale. Il resto dei casi si elenca per nome. È una pagina che la commissione legge volentieri, perché si vede se il candidato ha capito il lavoro dell’ufficio.

### Esempio

Attori: dipendente, tecnico, responsabile. Casi: autenticarsi, creare ticket, consultare i propri, prendere in carico, cambiare stato, commentare, vedere i tempi medi. Il dipendente non è collegato a «vedere i tempi medi». Il diagramma di sequenza di «prendere in carico» mostra il server che rifiuta se il tecnico non appartiene al gruppo del ticket. Quella freccia di rifiuto è il punto in cui il disegno diventa un ragionamento di sicurezza.

### In sede di prova

Un disegno piccolo e un testo di scenario normale più un’alternativa. Dire che cosa si è scelto di non disegnare, se il tempo manca, piuttosto che consegnare uno schema illeggibile. Usare gli stessi nomi delle tabelle e dei requisiti.

### Errori da evitare

- Un caso d’uso chiamato «gestire», che include tutto e non si può verificare.
- Frecce UML inventate. Se non si ricorda il simbolo, una freccia con un’etichetta chiara è meglio di un simbolo sbagliato usato con sicurezza.
- Attori che sono in realtà funzioni. «Login» non è un attore. Il dipendente lo è.

### Approfondire

- [Caso d'uso](https://it.wikipedia.org/wiki/Caso_d%27uso)
- [UML](https://it.wikipedia.org/wiki/Unified_Modeling_Language)

## La programmazione a oggetti

**Prove:** seconda prova gruppo 2, orale
**Tag:** classe, oggetto, ereditarietà, polimorfismo, incapsulamento
**Semaforo:** giallo

### Inquadramento

Un oggetto tiene insieme dati e operazioni. La classe è il modello. L'incapsulamento nasconde il dettaglio. L'eredità riusa, e si usa con parsimonia perché lega i destini. Il polimorfismo permette di trattare nello stesso modo oggetti che rispondono alla stessa chiamata. Sul foglio si prende un concetto della traccia, la richiesta o la seduta, e si dice che cosa tiene e che cosa sa fare. Si distingue la classe dall'esemplare. Non serve scrivere un programma: serve non usare le parole a vuoto.

### Definizione

La programmazione a oggetti organizza il software in oggetti, che riuniscono dati e operazioni su quei dati. La classe è il modello. L’oggetto è un esemplare della classe, con i propri valori. I quattro principi che si citano sono incapsulamento, astrazione, ereditarietà e polimorfismo.

### I quattro principi, con un solo esempio tenuto fermo

Incapsulamento. I dati interni non si modificano a piacere da fuori. Si passa da operazioni che fanno rispettare le regole. Un ticket non ha il campo stato cambiato da una riga qualunque del programma: si chiama un’operazione «prendi in carico», che controlla il ruolo e lo stato attuale. Se tutti possono scrivere nel campo, le regole stanno dappertutto e da nessuna parte.

Astrazione. Chi usa l’oggetto vede il necessario e non i dettagli. A chi prenota interessa «conferma prenotazione», non il modo in cui si scrive il log. L’astrazione rende sostituibile l’interno, se il comportamento esterno resta.

Ereditarietà. Una classe più specifica riprende da una più generale e aggiunge o ridefinisce. Documento ha titolo e data. Fattura è un documento con un importo e una partita. L’ereditarietà è utile quando esiste davvero una relazione «è un». Se la relazione è «ha un», non si eredita: si contiene. Un ufficio ha dei dipendenti, non è un dipendente. Usare l’ereditarietà per riusare due righe di codice, senza una relazione vera, produce gerarchie che non si capiscono più.

Polimorfismo. Un cliente del codice tratta allo stesso modo oggetti di classi diverse che condividono un comportamento. «Stampa» su un documento fa la cosa giusta per la fattura e per una lettera, senza che il chiamante distingua tutti i casi. Si appoggia a un’interfaccia comune. Il vantaggio è che si aggiunge un tipo nuovo senza riscrivere tutti i chiamanti, se l’interfaccia era quella giusta.

I principi non sono quattro definizioni da recitare staccate. Sono il modo in cui si tiene un programma modificabile. Un elaborato di progettazione non deve contenere classi in un linguaggio. Deve, se il quesito è teorico, definirle con un esempio unico e coerente.


### Nel dettaglio

Un oggetto mette insieme i dati e le operazioni che hanno senso su quei dati. Un ticket ha uno stato e un’operazione prendi in carico, invece di una funzione generica che riceve una struttura e la modifica da fuori. L’incapsulamento è il confine: lo stato si cambia attraverso l’operazione, che può rifiutare. Se qualunque pezzo di codice scrive nel campo stato, la regola «solo il responsabile chiude» sta in un punto solo per convenzione, e la convenzione si rompe. Nel codice, i campi non si espongono a chiunque.

L’ereditarietà prende una classe e la specializza. Ha un senso se la specializzazione è davvero una. Un ticket urgente è un ticket. Un utente non è un ticket. Usare l’ereditarietà per riusare due righe di codice, fra classi che non c’entrano, lega cose che cambieranno per motivi diversi. La composizione, un oggetto che ne contiene un altro, è spesso la scelta più calma: un ticket ha un richiedente, non è un richiedente.

Il polimorfismo permette di trattare oggetti diversi attraverso un comportamento comune. I tipi di notifica, posta e messaggio interno, hanno entrambi un’operazione invia. Il codice che chiude il ticket chiede invia e non sa quale delle due partirà. Si aggiunge una terza notifica senza riscrivere la chiusura. L’astrazione è il scegliere che cosa mostrare: all’esterno il ticket offre prendi in carico, e nasconde come aggiorna il registro.

In un tema non si progetta la gerarchia delle classi dell’intero sistema. Si prende un oggetto, il ticket, e si mostrano l’incapsulamento, con la regola dentro l’operazione, e un solo caso di comportamento comune, le notifiche. È abbastanza per dimostrare che i quattro principi sono scelte, non definizioni.

### Esempio

Classe Ticket, con stato privato e operazioni pubbliche: apri, prendi in carico, chiedi informazioni, chiudi. Nessuna operazione permette di passare da «aperto» a «chiuso» saltando i controlli. Classe TicketUrgente, se davvero ha comportamenti diversi, altrimenti l’urgenza è un attributo, non una sottoclasse. È una scelta da spiegare: non ogni distinzione merita una classe figlia. Spesso un attributo è più onesto.

### In sede di prova

Definire classe e oggetto. Poi i quattro nomi, ciascuno con una frase legata allo stesso esempio. Dire quando non si eredita. Se si conosce un linguaggio, si può nominarlo, senza scrivere venti righe di codice a meno che il quesito non lo chieda.

### Errori da evitare

- Confondere classe e oggetto.
- Dire che l’incapsulamento è «usare le classi».
- Fare ereditarietà fra cose che non sono una generalizzazione, e non saperlo giustificare.

### Approfondire

- [Programmazione orientata agli oggetti](https://it.wikipedia.org/wiki/Programmazione_orientata_agli_oggetti)

## Linguaggi compilati, interpretati e la via di mezzo

**Prove:** seconda prova gruppo 2, orale
**Tag:** compilatore, interprete, bytecode, JVM
**Semaforo:** giallo

### Inquadramento

Il compilato si traduce prima di eseguire, e l'errore di forma si vede prima. L'interpretato si traduce eseguendo, e si modifica in fretta. Molti linguaggi usati sul web stanno in mezzo: si traducono in un codice intermedio, o si compilano al volo. Sul foglio si mette il linguaggio scelto per l'applicazione in una di queste famiglie e se ne trae una conseguenza pratica, per esempio quando si scopre un errore di sintassi. La scelta del linguaggio nell'elaborato resta una, motivata dalla manutenzione.

### Definizione

Un linguaggio di programmazione è un modo formale di descrivere calcoli e comportamenti, che un programma traduce in azioni della macchina. Nella traduzione compilata, un compilatore produce prima dell’esecuzione un programma eseguibile per una famiglia di macchine. Nella traduzione interpretata, un interprete legge il programma e lo esegue. Molti linguaggi usati davvero stanno in mezzo.

### Le differenze che contano in una scelta

Il compilato, come il C, produce codice nativo. L’esecuzione è efficiente e non dipende da un interprete installato. Gli errori di tipo e di sintassi emergono in compilazione, prima di arrivare all’utente. Il programma va ricompilato per un’altra architettura o un altro sistema, e il ciclo «cambio una riga e riprovo» è più lento. Si usa dove il controllo delle risorse è stretto: sistemi, componenti di base, calcoli pesanti.

L’interpretato, come molte parti di Python e di JavaScript, parte subito e si sposta con più facilità sull’interprete giusto. Gli errori di un percorso che non è stato eseguito possono emergere solo in quel percorso. Le prestazioni sono in genere minori, anche se gli interpreti moderni compilano al volo i pezzi caldi. Python è una scelta frequente per prototipi, script di amministrazione, data analysis. JavaScript è il linguaggio del browser, e con i suoi ambienti anche del server.

Java, e in modo simile C#, compilano in un bytecode intermedio, eseguito da una macchina virtuale. Il programma non si ricompila per ogni sistema operativo: si esegue dove c’è la macchina virtuale. Si ottiene un controllo di tipi in compilazione e una portabilità buona. Il costo è la presenza di quell’ambiente e un consumo di memoria proprio. «Write once, run anywhere» è lo slogan storico, vero nei limiti di ciò che non dipende da un sistema specifico.

La scelta di un linguaggio in un tema non è una bandiera. Si motiva con: chi dovrà mantenerlo, quali librerie servono, quali vincoli di esercizio ci sono, quanto è critico il tempo di esecuzione. Per un’applicazione gestionale di un ente, un linguaggio con tipi controllati, librerie mature e persone reperibili è una motivazione migliore della velocità pura. Per uno script di migrazione che si esegue una volta, un linguaggio interpretato è ragionevole.

Vanno distinti linguaggio, librerie e ambiente. Scegliere «Java» senza dire come si costruisce l’interfaccia e dove gira non è una scelta di architettura. Scegliere un linguaggio perché è l’unico che si conosce è umano, e in un orale è meglio dirlo insieme ai criteri, non travestirlo da analisi.


### Nel dettaglio

Un linguaggio compilato traduce il sorgente in un eseguibile della macchina, prima di eseguirlo. Gli errori di forma si vedono in quella traduzione. L’eseguibile corre senza bisogno del sorgente e, in genere, senza un interprete. C e Rust stanno da questa parte, con sfumature. Il prezzo è il ciclo: si traduce, si prova, si ritraduce. E l’eseguibile è legato all’architettura, salvo strumenti specifici.

Un linguaggio interpretato esegue il sorgente, o una forma immediata, tramite un programma interprete. Si modifica e si riprova subito. Gli errori di forma possono comparire solo quando quella riga viene eseguita. In esercizio serve l’interprete, della versione giusta. Python, nella forma più comune, si racconta così, anche se di fatto traduce in un bytecode intermedio. JavaScript nel browser è di questa famiglia, con motori che poi traducono al volo le parti calde.

La via di mezzo è la macchina virtuale. Java e C# si compilano in un bytecode, e una macchina virtuale lo esegue, spesso traducendo al volo le parti usate. Si guadagna un eseguibile indipendente dal sistema, a patto che la macchina virtuale ci sia. Si perdono alcuni errori solo a tempo di esecuzione, e si porta dietro il peso della macchina virtuale. In un ente è una scelta solida per un server applicativo, perché gli strumenti, i tipi e le librerie sono maturi.

La scelta nel tema non è una classifica. È una coerenza. Un solo linguaggio sul server, quello che l’ente sa mantenere. Il browser parla JavaScript, e non c’è scelta, per la parte di interfaccia che ne ha bisogno. Non si mettono tre linguaggi sul server «per usare il più adatto a ogni microservizio» se il gruppo è piccolo: il costo di mantenerli supera il vantaggio. Sul foglio si nomina il linguaggio, si dice se è compilato, interpretato o su macchina virtuale, e si dà il motivo: manutenzione, non moda.

### Esempio

L’applicazione dei ticket è scritta in un linguaggio con tipi statici, eseguito sul server, perché deve vivere dieci anni ed essere letta da persone diverse. Uno script Python, a parte, importa i vecchi fogli elettronici una volta sola. Il browser usa JavaScript per l’interfaccia, senza contenere le regole di autorizzazione. Tre linguaggi, tre motivi. Nessuno è «il migliore».

### In sede di prova

Definire compilazione e interpretazione. Citare la via del bytecode. Dare un criterio di scelta e un esempio. Non fare la classifica dei linguaggi. Se si cita un linguaggio, dire un tratto verificabile, non un giudizio.

### Errori da evitare

- Dire che gli interpretati non hanno bisogno di essere corretti perché «sono più semplici».
- Dire che Java è interpretato come Python. La distinzione del bytecode è il punto della risposta.
- Scegliere in un progetto cinque linguaggi senza bisogno.

### Approfondire

- [Java](https://it.wikipedia.org/wiki/Java_(linguaggio_di_programmazione))
- [Python](https://it.wikipedia.org/wiki/Python)
- [JavaScript](https://it.wikipedia.org/wiki/JavaScript)

## Che cos’è un algoritmo, al livello utile per l’orale

**Prove:** orale, seconda prova gruppo 2
**Tag:** algoritmo, complessità, correttezza
**Semaforo:** rosso

### Inquadramento

Un algoritmo è una sequenza finita di passi che, sugli stessi dati, porta allo stesso risultato. Per l'orale bastano la definizione, un esempio piccolo e l'idea che due algoritmi si confrontano per quanti passi fanno al crescere dei dati. Sul foglio, se capita un quesito, si descrive a parole un procedimento che il tema già usa, per esempio «cerca una sala libera e, se c'è, occupala in modo atomico», e si dice perché l'ordine dei passi conta. Non serve un formalismo che non si sa chiudere.

### Definizione

Un algoritmo è una sequenza finita di passi determinati, che risolve un problema e termina. Non è un’idea e non è, ancora, un programma in un linguaggio. Il programma è la scrittura di un algoritmo in una forma eseguibile. Di un algoritmo importano la correttezza, cioè il fatto che produca il risultato atteso, e il costo, cioè quante operazioni e quanta memoria chiede al crescere dei dati.

### Come se ne parla senza una lavagna di matematica

La correttezza si argomenta sui casi. Il caso normale, i casi di confine (lista vuota, un solo elemento, nessun risultato), i casi di errore. I test dell’area dedicata sono il modo ingegneristico di cercare i casi in cui l’algoritmo non è corretto. Non dimostrano la correttezza per tutti gli input possibili, e questo limite si può dire.

Il costo si descrive con l’andamento, non con i millisecondi. Cercare un nome in un elenco non ordinato costringe, nel caso peggiore, a guardare tutti gli elementi: il costo cresce come il numero degli elementi. Se l’elenco è ordinato, una ricerca binaria dimezza lo spazio a ogni passo e cresce molto più lentamente, come il logaritmo del numero. Ordinare ha un costo maggiore della ricerca. Per l’orale basta questa intuizione: algoritmi diversi per lo stesso problema non sono equivalenti quando i dati crescono, e scegliere il primo che funziona può non essere accettabile su un archivio grande.

Le strutture contano. Un elenco è adatto a percorrere in ordine. Un dizionario, o mappa, recupera un valore data la chiave, in modo quasi diretto, e non conserva un ordine significativo. Un insieme non ammette duplicati. Scegliere la struttura sbagliata rende lento un algoritmo anche se l’idea è giusta. Nel database, l’indice è l’analogo: evita di scorrere tutta la tabella.

Non serve, per questo concorso, ricordare a memoria dieci algoritmi di ordinamento. Serve saper dire che un algoritmo deve terminare, che va provato sui casi limite, e che il costo cresce in modi diversi. Se si cita la notazione O grande, va usata bene: O(n) per una scansione, O(log n) per la ricerca binaria. Se non si è sicuri, si descrive a parole.


### Nel dettaglio

Un algoritmo è una sequenza finita di passi, non ambigua, che da un ingresso produce un risultato e termina. Finitezza, determinatezza e terminazione sono le tre proprietà da dire. Una ricetta che a un certo punto dice «regolare a sentimento» non è determinata. Un ciclo che aspetta una condizione che può non arrivare non termina. In un sistema informativo gli algoritmi interessanti sono quelli delle regole di ufficio e quelli delle strutture dati, non le dimostrazioni.

La complessità si racconta con il crescere dei dati, senza notazione pesante se non la si possiede. Cercare un nome in un elenco non ordinato costa, nel caso peggiore, quanto la lunghezza dell’elenco: il doppio dei nomi, il doppio del tempo. Cercarlo in un elenco ordinato, dimezzando ogni volta, costa molto meno: mille nomi si risolvono in una decina di passi, un milione in una ventina. Ordinare costa più che cercare. Questa differenza è il motivo degli indici, ed è il collegamento con l’area dei dati: l’indice è una struttura che rende economica una ricerca frequente, al prezzo di un costo a ogni scrittura.

Una struttura dati si sceglie per le operazioni. L’elenco tiene l’ordine e costa trovare un elemento. L’insieme dice se un elemento c’è. La mappa porta da una chiave a un valore, ed è ciò che sta sotto un indice e sotto una sessione. La coda fa uscire il primo entrato, e descrive i ticket in attesa. Non si inventa una struttura. Si dice quale operazione deve essere economica.

Un esempio da orale. Assegnare un ticket al tecnico con meno ticket aperti. Soluzione semplice: per ogni tecnico contare, scegliere il minimo. Con pochi tecnici è finita e chiara. Con un numero enorme si terrebbe il conteggio aggiornato, invece di ricalcolarlo. Dire questo trade-off vale più che recitare una formula. Si chiude con la correttezza: si prova il caso normale, il caso con un solo tecnico, il caso con nessuno, e il caso di parità, in cui due tecnici hanno lo stesso numero e serve una regola.

### Esempio

Trovare se un codice fiscale è già presente fra centomila anagrafiche. Scorrere la lista ogni volta è corretto e diventa lento. Un indice unico sul database risolve la correttezza (niente duplicati) e il costo insieme. L’algoritmo di controllo del codice, se lo si scrive a mano, va provato su un codice valido, uno con un carattere di troppo e uno vuoto.

### In sede di prova

Definizione in una frase. Correttezza e costo come due criteri. Un esempio di ricerca. Fermarsi. Non inventare complessità.

### Errori da evitare

- Chiamare algoritmo qualsiasi procedura vaga che non dice come si comportano i casi limite.
- Dire che un algoritmo «è veloce» senza dire rispetto a quale alternativa e al crescere di che cosa.
- Confondere un problema (ordinare) con un algoritmo (un modo particolare di ordinare).

### Approfondire

- [Algoritmo](https://it.wikipedia.org/wiki/Algoritmo)
- [Struttura dati](https://it.wikipedia.org/wiki/Struttura_dati)

## API REST

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** REST, risorse, metodi HTTP, JSON
**Semaforo:** verde

### Inquadramento

Un'API REST espone risorse e usa i verbi di HTTP per le azioni, con codici coerenti e senza stato sul server fra una chiamata e l'altra. La sessione, se c'è, sta in un deposito, non nella memoria di un solo nodo. Sul foglio si elencano le chiamate della traccia, creazione, lettura filtrata, aggiornamento di stato, e si assegna a ciascuna un verbo e un codice. Si ricorda che l'API non è il permesso: il permesso si ricontrolla sul server anche se il verbo è quello giusto.

### Definizione

Un’API, interfaccia di programmazione, è il contratto con cui un componente usa un altro senza conoscerne l’interno. Un’API REST organizza quel contratto intorno a risorse identificate da indirizzi, manipulate con i metodi HTTP, e rappresentate di solito in JSON. Il server non è tenuto a ricordare lo stato del dialogo fra una richiesta e l’altra: ogni richiesta contiene ciò che serve a trattarla, a parte l’autenticazione.

### Il contratto minimo

Una risorsa è un nome, non un verbo. `/ticket/44` è la risorsa. Il verbo è il metodo. GET la legge. POST su `/ticket` ne crea una nuova. PATCH ne modifica una parte. DELETE la ritira, o ne chiede l’annullamento se la cancellazione fisica non è ammessa. L’indirizzo non contiene l’azione «cancellaTicket»: l’azione è il metodo. Questa è la distinzione che separa una risposta precisa da una approssimativa.

I codici di stato sono parte del contratto, non un optional. 201 quando si crea, con l’indirizzo della risorsa creata. 400 se i dati sono inaccettabili. 401 se manca l’identità. 403 se l’identità non ha il diritto. 404 se la risorsa non c’è. 409 se la richiesta collide con uno stato, per esempio due prese in carico simultanee. 500 se il guasto è del server. Il corpo dell’errore dice un messaggio utile all’interfaccia, senza la traccia interna.

JSON è il formato usuale: oggetti con campi nominati, liste, valori. Non è XML, non è un testo libero. I campi e i loro significati sono il contratto. Cambiare il nome di un campo rompe i client. Per questo le API hanno una versione, o una disciplina di evoluzione: si aggiunge un campo, non si toglie un campo usato, finché i client non sono aggiornati.

L’autenticazione viaggia con ogni richiesta, in un token o in un cookie. L’autorizzazione si ricalcola. Un GET non deve cambiare dati. Se un GET «segna come letto» come effetto nascosto, va almeno detto, perché i client e le cache assumono che leggere sia innocuo.

REST non è l’unica API possibile. In un elaborato è una scelta buona perché si spiega con HTTP, che si è già studiato, e perché separa l’interfaccia dalla logica. Non va proposta per ogni pezzo interno senza motivo.


### Nel dettaglio

Un’API REST espone risorse, non procedure. La risorsa ha un indirizzo. Il ticket numero quarantadue sta in un percorso che lo nomina. Si legge con GET, si crea con POST sulla collezione, si sostituisce con PUT, si modifica con PATCH, si cancella con DELETE. Lo stato dell’applicazione sta sul server, nella risorsa. La richiesta contiene ciò che serve a capirla, e il server non dipende da ricordare la richiesta precedente, a parte l’autenticazione. È lo stesso principio della sessione: l’autenticazione viaggia con ogni richiesta, in un token o in un cookie.

I codici di stato sono il contratto. Duecentouno con l’indirizzo della risorsa creata. Quattrocento se il campo non va. Quattrocentouno se non si è entrati. Quattrocentotre se si è entrati e non si può. Quattrocentoquattro se il ticket non c’è o se non si vuole rivelare che c’è: a volte, per non far scoprire gli identificativi, si risponde quattrocentotre o quattrocentoquattro in modo uniforme. Quattrocentonove se la versione non coincide e qualcun altro ha scritto prima. Cinquecento se la colpa è del server. Un’API che risponde sempre duecento, con un messaggio di errore nel corpo, costringe ogni client a una convenzione privata.

Il corpo si rappresenta in JSON, con i nomi dei campi stabili. Si versiona l’API quando si rompe il contratto, e si tiene la versione vecchia per un tempo dichiarato. Si pagina un elenco: un parametro di pagina e uno di dimensione, e la risposta dice se c’è un seguito. Restituire mille ticket in una risposta sola sembra funzionare in prova e cade in esercizio.

L’autorizzazione sta sul server, per ogni metodo. Un GET di un ticket altrui fallisce anche se l’indirizzo è indovinato. Un DELETE fallisce per chi non ha il ruolo, anche se il client mostra il pulsante. Sul foglio si scrivono quattro operazioni del tema, con metodo, percorso, codice di successo e un codice di errore. È il contratto minimo, e basta.

### Esempio

POST `/ticket` con oggetto e descrizione crea il ticket e risponde 201. GET `/ticket?stato=aperto` restituisce la lista visibile a quel ruolo, non tutti i ticket del database. PATCH `/ticket/44` con lo stato «preso in carico» fallisce con 409 se un altro tecnico lo ha appena preso, oppure con 403 se l’utente è un dipendente. Tre chiamate, tre regole, tutte collegabili ai requisiti.

### In sede di prova

Definire risorsa e metodo. Elencare quattro operazioni della propria applicazione con metodo, percorso e un codice di successo o di errore. Dire chi autentica. Non disegnare venti endpoint. Quattro, coerenti, bastano.

### Errori da evitare

- Usare POST per ogni cosa, anche le letture.
- Mettere nel percorso il ruolo dell’utente sperando che questo faccia da autorizzazione. Il ruolo si ricava dall’identità, non da un pezzo dell’indirizzo scelto dal client.
- Rispondere 200 anche quando l’operazione è fallita, e nascondere l’errore nel testo.

### Approfondire

- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [JSON](https://it.wikipedia.org/wiki/JSON)

## Monolite e microservizi

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** monolite, microservizi, complessità
**Semaforo:** verde

### Inquadramento

Il monolite è un'applicazione che si rilascia insieme, con moduli dentro. I microservizi sono pezzi che si rilasciano separati e parlano in rete. Il monolite è la scelta sobria quando il gruppo è piccolo e le transazioni attraversano più dati. I microservizi si giustificano se un pezzo deve crescere o guastarsi da solo. Sul foglio si sceglie il monolite a due nodi e si scrive la condizione sotto la quale, un giorno, si stacchà un solo pezzo. Anticipare quella complessità è un errore di tema.

### Definizione

Un monolite è un’applicazione rilasciata come un’unità: la logica sta in un solo programma, che si aggiorna e si ferma insieme. I microservizi scompongono il sistema in servizi piccoli, ciascuno con una responsabilità, rilasciabili in modo indipendente e comunicanti via rete. La differenza non è la virtù. È dove si mettono i confini e che costo hanno.

### Il confronto onesto

Il monolite è semplice da capire, da provare e da mettere in esercizio quando il team è piccolo e il dominio è uno. Una modifica che tocca più funzioni si fa in un solo progetto, con una transazione del database. Il difetto arriva con la crescita: un cambiamento piccolo richiede il rilascio di tutto, un guasto in un modulo può fermare l’insieme, e scalare significa duplicare l’intera applicazione anche se a crescere è solo la ricerca.

I microservizi permettono di rilasciare e scalare un pezzo solo, e di isolare un guasto se si è progettato il comportamento di quando l’altro pezzo non risponde. Il costo è alto. Ogni chiamata è una chiamata di rete, può fallire, può ritardare. Una operazione che nel monolite era una transazione unica diventa un accordo fra servizi, più difficile da rendere atomico. Servono monitoraggio, versioni delle API, e un team capace di esercire molti processi. Adottarli «per essere moderni», in un gruppo piccolo, spesso aumenta i guasti.

Una via di mezzo che in un tema suona matura è il monolite ben suddiviso in moduli interni, con confini chiari, rilasciato come un’unità finché un pezzo non ha un motivo vero per staccarsi: un ritmo di cambiamento diverso, un carico diverso, un vincolo di sicurezza diverso. Staccare prima i confini nel codice e poi, se serve, nei processi.

I dati seguono la scelta. Nel monolite un database con più schemi è naturale. Nei microservizi, far leggere a tutti lo stesso database cancella l’indipendenza: un cambiamento di tabella rompe tutti. Ogni servizio dovrebbe possedere i propri dati e offrire agli altri un’API. È il punto che tradisce i microservizi disegnati solo nel riquadro dell’architettura.


### Nel dettaglio

Il monolite è un’applicazione sola, un processo, un rilascio, un database. Si sviluppa più in fretta all’inizio, si prova per intero, una transazione copre più operazioni, e un solo gruppo lo capisce. Diventa un problema quando è così grande che ogni modifica rischia tutto, e quando due gruppi si intralciano sullo stesso codice. Per un sistema di ente, con un gruppo piccolo e un perimetro chiaro, il monolite è la scelta da difendere. Lo si tiene ordinato per moduli interni, così un giorno si potrà staccare un pezzo se servirà.

I microservizi dividono il sistema in processi distinti, ciascuno con un suo rilascio e, spesso, i suoi dati. Si scalano e si rilasciano separatamente. Si pagano in complessità. Una richiesta dell’utente attraversa più servizi, e un guasto in uno diventa un guasto distribuito. Una transazione che prima era una sola diventa un accordo fra servizi, con compensazioni se il secondo fallisce dopo che il primo ha confermato. I dati duplicati fra servizi vanno tenuti coerenti. Serve un modo di osservare una richiesta che passa da quattro log diversi. Senza questa attrezzatura, i microservizi sono un monolite lento e opaco, sparso su più processi.

La regola pratica è non cominciare dai microservizi. Si comincia con un monolite modulare. Si stacca un servizio quando c’è un motivo: un carico diverso, un gruppo diverso, un rilascio che deve andare a un altro ritmo, un confine di dati netto. Il motivo si scrive. «È l’architettura moderna» non è un motivo.

Sul foglio, per il tema: un’applicazione sola, moduli interni per l’identità, i ticket, le notifiche, un database. Poi una frase su che cosa convincerebbe a staccare le notifiche, per esempio un canale che rallenta e non deve rallentare la chiusura del ticket. Mostrare di conoscere il prezzo dei microservizi vale più che disegnarne sette.

### Esempio

Il portale dei ticket, per un ente e un team contenuto, è un monolite a moduli: autenticazione delegata all’identità dell’ente, modulo ticket, modulo report. Si rilasciano insieme. Se in futuro la ricerca testuale diventa pesante e la si vuole aggiornare ogni settimana, quel solo pezzo può diventare un servizio, con i documenti di ricerca alimentati dagli eventi del monolite. La motivazione è il ritmo diverso, non un principio.

### In sede di prova

Definire entrambi. Dare un vantaggio e un costo a ciascuno. Scegliere, in un progetto, il monolite modulare salvo un motivo esplicito. Se si scelgono i microservizi, dire come si gestisce una operazione che coinvolge due servizi e chi possiede i dati.

### Errori da evitare

- «I microservizi sono più scalabili» senza dire quale parte scala e quanto costa la rete.
- Un disegno a microservizi che condividono un unico database con permessi completi.
- Trattare il monolite come un fallimento. Molti sistemi giusti sono monoliti.

### Approfondire

- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)

## Verifica e test del software

**Prove:** seconda prova gruppo 2, prima prova, orale
**Tag:** test unitario, integrazione, sistema, regressione
**Semaforo:** verde

### Inquadramento

Verificare è controllare che il sistema faccia ciò che il requisito dice, compresi i rifiuti. Si prova il caso normale, il caso al confine e il caso vietato. Una prova automatica tiene il vincolo vivo quando il codice cambia. La prova con la persona guarda l'interfaccia. Sul foglio si scrivono quattro casi legati a requisiti numerati, di cui almeno uno è un rifiuto. Una dimostrazione in cui tutto va bene non verifica il vincolo. La prova di sicurezza, il ruolo sbagliato, è una di queste, non un capitolo a parte dimenticato.

### Definizione

La verifica controlla che il software sia stato costruito secondo i requisiti e che non presenti difetti noti. Il test è l’esecuzione controllata su casi scelti, confrontando il risultato con quello atteso. Non è l’unico strumento di verifica: la revisione del codice e il controllo dei requisiti lo affiancano. Il test mostra la presenza di difetti, non dimostra da solo l’assenza di tutti i difetti.

### I livelli

Il test unitario verifica un componente piccolo, isolato dalle parti che lo circondano, sostituite da doppi se necessario. È rapido e dice dove sta il difetto. Esempio: dato uno stato «chiuso», l’operazione «prendi in carico» rifiuta, senza bisogno di un database.

Il test di integrazione verifica che due componenti veri collaborino. L’applicazione e il database di prova: la prenotazione scrive davvero e il vincolo di sovrapposizione scatta. Molti difetti nascono al confine, non dentro un singolo pezzo.

Il test di sistema verifica il sistema intero contro i requisiti, dall’esterno, come farebbe un utente o un altro sistema. Include i casi di errore. Il test di accettazione è quello in cui il committente riconosce che il sistema fa ciò che aveva chiesto. Può coincidere con una prova formale di collaudo.

Il test di regressione ripete prove già superate dopo una modifica, per scoprire che cosa si è rotto. Senza un insieme automatico di regressione, ogni modifica è un rischio non misurato. Non serve automatizzare tutto. Si automatizzano i casi che proteggono le regole, e si fanno a mano i percorsi visivi più soggetti a giudizio.

Si scelgono i casi, non si prova «un po’». Per ogni requisito: il percorso normale, un confine (campo vuoto, data fine precedente alla data inizio, elenco vuoto), un caso di permesso negato. Un requisito senza almeno un caso di prova non è verificabile nei fatti.

I difetti trovati si registrano con come riprodurli. Un difetto che non si riproduce non si corregge con sicurezza. Dopo la correzione si ripete quel caso e la regressione intorno.

Nel progetto della prima prova non si scrivono i test per esteso. Si scrive una tabella breve: requisito, caso normale, caso di errore. È la prova che si è pensato alla verifica e non solo alla costruzione.


### Nel dettaglio

Si prova ciò che si è promesso. Ogni requisito numerato ha almeno un caso: ingresso, azione, esito atteso. Il caso di successo non basta. Per il requisito «solo il responsabile chiude» si provano il responsabile che chiude, il tecnico che non può, il responsabile di un altro ufficio che non può, e il ticket già chiuso. I casi negativi sono la metà del valore. Senza di essi la prova conferma che il percorso felice esiste, che è la parte che l’autore comunque prova a mano.

I livelli si distinguono per ciò che includono. La prova unitaria esercita un pezzo piccolo, una regola, con i collaboratori finti: veloce, si esegue a ogni modifica. La prova di integrazione esercita il pezzo insieme al database vero, o a una sua copia, e vede i vincoli, le query, le transazioni. La prova di sistema esercita il percorso dall’interfaccia, o dall’API, fino al dato. La prova di accettazione la fa l’ufficio, sul requisito, in un ambiente che assomiglia all’esercizio. Saltare all’ultima senza le prime rende ogni fallimento difficile da localizzare. Fare solo le prime non dice se il sistema funziona.

Si aggiungono le prove che non sono di funzione. Un utente senza permesso non legge, e questo è una prova di sicurezza, da tenere insieme alle altre. Un elenco con molti dati risponde ancora in tempo. Una copia si ripristina. Queste prove, fatte una volta e mai più, decadono. Si automatizzano quelle che si possono rieseguire, e si lasciano manuali quelle di accettazione e di ripristino.

Un difetto si registra con che cosa si è fatto, che cosa si è ottenuto, che cosa si aspettava. «Non funziona» non si corregge. Dopo la correzione si riesegue quel caso e i vicini. Sul foglio, per il tema, si scrivono quattro casi in tabella: requisito, ruolo, azione, esito. Una tabella corta e concreta batte un discorso sui tipi di test.

### Esempio

Requisito: non esistono due prenotazioni confermate sovrapposte della stessa sala. Unitario: la funzione che giudica due intervalli riconosce la sovrapposizione, il confine in cui una finisce quando l’altra inizia, e l’intervallo contenuto. Integrazione: due transazioni quasi insieme, una sola viene confermata. Sistema: l’interfaccia mostra un messaggio chiaro e non lascia una prenotazione mezza salvata. Regressione: il caso resta nella suite quando, mesi dopo, si cambia il calendario.

### In sede di prova

Distinguere i livelli con un esempio ciascuno, preso dallo stesso sistema. Dire che i test non dimostrano l’assenza di difetti. In un progetto, allegare quattro casi legati a quattro requisiti, includendo un caso negativo di autorizzazione.

### Errori da evitare

- Chiamare test il fatto che lo sviluppatore abbia cliccato una volta.
- Provare solo il percorso felice.
- Correggere un difetto senza aggiungere il caso che lo avrebbe intercettato.

### Approfondire

- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## HTML, XML e JSON

**Prove:** seconda prova gruppo 2
**Tag:** markup, HTML, XML, JSON
**Semaforo:** giallo

### Inquadramento

HTML descrive una pagina. XML descrive un documento con regole rigide, ed è ancora nel mondo degli atti e degli scambi. JSON descrive dati leggeri fra un browser e un server, o fra servizi. Nessuno dei tre è un database. Sul foglio si dice quale dei tre trasporta che cosa nel tema: la pagina è HTML, la risposta dell'applicazione è JSON, un atto ricevuto da fuori può essere XML. Trattare JSON come se fosse una prova di autorizzazione è un errore: è un formato, il controllo sta nel server che lo produce.

### Definizione

Sono tre modi di scrivere informazioni in testo strutturato, con scopi diversi. HTML descrive la struttura di una pagina web. XML descrive dati gerarchici in un testo estensibile e severo. JSON descrive dati in un testo leggero, nato con JavaScript e diventato il formato più comune delle API.

### Le differenze da tenere dritte

HTML ha un vocabolario di elementi deciso dal linguaggio: titoli, paragrafi, tabelle, moduli, collegamenti. Il browser interpreta quegli elementi e costruisce la pagina. L’aspetto si governa con i fogli di stile, non infarcendo il testo di indicazioni grafiche. Un modulo HTML è presentazione: i controlli veri stanno sul server. HTML non è un linguaggio di programmazione.

XML lascia definire i propri elementi. Si può imporre uno schema, così un documento è valido solo se rispetta la struttura. È verboso, perché ogni dato è in un elemento con apertura e chiusura, ed è ancora molto presente nello scambio con le pubbliche amministrazioni e nei documenti firmati. Essere «in XML» non significa essere interoperabili: lo si è se si condivide lo stesso schema.

JSON rappresenta oggetti, liste, numeri, testi, valori booleani e null. È compatto e si legge bene. Non ha, di per sé, uno schema obbligatorio: lo schema si aggiunge se serve. È il formato da proporre per un’API moderna. Non è un linguaggio di interrogazione e non sostituisce un database.

Si scelgono così. Pagina per una persona: HTML. Scambio con un sistema che impone uno schema XML, o documento che quello schema richiede: XML. Scambio fra applicazione e interfaccia, o fra servizi nuovi: JSON. Convertire dall’uno all’altro è possibile e si fa al confine, non si mescolano nella stessa interfaccia senza motivo.

La sicurezza tocca tutti e tre. Del testo HTML costruito concatenando input si è detto a proposito dell’XSS. XML ha i suoi attacchi se un analizzatore male configurato esegue contenuti esterni. JSON è dati: diventa pericoloso quando un programma lo valuta come codice invece di analizzarlo come dati. In tutti i casi il principio è lo stesso: il testo che arriva da fuori è un dato, con una forma attesa, non un programma.


### Nel dettaglio

HTML descrive una pagina: struttura, titoli, paragrafi, moduli, collegamenti. Il browser lo interpreta e lo mostra, e perdona molti errori, il che è comodo e pericoloso: una pagina malformata sembra a posto e viene letta male da un lettore di schermo. I moduli HTML mandano i campi al server. Non decidono nulla. Un campo obbligatorio segnato solo nel HTML si omette facilmente inviando la richiesta a mano. La stessa regola sta sul server.

XML descrive un documento con regole severe. Ha una grammatica, e un documento o è valido o non lo è. Si usa dove serve uno scambio formale, con uno schema, per esempio in alcuni adempimenti e in documenti strutturati. È verboso di proposito: ogni dato ha il suo elemento. Non lo si sceglie per un’API nuova se non c’è un obbligo. Lo si sa leggere, perché lo si incontra.

JSON è la forma più comune nelle API. Oggetti, elenchi, stringhe, numeri, valori booleani, nullo. Poco verboso, facile da generare e da leggere per un programma. Non ha uno schema obbligatorio: due parti possono divergere sul significato di un campo, e conviene scrivere il contratto a parte. Non ha commenti. Non distingue le date: una data è una stringa, e il formato si conviene, per esempio quello ISO, altrimenti un giorno e un mese si scambiano.

La scelta nel tema è pratica. La pagina è HTML. Lo scambio fra interfaccia moderna e server, o fra due sistemi, è JSON. XML se un sistema esistente lo impone. In tutti e tre i casi il server valida. Un JSON ben formato può contenere uno stato inesistente, un identificativo di un ufficio altrui, un numero enorme. La forma giusta non è la validità di business. Sul foglio si mostra un oggetto JSON del proprio ticket, con quattro campi, e si dice quali controlli il server applica prima di scriverlo.

### Esempio

Il tecnico vede una pagina HTML con l’elenco dei ticket. Il browser ha chiesto i dati in JSON all’API e la pagina li ha inseriti come testo. L’ente che riceve una fattura elettronica la riceve in XML secondo uno schema nazionale, e quel formato non va «semplificato in JSON» se la norma chiede XML. Due formati, due confini, nessuna confusione.

### In sede di prova

Una frase di scopo per ciascun formato. Un criterio di scelta. Se si cita la fattura o un documento della PA, XML è spesso la risposta giusta; se si cita l’API dell’applicazione, JSON. Non dire che XML è superato in generale.

### Errori da evitare

- Chiamare HTML un linguaggio di programmazione.
- Dire che JSON ha sempre uno schema perché «si vede».
- Sostituire un formato imposto da uno scambio istituzionale perché si preferisce l’altro.

### Approfondire

- [HTML](https://it.wikipedia.org/wiki/HTML)
- [JSON](https://it.wikipedia.org/wiki/JSON)
- [XML](https://it.wikipedia.org/wiki/XML)

## Versionamento del codice

**Prove:** seconda prova gruppo 2, orale
**Tag:** Git, commit, ramo, revisione
**Semaforo:** giallo

### Inquadramento

Il versionamento conserva la storia, permette di tornare indietro e di lavorare in parallelo. Il commit è un passo con un nome. Il ramo isola una modifica finché non è pronta. La revisione è un altro paio di occhi. I segreti non stanno nel repository. Sul foglio si racconta una modifica del vincolo della traccia, nata su un ramo, provata, rivista, entrata nella linea principale. Si dice che il rilascio è quel commit, non una cartella sul desktop di qualcuno.

### Definizione

Il versionamento conserva la storia delle modifiche di un progetto: che cosa è cambiato, chi l’ha cambiato, quando, e perché. Permette di tornare a una versione nota, di lavorare in parallelo e di capire quale versione è in esercizio. Git è lo strumento di cui si parla oggi. L’idea è più vecchia dello strumento.

### Ciò che serve saper dire

Un repository è il deposito della storia. Un commit è un’istantanea con un messaggio. Il messaggio dice perché, non elenca i file. I commit si succedono. Un ramo è una linea di sviluppo: si prova una modifica senza toccare la linea principale, poi la si integra. L’integrazione è il momento in cui si risolvono i conflitti, quando due persone hanno cambiato lo stesso punto.

La linea principale resta in uno stato funzionante. Le modifiche entrano dopo una revisione: un’altra persona legge il cambiamento. La revisione prende difetti, fraintendimenti e problemi di sicurezza che l’autore non vede più. Non è una mancanza di fiducia. È un controllo di qualità, come il test.

Ogni rilascio corrisponde a una versione identificabile. Se domani il servizio ha un difetto, si sa quale commit è in esercizio e si può tornare al precedente. Senza questa corrispondenza, «in produzione funziona diversamente» non si può nemmeno discutere.

Il repository non contiene segreti. Password, chiavi e dati veri non si affidano alla storia: restano nella storia anche dopo che si crede di averli cancellati. I segreti stanno in un deposito di configurazione, diverso per l’ambiente di prova e per la produzione.

In un ente, il versionamento è anche continuità. Se una persona lascia l’ufficio, il codice non sta nel suo portatile. Sta nel repository comune, con la storia.


### Nel dettaglio

Il versionamento ricorda ogni versione del codice, chi l’ha cambiata, quando e perché, e permette di tornare indietro. Git è lo strumento da nominare. Il deposito è la storia. Il commit è un punto della storia, piccolo abbastanza da capire, con un messaggio che dice il perché. Il ramo è una linea di lavoro separata: la correzione di un guasto non si mescola con una funzione a metà. Si riunisce al ramo principale quando è pronta e provata.

Due persone modificano lo stesso punto. Lo strumento segnala il conflitto e non sceglie da solo. Qualcuno legge le due versioni e tiene ciò che ha senso. Questo è un motivo per fare commit piccoli e frequenti: il conflitto su dieci righe si capisce, il conflitto su mille no. Il ramo principale resta in uno stato che si può rilasciare. Non si mettono sul ramo principale le prove spezzate «tanto domani si finisce».

Ciò che non sta nel deposito conta quanto ciò che ci sta. Non ci stanno le password, le chiavi, i dati veri degli utenti, i file grandi che sono dati e non codice. Una chiave finita nel deposito resta nella storia anche dopo che la si cancella nell’ultimo commit: va considerata compromessa e sostituita. I dati di configurazione che cambiano fra prova e esercizio stanno fuori, o stanno in un modello senza i segreti.

Il deposito è anche la base della revisione. Un’altra persona legge la modifica prima che entri nel ramo principale. In un ente, dove il codice vive più a lungo dell’incarico di chi lo scrive, questa lettura è la continuità. Sul foglio: deposito unico, rami per le modifiche, ramo principale sempre rilasciabile, segreti fuori, una revisione prima di unire. Non serve raccontare i comandi.

### Esempio

La modifica che impedisce la doppia prenotazione nasce su un ramo, con un test. Un collega la rivede, chiede di coprire il caso del confine fra i due orari, e poi entra nella linea principale. Il rilascio del giovedì è quel commit. Il martedì dopo, un difetto nel report non costringe a cercare «l’ultima cartella giusta» sul desktop di qualcuno.

### In sede di prova

Definire il versionamento con lo scopo: storia, ritorno indietro, lavoro parallelo. Citare commit, ramo e revisione. Dire che i segreti non stanno nel repository. Non serve elencare i comandi, a meno di usarli davvero nella prova tecnica.

### Errori da evitare

- Conservare il codice in una cartella «definitivo», «definitivo2», «definitivo-vero».
- Committare le password insieme alla configurazione.
- Integrare nella linea principale una modifica che non è stata provata.

### Approfondire

- [Pro Git, il libro](https://git-scm.com/book/it/v2)

## Accessibilità e usabilità dell’interfaccia

**Prove:** prima prova, seconda prova gruppo 2
**Tag:** usabilità, accessibilità, WCAG, interfaccia
**Semaforo:** giallo

### Inquadramento

Usabile vuol dire che la persona capisce che cosa succede e conclude il compito. Accessibile vuol dire che ci riesce anche senza il solo mouse, senza il solo colore, con una tecnologia assistiva. In un ente pubblico l'accessibilità è un requisito, non un abbellimento. Sul foglio si prendono due percorsi e si dice come lo stato è scritto in parole, come l'errore sta sul campo, come si completa da tastiera. Un contrasto basso e un pulsante senza nome sono difetti da scrivere tra i non funzionali.

### Definizione

L’usabilità è il grado in cui una persona riesce a raggiungere il proprio scopo in modo efficace, efficiente e soddisfacente. L’accessibilità è il grado in cui il sistema è utilizzabile anche da persone con disabilità, o in condizioni limitate: senza mouse, con un lettore di schermo, con poco contrasto, con una connessione lenta. In un servizio di un ente pubblico l’accessibilità non è un ornamento. È un vincolo di progetto.

### Che cosa si scrive in un elaborato, in concreto

Si progetta il percorso, non la decorazione. Per il compito più frequente si contano i passi. Aprire un ticket: una schermata con i campi obbligatori indicati, un pulsante di conferma, un messaggio con il numero assegnato. L’errore di validazione compare accanto al campo, non solo in una finestra che sparisce.

Si usa il linguaggio dell’ufficio, non quello del database. «Prendi in carico», non «UPDATE stato = 2». I codici interni possono esserci, affiancati da una parola.

L’interfaccia non è l’unico posto dei controlli, ma è il primo posto degli aiuti. Un campo data offre un calendario e rifiuta una data impossibile prima di mandare la richiesta. Il server rifiuta di nuovo, perché l’interfaccia si può aggirare.

L’accessibilità, al livello descrivibile senza essere specialisti, comprende: tutto il percorso percorribile da tastiera; etichette vere sui campi, non solo un testo grigio che sparisce; contrasto sufficiente; messaggi non affidati al solo colore, così anche chi non distingue il rosso capisce l’errore; immagini importanti con un testo alternativo; tabelle di dati che sono tabelle, non disegni. Le linee guida di riferimento hanno un nome, WCAG, e la pubblica amministrazione ha obblighi propri in materia di accessibilità dei siti. In un tema si citano le WCAG come criterio e si descrivono due misure, invece di promettere «piena conformità» senza dire come.

Si prova l’interfaccia con una persona che non l’ha disegnata. In un elaborato, la prova è un requisito: prima del rilascio, un utente dell’ufficio compie i tre compiti principali senza assistenza. Ciò che non riesce a fare si corregge.

Il responsive, l’adattarsi allo schermo, conta se il servizio si usa anche da un dispositivo piccolo. Si dice per chi. Un tecnico in sala server con un telefono è un caso diverso da un portale solo interno su postazioni fisse.


### Nel dettaglio

Usabile significa che una persona dell’ufficio capisce che cosa fare e sbaglia poco. Poche schermate, le azioni principali evidenti, i messaggi di errore che dicono che cosa correggere, l’ordine dei campi uguale all’ordine del lavoro, le azioni irreversibili con una conferma che dice che cosa accadrà. Un’interfaccia usabile si prova con una persona dell’ufficio, non con chi l’ha disegnata. In un tema si descrivono due percorsi, il più frequente e quello di errore, schermata per schermata.

Accessibile significa che la stessa funzione si usa anche con un lettore di schermo, senza mouse, con un ingrandimento, con poco contrasto personalizzato. È un obbligo per i servizi, non un ornamento. In concreto: ogni campo ha un’etichetta vera, non solo un segnaposto che sparisce. Il focus da tastiera è visibile e segue un ordine sensato. Il colore non è l’unico modo per dire uno stato: un ticket critico non è solo rosso, ha anche una parola. Le immagini informative hanno un testo alternativo. Gli errori sono annunciati in modo che un lettore li dica. Il contrasto fra testo e fondo è sufficiente. Un componente che si apre e intrappola il focus senza via di uscita blocca chi non usa il mouse.

Le due qualità si sostengono. Un modulo chiaro è più usabile e più accessibile insieme. Si distinguono quando la fretta spinge a una soluzione solo visiva: trascinare, colori, tempi stretti. Sul foglio si scrivono quattro scelte concrete del proprio tema, non la parola accessibilità. Etichette sui campi del ticket, stato scritto oltre che colorato, chiusura confermata con una frase, percorso completo da tastiera per aprire e prendere in carico. Poi si cita che il servizio pubblico si verifica anche con gli strumenti previsti, e che un difetto di accessibilità è un difetto, non una preferenza.

### Esempio

La schermata di ricerca ha una casella, i filtri per stato e data, e un elenco. Il focus da tastiera è visibile. L’elenco non è fatto di colori soli: «aperto» è anche una parola. Il pulsante di conferma resta visibile senza dover conoscere un gesto. Un lettore di schermo legge l’etichetta «oggetto del ticket», perché l’etichetta esiste nel HTML e non è solo un segnaposto.

### In sede di prova

Distinguere usabilità e accessibilità. Descrivere il percorso principale in quattro passi. Aggiungere due misure di accessibilità concrete. Dire che l’interfaccia aiuta e il server decide. È quanto serve perché la «progettazione dell’interfaccia» chiesta dal bando non sia uno schizzo muto.

### Errori da evitare

- Consegnare solo il disegno grafico, senza i percorsi e gli errori.
- Affidare l’errore al colore rosso.
- Pensare che l’accessibilità sia un tema successivo, da aggiungere a un’interfaccia già chiusa. Molte scelte, come le etichette, si fanno mentre si scrive il modulo.

### Approfondire

- [Accessibilità dei servizi](https://www.agid.gov.it/it/design-servizi/accessibilita)

## Modello, vista e controllore

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** MVC, interfaccia, regole
**Semaforo:** verde

### Inquadramento

Il modello tiene dati e regole. La vista mostra. Il controllore riceve l'azione, chiama il modello e sceglie la risposta. La regola della traccia sta nel modello, sul server. Nascondere un pulsante è cortesia della vista. Sul foglio si prende un vincolo, i cinque giorni o la sala, e lo si mette nel modello, poi si dice che la vista lo rispecchia e che un'azione arrivata lo stesso riceve un rifiuto. I tre livelli di rete sono un'altra divisione: possono coincidere, browser e server, e vale la pena dirlo per non mescolare i vocabolari.

### Definizione

Il modello-vista-controllore è un modo di dividere un'applicazione interattiva in tre responsabilità. Il modello custodisce i dati e le regole. La vista è ciò che la persona vede e usa. Il controllore riceve l'azione della persona, chiama il modello e sceglie la vista da mostrare. Serve a impedire che la regola finisca nel posto sbagliato, cioè solo nella pagina.

### Dove sta ciascuna cosa

Il modello sa che una richiesta ha tre stati possibili, che riaprirla dopo cinque giorni è vietato, che due prese in carico della stessa richiesta aperta non possono riuscire entrambe. Questa conoscenza sta nel server, vicino ai dati. Se sta solo nel JavaScript della pagina, chiunque può inviare la richiesta saltando la pagina.

La vista mostra l'elenco, il modulo, le parole «aperta» e «chiusa», il messaggio di errore sul campo vuoto. Non decide. Può nascondere il pulsante «prendi in carico» al dipendente, per non offrirgli un'azione inutile, ma il nascondere non è il controllo. Il controllo è la risposta del server, 403 o 409, quando l'azione arriva lo stesso.

Il controllore è sottile. Traduce la richiesta HTTP in una chiamata al modello e traduce il risultato in una vista o in un codice di stato. Se il controllore contiene lui le regole, e il modello è solo un mucchio di tabelle senza vincoli, la divisione è di nome. In un elaborato si può non usare la sigla e dire la stessa cosa con tre parole: interfaccia, applicazione, dati. Se il quesito nomina il modello-vista-controllore, si usano i tre nomi e si dice dove sta la regola dei cinque giorni: nel modello.

La divisione aiuta anche le prove. La regola si collauda chiamando il modello, senza dipingere la pagina. La pagina si collauda guardando che il dipendente non veda la coda degli altri. Sono due prove, perché sono due responsabilità.

```disegno
titolo: La regola non sta nella pagina
riga: Vista | moduli, elenchi, messaggi
freccia: l'azione dell'utente
riga: Controllore | riceve, chiama, sceglie la risposta
freccia: non è lui il padrone della regola
riga: Modello | stati, cinque giorni, presa in carico unica
nota: Nascondere un pulsante è cortesia. Rifiutare l'azione sul server è controllo.
```


### Nel dettaglio

Il modello è il dato e le regole che lo proteggono. Il ticket, i suoi stati leciti, la sua versione. Non sa come sarà disegnata la pagina. La vista è la rappresentazione: la pagina HTML, oppure il JSON di una API. Non decide se l’utente può chiudere. Il controllore riceve la richiesta, chiede al modello di fare l’operazione, e sceglie la vista del risultato, compresa la vista di errore. Tenne insieme i tre pezzi senza mescolare i motivi per cui cambiano.

Il beneficio si vede quando si aggiunge un’interfaccia. La stessa operazione prendi in carico serve la pagina e serve un’API per un’integrazione. Due controllori sottili, o uno che sa rispondere in due forme, e un solo modello. Se la regola dello stato stesse nella pagina, l’API la riscriverebbe, e le due copie divergerebbero al primo cambiamento. Se la query SQL stesse nel controllore insieme al HTML, ogni modifica di schema toccherebbe la presentazione.

Il modello non diventa un deposito di tutto. Le regole di struttura stanno nel database, e il modello le rispetta e aggiunge le regole di lavoro che il database non esprime bene. Il controllore non diventa la discarica. Se il controllore contiene pagine di condizioni, le regole sono finite nel posto sbagliato: si spostano verso il modello, dove si provano senza costruire una richiesta HTTP.

In un tema la corrispondenza è diretta. Modello: tabelle e regole di stato. Controllore: le operazioni, ciascuna con autorizzazione e validazione. Vista: le schermate e, se c’è, il JSON. Si dice che la vista non è un punto di fiducia. È la frase che collega questo modello all’architettura a tre livelli: la vista sta nel browser o è prodotta per lui, il controllore e il modello stanno sul server.

### Esempio

Il dipendente invia una richiesta senza oggetto. La vista mostra l'errore sul campo, subito. Il controllore, se la richiesta arriva lo stesso, non chiama un inserimento: risponde 400. Il modello, se qualcuno lo chiama saltando anche il controllore, ha comunque un vincolo di obbligatorietà, o lo ha il database sotto di lui. Tre strati dicono la stessa cosa. Il primo è per la persona. Gli altri due sono per l'integrità.

### In sede di prova

Definire i tre ruoli con una frase. Mettere un requisito della traccia nel modello e dire che la vista lo rispecchia ma non lo garantisce. Se si descrive un'architettura a tre livelli di rete, non confonderla con questi tre ruoli: i livelli di rete dicono su quale macchina sta il pezzo, il modello-vista-controllore dice come è diviso il programma. Possono coincidere, browser come vista e server come modello e controllore, e vale la pena dirlo.

### Errori da evitare

- La regola di business solo nel browser.
- Un controllore di mille righe che è, di fatto, tutto il programma.
- Usare la sigla senza dire dove finisce un requisito vero della traccia.

### Approfondire

- [Model-view-controller](https://it.wikipedia.org/wiki/Model-view-controller)
- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)
- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

## Integrazione continua e rilascio

**Prove:** seconda prova gruppo 2
**Tag:** integrazione continua, pipeline, rilascio
**Semaforo:** giallo

### Inquadramento

Integrare di continuo vuol dire unire spesso e provare a ogni unione, in automatico. Tenere il rilascio pronto vuol dire che il pacchetto provato è quello che può andare in esercizio. Metterlo in esercizio a ogni prova superata, senza una persona che approva, in un ente è spesso troppo. Sul foglio si scrivono i passi: modifica, prove, pacchetto identificato, approvazione, esercizio, ritorno al pacchetto precedente. Il passaggio sui dati si fa in modo da poter tornare indietro. Una pipeline che si limita a copiare file non è integrazione continua.

### Definizione

L'integrazione continua è l'abitudine di unire spesso le modifiche in una linea comune, costruendo e provando il risultato a ogni unione, in modo automatico. Il rilascio continuo tiene quel risultato sempre in uno stato in cui si potrebbe mettere in esercizio. Il deployment continuo, un passo più in là, mette in esercizio ogni modifica che ha superato le prove, senza una decisione umana intermedia. In un ente i primi due sono spesso desiderabili. Il terzo va conciliato con una finestra e con un'approvazione, e non si promette per il gusto della sigla.

### La catena

Una modifica entra nel versionamento. Un automatismo costruisce l'applicazione, esegue le prove automatiche, e produce un pacchetto identificato, lo stesso che eventualmente andrà in esercizio. Non si ricompila «a mano, sul server, con un ritocco». Se le prove falliscono, la modifica non prosegue. Questo è il guadagno: il difetto si vede il giorno in cui nasce, non il giorno del rilascio trimestrale.

Poi viene un ambiente di prova, simile all'esercizio per quanto serve, e una persona autorizza il passaggio. L'autorizzazione non è sfiducia verso l'automatismo. È la separazione, utile in un ente, fra chi scrive e chi accetta il cambiamento in produzione. Si può automatizzare tutto il gesto tecnico e lasciare umana la decisione.

Il rilascio piccolo riduce il rischio rispetto al rilascio enorme. Si torna indietro portando di nuovo il pacchetto precedente, che esiste ancora ed è identificato. Per questo il database si evolve con passi compatibili: prima si aggiunge ciò che la versione nuova usa, poi si toglie ciò che la versione vecchia usava, non tutto nello stesso istante se si vuole poter tornare indietro.

L'integrazione continua non è un sostituto delle prove di sicurezza, del collaudo con l'utente, né del cambiamento gestito del servizio. È il modo in cui il codice arriva preparato a quei passi. Senza prove automatiche, la catena è solo una copia di file più veloce.

```disegno
titolo: Dal cambiamento all'esercizio
passo: 1. Modifica nel versionamento
passo: 2. Costruzione e prove automatiche, altrimenti ci si ferma
passo: 3. Pacchetto identificato, lo stesso che potrà andare in esercizio
passo: 4. Prova in un ambiente simile, poi approvazione
passo: 5. Esercizio, con la possibilità di rimettere il pacchetto precedente
nota: In un ente il passo 4 resta di una persona. Automatizzare non significa sparire.
```


### Nel dettaglio

L’integrazione continua significa che le modifiche si uniscono al ramo principale spesso, e ogni unione fa partire una costruzione automatica e le prove automatiche. Si scopre il giorno stesso se la modifica rompe qualcosa, non il mese dopo, quando tutti hanno dimenticato. La condizione è che le prove esistano e che il ramo principale sia uno. Un’integrazione continua senza prove è un’integrazione di guasti continua. Una costruzione che resta rossa per giorni, e che tutti ignorano, non è un sistema di integrazione: è un semaforo spento.

La consegna continua prepara ogni versione buona in modo che si possa rilasciare. Il rilascio continuo la mette anche in esercizio da solo. In un ente il passo automatico fino all’esercizio va valutato: a volte si vuole una persona che preme, in una finestra, con la possibilità di tornare indietro. Si può avere l’integrazione continua e un rilascio deciso. È una posizione del tutto rispettabile, e si scrive.

Il rilascio ha un piano di ritorno. Si sa qual è la versione precedente, si sa come rimetterla, e si sa se il database è compatibile. Una modifica che cambia lo schema in modo irreversibile, cancellando una colonna, impedisce il ritorno. Si fanno modifiche di schema compatibili: si aggiunge, si copiano i dati, si rilascia il codice che usa il nuovo, e solo dopo, in un secondo momento, si toglie il vecchio. Il rilascio e la migrazione dei dati sono due passi, e si raccontano entrambi.

Gli ambienti sono almeno due, meglio tre. Sviluppo, prova, esercizio. La prova assomiglia all’esercizio per versioni e configurazione, e non contiene dati veri se non in modo controllato. Ciò che si rilascia è ciò che è stato provato, la stessa immagine, non una ricompilata sul server con un piccolo ritocco. Il ritocco sul server è una versione che non esiste nel deposito. Sul foglio: ogni unione costruisce e prova, l’esercizio si aggiorna da una versione provata, lo schema si cambia in modo reversibile, e si può tornare indietro.

### Esempio

La regola dei cinque giorni ha una prova automatica: una richiesta chiusa da sei giorni non si riapre. La modifica che rompe quella prova non arriva all'ambiente di collaudo. Il giovedì, in finestra, si rilascia il pacchetto che ha superato le prove, non una cartella aggiornata a mano. Se il venerdì il comportamento è sbagliato, si rimette il pacchetto del giovedì prima. I dati restano, perché il passo sui dati era compatibile.

### In sede di prova

Distinguere integrare, tenere pronto il rilascio, e rilasciare da soli ogni volta. Descrivere la catena in quattro o cinque passi. Dire che il pacchetto di prova e quello di esercizio sono lo stesso. Citare l'approvazione umana se il contesto è un ente. Non promettere il deployment continuo su un sistema che ha finestre di servizio e un responsabile del cambiamento.

### Errori da evitare

- Compilare sul server di produzione.
- Una pipeline senza prove, che si limita a copiare.
- Un passaggio sui dati irreversibile nello stesso minuto del rilascio, se si vuole poter tornare indietro.

### Approfondire

- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)
- [Git, il libro in italiano](https://git-scm.com/book/it/v2)
- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## Software libero, licenze e riuso nella pubblica amministrazione

**Prove:** seconda prova gruppo 2, orale
**Tag:** software libero, CAD, riuso, lock-in
**Semaforo:** giallo

### Inquadramento

Libero vuol dire che si può usare, studiare, modificare e condividere. Non vuol dire gratuito, e non vuol dire senza obblighi. Il copyleft tiene le libertà anche sull'opera derivata. Le licenze permissive permettono l'inserimento in un prodotto chiuso, con l'attribuzione richiesta. La pubblica amministrazione, prima di acquistare, confronta il riuso, il libero e il proprietario, con il costo complessivo e il lock-in. Sul foglio si motiva una scelta con queste voci e si nomina chi applicherà gli aggiornamenti. Un componente libero senza un responsabile degli aggiornamenti è un sistema che resta vulnerabile.

### Definizione

Il software libero si può usare, studiare, modificare e condividere, anche in forma modificata. Non significa «senza costo»: significa che quelle quattro libertà sono nella licenza. Il software proprietario si usa nei limiti del contratto, e di regola non si legge né si modifica il codice. Nella pubblica amministrazione la scelta non è un gusto. Il codice dell'amministrazione digitale chiede di valutarle entrambe, insieme al riuso di ciò che un'altra amministrazione ha già fatto.

### Licenze e valutazione

Fra le licenze libere la distinzione da saper dire è fra copyleft e licenze permissive. Con una licenza copyleft, come la GPL, chi distribuisce un'opera derivata deve farlo con obblighi analoghi, così la libertà non si chiude al passaggio successivo. Con una licenza permissiva, come MIT, BSD o Apache, si può anche incorporare il codice in un prodotto chiuso, mantenendo l'attribuzione richiesta. In un ente importa perché un componente preso e modificato va redistribuito, se lo si modifica per altri, alle condizioni della sua licenza, non «come ci fa comodo».

L'articolo 68 del CAD chiede, in vista dell'acquisizione, una valutazione comparativa. Si considerano le soluzioni già sviluppate e messe a riuso dalla pubblica amministrazione, il software libero, e il software proprietario. Contano il costo complessivo, non solo la licenza iniziale, l'interoperabilità, la dipendenza dal fornitore, le garanzie di supporto. Il libero non vince per decreto. Vince se la valutazione lo dice. Ignorarlo, e comprare l'unico prodotto che si conosce, è ciò che la norma vuole evitare.

L'articolo 69 riguarda il software che la pubblica amministrazione sviluppa o fa sviluppare: va messo a riuso, salvo i casi di esclusione, così un altro ente non lo ripaga da zero. Il catalogo pratico di questo riuso è Developers Italia. In un tema si cita come posto in cui cercare, prima di progettare da zero, se esiste già una soluzione di un'altra amministrazione per lo stesso bisogno. Poi si adatta, non si finge che non esista.

Il supporto non è incluso nella libertà. Un componente libero in esercizio vuole un responsabile: aggiornamenti, vulnerabilità, un contratto di supporto se nessuno interno può farlo. «È gratuito» non è una motivazione. «Lo possiamo leggere, modificare e non restiamo legati a un solo fornitore, e il costo di esercizio è questo» è una motivazione.

```disegno
titolo: Che cosa si confronta prima di acquistare
riga: Soluzione già a riuso nella pubblica amministrazione
riga: Software libero, con il costo di esercizio e di supporto
riga: Software proprietario, con il vincolo di licenza e di lock-in
nota: La norma chiede la valutazione. Non chiede di scegliere sempre la stessa colonna.
```


### Nel dettaglio

Software libero significa che si può usare, studiare, modificare e ridistribuire, anche in forma modificata. Il codice sorgente è la condizione, perché senza sorgente non si studia e non si modifica. Non significa necessariamente gratuito: si può pagare il supporto, la conduzione, l’adattamento. Gratuito e libero non sono sinonimi. Un programma dato senza sorgente, a costo zero, non è libero. Un programma libero con un contratto di supporto è normale in un ente.

La licenza dice che cosa si può fare. Alcune licenze permettono di modificare e di ridistribuire anche in un prodotto chiuso. Altre chiedono che l’opera derivata resti sotto la stessa licenza, e questo va capito prima di incorporare quel codice in un sistema dell’ente: si può fare, e si accettano gli obblighi, che di solito sono di ridare il sorgente a chi riceve il software. Ignorare la licenza perché «tanto è aperto» è il modo di trovarsi un obbligo non previsto. Si tiene l’elenco di ciò che si è incorporato e della licenza.

Per una pubblica amministrazione il riuso è una scelta di legge, non solo di convenienza. Prima di acquistare o di scrivere, si valuta se esiste già un software, libero o di un’altra amministrazione, che fa il lavoro. Il catalogo del riuso raccoglie software a disposizione delle amministrazioni. Valutare non significa adottare a forza. Si valuta se copre il requisito, se è mantenuto, se la licenza è compatibile, quanto costa adattarlo e condurlo. A volte costa meno scrivere un pezzo piccolo. A volte costa meno adottare e contribuire. La valutazione si scrive, così la scelta di scrivere da zero ha un motivo.

Il rilascio del software sviluppato con risorse pubbliche, quando le regole lo prevedono, restituisce il pezzo al catalogo. Si rilascia ciò che è utile e manutenibile, con la licenza scelta, senza i dati e senza i segreti. Sul foglio, nel tema: si è guardato se un software esistente copre il bisogno, si dice l’esito della valutazione, e se si scrive, si dice con quale licenza e chi lo manterrà.

### Esempio

L'ente deve gestire le richieste di assistenza. Prima di commissionare un prodotto chiuso si guarda se una soluzione a riuso copre il bisogno. Se la si scarta, si scrive perché: per esempio non gestisce i gruppi interni, e adattarla costerebbe più di un'applicazione piccola. Se si sceglie un componente libero per il database o per il proxy, si nomina chi applica gli aggiornamenti. La libertà senza un responsabile degli aggiornamenti è un sistema fermo a una versione vulnerabile.

### In sede di prova

Definire libero con le quattro libertà, non con il prezzo. Distinguere copyleft e permissiva in due frasi. Citare la valutazione comparativa e il riuso fra pubbliche amministrazioni, senza inventare il numero dell'articolo se non lo si ricorda: la sostanza basta, il numero è un di più. Motivare una scelta con lock-in, interoperabilità e costo complessivo.

### Errori da evitare

- «Usiamo l'open source perché non si paga.»
- Credere che libero significhi senza licenza e senza obblighi.
- Commissionare uno sviluppo e non prevedere che altri enti possano riusarlo, quando la norma lo chiede.

### Approfondire

- [Software libero](https://it.wikipedia.org/wiki/Software_libero)
- [Codice dell'amministrazione digitale](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-03-07;82)
- [Catalogo del riuso, Developers Italia](https://catalogo-software.developers.italia.it/)

## Storia utente e criterio di accettazione

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** user story, accettazione, requisito
**Semaforo:** verde

### Inquadramento

La domanda chiede una forma corta di requisito, usata quando si lavora a fette. Si scrive la storia e, soprattutto, il criterio con cui si decide che è finita.

### Definizione

Una storia utente è una frase: come ruolo, voglio un'azione, per uno scopo. Il criterio di accettazione è la condizione osservabile che la rende finita. Senza criterio, la storia è un desiderio.

### Nel dettaglio

«Come tecnico voglio prendere in carico un ticket per evitare che lo prenda anche un collega.» Il criterio: se due tecnici confermano insieme, uno solo ci riesce; l'altro vede chi l'ha preso; l'evento resta nella storia. Tre condizioni, provabili. Un criterio «il sistema deve essere usabile» non si prova e non si scrive.

La storia sta in un elenco ordinato. Quella in cima è la prossima che si costruisce, non la più vaga. Si tiene piccola abbastanza da finire in uno sprint. «Gestire i ticket» non è una storia, è un sistema. Si spezza: aprire, prendere, chiudere. Lo scopo, il «per», evita di costruire l'azione sbagliata: se lo scopo è non duplicare la presa, la soluzione è il vincolo, non un colore nuovo sull'elenco.

In un tema a cascata le stesse frasi si chiamano requisiti numerati. La forma cambia, il criterio osservabile no. Si usa il vocabolario del metodo che si è scelto e non si mescolano dieci storie dentro un capitolato che chiedeva requisiti.

### Esempio

Storia: come richiedente voglio vedere solo i miei ticket, per non leggere quelli degli altri. Criteri: l'elenco filtrato per l'identità di sessione; un identificativo altrui nell'indirizzo restituisce rifiuto; la prova automatica copre i due casi.

### In sede di prova

Ruolo, azione, scopo, criteri osservabili, storia piccola. Il criterio è la parte che si porta dietro nella prova.

### Errori da evitare

- Scrivere storie senza criteri.
- Usare «gestire» come verbo, senza spezzare.
- Dimenticare lo scopo e realizzare un'azione diversa da quella utile.

### Approfondire

- [User story](https://it.wikipedia.org/wiki/User_story)
- [Ingegneria dei requisiti](https://it.wikipedia.org/wiki/Ingegneria_dei_requisiti)

## Definizione di fatto

**Prove:** seconda prova gruppo 2, gruppo 3
**Tag:** definition of done, qualità, rilascio
**Semaforo:** verde

### Inquadramento

La domanda chiede quando un pezzo è finito, non quando il codice «è scritto». Si dà una lista corta, uguale per tutti i pezzi.

### Definizione

La definizione di fatto è l'elenco delle condizioni che un incremento deve soddisfare per essere considerato completo. Vale per tutto il gruppo. Include la prova, non solo la costruzione.

### Nel dettaglio

Una lista tipica e onesta: il codice è nel deposito, è stato letto da un'altra persona, le prove automatiche passano, il criterio di accettazione è verificato, la migrazione di schema è compatibile, la documentazione di esercizio è aggiornata se il comportamento visibile cambia, non ci sono segreti nel codice. Ciò che non è nella lista non si può pretendere. Ciò che è nella lista non si salta «per questa volta», perché la volta diventa il metodo.

Si tiene corta. Dieci condizioni che nessuno controlla valgono meno di cinque controllate. «Fatto» non include «in esercizio» se il rilascio è un passo separato, e allora si dice «fatto, non ancora rilasciato». Mescolare le due cose fa dichiarare finito ciò che l'utente non può usare, o blocca il fatto in attesa di una finestra.

Il gruppo la rivede se produce difetti ripetuti. Se i difetti nascono sempre dall'accessibilità, l'accessibilità entra nella lista. La lista è uno strumento, non un rito.

### Esempio

Un incremento dei ticket è fatto quando la prova della doppia presa passa, un collega ha letto la modifica, lo schema è compatibile con la versione precedente e la nota per l'assistenza dice che il messaggio di rifiuto è cambiato. Manca il rilascio: è fatto, in attesa della finestra di giovedì.

### In sede di prova

Lista corta, uguale per tutti, include la prova, distingue fatto e rilasciato, si aggiorna se gli stessi difetti tornano.

### Errori da evitare

- Dichiarare fatto il codice che compila.
- Avere una lista lunga che si ignora.
- Chiamare fatto ciò che l'utente non può ancora usare, senza dirlo.

### Approfondire

- [Scrum](https://it.wikipedia.org/wiki/Scrum)
- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## Revisione del codice

**Prove:** seconda prova gruppo 2, orale
**Tag:** code review, qualità, lettura
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché un'altra persona legge la modifica prima che entri nel ramo principale. Si dice che cosa cerca, e che cosa non è una caccia stilistica.

### Definizione

La revisione è la lettura di una modifica, da parte di qualcuno che non l'ha scritta, prima dell'integrazione. Cerca difetti, vincoli mancanti e codice che il gruppo non saprebbe mantenere.

### Nel dettaglio

Si legge un cambiamento piccolo. Su mille righe la revisione non vede nulla. Si cercano le cose che il compilatore non vede: il permesso controllato solo nell'interfaccia, la query concatenata, il segreto nel file, il caso di errore ignorato, la transazione troppo larga, il test che manca sul caso negativo. Lo stile si sistema con uno strumento automatico, non con la discussione.

Chi ha scritto la modifica non è l'unico a capire quel pezzo, e questo è il secondo scopo: in un ente il codice resta quando la persona cambia incarico. La revisione si fa in tempi brevi, un giorno, altrimenti diventa un collo e la gente la aggira. Un gruppo di due persone si revisione a vicenda. Saltarla perché «siamo in pochi» è il modo in cui l'unico che capisce il pezzo diventa indispensabile.

La modifica entra nel ramo principale solo dopo. L'urgenza vera si registra e la lettura avviene subito dopo, non «mai».

### Esempio

La modifica della presa in carico è di quaranta righe. Il collega nota che il rifiuto rivela il nome dell'altro tecnico anche a chi non potrebbe saperlo. Si corregge prima di integrare. Il caso di prova negativo si aggiunge nella stessa modifica.

### In sede di prova

Perché si legge, che cosa si cerca, modifiche piccole, tempo breve, l'urgenza non cancella la lettura.

### Errori da evitare

- Rivedere solo l'impaginazione.
- Accettare modifiche enormi la sera prima del rilascio.
- Lasciare che ciascuno integri il proprio codice senza un secondo paio di occhi.

### Approfondire

- [Revisione paritaria](https://it.wikipedia.org/wiki/Revisione_paritaria)
- [Integneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)

## Prova a scatola nera e a scatola bianca

**Prove:** seconda prova gruppo 2, orale
**Tag:** black box, white box, test
**Semaforo:** giallo

### Inquadramento

La domanda chiede da dove vengono i casi di prova. Si distinguono i casi presi dal requisito da quelli presi dalla struttura del codice, e si usano entrambi.

### Definizione

La prova a scatola nera sceglie i casi dal comportamento richiesto, senza guardare come è scritto. La prova a scatola bianca guarda la struttura e cerca di esercitare rami, condizioni e confini che la scatola nera può non toccare.

### Nel dettaglio

Dalla scatola nera vengono i casi del criterio di accettazione: presa riuscita, presa doppia rifiutata, utente senza ruolo, ticket già chiuso. Li scrive anche chi non ha scritto il codice, ed è un pregio, perché verifica la richiesta e non l'implementazione. Non vede un ramo di errore nascosto, per esempio il database che non risponde.

Dalla scatola bianca viene il caso che costringe quel ramo: si simula il database irraggiungibile e si verifica il messaggio e il fatto che non resti una scrittura a metà. Si coprono i confini: zero righe, una riga, il massimo. Inseguire ogni riga come ossessione, su un codice banale, costa più del difetto che evita. Si punta ai rami dei permessi, degli errori e dei vincoli.

Le due liste si uniscono. Un requisito senza un caso è scoperto. Un ramo critico senza un caso è scoperto. In un tema si mostrano due casi neri e uno bianco, e basta a far vedere che si conosce la differenza.

### Esempio

Scatola nera: il responsabile chiude, il tecnico no. Scatola bianca: la chiusura fallisce a metà e la transazione annulla, il ticket non resta «chiuso» senza riga di storia. Il primo caso nasce dal requisito. Il secondo nasce dal codice della transazione.

### In sede di prova

Definire le due provenienze dei casi, dire che si usano insieme, mostrare un caso di permesso e un caso di errore interno.

### Errori da evitare

- Provare solo il percorso felice, che è scatola nera incompleta.
- Credere che coprire le righe sostituisca il criterio di accettazione.
- Non provare mai il ramo in cui la dipendenza cade.

### Approfondire

- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)
- [Test di unità](https://it.wikipedia.org/wiki/Test_di_unit%C3%A0)

## Regressione: non rompere ciò che già funzionava

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** regressione, test, rilascio
**Semaforo:** verde

### Inquadramento

La domanda chiede come una correzione non ne introduca un'altra. Si descrive l'insieme di prove che si riesegue, non la speranza.

### Definizione

Una regressione è un difetto in qualcosa che prima funzionava, introdotto da una modifica. La prova di regressione riesegue i casi già superati, a ogni modifica rilevante, per accorgersene prima del rilascio.

### Nel dettaglio

Si automatizzano i casi che proteggono i vincoli: permessi, doppia presa, sovrapposizione, login, le query che non devono tornare a leggere tutto. Girano a ogni integrazione. Se uno fallisce, la modifica non entra. Un insieme che impiega ore viene diviso: pochi minuti a ogni integrazione, il resto ogni notte. Un insieme che nessuno può eseguire in locale viene eseguito lo stesso in automatico, altrimenti si scopre il venerdì.

Quando si corregge un difetto, si aggiunge il caso che lo riproduceva, prima della correzione se possibile. Così quel difetto non torna in silenzio. Il caso ha un nome che si capisce. «Test1» non dice che cosa protegge, e al primo fallimento nessuno sa se il test è vecchio o il codice è rotto.

La prova manuale resta per ciò che l'automazione non vede: un percorso d'interfaccia, un ripristino. Non si usa la prova manuale per i cinquanta casi di permesso, perché al terzo rilascio non li rifà più nessuno.

### Esempio

Ogni integrazione esegue in quattro minuti i casi di permesso e di concorrenza. Il caso della doppia presa, aggiunto il giorno del difetto, fallisce se qualcuno toglie il controllo di versione. Il rilascio di giovedì non parte se quella suite è rossa.

### In sede di prova

Definire la regressione, suite automatica sui vincoli, il caso nuovo nato da ogni difetto, la prova manuale solo dove serve il giudizio.

### Errori da evitare

- Rifare a mano, a ogni rilascio, prove che si potrebbero eseguire da sole.
- Correggere un difetto senza aggiungere il caso.
- Ignorare una suite rossa «tanto è un falso».

### Approfondire

- [Test di regressione](https://it.wikipedia.org/wiki/Test_di_regressione)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Rifattorizzare senza cambiare il comportamento

**Prove:** seconda prova gruppo 2, orale
**Tag:** refactoring, debito, comportamento
**Semaforo:** giallo

### Inquadramento

La domanda distingue migliorare la forma del codice dal cambiare ciò che fa. Si dice quando si fa e quale rete di sicurezza serve.

### Definizione

Il rifattorizzare modifica la struttura interna lasciando invariato il comportamento osservabile. Non aggiunge funzioni. Non corregge, di per sé, un difetto di comportamento: quello è una correzione, e si tiene separata.

### Nel dettaglio

Si fa quando il codice ostacola una modifica, non per gusto. Una funzione di trecento righe che mescola permesso, calcolo e SQL si divide prima di aggiungere la regola nuova, così la regola ha un posto. Si fa a passi piccoli, con le prove verdi a ogni passo. Senza prove, rifattorizzare è riscrivere alla cieca e il comportamento cambia senza che nessuno l'abbia deciso.

Si separa dal resto. Una modifica che rifattorizza e insieme aggiunge la funzione è illeggibile in revisione e, se qualcosa si rompe, non si sa quale dei due gesti è stato. Prima la struttura, prove verdi. Poi la funzione. Il debito si segna: non si rifattorizza tutto il sistema «già che ci siamo», si rifattorizza il pezzo che si sta toccando.

Il comportamento invariato si dimostra con i casi già esistenti. Se i casi non c'erano, si scrivono prima, sul comportamento attuale, e poi si rifattorizza. È l'ordine che rende la cosa sicura.

### Esempio

Prima di aggiungere la chiusura automatica si estraggono il controllo del permesso e la transazione di cambio stato, in due passi, con le prove della presa in carico ancora verdi. Nessuna funzione nuova è entrata in quei passi. Al passo successivo entra la chiusura automatica, e si vede da sola nella revisione.

### In sede di prova

Comportamento invariato, prove a ogni passo, separato dalle funzioni nuove, sul pezzo che si tocca, casi scritti prima se mancavano.

### Errori da evitare

- Riscrivere e cambiare il comportamento chiamandolo rifattorizzazione.
- Farlo senza prove.
- Mescolarlo, nello stesso cambiamento, con una funzione nuova.

### Approfondire

- [Refactoring](https://it.wikipedia.org/wiki/Refactoring)
- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## Versioni del software: che cosa promette un numero

**Prove:** seconda prova gruppo 2, orale
**Tag:** semver, versione, compatibilità
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si comunica una modifica a chi dipende dal programma. Si spiega un numero a tre parti e che cosa autorizza a cambiare.

### Definizione

Una versione semantica ha tre numeri: la modifica incompatibile, la funzione nuova compatibile, la correzione compatibile. Chi dipende dal programma sa, dal numero, se può aggiornare senza paura.

### Nel dettaglio

Si parte da una versione. Una correzione che non cambia il contratto alza l'ultimo numero. Una funzione aggiunta, che il chiamante vecchio può ignorare, alza il medio e azzera l'ultimo. Un cambiamento che rompe il chiamante, un campo tolto, un significato cambiato, alza il primo e si documenta. Il chiamante che si fida del contratto non deve scoprire la rottura in esercizio.

Il numero lo si alza davvero. Due comportamenti diversi con lo stesso numero non si possono diagnosticare. La versione è visibile nel registro e in una pagina di amministrazione, non solo nel deposito. In un incidente si sa quale versione risponde.

Le dipendenze si fissano. «Qualsiasi versione» significa che domani un aggiornamento automatico può rompere la build o, peggio, l'esercizio. Si fissa un intervallo compatibile e si aggiorna di proposito, con le prove. Un aggiornamento di sicurezza si fa anche se costringe a salire di versione, e lo si prova.

### Esempio

L'API dei ticket è alla 1.4.2. Si aggiunge un campo facoltativo: diventa 1.5.0. Si toglie un campo: diventa 2.0.0, e la versione 1 resta per un periodo dichiarato. L'esercizio mostra 1.5.0 nella pagina di stato. Nessun componente si aggiorna da solo il martedì mattina.

### In sede di prova

I tre numeri e che modifica autorizza ciascuno, il numero visibile in esercizio, le dipendenze fissate, l'aggiornamento di sicurezza comunque provato.

### Errori da evitare

- Cambiare il comportamento e lasciare il numero.
- Aggiornare le dipendenze all'ultima versione in automatico, in esercizio.
- Rompere un contratto senza un periodo in cui la versione vecchia resta.

### Approfondire

- [Versionamento semantico](https://it.wikipedia.org/wiki/Versionamento_semantico)
- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)

## Libreria e framework

**Prove:** seconda prova gruppo 2, orale
**Tag:** libreria, framework, dipendenza
**Semaforo:** giallo

### Inquadramento

La domanda sembra di vocabolario e decide chi comanda nel programma. Si dice la differenza e il costo di adottarne uno.

### Definizione

Una libreria è codice che il programma chiama. Un framework è una struttura che chiama il programma: impone l'organizzazione e i punti in cui si inserisce il proprio codice. Il controllo, nel framework, è rovesciato.

### Nel dettaglio

La libreria si tiene stretta. Si chiama una funzione di hashing, una di date, e il resto del programma è proprio. Si sostituisce con meno dolore. Il framework detta il modo: dove sta il modello, come si configura una rotta, come parte il processo. Fa guadagnare tempo all'inizio e lega. Cambiarlo è una riscrittura. Si sceglie se il gruppo lo conosce e se risolve il problema dell'applicazione, non perché è diffuso.

In entrambi i casi entra codice altrui, con difetti e licenza. Si tiene l'elenco, si aggiornano le correzioni, si legge la licenza prima di incorporare. Un framework abbandonato dall'autore è un debito che l'ente si tiene per anni. Si guarda se è mantenuto, come si guarda un software riusato.

Nel tema se ne nomina uno, con il motivo, e non se ne nominano cinque. Il linguaggio è uno. Il framework, se c'è, è uno.

### Esempio

L'applicazione usa un framework web del linguaggio scelto, perché gestisce rotte, sessioni e la struttura a tre livelli, e il gruppo lo mantiene. Per l'impronta delle password si usa una libreria nota, aggiornabile per conto suo. Non si scrive il protocollo HTTP a mano e non si adotta un secondo framework per una sola pagina.

### In sede di prova

Chi chiama chi, il legame del framework, licenza e manutenzione, uno solo nel tema.

### Errori da evitare

- Trattare un framework come una libreria che si toglie in un pomeriggio.
- Incorporare codice senza licenza e senza un responsabile degli aggiornamenti.
- Sceglierlo perché è di moda e nessuno nel gruppo lo conosce.

### Approfondire

- [Framework](https://it.wikipedia.org/wiki/Framework)
- [Libreria (software)](https://it.wikipedia.org/wiki/Libreria_(software))

## Dipendenze con difetti noti

**Prove:** seconda prova gruppo 2, orale
**Tag:** dipendenze, CVE, aggiornamento
**Semaforo:** verde

### Inquadramento

La domanda chiede del codice che non si è scritto e che però si esegue. Si descrive l'inventario e il tempo fra la notizia e l'aggiornamento.

### Definizione

Una dipendenza è una libreria o un componente incorporato. Un difetto noto in una dipendenza è un difetto dell'applicazione, anche se il proprio codice è corretto. Si tiene l'elenco delle versioni e si aggiorna ciò che è esposto.

### Nel dettaglio

Lo strumento di build elenca le dipendenze, comprese quelle trascinate da altre. Senza elenco non si sa se la notizia del mattino ci riguarda. Si confronta l'elenco con gli avvisi. Un difetto nella libreria che analizza i file caricati, esposta all'utente, si aggiorna in fretta. Un difetto in un componente che non è raggiungibile si segna e si aggiorna al giro ordinario. L'aggiornamento si prova: le prove di regressione esistono anche per questo.

Si fissa la versione. Un build che scarica «l'ultima» ogni volta non è riproducibile e può cambiare nel giorno sbagliato. Si aggiorna con un gesto esplicito. Le dipendenze che non servono si tolgono: ogni componente in più è superficie. Una libreria inclusa per una funzione di dieci righe, non aggiornata da anni, si sostituisce con dieci righe proprie o con una libreria viva.

Nel tema, una frase: le dipendenze sono elencate, fissate e aggiornate quando un difetto noto le riguarda, con prova prima del rilascio.

### Esempio

Il componente che genera i PDF ha un difetto pubblicato, ed è raggiungibile da chi esporta un ticket. Si aggiorna la versione fissata, corrono le prove, si rilascia. Un componente di sviluppo, usato solo sulla macchina di chi programma, si aggiorna nel giro settimanale. L'elenco esce dallo strumento di build, non da un foglio ricopiato a mano.

### In sede di prova

Inventario, versione fissata, priorità secondo l'esposizione, prova, togliere ciò che non si usa.

### Errori da evitare

- Non sapere quali librerie sono dentro l'applicazione.
- Scaricare l'ultima versione a ogni build.
- Considerare il difetto della libreria «non nostro».

### Approfondire

- [Dipendenza (informatica)](https://it.wikipedia.org/wiki/Dipendenza_(informatica))
- [Vulnerabilità](https://it.wikipedia.org/wiki/Vulnerabilit%C3%A0_(sicurezza_informatica))

## Strutture dati: lista, mappa e coda, quando servono

**Prove:** seconda prova gruppo 2, orale
**Tag:** lista, mappa, coda
**Semaforo:** giallo

### Inquadramento

È la domanda da orale sul «come lo terreste in memoria». Si scelgono tre strutture e si assegna ciascuna a un bisogno del tema, senza algoritmi da lavagna.

### Definizione

Una lista mantiene elementi in ordine e ammette duplicati. Una mappa associa una chiave a un valore e trova la chiave in modo rapido. Una coda fa uscire per primo ciò che è entrato per primo. Si sceglie in base all'operazione che deve costare poco.

### Nel dettaglio

Cercare un nome in una lista costa, nel caso peggio, quanto la lunghezza. Va bene per decine di elementi, non per decidere a ogni richiesta se un utente è fra centomila. La mappa costa poco alla ricerca e si paga un po' alla scrittura. È l'indice, ed è la struttura della sessione: dall'identificativo al dato. Non tiene un ordine utile, salvo strutture pensate per quello.

La coda è l'elenco di lavori da fare in ordine di arrivo: messaggi da spedire, ticket da evadere in ordine di apertura, se la regola è davvero quella. Una pila farebbe uscire l'ultimo, e per un ufficio di solito è la regola sbagliata. La priorità, se i ticket urgenti passano davanti, non è una coda semplice: è una coda con priorità, e si dice chi assegna la priorità, perché altrimenti tutti si dichiarano urgenti.

Non si inventa la struttura. Si dice l'operazione. «Devo sapere se questo identificativo c'è già» è una mappa o un insieme. «Devo elaborare nell'ordine di arrivo» è una coda. «Devo mostrare in ordine di data» è una lista ordinata o, sui dati veri, un indice del database, che è la stessa idea portata fuori dalla memoria.

### Esempio

Le sessioni stanno in una mappa condivisa, dall'identificativo al utente. Le mail da spedire stanno in una coda: ciò che entra prima parte prima, e se il processo cade la coda è nel database, non solo in memoria. L'elenco a video è una query ordinata, non una lista tenuta dal nodo.

### In sede di prova

Tre strutture, l'operazione che ciascuna rende economica, il passaggio dalla memoria al database quando il dato deve sopravvivere.

### Errori da evitare

- Cercare in una lista enorme a ogni richiesta.
- Tenere la coda solo in memoria e perderla al riavvio.
- Usare una pila per pratiche che vanno evase nell'ordine di arrivo.

### Approfondire

- [Struttura dati](https://it.wikipedia.org/wiki/Struttura_dati)
- [Coda (struttura dati)](https://it.wikipedia.org/wiki/Coda_(struttura_dati))

## Versionare un'API senza rompere chi la chiama

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** API, versione, compatibilità
**Semaforo:** giallo

### Inquadramento

La domanda serve quando un altro sistema dipende dal proprio. Si dice come si aggiunge un campo e come si toglie, e per quanto convive la versione vecchia.

### Definizione

Il contratto di un'API è l'insieme di percorsi, campi e codici su cui i chiamanti fanno affidamento. Una modifica compatibile non li obbliga a cambiare. Una incompatibile li obbliga, e richiede una nuova versione e un periodo di convivenza.

### Nel dettaglio

Aggiungere un campo facoltativo è compatibile: il chiamante vecchio lo ignora. Togliere un campo, rinominarlo, cambiare il significato di un codice, non lo è. Si pubblica il nuovo percorso o la nuova versione, si lascia la vecchia per un tempo dichiarato, si misura chi la usa ancora, si avvisa, poi si spegne. Spegnerla il giorno stesso del rilascio rompe un ufficio che non si sapeva nemmeno che la chiamasse. Il registro delle chiamate serve a saperlo.

Si documenta il contratto, anche in una pagina sola: metodo, percorso, campi, errori. La documentazione vecchia si marca come superata, non si lascia come se fosse vera. I chiamanti interni si aggiornano per primi, così la versione vecchia, quando resta, serve solo a chi è esterno o lento.

Nel tema, se esiste un'integrazione, si scrive la versione e la regola: i campi si aggiungono, non si reinterpretano, e la versione precedente resta per un periodo detto.

### Esempio

La versione 1 restituisce il ticket senza il campo priorità. La versione 2 lo aggiunge come facoltativo e in realtà è ancora compatibile, quindi si poteva restare sulla 1. Si decide comunque di togliere, sei mesi dopo, un campo ambiguo: quella sì è la versione 2, la 1 resta sei mesi, e il registro dice quanti chiamano ancora la 1. Al sesto mese i chiamanti rimasti sono avvisati e la 1 si spegne.

### In sede di prova

Compatibile contro incompatibile, convivenza a tempo, registro di chi usa la vecchia, contratto scritto.

### Errori da evitare

- Cambiare il significato di un campo lasciando lo stesso percorso.
- Spegnere la versione vecchia senza sapere chi la chiama.
- Documentare solo la versione nuova e lasciare in giro la vecchia pagina.

### Approfondire

- [API](https://it.wikipedia.org/wiki/Application_programming_interface)
- [Versionamento semantico](https://it.wikipedia.org/wiki/Versionamento_semantico)

## Internazionalizzazione e messaggi che non stanno nel codice

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** i18n, messaggi, lingua
**Semaforo:** rosso

### Inquadramento

È un argomento di contorno, finché il servizio non ha due lingue o anche solo messaggi da correggere senza una modifica di codice. Si dice dove stanno i testi.

### Definizione

L'internazionalizzazione prepara il software a più lingue e formati, separando i testi dal codice. La localizzazione è il lavoro di scrivere quei testi per una lingua e un paese: date, numeri, frasi.

### Nel dettaglio

I messaggi visibili all'utente stanno in un catalogo, non sparsi nelle condizioni. Correggere una frase non richiede un rilascio di logica, o comunque non richiede di cercare la frase in cinquanta file. Le date si formattano secondo la convenzione, non si concatenano a mano giorno e mese: l'ordine cambia e l'ambiguità del «02/03» torna. I plurali non si fanno aggiungendo una esse: in italiano la frase intera cambia. Si usa il meccanismo della lingua, anche se oggi la lingua è una sola. Costa poco all'inizio e evita la riscrittura.

La lingua dell'interfaccia non cambia la lingua dei dati. Un verbale è nella lingua in cui è stato scritto e non si traduce da solo. Si traduce, se serve, l'interfaccia. Confondere le due cose produce atti amministrativi ritradotti in modo inaffidabile.

Per un tema tutto in italiano si dice: i testi stanno in un catalogo, le date usano il formato dell'ente, non è prevista una seconda lingua e aggiungerla non richiederebbe di riscrivere la logica. È una frase, non un capitolo.

### Esempio

I messaggi di errore del portale stanno in un catalogo italiano. Una correzione di formulazione si fa lì. Le scadenze si mostrano in giorno, mese e anno, per esteso quando l'ambiguità è pericolosa. Il testo dei documenti caricati resta quello originale.

### In sede di prova

Testi fuori dal codice, date non concatenate, lingua dell'interfaccia distinta dalla lingua dell'atto. Basta una frase se il tema è monolingue.

### Errori da evitare

- Concatenare le date a mano.
- Tradurre in automatico un atto e trattarlo come l'originale.
- Spargere le frasi dell'interfaccia nei rami del programma.

### Approfondire

- [Internazionalizzazione](https://it.wikipedia.org/wiki/Internazionalizzazione_(informatica))
- [Localizzazione](https://it.wikipedia.org/wiki/Localizzazione)

## Un solo principio di disegno, con un esempio

**Prove:** seconda prova gruppo 2, orale
**Tag:** SOLID, responsabilità, disegno
**Semaforo:** giallo

### Inquadramento

La domanda chiede un principio di disegno del software, non l'elenco di cinque sigle. Se ne porta uno, applicato a un pezzo che la commissione riconosce, e si dice che cosa si rompe se lo si ignora.

### Definizione

Una classe, o un modulo, ha una ragione sola per cambiare. La regola di ufficio che decide se una prenotazione è lecita non sta nello stesso modulo che disegna la pagina, né in quello che spedisce la mail. È il principio di responsabilità unica, il primo dei cinque che si ricordano con la sigla SOLID. Gli altri si nominano solo se si sanno dire con la stessa concretezza.

### Nel dettaglio

Mettere la regola nel modulo della pagina sembra più corto. Poi la stessa regola serve all'API, al lavoro notturno e alla prova automatica, e si finisce con tre copie che divergono. Il giorno in cui la fine dell'intervallo diventa esclusa, se ne aggiorna una. Le altre accettano ancora due prenotazioni che si toccano sul bordo. Il difetto non è di rete e non è di database: è di una regola duplicata.

Il modulo della regola riceve dati già letti, o chiede lui al database dentro una transazione, e restituisce sì o no con un motivo. Non scrive HTML. Non conosce il colore del bottone. La pagina chiama il modulo e mostra il motivo. La prova automatica chiama lo stesso modulo senza pagina. Quando la regola cambia, si apre un file solo, e le prove di quel file dicono se il bordo dell'orario è ancora giusto.

Gli altri principi, detti in una riga ciascuno se avanza tempo: il modulo si estende senza modificarne il cuore a ogni variante; una funzione piccola si può sostituire senza sorprese; chi usa un modulo non dipende da metodi che non gli servono; si dipende da un contratto, non da un dettaglio di un prodotto. Una riga, non un capitolo. Il capitolo è l'esempio della regola di ufficio.

### Esempio

«La sala è libera se nessuna prenotazione confermata interseca l'intervallo, fine esclusa.» Sta in un modulo. La pagina, l'API e la prova lo chiamano. Cambiare la fine da esclusa a inclusa è una modifica in quel modulo e una prova che prima passava e ora deve fallire, o il contrario. La mail di conferma non viene toccata.

### In sede di prova

Un principio, un modulo, una regola di ufficio, il difetto che nasce se la regola è copiata nella pagina. Gli altri quattro in una riga, solo se sicuri.

### Errori da evitare

- Recitare le cinque sigle senza un esempio.
- Mettere la query, l'HTML e la mail nello stesso blocco «perché è tutto la prenotazione».
- Trattare il principio come una regola di stile e non come un modo di non duplicare il vincolo.

### Approfondire

- [Programmazione orientata agli oggetti](https://it.wikipedia.org/wiki/Programmazione_orientata_agli_oggetti)
- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)

## Bandiera di funzione: accendere senza rilasciare

**Prove:** seconda prova gruppo 2, orale
**Tag:** feature flag, rilascio, rischio
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si mette in esercizio un pezzo nuovo senza che tutti lo vedano, e come lo si spegne se fa danno, senza un altro rilascio.

### Definizione

Una bandiera è un interruttore, letto dall'applicazione, che abilita o nasconde un comportamento. Il codice è già sui nodi. La bandiera decide chi lo esegue: nessuno, un ufficio, tutti. Spegnere è cambiare la bandiera, non reinstallare.

### Nel dettaglio

Si usa per un cambiamento rischioso: un nuovo modo di prenotare, un controllo in più, una pagina diversa. Si accende prima su un ruolo interno, si guarda l'errore e il tempo di risposta, poi si allarga. Se il nuovo modo sbaglia, si spegne e resta il vecchio. Questo funziona se il vecchio c'è ancora. Una bandiera che non ha un comportamento di riserva è solo un if.

Le bandiere si tolgono. Una bandiera rimasta per un anno è un ramo che nessuno prova, e il giorno in cui si accende per errore esegue codice dimenticato. Nel registro del cambiamento si scrive la data in cui la bandiera si elimina. Le prove automatiche percorrono entrambi i rami finché la bandiera esiste, altrimenti il ramo spento marcisce.

La bandiera non sostituisce la migrazione dei dati. Se lo schema è già incompatibile con il codice vecchio, spegnere la bandiera non torna indietro. Prima si rende lo schema compatibile con entrambi, poi si accende, poi si toglie il vecchio. È lo stesso vincolo dei rilasci piccoli.

### Esempio

Il nuovo controllo sulla capienza è spento. Si accende per l'ufficio inventario, il martedì. I numeri tornano. Si accende per tutti il giovedì. Un conteggio sbagliato il venerdì: si spegne in un minuto, il vecchio controllo torna, e il dato già scritto resta perché lo schema non è cambiato. La settimana dopo si corregge e si ritoglie la bandiera, con una voce nel registro.

### In sede di prova

Interruttore, non rilascio. Serve un comportamento di riserva. Si allarga per gradi. Si toglie. Non torna indietro uno schema già rotto.

### Errori da evitare

- Lasciare bandiere spente per sempre nel codice.
- Usarla per nascondere una migrazione irreversibile.
- Accenderla per tutti al primo minuto.

### Approfondire

- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)
- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## Un ramo principale che resta rilasciabile

**Prove:** seconda prova gruppo 2, orale
**Tag:** rami, versionamento, rilascio
**Semaforo:** giallo

### Inquadramento

La domanda chiede come più persone modifichino lo stesso codice senza consegnare un insieme che non si sa descrivere. Si sceglie una strategia e la si sa motivare in un ente.

### Definizione

Il ramo principale contiene il codice che si può mettere in esercizio. Le modifiche nascono in rami corti, si rivedono, si uniscono al principale spesso. Un ramo che vive per mesi è un secondo prodotto, e l'unione finale è un rilascio non provato.

### Nel dettaglio

La strategia con tanti rami lunghi, uno per ogni versione in vita, si difende se si devono mantenere versioni vecchie per clienti diversi. Un ente che ha un'applicazione propria, in una versione sola, paga il costo e non ha il beneficio. Il ramo di una funzione, aperto a gennaio e unito a giugno, arriva sull'esercizio insieme a sei mesi di conflitti. Nessuno ha visto quel insieme nelle prove.

Si preferisce un ramo corto: pochi giorni, una revisione, l'unione. La funzione non finita non si vede, grazie a una bandiera o perché non è ancora collegata al percorso dell'utente. Il principale resta intero. Le prove automatiche girano su di lui a ogni unione, non la notte prima del rilascio.

Il rilascio è un'etichetta su un punto del principale, non un ramo che continua a ricevere ritocchi non tracciati. Un correttivo urgente nasce dal punto rilasciato, si unisce anche al principale, e non vive solo sul server. Il server non è un ramo.

### Esempio

Due persone lavorano sulla prenotazione e sull'inventario. Ciascuna unisce entro la settimana, dopo una revisione. Il venerdì il principale è rilasciabile anche se la prenotazione nuova è ancora spenta. Un guasto in esercizio si corregge e la stessa correzione torna sul principale il giorno stesso, così il rilascio successivo non la perde.

### In sede di prova

Principale rilasciabile, rami corti, unione frequente, etichetta di rilascio, il server non è una copia divergente. I rami lunghi solo se esistono davvero più versioni da mantenere.

### Errori da evitare

- Tenere un ramo aperto per tutta la durata del progetto.
- Correggere in esercizio e dimenticare il principale.
- Unire tutto il venerdì prima del collaudo.

### Approfondire

- [Controllo di versione](https://it.wikipedia.org/wiki/Controllo_di_versione)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Il contratto di un'API, scritto e verificabile

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** OpenAPI, contratto, API
**Semaforo:** giallo

### Inquadramento

La domanda chiede come chi chiama un servizio sappia che cosa inviare e che cosa riceverà, anche se non ha letto il codice. Si descrive un contratto, non uno strumento obbligatorio.

### Definizione

Il contratto elenca le operazioni, i campi, i tipi, gli errori e chi può chiamare. Un formato diffuso per le API HTTP è OpenAPI. Il contratto vale se il servizio lo rispetta e se una prova fallisce quando i due divergono. Un documento scritto a mano e non più riletto è un ricordo.

### Nel dettaglio

Nel contratto stanno le cose che un elaborato già deve dire: la prenotazione si crea con sala, inizio e fine; la risposta è l'identificativo oppure un rifiuto con un motivo fra quelli previsti; il motivo «occupata» non rivela chi l'ha occupata se il ruolo non può saperlo. I campi in più si ignorano o si rifiutano, e la scelta è scritta. Cambiare il tipo di un campo esistente è una rottura. Aggiungere un campo facoltativo può non esserlo, se i client vecchi sono stati d'accordo.

Dal contratto si generano prove e, se serve, un client. La prova invia un caso limite, la fine uguale all'inizio, e si aspetta il rifiuto previsto, non un cinquecento senza corpo. Il contratto non contiene il segreto e non contiene la regola di ufficio in prosa lunga: la regola sta nel modulo, il contratto dice come si vede da fuori.

In un tema, mezza pagina di contratto vale più di un paragrafo su quanto lo standard sia moderno. Tre operazioni, campi, errori, un esempio di rifiuto.

### Esempio

Creare una prenotazione: corpo con tre campi, risposta 201 con identificativo, oppure 409 se l'intervallo è occupato, 403 se il ruolo non può, 400 se la fine precede l'inizio. La prova automatica verifica i quattro casi. Un client interno, generato dal contratto, smette di compilare se il campo identificativo cambia nome senza una versione nuova.

### In sede di prova

Operazioni, campi, errori, esempio. Il contratto si verifica, non si racconta. Una rottura è un cambio di versione, non un ritocco silenzioso.

### Errori da evitare

- Descrivere l'API solo nel codice.
- Rispondere con un errore generico a ogni vincolo diverso.
- Cambiare un campo e lasciare il documento fermo all'anno prima.

### Approfondire

- [Application programming interface](https://it.wikipedia.org/wiki/Application_programming_interface)
- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

## Analisi statica: difetti senza eseguire

**Prove:** seconda prova gruppo 2, orale
**Tag:** analisi statica, qualità, strumenti
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si trovano difetti prima di eseguire il programma. Si distingue uno strumento che legge il codice da una prova che lo fa girare, e si dice che i due non si sostituiscono.

### Definizione

L'analisi statica esamina il codice, o il contratto, senza eseguirlo. Segnala difetti probabili: una variabile non usata, un possibile percorso senza ritorno, l'uso di una funzione nota come pericolosa, una dipendenza con un difetto pubblicato. Non dimostra che il vincolo di ufficio sia giusto.

### Nel dettaglio

Si mette nel percorso di integrazione, sullo stesso ramo che si vuole rilasciare, e il risultato blocca l'unione se la segnalazione è di quelle scelte come gravi. Se tutto è grave, le persone imparano a ignorare lo strumento. Se nulla blocca, lo strumento è un rumore. La lista corta si rivede: ciò che indica un difetto di sicurezza o un errore che in esercizio diventa un fermo sta nel blocco. Lo stile si sistema, ma non si racconta come sicurezza.

Lo strumento sbaglia in entrambi i versi. Tace su una regola di ufficio errata, perché la regola è legittima per lui. Segnala un pericolo dove il programmatore ha già un controllo che lui non vede. Per questo la segnalazione si legge. Non si spegne il controllo «per far passare la build» senza una riga che dica perché quel caso è falso, e la riga resta nel codice, vicino al punto, non in una mail.

Le prove dinamiche restano. L'analisi non prenota due sale sovrapposte per vedere se il vincolo tiene. Quella è una prova con i dati.

### Esempio

A ogni unione, lo strumento rifiuta una concatenazione di una query con un testo che viene dall'utente, e rifiuta una libreria con un difetto noto sopra la soglia decisa. Una segnalazione su un falso positivo si spegne con un commento e un nome. La prova della sovrapposizione delle sale continua a girare a parte: lo strumento non la vede.

### In sede di prova

Senza eseguire, nel percorso di integrazione, lista corta che blocca, i falsi positivi si motivano, non sostituisce la prova del vincolo.

### Errori da evitare

- Trattare il semaforo verde dello strumento come un collaudo.
- Spegnere tutte le regole alla prima noia.
- Cercare con l'analisi statica un errore che sta nei dati e nella regola.

### Approfondire

- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Debito tecnico: un costo con una data

**Prove:** seconda prova gruppo 2, orale
**Tag:** debito tecnico, manutenzione, scelta
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si parla di un pezzo fatto in fretta senza dire solo «andrebbe rifatto». Si dà al debito un interesse e una scadenza.

### Definizione

Il debito tecnico è una scelta che accelera oggi e rende più cara, o più rischiosa, una modifica di domani. È legittimo se è dichiarato, se si sa che cosa costa, e se ha una data in cui si ripaga. È un incidente se nessuno lo ha scelto e tutti lo subiscono.

### Nel dettaglio

Si scrive in un punto visibile: che cosa manca, quale modifica futura sarà più difficile, quale rischio c'è adesso. «Manca la prova di concorrenza sulla prenotazione» è un debito. «Il codice non mi piace» non lo è, finché non si dice quale cambiamento diventa pericoloso. Il primo si mette nel registro accanto ai lavori, con un proprietario. Il secondo si lascia, oppure diventa un rifattorizzare motivato.

L'interesse si vede. Ogni funzione nuova nel modulo senza prove costa più della precedente, perché nessuno osa toccarlo. A un certo punto il costo di ripagare è minore del costo di aggirare. Quello è il momento, e si può dire in orale con questa frase, senza numeri finti. I numeri, se li si ha da un conteggio vero di difetti, si portano. Non si inventa un importo.

Un debito di sicurezza non si mette nella stessa lista di un debito di ordine, e non aspetta il trimestre comodo. Una password in chiaro, un segreto nel codice, si ripaga subito. Chiamarli debito è già un eufemismo: sono difetti aperti.

### Esempio

Per consegnare il registro visitatori si è rinviata la prova di due ingressi simultanei sull'ultimo posto. È scritto nel registro dei lavori, a nome di una persona, entro la prossima iterazione, prima di aggiungere la lista d'attesa. Senza quella prova, la lista d'attesa si appoggerebbe a un vincolo non dimostrato. La password non c'entra: quella non era stata rinviata, era stata fatta.

### In sede di prova

Scelta dichiarata, costo futuro, proprietario, data. I difetti di sicurezza non stanno in questa coda. «Non mi piace» non è un debito.

### Errori da evitare

- Chiamare debito tutto il codice vecchio, senza una modifica che lo renda costoso.
- Rinviare una prova di sicurezza come se fosse ordine del codice.
- Non scrivere il debito e scoprirlo al collaudo.

### Approfondire

- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)
- [Refactoring](https://it.wikipedia.org/wiki/Refactoring)

## Tre ambienti, tre dati, un solo codice

**Prove:** seconda prova gruppo 2, prima prova, orale
**Tag:** ambienti, prova, esercizio
**Semaforo:** verde

### Inquadramento

La domanda chiede dove si prova una modifica prima che la veda l'ufficio. Si distinguono gli ambienti e, soprattutto, i dati che ci stanno.

### Definizione

Lo sviluppo è dove si scrive. La prova è dove si verifica, con dati non veri e con una configurazione il più possibile uguale all'esercizio. L'esercizio è dove lavorano gli utenti. Il codice ci arriva per un rilascio, non per una correzione fatta a mano sul server.

### Nel dettaglio

La differenza che conta non è il nome dell'ambiente. È che la prova non contiene la copia integrale dei dati veri, e che l'esercizio non riceve modifiche che la prova non ha viste. Stessi passi di rilascio, stessi parametri di struttura, dati diversi. Un ambiente di prova che è un server spento da un anno, con una versione che non esiste più, non prova nulla: prova un ricordo.

Le credenziali sono diverse. Una password di prova non entra in esercizio, e una di esercizio non sta nel file di chi sviluppa. La configurazione punta al database di quell'ambiente. Il modo più comune di sbagliare è un unico file in cui si cambia a mano l'indirizzo, e un giorno si sbaglia verso.

Si aggiunge, se serve, un ambiente di collaudo per chi deve accettare il vincolo senza entrare in esercizio. Non se ne aggiungono cinque senza un ruolo. Ogni ambiente costa aggiornamenti. Un ambiente non aggiornato è peggio di un ambiente che non c'è, perché dà una fiducia falsa.

### Esempio

La regola sulla fine esclusa si dimostra in prova, con sale finte e con la prova di due richieste simultanee. Poi lo stesso pacchetto, senza modifiche, va in esercizio in una finestra. Nessuno entra sul server a ritoccare una riga. I dati dei visitatori veri non sono mai stati copiati in prova: c'erano nomi di fantasia e gli stessi volumi.

### In sede di prova

Tre ruoli, dati veri solo in esercizio, stesso percorso di rilascio, configurazione separata, niente ritocchi a mano sul server.

### Errori da evitare

- Provare in esercizio «perché il caso non si riproduce».
- Copiare il database vero in prova.
- Avere un ambiente di prova fermo a una versione diversa, e fidarsi del suo esito.

### Approfondire

- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)
- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)

## L'errore che vede l'utente e l'errore che resta nel registro

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** errori, messaggi, registri
**Semaforo:** verde

### Inquadramento

La domanda chiede che cosa si mostra quando un'operazione fallisce. Si tengono due testi diversi: uno per chi ha premuto il bottone, uno per chi dovrà capire il guasto.

### Definizione

All'utente si dice che cosa è successo e che cosa può fare, senza dettagli interni. Nel registro si scrive che cosa è fallito, in quale operazione, con un identificativo che permetta di ritrovare la stessa richiesta. I due testi non coincidono.

### Nel dettaglio

Un messaggio che mostra la query, il nome del server, lo stack, insegna a chi guarda come è fatto il sistema e spesso contiene un dato di troppo. Un messaggio che dice solo «errore» non permette all'ufficio di capire se deve riprovare, correggere un campo o chiamare. La via di mezzo è una frase per ciascun rifiuto previsto: intervallo occupato, permesso mancante, scadenza passata, servizio momentaneamente non disponibile. Più un identificativo corto. Con quell'identificativo chi assiste cerca nel registro la riga vera.

Il registro non contiene la password, il testo integrale di un documento riservato, il numero di un documento di identità. Contiene l'operazione, l'esito, l'identità di chi ha agito, l'identificativo dell'oggetto, il tempo. Un'eccezione imprevista diventa un rifiuto generico verso l'utente e una riga completa verso il registro, e sveglia chi presidia se si ripete.

Nei temi, i rifiuti del vincolo sono messaggi previsti, non eccezioni. L'occupazione della sala è un esito normale di un no. Trattarla come un guasto da stack sporca i registri e spaventa l'utente.

### Esempio

La seconda prenotazione sulla stessa sala riceve «sala occupata in quell'intervallo» e un codice. Nel registro: identità, sala, intervallo, esito occupata. Non compare la query. Non compare l'altra persona che ha prenotato, se il ruolo non può vederla. Un database irraggiungibile, invece, dà «riprovare fra qualche minuto», lo stesso codice, e una segnalazione a chi presidia.

### In sede di prova

Due testi, identificativo per legarli, niente interni all'utente, niente dati riservati nel registro, il no del vincolo non è un'eccezione.

### Errori da evitare

- Mostrare lo stack all'utente.
- Scrivere «errore» per l'occupazione di una sala.
- Copiare nel registro il corpo intero di ogni richiesta.

### Approfondire

- [Log](https://it.wikipedia.org/wiki/Log)
- [Ingegneria del software](https://it.wikipedia.org/wiki/Ingegneria_del_software)

## Registri che una macchina sa leggere

**Prove:** seconda prova gruppo 2, orale
**Tag:** log strutturati, correlazione, monitoraggio
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si passi da un file di frasi a un registro su cui si può cercare un incidente. La differenza è la struttura, non il prodotto che raccoglie.

### Definizione

Un registro strutturato è una riga con campi stabili: tempo, servizio, operazione, esito, identità, identificativo della richiesta, durata. Più servizi usano gli stessi nomi di campo. Così una richiesta si segue dal proxy all'applicazione al database.

### Nel dettaglio

Il tempo è unico, in un fuso dichiarato, meglio in UTC dentro il registro e in ora locale solo sullo schermo. L'identificativo nasce al primo ingresso e si propaga. Senza, tre file di testo non si allineano se non a occhio, e a occhio si sbaglia di minuti. La durata permette di vedere la richiesta lenta senza leggere il contenuto. L'esito è un vocabolario corto, non una frase diversa ogni volta.

Si decide la conservazione. I registri di sicurezza si tengono per il tempo previsto e non si modificano. I registri di diagnostica possono essere più corti. Nessuno dei due sta solo sul disco del server che potrebbe riempirsi proprio durante il guasto: partono verso un punto di raccolta, e il disco locale ha un tetto.

Ciò che non si struttura: il testo libero come unico campo. Una riga «errore grave!!!» non si aggrega, non si allarma, non si confronta fra martedì e giovedì. Si può aggiungere un messaggio umano accanto ai campi. Non al posto dei campi.

### Esempio

Ogni prenotazione scrive tempo, operazione crea, esito, utente, sala, durata, identificativo. Il proxy scrive lo stesso identificativo. Quando un utente segnala un rifiuto, si cerca quell'identificativo e si vedono due righe, in ordine, senza incollare orari a mano. Un allarme scatta se gli esiti di errore imprevisto superano una soglia in cinque minuti, non se qualcuno ha scritto la parola grave.

### In sede di prova

Campi stabili, identificativo propagato, tempo unico, raccolta fuori dal disco del solo server, vocabolario di esiti, il testo libero è un di più.

### Errori da evitare

- Registrare solo una frase.
- Usare orologi diversi e poi confrontare i file a vista.
- Tenere il registro soltanto sul server che si sta riempiendo.

### Approfondire

- [Log](https://it.wikipedia.org/wiki/Log)
- [Monitoraggio (informatica)](https://it.wikipedia.org/wiki/Monitoraggio_(informatica))

## Configurazione fuori dal codice

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** configurazione, ambienti, segreti
**Semaforo:** verde

### Inquadramento

La domanda chiede dove stanno l'indirizzo del database, il nome dell'ente e la scadenza di una sessione. Non nel codice che si rilascia uguale in ogni ambiente.

### Definizione

La configurazione è l'insieme dei valori che cambiano fra ambienti o fra enti, senza cambiare il programma. Sta in un posto letto all'avvio: variabili dell'ambiente, un file non versionato con i segreti, un archivio di configurazione. Il codice contiene i default innocui e la logica.

### Nel dettaglio

Si separano tre livelli. Ciò che è un parametro di ufficio, la durata della sessione, la capienza se è un numero e non un vincolo calcolato, può stare in configurazione e si sa chi lo cambia. Ciò che è un segreto, la password del database, non sta nel codice e non sta nello stesso file che si copia in giro senza protezione. Ciò che è una regola, la fine dell'intervallo esclusa, non sta in un parametro che un amministratore cambia senza una prova: è codice, con una prova.

All'avvio il programma rifiuta di partire se manca un valore obbligatorio. Meglio non partire che partire verso il database sbagliato. I valori usati si registrano all'avvio, segreti esclusi, così si sa con quale configurazione sta girando il nodo. Due nodi con configurazioni diverse sono un guasto, non una sfumatura.

Nel tema si scrive una riga: gli indirizzi e i segreti stanno fuori dal codice, i nodi ricevono la stessa configurazione, la regola del vincolo no, quella è codice provato.

### Esempio

Lo stesso pacchetto gira in prova e in esercizio. In prova la variabile dice il database di prova. In esercizio ne dice un altro, e la password arriva da un archivio di segreti, non dal file. La durata della sessione è un parametro. La regola «un solo prestito aperto per copia» è codice. Se la variabile del database manca, il processo non parte e l'allarme si vede, invece di un processo che scrive nel posto sbagliato.

### In sede di prova

Parametri fuori, segreti in un archivio, regole nel codice, rifiuto di partire se manca l'obbligatorio, nodi allineati.

### Errori da evitare

- Scrivere l'indirizzo del database nel sorgente.
- Mettere la password in un file versionato.
- Rendere configurabile la regola del vincolo, così si cambia in esercizio senza una prova.

### Approfondire

- [Gestione della configurazione](https://it.wikipedia.org/wiki/Gestione_della_configurazione)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Stimare senza fingere una precisione

**Prove:** seconda prova gruppo 2, orale
**Tag:** stima, story point, pianificazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede quanto ci vuole. La risposta matura non è un numero di giorni detto al primo minuto. È un modo di confrontare e un intervallo.

### Definizione

Una stima è un'ipotesi informata sul costo di un lavoro, da rivedere quando si sa di più. Confrontare i pezzi fra loro, piccolo medio grande, è più onesto che assegnare ore false. Le ore si danno su un pezzo già scomposto, e si dice l'incertezza.

### Nel dettaglio

Si scompone fino a lavori che si sanno raccontare in una pagina. Su quelli il gruppo confronta: questa prenotazione somiglia a quell'inventario, è più grande perché ha il vincolo doppio. I punti, se si usano, sono questo confronto, non una valuta. Moltiplicarli per una tariffa oraria è un errore di categoria. La velocità passata, quanti punti il gruppo chiude in un'iterazione, serve a non promettere il triplo, e si usa con cautela se il gruppo è nuovo o se il lavoro nuovo non somiglia al vecchio.

L'incertezza si dice. «Tre giorni se la directory dell'ente è già interrogabile, dieci se va capito il contratto di identità.» Una data sola, senza la condizione, è una promessa che qualcun altro pagherà. Si aggiorna la stima quando la condizione si scioglie, non si difende il numero vecchio.

In orale non si recita una formula. Si porta la scomposizione, il confronto con un lavoro già fatto, e la condizione che sposta la data.

### Esempio

Il registro visitatori si spezza: schema, vincolo di capienza, ingresso, avviso. L'ingresso somiglia a una presa in carico già fatta ed è piccolo. La capienza concorrente non è mai stata provata ed è il pezzo incerto. Si stima un'iterazione per i pezzi noti e si dice che la capienza può chiederne un'altra se la prima prova di concorrenza fallisce. Non si risponde «duecento ore» al volo.

### In sede di prova

Scomposizione, confronto, condizione, aggiornamento. I punti non sono ore. Una data senza condizione è una finzione.

### Errori da evitare

- Dare ore su un tema non scomposto, per sembrare precisi.
- Convertire i punti in giornate con una costante magica.
- Non rivedere la stima dopo aver scoperto l'incognita.

### Approfondire

- [Project management](https://it.wikipedia.org/wiki/Project_management)
- [Scrum](https://it.wikipedia.org/wiki/Scrum)

## Il diagramma di sequenza, solo se toglie un dubbio

**Prove:** seconda prova gruppo 2, prima prova
**Tag:** UML, sequenza, interazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede un disegno delle interazioni, non un caso d'uso ripetuto in altra forma. Il diagramma di sequenza serve a mostrare l'ordine fra attori e sistemi.

### Definizione

Un diagramma di sequenza elenca, nel tempo, i messaggi fra utente, interfaccia, applicazione e database per un solo scenario. Si legge dall'alto in basso. Una freccia è un messaggio con un nome, non una decorazione.

### Nel dettaglio

Se ne fa uno per il caso che la prosa renderebbe ambiguo: la prenotazione concorrente, il rifiuto dopo la scadenza, il pagamento che non c'è in questi temi e quindi non si disegna. L'utente invia la richiesta, l'applicazione apre la transazione, il database risponde occupato, l'applicazione annulla, l'utente vede il no, e da nessuna parte parte una mail. Questo disegno, in dieci frecce, vale la sezione. Farne otto, per l'accesso, per il logout, per la modifica del profilo, consuma l'ora e non dice il vincolo.

I nomi sulle frecce sono i verbi del tema. Non «processa». Si segna il confine della transazione con una nota, così si vede che la mail è fuori. Si segna l'alt del caso occupato. Due scenari molto diversi sono due diagrammi, non uno con venti se.

In un elaborato se ne fa uno, grande, sul vincolo. Il resto sta nella prosa. In orale si descrive a voce lo stesso ordine, che è lo stesso dei cinque passi della transazione.

### Esempio

Scenario «sala occupata». Freccia dell'utente all'applicazione: prenota. Applicazione al database: leggi intersezioni. Database all'applicazione: una riga. Applicazione all'utente: occupata. Nota: nessuna scrittura, nessuna mail. Accanto, lo scenario che riesce, con la scrittura e, dopo la conferma, l'avviso. Stop.

### In sede di prova

Un solo scenario delicato, ordine vero, transazione visibile, mail fuori, nomi del tema. Niente famiglia di diagrammi identici.

### Errori da evitare

- Disegnare frecce senza nomi.
- Mettere nello stesso diagramma tutti i casi d'uso.
- Far partire la notifica prima della conferma, nel disegno, e non accorgersene.

### Approfondire

- [Diagramma di sequenza](https://it.wikipedia.org/wiki/Diagramma_di_sequenza)
- [Unified Modeling Language](https://it.wikipedia.org/wiki/Unified_Modeling_Language)

## Prova prima del codice, in ciò che serve all'ente

**Prove:** seconda prova gruppo 2, orale
**Tag:** TDD, prove, vincolo
**Semaforo:** rosso

### Inquadramento

È una voce di metodo, meno probabile come quesito autonomo. Serve a non restare muti se chiedono come si scrive una prova prima della funzione, e a non trasformarla in una religione.

### Definizione

Scrivere prima la prova vuol dire fissare l'esito atteso su un caso, vederla fallire perché il codice non c'è, scrivere il minimo codice che la fa passare, riordinare. Il ciclo è breve. Il valore, in un ente, è partire dal vincolo invece che dal telaio dell'interfaccia.

### Nel dettaglio

Si applica bene alla regola pura: fine esclusa, capienza, un solo prestito aperto. Si scrive il caso, la prova fallisce, si implementa, la prova passa. Si aggiunge il caso del bordo. Non si applica altrettanto bene al primo scheletro di un'interfaccia o a un'integrazione con un ente esterno che ancora non risponde: lì la prova automatica arriva appena il contratto è stabile, e forzare il ciclo produce finte.

Il limite da dire in orale è questo. La prova scritta prima non garantisce di aver capito il requisito. Garantisce che quel caso, come lo si è scritto, resta vero. Se il caso è sbagliato, la prova custodisce l'errore con diligenza. Per questo il caso si rilegge con chi conosce la regola di ufficio, non solo fra chi programma.

Non serve recitare il ciclo su ogni riga. Serve mostrare, su un vincolo, il caso che falliva e ora passa, e il caso del bordo accanto.

### Esempio

Si scrive la prova: due intervalli che si toccano alle dieci, fine esclusa, entrambi leciti. Fallisce. Si scrive la regola. Passa. Si aggiunge la prova di due intervalli che si sovrappongono di un minuto: deve rifiutare. Quella prova resta nel corredo e si riesegue a ogni modifica della regola.

### In sede di prova

Ciclo breve sul vincolo, la prova custodisce il caso com'è scritto, il caso si convalida con la regola di ufficio, non è un obbligo su ogni pezzo dell'interfaccia.

### Errori da evitare

- Presentarla come l'unico modo professionale di programmare.
- Scrivere prove che ripetono l'implementazione e non il vincolo.
- Credere che una prova verde dimostri il requisito giusto.

### Approfondire

- [Collaudo del software](https://it.wikipedia.org/wiki/Collaudo_del_software)
- [Test di regressione](https://it.wikipedia.org/wiki/Test_di_regressione)
