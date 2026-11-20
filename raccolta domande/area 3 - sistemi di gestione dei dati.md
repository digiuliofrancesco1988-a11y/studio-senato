# Area 3 — Sistemi di gestione dei dati

I sistemi di gestione dei dati sono nel gruppo 1 della seconda prova. All’orale stanno accanto all’ingegneria del software. Nella prima prova il modello dei dati è una parte che non può mancare: senza entità, chiavi e una transazione, il progetto è un disegno di schermate.

### Il filo

Si parte da che cosa fa un DBMS, poi dal modello relazionale: tabelle, chiavi, integrità. La normalizzazione toglie le ripetizioni che fanno divergere i dati. SQL legge e modifica. Le join dicono anche che cosa manca, non solo che cosa c’è. ACID e concorrenza sono il cuore d’esame: due persone, uno stesso dato, un solo esito corretto. Indici, injection e query parametrizzate legano i dati alla sicurezza. Relazionale e non relazionale è la scelta. Viste, vincoli e trigger dicono dove la regola vive se l’interfaccia viene aggirata. OLTP e warehouse separano il dato di adesso dal conto sullo storico. L’ultima voce è il modo di mettere tutto questo in un elaborato.

### Come si risponde

Ogni risposta ha un esempio con due righe che non devono succedere insieme. La presa in carico unica, la sala occupata due volte, il documento riservato letto dal pubblico. Si nomina la transazione e il vincolo. La query dell’elenco contiene il filtro sul ruolo, così un numero cambiato nell’indirizzo non restituisce la riga di un altro. Il warehouse si introduce solo quando il report disturba il servizio.

### Da dove partire

Verde: modello relazionale, normalizzazione, SQL, ACID, injection, schema dell’elaborato, viste e vincoli. Le join e gli indici si aggiungono subito dopo, perché completano SQL e le prestazioni. Il warehouse si studia per saperlo rifiutare in un tema piccolo.

## Che cos’è un database e che cosa fa un DBMS

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** database, DBMS, schema
**Semaforo:** giallo

### Inquadramento

Il database è l'insieme organizzato dei dati. Il DBMS è il sistema che li conserva, li interroga e impedisce le scritture impossibili. Senza il motore, i file divergono appena due persone li aggiornano. Sul foglio si distingue il dato, il motore e l'applicazione che lo usa. Si dice che l'applicazione non è l'unica strada per arrivare ai dati, e che per questo i vincoli stanno nel motore. Si chiude con l'utente del DBMS, che può fare il minimo necessario e non è un amministratore.

### Definizione

Un database è una raccolta organizzata di dati, descritta da una struttura e governata da regole, così che i dati restino coerenti e siano interrogabili. Un DBMS, sistema di gestione di basi di dati, è il software che conserva quella raccolta, controlla gli accessi, esegue le interrogazioni e garantisce le proprietà delle transazioni. L’applicazione non dovrebbe leggere i file del database per conto suo. Chiede al DBMS, in un linguaggio condiviso, e il DBMS risponde.

### Che cosa ci si aspetta dal DBMS

Il DBMS separa i dati dalle applicazioni. Più programmi possono usare gli stessi dati, con regole di integrità che non dipendono dal singolo programma. Definisce uno schema: quali tabelle o quali collezioni esistono, quali campi hanno, quali vincoli valgono. Offre un linguaggio di interrogazione. Nel mondo relazionale quel linguaggio è SQL.

Controlla la concorrenza, così due utenti non corrompono un aggiornamento simultaneo. Registra i cambiamenti in un log, così dopo un guasto può rifare le operazioni completate e disfare quelle a metà. Applica permessi: un utente del DBMS può leggere una tabella e non un’altra. Fa backup coerenti. Tiene indici per non rileggere ogni volta tutti i dati.

Esiste un’amministrazione del DBMS distinta dall’uso applicativo. L’account con cui l’applicazione si collega non è l’account con cui si amministra il server. L’applicazione ha i permessi minimi sulle tabelle che le servono, e niente di più.

Il dato ha anche un ciclo di vita. Nasce, si modifica, si conserva per il tempo previsto da una regola o da una norma, si scarta o si archivia. Un sistema di gestione dei dati non è solo la tecnologia che risponde alle SELECT. È anche la decisione su che cosa si conserva e per quanto.


### Nel dettaglio

Un file tiene dei byte. Un database tiene dati con un significato, e un DBMS è il programma che li custodisce e li serve a più utenti insieme senza corromperli. La differenza si vede quando due persone scrivono. In un file condiviso, due salvataggi si sovrascrivono e resta l’ultimo, senza avviso. Il DBMS prende le due richieste, le mette in un ordine, applica vincoli, e o le compie per intero o le annulla. Questo, più che «un posto dove mettere le tabelle», è il motivo per cui un ente non tiene le pratiche in un foglio condiviso.

Le funzioni da saper attribuire al DBMS, una per una, sono queste. Definire la struttura: tabelle, colonne, tipi, vincoli. Interrogare e modificare con un linguaggio, SQL nei relazionali. Garantire l’integrità: una pratica non può puntare a un utente che non esiste, se la chiave esterna è dichiarata. Gestire la concorrenza: le transazioni si incrociano senza mescolare i risultati. Recuperare dopo un guasto: il giornale delle operazioni permette di rifare le transazioni confermate e di disfare quelle a metà, così un black-out non lascia una scrittura spezzata. Controllare l’accesso: un utente del database può leggere certe tabelle e non cancellarle. Registrare, se configurato, chi ha fatto che cosa.

Il DBMS non è l’applicazione. L’applicazione sa che un ticket lo chiude solo un tecnico. Il DBMS sa che la colonna stato non è vuota e che l’identificativo esiste. Mettere tutta la regola nel DBMS, con trigger che mandano mail e decidono permessi, rende la regola invisibile e fragile. Mettere tutta la regola nell’applicazione, senza vincoli nel DBMS, permette a uno script dimenticato di inserire una riga incoerente. Si dividono: vincoli di struttura nel DBMS, regole di lavoro nell’applicazione.

Un caso. L’ufficio esportava l’elenco in un foglio, lo modificava, lo reimportava. Due uffici lo facevano la stessa mattina: il secondo import cancellava le correzioni del primo. Il passaggio a un DBMS con transazioni e con una riga per pratica, modificata da una maschera, toglie l’import. Sul foglio si nominano integrità, concorrenza e recupero, e si dice che l’applicazione resta il luogo delle regole di ufficio.

### Esempio

Nel sistema dei ticket il DBMS conserva utenti, ticket e commenti. L’applicazione chiede «i ticket aperti di questo ufficio» e non apre un file. Se durante una scrittura manca la corrente, il DBMS, al riavvio, riporta la base a uno stato in cui le transazioni completate ci sono e quelle interrotte no. Questo è il motivo per cui si usa un DBMS e non un foglio condiviso.

### In sede di prova

Definire database e DBMS in due frasi. Elencare integrità, concorrenza, ripristino, permessi e interrogazione come servizi che il DBMS offre e che l’applicazione non deve reinventare. Dire quale prodotto si userebbe solo se si conosce; altrimenti dire «un DBMS relazionale», che è una scelta già motivabile.

### Errori da evitare

- Chiamare database un qualsiasi file di testo.
- Far accedere ogni utente dell’applicazione con le credenziali di amministratore del DBMS.
- Dimenticare che i backup sono una funzione da progettare, non un effetto collaterale dell’avere un DBMS.

### Approfondire

- [Base di dati](https://it.wikipedia.org/wiki/Base_di_dati)
- [SQL](https://it.wikipedia.org/wiki/SQL)

## Il modello relazionale, le chiavi e l’integrità

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** tabella, chiave primaria, chiave esterna, integrità
**Semaforo:** verde

### Inquadramento

Il relazionale organizza i dati in tabelle, con righe dello stesso tipo e legami tramite chiavi. La chiave primaria identifica la riga. La chiave esterna obbliga il riferimento a esistere. L'integrità è l'insieme di questi rifiuti: il motore dice no a una riga orfana o duplicata. Sul foglio si prendono due tabelle della traccia, si sottolinea la chiave e si scrive una riga che il motore deve rifiutare. Un elenco di tabelle senza un rifiuto possibile è un disegno incompleto.

### Definizione

Il modello relazionale organizza i dati in relazioni, che si rappresentano come tabelle. Ogni riga è un’ennupla, un fatto. Ogni colonna è un attributo di quel fatto. L’ordine delle righe non ha significato. Una chiave primaria è un attributo, o un insieme di attributi, che identifica una riga e una sola, e che non è nullo. Una chiave esterna è un attributo che contiene il valore della chiave primaria di un’altra tabella, e così realizza il legame.

### Integrità e cardinalità

L’integrità di entità chiede che la chiave primaria ci sia e sia unica. Non si identificano due ticket con lo stesso numero, e non si lascia il numero vuoto.

L’integrità referenziale chiede che ogni valore di chiave esterna esista davvero nella tabella riferita, oppure sia nullo se il legame è facoltativo. Non esiste un commento che punta a un ticket cancellato, a meno che si sia deciso in modo esplicito che cosa fare alla cancellazione: impedire la cancellazione del ticket finché ha commenti, cancellare i commenti insieme al ticket, oppure annullare il riferimento. La scelta si chiama azione sulla chiave esterna e in un tema va detta.

La cardinalità dice quanti elementi stanno dai due lati. Uno a molti: un utente apre molti ticket, un ticket ha un solo richiedente. Molti a molti: un documento e le persone autorizzate a leggerlo, se ciascuna persona vede molti documenti e ciascun documento è visto da molte persone. Quel legame diventa una tabella propria, con due chiavi esterne. Uno a uno è più raro e si usa quando una parte dei dati è facoltativa o va separata per riservatezza.

I vincoli completano le chiavi. Un campo obbligatorio non è nullo. Un’email può avere un vincolo di unicità. Uno stato può assumere solo i valori previsti. I vincoli stanno nel DBMS, non solo nel modulo. Il modulo aiuta l’utente; il DBMS protegge i dati anche se la scrittura arriva da un’altra strada.

I nomi aiutano chi corregge. Tabelle al singolare o al plurale, ma tutte uguali. Chiavi primarie chiare, di solito un identificativo stabile, non un nome di persona: le persone cambiano nome, si omonimizzano, e un nome non identifica.


### Nel dettaglio

Una relazione è una tabella. Una riga è un fatto. Una colonna è un attributo di quel fatto, e in una colonna i valori hanno lo stesso tipo. L’ordine delle righe non ha significato. Due righe identiche non dovrebbero esistere: ci vuole una chiave. La chiave primaria è l’insieme minimo di colonne che identifica una riga e non è nullo. Spesso è un identificativo artificiale, un numero progressivo o un UUID, perché i fatti naturali deludono: il codice fiscale può mancare, il nome si ripete, il numero di protocollo può cambiare formato. Se si usa una chiave naturale, si dice perché è stabile.

La chiave esterna è una colonna, o più colonne, i cui valori devono già esistere come chiave di un’altra tabella. La riga del commento contiene l’identificativo del ticket. Il DBMS rifiuta un commento il cui ticket non esiste, e rifiuta di cancellare un ticket che ha ancora commenti, oppure li cancella in cascata se si è dichiarato così. La cascata va scelta, non lasciata al default: cancellare un utente e, a cascata, anni di pratiche, è un incidente. Più spesso si vieta la cancellazione finché esistono figli, e si disattiva l’utente invece di cancellarlo.

La cardinalità si legge sulle chiavi. Un ticket ha molti commenti: nella tabella commento c’è la chiave del ticket, e più righe possono avere lo stesso valore. Un ticket ha un solo richiedente: nella tabella ticket c’è la chiave dell’utente. Se un ticket potesse avere più richiedenti, la chiave del richiedente non starebbe sul ticket, perché una colonna tiene un valore. Si farebbe una terza tabella, assegnazione, con le due chiavi. Mettere «richiedente1, richiedente2, richiedente3» come colonne è il sintomo che la relazione è sbagliata.

I valori nulli vanno decisi. Nullo significa «non si applica» o «non lo sappiamo», e non è zero e non è stringa vuota. Una chiave esterna nulla significa che il legame è facoltativo. Una chiave primaria non è mai nulla. Sul foglio si disegnano tre tabelle di un caso, con le chiavi, e si scrive una frase che il DBMS rifiuterebbe: il commento orfano, la cancellazione vietata.

### Esempio

Utente(id, nome, email unica, ruolo). Ticket(id, richiedente_id, oggetto, stato, aperto_il). Commento(id, ticket_id, autore_id, testo, creato_il). richiedente_id e autore_id riferiscono Utente.id. ticket_id riferisce Ticket.id. Un ticket senza richiedente non è ammesso. La cancellazione di un utente che ha ticket aperti è rifiutata, oppure l’utente viene disattivato e non cancellato: in un ente la seconda scelta conserva lo storico.

### In sede di prova

Disegnare tre o quattro tabelle, segnare PK e FK, dire la cardinalità con una frase. Aggiungere due vincoli che non siano le chiavi, per esempio l’unicità dell’email e l’insieme degli stati ammessi. È uno dei punti in cui un elaborato passa da generico a tecnico.

### Errori da evitare

- Usare il nome e cognome come chiave primaria.
- Realizzare un molti-a-molti ripetendo colonne «autorizzato1, autorizzato2, autorizzato3».
- Lasciare che l’applicazione sia l’unico presidio dell’integrità.

### Approfondire

- [Modello relazionale](https://it.wikipedia.org/wiki/Modello_relazionale)
- [Chiave](https://it.wikipedia.org/wiki/Chiave_(basi_di_dati))

## La normalizzazione

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** 1NF, 2NF, 3NF, anomalie
**Semaforo:** verde

### Inquadramento

Normalizzare toglie le ripetizioni che, aggiornate a metà, fanno dire al database due cose diverse. Le forme si raccontano con un esempio, non con la sola definizione. Una colonna ripetuta, un gruppo che dipende da una parte della chiave, un fatto che dipende da un altro fatto e non dalla chiave. Sul foglio si parte da una tabella fatta male, di quelle che verrebbero spontanee, e la si spezza. Si dice anche quando ci si ferma: un tema non deve inseguire la forma perfetta se il vincolo che conta è già salvo.

### Definizione

La normalizzazione è il procedimento con cui si scompongono le tabelle per ridurre la ripetizione dei dati e le anomalie di aggiornamento, cancellazione e inserimento. Si appoggia alle dipendenze funzionali: l’attributo B dipende da A se, noto A, B è determinato.

### Le prime tre forme, dette in modo operativo

La prima forma normale chiede che in ogni incrocio di riga e colonna ci sia un valore solo, non una lista, e che la riga abbia una chiave. Un campo «telefoni» che contiene tre numeri separati da virgole viola la prima forma. I telefoni diventano righe di una tabella Telefoni, oppure, se ne serve uno solo, un solo campo.

La seconda forma normale riguarda le chiavi composte. Ogni attributo deve dipendere da tutta la chiave, non da una sua parte. Se una tabella Iscrizione ha chiave (corso, persona) e contiene anche il nome del docente del corso, il docente dipende solo dal corso. Va spostato nella tabella Corso. Sulle tabelle che hanno un identificativo semplice come unica chiave, la seconda forma è automaticamente soddisfatta se lo è la prima.

La terza forma normale chiede che gli attributi non chiave dipendano dalla chiave, e non da altri attributi non chiave. Se in Utente compaiono il codice dell’ufficio e il nome dell’ufficio, il nome dipende dal codice, non dalla persona. Il nome sta nella tabella Ufficio. Altrimenti, per correggere il nome di un ufficio, si devono aggiornare tutte le persone, e se si sbaglia una riga lo stesso ufficio ha due nomi.

Le anomalie che si evitano sono concrete. Anomalia di aggiornamento: la stessa informazione in molti posti, corretta solo in alcuni. Anomalia di cancellazione: cancellando l’unico dipendente di un ufficio si perde anche l’indirizzo dell’ufficio, che stava solo in quella riga. Anomalia di inserimento: non si può registrare un ufficio nuovo finché non c’è un dipendente, se l’ufficio esiste solo come colonne della persona.

La normalizzazione non è un fine religioso. A volte si accetta una ridondanza controllata per prestazioni di lettura, sapendo che va mantenuta coerente. In un tema d’esame la scelta normale è uno schema in terza forma, con una frase che dice perché: un fatto è scritto una volta sola.


### Nel dettaglio

La normalizzazione toglie le ripetizioni che fanno dire due cose diverse sullo stesso fatto. La prima forma chiede valori atomici e una chiave. Una colonna «telefoni» con tre numeri separati da virgola non è atomica: non si cerca un numero, non si valida, non si cancella uno solo. Si fa una riga per telefono, in una tabella figlia. Un elenco di righe senza chiave, in cui due righe uguali possono convivere, non è una relazione utilizzabile.

La seconda forma riguarda le chiavi composte. Se la chiave è documento più riga, ogni altra colonna deve dipendere da tutta la chiave, non da un pezzo. Il nome del prodotto dipende solo dal prodotto, non dalla riga del documento. Tenerlo sulla riga ripete il nome e, se il nome cambia, va cambiato in ogni riga oppure resta vecchio in alcune. Si sposta il prodotto in una sua tabella. Se la chiave è un identificativo semplice, la seconda forma è già soddisfatta, e lo si può dire in una frase.

La terza forma riguarda le dipendenze fra colonne non chiave. Nella tabella ticket, l’ufficio del richiedente dipende dal richiedente, non dal ticket. Se sta sul ticket, e la persona cambia ufficio, i ticket vecchi dicono un ufficio e l’anagrafica un altro, senza che si capisca quale è vero. Si tiene l’ufficio sull’utente, e il ticket punta all’utente. L’eccezione consapevole è lo storico: se serve l’ufficio com’era nel giorno del ticket, allora quel dato è un fatto del ticket, si copia di proposito e si chiama «ufficio al momento della richiesta». La copia voluta, dichiarata, non è un difetto. La copia inconsapevole lo è.

Oltre la terza forma, in un elaborato, di rado serve andare. Denormalizzare si fa dopo, per una misura: si tiene un totale già calcolato perché sommare un milione di righe a ogni pagina è troppo lento, e si dice come si mantiene aggiornato. Sul foglio si parte da una tabella unica, brutta, di un foglio elettronico, e si fanno vedere i tre passaggi fino alle tabelle pulite. È più convincente della definizione recitata.

### Esempio

Bozza sbagliata: Ticket(id, oggetto, nome_richiedente, email_richiedente, nome_ufficio). Il nome dell’ufficio e l’email ripetuti in ogni ticket divergono appena qualcuno cambia ufficio. Schema normalizzato: l’ufficio sta in Ufficio, la persona in Utente con una chiave esterna verso l’ufficio, il ticket riferisce l’utente. Il nome si aggiorna in un punto.

### In sede di prova

Definire la normalizzazione con la parola anomalie. Mostrare una tabella denormalizzata e la sua scomposizione, anche piccola. Non serve enunciare la forma di Boyce-Codd, a meno di non padroneggiarla. Terza forma normale, spiegata con un esempio, è il livello giusto.

### Errori da evitare

- Dire «normalizzare» e poi lasciare liste dentro i campi.
- Spezzare all’eccesso, fino a tabelle di un solo attributo, senza un bisogno.
- Confondere normalizzazione e indicizzazione. Una rende coerente lo schema, l’altra accelera le ricerche.

### Approfondire

- [Normalizzazione](https://it.wikipedia.org/wiki/Normalizzazione_(informatica))
- [SQL](https://it.wikipedia.org/wiki/SQL)

## SQL di base: leggere e modificare i dati

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** SELECT, INSERT, UPDATE, DELETE, WHERE
**Semaforo:** verde

### Inquadramento

SQL è il linguaggio con cui si chiede e si modifica. Leggere, inserire, aggiornare, cancellare sono quattro intenzioni, e la più pericolosa è l'aggiornamento senza un filtro. Sul foglio si scrive una lettura con un filtro vero, quello del ruolo, e un aggiornamento che tocca una sola riga identificata. Si dice che cosa restituisce una lettura senza righe: un insieme vuoto, non un errore. I nomi delle colonne sono quelli dello schema, non sinonimi inventati a ogni riga.

### Definizione

SQL è il linguaggio standard per definire e interrogare basi di dati relazionali. È dichiarativo: si descrive il risultato voluto, e il DBMS sceglie come ottenerlo. Le operazioni principali sui dati sono leggere, inserire, modificare e cancellare.

### Le frasi che bisogna saper leggere e riscrivere

La lettura:

```sql
SELECT u.nome, t.oggetto
FROM ticket t
JOIN utente u ON u.id = t.richiedente_id
WHERE t.stato = 'aperto'
ORDER BY t.aperto_il DESC;
```

SELECT elenca le colonne in uscita. FROM dice da dove si legge. JOIN unisce le righe correlate, e se ne parla nella voce dedicata. WHERE filtra prima di produrre il risultato. ORDER BY ordina. Un filtro su un testo è case sensitive oppure no a seconda del DBMS e della collation: non è un dettaglio da inventare, se non si è sicuri si dice che l’uguaglianza dipende dalla configurazione.

Le aggregazioni riassumono. `SELECT stato, COUNT(*) FROM ticket GROUP BY stato` conta i ticket per stato. HAVING filtra i gruppi dopo l’aggregazione, mentre WHERE filtra le righe prima. Confonderli è un errore frequente.

L’inserimento:

```sql
INSERT INTO ticket (richiedente_id, oggetto, stato)
VALUES (12, 'Stampante del piano 2', 'aperto');
```

L’aggiornamento e la cancellazione hanno sempre un WHERE, salvo che si voglia davvero toccare tutta la tabella. `UPDATE ticket SET stato = 'chiuso' WHERE id = 44`. Un UPDATE senza WHERE è un incidente classico.

La definizione della struttura usa altre frasi: CREATE TABLE, con tipi, chiave primaria e chiavi esterne; ALTER TABLE per evolvere lo schema; CREATE INDEX. In un tema non si scrive il DDL intero di venti tabelle. Si scrive lo schema logico e, se chiesto, una CREATE della tabella principale per mostrare che si conoscono vincoli e tipi.

I tipi contano. Un identificativo numerico o un UUID, una data con fuso se il momento esatto conta, un testo di lunghezza adatta, un valore numerico per le quantità. Una data messa in un campo di testo si ordina male e si valida peggio.


### Nel dettaglio

Una SELECT si legge dal centro, non dalla prima parola. FROM dice da quale tabella si parte. JOIN porta le altre, e si scrive il legame. WHERE filtra le righe prima del raggruppamento. GROUP BY forma i gruppi. HAVING filtra i gruppi. SELECT sceglie le colonne e le aggregazioni. ORDER BY ordina il risultato, che altrimenti non ha ordine garantito. LIMIT, o la forma equivalente, taglia. Scrivere il filtro di un gruppo nel WHERE è l’errore classico: WHERE non vede gli aggregati. «I tipi di ticket che sono più di dieci» è un HAVING sul conteggio, non un WHERE.

Le modifiche sono tre, e ciascuna ha un WHERE salvo quando si vuole davvero toccare tutto. INSERT aggiunge una riga e fallisce se viola una chiave o un vincolo. UPDATE modifica le righe che il WHERE seleziona. Senza WHERE aggiorna la tabella intera: è il comando con cui si sistemano «tutti» i ticket per errore. DELETE toglie le righe selezionate. Senza WHERE svuota la tabella. In un’applicazione questi comandi non si battono a mano sul database di esercizio. Stanno nel codice, parametrizzati, dentro una transazione. A mano, in esercizio, si parte da una SELECT che mostra le righe, si conta, e solo poi si modifica, in transazione, con la possibilità di ROLLBACK.

I tipi contano nelle condizioni. Confrontare una data con una stringa può escludere righe senza errore. Confrontare un numero con una colonna testo non usa l’indice e può dare risultati strani. Il nullo non è uguale a niente, nemmeno a sé: una condizione «diverso da chiuso» non restituisce le righe in cui lo stato è nullo. Si tratta il nullo di proposito, con IS NULL.

Un esempio da riscrivere. I ticket aperti dell’ufficio protocollo, con il numero di commenti, dal più commentato. Si parte dai ticket, si filtrano aperti e ufficio, si uniscono i commenti, si raggruppa per ticket, si conta, si ordina. Sul foglio anche solo la forma delle frasi, con i nomi delle tabelle del proprio tema, vale più di un elenco di comandi staccati.

### Esempio

«Elenco dei ticket aperti dell’ufficio ragioneria, dal più recente, con il nome del richiedente» è la frase in italiano della SELECT vista sopra, più un filtro sull’ufficio. Saper partire dalla frase in italiano e arrivare alla query, e il contrario, è la competenza che serve. Non serve ricordare dieci funzioni di un dialetto.

### In sede di prova

Se il quesito è teorico, spiegare SELECT, WHERE, JOIN, GROUP BY e la differenza fra WHERE e HAVING. Se il quesito mostra una query, dire in italiano quali righe produce. Se si progetta, includere due query che l’applicazione deve poter fare, scelte fra i requisiti: non decorative.

### Errori da evitare

- SELECT * in un esempio in cui si vuole mostrare di sapere quali dati servono. In produzione, inoltre, porta colonne inutili e fragilità se lo schema cambia.
- UPDATE o DELETE senza WHERE negli esempi.
- Credere che SQL sia un linguaggio di programmazione generale. Non lo è: non descrive l’interfaccia né i permessi applicativi.

### Approfondire

- [SQL](https://it.wikipedia.org/wiki/SQL)

## Le JOIN e il significato di un’assenza

**Prove:** seconda prova gruppo 1, orale
**Tag:** INNER JOIN, LEFT JOIN, NULL
**Semaforo:** giallo

### Inquadramento

La join affianca righe di due tabelle secondo un legame. La join interna tiene solo le coppie. La esterna tiene anche chi non ha coppia, e quel vuoto è spesso la risposta: il richiedente senza richieste, la sala senza sedute. Sul foglio si fa una domanda in italiano e si dice quale join le corrisponde. Si controlla di non perdere, con una join interna, proprio le righe che la domanda voleva vedere. Un prodotto cartesiano, il legame dimenticato, si cita come l'errore da non commettere.

### Definizione

Una join combina righe di due tabelle in base a una condizione, quasi sempre l’uguaglianza fra una chiave esterna e una chiave primaria. Senza join, o si duplicano i dati in una sola tabella, o si fanno due domande e si unisce il risultato nell’applicazione, perdendo le garanzie e l’efficienza del DBMS.

### I tipi che servono all’esame

L’inner join restituisce solo le coppie che combaciano. I ticket e i loro richiedenti, ma solo se il richiedente esiste. Se un ticket avesse un richiedente_id orfano, sparirebbe da questo risultato. In uno schema con integrità referenziale quell’orfano non dovrebbe esistere.

La left join restituisce tutte le righe della tabella di sinistra, e i dati della destra quando ci sono. Se mancano, le colonne di destra valgono NULL. «Tutti gli utenti, e i ticket se ne hanno aperti» è una left join da utente verso ticket. Gli utenti senza ticket compaiono, con le colonne del ticket nulle. La right join è la simmetrica e si può quasi sempre riscrivere scambiando l’ordine.

Il prodotto cartesiano, la combinazione di ogni riga con ogni riga, è di solito un errore: una join dimenticata nella condizione. Va riconosciuto, perché produce numeri enormi e risultati privi di senso.

NULL significa valore assente, non zero e non stringa vuota. Un confronto `colonna = NULL` non funziona come si aspetta chi viene da altri linguaggi: si usa `IS NULL`. Contare gli utenti senza ticket si fa con una left join e un filtro sui NULL della parte destra, oppure con un NOT EXISTS. Sono due modi corretti.

Le join multiple si leggono un pezzo alla volta. Ticket unito a utente, l’utente unito a ufficio. Ogni join ha la sua condizione. Mescolare le condizioni nel WHERE dopo una left join può trasformarla di fatto in una inner join, perché il filtro scarta i NULL. È un punto fine, ma spiegandolo si mostra di avere usato SQL e non solo di averne letto il nome.


### Nel dettaglio

La INNER JOIN restituisce solo le coppie che combaciano. Un ticket senza commenti non compare, se si parte dai ticket e si chiede il commento. Va bene quando l’assenza non interessa. Va male quando si sta contando i ticket: quelli senza commenti spariscono e il conteggio è sbagliato. La LEFT JOIN tiene tutte le righe della tabella di sinistra, e mette nullo dove a destra non c’è corrispondenza. È lo strumento con cui si vedono le assenze: i ticket senza commenti sono quelli in cui la chiave del commento, dopo la left join, è nulla.

Il filtro sul lato destro, messo nel WHERE, trasforma in silenzio una left join in una inner. Si chiedono i ticket e, se c’è, il commento marcato come interno. Se si scrive la left join e poi WHERE commento.interno = vero, le righe in cui il commento è nullo vengono scartate, perché nullo non è vero. Restano solo i ticket che hanno un commento interno. Il filtro sull’assenza va nella condizione di JOIN, oppure si filtra dopo con un criterio che tiene i nulli. È un punto che vale una domanda orale.

Più join moltiplicano le righe. Un ticket con tre commenti e due assegnatari, unito a entrambe le tabelle senza accortezza, produce sei righe. Un conteggio fatto su quel risultato conta sei, non il ticket. Si aggrega prima, in una sottoquery, oppure si conta con attenzione alle chiavi. Sul foglio conviene dirlo: la join non «aggiunge colonne» in astratto, può moltiplicare i fatti.

Un caso. Si vuole l’elenco degli utenti e quanti ticket hanno aperto, compresi gli utenti che non ne hanno aperto nessuno, perché sono account da disattivare. Inner join li nasconderebbe proprio loro. Left join dagli utenti ai ticket, conteggio dei ticket, e il nullo contato come zero. La frase finale del quesito può essere: l’assenza è un’informazione, e solo la outer join la conserva.

### Esempio

«I ticket che nessuno ha ancora commentato» non è un inner join con i commenti, che farebbe l’opposto. È una left join verso commento, tenendo le righe in cui l’identificativo del commento è nullo. Saper dire questa frase in italiano è più utile che ricordare la sintassi di cinque dialetti.

### In sede di prova

Definire la join come combinazione guidata da una chiave. Distinguere inner e left con lo stesso esempio detto due volte: «solo quelli che hanno» e «tutti, anche quelli che non hanno». Accennare a NULL se si parla di left join.

### Errori da evitare

- Unire tabelle senza una condizione.
- Usare la inner join e poi stupirsi che gli utenti senza ticket siano spariti.
- Trattare NULL come uno zero.

### Approfondire

- [Join](https://it.wikipedia.org/wiki/Join_(SQL))
- [Join](https://it.wikipedia.org/wiki/Join_(SQL))

## Transazioni, proprietà ACID e concorrenza

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** ACID, commit, rollback, isolamento
**Semaforo:** verde

### Inquadramento

Una transazione è un gruppo di scritture che o riescono tutte o non lasciano traccia. Atomicità, coerenza, isolamento e durabilità sono i quattro nomi. La concorrenza è il caso di due persone sullo stesso dato. Sul foglio si raccontano due tecnici che premono insieme, o due prenotazioni della stessa sala, e si dice quale scrittura vince: quella che trova ancora lo stato atteso. L'altra riceve un conflitto. Senza questo racconto, ACID resta una sigla.

### Definizione

Una transazione è un gruppo di operazioni trattate come un’unità: o hanno effetto tutte, o non ne ha effetto nessuna. Il DBMS garantisce, per le transazioni di cui è responsabile, le proprietà note con la sigla ACID.

### Le quattro proprietà

Atomicità. La transazione è indivisibile. Se il sistema cade dopo il primo aggiornamento e prima del secondo, al riavvio nessuno dei due resta applicato a metà. Si conferma con il commit, quando tutto è riuscito, oppure si annulla con il rollback.

Consistenza. La transazione porta il database da uno stato che rispetta i vincoli a un altro stato che li rispetta. Un vincolo di chiave esterna o un controllo che impedisce due prenotazioni sovrapposte non viene lasciato violato fra un’operazione e l’altra in modo visibile all’esterno.

Isolamento. Due transazioni in corso insieme non devono produrre effetti incoerenti come se ciascuna vedesse il lavoro a metà dell’altra. Il livello di isolamento preciso può variare. L’idea da sapere è che senza isolamento si perdono aggiornamenti e si leggono dati mai confermati. Un livello più stretto protegge di più e può far attendere di più.

Durabilità. Dopo il commit, l’effetto resta anche se subito dopo manca la corrente. Il DBMS ottiene questo scrivendo un log su memoria persistente prima di dichiarare conclusa la transazione. È il motivo per cui un disco solo, senza cura del log, non è un dettaglio.

La concorrenza si vede in un caso da tema. Due persone tentano l’ultima ora libera di una sala. Entrambe leggono che la sala è libera. Entrambe inseriscono la prenotazione. Senza una transazione che blocchi l’intervallo, o senza un vincolo che renda impossibile la sovrapposizione, il database accetta entrambi. Il controllo fatto solo nella pagina web, un attimo prima, non basta: fra il controllo e la scrittura l’altra persona ha già scritto. La transazione deve contenere il controllo e la scrittura, e il DBMS deve impedire l’altra scrittura concorrente, con un blocco o con un vincolo di esclusione.

L’isolamento ha anche anomalie con un nome. Lettura sporca: vedere una modifica non ancora confermata, che poi viene annullata. Lettura non ripetibile: rileggere la stessa riga nella stessa transazione e trovare un valore diverso, perché un altro l’ha cambiata e confermata. Aggiornamento perso: due letture dello stesso valore, due scritture, la seconda copre la prima. Saperne descrivere una è sufficiente.


### Nel dettaglio

Una transazione è un gruppo di scritture che deve valere tutto insieme. Spostare una pratica da un ufficio all’altro sono due scritture: toglierla da una coda e metterla nell’altra. Se il sistema cade in mezzo, la pratica non deve stare in entrambe e non deve stare in nessuna. BEGIN, le due operazioni, COMMIT. Se qualcosa fallisce, ROLLBACK, e il database torna a prima del BEGIN. Il giornale rende possibile questo anche se la corrente manca dopo che il COMMIT è stato confermato: al riavvio le operazioni confermate si rifanno.

Atomicità è il tutto o niente. Coerenza è il rispetto dei vincoli alla fine della transazione: chiavi, controlli, e le regole che si sono codificate. Un vincolo può essere violato a metà, dentro la transazione, e deve essere soddisfatto al COMMIT. Isolamento è il rapporto fra transazioni contemporanee. Durabilità è la promessa che, dopo il COMMIT, il dato resta anche se la macchina si spegne. Durabilità non significa «su un secondo sito»: significa su memoria durevole di quel database, secondo la sua configurazione. Un disco che mente sulla scrittura, o un COMMIT che ritorna prima del giornale, indebolisce la promessa.

L’isolamento ha gradi, e il grado massimo ha un costo. Leggere dati non ancora confermati da un’altra transazione è una lettura sporca: si decide su un dato che forse verrà annullato. Il grado che evita questo è il minimo serio. Una lettura ripetibile evita che la stessa query, dentro la transazione, veda due valori diversi perché un altro ha fatto COMMIT in mezzo. Il serializzabile fa come se le transazioni fossero una dopo l’altra. Più si sale, più il database blocca o fa ripetere il lavoro. In un’applicazione di ufficio si sceglie un grado che eviti le letture sporche e si gestisce la doppia modifica con la versione della riga, invece di bloccare tutto il giorno.

Un caso da scrivere. Due operatori prendono in carico lo stesso ticket. La transazione legge lo stato, verifica che sia «aperto», lo porta a «preso». Senza isolamento adeguato o senza controllo di versione, entrambe leggono «aperto» e entrambe scrivono «preso», e due persone credono di averlo. Con la versione, la seconda scrittura non trova più la versione letta e fallisce, e l’operatore rilegge. Si chiude dicendo che il COMMIT è il momento della verità, e che l’applicazione deve gestire il fallimento, non solo il caso felice.

### Esempio

Trasferire un ticket e scrivere nel contempo la riga di storico «assegnato a Rossi» deve essere una transazione. Se lo storico si scrive e l’assegnazione fallisce, non deve restare una traccia di un passaggio che non è avvenuto. Commit solo alla fine. Se l’utente non esiste, rollback, e l’applicazione mostra un errore, non una mezza modifica.

### In sede di prova

Sciogliere l’acronimo con una frase per lettera, non con quattro parole sole. Poi un esempio di concorrenza, meglio se preso dalla traccia: doppia prenotazione, doppia assegnazione, doppio scarico di un bene. Dire che il controllo e la scrittura stanno nella stessa transazione.

### Errori da evitare

- Definire la consistenza come «i dati sono corretti dal punto di vista del mondo». La consistenza ACID è il rispetto delle regole dichiarate al DBMS. Le regole di business non dichiarate non si applicano da sole.
- Pensare che una transazione renda inutile il backup. Un commit errato ma voluto, come una cancellazione sbagliata, è durevole: serve il backup per tornare indietro nel tempo.
- Mettere il controllo di sovrapposizione solo nel browser.

### Svolgimento da consegnare
Una transazione è un gruppo di operazioni trattate come un'unità: o hanno effetto tutte, o non ne ha effetto nessuna. Il DBMS, non l'interfaccia, garantisce le quattro proprietà riassunte in ACID, e solo per le regole che gli sono state dichiarate.

L'atomicità dice che non restano effetti a metà. Se durante il trasferimento di un'assegnazione il sistema cade dopo aver chiuso la riga vecchia e prima di aprire la nuova, al riavvio nessuna delle due modifiche parziali resta. Si conferma con il commit solo quando tutto è riuscito, altrimenti si annulla con il rollback. La consistenza dice che si passa da uno stato che rispetta i vincoli a un altro stato che li rispetta. Qui la parola va usata con precisione: è il rispetto delle chiavi, dei tipi e dei vincoli dichiarati, non la correttezza del mondo. Una regola che esiste solo nella testa dell'analista, e non nel DBMS né nell'applicazione, non viene applicata da sola. L'isolamento dice che due transazioni in corso insieme non devono combinare i loro risultati a metà. La durabilità dice che dopo il commit l'effetto resta anche se manca la corrente: il DBMS scrive un log su memoria persistente prima di dichiarare conclusa l'operazione.

Il caso che in un tema fa la differenza è la concorrenza, non la definizione. Due persone vedono libera la stessa sala nello stesso minuto. Entrambe confermano. Se il controllo «è libera» sta solo nella pagina, e l'inserimento avviene dopo, il database accetta entrambe. Il controllo e la scrittura devono stare nella stessa transazione, e un vincolo del DBMS deve rendere impossibile la seconda conferma: un vincolo di esclusione sugli intervalli, oppure un aggiornamento condizionato allo stato ancora libero. Il messaggio all'utente è un conflitto, non un errore generico. Lo stesso schema vale per due tecnici che prendono in carico lo stesso ticket, o per due scarichi dello stesso bene.

Senza isolamento compaiono anomalie che si possono nominare con un esempio solo, senza un trattato. L'aggiornamento perso: due letture dello stesso valore, due scritture, la seconda copre la prima e il lavoro della prima persona sparisce. La lettura sporca: si vede una modifica non ancora confermata, che poi viene annullata. Non serve elencarle tutte se si è spiegato, con la sala, perché la transazione deve contenere controllo e scrittura. Serve invece non credere che la transazione sostituisca il backup. Un commit sbagliato ma voluto, una cancellazione confermata, è durevole. Per tornare indietro nel tempo serve la copia, non il rollback, che a quel punto non c'è più.

```disegno
titolo: Due prenotazioni nello stesso secondo
passo: 1 | Anna e Luca leggono entrambi: la sala alle 10 è libera.
passo: 2 | La transazione di Anna controlla e inserisce, poi fa commit.
passo: 3 | La transazione di Luca, isolata, trova il vincolo e viene rifiutata.
passo: 4 | Luca vede «intervallo appena occupato» e sceglie un altro orario.
nota: Se il controllo fosse solo nel browser, al passo 3 anche Luca avrebbe scritto.
```

### Approfondire

- [ACID](https://it.wikipedia.org/wiki/ACID)

## Indici, prestazioni e che cosa non indicizzare a caso

**Prove:** seconda prova gruppo 1, orale
**Tag:** indice, chiave, piano di esecuzione
**Semaforo:** giallo

### Inquadramento

Un indice accelera la ricerca e rallenta la scrittura, e occupa spazio. Si mette sulla colonna con cui si filtra davvero, non su tutte. Un indice su una colonna che cambia a ogni aggiornamento può costare più di quanto fa guadagnare. Sul foglio si prende una query dell'elaborato, l'elenco delle mie richieste, e si dice quale colonna indicizzare e quale no. Si ricorda che l'indice non corregge una query che legge l'intera tabella per pigrizia.

### Definizione

Un indice è una struttura ausiliaria, mantenuta dal DBMS, che permette di trovare le righe che soddisfano una condizione senza leggere l’intera tabella. È lo stesso idea dell’indice di un libro: una struttura in più, da tenere aggiornata, che rende selettive le ricerche.

### Come se ne parla senza farsi del male

L’indice sulla chiave primaria esiste quasi sempre, perché il DBMS deve far rispettare l’unicità e trovare la riga. Le chiavi esterne usate nelle join sono candidate naturali: cercare tutti i commenti di un ticket è la query tipica dell’applicazione, e senza indice diventa una scansione.

Un indice accelera le letture che possono usarlo e rallenta le scritture, perché ogni inserimento, modifica della colonna indicizzata e cancellazione deve aggiornare anche l’indice. Occupa spazio. Indicizzare ogni colonna «per sicurezza» peggiora un sistema che scrive molto e spreca memoria.

L’indice serve se la condizione è selettiva. Cercare i ticket di un giorno in una tabella di anni conviene. Un indice su un campo che vale quasi sempre «sì» può non essere usato dal DBMS, che trova più economico leggere la tabella. Il DBMS ha un pianificatore: sceglie se usare l’indice. Si può guardare il piano di esecuzione, e in un orale è elegante dire che le prestazioni si misurano, non si indovinano.

Gli indici non correggono uno schema sbagliato né una query che porta in applicazione centomila righe per mostrarne dieci. Prima si chiede se la query è quella giusta, poi se manca un indice, poi se serve archiviare i dati vecchi.

C’è un indice particolare, l’univoco, che è insieme una struttura di ricerca e un vincolo. L’unicità dell’email si realizza così, non con un controllo fatto a mano prima dell’inserimento: fra il controllo e l’inserimento un’altra transazione può aver inserito la stessa email.


### Nel dettaglio

Senza indice il DBMS trova le righe leggendo la tabella, o una sua parte larga. Con un milione di ticket, cercare quelli di un utente leggendo tutto, a ogni apertura di pagina, diventa il rallentamento. Un indice su utente è una struttura ordinata, spesso un albero, che porta all’identificativo delle righe. La ricerca costa qualche lettura, non un milione. L’indice si paga in scrittura: ogni inserimento e ogni modifica della colonna aggiornano anche l’indice. Una tabella con dieci indici fa dieci lavori a ogni inserimento. Per questo non si indicizza «tutto per sicurezza».

Si indicizza ciò che le query vere filtrano, uniscono e ordinano. La chiave esterna usata nelle join. La colonna dello stato, se gli elenchi sono sempre per stato. La coppia utente e data, se si cerca «i miei ticket degli ultimi giorni»: un indice sulla sola data non basta a evitare il resto del lavoro, e un indice composto si usa da sinistra. Un indice su nome e cognome serve a una ricerca per nome, non a una ricerca per solo cognome, se il nome è la prima colonna. L’ordine nell’indice è una scelta.

Alcune colonne sembrano utili e non lo sono. Una colonna con due valori, aperto e chiuso, su una tabella enorme, può non valere un indice: metà delle righe combacia, e il DBMS preferisce leggere in sequenza. Una colonna che si modifica in continuazione, come un contatore di accessi aggiornato a ogni richiesta, costa cara da indicizzare. Una funzione applicata alla colonna nella query, per esempio la data troncata al giorno, può impedire l’uso dell’indice sulla data, salvo un indice costruito sulla stessa espressione.

Si misura prima di aggiungere. Il piano di esecuzione dice se l’indice è usato. Un indice mai usato occupa spazio e rallenta le scritture. In un elaborato basta: indici sulle chiavi esterne e sui filtri degli elenchi principali, niente indici su ogni colonna, e una verifica del piano sulle query lente. La prestazione si ottiene anche scrivendo la query bene: selezionare solo le colonne che servono, non unire tabelle inutili, paginare l’elenco invece di portare centomila righe al browser.

### Esempio

La schermata elenca i ticket di un richiedente in ordine di data. Un indice su (richiedente_id, aperto_il) permette di trovare quelle righe già ordinate, senza ordinare l’intera tabella a ogni apertura di pagina. L’indice si giustifica perché quella è la lettura più frequente. Non si aggiunge un indice su ogni colonna del commento libero.

### In sede di prova

Definire l’indice come struttura di accesso, non come un vincolo generico. Dire il beneficio sulle letture e il costo sulle scritture. Citare chiave primaria e chiavi esterne come casi ovvi. Se si vuole eccellere, nominare il piano di esecuzione come verifica.

### Errori da evitare

- Confondere indice e chiave. Ogni chiave primaria è indicizzata; non ogni indice è una chiave.
- Promettere che «mettendo gli indici il sistema è veloce».
- Indicizzare un campo di testo libero lungo come se fosse un identificativo.

### Approfondire

- [Indice](https://it.wikipedia.org/wiki/Indice_(database))
- [Indice](https://it.wikipedia.org/wiki/Indice_(database))

## SQL injection e query parametrizzate

**Prove:** seconda prova gruppo 1, seconda prova gruppo 2, orale
**Tag:** SQL injection, prepared statement, input
**Semaforo:** verde

### Inquadramento

L'injection nasce quando un testo scritto dalla persona diventa parte del comando. La difesa è la query parametrizzata: il testo resta un dato, il comando resta un comando. I controlli nel browser non bastano, perché la richiesta si può rifare saltando la pagina. Sul foglio si mostra una frase che, concatenata, chiuderebbe il comando, e la stessa frase trattata come parametro, innocua. Si aggiunge il permesso dell'utente del database, che limita il danno anche se un comando sbagliato passa.

### Definizione

La SQL injection è un attacco in cui dati inviati dall’utente, o da un altro sistema, vengono inseriti nel testo di una query SQL e cambiano il significato della query. Succede quando l’applicazione costruisce la frase SQL concatenando stringhe. La difesa principale è la query parametrizzata: il testo della query è fisso, e i valori viaggiano a parte, come dati, non come codice.

### Come funziona l’attacco

Una ricerca scritta male assomiglia a questo, in uno pseudo-codice: la query è `SELECT * FROM utente WHERE email = '` più il testo arrivato dal modulo, più un apostrofo. Se l’utente scrive un indirizzo normale, la query fa ciò che il programmatore pensava. Se scrive un testo che chiude l’apostrofo e aggiunge `OR 1=1`, la condizione diventa sempre vera e la query restituisce tutti gli utenti. Con tecniche analoghe, dove i permessi del database sono troppo ampi, si leggono altre tabelle, si modificano righe o si cancellano dati. L’attacco non è un malfunzionamento del DBMS. È l’applicazione che ha trattato un dato come se fosse parte del programma.

La query parametrizzata separa i due piani. Il DBMS riceve la frase con un segnaposto e, distintamente, il valore. Il valore può contenere apostrofi, spazi e parole come OR: resta un valore del campo email, e se non esiste quell’email il risultato è vuoto. Negli ambienti moderni questo si chiama prepared statement o query con parametri. Non è la stessa cosa di «sostituire gli apostrofi a mano», rimedio fragile che si dimentica un caso.

La difesa è a strati, non per sfiducia nella parametrizzazione ma perché gli errori tornano. L’account del database usato dall’applicazione non può fare DROP, non legge tabelle che non gli servono, non è amministratore. Gli errori mostrati all’utente non contengono la query né la struttura delle tabelle. Gli input si validano per il loro formato: una data è una data, un identificativo è un identificativo. La validazione migliora la qualità dei dati e non sostituisce i parametri. Anche un valore perfettamente «valido» può essere pericoloso se concatenato.

Le ricerche libere e gli ordinamenti sono i punti in cui chi ha imparato i parametri torna a concatenare, perché il nome della colonna di ORDER BY non può essere un parametro in molti DBMS. Quel nome va scelto da una lista fissa scritta nell’applicazione, non copiato dalla richiesta.


### Nel dettaglio

L’iniezione nasce quando un pezzo di testo digitato dall’utente diventa parte della frase SQL. La query è costruita per concatenazione: la clausola dello stato è apici, più ciò che è arrivato, più apici. L’utente, al posto dello stato, manda un testo che chiude l’apice, aggiunge una condizione sempre vera, e commenta il resto. La frase che il DBMS esegue non è più quella che il programmatore credeva di avere scritto. A seconda di che cosa si è concatenato, si leggono righe di troppo, si aggirà il login, si modificano dati. Non serve un attacco elaborato: basta che il dato contenga un apice, e già una ricerca per nome si rompe. Il fatto che «si rompa» è il segnale. Il fatto che «funzioni lo stesso» può essere il segnale peggiore.

La query parametrizzata separa la frase dai dati. La frase dice: confronta lo stato con un parametro. Il dato arriva a parte, come valore, e il DBMS non lo interpreta come sintassi, qualunque apice o parola contenga. È la misura principale, e sta su ogni query che include un input, anche interno, anche quello che «arriva da un menu e non da un campo libero». I menu si modificano. Anche gli identificativi nell’indirizzo sono input.

I controlli a contorno non sostituiscono il parametro. Filtrare alcuni caratteri dimentica una forma. Affidarsi al fatto che l’utente è interno dimentica i conti compromessi e gli errori. Limitare i privilegi dell’utente con cui l’applicazione si collega limita il danno: quell’utente non è amministratore, non legge le tabelle degli altri sistemi, non esegue comandi di sistema. Se l’iniezione riesce, ottiene solo ciò che l’applicazione poteva già fare. È una rete di sicurezza, sotto il parametro, non al posto.

Sul foglio si mostra una frase concatenata e la stessa con il parametro, sul proprio caso. Si dice dove sta il parametro nel codice: nella chiamata, non nella stringa. Si aggiunge il privilegio minimo dell’utente del database. Tre righe, e l’argomento è chiuso in modo più convincente di una definizione di attacco.

### Esempio

Il modulo di login controlla email e password. Se la query è concatenata, un input costruito può aggirare il controllo della password. La versione corretta usa due parametri e confronta una password che non è mai memorizzata in chiaro: si confronta l’impronta calcolata con una funzione adatta alle password, oppure, meglio, si delega a un sistema di identità. Anche con i parametri, la password non si scrive nel log.

### In sede di prova

Definire l’attacco come confusione fra dati e codice. Mostrare l’idea con una frase, senza bisogno di scrivere un exploit completo. Indicare la query parametrizzata come rimedio principale e i permessi minimi del DBMS come seconda linea. È una delle risposte in cui sicurezza e database si incontrano, e il bando li mette nello stesso gruppo.

### Errori da evitare

- Rispondere «mettiamo un firewall». Il firewall non legge il significato di una query lecita dal punto di vista della rete.
- Dire che basta togliere i caratteri speciali.
- Concatenare i parametri e chiamare comunque la query «parametrizzata».

### Approfondire

- [SQL injection](https://it.wikipedia.org/wiki/SQL_injection)

## Relazionale e non relazionale

**Prove:** seconda prova gruppo 1, orale
**Tag:** NoSQL, documento, chiave-valore, coerenza
**Semaforo:** giallo

### Inquadramento

Il relazionale è forte su vincoli, join e transazioni. Il non relazionale è forte su documenti molto variabili, su volumi particolari o su strutture che non sono tabelle. La scelta segue la forma del dato della traccia. Stati, ruoli, sale e scadenze sono relazioni. Un allegato o un testo libero può stare in una colonna, senza cambiare motore. Sul foglio si sceglie il relazionale per il cuore del sistema e si dice quale pezzo, se mai, starebbe fuori. Introdurre un secondo motore per moda è una complicazione da rifiutare.

### Definizione

Un DBMS relazionale organizza i dati in tabelle collegate e offre SQL, transazioni ACID e vincoli. I DBMS non relazionali, detti spesso NoSQL, organizzano i dati in altri modi: documenti, coppie chiave-valore, famiglie di colonne, grafi. Rinunciano ad alcune garanzie o ad alcuni schemi rigidi per ottenere flessibilità o scala orizzontale su grandi volumi.

### Come scegliere senza trasformare la risposta in un catalogo

Il relazionale è la scelta predefinita di un tema d’esame su un’applicazione gestionale. I dati hanno una struttura stabile, i legami contano, le transazioni contano, le interrogazioni combinano più entità. Prenotazioni, fascicoli, utenti, inventario: sono relazionali. Gli strumenti sono maturi e le persone li conoscono.

Un deposito chiave-valore è adatto a recuperare un oggetto data la sua chiave, molto in fretta: una sessione, una cache, un carrello temporaneo. Non è adatto a «tutti gli oggetti il cui stato è aperto e il cui ufficio è questo», se questa è la domanda principale.

Un deposito a documenti tiene un documento intero, spesso in JSON, con una struttura che può evolvere. È comodo quando l’unità di lettura e di scrittura è il documento, e i legami fra documenti sono pochi. Diventa scomodo quando si devono combinare molti documenti e mantenerli coerenti fra loro: quella coerenza, che nel relazionale è una chiave esterna, torna a carico dell’applicazione.

I sistemi distribuiti parlano spesso di coerenza eventuale: dopo una scrittura, non tutti i nodi vedono subito il nuovo valore. È accettabile per un contatore di visite, non per il saldo di una prenotazione che non deve sovrapporsi. Se si cita un NoSQL in un tema, dire quale garanzia si sta abbandonando.

In molti sistemi veri le due famiglie convivono. Il gestionale è relazionale. La cache delle sessioni è chiave-valore. La ricerca testuale sta in un motore di ricerca dedicato, alimentato dal database, non al posto del database.


### Nel dettaglio

Il relazionale mette i dati in tabelle collegate, con uno schema dichiarato prima, vincoli, e transazioni mature. Si sceglie quando i fatti sono stabili e si incrociano: utenti, ticket, commenti, uffici. Le domande future, non previste il primo giorno, si scrivono in SQL unendo le tabelle. Lo schema che cambia ogni settimana è il suo punto debole: aggiungere una colonna si fa, ridisegnare i legami continuamente no.

I non relazionali non sono uno solo. Il documento tiene un oggetto intero, per esempio il ticket con i commenti dentro, e lo recupera per identificativo in un colpo, senza join. È comodo quando si legge sempre tutto insieme e si scrive tutto insieme. Diventa scomodo quando si vogliono i commenti di tutti i ticket di un ufficio: il dato è sepolto dentro gli oggetti, oppure è stato copiato fuori, e le copie vanno tenute d’accordo. La chiave-valore tiene un valore per chiave, veloce, senza struttura: sessioni, cache. Se si perde, si ricostruisce. Non è il posto dell’unica copia di una pratica. Il colonnare e l’analitico servono a leggere grandi volumi per colonne, nei cruscotti, non a prendere in carico un ticket. Il grafo tiene nodi e archi, e si nomina solo se il problema è davvero una rete di relazioni variabili.

La coerenza è il punto di esame. Il relazionale, nella sua configurazione ordinaria, preferisce la coerenza immediata: dopo il COMMIT tutti leggono il dato nuovo. Diversi sistemi non relazionali distribuiti preferiscono restare disponibili anche se i nodi non si sono ancora accordati, e la lettura può vedere un dato vecchio per un poco. Per un contatore di «mi piace» può andare. Per lo stato di una pratica, due operatori che vedono due stati diversi sono un incidente. Si può avere coerenza anche fuori dal relazionale, e si deve dire che la si è chiesta.

In un elaborato di un ente la scelta di default è il relazionale, detta con il motivo: fatti collegati, vincoli, transazioni, domande non tutte previste. Un deposito non relazionale si aggiunge per un compito preciso, la sessione o la cache, e si dice che non è l’archivio. Usare un documento perché «è moderno», tenendoci dentro le pratiche con i vincoli ricostruiti nel codice, sposta nel codice ciò che il DBMS già faceva.

### Esempio

Per i ticket si sceglie un relazionale: stati, ruoli, storico e report sono interrogazioni e vincoli. Si può affiancare una cache per la pagina più letta. Scegliere un deposito a documenti solo perché «è moderno» obbligherebbe a reimplementare nell’applicazione l’unicità, le transazioni e i report. Va motivato un bisogno, per esempio documenti di forma molto variabile che si leggono sempre per intero, non un’etichetta.

### In sede di prova

Partire dal bisogno: legami, transazioni, interrogazioni. Concludere che il relazionale è la scelta del caso, oppure spiegare il bisogno specifico che lo farebbe scartare. Distinguere cache e database. Non serve un elenco di prodotti.

### Errori da evitare

- Dire che il relazionale è superato. Non lo è, per i dati gestionali.
- Dire che NoSQL significa «niente schema e quindi più semplice». Lo schema finisce nell’applicazione, dove è più facile dimenticarlo.
- Usare un database a documenti e poi simulare le join nell’applicazione per ogni schermata.

### Approfondire

- [NoSQL](https://it.wikipedia.org/wiki/NoSQL)
- [JSON](https://it.wikipedia.org/wiki/JSON)

## Come si costruisce lo schema dati in un elaborato

**Prove:** prima prova
**Tag:** entità, schema logico, storico
**Semaforo:** verde

### Inquadramento

Lo schema dell'elaborato ha poche entità, le chiavi, le cardinalità e un vincolo che l'interfaccia non può garantire da sola. Lo storico non si cancella quando una persona lascia l'ente: si disattiva. Sul foglio si disegnano le entità e si scrive, accanto, la frase del vincolo. Poi si richiama quel vincolo nella sezione sull'architettura, così il database e il racconto sono lo stesso progetto. Un quinto diagramma decorativo, senza vincolo, non aggiunge punti.

### Definizione

Lo schema dati di un elaborato è il disegno delle entità, dei legami e dei vincoli necessari a soddisfare i requisiti della traccia. Non è il catalogo di tutte le colonne che verranno in mente. È la prova che i dati ci sono, non si contraddicono e si possono interrogare per le funzioni chieste.

### Un metodo ripetibile in mezz’ora

Si elencano i sostantivi della traccia: sale, prenotazioni, persone, documenti, beni. Si scartano quelli che sono solo attributi. «Priorità» è di solito un attributo del ticket, non un’entità, salvo che la traccia le dia una vita propria.

Per ogni entità rimasta si scrive la chiave e cinque o sei attributi che servono a un requisito. Il resto si riassume con «altri dati anagrafici», per non consumare il tempo.

Si disegnano i legami e si scrive la cardinalità. Dove c’è un molti-a-molti si disegna la tabella ponte. Si marca ciò che è obbligatorio.

Si confronta lo schema con le funzioni. «Il responsabile vede i tempi medi per ufficio»: allora il ticket ha l’ufficio, o lo ha l’utente, e ha le date di apertura e chiusura. Se una funzione non ha i dati, manca un attributo. Se un dato non serve a nessuna funzione né a un vincolo, si può togliere.

Lo storico si decide in modo esplicito. Gli enti raramente cancellano sul serio. Un utente si disattiva. Un ticket chiuso resta. Le modifiche di stato si possono scrivere in una tabella di eventi, sottile: chi, che cosa, quando. Quella tabella risolve audit, contestazioni e report, e costa poche righe di spiegazione.

Si dice chi può leggere che cosa, almeno con una frase: il richiedente vede i propri ticket, il tecnico vede la coda del proprio gruppo, l’amministratore vede tutto. Il permesso è un requisito dei dati oltre che dell’interfaccia.

Si chiude con il DBMS e con la concorrenza, in cinque righe: relazionale, transazioni per le operazioni che non devono restare a metà, backup con un RPO detto.


### Nel dettaglio

Si parte dai fatti che il tema deve ricordare, non dalle schermate. Per un’assistenza i fatti sono: la persona, il ticket, il cambio di stato, il commento, l’eventuale allegato. Ogni fatto diventa una tabella quando ha una sua vita. Il cambio di stato ha una vita: chi l’ha fatto, quando, da quale stato a quale. Tenerlo solo come colonna «stato attuale» sul ticket perde la storia, e la storia in un ente è spesso il vero requisito. L’allegato ha una vita: nome, tipo, dove sta il file, chi l’ha caricato. Il file in sé non sta nella tabella. Sta su uno storage, e la tabella tiene il riferimento. Mettere il file dentro la riga appesantisce ogni copia e ogni backup del database.

Le colonne si scrivono solo se si sa da dove arrivano e a che servono. Identificativo, chiavi esterne, pochi attributi, le date di creazione e di modifica, chi ha modificato. Una colonna «note» in ogni tabella è il segno che lo schema non è finito: dentro le note finiscono i fatti che poi non si sanno interrogare. I vincoli si scrivono accanto: chiave primaria, chiave esterna, unicità dove serve, per esempio un solo incarico aperto per ticket, e i controlli semplici, come uno stato fra un elenco chiuso.

Il vincolo difficile, quello che il tema chiede, si traduce in una regola di unicità o in una transazione. Due prenotazioni della stessa sala che si sovrappongono non si impediscono con una chiave semplice, perché gli intervalli non sono un valore uguale. Si impediscono nella transazione: si controlla che non esista una prenotazione sovrapposta e si inserisce, in isolamento tale che due controlli contemporanei non passino entrambi. Sul foglio si descrive questo controllo in quattro righe. È il punto in cui lo schema smette di essere un disegno e diventa una regola.

Si chiude con ciò che non si mette. Niente colonna per ogni permesso: i permessi stanno nel ruolo, e l’utente ha un ruolo, oppure ha righe in una tabella di autorizzazioni se i permessi variano per oggetto. Niente copia del nome della persona su ogni ticket, salvo lo storico dichiarato. Niente tabella «generica» con colonne valore1, valore2. Tre o quattro tabelle ben dette battono dieci tabelle abbozzate.

### Esempio

Traccia sulle sale. Entità: Utente, Sala, Prenotazione, e se la traccia chiede i report per ufficio anche Ufficio. Prenotazione riferisce sala e utente, ha inizio, fine e stato. Un vincolo impedisce due prenotazioni confermate della stessa sala con intervalli sovrapposti. La cancellazione è uno stato «annullata», non una DELETE che fa sparire l’abuso di chi prenota e disdice sempre. Il report «ore utilizzate per sala nel mese» si ottiene da Prenotazione senza altre tabelle.

### In sede di prova

Seguire il metodo e fermarsi. Uno schema di quattro entità coerenti batte uno schema di dodici entità illeggibili. Scrivere accanto a ogni legame la cardinalità. Nominare un vincolo che non sia la chiave primaria.

### Errori da evitare

- Copiare uno schema imparato a memoria che non contiene i sostantivi della traccia.
- Cancellare davvero i dati che la traccia chiede di consuntivare.
- Dimenticare le date, senza le quali non esistono né report né controlli di sovrapposizione.

### Approfondire

- [Modello entità-relazione](https://it.wikipedia.org/wiki/Modello_E-R)
- [Chiave](https://it.wikipedia.org/wiki/Chiave_(basi_di_dati))

## Viste, vincoli e trigger

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** vincolo, vista, trigger, integrità
**Semaforo:** verde

### Inquadramento

Il vincolo rifiuta una riga impossibile. La vista mostra una domanda salvata, e protegge una colonna solo se manca il permesso sulla tabella sotto. Il trigger reagisce a una modifica, e sta bene per lo storico, male per nascondere la regola principale. Sul foglio si assegna un compito a ciascuno dei tre, presi dalla traccia. La presa in carico unica resta una transazione. Il trigger, se c'è, registra che è avvenuta.

### Definizione

Il database non è solo un posto dove si scrivono righe. Può rifiutare una riga impossibile, mostrare una porzione dei dati senza copiarli, ed eseguire un'azione ogni volta che una riga cambia. Sono tre strumenti diversi. Il vincolo difende l'integrità. La vista semplifica la lettura e, se i permessi sono messi bene, nasconde ciò che non va letto. Il trigger reagisce a una modifica. Nessuno dei tre sostituisce il controllo nell'applicazione, e l'applicazione non sostituisce il vincolo.

### I tre strumenti

Il vincolo è una regola che il motore applica a ogni scrittura. L'unicità del numero di richiesta. Il fatto che il tecnico assegnato, se c'è, esista fra gli utenti. Uno stato che può valere solo «aperta», «presa in carico» o «chiusa». Se l'applicazione ha un difetto e prova a scrivere uno stato inesistente, il motore rifiuta. Per questo i vincoli si mettono anche quando «l'interfaccia già controlla»: l'interfaccia non è l'unica strada per arrivare al database.

La vista è una domanda salvata, con un nome. Chi la legge vede il risultato, non una seconda copia dei dati. Serve a non riscrivere la stessa join in dieci punti, e a dare a un ufficio solo le colonne che gli servono. Diventa un confine di sicurezza solo se quell'ufficio non ha il permesso di leggere la tabella sotto. Una vista più un permesso identico sulla tabella non nasconde nulla.

Il trigger è codice del database che parte su un inserimento, un aggiornamento o una cancellazione. È il posto adatto per scrivere una riga di storico: «a quest'ora, questo utente, ha cambiato questo stato». È un posto cattivo per nascondere la regola principale dell'applicazione, perché chi legge il programma non la vede, e perché un trigger che chiama altri trigger diventa inspiegabile il giorno del guasto. La presa in carico unica si fa con un aggiornamento condizionato dentro una transazione. Il trigger, se serve, registra che è avvenuta. Non è lui, da solo, a decidere chi vince la gara fra due tecnici.

```disegno
titolo: Chi ferma una riga impossibile
riga: Applicazione | controlla per rispondere in fretta all'utente
freccia: la scrittura arriva comunque al motore
riga: Vincolo | rifiuta stato sconosciuto, chiave duplicata, riferimento a vuoto
freccia: se la scrittura è lecita
riga: Trigger di storico | aggiunge l'evento, non inventa la regola
nota: La vista non è una copia. Nasconde una colonna solo se manca il permesso sulla tabella.
```


### Nel dettaglio

La vista è una query con un nome. Chi la legge vede una tabella, e dietro c’è una SELECT. Serve a dare a un ufficio solo le colonne che gli servono, a non ripetere in ogni programma una join lunga, a tenere ferma la forma di un elenco anche se sotto le tabelle cambiano un poco. Non è una copia: i dati restano nelle tabelle, e la vista li ricalcola, salvo le viste materializzate, che sono una copia mantenuta e vanno aggiornate. Dare i permessi sulla vista e non sulle tabelle sotto è un modo pulito di limitare la lettura. Va ricordato che una vista semplice può essere aggiornabile, e una vista di join complesse di solito no: provare a usarla come tabella di scrittura delude.

Il vincolo è una regola che il DBMS rifiuta di violare. Not null, unicità, chiave esterna, controllo su un elenco o su un intervallo. Il vincolo di unicità su una coppia, per esempio un solo ruolo per utente e ufficio, esprime una regola di lavoro in una riga. È meglio di un controllo solo nell’applicazione, perché vale anche per lo script di importazione e per la query scritta a mano. Il limite del vincolo è ciò che sa vedere: una riga, o un’unicità. Una regola che guarda il tempo, come le prenotazioni che non si sovrappongono, spesso non entra in un vincolo semplice, ed entra nella transazione.

Il trigger è codice del database che parte da solo su un inserimento, una modifica, una cancellazione. Si usa con parsimonia, per ciò che deve accadere comunque: scrivere una riga di audit che l’applicazione non deve poter dimenticare, mantenere un totale, impedire una modifica di una riga già protocollata. Diventa un problema quando contiene le regole di lavoro nascoste. La persona che legge l’applicazione non vede il trigger, la prova automatica non lo vede, e un secondo trigger che parte dal primo produce effetti a catena difficili da spiegare. In un orale, la posizione equilibrata è: vincoli per la struttura, trigger per l’audit e per i divieti che devono valere per ogni via d’accesso, regole di ufficio nell’applicazione, dove si provano.

Sul foglio, per il proprio tema, si nomina un vincolo, una vista e, se serve, un solo trigger. Per esempio: unicità dell’incarico aperto, vista dei ticket dell’ufficio senza le colonne interne, trigger che vieta l’update di una pratica già chiusa e verbalizzata. Tre oggetti, tre motivi.

### Esempio

La richiesta ha un vincolo sullo stato e un vincolo di unicità sul numero visibile all'utente. La presa in carico è un aggiornamento che riesce solo se lo stato è ancora «aperta»: la seconda richiesta concorrente non sovrascrive. Un trigger inserisce l'evento con l'attore e l'ora, e da quegli eventi il responsabile calcola il tempo medio. Una vista «richieste del mio gruppo» serve al tecnico. Il permesso di leggerla non include la tabella degli utenti con l'identificativo esterno, che al tecnico non serve.

### In sede di prova

Definire i tre nomi con tre verbi: il vincolo rifiuta, la vista mostra, il trigger reagisce. Mettere nel database il vincolo che non si può fidare di lasciare solo all'interfaccia. Dire esplicitamente che la vista protegge solo insieme ai permessi. Usare il trigger per lo storico, non per la regola di business principale.

### Errori da evitare

- Fidarsi del solo controllo nella pagina.
- Credere che una vista sia un backup o una copia fisica.
- Spostare tutta la logica in trigger che nessuno riesce più a seguire.

### Approfondire

- [Base di dati](https://it.wikipedia.org/wiki/Base_di_dati)
- [Chiave](https://it.wikipedia.org/wiki/Chiave_(basi_di_dati))
- [Transazione](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))

## OLTP e data warehouse

**Prove:** seconda prova gruppo 1
**Tag:** OLTP, warehouse, report, storico
**Semaforo:** giallo

### Inquadramento

L'operatività registra il fatto mentre accade, con vincoli e scritture brevi. L'analisi somma lo storico e può aspettare fino al giorno dopo. Tenere i due carichi sulla stessa istanza, all'ora di sportello, rende lento il servizio. Sul foglio si dice dove sta il dato di adesso e dove sta il conto. In un tema piccolo basta una replica di lettura. Il warehouse si introduce quando i volumi lo chiedono, e anche lì si portano solo le colonne necessarie.

### Definizione

Un sistema operativo dei dati, nel senso gestionale e non nel senso del sistema operativo della macchina, registra i fatti mentre accadono: una richiesta aperta, una prenotazione, un passaggio di stato. Si chiama spesso OLTP, elaborazione delle transazioni correnti. Un data warehouse è un archivio separato, costruito per le domande sullo storico: quanti, in quale anno, con quale tendenza. I due servono a scopi diversi e, se si costringono a essere lo stesso database senza dirlo, o il servizio rallenta o i conti tornano male.

### Perché si separano

Il database dell'applicazione è normalizzato, aggiornato da molte scritture brevi, e deve rispondere alla persona che aspetta. Le integrità contano. Una query analitica che somma cinque anni di eventi, con join larghe, compete con quelle scritture per memoria e disco. Alle nove del lunedì, l'ufficio che «vuole solo un report» può rendere lente le prese in carico.

Il warehouse riceve copie, a intervalli, attraverso un passaggio di estrazione, trasformazione e carico. I dati sono riorganizzati per essere letti: spesso una tabella dei fatti, le richieste chiuse, e tabelle di dimensione, il tempo, l'ufficio, la categoria. Si accetta un ritardo. Il report delle otto di mattina racconta ieri, non l'ultimo secondo, e questo va scritto. Non è il posto in cui si apre una richiesta nuova: ci vorrebbe un ritorno indietro verso l'operatività, e si romperebbe il confine.

Non ogni elaborato ha bisogno di un warehouse. Se il responsabile vuole il tempo medio del suo settore nell'ultimo mese, e i volumi sono diecimila richieste, una query sul database operativo, magari su una replica di sola lettura, basta. Il warehouse si introduce quando lo storico è grande, le domande sono ricorrenti e si vuole non toccare il servizio. Introdurlo «perché esiste» aggiunge un flusso da tenere allineato, da proteggere e da spiegare.

I dati personali non diventano meno personali perché sono in un archivio di analisi. Si portano solo le colonne necessarie, si definisce per quanto restano, e l'accesso al warehouse ha i suoi permessi, non quelli copiati in blocco dall'applicazione.

```disegno
titolo: Due domande, due posti
riga: Operatività | scritture brevi, dato di adesso, vincoli
freccia: copia periodica, non la stessa transazione
riga: Analisi | somme e tendenze, dato di ieri, sola lettura
nota: Il report pesante non si fa sulla stessa coda che l'utente sta usando, se i volumi lo rendono lento.
```


### Nel dettaglio

OLTP è il lavoro del giorno: tante operazioni brevi, ciascuna su poche righe, con transazioni, con utenti che aspettano la risposta. Prendere in carico, protocollare, prenotare. Lo schema è normalizzato perché le scritture devono toccare il dato in un punto solo. Gli indici servono a trovare quella riga. Un report pesante, che legge dieci anni di righe e le aggrega, fatto su questo database mentre gli sportelli lavorano, compete con loro per disco e CPU e rallenta lo sportello. È il sintomo che si stanno mescolando due lavori.

Il data warehouse è l’altro lavoro: poche query, larghe, in lettura, su dati storici, per un cruscotto o per un adempimento. Lo schema si organizza per la domanda, non per la scrittura. Una forma a stella tiene al centro i fatti, per esempio una riga per ticket chiuso con i suoi numeri, e intorno le dimensioni: tempo, ufficio, tipo. Si accetta la ripetizione. Non ci si prenota sopra. I dati arrivano a intervalli, con un caricamento che estrae, pulisce e carica. Il ritardo fra il dato vivo e il cruscotto è dichiarato: di ieri sera, non di adesso. Chi ha bisogno del numero di adesso legge il sistema vivo, con una query pensata per quello, non il warehouse.

Il caricamento ha i suoi controlli. Si contano le righe estratte e le righe caricate. Si decide che cosa fare degli identificativi sconosciuti e dei doppioni. Un caricamento che fallisce a metà non deve lasciare una giornata mezza dentro: anche qui vale il tutto o niente, oppure una partizione per giornata che si sostituisce intera. La copia analitica non sostituisce il backup del sistema vivo, e il sistema vivo non si usa come archivio storico cancellando le righe «tanto sono nel cruscotto».

In un elaborato, se il tema è operativo, si progetta l’OLTP e si dice che i report pesanti non girano in orario di sportello, oppure girano su una replica di lettura. Se il tema chiede indicatori, si aggiunge una copia analitica con il ritardo ammesso. Sul foglio la distinzione sta in due frasi: dove si scrive il fatto, e da dove si legge il totale.

### Esempio

Il portale di assistenza scrive sulla base operativa. Di notte una procedura copia, su una replica già dedicata alle letture, i totali per gruppo e per giorno. Il responsabile interroga quella replica. Se un giorno i volumi crescono di due ordini, quella replica può diventare un warehouse vero, con i fatti e le dimensioni. Finché non serve, non lo si costruisce. Si scrive il criterio: «quando il report mensile disturba le transazioni, si sposta».

### In sede di prova

Definire i due scopi: registrare l'adesso, interrogare lo storico. Dire che il warehouse è in ritardo rispetto al servizio, di proposito. Non proporlo in un elaborato piccolo. Proporre una replica di lettura se il tema chiede indicatori e il volume è modesto. Ricordare che la copia analitica ha comunque permessi e minimizzazione.

### Errori da evitare

- Far girare il cruscotto direzionale sulla stessa istanza, nelle ore di sportello, senza averlo nemmeno nominato come rischio.
- Scrivere nel warehouse come se fosse il database dell'applicazione.
- Copiare nel warehouse tutte le colonne, compresi i testi liberi che non servono al conto.

### Approfondire

- [Elaborazione delle transazioni](https://it.wikipedia.org/wiki/Online_transaction_processing)
- [Data warehouse](https://it.wikipedia.org/wiki/Data_warehouse)
- [Base di dati](https://it.wikipedia.org/wiki/Base_di_dati)

## Anomalie di concorrenza: lettura sporca, lettura non ripetibile, fantasma

**Prove:** seconda prova gruppo 1, orale
**Tag:** isolamento, concorrenza, anomalie
**Semaforo:** verde

### Inquadramento

La domanda chiede che cosa vede una transazione del lavoro delle altre. Si raccontano tre anomalie con un caso di ufficio, e si dice quale non si accetta.

### Definizione

La lettura sporca legge un dato già modificato da un'altra transazione che potrebbe ancora annullarsi. La lettura non ripetibile rilegge la stessa riga e la trova cambiata perché un'altra transazione ha nel frattempo confermato. Il fantasma rilegge un insieme, con la stessa condizione, e trova righe nuove o non trova più righe che c'erano.

### Nel dettaglio

La lettura sporca è la più pericolosa per un ufficio. Si legge che il ticket è chiuso, si decide di conseguenza, e l'altra transazione annulla: il ticket è aperto e la decisione poggia sul nulla. Quasi ogni motore, al livello ordinario, la impedisce. Le altre due, in molti sistemi al livello chiamato read committed, possono accadere. Si rilegge lo stato e qualcuno l'ha cambiato. Si riconta l'elenco e nel frattempo è entrato un ticket. Per un elenco va spesso bene. Per un controllo che decide se prenotare, no: fra il conteggio e l'inserimento il fantasma è esattamente la doppia prenotazione.

Si alza l'isolamento solo per quella transazione, sapendo che il motore bloccherà di più o farà ripetere il lavoro. Oppure si usa un vincolo, una unicità o un blocco della riga, che è più chiaro di un isolamento massimo su tutto. In un tema si nomina l'anomalia che il proprio vincolo deve impedire e lo strumento, senza mettere il massimo isolamento su ogni lettura dell'elenco.

### Esempio

Due operatori contano le prenotazioni della sala alle dieci e non ne trovano, entrambi, e entrambi inseriscono. È un fantasma. Si impedisce con la transazione che blocca l'intervallo o con un vincolo di esclusione, non chiedendo all'elenco di essere «abbastanza aggiornato».

### In sede di prova

Tre anomalie, un caso ciascuna, quale si impedisce sempre, quale si impedisce sul vincolo e non su tutto il sistema.

### Errori da evitare

- Trattare le tre anomalie come sinonimi.
- Mettere l'isolamento massimo su ogni query e non spiegare il costo.
- Impedire il fantasma solo rifacendo la lettura a mano, senza un vincolo.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [Isolamento (basi di dati)](https://it.wikipedia.org/wiki/Isolamento_(basi_di_dati))

## Deadlock: come nasce e come si esce

**Prove:** seconda prova gruppo 1, orale
**Tag:** deadlock, lock, transazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché due operazioni oneste si bloccano per sempre. Si racconta l'incrocio e la cura, che è disfare una delle due, non aspettare.

### Definizione

Un deadlock è un'attesa circolare: una transazione tiene un blocco e aspetta quello che tiene l'altra, che a sua volta aspetta il primo. Nessuna può procedere. Il motore ne sceglie una, la annulla, e l'applicazione deve ritentare.

### Nel dettaglio

L'incrocio classico: la prima transazione aggiorna il ticket e poi la riga dell'utente. La seconda fa il contrario, prima l'utente e poi il ticket. Con un po' di sfortuna ciascuna tiene ciò che l'altra aspetta. La cura di disegno è prendere i blocchi sempre nello stesso ordine, per esempio prima l'utente e poi il ticket, in ogni transazione. L'ordine comune toglie il circolo.

Il motore non lascia l'attesa eterna. Dopo un tempo, o appena riconosce il circolo, annulla una vittima e restituisce un errore. L'applicazione che mostra l'errore all'utente e si ferma ha fatto metà del lavoro. Deve ritentare la transazione un numero piccolo di volte, perché al secondo giro l'altra avrà finito. Ritentarla all'infinito, se la causa non è un deadlock ma un dato sbagliato, riaccende il carico. Si ritenta solo l'errore di deadlock o di serializzazione, non tutti gli errori.

Le transazioni corte riducono la probabilità. Una transazione che tiene un blocco mentre aspetta un utente al telefono è un invito al deadlock e un fermo dello sportello. Il dialogo con la persona sta fuori dalla transazione. Dentro ci stanno il controllo e la scrittura.

### Esempio

Due prese in carico si incrociano. Il motore annulla la seconda. L'applicazione riprova da sola, una volta, e va a buon fine. L'utente non vede l'errore. Se anche il secondo giro fallisce, allora sì si chiede di riprovare, con un messaggio chiaro.

### In sede di prova

Il circolo, l'ordine uguale dei blocchi, la vittima annullata, il ritento nell'applicazione, le transazioni corte.

### Errori da evitare

- Aspettare che il deadlock si sciolga da solo senza una vittima.
- Ritentare qualunque errore come se fosse un deadlock.
- Tenere aperta una transazione durante un'attesa umana.

### Approfondire

- [Deadlock](https://it.wikipedia.org/wiki/Deadlock)
- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))

## Ripristino a un istante e giornale delle transazioni

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** PITR, giornale, backup
**Semaforo:** verde

### Inquadramento

La domanda serve quando un errore è avvenuto alle undici e il backup è della notte. Si spiega come si ricostruisce lo stato delle dieci e cinquantanove, non solo quello di mezzanotte.

### Definizione

Il ripristino a un istante riparte da un backup e riapplica il giornale delle transazioni fino al momento scelto, fermo prima dell'errore. Il giornale annota le modifiche in ordine. Senza giornale si torna solo all'ora del backup.

### Nel dettaglio

Il completo di domenica più il giornale continuo permette di arrivare a un secondo qualsiasi del giovedì, prima della cancellazione sbagliata. L'RPO diventa il ritardo con cui il giornale è al sicuro, spesso secondi, non l'intervallo fra un completo e l'altro. Il giornale va copiato spesso e fuori dal disco dei dati. Un giornale sullo stesso disco del database brucia con lui, e il ripristino a un istante non esiste più nel momento in cui serve.

Si sceglie l'istante con cura. Troppo avanti e si ripete l'errore. Troppo indietro e si perdono ore di lavoro onesto, da rifare. I registri applicativi aiutano a sapere il minuto della cancellazione. Si ripristina su un altro sistema, si verifica, e solo allora si decide se sostituire la produzione. Ripristinare sopra la produzione, al primo tentativo, toglie anche la possibilità di riprovare con un minuto diverso.

Il giornale cresce. Si conserva finché il backup su cui poggia è ancora da tenere, poi si può buttare la parte precedente. Buttarlo prima, per fare spazio, buca la catena: dal completo fino a oggi manca un pezzo e non si arriva all'istante.

### Esempio

Alle undici e dieci una query cancella un ufficio. Il completo è di domenica, il giornale è continuo su un altro disco. Si ripristina su una macchina di prova fino alle undici e nove, si esportano le righe giuste, si reinseriscono in produzione. La produzione non è stata spenta per tutto il giorno.

### In sede di prova

Backup più giornale, RPO legato a dove sta il giornale, scelta dell'istante, prova su un altro sistema, catena senza buchi.

### Errori da evitare

- Tenere il giornale sullo stesso disco dei dati.
- Ripristinare direttamente sopra la produzione al primo colpo.
- Cancellare giornali ancora necessari all'ultimo completo.

### Approfondire

- [Write-ahead logging](https://it.wikipedia.org/wiki/Write-ahead_logging)
- [Backup](https://it.wikipedia.org/wiki/Backup)

## Backup logico e backup fisico del database

**Prove:** seconda prova gruppo 1, orale
**Tag:** dump, backup fisico, database
**Semaforo:** giallo

### Inquadramento

La domanda chiede in che forma si copia un database. Si distinguono i comandi SQL che ricostruiscono le righe dai file copiati così come sono, e si dice quando si usa ciascuno.

### Definizione

Il backup logico esporta i dati come istruzioni o come righe, da reimportare anche su un'altra versione del motore. Il backup fisico copia i file del motore, ed è più veloce e più legato a quella versione e a quella configurazione.

### Nel dettaglio

Il logico si legge, si filtra, si porta su un altro motore, si tiene per anni con più speranza di riaprirlo. È lento su grandi volumi e, mentre esporta, deve ottenere una vista coerente, altrimenti mette insieme righe di momenti diversi. Si usa per gli archivi da conservare, per gli ambienti di prova, per le tabelle piccole che si vogliono poter guardare. Non è il modo più rapido di rialzare un database da un terabyte.

Il fisico si ripristina in fretta, si combina con il giornale per l'istante, e occupa quanto il database. Non si apre con un editor. Non si sposta facilmente a una versione diversa. È la scelta per l'RTO corto. I due insieme sono ragionevoli: fisico per rialzarsi, logico periodico per portarsi via i dati e per non dipendere da un solo formato.

In entrambi i casi la prova è il ripristino. Un dump mai reimportato può essere troncato. Un fisico mai riaperto può mancare di un file. Si scrive quale dei due risponde all'RTO del tema e quale serve all'uscita e alla conservazione.

### Esempio

Ogni notte, copia fisica per rialzare il servizio entro quattro ore, con il giornale. Ogni domenica, export logico delle tabelle, tenuto per ricaricare una prova e per non restare legati al motore. Una volta al mese si reimporta l'export in una prova vuota.

### In sede di prova

Velocità e fedeltà del fisico, portabilità del logico, coerenza durante l'export, entrambi se i bisogni sono due.

### Errori da evitare

- Fare solo un export logico e promettere un RTO di minuti su un terabyte.
- Fare solo il fisico e non avere un modo di uscire dal motore.
- Esportare senza una vista coerente e chiamarlo backup.

### Approfondire

- [Database](https://it.wikipedia.org/wiki/Database)
- [Backup](https://it.wikipedia.org/wiki/Backup)

## Privilegi nel database: chi può leggere che cosa

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** GRANT, privilegi, minimo privilegio
**Semaforo:** verde

### Inquadramento

La domanda porta il minimo privilegio dentro il motore. Si distinguono l'utente dell'applicazione, la persona che amministra, e chi guarda solo i report.

### Definizione

Un privilegio è il permesso, dato a un utente del database, di compiere un'azione su un oggetto: leggere una tabella, scriverne una, eseguire una funzione, alterare lo schema. Si concedono quelli necessari e nessun altro.

### Nel dettaglio

L'applicazione si collega con un utente che legge e scrive le tabelle del servizio e non altera lo schema, non legge le tabelle di un altro schema, non è amministratore. Un difetto di iniezione, con questo utente, non cancella il motore e non legge gli stipendi se stanno altrove. Le persone non usano questo utente. Ciascun amministratore ha un conto nominativo, così il registro dice chi ha alterato una tabella alle tre di notte.

I report usano un utente che legge solo le viste predisposte, non le tabelle di base, e non scrive. Un foglio di un ufficio collegato con l'utente dell'applicazione è un programma che può modificare le pratiche, lasciato in mano a chi prepara un grafico. Si crea la vista e il conto in sola lettura.

I privilegi si rivedono. Quelli dati «per una migrazione» e rimasti sono il buco. Due volte l'anno si elenca chi può scrivere e si toglie ciò che non serve più. In un tema si nominano tre utenti: applicazione, lettura, amministrazione nominativa. Basta a far vedere il principio.

### Esempio

L'applicazione usa `app_ticket`, che modifica solo le tabelle dei ticket. Il report del dirigente usa `lettura_report`, su una vista senza i campi riservati. Gli amministratori entrano con i propri nomi. Nessuno si collega come amministratore del motore per il lavoro di ogni giorno.

### In sede di prova

Tre ruoli, privilegi sugli oggetti e non sul mondo, conti nominativi per le persone, revisione. Il danno contenuto se l'applicazione viene ingannata.

### Errori da evitare

- Usare l'amministratore del motore come utente dell'applicazione.
- Dare a un foglio di report le credenziali di scrittura.
- Lasciare privilegi temporanei per sempre.

### Approfondire

- [Database](https://it.wikipedia.org/wiki/Database)
- [Controllo degli accessi](https://it.wikipedia.org/wiki/Controllo_degli_accessi)

## Pool di connessioni: quanti canali verso il database

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** pool, connessioni, database
**Semaforo:** verde

### Inquadramento

È un numero che nei temi si dimentica e che in esercizio abbatte il database. Si spiega perché le connessioni si riusano e come si sceglie il tetto.

### Definizione

Il pool è un insieme di connessioni già aperte che l'applicazione prende in prestito per una richiesta e restituisce. Evita di pagare l'apertura a ogni click. Il tetto protegge il database da un numero di connessioni che non regge.

### Nel dettaglio

Aprire una connessione costa autenticazione e memoria sul motore. Una richiesta breve che ne apre una nuova impiega più tempo a entrare che a eseguire la query. Il pool ammortizza. Il lato oscuro è il tetto del motore: ogni connessione occupa memoria, e oltre un certo numero il motore passa il tempo a gestirle invece che a rispondere. Due nodi applicativi con un pool da cento sono duecento connessioni, più quelle di amministrazione e dei report. Se il motore ne regge centocinquanta, il disegno è già oltre.

Si dimensiona al contrario. Si parte da ciò che il database regge, si lascia un margine, si divide fra i nodi, e quello è il pool di ciascuno. Se le richieste in arrivo sono di più, aspettano un posto nel pool invece di aprire la duecentounesima connessione. L'attesa si vede e si misura. Alzare il pool all'infinito sposta il crollo sul motore.

Una connessione presa e non restituita, per un errore, esaurisce il pool con il traffico ordinario. Si mette un tempo massimo di prestito. Alla scadenza la connessione torna, e l'errore si registra. Il pool non è un modo per avere transazioni lunghe: la transazione dura lo stretto necessario e poi la connessione torna disponibile.

### Esempio

Il motore regge duecento connessioni. Si tengono cinquanta per amministrazione e report. Restano centocinquanta per due nodi, quindi pool da settanta ciascuno, con margine. Una richiesta aspetta al massimo un secondo un posto nel pool, poi riceve un messaggio di servizio occupato, invece di far cadere il motore.

### In sede di prova

Perché si riusa, conto al contrario dal limite del motore, attesa invece di apertura infinita, tempo massimo di prestito.

### Errori da evitare

- Aprire una connessione per ogni click.
- Sommare pool grandi senza guardare il tetto del motore.
- Tenere la connessione durante l'attesa dell'utente.

### Approfondire

- [Connection pool](https://it.wikipedia.org/wiki/Connection_pool)
- [Database](https://it.wikipedia.org/wiki/Database)

## Chiave naturale e chiave surrogata

**Prove:** seconda prova gruppo 1, orale
**Tag:** chiave primaria, surrogata, codice fiscale
**Semaforo:** verde

### Inquadramento

È una scelta di schema che si giustifica in due frasi. Si dice quando un dato del mondo reale può identificare una riga e quando è meglio un identificativo creato dal sistema.

### Definizione

La chiave naturale è un attributo che esiste già nel dominio e identifica la riga, per esempio un codice fiscale se è davvero sempre presente e stabile. La chiave surrogata è un identificativo generato, senza significato, usato solo per identificare.

### Nel dettaglio

Il codice fiscale sembra perfetto e poi manca, per una persona estera, o cambia per correzione di un errore anagrafico, o non è ancora noto al momento in cui si apre la pratica. Se è la chiave primaria, cambiarlo obbliga a cambiare tutte le chiavi esterne, e il buco del «non ancora noto» non si può inserire. Un numero generato non ha questi problemi. Il codice fiscale, quando c'è, sta in una colonna con un vincolo di unicità, e può essere nullo finché non arriva, se la regola lo consente, oppure obbligatorio da un certo stato in poi.

La surrogata non si riusa. Una riga cancellata non restituisce il numero a un'altra pratica, altrimenti i riferimenti vecchi, in un registro o in un documento, puntano alla pratica nuova. I numeri che l'utente vede, come il numero di protocollo, possono essere diversi dalla chiave interna. Il protocollo ha un significato e una sequenza annuale. La chiave interna no. Mescolarli produce numeri che non si possono cambiare quando la regola del protocollo cambia.

In un tema si sceglie la surrogata per le entità principali e si mette l'unicità sui codici veri. Si dice perché il codice vero non reggerebbe da chiave.

### Esempio

Il ticket ha un identificativo interno che l'utente non vede, e un numero annuale che l'utente vede. La persona ha un identificativo interno e un codice fiscale unico, obbligatorio solo quando lo stato della pratica lo richiede. Correggere un codice fiscale non tocca le chiavi delle pratiche collegate.

### In sede di prova

Definire le due chiavi, un caso in cui la naturale cambia o manca, surrogata più unicità sul codice vero, numeri visibili distinti dalla chiave.

### Errori da evitare

- Usare il codice fiscale come chiave primaria senza dire che cosa succede se manca o cambia.
- Riusare gli identificativi delle righe cancellate.
- Identificare la chiave interna con il numero di protocollo.

### Approfondire

- [Chiave primaria](https://it.wikipedia.org/wiki/Chiave_primaria)
- [Modello relazionale](https://it.wikipedia.org/wiki/Modello_relazionale)

## Cancellare senza perdere la storia

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** cancellazione logica, storia, audit
**Semaforo:** verde

### Inquadramento

La domanda nasce da un ufficio che non può far sparire una pratica. Si distingue togliere la riga, disattivarla, e conservare la storia dei cambiamenti.

### Definizione

La cancellazione fisica toglie la riga. La cancellazione logica segna la riga come non più attiva, con una data e un autore, e la lascia leggibile a chi ha titolo. La storia registra i valori precedenti delle modifiche che contano.

### Nel dettaglio

In un ente la cancellazione fisica è rara e va motivata: un dato personale tenuto senza più base, e anche lì spesso si anonimizza invece di bucare la storia amministrativa. Una pratica, un'assegnazione, un permesso di accesso si disattivano. Gli elenchi ordinari filtrano le righe disattivate, così l'ufficio non le vede fra i casi aperti. Un elenco di controllo le mostra. Dimenticare il filtro è il difetto: le pratiche chiuse tornano in coda. Il filtro sta nelle viste, non solo nel programma, così anche il report non le conta due volte.

La storia è un'altra tabella, oppure righe di evento. «Chi ha cambiato lo stato, quando, da che valore a che valore.» Senza, si sa solo l'ultimo stato e non si risponde a un'ispezione. Non serve storicizzare ogni colonna cosmetica. Si storicizzano stato, assegnatario, permessi.

Il diritto di cancellazione dei dati personali si concilia con l'obbligo di conservare gli atti. Si anonimizza ciò che è personale e non più necessario, e si tiene ciò che la legge di settore obbliga a tenere. La scelta si scrive per ciascuna tabella, non con un unico «cancelliamo tutto» o «non cancelliamo mai».

### Esempio

Un utente si disattiva: non entra più, le sue pratiche restano, il nome resta finché la pratica deve essere attribuibile. Un commento inserito per errore nella pratica sbagliata si cancella fisicamente solo se una regola lo consente, altrimenti si marca come ritirato e resta visibile nel registro a chi controlla.

### In sede di prova

Fisica, logica, storia. Filtri nelle viste. Che cosa si storicizza. Anonimizzazione distinta dall'obbligo di tenere l'atto.

### Errori da evitare

- Cancellare la riga di una pratica per «pulire l'elenco».
- Dimenticare il filtro sulle righe disattivate.
- Invocare la cancellazione GDPR per distruggere un atto che va conservato.

### Approfondire

- [Database](https://it.wikipedia.org/wiki/Database)
- [Protezione dei dati personali](https://it.wikipedia.org/wiki/Protezione_dei_dati_personali)

## Paginare un elenco e perché non si portano centomila righe

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** paginazione, elenchi, prestazioni
**Semaforo:** giallo

### Inquadramento

È un requisito di interfaccia che diventa un requisito di database. Si dice quanti elementi si portano, in che ordine stabile, e come si chiede la pagina successiva.

### Definizione

La paginazione restituisce una fetta dell'elenco, di misura fissata, e un modo per chiedere la fetta seguente. L'ordine è stabile, altrimenti la stessa riga compare in due pagine o sparisce.

### Nel dettaglio

Portare all'interfaccia l'intero risultato costa memoria, rete e tempo, e l'utente non legge centomila righe. Si chiedono venti o cinquanta righe, con un ordine su una colonna indicizzata, per esempio la data e l'identificativo. L'ordine solo sulla data lascia indecisi i pari merito, e fra una pagina e l'altra una riga può saltare. Si aggiunge l'identificativo come secondo criterio.

Lo scarto grande, «salta le prime diecimila», su alcuni motori costa quanto leggerle. Per gli elenchi lunghi si pagina con l'ultimo valore visto: la pagina successiva è «le venti righe con data e identificativo dopo quest'ultimo». È stabile e costa poco. Si dice nel tema quale si usa, anche in una riga.

Il conteggio totale delle righe, «pagina 1 di 4000», può essere la query più cara di tutta la pagina. Se non serve, non si fa. «Ci sono altri risultati» basta allo sportello. Se serve il totale, si calcola con una query pensata, non si scaricano le righe per contarle nel browser.

### Esempio

L'elenco dei ticket mostra cinquanta righe, le più recenti, ordinate per data e identificativo. In fondo, un controllo chiede le cinquanta successive a partire dall'ultima vista. Non si mostra il numero totale. Il filtro per ufficio usa l'indice. La pagina arriva in un tempo breve anche con un milione di ticket.

### In sede di prova

Fetta corta, ordine stabile con spareggio, niente elenco intero al browser, conteggio totale solo se serve.

### Errori da evitare

- Caricare tutto e paginare nel browser.
- Ordinare su una colonna con molti pari merito, senza spareggio.
- Calcolare il totale a ogni apertura se l'interfaccia non lo usa.

### Approfondire

- [SQL](https://it.wikipedia.org/wiki/SQL)
- [Indice (database)](https://it.wikipedia.org/wiki/Indice_(database))

## Migrazione dello schema senza spegnere il servizio

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** schema, migrazione, compatibilità
**Semaforo:** verde

### Inquadramento

La domanda chiede come si cambia una tabella mentre gli utenti lavorano. Si spezza il cambiamento in passi compatibili, così si può tornare indietro.

### Definizione

La migrazione dello schema modifica tabelle e vincoli in modo controllato, insieme al codice che li usa. Un passo compatibile è un passo in cui il codice vecchio e il codice nuovo funzionano entrambi con lo schema di quel momento.

### Nel dettaglio

Aggiungere una colonna facoltativa è compatibile: il codice vecchio la ignora, il nuovo la riempie. Riempirla per le righe già presenti si fa in un secondo momento, a lotti, senza bloccare la tabella per un'ora. Solo quando tutte le righe sono a posto e il codice nuovo è ovunque, si può rendere la colonna obbligatoria. Togliere una colonna è l'ultimo passo, dopo che nessun codice la legge più. Invertire l'ordine, togliere subito, impedisce il ritorno: il codice precedente non trova la colonna e non si può rimettere.

Rinominare è un togliere più un aggiungere, quindi si fa in tre tempi: aggiungere il nuovo nome, scrivere in entrambi, spostare le letture, smettere di scrivere il vecchio, togliere il vecchio. Un rinominare secco in esercizio è un fermo.

Ogni migrazione ha il passo inverso scritto, finché il passo inverso è possibile. Si prova su una copia dei dati veri, di dimensione vera, perché un'alterazione istantanea su mille righe può bloccare la tabella su cento milioni. Si esegue in finestra se il motore prende un blocco, e si misura la durata in prova.

### Esempio

Si aggiunge la colonna «chiuso il», facoltativa. Si rilascia il codice che la scrive. Un job notturno riempie le righe vecchie a partire dalla storia. Quando è piena, un rilascio successivo la rende obbligatoria per i nuovi stati. La colonna vecchia, se c'era, si toglie solo al giro dopo. A ogni passo si può tornare al codice precedente.

### In sede di prova

Passi compatibili, aggiungere prima di togliere, ritorno possibile, prova sui volumi veri, niente rinomina secca.

### Errori da evitare

- Cambiare lo schema e il codice in un unico punto di non ritorno.
- Provare la migrazione su una tabella vuota.
- Rendere obbligatoria una colonna ancora piena di nulli.

### Approfondire

- [Schema di database](https://it.wikipedia.org/wiki/Schema_di_database)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Date, fusi e charset: i difetti che si vedono a distanza di mesi

**Prove:** seconda prova gruppo 1, orale
**Tag:** data, fuso, charset
**Semaforo:** giallo

### Inquadramento

Sono dettagli che decidono se un termine scade un'ora prima e se un nome esce illeggibile. Si fissano all'inizio e si raccontano in poche frasi.

### Definizione

Il charset è l'insieme di caratteri che una colonna può conservare, e la sua codifica. Il fuso è il riferimento con cui si interpreta un'ora. Una scadenza giuridica o di ufficio dipende da entrambi se è espressa in ora locale.

### Nel dettaglio

Si sceglie una codifica che contenga i caratteri usati, in pratica una Unicode, e si usa la stessa dal browser al database. Una codifica vecchia che perde le accentate, o le sostituisce, corrompe i nomi e a volte le ricerche: si cerca «città» e non si trova «citta» scritto male, o il contrario. Correggere dopo, su milioni di righe, è una migrazione. Si decide il primo giorno.

Le date di evento, «la seduta è alle dieci a Roma», sono ora locale di quel luogo, e si conserva anche il fuso, oppure si conserva in UTC e si mostra in ora locale con una regola sola. Mescolare, un nodo in UTC e un nodo in ora legale senza dirlo, sposta gli appuntamenti di un'ora due volte l'anno. Si scrive la convenzione. I confronti fra date si fanno nel tipo data, non fra stringhe: la stringa «02/03» è ambigua e l'ordine alfabetico non è l'ordine cronologico.

Una scadenza «entro la fine del giorno» si definisce: fino alle ventiquattro del fuso dell'ente, estremo escluso o incluso. Senza questa frase due sistemi la implementano in modo diverso e il ricorso è già scritto.

### Esempio

Tutto il sistema conserva gli istanti in UTC e li mostra in ora di Roma. Il nome delle persone sta in Unicode, dal modulo fino alla colonna. La scadenza di un deposito è le 24:00 di Roma del giorno indicato, estremo escluso, e la frase sta nel requisito.

### In sede di prova

Una codifica per tutta la catena, una convenzione per i fusi, niente date come testo, la definizione dell'estremo di una scadenza.

### Errori da evitare

- Scegliere la codifica del server e dimenticare quella della connessione.
- Confrontare date come stringhe.
- Lasciare ambiguo se la scadenza è inclusa.

### Approfondire

- [Unicode](https://it.wikipedia.org/wiki/Unicode)
- [Fuso orario](https://it.wikipedia.org/wiki/Fuso_orario)

## Query N più uno e come si riconosce

**Prove:** seconda prova gruppo 1, orale
**Tag:** N+1, ORM, prestazioni
**Semaforo:** giallo

### Inquadramento

È il difetto tipico di chi legge i dati un oggetto alla volta. Si riconosce dal numero di query e si corregge portando i dati in una volta.

### Definizione

Il problema della query N più uno consiste in una query che legge N righe e poi in N query successive, una per ogni riga, per leggere un dato collegato. Il tempo diventa quello di N viaggi, non quello di una join.

### Nel dettaglio

Si apre l'elenco di cento ticket e, per ciascuno, si chiede il nome del richiedente con una query. Sono centouno viaggi. Ciascuno è breve, la somma è lo sportello lento, e la CPU del database è bassa perché aspetta la rete fra i viaggi. Si vede nel registro delle query: la stessa frase ripetuta cento volte con un identificativo diverso. La cura è una join, o una seconda query che prende tutti i richiedenti il cui identificativo è nella lista, in un colpo solo.

Gli strumenti che trasformano gli oggetti in righe lo fanno accadere con naturalezza, perché attraversare `ticket.richiedente.nome` può scatenare una query. Si configura il caricamento insieme, di proposito, per quell'elenco. Non si disattiva il controllo e non si torna a concatenare SQL. Si dice allo strumento che quei dati servono subito.

Cento viaggi da un millisecondo, più la latenza, battono una join da venti millisecondi. Il tema non deve citare il nome del difetto in inglese per forza. Deve dire: non si interroga il database una volta per riga di un elenco.

### Esempio

L'elenco dei ticket mostra il nome dell'ufficio. La prima versione fa una query per riga e impiega tre secondi. Una join con l'ufficio lo porta sotto il decimo. Il registro, dopo la correzione, mostra una query per l'apertura della pagina, non cinquanta.

### In sede di prova

Riconoscere il sintomo nel numero di query, correggere con una join o una lettura in blocco, collegarlo agli elenchi.

### Errori da evitare

- Dare per buona una pagina lenta «perché ogni query è veloce».
- Correggere tornando a costruire frasi SQL a mano per concatenazione.
- Caricare per intero grafi di oggetti enormi per mostrarne due colonne.

### Approfondire

- [Object-relational mapping](https://it.wikipedia.org/wiki/Object-relational_mapping)
- [SQL](https://it.wikipedia.org/wiki/SQL)

## Mascherare i dati veri negli ambienti di prova

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** anonimizzazione, ambienti, prova
**Semaforo:** verde

### Inquadramento

La domanda unisce database e riservatezza. Si dice come si prova un sistema senza copiare le pratiche vere sulla macchina di chi sviluppa.

### Definizione

Il mascheramento sostituisce i dati personali con dati verosimili e non riconducibili, mantenendo forma e legami. L'ambiente di prova usa quella copia. I dati veri restano nell'esercizio, con i suoi accessi.

### Nel dettaglio

Una copia integrale del database di esercizio sul portatile, o su un server di prova con password banali, è una seconda sede dei dati, più debole della prima. Si mascherano nomi, codici fiscali, recapiti, testi liberi che contengono vicende di persone. Si tengono i legami: lo stesso identificativo finto compare nel ticket e nell'anagrafica, altrimenti non si prova la join. Si tengono i volumi e la distribuzione, altrimenti non si provano le prestazioni. Un ambiente con cento righe finte non dice se la query regge un milione.

Alcuni campi non si possono indovinare a partire dal valore mascherato. Una cifra semplice che si inverte non basta per un codice fiscale, se la regola di inversione è nota. Si sostituisce con un valore generato e si butta la corrispondenza, salvo un tavolo protetto, tenuto da pochi, se un difetto grave richiede di risalire al caso vero. Quel tavolo è un trattamento, con il suo accesso.

I file allegati si trattano come le colonne. Copiarli tutti in prova perché «senza file non si prova il download» copia anche i documenti. Si tengono pochi file finti e si prova il percorso. L'accesso alla prova non è libero a chiunque abbia un conto nell'ente.

### Esempio

Ogni notte un job produce una copia mascherata: nomi sostituiti, codici fiscali validi nella forma e falsi nel contenuto, testi dei commenti rimpiazzati, legami intatti, volumi intatti. I programmatori provano su quella. Per un difetto non riproducibile, una persona autorizzata consulta il caso vero in esercizio, non si «sblocca» la copia.

### In sede di prova

Perché la copia integrale è un incidente, che cosa si mantiene (legami e volumi), che cosa si distrugge (la riconducibilità), gli allegati compresi.

### Errori da evitare

- Ripristinare la produzione in prova per fare prima.
- Mascherare in modo reversibile e lasciare la regola nello stesso ambiente.
- Copiare gli allegati veri insieme allo schema.

### Approfondire

- [Anonimizzazione](https://it.wikipedia.org/wiki/Anonimizzazione)
- [Protezione dei dati personali](https://it.wikipedia.org/wiki/Protezione_dei_dati_personali)

## Operazioni idempotenti: ritentare senza raddoppiare

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** idempotenza, retry, API
**Semaforo:** giallo

### Inquadramento

La domanda nasce dal ritento. La rete ha un dubbio: la richiesta è arrivata o no. Se si ritenta, l'effetto non deve applicarsi due volte.

### Definizione

Un'operazione è idempotente se eseguirla più volte con la stessa chiave produce lo stesso effetto di eseguirla una volta. Il client può ritentare dopo un'incertezza senza duplicare la pratica.

### Nel dettaglio

Il client invia «crea il ticket» e non riceve risposta, perché il nodo è caduto dopo aver scritto e prima di rispondere. Se ritenta, un'operazione non idempotente crea il secondo ticket. Si dà alla richiesta un identificativo unico, scelto dal client. Il server, se ha già visto quell'identificativo, restituisce il risultato della prima volta e non scrive di nuovo. L'identificativo si conserva per il tempo in cui un ritento è plausibile, ore o giorni, non per sempre.

I metodi di lettura sono già idempotenti. Una creazione no, salvo questo accorgimento. Un pagamento, una prenotazione, una presa in carico lo sono ancora meno: raddoppiarli è un danno visibile. Si mette la chiave di idempotenza sulle operazioni che creano o che spostano denaro e posti. Sulle bozze si può tollerare un duplicato e ripulirlo, e lo si dice.

Il server deve riconoscere la chiave anche se il ritento arriva su un altro nodo. La chiave sta nel database, con un vincolo di unicità, non nella memoria di un nodo. Il vincolo è la vera protezione: due richieste simultanee con la stessa chiave, una sola riga.

### Esempio

Il modulo di prenotazione genera un identificativo e lo rimanda a ogni tentativo. La prima richiesta inserisce la prenotazione. La seconda, dopo un timeout, trova l'identificativo e restituisce la stessa prenotazione, con lo stesso numero. L'utente vede un solo impegno.

### In sede di prova

Definire l'idempotenza, il caso del timeout ambiguo, la chiave unica nel database, su quali operazioni serve.

### Errori da evitare

- Ritentare una creazione senza chiave e poi ripulire i duplicati a mano.
- Tenere la chiave solo in memoria sul nodo.
- Credere che ogni POST sia ritentabile perché «tanto c'è la transazione».

### Approfondire

- [Idempotenza](https://it.wikipedia.org/wiki/Idempotenza)
- [API](https://it.wikipedia.org/wiki/Application_programming_interface)

## Vincoli di unicità parziali e il caso dell'incarico aperto

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** unicità, vincolo, stato
**Semaforo:** giallo

### Inquadramento

È la traduzione in schema di una frase del tema: uno solo, ma solo fra quelli aperti. Un'unicità sulla colonna intera sarebbe sbagliata.

### Definizione

Un vincolo di unicità parziale impone che un valore sia unico fra le righe che soddisfano una condizione, e ammette duplicati fra le altre. Modella «al massimo uno attivo» senza impedire la storia.

### Nel dettaglio

Un bene inventariale può avere molte assegnazioni nel tempo e una sola aperta. Un'unicità sul solo identificativo del bene impedirebbe la seconda assegnazione della vita del bene, cioè la storia. Un'unicità su bene più stato fallisce in un altro modo: due assegnazioni chiuse hanno lo stesso stato e cozzano, oppure, se lo stato chiuso si ripete, il vincolo è troppo largo. Il vincolo giusto è unico sul bene fra le righe in cui la data di riconsegna è nulla.

Non tutti i motori lo scrivono nello stesso modo. Si può fare con un indice unico parziale, oppure con una colonna che vale l'identificativo del bene quando l'incarico è aperto e vale nullo quando è chiuso, e un'unicità su quella colonna, sapendo come il motore tratta i nulli. La tecnica si sceglie e si prova con due inserimenti concorrenti. Il vincolo deve far fallire il secondo, non solo il controllo nell'applicazione, perché l'importazione e la console passano dal motore.

Nel tema si scrive la frase in italiano e poi il vincolo. «Un solo incarico aperto per bene» è il requisito. L'indice unico parziale è la realizzazione. La prova tenta due incarichi aperti e si aspetta il rifiuto, poi un incarico aperto dopo uno chiuso e si aspetta l'accettazione.

### Esempio

La tabella assegnazioni ha bene, inizio e fine. L'indice unico comprende il bene solo dove la fine è nulla. La seconda assegnazione aperta fallisce. La riga chiusa resta. L'applicazione traduce il rifiuto del motore in «bene già assegnato», senza mostrare il nome dell'indice.

### In sede di prova

La frase «uno solo fra gli aperti», perché l'unicità semplice è troppo forte o troppo debole, prova dei due casi, rifiuto anche fuori dall'applicazione.

### Errori da evitare

- Mettere l'unicità sul bene e perdere la storia.
- Controllare solo nel codice che l'incarico aperto sia uno.
- Non provare il caso di due inserimenti contemporanei.

### Approfondire

- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)
- [Chiave primaria](https://it.wikipedia.org/wiki/Chiave_primaria)

## Partizionare una tabella grande

**Prove:** seconda prova gruppo 1, orale
**Tag:** partizione, archivio, prestazioni
**Semaforo:** rosso

### Inquadramento

È un argomento da nominare solo quando i volumi lo chiedono. Si dice che cosa si guadagna a dividere una tabella per tempo, e che cosa non si risolve.

### Definizione

Il partizionamento divide una tabella in pezzi fisici secondo una regola, spesso l'anno o il mese, mantenendo verso l'applicazione l'apparenza di una tabella sola. Le query che indicano il periodo toccano un pezzo solo. Le altre li toccano tutti.

### Nel dettaglio

Ha senso oltre le decine di milioni di righe, o quando si deve scaricare un anno intero in modo rapido: staccare la partizione del duemilaventi è un'operazione di catalogo, non la cancellazione di cento milioni di righe che blocca la tabella. Per un archivio di ticket che resta consultabile e non si modifica più, la partizione annuale è pulita. Per una tabella piccola è un costo di amministrazione senza beneficio, e in un tema non si mette per scena.

Le query devono dire il criterio, altrimenti il motore apre tutte le partizioni e si è aggiunto un peso. L'indice e la chiave estera si pensano con la regola. Un vincolo verso una tabella partizionata può essere più rigido. Si prova la query tipica e si guarda il piano: deve nominare una partizione, non tutte.

Non sostituisce l'indice e non sostituisce la paginazione. Una query senza filtro di data su una tabella partizionata per data le legge tutte. Prima si scrivono le query giuste, poi, se la massa lo chiede, si partiziona.

### Esempio

I log di accesso crescono di venti milioni di righe l'anno e si consultano per mese. Si partiziona per mese. La ricerca di un giorno legge un pezzo. A gennaio si stacca il mese più vecchio del periodo di conservazione e lo si archivia. I ticket operativi, che sono centomila, restano in una tabella sola.

### In sede di prova

Quando serve, il beneficio sullo scarico di un periodo, la query che deve contenere il criterio, non è il primo rimedio da nominare.

### Errori da evitare

- Partizionare una tabella piccola per sembrare scalabili.
- Dimenticare il criterio nella query e leggerle tutte.
- Usare il partizionamento al posto di un indice mancante.

### Approfondire

- [Partizionamento (database)](https://it.wikipedia.org/wiki/Partizionamento_(database))
- [Database](https://it.wikipedia.org/wiki/Database)

## Piano di esecuzione: come si vede se l'indice è usato

**Prove:** seconda prova gruppo 1, orale
**Tag:** piano, indice, ottimizzatore
**Semaforo:** giallo

### Inquadramento

La domanda chiede di non indovinare le prestazioni. Si legge il piano che il motore intende seguire e si collega alla query lenta.

### Definizione

Il piano di esecuzione è la descrizione di come il motore eseguirà una query: quali indici, quali scansioni intere, quale ordine di join, una stima delle righe. Si chiede al motore prima di cambiare lo schema a sensazione.

### Nel dettaglio

Una scansione sequenziale su una tabella piccola è giusta: l'indice costerebbe di più. La stessa scansione su un milione di righe, per trovare quelle di un ufficio, è il segnale che l'indice manca o che la query è scritta in modo da non poterlo usare. Una funzione applicata alla colonna, come convertire la data nella condizione, può impedire l'uso dell'indice sulla data. Si riscrive la condizione in modo che la colonna resti nuda, e si ricontrolla il piano.

La stima delle righe si confronta con la realtà. Se il motore crede di trovare dieci righe e ne trova un milione, le statistiche sono vecchie e il piano, anche con l'indice giusto disponibile, può essere sbagliato. Si aggiornano le statistiche, poi si rilegge. Aggiungere indici a caso, senza rileggere il piano, aggiunge costi alle scritture e può non toccare la query.

Nel tema basta dire: le query degli elenchi si verificano con il piano, ci si aspetta l'uso dell'indice sul filtro principale, e le statistiche fanno parte della conduzione. Non serve incollare un piano.

### Esempio

L'elenco per ufficio e stato, in prova su un milione di righe, mostra una scansione intera. Manca l'indice su ufficio e stato. Si crea, il piano mostra l'indice, il tempo scende. Tre mesi dopo il piano regredisce: le statistiche non erano più state aggiornate dopo un caricamento massiccio. Si aggiornano e rientra nel piano.

### In sede di prova

Che cosa è il piano, scansione contro indice, la query che impedisce l'indice, le statistiche, niente indici a caso.

### Errori da evitare

- Giudicare una query dal tempo sulla tabella vuota di sviluppo.
- Avvolgere le colonne in funzioni e poi chiedere un indice.
- Non aggiornare mai le statistiche.

### Approfondire

- [Query optimizer](https://it.wikipedia.org/wiki/Query_optimizer)
- [Indice (database)](https://it.wikipedia.org/wiki/Indice_(database))

## Transazione corta e confine giusto nell'applicazione

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** transazione, confine, applicazione
**Semaforo:** verde

### Inquadramento

La domanda chiede dove inizia e dove finisce il «tutto o niente». Un confine troppo largo blocca gli altri. Un confine troppo stretto lascia i dati a metà.

### Definizione

Il confine della transazione racchiude le scritture che devono riuscire o fallire insieme, e nient'altro. Si apre più tardi possibile e si chiude appena il vincolo è soddisfatto.

### Nel dettaglio

Prendere in carico un ticket è una transazione: leggere lo stato, verificare, scrivere il nuovo stato e la riga di storia. Spedire la mail di avviso non ci sta dentro. La mail può fallire o tardare, e non deve tenere bloccata la riga, né deve annullare la presa in carico se il server di posta tace. Si conferma la transazione e poi si accoda l'avviso. Se l'avviso fallisce, resta un messaggio da ritentare, e lo stato è già giusto.

Il contrario è il confine troppo stretto. Scrivere lo stato e, in un'altra transazione, la storia, lascia un buco se la seconda fallisce: lo stato è cambiato e nessuno sa da chi. Le due scritture stanno insieme. Il criterio è la frase del requisito. Se la frase ha un solo verbo osservabile, le scritture di quel verbo stanno in una transazione. I passi successivi, notifiche e report, stanno fuori.

Si evita di aprire la transazione, chiamare un servizio esterno lento, e confermare dopo. Il servizio esterno non si annulla con un rollback, e nel frattempo i blocchi restano. Si prepara ciò che serve, si scrive in transazione breve, si chiama fuori. Se la chiamata esterna deve essere coerente, si usa un segno «da completare» e un ritento, non un blocco tenuto aperto.

### Esempio

La presa in carico scrive stato e storia e conferma. Dopo la conferma, un job legge gli eventi non ancora notificati e spedisce la mail, segnando l'esito. Se la posta è giù, la presa in carico c'è già e la mail parte più tardi. Non esiste uno stato cambiato senza riga di storia.

### In sede di prova

Il criterio della frase del requisito, notifiche fuori, niente attese esterne dentro, il buco che il confine stretto lascia.

### Errori da evitare

- Mettere la mail nella stessa transazione della pratica.
- Spezzare stato e storia in due conferme.
- Tenere la transazione aperta mentre l'utente compila il passo successivo.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [ACID](https://it.wikipedia.org/wiki/ACID)

## Cancellare il padre: CASCADE e RESTRICT

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** chiave esterna, cascade, integrità
**Semaforo:** verde

### Inquadramento

La domanda chiede che cosa succede se si cancella una sala che ha prenotazioni, o una persona che ha prestiti. La risposta è una scelta esplicita, non il default del prodotto.

### Definizione

Una chiave esterna obbliga la riga figlia a puntare a una riga padre che esiste. RESTRICT, o NO ACTION, impedisce di cancellare il padre finché esistono figli. CASCADE cancella i figli insieme al padre. SET NULL stacca i figli e lascia la riga, se la colonna lo consente. Il default si guarda, e in un tema si scrive.

### Nel dettaglio

RESTRICT è la scelta giusta quando il figlio è un fatto storico. Cancellare una persona e perdere i prestiti che ha fatto, o cancellare una sala e dissolvere il calendario passato, distrugge il registro. Si disattiva il padre, non si cancella. La cancellazione fisica, se mai, arriva dopo il tempo di conservazione, con un procedimento, non con un tasto.

CASCADE si difende per dati che non vivono senza il padre e non hanno un valore proprio: le righe di una bozza, gli allegati temporanei di una richiesta non ancora inviata. Anche lì si preferisce spesso il restrict e una cancellazione esplicita dei figli, perché una cascata invisibile, azionata da un tasto, toglie più di quanto l'operatore crede. Se si usa la cascata, la prova automatica conta le righe prima e dopo.

SET NULL lascia orfani leggibili. Va bene per un campo facoltativo, per esempio il referente di una pratica che ha lasciato l'ente e la pratica resta. Va male per la sala di una prenotazione: una prenotazione senza sala non significa nulla, e il vincolo deve essere restrict oppure il divieto di cancellare.

In uno schema di elaborato, accanto a ogni chiave esterna si scrive la parola: restrict, e perché. Una riga sola. Chi legge capisce che la scelta è stata fatta.

### Esempio

La sala non si cancella: ha un flag attivo. Le prenotazioni passate restano. Il tentativo di una cancellazione fisica fallisce finché esiste una prenotazione, e la prova lo verifica. Gli allegati di una bozza abbandonata, invece, si possono cancellare con la bozza, e anche questo è una prova, con il conteggio.

### In sede di prova

La parola accanto a ogni chiave esterna. I fatti storici non cascano. La cascata si prova contando. Disattivare non è cancellare.

### Errori da evitare

- Lasciare il default del prodotto e non saperlo dire.
- Cancellare in cascata un registro di prenotazioni.
- Usare SET NULL sulla sala di una prenotazione.

### Approfondire

- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)
- [Chiave esterna](https://it.wikipedia.org/wiki/Chiave_esterna)

## Le regole di ufficio non stanno in una procedura memorizzata

**Prove:** seconda prova gruppo 1, orale
**Tag:** stored procedure, regole, applicazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede dove vive la regola «la fine è esclusa». Si può metterla nel database o nell'applicazione. Si dice il criterio, non il divieto assoluto.

### Definizione

Una procedura memorizzata è codice che gira dentro il DBMS, con i privilegi di quel codice e con accesso diretto alle tabelle. È utile per un'operazione dati vicina alle tabelle, per esempio un import controllato. È un posto cattivo per la regola di ufficio, se quella regola deve essere provata, revisionata e riusata fuori dal database.

### Nel dettaglio

La regola di ufficio cambia con un provvedimento, va letta da chi non amministra il database, e va eseguita dalle prove automatiche insieme al resto del codice. Nel modulo applicativo tutto questo è naturale. Dentro il DBMS la procedura vive in un altro versionamento, spesso ritoccata a mano, e le prove non la vedono. Due copie, una nel codice e una nella procedura, divergono il mese dopo.

Ciò che sta bene nel database è il vincolo che deve tenere anche se l'applicazione ha un difetto: unicità, chiave esterna, un vincolo di controllo semplice. La fine esclusa, se si riesce a dirla con un vincolo di esclusione o con un indice, sta nel database come rete di sicurezza, e sta anche nell'applicazione come messaggio chiaro. La procedura che «fa tutto lei» toglie entrambe le cose e le nasconde.

Un caso in cui la procedura si difende: un'operazione massiva che deve essere atomica e veloce, scritta una volta, versionata come il resto, con una prova. Appena contiene «se l'utente è di quell'ufficio», è già una regola di ufficio nel posto sbagliato.

### Esempio

L'unicità del prestito aperto è un indice parziale nel database. Il messaggio «copia già in prestito» lo costruisce l'applicazione, che ha tentato l'inserimento e ha ricevuto il rifiuto del vincolo. Non c'è una procedura PRESTA_COPIA che contiene la regola, la mail e il controllo del ruolo. Il ruolo lo verifica l'applicazione, il vincolo lo garantisce il database.

### In sede di prova

Vincoli nel database, regola e messaggi nell'applicazione, niente doppia copia, la procedura solo per un'operazione dati versionata e provata.

### Errori da evitare

- Spostare nel DBMS la regola per «essere più sicuri», senza prove.
- Scrivere la stessa regola in tre procedure.
- Mettere l'invio della mail dentro la procedura.

### Approfondire

- [Database](https://it.wikipedia.org/wiki/Database)
- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)

## Il diagramma entità-relazioni, da ridisegnare nel tema

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** ER, schema, elaborato
**Semaforo:** verde

### Inquadramento

È il disegno che nell'elaborato tiene insieme i dati. Non serve un formalismo perfetto. Servono le entità del tema, le relazioni con la cardinalità, e i vincoli che non stanno nella cardinalità.

### Definizione

Il diagramma entità-relazioni mostra i concetti che diventano tabelle, le associazioni fra loro e quante righe di una parte corrispondono a una riga dell'altra. Uno a molti è la chiave esterna. Molti a molti è una tabella in mezzo. L'opzionalità, se un figlio può mancare, si segna.

### Nel dettaglio

Si parte dai sostantivi della traccia e si buttano quelli che sono solo schermate. «Prenotazione», «sala», «persona» restano. «Pagina di ricerca» no. Si segna la cardinalità sulla relazione, non in una legenda staccata. Una prenotazione ha una sala obbligatoria. Una sala ha molte prenotazioni. Una prenotazione ha una persona che l'ha chiesta. Se serve un interprete, è una seconda relazione, opzionale o obbligatoria secondo la traccia, e non un campo di testo «note».

Ciò che il diagramma non mostra da solo si scrive accanto, in una frase: un solo prestito aperto per copia, intervalli che non si sovrappongono, fine esclusa. Sono vincoli, non entità. Inventare un'entità «vincolo» è un errore di modellazione. Dimenticare il vincolo accanto al disegno è un errore di tema.

Si disegna in grande, con i nomi in italiano del tema. Dieci entità ben scelte battono trenta entità «per completezza», fra cui audit, utente, ruolo, permesso, log, configurazione, tutte abbozzate. Ruolo e permesso si mettono se il tema ha profili diversi, e si collegano. Il log, se c'è, è una tabella con la chiave dell'oggetto, non un romanzo.

### Esempio

Quattro rettangoli: copia, opera, prestito, lettore. La copia appartiene a un'opera. Il prestito collega una copia e un lettore, con inizio e fine nulla se è aperto. Accanto: «al più un prestito con fine nulla per copia». Il bancone, come schermata, non è un'entità. L'operatore è un ruolo della persona, se serve a distinguere chi registra.

### In sede di prova

Sostantivi veri, cardinalità, molti-a-molti con tabella, vincoli scritti accanto, niente schermate travestite da tabelle.

### Errori da evitare

- Disegnare le pagine invece dei dati.
- Lasciare un molti-a-molti senza la tabella in mezzo, nello schema poi scritto.
- Non scrivere il vincolo che non si vede nella cardinalità.

### Approfondire

- [Modello relazionale](https://it.wikipedia.org/wiki/Modello_relazionale)
- [Modello entità-relazione](https://it.wikipedia.org/wiki/Modello_entit%C3%A0-relazione)

## Le sequenze hanno buchi, e va bene

**Prove:** seconda prova gruppo 1, orale
**Tag:** sequence, identificativo, buchi
**Semaforo:** giallo

### Inquadramento

La domanda nasce da un identificativo che salta da 100 a 140. Si chiede se sia un errore. Quasi mai, se l'identificativo è una chiave tecnica.

### Definizione

Una sequenza fornisce numeri crescenti, spesso usati come chiave surrogata. Non promette l'assenza di buchi. Un'inserzione annullata, un riavvio, una cache di numeri già presi consuma valori che non compariranno in tabella. Il numero identifica. Non conta.

### Nel dettaglio

Se l'ufficio vuole un numero di protocollo senza buchi, quella è un'altra esigenza, ed è difficile: due transazioni concorrenti, una annullata, lasciano un buco oppure si serializzano e si rallentano. Il numero di protocollo, dove la norma chiede una sequenza, si assegna in un punto solo, con una transazione corta, e si accetta il costo. Non si usa quella stessa sequenza come chiave tecnica di tutte le tabelle. Si tengono i due numeri distinti: uno identifica la riga, l'altro è il numero visibile all'ufficio, assegnato quando l'atto è definitivo, non quando si apre la bozza.

I buchi della chiave tecnica non si «riparano» rinumerando. Le chiavi esterne, i registri e i backup ricordano il vecchio numero. Rinumerare è un incidente. In orale si dice con tranquillità: un buco non è un record mancante. Un record mancante si cerca con il registro delle cancellazioni, non con i salti della sequenza.

La sequenza non è un segreto e non è un ordine di business. Non si mostra all'utente come se fosse il numero di copia, se quel numero ha un significato. Si mostra il codice che l'ufficio riconosce.

### Esempio

Le prenotazioni hanno una chiave tecnica che salta. Nessuno la stampa. Il codice visibile è l'anno più un progressivo assegnato alla conferma, non all'apertura della maschera: le bozze abbandonate non consumano numeri visibili. Due conferme simultanee si serializzano solo per quel progressivo, in una transazione cortissima, e il resto della prenotazione non sta dentro quel collo di bottiglia.

### In sede di prova

La sequenza tecnica può avere buchi. Il numero senza buchi, se serve davvero, è un altro campo, assegnato tardi, serializzato da solo. Non si rinumera.

### Errori da evitare

- Usare la chiave tecnica come numero di protocollo.
- Riempire i buchi aggiornando le chiavi.
- Assegnare il numero visibile all'apertura della bozza.

### Approfondire

- [Chiave primaria](https://it.wikipedia.org/wiki/Chiave_primaria)
- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))

## Cercare una parola in un testo

**Prove:** seconda prova gruppo 1, orale
**Tag:** full text, ricerca, indice
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si cerca «bilancio» dentro gli atti, senza fare una scansione di tutta la tabella a ogni richiesta. Si distingue un indice di ricerca dal LIKE iniziale.

### Definizione

Una ricerca testuale usa un indice costruito sulle parole, non sulla riga intera. La query chiede le righe che contengono quelle parole, eventualmente vicine o in un certo campo. Un LIKE con il percento davanti non usa un indice ordinario e legge la tabella.

### Nel dettaglio

Si indicizzano i campi in cui la ricerca ha senso: titolo e testo, non il codice fiscale, non lo stato. L'indice si aggiorna con le scritture, e ha un costo: una tabella scritta di continuo, con un testo lungo, paga questo costo. Se la ricerca è rara e i dati sono pochi, una scansione può bastare, e lo si dice. Se la ricerca è la funzione principale di un archivio, l'indice c'è.

La lingua conta. Spezzare le parole, ignorare gli accenti, decidere se «rete» e «reti» coincidono, sono scelte del motore e si provano su un campione vero, non su tre righe. I risultati si ordinano per rilevanza solo se si sa dire che cosa significa: altrimenti si ordina per data, che l'ufficio capisce. Si pagina. Non si restituiscono mille atti in una volta.

I permessi si applicano prima di mostrare. L'indice non è un canale per aggirare l'autorizzazione. La query di ricerca include il predicato del ruolo, oppure si cercano solo gli identificativi e poi si filtrano le righe che l'utente può leggere. Un titolo riservato che compare nei risultati, anche senza il corpo, è già un'informazione di troppo.

### Esempio

L'archivio degli atti indicizza titolo e testo degli atti pubblicabili. La ricerca di un commissario restituisce gli atti della sua commissione, paginati per data. Un atto riservato di un'altra commissione non compare nel titolo. La prova inserisce un atto con una parola rara e verifica che lo trovi solo il ruolo giusto, e che un LIKE sulla stessa parola, in prova di prestazione, non sia il percorso dell'applicazione.

### In sede di prova

Indice sulle parole, costo in scrittura, lingua provata su un campione, paginazione, il permesso si applica anche ai titoli.

### Errori da evitare

- Cercare con un percento davanti su una tabella grande, nell'elaborato, senza dirlo.
- Mostrare titoli che l'utente non può aprire.
- Indicizzare ogni colonna «così siamo pronti».

### Approfondire

- [Indice (database)](https://it.wikipedia.org/wiki/Indice_(database))
- [Database](https://it.wikipedia.org/wiki/Database)

## Che cosa non delegare a un ORM

**Prove:** seconda prova gruppo 1, orale
**Tag:** ORM, SQL, prestazioni
**Semaforo:** giallo

### Inquadramento

La domanda chiede se l'applicazione debba scrivere SQL. Si risponde che uno strumento che mappa tabelle e oggetti va bene per il caso ordinario, e si sanno nominare i punti in cui si guarda il SQL vero.

### Definizione

Un ORM fa corrispondere righe e oggetti e genera le query del caso comune: leggere per chiave, inserire, aggiornare. Riduce il codice ripetuto. Non conosce il vincolo di ufficio e non sceglie da solo l'indice giusto per un report.

### Nel dettaglio

Gli si delega la lettura e la scrittura di una riga, dentro la transazione che l'applicazione apre. Non gli si delega il confine della transazione: se lo strumento tiene aperta una sessione per tutta la richiesta, e durante quella sessione parte una mail o un'attesa, la transazione è già troppo lunga. Si chiude al confine deciso.

Si guardano due difetti tipici. Il primo è la query a valanga: si legge una prenotazione e lo strumento, percorrendo i legami, legge la sala, poi tutte le prenotazioni della sala, poi i richiedenti. Si dice esplicitamente che cosa caricare. Il secondo è un aggiornamento che riscrive tutte le colonne, comprese quelle non toccate, e pesta una modifica concorrente. Si aggiornano le colonne che cambiano, con un controllo di versione se due possono scrivere.

Quando la query è il vincolo, si scrive il SQL, o si verifica il SQL generato. Un'intersezione di intervalli «fatta in memoria» dopo aver caricato tutte le prenotazioni della sala è un errore anche se l'ORM l'ha resa comoda. Il predicato sta nella query, e l'unicità sta nel database.

### Esempio

La prenotazione si inserisce con lo strumento, dentro una transazione corta. Il controllo di sovrapposizione è una query che il database valuta, non un ciclo sull'elenco caricato nel processo. Una prova di prestazione con molte prenotazioni mostra una sola query, non una per riga. La mail parte dopo il commit, fuori dalla sessione dello strumento.

### In sede di prova

Caso ordinario sì, confine della transazione no, niente caricamenti a valanga, il vincolo resta una query e un vincolo, il SQL generato si può leggere.

### Errori da evitare

- Caricare l'intera tabella e filtrare nel processo.
- Tenere la sessione aperta mentre si chiama un servizio esterno.
- Non saper dire quale SQL parte durante la prenotazione.

### Approfondire

- [Object-relational mapping](https://it.wikipedia.org/wiki/Object-relational_mapping)
- [SQL](https://it.wikipedia.org/wiki/SQL)

## Ruoli nel database e ruoli nell'applicazione

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** ruoli, GRANT, autorizzazione
**Semaforo:** verde

### Inquadramento

La domanda chiede chi impedisce a un operatore di leggere una tabella. Si distinguono due livelli, che si sommano e non si confondono.

### Definizione

Il ruolo applicativo è ciò che l'utente può fare nell'interfaccia: prenotare, confermare, amministrare le sale. Il ruolo del database è ciò che la connessione può fare sulle tabelle: leggere, inserire, non cancellare lo schema. L'utente non si collega al database. Si collega l'applicazione, con un account proprio.

### Nel dettaglio

Se ogni utente avesse un account sul database, si replicherebbero identità, password e gestione, e si perderebbe il punto unico dell'ente. L'applicazione autentica con l'identità dell'ente e autorizza il gesto. Poi parla con il database tramite un account di servizio, che non è amministratore e non legge le tabelle di un'altra applicazione.

Questo non basta. L'account di servizio, per necessità, può leggere più righe di quante l'utente attuale possa vederne. Quindi il filtro del ruolo va nell'applicazione, in ogni query, non solo nascosto nel menu. Un menu senza il bottone, e una query senza il predicato, è un'autorizzazione di facciata. Il database non sa quale commissione l'utente può vedere, salvo costruire un modello molto più complesso. Nel tema ordinario lo sa l'applicazione, e la prova tenta la query fuori ruolo.

Si tengono i nomi distinti. «Amministratore» nell'interfaccia non è il superutente del database. Usare la stessa parola per entrambi è il modo in cui, in un elaborato, si finisce per far coincidere le due cose. Si scrive «ruolo applicativo» e «account di connessione».

### Esempio

Maria ha il ruolo applicativo che prenota le sale del proprio ufficio. L'applicazione si connette con l'account prenotazioni, che può inserire in quella tabella e non può leggere l'inventario. La query di Maria ha il predicato sull'ufficio. La prova, con la sessione di Maria, chiede la sala di un altro ufficio e riceve un rifiuto, anche chiamando l'API e non la pagina.

### In sede di prova

Due livelli, l'utente non ha un login sul database, l'account di connessione è minimo, il filtro sta nella query, la prova aggira l'interfaccia.

### Errori da evitare

- Creare un utente del database per ogni dipendente.
- Nascondere il bottone e non filtrare la query.
- Chiamare amministratore sia il ruolo di ufficio sia il superutente.

### Approfondire

- [Controllo degli accessi](https://it.wikipedia.org/wiki/Controllo_degli_accessi)
- [Database](https://it.wikipedia.org/wiki/Database)

## Importare molti dati senza una transazione infinita

**Prove:** seconda prova gruppo 1, orale
**Tag:** import, bulk, transazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si carica un elenco grande, un'anagrafe iniziale, uno storico, senza bloccare il servizio e senza lasciare un mezzo carico invisibile.

### Definizione

Un import massivo inserisce molte righe in un'operazione prevista, ripetibile, con un esito controllabile. Non è un incolla manuale. Si spezza in lotti che sono transazioni, e l'intero import è riprendibile: eseguirlo due volte non duplica.

### Nel dettaglio

Una sola transazione da un milione di righe tiene bloccchi, riempie il giornale e, se fallisce all'ultima riga, ricomincia da zero. Si fanno lotti di dimensione provata, ciascuno confermato. Si tiene traccia di quale riga sorgente è già entrata, con una chiave naturale del file: un codice, non il numero di riga, che cambia se il file viene riordinato. Il secondo giro salta ciò che c'è già.

Si valida prima di scrivere, o si scrive in una tabella di staging che non è ancora il servizio. I dati non validi non entrano nel servizio a metà. Un report dice quante righe sono entrate, quante sono state scartate e perché. Lo scarto si può correggere e rilanciare, e solo quello.

Durante il carico gli indici si possono costruire alla fine, se il DBMS lo consente e se il carico è grande abbastanza da convenire. Si misura, non si recita. Il servizio, se deve restare acceso, non viene bloccato da un lock di tabella preso per ore. Se un blocco esclusivo è inevitabile, sta in una finestra, come un rilascio.

L'import ha un account e un registro. Non si fa con il superutente dalla postazione di chi ha ricevuto il file per posta.

### Esempio

Lo storico delle sale arriva come file con un codice prenotazione per riga. Si carica in staging, si scartano le date impossibili, si inserisce a lotti di mille, segnando il codice. Un secondo lancio dello stesso file non aggiunge righe. Il report elenca venti scarti. Il servizio di prenotazione resta usabile, perché i lotti non tengono un lock lungo. L'operatore che lancia l'import è un ruolo, e il file non contiene più dati del necessario.

### In sede di prova

Lotti, ripresa senza duplicati, staging o validazione, report degli scarti, niente transazione unica enorme, finestra solo se serve un blocco esclusivo.

### Errori da evitare

- Una transazione sola per tutto il file.
- Usare il numero di riga come chiave di ripresa.
- Importare direttamente in esercizio al primo tentativo, con il superutente.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [Database](https://it.wikipedia.org/wiki/Database)

## L'ordine di caricamento lo decidono le chiavi esterne

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** chiave esterna, caricamento, schema
**Semaforo:** giallo

### Inquadramento

È il seguito pratico dell'import e della migrazione. Le righe non si inseriscono nell'ordine del file se il file è stato esportato a caso. Si inseriscono nell'ordine dei riferimenti.

### Definizione

Una riga che contiene una chiave esterna si inserisce dopo la riga a cui punta. Le tabelle si ordinano dai padri ai figli. I cicli, due tabelle che si puntano, si spezzano inserendo prima la chiave nulla, se è lecito, e aggiornandola dopo, oppure differendo il controllo a fine transazione, se il DBMS lo permette e se si sa dire.

### Nel dettaglio

Si disegna il grafo. Opera prima della copia, copia prima del prestito, lettore prima del prestito. Un file unico con tutto mescolato si spezza, oppure si fanno più passate. Disattivare le chiavi esterne per «far entrare il file» e riattivarle dopo è accettabile solo in una finestra, con il controllo che alla riattivazione non ci siano orfani, e con il coraggio di fermarsi se il controllo fallisce. Riattivare a metà, lasciando il vincolo spento perché tanto il comando ha dato errore, è il modo in cui restano dati che lo schema dichiara impossibili.

I cicli si evitano già nel disegno. Se la persona ha un ufficio e l'ufficio ha un responsabile, una delle due chiavi è opzionale in inserimento. Si crea l'ufficio senza responsabile, si crea la persona, si aggiorna il responsabile. Tutto in una transazione, così nessuno vede l'ufficio a metà, oppure si accetta lo stato intermedio se è un dato di anagrafica e non un vincolo di servizio.

Nell'elaborato, l'ordine di primo caricamento si scrive in tre righe accanto allo schema. Dimostra che le chiavi esterne sono state capite.

### Esempio

Per l'inventario: prima le sedi, poi le stanze, poi i beni. Un bene che cita una stanza inesistente viene scartato e finisce nel report, non entra con la chiave spenta. Il responsabile della stanza, se è un ciclo, si aggiorna in una seconda passata. Alla fine una query conta gli orfani e deve dare zero, ed è una prova dello script, non un controllo fatto a occhio.

### In sede di prova

Padri prima dei figli, cicli spezzati in due passi, vincoli spenti solo in una finestra con controllo finale, query degli orfani a zero.

### Errori da evitare

- Spegnere le chiavi e dimenticarle spente.
- Inserire nell'ordine casuale del file.
- Modellare un ciclo obbligatorio che rende impossibile il primo inserimento.

### Approfondire

- [Chiave esterna](https://it.wikipedia.org/wiki/Chiave_esterna)
- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)

## Quale isolamento scegliere

**Prove:** seconda prova gruppo 1, orale
**Tag:** isolamento, read committed, repeatable read
**Semaforo:** verde

### Inquadramento

La domanda elenca i livelli e chiede quale si usa per la prenotazione. Si parte da quello che il DBMS usa di default e si sale solo con un motivo.

### Definizione

READ COMMITTED garantisce di non leggere dati non ancora confermati. Fra una lettura e la successiva della stessa transazione, un'altra può aver modificato le righe: la lettura non è ripetibile. REPEATABLE READ tiene ferme le righe già lette per tutta la transazione. SERIALIZABLE è il più stretto e il più costoso, e fa fallire una delle transazioni concorrenti se non può darle l'illusione di essere da sole. I nomi si dicono in una frase, poi si sceglie.

### Nel dettaglio

Per quasi tutte le operazioni di un'applicazione di ente, READ COMMITTED basta, ed è spesso il default: le transazioni sono corte, e il vincolo vero sta nell'unicità o nell'inserimento condizionato, non nel rileggere lo stesso elenco due volte. Tenere REPEATABLE READ «per sicurezza» su ogni richiesta allunga i lock e produce deadlock che nessuno ha chiesto.

Si sale di livello, o si usa un blocco esplicito, nel punto del vincolo. Contare i posti e poi inserire, in READ COMMITTED, senza un vincolo unico o senza bloccare la riga della capienza, lascia passare due quarantesimi posti. La cura non è alzare l'isolamento di tutta l'applicazione. È rendere atomico quel predicato: un vincolo, un aggiornamento condizionato della riga contatore, un lock su quella riga. SERIALIZABLE sul solo gesto della capienza si può nominare, se si sa che al conflitto l'applicazione riprova. Senza la riprova, l'utente vede un errore opaco.

Si dice anche il default del prodotto solo se si è sicuri. Altrimenti: «scelgo READ COMMITTED e metto il vincolo nel punto concorrente». È una risposta completa.

### Esempio

Le pagine di consultazione leggono in READ COMMITTED. La prenotazione della sala inserisce e si affida all'unicità dell'intervallo, non a un isolamento più alto. La capienza della tribuna aggiorna una riga «posti occupati» con una condizione, nella stessa transazione dell'inserimento. Se due richieste arrivano insieme, una sola aggiorna. L'altra riprova o riceve «esaurito». Il resto dell'applicazione non cambia isolamento.

### In sede di prova

Un livello per il caso comune, il nome detto con il suo effetto, il vincolo concorrente risolto nel punto, la riprova se si usa un livello che fa fallire.

### Errori da evitare

- Alzare l'isolamento di tutte le transazioni per aggiustare un conteggio.
- Contare e poi inserire senza vincolo né lock.
- Recitare i quattro livelli e non scegliere.

### Approfondire

- [Transazione (basi di dati)](https://it.wikipedia.org/wiki/Transazione_(basi_di_dati))
- [ACID](https://it.wikipedia.org/wiki/ACID)

## Vincoli di controllo, default e valori obbligatori

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** check, not null, default
**Semaforo:** verde

### Inquadramento

La domanda scende allo schema fisico del tema. Si chiede come la tabella impedisca una fine precedente all'inizio, uno stato inventato, una riga senza sala.

### Definizione

NOT NULL rende una colonna obbligatoria. Un default assegna un valore quando l'inserimento non lo dice. Un vincolo di controllo limita i valori: fine successiva all'inizio, stato in un elenco, capienza positiva. Sono difese del database, e restano anche se un secondo programma scrive male.

### Nel dettaglio

Lo stato è un elenco, non una stringa libera. Il vincolo elenca i valori leciti. Aggiungere uno stato è una migrazione, non un accordo verbale. Un default sullo stato, per esempio «richiesta», evita che una riga nasca in uno stato vuoto. Il default non sostituisce il vincolo: senza il vincolo, qualcuno inserisce «aperta» e «Aperta» e «open», e i report si sdoppiano.

La fine dopo l'inizio è un controllo. La non sovrapposizione fra righe diverse non è un controllo sulla singola riga: è un vincolo di esclusione o un controllo nella transazione, e non si pretende che un CHECK fra colonne faccia quel mestiere. Sapere che cosa un CHECK non può fare è parte della risposta.

I NULL si usano per ciò che è davvero ignoto o non ancora avvenuto, la data di riconsegna, e si trattano nelle query, perché un confronto con NULL non è vero e non è falso. Usare NULL al posto di uno stato è il pasticcio classico: una prenotazione con sala nulla non è «in bozza», è una riga che non si sa leggere. La bozza, se esiste, è uno stato, con la sala già scelta o con una regola diversa scritta.

Nell'elaborato, sotto la tabella, tre righe: obbligatori, elenco degli stati, controllo sulla data. Bastano.

### Esempio

Prenotazione: sala e inizio obbligatori, fine obbligatoria e successiva all'inizio, stato in (richiesta, confermata, rifiutata, annullata), default richiesta. La riconsegna di un prestito può essere nulla, e significa ancora aperto, insieme al vincolo di unicità parziale. Non esiste una prenotazione con stato nullo. La prova tenta di inserire una fine precedente e uno stato «bozza» non previsto, e il database rifiuta entrambi.

### In sede di prova

Obbligatori, elenco chiuso, controllo sulla riga, il controllo sulla riga non sostituisce l'unicità fra righe, NULL solo per l'ignoto vero.

### Errori da evitare

- Lo stato come testo libero.
- Pretendere che un CHECK impedisca le sovrapposizioni fra prenotazioni.
- Usare NULL come sinonimo di «non confermata».

### Approfondire

- [Vincolo di integrità](https://it.wikipedia.org/wiki/Vincolo_di_integrit%C3%A0)
- [SQL](https://it.wikipedia.org/wiki/SQL)
