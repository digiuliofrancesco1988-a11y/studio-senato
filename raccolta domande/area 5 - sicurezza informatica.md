# Area 5 — Sicurezza informatica

La sicurezza è nel gruppo 1 della seconda prova e ha un colloquio orale proprio. Nella prima prova è un paragrafo obbligatorio, allineato ai numeri già scelti per le copie e per i ruoli. Una frase finale del tipo «il sistema sarà sicuro» non vale punti.

### Il filo

Riservatezza, integrità e disponibilità sono le tre domande. Autenticazione e autorizzazione le separano: chi sei, che cosa puoi fare. Le password, se proprio si conservano, sono impronte lente e salate; meglio l’identità dell’ente. La crittografia si divide in simmetrica, asimmetrica, impronta e firma, e poi in transito e a riposo, perché i due furti sono diversi. Le minacce si raccontano col comportamento: phishing, ransomware, negazione di servizio. Firewall, patch e incidenti sono l’esercizio. Sul database e sull’applicazione web il controllo sta sul server, a ogni richiesta. Certificati, XSS e CSRF completano il quadro di ciò che il browser fa e di ciò che non può fare.

### Come si risponde

Ogni misura si lega a un furto. TLS non protegge un disco rubato. Il disco cifrato non ferma una query iniettata. Nascondere un pulsante non è un’autorizzazione. Il backup che i nodi possono riscrivere non ferma un ransomware. Si chiude con la difesa in profondità: più strati, nessuno presentato come sufficiente da solo.

### Da dove partire

Verde: le tre proprietà, autenticazione e minimo privilegio, crittografia, protezione del database, sicurezza delle applicazioni, come si conservano le password. Cifratura in transito e a riposo, certificati, phishing e incidenti stanno nel giro subito successivo. XSS e CSRF si studiano per distinguerli in un quesito che li mette insieme.

## Riservatezza, integrità e disponibilità

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** CIA, riservatezza, integrità, disponibilità
**Semaforo:** verde

### Inquadramento

Le tre proprietà sono le domande di ogni misura. Riservatezza: chi non deve leggere, non legge. Integrità: il dato non cambia senza che si sappia. Disponibilità: il servizio c'è quando è stato promesso. Una misura ne copre una e può indebolirne un'altra, come un controllo così stretto da impedire il lavoro. Sul foglio si prende un dato della traccia e si assegna una misura a ciascuna proprietà. Si evita l'elenco di prodotti. Il backup risponde soprattutto alla disponibilità e all'integrità dopo una cancellazione, non alla riservatezza, se la copia è in chiaro.

### Definizione

I tre obiettivi di base della sicurezza delle informazioni sono la riservatezza, l’integrità e la disponibilità. In inglese si riassumono in CIA: confidentiality, integrity, availability. Ogni misura si capisce meglio se si dice quale dei tre obiettivi serve. Una misura che ne favorisce uno può ostacolarne un altro, e la scelta va detta.

### I tre obiettivi, con una misura ciascuno

La riservatezza impedisce che l’informazione sia nota a chi non è autorizzato. La servono il controllo degli accessi, la cifratura in transito e a riposo, e la riduzione dei dati raccolti a quelli necessari. Un elenco di candidati lasciato in una cartella leggibile da tutti gli autenticati è un problema di riservatezza, anche se «è dentro la rete».

L’integrità impedisce che l’informazione sia alterata senza che ciò sia evidente e senza autorizzazione, e include l’integrità della fonte: il dato è quello vero, non uno sostituito. La servono i permessi in scrittura, le firme, i controlli di validazione, i log che non si possono riscrivere in silenzio, le transazioni del database. Un atto la cui data è stata cambiata senza traccia è un problema di integrità, anche se chiunque poteva leggerlo.

La disponibilità fa sì che l’informazione e il servizio ci siano quando servono. La servono ridondanza, backup, capacità sufficiente, protezione dagli attacchi che saturano un servizio, e procedure di ripristino. Un sistema cifrato in modo ineccepibile, di cui si è persa l’unica chiave, ha una riservatezza perfetta e una disponibilità nulla. È l’esempio da ricordare del conflitto fra obiettivi.

Si aggiungono spesso, come proprietà vicine, l’autenticità e il non ripudio. L’autenticità dice che il soggetto è chi afferma di essere e che il dato viene da lui. Il non ripudio rende difficile negare in seguito di aver compiuto un atto, ed è il terreno delle firme. Non fanno parte della sigla CIA, ma in un ente pubblico compaiono appena si parla di documenti.

Il rischio unisce una minaccia, una vulnerabilità e un impatto. La minaccia è la causa possibile: un guasto, un errore, un attacco. La vulnerabilità è la debolezza che la minaccia può usare. L’impatto è il danno sulle tre proprietà. Non si trattano tutti i rischi allo stesso modo. Si riducono quelli più probabili e più dannosi, nei limiti del costo, e si dichiarano quelli che si accettano.


### Nel dettaglio

I tre obiettivi si misurano sul dato del tema, non in astratto. Riservatezza: chi non è autorizzato non legge. Nel portale di assistenza, il ticket di un ufficio non compare nell’elenco di un altro, e l’allegato non si scarica cambiando il numero nell’indirizzo. La prova è una richiesta con l’identità giusta e l’oggetto sbagliato, che deve fallire. Integrità: il dato non cambia senza che il cambiamento sia voluto e rintracciabile. Una modifica ha autore e data. Un documento protocollato non si sostituisce in silenzio. La prova è che una riga cambiata si vede nel registro, e che una copia in transito alterata si scarta. Disponibilità: il servizio c’è quando l’ufficio lavora. Si traduce in orario, in RTO, in un secondo nodo se il fermo non è accettabile. Un sistema riservatissimo e spento ha fallito la disponibilità. Un sistema sempre acceso e aperto ha fallito la riservatezza.

I tre obiettivi confliggono, e la risposta matura sceglie. Cifrare tutto e buttare la chiave protegge la riservatezza e distrugge la disponibilità. Tenere tre copie in posti comodi protegge la disponibilità e allarga la riservatezza. Aprire l’amministrazione a molti, per non restare fermi quando un collega è assente, protegge la disponibilità operativa e indebolisce integrità e riservatezza. Si scrive il bilanciamento del proprio tema. Per una pratica riservata si accetta un recupero più lento, con meno persone capaci di sbloccare. Per uno sportello si accetta un costo di ridondanza.

Ogni misura si aggancia a un obiettivo, altrimenti è un elenco. TLS è riservatezza e integrità in transito. Il backup è disponibilità, e se è cifrato è anche riservatezza della copia. Il controllo di versione della riga è integrità contro la sovrascrittura. Il secondo nodo è disponibilità. Il permesso sull’oggetto è riservatezza. Sul foglio, tre colonne mentali, e sotto ciascuna la misura del tema e la prova che la misura funziona.

### Esempio

Un archivio di documenti di commissione. Riservatezza: solo i ruoli della commissione leggono i documenti non ancora pubblici. Integrità: una modifica crea una nuova versione firmata nel log, non sovrascrive in silenzio. Disponibilità: il sistema regge la consultazione durante la seduta e si ripristina entro l’RTO se la sala ha un guasto. La cifratura dei dischi serve la riservatezza a riposo. Il backup immutabile serve la disponibilità dopo un ransomware, e anche l’integrità, perché offre una copia non alterata.

### In sede di prova

Aprire molti quesiti di sicurezza sciogliendo i tre obiettivi, applicati al caso chiesto, non in astratto. Se il quesito è «come proteggi il database», organizzare la risposta in riservatezza, integrità e disponibilità. Chiudere dicendo quale obiettivo resta più esposto e come lo si accetta o lo si riduce.

### Errori da evitare

- Ridurre la sicurezza all’antivirus.
- Parlare solo di riservatezza e dimenticare che un sistema spento è insicuro nel senso della disponibilità.
- Usare «rischio» e «minaccia» come sinonimi.

### Approfondire

- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)
- [Agenzia per la cybersicurezza nazionale](https://www.acn.gov.it/)

## Autenticazione, autorizzazione e minimo privilegio

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** MFA, RBAC, sessione, privilegi
**Semaforo:** verde

### Inquadramento

Autenticazione è chi sei. Autorizzazione è che cosa puoi fare. 401 e 403 le distinguono. Il minimo privilegio vale per le persone e per l'utente del database. I ruoli si assegnano e si revocano, e non si dà l'amministratore a tutti i tecnici per comodità. Sul foglio si elencano i ruoli della traccia con un verbo ciascuno, e si dice che il controllo è sul server a ogni richiesta. Due password non sono un secondo fattore. Un account condiviso rende impossibile dire chi ha fatto che cosa.

### Definizione

L’autenticazione stabilisce chi è il soggetto. L’autorizzazione stabilisce che cosa quel soggetto può fare. Sono domande diverse, e i codici HTTP 401 e 403 le rispecchiano. Il minimo privilegio dice che il soggetto riceve solo i permessi necessari alla sua funzione, per il tempo necessario.

### I fattori e i ruoli

Un fattore di autenticazione è qualcosa che si sa (una password), qualcosa che si ha (un dispositivo, una carta), oppure qualcosa che si è (un dato biometrico, da usare con cautela e mai come unico segreto recuperabile). L’autenticazione a più fattori, MFA, ne chiede almeno due di tipo diverso. Due password non sono due fattori. La MFA è particolarmente dovuta per gli amministratori, per gli accessi da fuori, e per i sistemi che trattano dati rilevanti. Non rende inutile una password buona: rende insufficiente il furto della sola password.

Le password, se si usano, si memorizzano come impronte costruite con algoritmi lenti e con un sale, non in chiaro e non con un hash veloce da dizionario. Meglio ancora, un ente si appoggia a un sistema di identità unico, così le applicazioni non custodiscono affatto le password. Il blocco dopo tentativi ripetuti, o un ritardo crescente, contrasta la prova esaustiva. Il blocco va progettato per non diventare esso stesso un modo per impedire l’accesso a un utente legittimo.

RBAC, controllo degli accessi basato sui ruoli, assegna i permessi a ruoli e i ruoli alle persone. Il dipendente, il tecnico, il responsabile, l’amministratore. Una persona può avere più ruoli, e i ruoli si revocano quando cambia l’ufficio. È il modello da descrivere in un elaborato, perché si spiega in dieci righe. ABAC aggiunge attributi: l’ora, l’ufficio, la classificazione del documento. È più espressivo e più difficile da verificare. Si cita se la traccia ha regole del tipo «solo il titolare del fascicolo, solo fino alla chiusura».

Il minimo privilegio si applica anche alle macchine. Il servizio dell’applicazione non entra nel database come amministratore. L’amministratore del server non usa quell’account per leggere la posta. Gli account condivisi si evitano, perché rendono impossibile l’audit e restano attivi quando una delle persone se ne va.

La sessione ha una scadenza e si invalida al logout. Un ruolo amministrativo può avere una sessione più corta. Cambiare il ruolo mentre la sessione è aperta deve avere un effetto al più tardi alla sessione successiva, e meglio subito, se il permesso è ricontrollato a ogni richiesta. Ricontrollare a ogni richiesta è la scelta da scrivere.


### Nel dettaglio

Autenticare è stabilire chi è. Si basa su qualcosa che la persona sa, qualcosa che ha, qualcosa che è. La parola d’ordine è il primo. Un dispositivo o un certificato è il secondo. Un tratto biometrico, usato con cautela e mai come unico segreto memorizzato male, è il terzo. Due fattori di tipo diverso, insieme, reggono il furto di uno solo. Due parole d’ordine non sono due fattori. Il secondo fattore si mette dove il danno è serio: amministrazione, accesso da fuori, operazioni irreversibili. Metterlo su ogni click abitua a confermare senza guardare.

Autorizzare è stabilire che cosa quell’identità può fare su quell’oggetto, adesso. Avviene dopo, a ogni richiesta, sul server. Il ruolo dà un insieme di azioni. L’oggetto può restringere ancora: il tecnico vede i ticket del proprio ufficio, non quelli di un altro. Un ruolo «amministratore» usato per il lavoro quotidiano viola il minimo privilegio, che chiede il minimo insieme di permessi con cui il lavoro si svolge. Si parte da zero permessi e si aggiunge ciò che serve, non dal massimo togliendo qualcosa.

Il minimo privilegio vale per le persone e per i servizi. Il processo dell’applicazione gira con un utente di sistema che non è root e che non legge i backup. L’utente del database con cui l’applicazione si collega non è il proprietario dello schema: può leggere e scrivere le tabelle del servizio, non può cancellarle e non può leggere le tabelle di un altro sistema. La persona che conduce il sistema ha un conto nominativo, non la password condivisa «admin» scritta in cassaforte aperta. I conti condivisi impediscono di sapere chi ha fatto l’operazione.

Si revoca con la stessa cura con cui si concede. Il cambio di ufficio toglie il gruppo precedente lo stesso giorno. Il conto di un collaboratore esterno ha una scadenza. Un privilegio elevato per un intervento si chiede, si usa, si toglie, e resta nel registro. Sul foglio si descrivono i ruoli del tema, un’azione che ciascuno può fare, un’azione che non può fare, e il punto esatto del server in cui il divieto viene applicato.

### Esempio

Nel portale dei ticket il dipendente si autentica con l’identità dell’ente e un secondo fattore se accede da fuori. Il ruolo «dipendente» crea ticket e legge i propri. Il ruolo «tecnico» legge la coda del proprio gruppo e cambia gli stati operativi. Il ruolo «amministratore» gestisce gli utenti e non viene dato a tutti i tecnici «per comodità». Un tecnico che passa a un altro ufficio perde il ruolo il giorno stesso. Il servizio che scrive nel database ha un utente DBMS che può inserire e leggere quelle tabelle, e non può cancellare lo schema.

### In sede di prova

Definire le due domande, chi sei e che cosa puoi fare. Proporre ruoli coerenti con la traccia, non ruoli generici. Citare MFA per gli accessi più sensibili e il minimo privilegio per l’utente del database. Dire che il controllo è sul server a ogni operazione.

### Errori da evitare

- Nascondere un pulsante e chiamarlo autorizzazione.
- Un solo account amministratore condiviso.
- Confondere autenticazione e autorizzazione nella stessa frase, che è il modo più rapido di sembrare imprecisi.

### Approfondire

- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)

## Crittografia simmetrica, asimmetrica, impronte e firma

**Prove:** seconda prova gruppo 1, orale
**Tag:** AES, RSA, hash, firma digitale, TLS
**Semaforo:** verde

### Inquadramento

La chiave simmetrica è la stessa per cifrare e decifrare, ed è veloce. La coppia asimmetrica separa chiave pubblica e privata, ed è il modo di scambiare un segreto o di firmare. L'impronta è un'impronta del contenuto, non un cifrario. La firma unisce impronta e chiave privata, così si sa chi ha firmato e che il contenuto non è cambiato. Sul foglio si assegna ciascuno a un gesto: TLS usa entrambi, la firma di un atto usa la coppia, il controllo di un file usa l'impronta. La chiave privata non viaggia.

### Definizione

La crittografia trasforma dati in una forma che nasconde il contenuto a chi non ha la chiave, e permette di rilevare alterazioni. Non è un solo algoritmo. In un sistema reale si usano insieme cifratura simmetrica, cifratura asimmetrica e funzioni di impronta, ciascuna per il compito in cui è forte.

### I tre strumenti

Nella cifratura simmetrica la stessa chiave segreta cifra e decifra. È veloce, adatta a grandi quantità di dati. AES è l’algoritmo di riferimento da citare. Il problema non è la velocità: è lo scambio della chiave. Se la chiave viaggia insieme ai dati, o su un canale insicuro, la cifratura non ha protetto nulla. Chi possiede la chiave può anche alterare e rifirmare, se non ci sono altri controlli: la chiave è potere simmetrico.

Nella cifratura asimmetrica ogni soggetto ha una coppia. La chiave pubblica si distribuisce. La chiave privata resta del titolare. Ciò che è cifrato con la pubblica si decifra con la privata: così chiunque può scrivere un messaggio che solo il titolare legge. Ciò che è cifrato, o firmato, con la privata si verifica con la pubblica: così chiunque controlla che l’origine sia il titolare. RSA ed elliptica sono le famiglie da nominare senza entrarci dentro. L’asimmetria è lenta e non si usa per cifrare un intero disco o un flusso video.

L’uso reale è ibrido, ed è quello di TLS. Il client verifica il certificato del server, che lega un nome a una chiave pubblica, grazie a una autorità di certificazione. Poi le due parti concordano una chiave di sessione simmetrica, protetta dall’asimmetria, e con quella chiave veloce cifrano il traffico. Alla fine della sessione la chiave simmetrica si abbandona.

Una funzione di impronta, o hash, produce da un documento un valore breve, praticamente unico, tale che dal valore non si ricostruisce il documento e che un documento diverso produce un’impronta diversa. SHA-256 è un nome corretto. L’impronta non è una cifratura: non si «decifra». Si ricalcola e si confronta. Serve a scoprire una modifica e a costruire le firme. Non si usa un hash veloce, da solo, per custodire le password: servono funzioni apposta, lente e con sale, perché le password sono indovinabili.

La firma digitale combina impronta e chiave privata. Si calcola l’impronta del documento e la si cifra con la privata. Chiunque, con la pubblica, ricalcola l’impronta e verifica. Se coincidono, il documento non è stato modificato e la firma è stata prodotta dal titolare della privata. Integrità, autenticità e, nel quadro giuridico, non ripudio. La firma non rende il documento segreto. Un documento firmato può essere perfettamente leggibile. Se serve anche la riservatezza, si cifra a parte.

Le chiavi private si custodiscono. Una chiave in un file sul desktop non è un sistema di firma. Nei contesti seri sta in un dispositivo, con un PIN, e la sua vita è descritta: emissione, uso, scadenza, revoca. Un certificato revocato non va più accettato. Per i dettagli giuridici della firma nella pubblica amministrazione si usa l’area 11: qui conta il meccanismo.


### Nel dettaglio

La cifra simmetrica usa la stessa chiave per cifrare e per decifrare. È veloce, adatta ai dati grossi: il disco, il flusso di una connessione dopo che le chiavi sono state accordate. Il problema è distribuire la chiave. Se due parti non si sono mai incontrate, non hanno un canale sicuro su cui mandare la chiave, perché il canale sicuro è ciò che stanno cercando di costruire. AES è il nome che si cita, senza doverne raccontare i giri interni.

La cifra asimmetrica usa una coppia. Ciò che si cifra con la pubblica si decifra con la privata, e in alcuni schemi anche il contrario. La pubblica si diffonde. La privata resta dal proprietario. È lenta, e non si usa per cifrare un file grande. Si usa per accordare una chiave simmetrica, che poi cifra il file o la sessione, e per le firme. TLS fa esattamente questo: uno scambio asimmetrico all’inizio, poi simmetrico per i dati. Raccontare TLS come «tutto cifrato con la chiave pubblica» è impreciso e lento in un modo che non esiste.

L’impronta è una funzione che da un documento produce un valore corto, e dal valore non si ricostruisce il documento. Un cambiamento minimo nel documento cambia l’impronta. Si usa per accorgersi di un’alterazione e per non memorizzare le password. Non è una cifra: non si decifra. Algoritmi vecchi, MD5 e SHA-1, non si usano più per la sicurezza, perché si sanno produrre collisioni. Si citano SHA-256 per le impronte di file e un algoritmo lento e salato, Argon2 o bcrypt, per le password.

La firma combina impronta e chiave privata. Si calcola l’impronta del documento e la si cifra con la privata del firmatario. Chiunque, con la pubblica, verifica. Si ottiene integrità e attribuzione: chi possiede la privata ha firmato quel contenuto. Non si ottiene riservatezza: il documento può essere in chiaro. Per averle entrambe si firma e poi si cifra. La chiave pubblica va legata alla persona da un certificato, altrimenti si verifica una firma di qualcuno che non si sa chi sia. Sul foglio, per un documento del tema: impronta per l’integrità del file, firma per chi l’ha approvato, TLS per il viaggio, cifra a riposo se il contenuto è riservato.

### Esempio

L’utente apre il portale. TLS usa l’asimmetria per stabilire una chiave AES di sessione e poi cifra il traffico. Il documento scaricato, se deve avere valore di originale, porta una firma: l’impronta firmata con la privata del firmatario, verificabile con la pubblica. Il disco del database è cifrato con una chiave simmetrica custodita da un servizio di chiavi, così lo smarrimento del disco non consegna i dati. Tre tecniche, tre posti, un sistema.

### In sede di prova

Non scegliere «la crittografia migliore». Assegnare a ciascun problema il suo strumento: simmetrica per i volumi, asimmetrica per lo scambio e per la firma, hash per l’integrità e come pezzo della firma. Dire che TLS è ibrido. Dire che la firma non cifra il contenuto.

### Errori da evitare

- Dire che la chiave pubblica deve restare segreta.
- Dire che l’hash si decifra.
- Citare algoritmi storicamente superati, come MD5 o SHA-1 per usi nuovi, o DES al posto di AES.

### Approfondire

- [Crittografia](https://it.wikipedia.org/wiki/Crittografia)
- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)
- [Firma digitale, AgID](https://www.agid.gov.it/it/piattaforme/firma-elettronica-qualificata)

## Minacce frequenti e difesa in profondità

**Prove:** seconda prova gruppo 1, orale
**Tag:** malware, phishing, ransomware, DDoS
**Semaforo:** giallo

### Inquadramento

Ogni minaccia si racconta col comportamento e con una misura. Il phishing ruba un'azione della persona, e la misura è il secondo fattore più una via per segnalare. Il ransomware cifra, e la misura è la copia che lui non raggiunge. Il servizio negato satura, e la misura è a monte, non un antivirus sul PC. Sul foglio se ne scelgono tre, non venti, e si chiude dicendo che nessuno strato basta da solo. Incolpare l'utente e fermarsi è una risposta incompleta: il sistema deve reggere un errore umano.

### Definizione

Una minaccia è una causa potenziale di danno. Il malware è software scritto per compiere quell’azione contro la volontà del titolare del sistema. La difesa in profondità è il principio per cui non ci si affida a una sola misura: se una viene superata, la successiva limita il danno.

### Le minacce da saper descrivere

Il virus si attacca a un altro contenuto e si esegue quando quello viene eseguito. Il worm si propaga da solo, sfruttando la rete. Il trojan si presenta come un programma lecito e fa altro. Questi nomi si sovrappongono nei programmi moderni, e in prova è meglio descrivere il comportamento che forzare la classificazione.

Il ransomware cifra i dati o blocca i sistemi e chiede un riscatto per la chiave. La difesa non è «pagare». La difesa è avere copie che il ransomware non può raggiungere, un’amministrazione separata, e la capacità di ripristinare. Pagare non garantisce la chiave e finanzia il modello.

Il phishing inganna una persona per farle consegnare credenziali o eseguire un’azione, di solito con un messaggio che imita un mittente legittimo. È ingegneria sociale. La misura tecnica, la MFA, limita il valore della password rubata. La misura organizzativa è addestrare le persone e offrire un modo semplice per segnalare. Il phishing mirato a una persona specifica, con dettagli veri, si chiama spesso spear phishing e funziona meglio dei messaggi generici.

L’attacco a forza bruta prova molte password. Si contrasta con MFA, con password non indovinabili, con il rallentamento dei tentativi e con il monitoraggio. L’attacco di negazione del servizio, e la sua forma distribuita DDoS, satura un servizio con traffico o richieste, da molte origini, per togliergli disponibilità. Si contrasta con capacità, filtri a monte e servizi di mitigazione, non con l’antivirus sul PC.

Le vulnerabilità note di software non aggiornato sono la via più comune degli attacchi non basati sull’inganno. Un sistema esposto con un servizio vecchio non ha bisogno di un attaccante geniale.

La difesa in profondità, applicata, è una lista concreta. Perimetro che filtra. Segmentazione interna. Identità forte. Minimo privilegio. Aggiornamenti. Backup separati. Log. Formazione. Piano di risposta. Nessuna di queste, da sola, copre phishing, ransomware e guasto insieme. Insieme, riducono la probabilità e l’impatto.


### Nel dettaglio

Le minacce che in un ente capitano davvero, e che quindi si raccontano, sono ripetitive. Il phishing: un messaggio che induce a consegnare la password o ad aprire un allegato. La difesa non è solo «stare attenti». È il secondo fattore, così la password rubata non basta, ed è un filtro di posta, e una procedura con cui si segnala. Il malware che cifra i dischi. La difesa è la copia che il malware non può raggiungere, più il privilegio minimo, così il processo dell’utente non cifra anche i backup. L’errore umano: la cancellazione, l’invio nel posto sbagliato. La difesa è il ripristino e un passo di conferma sulle azioni irreversibili. L’abuso di un conto legittimo, un interno che legge ciò che non gli compete. La difesa è il permesso sull’oggetto e il registro degli accessi, non il firewall, che quell’utente lo ha già fatto passare.

La difesa in profondità dice che ogni strato assume che il precedente possa fallire. Il firewall può lasciar passare una richiesta lecita in apparenza. L’applicazione ricontrolla il permesso. Il database accetta solo query parametrizzate e solo dall’utente con pochi privilegi. La copia immutabile sopravvive se tutto il resto è cifrato. Un solo strato «molto forte» è un singolo punto di guasto logico. Quando quel controllo ha un buco, non resta nulla.

Si ordina la risposta per strati, sullo stesso caso. Perimetro: solo la porta del proxy. Rete interna: zone. Identità: secondo fattore per chi amministra. Applicazione: permesso a ogni richiesta, input validato. Dati: vincoli, cifra a riposo se serve, backup irraggiungibile. Rilevazione: registri che qualcuno guarda. Nessuno strato da solo è la sicurezza del sistema. Sul foglio se ne scrivono quattro, ciascuno con il fallimento del precedente che lui ancora ferma.

### Esempio

Un messaggio finge un avviso di scadenza della password e porta a un sito simile. L’utente inserisce le credenziali. Se l’account ha la MFA, il solo furto della password non apre l’accesso. Se il malware arriva comunque da un allegato, la segmentazione gli impedisce di vedere il database. Se cifra i file del PC, il backup del server non è su quel PC. Tre misure, tre strati, nessuno presentato come sufficiente.

### In sede di prova

Scegliere tre minacce, descriverle con il comportamento e non solo con il nome, e affiancare a ciascuna una misura tecnica e, per il phishing, una organizzativa. Chiudere con il principio della difesa in profondità. Evitare l’elenco di venti nomi di malware.

### Errori da evitare

- «Un buon antivirus risolve.» Non vede il phishing ben fatto, non ferma un DDoS, non sostituisce i backup.
- Descrivere il ransomware come un virus qualsiasi, senza parlare delle copie di ripristino.
- Dare la colpa all’utente e fermarsi lì. L’utente è una componente; il sistema deve reggere un errore dell’utente.

### Approfondire

- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)
- [ACN, il sito dell’Agenzia per la cybersicurezza nazionale](https://www.acn.gov.it/)

## Firewall, rilevamento delle intrusioni e registri

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** firewall, IDS, IPS, log, SIEM
**Semaforo:** giallo

### Inquadramento

Il firewall applica regole su che cosa può passare. Il rilevamento avvisa su ciò che assomiglia a un attacco, e produce falsi allarmi che qualcuno deve leggere. I registri servono dopo, per sapere che cosa è successo, e vanno conservati dove l'attaccante di un nodo non li cancella. Sul foglio si scrive una regola vera, con sorgente, destinazione e porta, e si dice dove finiscono i log e per quanto. Un firewall senza regole lette da un essere umano è un ingombro. Gli orologi allineati sono la condizione per mettere in fila i registri.

### Definizione

Il firewall applica regole ai flussi di rete e decide quali far passare. Un sistema di rilevamento delle intrusioni, IDS, osserva il traffico o gli eventi e segnala ciò che assomiglia a un attacco. Un sistema di prevenzione, IPS, è in grado di bloccare quel traffico, non solo di avvisare. I log sono la registrazione di ciò che è accaduto. Nessuno di questi strumenti «fa sicurezza» se nessuno li configura e li legge.

### Come li si descrive in un tema

Un firewall a filtraggio di pacchetti guarda indirizzi e porte. Un firewall di stato tiene conto della connessione: la risposta a una richiesta lecita è ammessa, una connessione nuova nella stessa porta no. Un firewall applicativo, o WAF quando è specializzato sul web, capisce qualcosa del protocollo HTTP e può bloccare schemi tipici di attacco alle applicazioni. Più si sale, più si vede, e più si rischia di bloccare traffico legittimo se le regole sono rozze.

Il firewall ha una politica di default. La politica seria per l’ingresso è il rifiuto, con le aperture elencate. Una politica che permette tutto e poi elenca i divieti dimentica sempre un caso.

L’IDS avvisa. Serve se c’è qualcuno, o un processo, che riceve l’avviso. Altrimenti è un archivio di allarmi. L’IPS blocca e può bloccare anche un’attività lecita: si colloca dove il falso positivo è tollerabile, e si sorveglia. In un elaborato è sufficiente dire dove sta il firewall e che gli eventi di sicurezza sono raccolti. Nominare IDS e IPS solo se si sa dire la differenza fra segnalare e bloccare.

I log di un sistema utile registrano accessi riusciti e falliti, cambi di permesso, operazioni di amministrazione e errori applicativi. Non registrano le password e non registrano dati personali inutili. Stanno su un sistema diverso da quello che li genera, altrimenti chi entra cancella le tracce. Hanno un orologio allineato, senza il quale correlare due eventi è impossibile. Si conservano per un tempo deciso. Uno strumento che li raccoglie e li interroga, a volte chiamato SIEM, è utile quando i sistemi sono molti. In un tema piccolo basta «log centralizzati, conservati, consultabili».

Il monitoraggio della disponibilità, il disco pieno, il servizio fermo, non è il monitoraggio della sicurezza, ma un incidente di sicurezza spesso si vede prima come un’anomalia: un processo che cifra migliaia di file, un account che legge tutto di notte.


### Nel dettaglio

Il firewall con stato tiene una tabella delle connessioni. Una regola tipica permette all’interno di aprire verso l’esterno sulla porta quattrocentoquarantatré, e permette il ritorno solo dei pacchetti che appartengono a una connessione aperta. Una sonda dall’esterno che non corrisponde a nulla cade. Le regole si leggono in ordine, e l’ultima è il rifiuto. Una regola larga messa in alto rende inutili quelle sotto. Le regole si scrivono per permesso esplicito: da questa zona a questa zona, questa porta. Ogni regola ha un motivo, una data e un proprietario. La regola «temporanea» senza scadenza diventa permanente. Due volte l’anno si tolgono quelle che nessuno sa più spiegare.

Il rilevamento guarda il traffico o i sistemi e avvisa. Non sostituisce il firewall: vede ciò che il firewall ha lasciato passare, oppure vede un comportamento, tante autenticazioni fallite, un processo che cifra file in serie. L’avviso senza una persona che lo riceve e senza una procedura è un giornale che non si stampa. Si scelgono pochi avvisi, quelli che si è disposti a seguire, invece di cento che si ignorano. La prevenzione automatica, che oltre ad avvisare blocca, si usa dove il falso positivo non ferma l’ufficio, o si accetta il rischio e lo si dice.

I registri sono la materia prima. Senza un orologio comune, i registri di proxy, applicazione e database non si allineano, e l’incidente non si ricostruisce. Si sincronizza l’ora. Si registrano gli accessi, i rifiuti di autorizzazione, le operazioni di amministrazione, le modifiche di configurazione. Non si registrano le password e non si registrano i contenuti dei documenti riservati: il registro diventerebbe una seconda copia del segreto, da proteggere quanto l’originale. I registri si mandano su un sistema che l’amministratore del server non può modificare, altrimenti chi entra cancella le tracce. Si tengono per il tempo che la regola dell’ente chiede, e si sa cercare: un registro in cui non si sa trovare l’accesso di ieri non serve.

Sul foglio: firewall per diniego di default fra le zone, pochi avvisi con un destinatario, registri allineati nel tempo e non modificabili da chi è sorvegliato.

### Esempio

Il firewall perimetrale pubblica solo la porta 443 verso il reverse proxy e rifiuta il resto. Il firewall interno lascia passare solo la porta del database dagli application server. I log del proxy, dell’applicazione e del database arrivano a un server di log che gli amministratori dei sistemi precedenti non possono cancellare. Un allarme scatta dopo dieci autenticazioni fallite dello stesso account. Qualcuno lo riceve, di giorno, e c’è un sostituto.

### In sede di prova

Dire la politica di default del firewall e due regole coerenti con il disegno. Distinguere IDS e IPS in una frase. Dire dove stanno i log e perché non stanno solo sulla macchina sorvegliata. È concreto, e si collega al disegno di rete dell’area 4.

### Errori da evitare

- «Mettiamo un firewall di ultima generazione» senza una regola.
- Registrare tutto per sempre, comprese le password e i documenti, e chiamarlo audit.
- Pretendere che l’IDS sostituisca le patch.

### Approfondire

- [Firewall](https://it.wikipedia.org/wiki/Firewall)
- [Log](https://it.wikipedia.org/wiki/Log)

## Proteggere un database che contiene dati riservati

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** database, cifratura, permessi, backup
**Semaforo:** verde

### Inquadramento

Il database si protegge togliendogli il pubblico, restringendo l'utente dell'applicazione, parametrizzando le query e cifrando i dischi e le copie, con le chiavi altrove. Il filtro del ruolo sta nella query, così un identificativo cambiato non restituisce la riga di un altro. Sul foglio si prende il dato più riservato della traccia e si dice chi può leggerlo, da quale rete, e che cosa resta in un backup. L'amministratore del motore non usa quell'account per il lavoro quotidiano. Un export non tracciato è una copia che sfugge.

### Definizione

Proteggere un database riservato significa ridurre chi può leggerlo e modificarlo, rendere inutile il furto del solo disco, impedire che le applicazioni lo espongano per errore e garantire di poterlo ripristinare integro.

### Le misure, strato per strato

Rete. Il database non ha un indirizzo pubblico e non sta nella rete degli uffici. Accetta connessioni solo dagli application server, su una sola porta, attraverso il firewall interno. L’amministrazione passa da un percorso separato.

Identità. L’applicazione usa un account con i permessi delle sole operazioni che compie. Gli amministratori del DBMS sono nominativi, pochi, con MFA, e le loro azioni sono registrate. Gli utenti umani non hanno un account sul DBMS: passano dall’applicazione, che applica i ruoli. Fa eccezione un riporto in sola lettura, se esiste, con un account dedicato e non condiviso.

Applicazione. Query parametrizzate, così un input non diventa una query. Errori generici verso l’utente. Validazione dei dati. Controllo del ruolo a ogni lettura, non solo alla login: un utente non legge il ticket di un altro cambiando il numero nell’indirizzo. È l’errore di controllo degli accessi più comune, e vale la pena citarlo.

Cifratura. TLS fra applicazione e database, così chi ascolta nella VLAN non legge le query. Cifratura del disco o dello spazio del DBMS, così una copia del disco sottratta non è leggibile. Le chiavi non stanno nello stesso disco. I backup sono cifrati anch’essi, altrimenti la copia notturna è la via più comoda per portare via i dati.

Dati. Si raccolgono solo i campi necessari. Un codice fiscale non si mette in una tabella di prenotazione sale se non serve. I dati particolari si separano e si accede loro con un permesso in più. Le esportazioni, i CSV scaricati «per lavorare», sono un secondo database senza controlli: vanno limitate e registrate.

Disponibilità. Backup verificati, con un RPO detto, su un sistema che l’applicazione non può cifrare. Una prova di restore. Il ransomware che cifra il server e trova il backup sulla stessa share amministrata dallo stesso account ha vinto.

Tracce. Si registra chi ha letto grandi quantità di dati, non solo chi ha modificato. Un furto spesso è una lettura, lecita per i permessi troppo ampi.


### Nel dettaglio

Si parte da dove sta la macchina. In una zona che solo i nodi applicativi raggiungono, su una porta sola. Nessun indirizzo pubblico, nessuna regola «per la manutenzione da casa» che lascia la porta aperta. L’amministrazione arriva da una postazione di gestione, con un conto nominativo, e resta nel registro. Il file del database e le sue copie hanno permessi del sistema operativo: l’utente dell’applicazione non legge il file a disco, legge tramite il servizio, e un altro utente del sistema non legge il file per curiosità.

L’utente con cui l’applicazione si collega è il cuore del privilegio. Può eseguire le operazioni previste sulle tabelle previste. Non è superuser. Non legge le tabelle di un altro schema. Non può caricare file dal disco del server, funzione con cui molte intrusioni escono dal database verso il sistema. Le persone si collegano con conti propri quando fanno amministrazione, non con l’utente dell’applicazione. Così il registro distingue il programma dalla persona.

I dati particolarmente riservati si possono cifrare a riposo. La cifra del disco protegge dal furto fisico del disco, non da chi entra con le credenziali del database, perché il servizio, una volta acceso, vede i dati in chiaro. La cifra di colonna protegge anche da un accesso SQL, al costo di non poter cercare facilmente su quella colonna. Si cifra ciò che non si deve interrogare per contenuto, per esempio un identificativo di documento copiato per intero, e si lascia in chiaro ciò su cui si filtra, riducendolo se possibile. La chiave di cifra non sta nella stessa tabella, e non sta nel repository del codice.

Le copie ereditano la riservatezza. Un backup non cifrato su una condivisione aperta è il dato riservato in un secondo posto, più facile del primo. Si cifra la copia o si tiene in un luogo con gli stessi controlli, e si limita chi può ripristinare. Il ripristino in un ambiente di prova, fatto con dati veri, è un incidente frequente: l’ambiente di prova ha password banali e accessi larghi. Si ripristina su dati resi anonimi, salvo un caso controllato. Sul foglio: zona e porta, utente del servizio con privilegi stretti, cifra di ciò che si è scelto e dove sta la chiave, copie con lo stesso livello di cura, prova di ripristino senza spargere i dati.

### Esempio

Il database dei fascicoli sta nella VLAN dati. L’unico client è l’applicazione. Il disco è cifrato. Il backup notturno è immutabile per trenta giorni e cifrato, in un altro ambiente. Un utente dell’applicazione che modifica l’identificativo nella richiesta riceve 403, e la query filtra comunque per il suo ambito, non solo per l’identificativo chiesto. Due controlli, perché uno si dimentica.

### In sede di prova

Questa è una domanda tipica da gruppo 1. Rispondere a strati: rete, account, applicazione, cifratura, copie, audit. Cinque paragrafi brevi battono una lista di prodotti. Collegare al GDPR solo per i dati personali, senza trasformare la risposta tecnica in una risposta solo giuridica.

### Errori da evitare

- Cifrare il disco e lasciare l’account applicativo con i diritti di amministratore.
- Considerare la rete interna «fidata» e quindi il database senza TLS e senza filtri.
- Un backup sullo stesso server, nella stessa cartella dei dati.

### Approfondire

- [SQL injection](https://it.wikipedia.org/wiki/SQL_injection)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Vulnerabilità, patch e gestione degli aggiornamenti

**Prove:** seconda prova gruppo 1, orale
**Tag:** patch, CVE, finestra di manutenzione, change
**Semaforo:** giallo

### Inquadramento

Una vulnerabilità è un difetto sfruttabile. La patch lo chiude, e va provata prima dell'esercizio, in una finestra, con un modo di tornare indietro. Il sistema esposto e non aggiornato è la via più comune, più di un attacco geniale. Sul foglio si descrive il percorso di una patch: notizia, prova, finestra, applicazione, verifica. Si dice chi decide il rinvio e fino a quando. Rinviare senza una data è lasciare l'ingresso aperto. I componenti dell'applicazione, non solo il sistema operativo, rientrano nello stesso elenco.

### Definizione

Una vulnerabilità è un difetto che può essere usato per violare la riservatezza, l’integrità o la disponibilità. Una patch è la modifica che corregge quel difetto, o un altro difetto. Gestire gli aggiornamenti significa sapere che cosa si ha, quanto è esposto, e applicare le correzioni in un tempo proporzionato al rischio, senza rompere il servizio.

### Il ciclo, detto in modo operativo

Inventario. Non si aggiorna ciò che non si sa di avere. Un elenco di server, sistemi, applicazioni e versioni è una misura di sicurezza, non un adempimento burocratico. Entra nell’inventario anche ciò che è «temporaneo» e in cloud, dove una macchina dimenticata resta esposta.

Informazione. Le vulnerabilità note hanno un identificativo pubblico, il CVE, e un giudizio di gravità. Non tutte vanno trattate la notte stessa. Quelle sfruttabili da rete, senza autenticazione, su un sistema esposto, vengono prima di un difetto che richiede già un accesso da amministratore.

Prova. La patch si applica prima in un ambiente che assomiglia alla produzione, o almeno su un nodo non unico. Si verifica la funzione principale. Poi si applica in produzione, in una finestra dichiarata, con un modo per tornare indietro: snapshot della macchina virtuale, pacchetto precedente, backup. Aggiornare e non poter tornare indietro trasforma la sicurezza in un incidente di disponibilità.

Tempi. Un’organizzazione seria distingue gli aggiornamenti ordinari, per esempio mensili, dalle correzioni urgenti, che hanno un canale più rapido e un responsabile autorizzato a interrompere. Rimandare sempre «al prossimo cambio» lascia i sistemi noti come vulnerabili per mesi. I servizi esposti a Internet hanno la priorità su un PC di un ufficio interno, a parità di difetto, perché la superficie è maggiore. Anche i PC vanno aggiornati: sono il punto da cui parte il phishing riuscito.

I componenti dentro le applicazioni, le librerie, seguono la stessa logica. Un sistema operativo aggiornato con una libreria vecchia dentro l’applicazione resta vulnerabile. Nel mondo dei container si ricostruisce l’immagine, non si entra nel container a rattoppare a mano.

La gestione delle patch è anche un processo di change dell’area 8. Un cambiamento non autorizzato, fatto di fretta su un server di produzione, è esso stesso un rischio. Il punto di equilibrio si scrive: chi approva l’urgenza, chi verifica, chi comunica il fermo.


### Nel dettaglio

Una vulnerabilità è un difetto che si può usare per far fare al sistema qualcosa che non doveva. Viene pubblicata, riceve un identificativo, e da quel momento chiunque può leggerla. Il tempo fra la pubblicazione e l’aggiornamento è la finestra in cui il sistema è un bersaglio noto. Per i difetti gravi, con uno sfruttamento già disponibile, la finestra si misura in giorni, non in mesi. Aspettare il «ciclo trimestrale» per un difetto di questo tipo è una scelta, e va detta come accettazione del rischio, non come prudenza.

La patch si prova e poi si applica. In un ambiente di prova che assomiglia all’esercizio si applica, si eseguono le funzioni critiche, poi si applica in esercizio in una finestra, con un modo di tornare indietro. Tornare indietro è più facile se l’aggiornamento è piccolo e frequente. Un sistema non aggiornato da due anni non si aggiorna in un pomeriggio: il salto è grande, l’applicazione può rompersi, e nel frattempo i difetti sono tutti aperti. Il ritmo ordinario, mensile o meglio, tiene il salto piccolo. Il sistema fuori supporto, che non riceve più patch, va isolato o spento, e in un tema lo si dice con una data.

Si aggiorna tutto ciò che è esposto e tutto ciò che custodisce, non solo il sistema operativo. L’hypervisor, il firmware, il DBMS, il runtime, le librerie dell’applicazione, il proxy. Una libreria nota come vulnerabile dentro un’applicazione scritta bene è abbastanza. L’inventario delle versioni è la condizione: non si patcha ciò che non si sa di avere. Un registro dice che cosa gira, in che versione, e quando è stato aggiornato.

La sostituzione del componente è a volte più onesta della patch. Un’applicazione che non si può aggiornare perché chi la scrisse non c’è si mette dietro un proxy che filtra, si restringe la rete, e si pianifica la sostituzione. Sul foglio: inventario, finestra ordinaria, eccezione per i difetti gravi, prova prima dell’esercizio, e il sistema fuori supporto trattato come un rischio con una data di fine.

### Esempio

Viene pubblicata una vulnerabilità sul software del reverse proxy, sfruttabile da Internet. L’ente ha l’inventario e sa di avere due proxy. La correzione si prova nel pomeriggio sull’ambiente di test, si applica la sera sul primo nodo, si verifica il portale, si applica al secondo nodo. Lo snapshot precedente resta fino al mattino. Il tutto è un change urgente, con un responsabile, non un gesto anonimo.

### In sede di prova

Definire vulnerabilità e patch. Descrivere il ciclo inventario, priorità, prova, applicazione, ritorno indietro. Dire che i tempi dipendono dall’esposizione. Collegare, con una frase, al change management, così si mostra che sicurezza e gestione dei servizi sono lo stesso lavoro visto da due lati.

### Errori da evitare

- «Aggiorniamo sempre subito in produzione.» È come non aggiornare mai: prima o poi qualcuno si rifiuterà, dopo un disservizio.
- Spegnere gli aggiornamenti perché una volta hanno dato fastidio.
- Dimenticare le librerie applicative e i firmware degli apparati.

### Approfondire

- [Vulnerabilità note](https://it.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Risposta a un incidente di sicurezza

**Prove:** seconda prova gruppo 1, orale
**Tag:** incidente, CSIRT, contenimento, ripristino
**Semaforo:** giallo

### Inquadramento

Un incidente si contiene, si capisce, si recupera, e poi si impara. I ruoli, prima dell'emergenza, dicono chi stacca un nodo, chi avvisa, chi conserva le prove. Pagare un riscatto non è un piano. Sul foglio si prende un ransomware su una postazione e si dice l'ordine: isolare, capire fin dove è arrivato, ripristinare da copie che non erano raggiungibili, avvisare se ci sono dati personali. Si distingue l'incidente, che si chiude quando il servizio torna, dal problema, che si chiude quando la causa è tolta.

### Definizione

Un incidente di sicurezza è un evento che compromette, o può compromettere, riservatezza, integrità o disponibilità, e che richiede una risposta organizzata. La risposta è un processo: prepararsi, identificare, contenere, eradicare, ripristinare, imparare. Improvvisare durante l’incidente, senza un piano, fa perdere le tracce e allunga il fermo.

### Le fasi, in parole spendibili

Prepararsi, prima. Ruoli: chi comanda la risposta, chi parla all’esterno, chi ha le credenziali di emergenza, chi decide se staccare un sistema. Strumenti: log che esistono già, backup che si sono già provati, un elenco dei sistemi. Senza questa fase, le fasi successive sono panico.

Identificare. Un allarme, una segnalazione di un utente, un file cifrato, un account che ha fatto accessi impossibili. Si conferma che è un incidente e si capisce perimetro: quali sistemi, da quando, quali dati. Spegnere tutto a caso può cancellare la memoria che servirebbe a capire. Anche non spegnere nulla, lasciando l’attaccante dentro, peggiora il danno. La decisione dipende dal caso ed è il motivo per cui serve un responsabile già nominato.

Contenere. Si isolano i sistemi coinvolti dalla rete, si revocano le credenziali esposte, si bloccano le chiavi. Il contenimento breve ferma l’emorragia. Poi si pulisce: eradicare significa togliere l’accesso dell’attaccante, le modifiche, le attività programmate che ha lasciato, e correggere la vulnerabilità usata per entrare. Ripristinare un backup senza chiudere la via di ingresso riconsegna il sistema.

Ripristinare. Si torna in servizio da copie di cui ci si fida, si cambiano le password, si sorveglia di più nei giorni successivi. Il servizio riparte quando è pulito, non quando l’ufficio preme. Se i dati personali sono coinvolti, scatta anche la valutazione prevista dal GDPR sulla notifica: non è automatico che ogni incidente si notifichi, è obbligatorio valutare se il rischio per le persone lo richiede, e i tempi sono stretti. Per le amministrazioni e per alcuni soggetti, anche la normativa sulla cybersicurezza prevede flussi di notifica verso l’ACN. In un tema si dice che le notifiche fanno parte del piano, e si verificano gli obblighi sul caso concreto, senza inventare un termine se non si è sicuri.

Imparare. Che cosa ha fallito: una patch, un permesso, una prova di backup mai fatta, un allarme ignorato. Il piano si aggiorna. Un incidente senza una lezione scritta si ripete.


### Nel dettaglio

Un incidente è un evento che compromette riservatezza, integrità o disponibilità, o che potrebbe farlo se non si interviene. La prima decisione è contenere, non investigare a fondo. Un server che sta cifrando i file si stacca dalla rete. Un conto rubato si disabilita. Si accetta un fermo più ampio del minimo, per un tempo breve, pur di fermare il danno. Spegnere tutto senza criterio può cancellare la memoria che servirebbe a capire, quindi chi può scatta una copia dello stato, se sa farlo in fretta, e poi isola. In un ente piccolo la mossa sicura è isolare e chiamare chi ha la competenza, interno o un servizio già contrattato, non improvvisare l’analisi sul sistema vivo.

Poi si capisce l’estensione. Quali conti, quali sistemi, da quando. I registri, se sono sopravvissuti e se l’ora è allineata, permettono di ricostruire. Si cambia le credenziali che possono essere state lette, non solo quella evidentemente usata. Si guarda se il salto è arrivato al database, alle copie, alla posta. Una contenimento che lascia intatta la via di rientro, per esempio una chiave di amministrazione ancora valida, non contiene.

Il ripristino usa copie di cui ci si fida, precedenti all’inizio dell’incidente. Ripristinare una copia già compromessa rimette dentro l’accesso. Dopo il ripristino si chiudono il difetto usato e le credenziali, e solo allora si riammettono gli utenti. Si avvisano le persone secondo gli obblighi: un incidente con dati personali ha tempi e destinatari, e la decisione non è solo tecnica. Si scrive che cosa è successo, in un linguaggio che un ufficio capisce.

Dopo, si cambia una cosa nel sistema o nella procedura, quella che avrebbe accorciato l’incidente. Senza questo passo, la risposta è un’emergenza e non un miglioramento. Sul foglio, cinque verbi in ordine: isolare, stimare l’estensione, estinguere le vie di rientro, ripristinare da una copia pulita, avvisare e correggere la causa. Con un esempio di ransomware: staccare, non pagare come prima mossa, verificare fino a dove è arrivata la cifra, ripristinare la copia immutabile, cambiare le credenziali, capire da quale messaggio è entrato.

### Esempio

Un ransomware cifra i file del file server alle 6 del mattino. Il monitoraggio avvisa. Il responsabile stacca il server dalla rete, non lo spegne subito se il piano chiede di conservare la memoria, e revoca gli account di servizio. Si identifica il via di ingresso, una credenziale VPN senza MFA. Si ripristina dal backup immutabile della notte, dopo aver verificato che quella copia non sia cifrata. Si riapre il servizio nel pomeriggio. La VPN viene chiusa finché la MFA non è attiva per tutti. Il backup ha retto perché non era raggiungibile con quella credenziale. La lezione entra nel piano la settimana stessa.

### In sede di prova

Dare le fasi in ordine e un esempio corto. Sottolineare che il ripristino senza eradicare è un invito a rientrare, e che le notifiche non si improvvisano la sera dell’incidente. Collegare ai backup dell’area 1.

### Errori da evitare

- Pagare il riscatto come unica misura.
- Cancellare i log «per pulire» prima di aver capito.
- Ripristinare e riaprire la stessa VPN con la stessa password.

### Approfondire

- [Sicurezza informatica](https://www.acn.gov.it/)
- [Garante privacy, notifiche di violazione](https://www.garanteprivacy.it/)

## Sicurezza delle applicazioni web, al livello di un elaborato

**Prove:** seconda prova gruppo 1 e gruppo 2, prima prova
**Tag:** OWASP, controllo accessi, XSS, sessione
**Semaforo:** verde

### Inquadramento

Nel tema la sicurezza dell'applicazione è concreta. Identità dell'ente, controllo sul server, query parametrizzate, testo trattato come testo, errori che non mostrano la query, codici coerenti. Sul foglio si legano quattro di questi punti a quattro requisiti numerati. Si rifiuta esplicitamente di fidarsi del solo browser. Un capoverso basta, se è preciso. Un elenco di sigle senza un requisito accanto non dimostra che il sistema della traccia sia protetto.

### Definizione

La sicurezza di un’applicazione web è l’insieme dei controlli che impediscono a un utente, o a chi si spaccia per lui, di leggere dati non suoi, modificare dati senza diritto, eseguire codice nel browser altrui o abusare di una sessione. È distinta dalla sicurezza della rete: un’applicazione insicura è raggiungibile attraverso la porta che il firewall deve lasciare aperta, la 443.

### I difetti da saper spiegare

Il controllo degli accessi mancante o fatto solo nel browser. L’utente cambia un identificativo nella richiesta e legge il documento di un altro. La correzione è verificare sul server, a ogni richiesta, che quel soggetto possa compiere quell’azione su quell’oggetto. È il difetto più importante da citare in un progetto multiutente.

L’injection, di cui la SQL injection è il caso noto. I dati non diventano codice. Query parametrizzate, e lo stesso principio per i comandi di sistema e per i modelli.

Il cross-site scripting, XSS: l’applicazione prende un testo dell’utente e lo rimanda al browser come se fosse parte della pagina, così il browser esegue uno script. Un commento a un ticket, se viene mostrato senza essere trattato come testo, può rubare la sessione di chi lo legge. La correzione è far codificare l’output nel posto giusto e non costruire pagine concatenando stringhe e input. Un tema d’esame non chiede di scrivere il filtro. Chiede di sapere che il testo degli utenti non è fidato.

La sessione debole. Identificativi prevedibili, cookie trasmessi anche senza TLS, sessioni che non scadono, sessioni che restano valide dopo il cambio password. Il cookie di sessione viaggia solo con HTTPS e non è leggibile da script se non serve esserlo.

I file caricati. Se l’applicazione permette di allegare un file, quel file non viene eseguito come programma, ha una dimensione massima, e non viene servito dallo stesso contesto che esegue l’applicazione. È un punto che le tracce con «allegati» dimenticano spesso.

Gli errori e i log. Un messaggio che mostra la query aiuta l’attaccante. Una password nel log è una copia in chiaro. Si registra l’evento, non il segreto.

Le dipendenze. L’applicazione include librerie scritte da altri. Vanno aggiornate come il sistema operativo. In un progetto si scrive che le componenti hanno un proprietario e una procedura di aggiornamento.


### Nel dettaglio

L’applicazione è raggiungibile da browser, quindi da chiunque possa aprire una connessione, e ogni dato che arriva è un dato da non fidarsi. La lista corta, quella che in un tema si scrive e si sa spiegare, è questa. Permessi ricontrollati sul server a ogni richiesta, sull’oggetto, non solo sulla pagina. Query parametrizzate. Sessione con cookie protetto, scadenza, invalidazione al logout. Parole d’ordine memorizzate con algoritmo lento e sale, se sono locali. Validazione dei campi: tipo, lunghezza, elenco dei valori ammessi, rifiuto del resto. Messaggi di errore che non mostrano la query, il percorso del file, la versione del sistema. File caricati tenuti fuori dalla cartella pubblica, con un nome deciso dal server, e un controllo del tipo. Pagine che non si possono incorporare in un altro sito per indurre un click, se il problema si pone. Registro degli accessi negati e delle azioni sensibili.

Il filo unico è: il browser è di chi lo usa. Qualunque controllo fatto solo lì, un campo disabilitato, un menu che non mostra la voce, un controllo di lunghezza in JavaScript, è una cortesia per l’utente onesto. L’utente ostile, o il programma che parla al posto del browser, invia la richiesta direttamente. Per questo ogni controllo che conta si ripete sul server. Sul client si ripete per far comparire l’errore subito, senza aspettare.

I dati riservati non finiscono dove non si controllano. L’indirizzo della pagina può finire nei registri di un proxy e nei segnalibri: non ci si mette una password e non ci si mette un segreto. Il registro dell’applicazione non stampa l’intero numero di una carta o l’intera parola d’ordine per «vedere se arriva». L’ambiente di prova non usa i dati veri.

Sul foglio si scelgono cinque controlli e si agganciano a un punto del proprio flusso. Per il download di un allegato: il server verifica la sessione, verifica che quell’utente possa vedere quel ticket, prende il file dallo storage con un nome interno, lo consegna. Salta uno di questi passi e l’allegato è pubblico. È meglio un flusso solo, raccontato per intero, di un elenco di venti sigle.

### Esempio

Il campo «descrizione» del ticket viene salvato come dato e mostrato come testo. Il numero di ticket nell’indirizzo non è un’autorizzazione: il server carica il ticket e controlla che l’utente sia il richiedente, il tecnico del gruppo, o un amministratore. L’allegato finisce in uno storage che non esegue file, con un nome deciso dal server, non dal nome originale. La sessione scade e il cookie non viaggia in chiaro. Quattro requisiti non funzionali, tutti scrivibili in un elaborato.

### In sede di prova

Scegliere il controllo degli accessi, l’injection e un terzo difetto, e per ciascuno dire il comportamento e la misura. Collegare alla propria traccia: se ci sono commenti, citare l’XSS; se ci sono allegati, citare i file; se ci sono ruoli, citare l’oggetto della richiesta ricontrollato sul server.

### Errori da evitare

- Rispondere alla sicurezza applicativa con «usiamo HTTPS e un firewall». Servono, e non affrontano un identificativo cambiato a mano.
- Validare solo lato browser.
- Fidarsi del nome del file inviato dall’utente.

### Approfondire

- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Certificati, autorità e che cosa controlla il browser

**Prove:** seconda prova gruppo 1, orale
**Tag:** TLS, certificato, CA, catena
**Semaforo:** giallo

### Inquadramento

Il certificato lega un nome a una chiave pubblica, e un'autorità fidata dal browser firma quel legame. Il browser controlla il nome, la scadenza, la firma e se l'autorità è tra quelle che conosce. Un certificato valido per un altro nome non è il portale, anche se il lucchetto inganna. Sul foglio si dice chi emette il certificato del portale interno e su quale nome. Un'eccezione che l'utente deve accettare a mano è un'abitudine che rende il phishing più facile. La chiave privata sta sul proxy che termina TLS, non nel codice.

### Definizione

Un certificato digitale lega un nome, per esempio il nome del portale, a una chiave pubblica, e porta la firma di chi garantisce quel legame. L'autorità di certificazione è il soggetto che firma. Il browser non «si fida del lucchetto». Controlla una catena, dal certificato del sito fino a un'autorità che già possiede, e controlla che il nome e le date tornino. TLS usa quel legame per essere sicuro di parlare con il server giusto prima di concordare la chiave simmetrica di sessione.

### I controlli, uno per uno

Il client riceve il certificato del server e, se servono, quelli intermedi. Verifica le firme risalendo la catena, fino a una radice installata nel sistema operativo o nel browser. Se l'intermedio manca e il client non può ricostruire la catena, la verifica fallisce anche se il sito è legittimo. Controlla le date: un certificato scaduto è un fallimento, non un avviso da cliccare per abitudine. Controlla il nome. Un certificato emesso per un altro nome, anche della stessa organizzazione, non vale per questo sito. Controlla che il certificato non sia stato revocato, quando il meccanismo di revoca è disponibile e non aggirato. Poi, e solo poi, la chiave pubblica di quel certificato serve a proteggere lo scambio della chiave di sessione. I dati della pagina li cifra la chiave simmetrica, non la chiave della autorità.

Un ente può avere un'autorità interna per i servizi che non escono. I PC dell'ente hanno quella radice installata. Un portatile di casa no. Per questo un servizio solo interno può usare la CA dell'ente, e un servizio raggiunto anche da fuori no, a meno di non usare un'autorità pubblica. Insegnare agli utenti a cliccare «procedi comunque» distrugge il controllo: il browser stava segnalando proprio il caso dell'uomo nel mezzo o del certificato sbagliato.

Il certificato non autorizza l'utente. Dice chi è il server. L'utente si autentica dopo, con l'identità dell'ente. E il certificato non cifra il database. Cifra il transito fino al punto in cui TLS termina, di solito il reverse proxy. Da lì in poi serve una scelta esplicita.

```disegno
titolo: Catena che il browser ricostruisce
riga: Certificato del portale, nome e chiave pubblica
freccia: firmato da
riga: Autorità intermedia
freccia: firmata da
riga: Autorità radice già presente nel browser
nota: Se il nome non è quello digitato, o la data è scaduta, la catena valida non basta. Il lucchetto non giudica il contenuto della pagina.
```


### Nel dettaglio

Un certificato lega un nome a una chiave pubblica, e questa legatura è firmata da qualcuno. Il browser crede a un insieme di autorità già presenti nel sistema. Quando il server manda il certificato, il browser controlla che la firma risalga a una di quelle autorità, che il nome nel certificato sia il nome che ha chiesto, che la data sia valida, che il certificato non sia stato revocato. Se un controllo fallisce, il browser avvisa e, salvo che l’utente insista, non apre la sessione. L’insistenza dell’utente è il punto debole: un avviso abituale viene cliccato. Per questo un certificato scaduto è un incidente, non un fastidio.

L’autorità interna dell’ente può firmare certificati per i servizi interni. I browser dell’ente si fidano di quell’autorità solo se qualcuno l’ha installata su quelle postazioni. Un portatile nuovo, che non l’ha, vedrà un avviso. Un utente esterno non la avrà mai. I servizi pubblicati all’esterno usano un’autorità pubblica. I servizi interni possono usare l’autorità dell’ente, e si dice come arriva sui PC. Un’autorità interna installata in silenzio è potente: chi la possiede può firmare qualunque nome e farsi passare per qualunque sito agli occhi di quelle postazioni. La chiave privata dell’autorità si custodisce come il bene più sensibile, meglio se non sta sulla stessa macchina dei servizi.

Il rinnovo è una procedura, non un ricordo. I certificati scadono di proposito, spesso dopo un anno o meno. Si tiene la data, si rinnova prima, si sostituisce sul proxy, si verifica. Un servizio con due proxy si aggiorna su entrambi. Il nome nel certificato deve comprendere il nome che gli utenti scrivono davvero, non solo il nome interno. Un certificato per il nome interno, raggiunto con il nome pubblico, produce un avviso per tutti.

Sul foglio: chi firma, per quale nome, dove sta la chiave privata, chi si fida di quella firma, quando scade e chi rinnova. Cinque risposte, e il certificato smette di essere un file misterioso.

### In sede di prova

Dire che il certificato lega un nome a una chiave pubblica. Elencare nome, date, catena, revoca. Distinguere fiducia nel server e login dell'utente. Dire dove termina TLS nel proprio disegno. È una risposta da orale e da quesito di sicurezza, e si aggancia alla firma digitale: anche lì c'è un certificato, ma firma un documento, non una sessione.

### Errori da evitare

- «Il certificato cifra i dati nel database.»
- Accettare un certificato il cui nome non è quello del sito.
- Una radice privata installata sui PC, usata poi per un sito aperto al pubblico che quei PC non sono.

### Approfondire

- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)
- [Certificato digitale](https://it.wikipedia.org/wiki/Certificato_digitale)

## XSS e CSRF, due attacchi diversi

**Prove:** seconda prova gruppo 1 e gruppo 2
**Tag:** XSS, CSRF, sessione, input
**Semaforo:** giallo

### Inquadramento

XSS fa eseguire nel browser di una vittima un testo che l'applicazione ha trattato come codice. La difesa è trattare i testi come testi. CSRF fa compiere al browser di una persona già entrata un'azione che quella persona non voleva. La difesa è un segreto che il sito estraneo non conosce, legato all'azione. Sul foglio si raccontano in quattro righe l'uno e l'altro, con la difesa accanto. Scambiarli è l'errore tipico. Nessuno dei due si cura solo con il firewall di rete.

### Definizione

Il cross-site scripting, XSS, fa eseguire nel browser della vittima un testo che l'attaccante è riuscito a far passare per parte della pagina. Il cross-site request forgery, CSRF, fa compiere al browser della vittima, già autenticato, una richiesta che la vittima non intendeva fare. Nel primo il browser esegue codice o un contenuto attivo dell'attaccante. Nel secondo esegue una richiesta lecita dal punto di vista della sessione, verso un sito che si fida del browser. Vanno distinti perché le difese non sono le stesse.

### I due meccanismi

Nell'XSS il punto di ingresso è un dato che l'applicazione rimanda al browser senza trattarlo come testo. Un commento al ticket contiene un frammento che, se inserito nel HTML, diventa uno script. Chi apre il commento esegue quello script nella sessione del portale. Lo script può leggere ciò che la pagina mostra o parlare al sito con la sessione della vittima. La difesa è far codificare l'output nel punto giusto, così i caratteri che aprirebbero un tag restano caratteri, e non costruire le pagine concatenando input. Una politica di contenuto che limita da dove possono arrivare gli script è una seconda linea. Validare l'input aiuta la qualità dei dati e non basta: un commento può essere un testo legittimo che contiene i caratteri pericolosi solo per il HTML.

Nel CSRF la vittima è già entrata nel portale. Visita un altro sito, o apre una pagina ostile, il cui browser invia al portale una richiesta di chiusura di un ticket o di cambio di un permesso, portando con sé il cookie di sessione, che il browser allega da solo. Il portale vede una richiesta autenticata. La difesa non è togliere il cookie. È esigere un segreto che il sito esterno non può leggere: un token nella pagina e nella richiesta, controllato dal server, oppure, per le operazioni che cambiano dati, un cookie con le restrizioni che i browser moderni applicano ai contesti esterni. Le operazioni che modificano non stanno su una GET, perché una GET può essere provocata da un'immagine o da un link. GET deve poter essere ripetuta senza effetti.

Le due difese si sommano e non si sostituiscono. Un token anti-CSRF non impedisce a uno script iniettato nella stessa pagina di leggerlo: quello è XSS, e a quel punto l'attaccante è già dentro l'origine del sito. Per questo l'XSS si chiude per primo, trattando il testo come testo.

```disegno
titolo: Dove sta l'inganno
riga: XSS | Il testo del commento diventa pagina | Lo script gira nel portale, con la sessione di chi legge
riga: CSRF | Un altro sito provoca una richiesta | Il browser allega da solo il cookie, il portale crede all'utente
nota: Contro l'XSS, il testo non è HTML. Contro il CSRF, un segreto che il sito esterno non conosce, e niente modifiche in GET.
```


### Nel dettaglio

Il cross-site scripting inserisce nel contenuto del sito un pezzo di programma che il browser della vittima esegue. Succede quando un testo arrivato da un utente, un commento, un nome di file, viene rimesso nella pagina come HTML invece che come testo. Il browser vede un tag e lo esegue, nel contesto del sito dell’ente, con i cookie di quel sito. Lo script può leggere la pagina, fare richieste a nome dell’utente, rubare ciò che la pagina mostra. La difesa principale è l’escaping: ogni testo dinamico inserito nella pagina è trattato come testo, e i caratteri speciali diventano innocui. La seconda difesa è un criterio di contenuto che vieta l’esecuzione di script non previsti. Validare l’input aiuta e non basta, perché il dato può essere legittimo e diventare pericoloso solo nel punto in cui si stampa.

Il cross-site request forgery induce il browser della vittima a fare una richiesta verso il sito dell’ente, da un’altra pagina, sfruttando il fatto che il browser allega da solo il cookie. L’utente è autenticato, visita una pagina ostile, e quella pagina fa inviare al suo browser una richiesta di cancellazione o di bonifico. Il sito vede un cookie valido e obbedisce. Non c’è uno script dentro il sito. C’è una richiesta legittima in apparenza, partita da un altro contesto. La difesa è un segreto che la pagina ostile non può conoscere: un token nella form, controllato dal server, oppure un cookie marcato in modo che il browser non lo alleghi alle richieste nate da un altro sito. Le operazioni che modificano non stanno su una GET, perché una GET si scatena con un’immagine.

I due attacchi si confondono perché entrambi coinvolgono il browser. Si distinguono così. Nello scripting maligno il programma gira dentro la pagina dell’ente, e la colpa è di come si è stampato un dato. Nella richiesta contraffatta il programma sta altrove, e la colpa è di aver obbedito a una richiesta solo perché c’era il cookie. Le difese sono diverse e si mettono entrambe. Sul foglio si raccontano in cinque righe l’uno, con la difesa accanto, sul proprio caso: il commento di un ticket stampato come testo, e il cambio di stato che richiede un token.

### In sede di prova

Definire i due nomi con il luogo dell'inganno. Dare la difesa specifica di ciascuno. Collegare al proprio tema: se ci sono commenti, citare l'XSS; se ci sono pulsanti che cambiano uno stato, citare il CSRF e il divieto di farlo con un semplice link. Non serve un exploit completo.

### Errori da evitare

- Trattarli come sinonimi di «hackeraggio del sito».
- Rispondere a entrambi con «mettiamo HTTPS». HTTPS protegge il transito, non il contenuto che l'applicazione costruisce e non la fiducia cieca nel cookie.
- Filtrare solo l'apostrofo e credere di aver chiuso l'XSS.

### Approfondire

- [Cross-site scripting](https://it.wikipedia.org/wiki/Cross-site_scripting)
- [Cross-site request forgery](https://it.wikipedia.org/wiki/Cross-site_request_forgery)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Come si conservano le password

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** hash, sale, Argon2, MFA
**Semaforo:** verde

### Inquadramento

La scelta prima è non conservarle: l'identità è quella dell'ente. Se un quesito costringe a conservarle, si conserva un'impronta lenta, con un sale diverso per ogni password. Un hash veloce si prova a miliardi di candidati. Una cifra reversibile si rilegge appena si ha la chiave. Sul foglio si descrive che cosa sta nel database, impronta sale e parametri, e che cosa non c'è, la password. Si aggiunge il secondo fattore per gli amministratori, che è un'altra misura, non un sostituto dell'impronta.

### Definizione

Se un'applicazione deve proprio conservare una password, ne conserva un'impronta lenta e salata, non la password e non una cifra che si possa rovesciare. Meglio ancora, non la conserva affatto: l'identità è quella dell'ente, e l'applicazione riceve solo l'esito. La domanda d'esame, però, chiede spesso il caso in cui la password si conserva, e la risposta sbagliata più comune è «la cifriamo con una chiave» oppure «ne facciamo l'hash SHA-256».

### L'impronta giusta

Un hash ordinario è fatto per essere veloce e per non avere collisioni facili. Per una password è il difetto: chi ruba il database prova miliardi di candidati. Si usa una funzione pensata per le password, volutamente lenta e con un costo regolabile, come bcrypt, scrypt o Argon2. Il sale è un valore casuale, diverso per ogni password, conservato accanto all'impronta. Fa sì che due persone con la stessa password non abbiano la stessa impronta, e che una tabella precalcolata non valga per tutto il database. Il sale non è segreto. È lì per essere unico.

Un pepe, se lo si nomina, è un segreto comune tenuto fuori dal database, per esempio in un deposito di chiavi. Se il solo database viene copiato, manca quel segreto. Non sostituisce il sale e non sostituisce la funzione lenta.

La verifica ricalcola l'impronta della password presentata, con lo stesso sale, e confronta. Non si «decifra» nulla. Se la funzione scelta diventa debole negli anni, al primo accesso buono si ricalcola l'impronta con i parametri nuovi.

La cifratura reversibile della password è il modello sbagliato, perché chi ha la chiave rilegge tutte le password. Si usa solo in casi rari in cui un sistema deve ripresentare il segreto a un altro sistema, e anche lì si cerca un altro disegno.

Attorno all'impronta stanno le misure che non sono l'impronta. Un secondo fattore per gli amministratori e per gli accessi da fuori. Un rallentamento o un blocco temporaneo sui tentativi ripetuti, disegnato in modo da non regalare a chiunque il modo di chiudere l'account di un altro. Nessuna password dentro il codice, nei log, nei messaggi di errore. Il recupero non spedisce la password vecchia, che il sistema non ha più: apre una procedura a tempo, a un canale già noto.

```disegno
titolo: Ciò che si scrive nel database
riga: Password scelta dalla persona
freccia: sale unico per questa password, funzione lenta
riga: Impronta | sale | parametri della funzione
nota: SHA-256 da solo è veloce, quindi è inadatto. Due password uguali devono risultare diverse.
```


### Nel dettaglio

La password non si memorizza. Si memorizza un valore da cui non si torna indietro, calcolato in modo lento, con un sale. Il sale è un valore casuale diverso per ogni utente, memorizzato accanto all’impronta. Impedisce che due utenti con la stessa password abbiano lo stesso valore memorizzato, e impedisce di usare una tabella precalcolata di impronte. L’algoritmo è lento di proposito: un decimo o un quarto di secondo non danno fastidio al login, e rendono costosissimo provare miliardi di password. Argon2 e bcrypt sono i nomi da citare. SHA-256 da solo, anche salato, è troppo veloce: va bene per l’impronta di un file, non per una password. MD5 non si cita se non come esempio di ciò che non si fa, e non si fa nemmeno nel browser «tanto poi si rifà sul server».

Il server ricalcola e confronta. Al login prende la password, prende il sale di quell’utente, ricalcola, confronta con ciò che ha memorizzato. Se coincide, l’utente entra. La password in chiaro vive in memoria per quel momento e si butta. Non si scrive nel registro. Non si mette nell’indirizzo. Non si manda per posta. Il recupero, se la persona la dimentica, non la «rimanda»: non c’è più. Si manda un modo per impostarne una nuova, a scadenza breve, verso un canale già conosciuto.

Anche il resto della catena conta. Il canale del login è TLS, altrimenti la password viaggia in chiaro prima ancora di essere trasformata. Il cookie di sessione che nasce dal login ha i suoi attributi. Un blocco temporaneo dopo molti tentativi, o un ritardo crescente, toglie convenienza alla prova continua, e si bilancia con il rischio di bloccare un ufficio. Le password scelte dall’ente seguono una lunghezza, più che una complessità bizzarra: una frase lunga batte una parola corta con un punto esclamativo. I conti di servizio non usano una password tramandata: usano una chiave, custodita in un deposito.

Sul foglio: sale unico per utente, algoritmo lento, niente chiaro nei registri, niente recupero della password vecchia, TLS sotto. Se il tema usa l’identità centrale dell’ente, le password stanno lì e l’applicazione non le vede nemmeno: è la soluzione da preferire, e lo si dice.

### Esempio

Il portale di assistenza non ha un archivio di password. Delega l'identità all'ente. Se un quesito costringe a prevedere un accesso locale di emergenza, quell'unico account ha un'impronta Argon2 con sale proprio, un secondo fattore, e non è condiviso. Il database applicativo, se anche venisse copiato, non conterrebbe le password dei dipendenti, perché non le ha mai avute.

### In sede di prova

Dire prima la scelta migliore: non conservarle, usare l'identità dell'ente. Poi, se si conservano: funzione lenta, sale unico, niente reversibilità. Citare il secondo fattore come misura diversa, che limita il valore di una password comunque rubata altrove. Nominare SHA-256 solo per dire perché non basta.

### Errori da evitare

- Password in chiaro, o «cifrate» con una chiave che sta nello stesso database.
- Un hash veloce senza sale.
- Lo stesso sale per tutti, che è poco meglio di nessun sale.
- Scrivere la password nei log per «capire il problema di un utente».

### Approfondire

- [Password](https://it.wikipedia.org/wiki/Password)
- [Funzione crittografica di hash](https://it.wikipedia.org/wiki/Funzione_crittografica_di_hash)
- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)

## Cifratura in transito e cifratura a riposo

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** TLS, dischi cifrati, chiavi
**Semaforo:** giallo

### Inquadramento

In transito si protegge il dato sulla rete, con TLS, fino al punto in cui il collegamento termina, spesso il proxy. A riposo si protegge il dato sul disco e nella copia, e la chiave sta altrove. I due furti sono diversi: chi ascolta la rete, chi ruba l'armadio. Nessuno dei due ferma una query di chi è già autorizzato, né una injection. Sul foglio si dice dove termina TLS e dove sta la chiave del backup. Un backup in chiaro di un disco cifrato è il punto che la rilettura deve cercare.

### Definizione

Cifrare in transito protegge i dati mentre attraversano una rete. Cifrare a riposo protegge i dati mentre stanno su un disco, su un nastro o in un archivio. Le due misure rispondono a due furti diversi. Farne una sola e raccontarla come «i dati sono cifrati» lascia scoperto l'altro furto.

### I due tratti

In transito, per un'applicazione web, il tratto è TLS fino al punto in cui il collegamento termina. Spesso termina sul reverse proxy, non sul nodo applicativo. Da lì in poi, se la rete interna è considerata un altro luogo di fiducia, va detto. In un disegno prudente anche il tratto fra proxy e nodi, o almeno fra nodi e database, non è un chiaro indiscriminato lasciato senza commento: o è una rete segregata, in cui solo quei sistemi possono parlarsi, o è anch'esso cifrato. TLS protegge da chi sta nel mezzo della rete. Non protegge da un utente che ha il diritto di leggere il dato, né dal server che ha appena decifrato la richiesta e la tratta in memoria.

A riposo, la cifratura del disco rende inutile un disco asportato o uno storage rubato, finché la chiave non è sullo stesso disco. La chiave sta in un deposito separato, e il backup della chiave non viaggia nella stessa busta del backup dei dati, in chiaro. La cifratura del disco non ferma l'applicazione, che la chiave la possiede mentre è in esecuzione: una query lecita, o una query iniettata, legge i dati in chiaro. Non ferma un amministratore di sistema autenticato. Non sostituisce i permessi.

Le copie di backup vanno capite una per una. Un backup già cifrato con una chiave propria, immutabile, sopravvive al ransomware che cifra i dischi di produzione con la chiave dell'attaccante. Un disco di produzione cifrato, di cui si copia il contenuto già aperto dall'applicazione, produce un backup in chiaro se non si cifra anche quello. Sono due chiavi e due scopi.

```disegno
titolo: Due furti, due cifre
riga: Utente
freccia: TLS, contro chi ascolta la rete
riga: Proxy e applicazione | qui il dato è in uso, in memoria
freccia: la query lecita legge il chiaro
riga: Disco e backup | cifrati a riposo, chiavi altrove
nota: Il disco cifrato non impedisce una SQL injection. TLS non impedisce di rubare il disco.
```


### Nel dettaglio

In transito il dato si muove fra due punti: browser e proxy, nodo e database, sala e sito di copia, postazione e directory. Su ciascun tratto si decide. TLS è la scelta ordinaria. Si cifra e si verifica l’interlocutore, così non solo nessuno legge, ma nessuno si mette in mezzo presentandosi al posto del server. Un tratto lasciato in chiaro «perché è interno» è in chiaro per chiunque sia su quella rete: un PC di ufficio, un access point, un fornitore attaccato a una porta. I tratti che portano password, sessioni e dati riservati si cifrano anche dentro. Il tratto fra proxy e nodo, se la rete è ben segmentata e il dato non è particolarmente riservato, si può lasciare in chiaro e lo si dichiara. Il silenzio sul punto è la risposta debole.

A riposo il dato sta fermo: sul disco del database, nel backup, sul portatile, nello storage dei file. La cifra del disco protegge il furto o lo smaltimento del supporto. Non protegge da un sistema acceso e compromesso, perché il sistema acceso ha la chiave in mano e serve i dati in chiaro a chi è autorizzato, e anche a chi si spaccia. La cifra di colonna o di file protegge di più, e complica le ricerche e i ripristini. Si applica ai dati che restano sensibili anche per chi amministra la macchina. La chiave non sta sullo stesso disco, in chiaro, accanto al file: starebbe nel posto esatto che si voleva proteggere. Sta in un deposito di chiavi, o su un dispositivo, e l’accesso alla chiave è un evento registrato.

Le copie si trattano come l’originale. Un backup cifrato con una chiave che nessuno sa più recuperare è un backup che non esiste, dal punto di vista della disponibilità. Si custodisce la chiave in un luogo diverso dalla copia, e si prova il ripristino, compresa la parte in cui si recupera la chiave. Un portatile con disco cifrato protegge lo smarrimento. Lo stesso portatile acceso e sbloccato, lasciato sulla scrivania, non è protetto dalla cifra.

Sul foglio si fa l’elenco dei tratti e l’elenco dei luoghi di riposo, e per ciascuno si scrive cifra sì o no, con quale chiave e chi la custodisce. La frase di chiusura: la cifra in transito protegge il viaggio, la cifra a riposo protegge il supporto spento, nessuna delle due sostituisce i permessi sul sistema acceso.

### Esempio

Il portale è raggiunto solo in HTTPS, con un certificato il cui nome è quello del portale. Il database sta su dischi cifrati e accetta connessioni solo dai nodi. I backup notturni sono cifrati con una chiave che i nodi applicativi non hanno, su un sistema che quelli non possono riscrivere. Se qualcuno ruba l'armadio dei dischi, senza la chiave non legge. Se qualcuno ruba una sessione di un tecnico, la cifratura del disco non gli impedisce di leggere le richieste che quel tecnico può già leggere: lo impedisce, per quanto può, l'autorizzazione.

### In sede di prova

Definire i due momenti, in transito e a riposo. Dire dove termina TLS. Dire dove sta la chiave. Collegare il backup cifrato al ransomware, e la cifratura del disco al furto fisico. Non presentare né l'una né l'altra come sostituto dell'autorizzazione.

### Errori da evitare

- «Usiamo HTTPS, quindi il database è al sicuro.»
- La chiave di cifratura del disco conservata sullo stesso disco.
- Un backup in chiaro di un database cifrato, messo su una share che tutti i server possono riscrivere.

### Approfondire

- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)
- [Crittografia](https://it.wikipedia.org/wiki/Crittografia)
- [Backup](https://it.wikipedia.org/wiki/Backup)

## Secondo fattore: che cosa aggiunge e dove si mette

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** MFA, secondo fattore, autenticazione
**Semaforo:** verde

### Inquadramento

La domanda chiede perché la password non basta e su quali accessi il secondo fattore è obbligatorio. Si distingue un secondo segreto dello stesso tipo da un fattore di tipo diverso.

### Definizione

L'autenticazione a più fattori chiede due prove di tipo diverso fra ciò che si sa, ciò che si ha e ciò che si è. Una password più un codice generato da un dispositivo, o più una chiave, è un secondo fattore. Due password non lo sono.

### Nel dettaglio

Il secondo fattore serve dove il furto della sola password apre un danno largo: amministrazione dei sistemi, accesso da fuori sede, VPN, pannello del cloud, operazioni irreversibili come un pagamento o la cancellazione di un archivio. Sull'applicazione interna, se l'identità è già quella dell'ente e la postazione è dell'ente, si può ereditare quel fattore invece di chiederne un altro a ogni click. Chiederlo a ogni operazione abitua a confermare senza guardare.

Il fattore va revocabile. Un telefono perso, un token perso, si disabilita lo stesso giorno, e resta un modo di recupero che non sia «chiamate e dettate la password». Il recupero è un canale a parte, sorvegliato, perché è la porta che gli attaccanti preferiscono: aggirare il secondo fattore convincendo chi lo reimposta. Si registra ogni reimpostazione.

Non si manda il secondo fattore sullo stesso canale della password se si può evitarlo in modo sensato. Un codice sul telefono è un dispositivo. Un codice per posta elettronica, sulla stessa casella che si apre con quella password, protegge poco da chi la casella l'ha già presa.

### Esempio

Gli amministratori entrano in VPN e sul cloud con password dell'ente più un dispositivo. Il recupero del dispositivo perso lo fa un collega designato, con un'identità propria, e resta nel registro. L'applicazione dei ticket non chiede un altro fattore a ogni presa in carico, perché l'ingresso in rete l'ha già chiesto.

### In sede di prova

Tipo diverso, dove è obbligatorio, revoca, recupero sorvegliato, non sullo stesso canale già compromesso.

### Errori da evitare

- Chiamare secondo fattore una seconda password.
- Metterlo ovunque e accettare che la gente lo confermi a occhi chiusi.
- Reimpostarlo con una telefonata senza lasciarne traccia.

### Approfondire

- [Autenticazione a più fattori](https://it.wikipedia.org/wiki/Autenticazione_a_pi%C3%B9_fattori)
- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)

## Un solo ingresso per molte applicazioni

**Prove:** seconda prova gruppo 1, orale
**Tag:** SSO, federazione, sessione
**Semaforo:** giallo

### Inquadramento

La domanda chiede come una persona non abbia dieci password. Si descrive un ingresso solo e il prezzo: quel ingresso diventa la chiave di molte porte.

### Definizione

Il single sign-on consente di autenticarsi una volta presso un servizio di identità e di accedere alle applicazioni che si fidano di quel servizio, senza ridare la password a ciascuna.

### Nel dettaglio

L'applicazione non vede la password. Vede un'asserzione: questa persona, questi gruppi, fino a quest'ora. L'asserzione è firmata dal servizio di identità, e l'applicazione verifica la firma e la scadenza. I gruppi si rileggono, non si copiano per sempre. Disabilitare l'utente nel servizio di identità chiude le applicazioni alla scadenza dell'asserzione, quindi la scadenza si tiene corta, minuti o un'ora, non una settimana.

Il prezzo è la concentrazione. Chi prende quella sessione entra in tutto ciò a cui la persona può entrare. Per questo l'ingresso unico ha il secondo fattore, e la sessione sul PC incustodito si blocca. Un'applicazione particolarmente sensibile può richiedere un fattore aggiuntivo al momento dell'operazione, pur fidandosi dell'identità per il resto. Si chiama step-up, e in un tema si nomina per le azioni irreversibili.

Non si costruisce un ingresso unico fatto in casa se l'ente ne ha già uno. Ci si aggancia. Ogni applicazione con la sua password è un elenco di più da dimenticare e da non revocare.

### Esempio

Il portale dei ticket si fida dell'identità dell'ente. L'utente entra al mattino con il secondo fattore. L'applicazione riceve il gruppo «tecnici» e non chiede un'altra password. L'asserzione scade dopo un'ora di inattività. La disabilitazione in directory ha effetto entro quell'ora. La cancellazione di un archivio chiede una conferma forte.

### In sede di prova

Chi verifica la password, che cosa riceve l'applicazione, scadenza corta, secondo fattore sull'ingresso, effetto della disabilitazione.

### Errori da evitare

- Far ridigitare la password in ogni applicazione e chiamarlo comunque ingresso unico.
- Tenere asserzioni valide per giorni.
- Costruire un secondo archivio di password accanto alla directory.

### Approfondire

- [Single sign-on](https://it.wikipedia.org/wiki/Single_sign-on)
- [LDAP](https://it.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)

## Ruoli e attributi: due modi di scrivere un permesso

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** RBAC, ABAC, autorizzazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si esprime «chi può fare che cosa» quando i ruoli non bastano. Si parte dai ruoli e si aggiunge l'attributo solo dove serve.

### Definizione

Il controllo basato sui ruoli assegna le persone a ruoli e i permessi ai ruoli. Il controllo basato sugli attributi decide in base a proprietà della persona, dell'oggetto e del contesto: ufficio, stato della pratica, orario, sensibilità.

### Nel dettaglio

I ruoli bastano quando le azioni sono poche e stabili: il richiedente apre, il tecnico prende, il responsabile chiude. Si amministra bene e si spiega in una pagina. Diventa ingestibile quando i ruoli moltiplicano gli incroci: tecnico-del-nord, tecnico-del-sud, tecnico-del-nord-senior. A quel punto la regola vera è «il tecnico dell'ufficio della pratica», ed è un attributo, non un ruolo nuovo. Si tiene il ruolo per l'azione e l'attributo per l'oggetto.

La regola si scrive in un punto, sul server, e si prova. Una regola di attributi sparsa nei programmi diverge. Si prova il caso positivo e quello di un tecnico di un altro ufficio. Si prova anche il cambio di ufficio: la persona si sposta e il giorno stesso vede le pratiche nuove e non le vecchie, senza che qualcuno riconfiguri un ruolo intrecciato.

In un tema piccolo si resta sui ruoli e si dice quale regola, se crescesse, diventerebbe un attributo. Non si parte dall'attributo per venti utenti e cinque azioni.

### Esempio

Il ruolo tecnico può prendere in carico. L'attributo è l'ufficio: solo le pratiche del proprio. Non esiste un ruolo per ogni ufficio. Il trasferimento di una persona aggiorna l'ufficio in directory e le pratiche visibili cambiano senza una modifica dell'applicazione.

### In sede di prova

Ruoli per le azioni, attributi per l'oggetto quando gli incroci esplodono, regola in un punto solo, prova del cambio di ufficio.

### Errori da evitare

- Creare un ruolo per ogni combinazione di ufficio e azione.
- Spargere la regola negli schermi.
- Usare un motore di attributi per un'applicazione di tre ruoli.

### Approfondire

- [Controllo degli accessi basato sui ruoli](https://it.wikipedia.org/wiki/Controllo_degli_accessi_basato_sui_ruoli)
- [Autorizzazione](https://it.wikipedia.org/wiki/Autorizzazione_(informatica))

## Fiducia zero, in una rete che non è più un dentro sicuro

**Prove:** seconda prova gruppo 1, orale
**Tag:** zero trust, identità, segmento
**Semaforo:** giallo

### Inquadramento

La domanda chiede che cosa sostituisce l'idea «dentro la rete si è fidati». Si descrive la verifica a ogni richiesta, senza comprare un prodotto che si chiami così.

### Definizione

L'approccio a fiducia zero tratta ogni richiesta come se venisse da una rete non fidata. Si verifica l'identità, il dispositivo se serve, e il permesso sull'oggetto, anche quando la richiesta nasce da una postazione interna.

### Nel dettaglio

La rete interna piena di postazioni non è un perimetro. Una postazione compromessa è già dentro. Per questo il database non si fida degli uffici, l'applicazione ricontrolla il permesso, e l'amministrazione sta su un canale a parte. La fiducia zero dà un nome a queste scelte e ne aggiunge una: anche fra servizi, l'identità c'è. Il nodo applicativo si presenta al database con una credenziale sua, non con una rete «sicura perché è la VLAN giusta» come unica difesa. La VLAN resta, ed è un livello, non l'unico.

Si attua per i pezzi che contano, non con un progetto di tre anni che promette di rifare tutto. Prima il permesso sull'oggetto, poi l'identità fra i servizi, poi la riduzione delle reti troppo larghe. Un prodotto comprato e una rete rimasta piatta non sono un'adozione.

In un tema si usa il principio in una frase, agganciata al disegno: nessuna zona è fidata al punto da saltare l'autorizzazione, compresa la zona degli uffici.

### Esempio

Un PC di ufficio ha il malware. Può raggiungere solo il proxy, sulla porta del portale, e nient'altro. Anche attraverso il proxy, vede solo i ticket del proprio utente, perché l'applicazione controlla l'oggetto. Non raggiunge il database, non raggiunge la gestione. Il danno è il conto di quella persona, che si disabilita, non la sala.

### In sede di prova

Niente dentro fidato, identità a ogni richiesta, segmenti stretti, adozione per passi, la VLAN che resta un livello e non l'unico.

### Errori da evitare

- Chiamare fiducia zero un firewall perimetrale rinominato.
- Togliere la segmentazione perché «tanto ci fidiamo delle identità».
- Promettere di applicarlo a tutto l'ente in un unico passo.

### Approfondire

- [Zero trust](https://it.wikipedia.org/wiki/Zero_trust)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Rilevazione e prevenzione: avvisare o bloccare

**Prove:** seconda prova gruppo 1, orale
**Tag:** IDS, IPS, falsi positivi
**Semaforo:** giallo

### Inquadramento

La domanda distingue un allarme da un blocco automatico. Si dice dove il blocco è accettabile e dove un falso positivo ferma l'ufficio.

### Definizione

Un sistema di rilevazione osserva traffico o eventi e avvisa. Un sistema di prevenzione, sullo stesso principio, blocca ciò che giudica ostile. Il falso positivo è un blocco o un allarme su un'attività lecita.

### Nel dettaglio

Sul confine, bloccare exploit noti verso il proxy può essere giusto: il costo di un falso positivo è una richiesta rifiutata, e la firma è precisa. Sulla rete interna, bloccare «comportamenti anomali» può fermare un backup o un caricamento legittimo la mattina di una scadenza. Lì si preferisce avvisare, guardare per un periodo, e solo dopo bloccare ciò che si è capito. La prevenzione si mette dove si sa che cosa è lecito.

Gli allarmi senza un destinatario non sono un controllo. Si scelgono poche regole, quelle che qualcuno legge. Una regola che suona cento volte al giorno viene ignorata anche il giorno in cui conta. Si tarano. Il sistema sta dove vede il traffico che deve vedere: davanti al servizio, non su un ramo laterale cieco. E non sostituisce la patch. Rilevare un difetto noto su un sistema che si poteva aggiornare è la seconda scelta.

### Esempio

Il confine blocca le firme di exploit sulla porta pubblicata. La rete interna avvisa su un nodo che apre connessioni verso molti indirizzi insoliti, e una persona guarda l'avviso entro l'ora. Non si blocca in automatico il flusso del backup notturno. Dopo un mese di avvisi puliti, una regola precisa si può promuovere a blocco.

### In sede di prova

Avvisare contro bloccare, il costo del falso positivo, poche regole lette da qualcuno, la patch che resta la prima cura.

### Errori da evitare

- Bloccare in automatico ciò che non si è mai visto in condizioni normali.
- Installare la sonda su un ramo che non vede il traffico.
- Trattare gli allarmi non letti come una misura di sicurezza.

### Approfondire

- [Intrusion detection system](https://it.wikipedia.org/wiki/Intrusion_detection_system)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## Mettere insieme i registri e accorgersi di un incidente

**Prove:** seconda prova gruppo 1, orale
**Tag:** SIEM, correlazione, registri
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si passa da dieci registri scollegati a un segnale. Si descrive la raccolta e una correlazione semplice, e il rischio di comprare lo strumento senza le domande.

### Definizione

Un sistema di gestione degli eventi raccoglie registri da più fonti, li mette in ordine di tempo e segnala combinazioni che una fonte sola non mostra. Non scopre ciò che nessuna fonte ha scritto.

### Nel dettaglio

Servono fonti scelte: gli accessi riusciti e rifiutati dell'identità, i rifiuti del firewall, gli errori dell'applicazione, i cambi di privilegio. Servono orologi allineati, altrimenti la sequenza è falsa. Serve una domanda. «Un utente disabilitato che comunque legge», «dieci rifiuti di password e poi un successo da un indirizzo nuovo», «un amministratore che entra a un'ora in cui non entra mai». Poche domande, curate, battono cento cruscotti.

Lo strumento non sostituisce la decisione. L'allarme arriva a una persona che sa chi chiamare. I registri si conservano per il tempo in cui un incidente può essere scoperto in ritardo, e stanno dove chi amministra i sistemi sorvegliati non li cancella. Si prova inserendo un evento finto e verificando che la domanda scatti. Una regola mai scattata in prova non si sa se è muta.

È inutile, e costoso, se le fonti non ci sono. Prima i registri giusti e l'orologio, poi lo strumento.

### Esempio

Il directory, il proxy e l'applicazione mandano i registri a un sistema dedicato. Una regola avvisa se un utente ha dieci autenticazioni fallite in cinque minuti e poi un successo. L'orologio è unico. Una volta al mese si genera un evento di prova e qualcuno conferma di aver visto l'avviso.

### In sede di prova

Fonti, orologio, poche domande, un destinatario, registri non cancellabili da chi è sorvegliato, prova della regola.

### Errori da evitare

- Comprare lo strumento e non decidere le domande.
- Correlare registri con orologi diversi di minuti.
- Lasciare che l'amministratore del sistema possa cancellare le tracce.

### Approfondire

- [SIEM](https://it.wikipedia.org/wiki/Security_information_and_event_management)
- [Log](https://it.wikipedia.org/wiki/Log)

## Vulnerabilità note: identificativo, gravità, tempo

**Prove:** seconda prova gruppo 1, orale
**Tag:** CVE, CVSS, patch
**Semaforo:** verde

### Inquadramento

La domanda chiede come si parla di un difetto pubblicato senza restare sul nome del prodotto. Si dice che cosa si legge e come si decide la fretta.

### Definizione

Un identificativo pubblico, come un CVE, designa una vulnerabilità nota. Un punteggio di gravità, come il CVSS, stima quanto è seria in astratto. La fretta vera dipende da quel punteggio, dal fatto che esista già un modo di sfruttarla, e dal fatto che il sistema esposto sia il proprio.

### Nel dettaglio

Il punteggio alto su un componente che non è esposto, o che non è nemmeno installato, non è la prima coda del mattino. Il punteggio medio su un servizio pubblicato, con uno sfruttamento già in circolazione, lo è. Si parte dall'inventario: se non si sa quali versioni girano, la notizia non si può applicare. Poi si guarda se c'è una correzione. Se c'è, si prova e si applica, in ore o giorni secondo l'esposizione, non al ciclo trimestrale. Se non c'è, si riduce l'esposizione: si chiude una porta, si limita un accesso, si spegne un modulo, e si segna la data in cui la correzione arriverà.

Si tiene un elenco dei difetti aperti, corto, con il proprietario. Un elenco di mille righe non letto è un archivio. Le dieci esposte stanno in cima. In un orale si racconta questo ordine, non si recita la formula del punteggio.

### Esempio

Esce un difetto critico del proxy in uso, con sfruttamento pubblicato. Il proxy è esposto. Si applica la patch in giornata, dopo una prova minima sul gemello, e si verifica la versione. Lo stesso giorno un difetto alto di un software di prova non esposto va in coda alla settimana. Entrambi stanno nell'elenco, con date diverse.

### In sede di prova

Identificativo, gravità come stima, decisione sulla propria esposizione, inventario, correzione o riduzione dell'esposizione, elenco corto con un proprietario.

### Errori da evitare

- Trattare ogni punteggio alto come ugualmente urgente, anche su sistemi spenti.
- Non avere l'inventario delle versioni.
- Aspettare il ciclo ordinario quando lo sfruttamento è già pubblico su un sistema esposto.

### Approfondire

- [Vulnerabilità](https://it.wikipedia.org/wiki/Vulnerabilit%C3%A0_(sicurezza_informatica))
- [Patch](https://it.wikipedia.org/wiki/Patch)

## Verifica di vulnerabilità e prova di intrusione

**Prove:** seconda prova gruppo 1, orale
**Tag:** vulnerability assessment, penetration test
**Semaforo:** giallo

### Inquadramento

La domanda distingue cercare i difetti noti da provare a sfruttarli. Si dice quando si fa ciascuna cosa e quali limiti si danno a chi la fa.

### Definizione

La verifica di vulnerabilità elenca, con strumenti, i difetti noti e le configurazioni deboli. La prova di intrusione tenta davvero di entrare, in un perimetro e in un tempo concordati, per mostrare che cosa un attaccante otterrebbe.

### Nel dettaglio

La verifica si fa spesso, anche ogni mese, perché è ripetibile e non dovrebbe interrompere il servizio se è ben dosata. Produce un elenco. L'elenco senza un proprietario che chiude le righe è inutile. Si chiudono prima quelle esposte. La prova di intrusione si fa più di rado, su un ambito scritto: quali sistemi, quali tecniche sono vietate, in quale finestra, a chi si telefona se qualcosa si rompe. Senza ambito, la prova può fermare lo sportello o toccare dati che non doveva leggere. Il contratto dice che i dati visti si trattano come i dati dell'ente e si cancellano.

Entrambe trovano difetti, non dimostrano l'assenza di difetti. Un certificato «abbiamo superato il test» con un ambito di una sola pagina pubblica non dice nulla sul database. Si legge l'ambito prima del voto. Dopo la prova si corregge e si ripete almeno la verifica, per vedere le righe chiuse. Non si aspetta l'anno prossimo per riaprire il documento.

### Esempio

Ogni mese una verifica sul perimetro e sui nodi produce un elenco, e le righe alte si chiudono in una settimana. Una volta l'anno una prova di intrusione, in finestra, sull'applicazione dei ticket e sul perimetro, mostra un permesso aggirabile. Si corregge nello sprint successivo e si riverifica quel punto, senza aspettare l'anno.

### In sede di prova

Frequenza e ripetibilità della verifica, ambito e finestra della prova di intrusione, nessuna delle due è un certificato di assenza di difetti, si chiude e si ricontrolla.

### Errori da evitare

- Commissionare una prova senza un ambito e una finestra.
- Conservare il rapporto e non chiudere le righe.
- Presentare la verifica come se qualcuno avesse tentato di entrare.

### Approfondire

- [Penetration test](https://it.wikipedia.org/wiki/Penetration_test)
- [Vulnerabilità](https://it.wikipedia.org/wiki/Vulnerabilit%C3%A0_(sicurezza_informatica))

## Ransomware: contenere, e da quale copia si torna

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** ransomware, immutabile, incidente
**Semaforo:** verde

### Inquadramento

È lo scenario che lega sicurezza e backup. Si dice la prima mossa, quale copia è ancora buona, e perché pagare non è il piano.

### Definizione

Un ransomware cifra i dati e chiede un riscatto per la chiave. Si diffonde con le credenziali e le condivisioni che trova. La difesa efficace è una copia che non poteva cifrare e una procedura per ripartire da quella.

### Nel dettaglio

La prima mossa è contenere: staccare i sistemi colpiti dalla rete, non spegnerli a caso se qualcuno sa fare una copia di memoria, altrimenti staccare è comunque meglio che lasciarli cifrare il resto. Si identificano le condivisioni raggiunte dall'utente colpito. Si cambia le credenziali che quella macchina poteva usare. Poi si cerca la copia. Quella sullo stesso file server è cifrata. Quella immutabile o staccata, precedente all'ingresso, è il punto di ritorno. Si ripristina su macchine pulite, non sulla rete ancora infetta.

Pagare non garantisce la chiave, finanzia il giro, e non chiude il buco da cui sono entrati. Non è il piano. Il piano è la copia e la chiusura del buco: la mail, il secondo fattore mancante, il privilegio troppo largo. Si avvisano le funzioni dell'ente che devono notificare, se i dati personali sono coinvolti. Il tecnico prepara i fatti: che cosa è cifrato, da quando, quali copie esistono.

Si prova il ripristino prima, perché durante l'incidente non è il momento di scoprire che il nastro non si legge.

### Esempio

Un PC cifra la cartella di un ufficio e tenta il server. La rete del PC si stacca. Il server ha una copia immutabile della notte precedente all'infezione, individuata dai registri. Si ripristina su un sistema pulito. Le credenziali dell'utente si revocano. La notifica si valuta con chi di competenza. Il buco era una mail e un utente con troppi permessi di scrittura sulle condivisioni.

### In sede di prova

Contenere, trovare la copia non cifrabile, ripristinare su pulito, non pagare come piano, chiudere il buco, prova di ripristino fatta prima.

### Errori da evitare

- Pagare come prima e unica mossa.
- Ripristinare nella rete ancora compromessa.
- Scoprire durante l'incidente che il backup era sulla stessa cartella cifrata.

### Approfondire

- [Ransomware](https://it.wikipedia.org/wiki/Ransomware)
- [Backup](https://it.wikipedia.org/wiki/Backup)

## Account inutilizzati e privilegi che restano

**Prove:** seconda prova gruppo 1, orale
**Tag:** account, revoca, privilegio
**Semaforo:** verde

### Inquadramento

È una domanda da gestione quotidiana, frequentissima in un ente. Si dice chi disabilita, in quanto tempo, e come si scoprono i conti dimenticati.

### Definizione

Un account inutilizzato è un'identità che nessuno dovrebbe più usare e che invece può ancora entrare. Un privilegio residuo è un permesso rimasto dopo un cambio di incarico. Entrambi sono accessi senza un proprietario vigile.

### Nel dettaglio

Il giorno in cui una persona lascia l'ufficio, o l'ente, il conto si disabilita. Non «a fine mese». La procedura delle risorse umane avvisa l'identità, e l'identità è quella da cui le applicazioni dipendono, così un gesto solo chiude le porte. I conti di servizio non hanno una persona che lascia: hanno un proprietario nominato, e se il proprietario cambia incarico il conto si riassegna, non resta orfano.

Si cerca ciò che la procedura ha mancato. Una volta al trimestre, gli account senza un accesso da novanta giorni si disabilitano, dopo un avviso. I privilegi di amministrazione si rivedono: chi è nel gruppo, e perché. Un gruppo di trenta amministratori è un gruppo che non amministra, è un gruppo che ha smesso di togliere. Si torna a poche persone. I privilegi dati per un intervento hanno una scadenza tecnica, non un promemoria.

Il registro del trimestre si tiene. In un'ispezione la domanda è «quanti conti sono entrati quest'anno pur essendo di persone uscite». La risposta deve essere un numero, meglio se zero.

### Esempio

L'uscita di un collaboratore disabilita il conto in directory lo stesso giorno, e con esso portale, posta e VPN. Ogni trimestre gli account silenziosi da novanta giorni vengono disabilitati. Il gruppo degli amministratori di sistema ha quattro nomi, rivisti a gennaio e a luglio.

### In sede di prova

Disabilitazione lo stesso giorno, un solo punto di identità, revisione dei silenziosi e degli amministratori, privilegi temporanei con scadenza.

### Errori da evitare

- Aspettare la restituzione del badge per chiudere l'accesso remoto.
- Lasciare i conti di servizio senza un proprietario.
- Allargare i gruppi di amministrazione e non rivederli mai.

### Approfondire

- [Principio del privilegio minimo](https://it.wikipedia.org/wiki/Principio_del_privilegio_minimo)
- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)

## Classificare i dati prima di proteggerli tutti allo stesso modo

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** classificazione, riservatezza, dato
**Semaforo:** giallo

### Inquadramento

La domanda chiede di non trattare ogni file come un segreto e ogni segreto come un file qualunque. Si danno poche classi e, per ciascuna, una misura.

### Definizione

La classificazione assegna a un dato un livello secondo il danno che produce la sua perdita di riservatezza, integrità o disponibilità. A ogni livello corrispondono misure minime. Senza classificazione si protegge tutto in modo medio, cioè male i dati che contano e con costo inutile gli altri.

### Nel dettaglio

Tre livelli bastano a un tema. Pubblico: può stare sul sito. Interno: il personale può leggerlo, non si pubblica, sta nell'applicazione con l'ingresso. Riservato: solo alcuni ruoli, registro degli accessi, cifra a riposo se esce dal sistema, niente copie in prova, conservazione motivata. Un quarto livello, se l'ente lo ha già, si usa con il suo nome e le sue regole, senza inventarlo.

La classe si decide con l'ufficio che produce il dato, non solo con l'informatica. Si scrive sulla tabella e sul documento. Un allegato riservato in una pratica interna eredita la classe più alta. I backup ereditano la classe: la copia del riservato non sta su una cartella aperta. Gli ambienti di prova non ricevono il riservato, salvo mascheramento.

In un elaborato si classificano tre dati del tema e si agganciano le misure già descritte. È il ponte fra sicurezza e schema.

### Esempio

Il nome della sala è interno. Il verbale non ancora pubblicato è riservato: lo vedono i membri, l'accesso è registrato, la copia di backup è cifrata, in prova il verbale è finto. La modulistica vuota è pubblica e può stare sul sito. La stessa applicazione tratta i tre in modo diverso, e lo schema lo mostra.

### In sede di prova

Pochi livelli, una misura per livello, chi classifica, i backup e la prova che ereditano la classe.

### Errori da evitare

- Proteggere tutti i dati con le misure del più banale.
- Inventare dieci classi che nessuno assegna.
- Lasciare il riservato nelle copie di prova.

### Approfondire

- [Classificazione dei dati](https://it.wikipedia.org/wiki/Classificazione)
- [Riservatezza](https://it.wikipedia.org/wiki/Riservatezza)

## Sessione: fissazione, furto e scadenza

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** sessione, cookie, fissazione
**Semaforo:** verde

### Inquadramento

La domanda entra nel cookie dopo il login. Si dice come nasce, come si ruba, e quali attributi e quali gesti lo rendono inutile da rubare.

### Definizione

La fissazione impone alla vittima un identificativo di sessione scelto dall'attaccante, così dopo il login l'attaccante condivide la sessione. Il furto copia un identificativo già nato. La scadenza e la rigenerazione tolgono valore a entrambi.

### Nel dettaglio

Alla login riuscita il server butta l'identificativo precedente e ne emette uno nuovo. Così un identificativo fissato prima del login non serve. Il cookie ha Secure, HttpOnly e SameSite. Secure lo tiene su HTTPS. HttpOnly impedisce a uno script della pagina di leggerlo, e riduce il danno di un contenuto attivo. SameSite riduce l'invio verso altri siti. La sessione scade per inattività e ha una durata massima assoluta: una sessione aperta il lunedì non è ancora valida il venerdì solo perché il mouse si è mosso.

Il logout invalida l'identificativo sul server. Chiudere il browser, se il cookie non è di sessione, non disconnette. Si dice nel tema quale delle due durate si usa. Cambiare privilegio, per esempio entrare come amministratore, rigenera di nuovo l'identificativo. Un identificativo lungo e casuale non si indovina: se si può indovinare, il resto non conta.

Si registra l'ingresso. Una sessione che cambia rete in modo incompatibile con il lavoro della persona si può chiudere, con cautela per non ostacolare il proxy. È un controllo in più, non il primo.

### Esempio

Il login emette un cookie nuovo, HttpOnly, Secure, SameSite. Dopo trenta minuti di inattività la sessione muore. Dopo otto ore muore comunque. Il logout la cancella sul server. Uno script iniettato in una pagina non legge il cookie. Un identificativo fissato prima della login non corrisponde a nulla dopo.

### In sede di prova

Rigenerare al login, attributi del cookie, due scadenze, invalidare al logout, identificativo non indovinabile.

### Errori da evitare

- Tenere lo stesso identificativo prima e dopo il login.
- Mettere la sessione in un parametro dell'indirizzo.
- Credere che chiudere il browser basti, con un cookie persistente.

### Approfondire

- [Session fixation](https://it.wikipedia.org/wiki/Session_fixation)
- [Cookie](https://it.wikipedia.org/wiki/Cookie)

## Configurazione insicura: i default che restano aperti

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** configurazione, default, hardening
**Semaforo:** verde

### Inquadramento

È il difetto più comune e meno tecnico in apparenza. Si elencano i default da chiudere il giorno dell'installazione e come si impedisce che tornino.

### Definizione

Una configurazione insicura è un sistema installato con le scelte di fabbrica, o con scelte larghe fatte per far funzionare subito, lasciate in esercizio. Il rimedio è una base più stretta, applicata in modo ripetibile.

### Nel dettaglio

Si chiudono, il primo giorno: account e password di fabbrica, porte di prova, elenchi di directory, messaggi di errore con la query e il percorso, pannelli di amministrazione esposti, servizi non usati, protocollo vecchio lasciato acceso accanto a quello nuovo. Si fa su un'immagine, così il nodo successivo nasce già chiuso. Farlo a mano sul primo server e dimenticarlo sul secondo è il difetto che torna.

Si verifica. Una lista corta, eseguita a ogni rilascio e ogni mese: quali porte rispondono, quali account di fabbrica esistono ancora, se l'errore visibile all'utente contiene una traccia interna. La lista che fallisce blocca il rilascio. Una lista che nessuno esegue è un documento.

Le eccezioni si scrivono con la data. «Questa porta è aperta perché il fornitore X la usa, fino al 30 aprile.» Senza data è per sempre. In un tema, la base stretta è una frase del capitolo sicurezza, e due o tre esempi presi dal proprio sistema, non un elenco di cento punti.

### Esempio

L'immagine dei nodi nasce senza l'account di fabbrica, senza la pagina di stato dettagliata, con gli errori generici verso l'utente e il dettaglio nel registro interno. Il rilascio controlla che sul proxy pubblico risponda solo la porta prevista. Un'eccezione per un fornitore ha una scadenza nel calendario dei cambiamenti.

### In sede di prova

Esempi concreti di default, immagine invece del gesto a mano, verifica a ogni rilascio, eccezioni con data.

### Errori da evitare

- Installare e mettere in esercizio il default.
- Chiudere a mano un solo server.
- Lasciare eccezioni senza scadenza.

### Approfondire

- [Hardening](https://it.wikipedia.org/wiki/Hardening)
- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)

## Due modi di federare un ingresso

**Prove:** seconda prova gruppo 1, orale
**Tag:** SAML, OIDC, federazione
**Semaforo:** giallo

### Inquadramento

La domanda chiede come un'applicazione si fidi dell'identità dell'ente senza ricevere la password. Si distinguono due contratti diffusi, senza trasformare la risposta in un confronto di prodotti.

### Definizione

In una federazione l'applicazione non autentica. Manda la persona a un fornitore di identità, riceve un'asserzione firmata, e da quella ricava chi è e a quali gruppi appartiene. SAML è un contratto più vecchio, spesso usato fra enti e applicazioni istituzionali, basato su messaggi firmati. OpenID Connect sta sopra OAuth e consegna un gettone, ed è il contratto che oggi si incontra nelle applicazioni web nuove. In entrambi la password resta al fornitore di identità.

### Nel dettaglio

Per l'ente contano tre scelte, uguali nei due contratti. Chi è il fornitore, di solito la directory dell'ente, e non un secondo archivio. Quali attributi arrivano: identificativo stabile, nome, gruppi. Non arriva la password e non arriva un attributo che l'applicazione non usa. Come si rinnova e come si revoca: un account disabilitato al mattino non entra al pomeriggio, e una sessione già aperta scade nel tempo deciso, o si revoca se il caso è grave.

L'applicazione deve rifiutare un'asserzione scaduta, destinata a un'altra applicazione, o firmata da chi non è il fornitore. Quei controlli sono il mestiere del componente che valida, e si provano. Tenere un'asserzione «per comodità» e non guardarli è accettare un lasciapassare falso.

Si sceglie un contratto e lo si scrive. Averne due senza motivo raddoppia i controlli. Se un'applicazione vecchia parla solo SAML e una nuova solo OpenID Connect, il fornitore di identità può parlare entrambi, e le applicazioni no: ciascuna ne parla uno.

### Esempio

Il portale delle prenotazioni manda al fornitore dell'ente. Torna un gettone con l'identificativo e il gruppo «ufficio sale». L'applicazione non ha una tabella di password. Un tirocinante disabilitato la mattina non entra. Un gettone emesso per un'altra applicazione viene rifiutato anche se la firma è vera, perché il destinatario non coincide.

### In sede di prova

L'applicazione non vede la password. Un contratto, attributi minimi, controlli su scadenza destinatario e firma, revoca che arriva nel tempo deciso.

### Errori da evitare

- Dire che OAuth da solo autentica la persona: autorizza un accesso, l'identità la porta OpenID Connect.
- Accettare qualsiasi asserzione firmata, senza guardare per chi è stata emessa.
- Copiare i gruppi in un archivio locale e non riallinearli più.

### Approfondire

- [Single sign-on](https://it.wikipedia.org/wiki/Single_sign-on)
- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)

## Bloccare l'account o rallentare il tentativo

**Prove:** seconda prova gruppo 1, orale
**Tag:** lockout, password, brute force
**Semaforo:** verde

### Inquadramento

La domanda chiede come si ferma chi prova molte password. Si distingue una misura che protegge da una che chiude fuori le persone vere, e si mette accanto all'hash lento, che è un'altra difesa.

### Definizione

Il blocco temporaneo sospende l'account dopo un numero di tentativi falliti. Il rallentamento rende ogni tentativo, o ogni tentativo da quella sorgente, più lento. L'hash lento rende caro provare un elenco di password anche a chi se ne è copiato il database. Le tre cose non si sostituiscono.

### Nel dettaglio

Un blocco dopo cinque errori sembra severo e si presta a un abuso: qualcuno che conosce i nomi degli account li blocca tutti all'apertura degli uffici. Per gli account delle persone si preferisce un rallentamento crescente e un avviso, e il blocco si riserva a casi più lunghi, con un recupero che non è una mail alla stessa casella già persa. Per gli account di amministrazione il blocco, o il divieto di password sola, è più giustificato, perché quelli non devono essere indovinabili nemmeno a costo di una telefonata in più.

L'hash lento non si vede al login giusto, che resta sotto il secondo, e si vede sul costo di un attacco su un archivio copiato. Senza di lui, il blocco sull'applicazione non protegge le password già portate via. Senza un limite sui tentativi, l'hash lento da solo non ferma chi prova contro l'applicazione viva, perché può andare piano e in parallelo da molte sorgenti. Si contano i tentativi per account e per sorgente, e si scrive nel registro, senza scrivere la password provata.

In un tema: hash lento con sale, rallentamento sui fallimenti, registro, e il secondo fattore sugli accessi che contano. Il blocco secco si nomina come scelta da maneggiare, non come riflesso.

### Esempio

Cinque password sbagliate sul portale allungano l'attesa e avvisano l'ufficio se il ritmo continua. L'account non si spegne al quinto errore, così una persona non resta fuori per uno scherzo. L'account di amministrazione, invece, richiede il secondo fattore e non accetta un tentativo illimitato da Internet. Nel database, anche copiato, le password sono hash lenti e salati, inutili da provare a milioni al secondo.

### In sede di prova

Tre misure, tre minacce diverse. Il blocco si presta a chiudere fuori gli utenti. Non si registra la password tentata. Il secondo fattore sta sugli accessi larghi.

### Errori da evitare

- Bloccare al terzo errore gli account di tutto l'ufficio.
- Credere che il blocco protegga un database già copiato.
- Scrivere nel registro la password sbagliata, che spesso è quella giusta digitata male.

### Approfondire

- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)
- [Funzione crittografica di hash](https://it.wikipedia.org/wiki/Funzione_crittografica_di_hash)

## La postazione da cui si amministra

**Prove:** seconda prova gruppo 1, orale
**Tag:** amministratori, postazione, privilegio
**Semaforo:** giallo

### Inquadramento

La domanda chiede da dove un amministratore entra nei sistemi. La risposta è una postazione diversa da quella con cui legge la posta e apre i siti, perché quel browser è il posto da cui parte buona parte degli attacchi.

### Definizione

Una postazione di amministrazione è un sistema, fisico o virtuale, usato solo per i gesti privilegiati. Non ha la posta quotidiana, non ha la navigazione libera, e l'account con cui si entra ai server non è l'account con cui si legge la corrispondenza.

### Nel dettaglio

Si separano gli account. L'identità ordinaria riceve la posta. L'identità privilegiata entra ai server, dalla postazione dedicata, con un secondo fattore. Usare la stessa identità per tutto rende un clic su un messaggio sufficiente ad aprire la sala. La postazione dedicata si aggiorna, si accende da un'immagine, e non si «presta» per una call perché tanto è un computer.

I gesti restano nel registro: chi è entrato, su quale sistema, quando. Un amministratore che condivide la postazione e la password di servizio cancella questo registro anche se il registro c'è, perché il nome non è più vero. Niente password comuni. Niente «entra tu che io non ci sono».

Il costo è un po' di scomodità. Si dice in orale senza scusarsene: la scomodità è il punto, rende rari e visibili i gesti larghi. Per un ente piccolo la postazione può essere una macchina virtuale che si apre quando serve e si chiude dopo, purché sia un sistema diverso, non un browser in più nello stesso profilo.

### Esempio

Chi amministra il database apre la macchina di amministrazione, entra con l'identità privilegiata e il secondo fattore, fa l'intervento, esce. La posta del mattino l'ha letta sull'altra postazione, con l'altra identità. Un allegato aperto per errore non ha sotto mano la sessione del database. L'intervento è una riga nel registro, a quel nome.

### In sede di prova

Due identità, postazione dedicata, niente posta su quella postazione, secondo fattore, registri a nome vero, niente credenziali condivise.

### Errori da evitare

- Amministrare i server dal browser con cui si legge la posta.
- Condividere un account di servizio «dell'ufficio sistemi».
- Trattare la scomodità come un difetto da togliere.

### Approfondire

- [Principio del privilegio minimo](https://it.wikipedia.org/wiki/Principio_del_privilegio_minimo)
- [Autenticazione a più fattori](https://it.wikipedia.org/wiki/Autenticazione_a_pi%C3%B9_fattori)

## Quanto si tengono i registri

**Prove:** seconda prova gruppo 1, orale
**Tag:** conservazione log, GDPR, audit
**Semaforo:** verde

### Inquadramento

La domanda mette insieme un bisogno di sicurezza e un limite sui dati personali. I registri si tengono abbastanza per indagare e non per sempre per abitudine.

### Definizione

Il tempo di conservazione dei registri è una scelta scritta, diversa per tipo. I registri che servono a ricostruire un accesso illecito si tengono per il periodo in cui un incidente si può ancora scoprire e contestare. I registri di diagnostica, pieni di dettaglio, si tengono di meno. La scelta si confronta con il minimo necessario, perché i registri contengono dati di persone.

### Nel dettaglio

Non esiste, da recitare, un numero di giorni valido per ogni ente. In orale si dice il criterio e si cita il periodo solo se nell'ente è scritto e lo si ricorda. Un punto di partenza concreto, da adattare: la diagnostica di un'applicazione si misura in giorni o poche settimane, gli accessi privilegiati in mesi, ciò che una norma obbliga a tenere si tiene per quel tempo e non oltre. Inventare «sei anni per tutto» riempie i dischi e trattiene dati senza una base.

I registri non si modificano nel loro periodo, e non stanno solo sulla macchina che un intruso può pulire. Una copia segue il ciclo di backup, con la stessa attenzione di chi può leggerla: un registro di accessi è esso stesso un dato riservato. Allo scadere si cancella, con lo stesso automatismo con cui si ruota, non «quando c'è spazio».

Si scrive che cosa non finisce nel registro proprio per non doverlo conservare: corpi delle richieste, documenti, password, contenuti di caselle. Meno si è raccolto, meno si deve proteggere e poi distruggere.

### Esempio

Gli accessi all'applicazione e le operazioni sugli atti si tengono un anno, perché è il tempo entro cui l'ufficio ricostruisce una contestazione, e la scelta è scritta nel registro dei trattamenti. I log di debug del server si tengono sette giorni. Le password non ci sono mai finite. La copia sta nel sistema di backup, leggibile a pochi, e allo scadere la cancellazione è automatica.

### In sede di prova

Tempi diversi per tipo, criterio e non un numero magico, copie protette, cancellazione allo scadere, contenuto minimo.

### Errori da evitare

- Tenere tutto per sempre perché il disco costa poco.
- Citare un termine legale di cui non si è sicuri.
- Lasciare i registri solo sul server esposto.

### Approfondire

- [Log](https://it.wikipedia.org/wiki/Log)
- [Protezione dei dati personali](https://it.wikipedia.org/wiki/Protezione_dei_dati_personali)

## Intestazioni che il browser deve rispettare

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** CSP, intestazioni, browser
**Semaforo:** giallo

### Inquadramento

La domanda scende sotto XSS e chiede che cosa il server dice al browser, oltre a «non fidarti dell'input». Sono dichiarazioni, utili se strette e inutili se messe per copia.

### Definizione

Alcune intestazioni della risposta ordinano al browser comportamenti più stretti. La più importante limita da dove si possono caricare script e altri contenuti. Altre vietano di incorniciare la pagina in un altro sito, spengono il fiuto del tipo del contenuto, impongono HTTPS per le visite successive. Sono difese nel browser, da sommare ai controlli sul server, non da sostituirli.

### Nel dettaglio

La politica sui contenuti è una lista di ciò che è lecito. Se dice «tutto», non esiste. Si parte da niente di esterno e si apre solo l'origine propria. Gli script in linea si evitano, perché la politica non riesce più a distinguere i nostri da quelli iniettati. Una politica in sola segnalazione, all'inizio, fa vedere che cosa si romperebbe. Poi si passa al blocco. Lasciarla in segnalazione per sempre è un registro, non una difesa.

Il divieto di incorniciare ferma una pagina dell'ente incollata dentro un sito che ci sovrappone bottoni. L'intestazione che impone HTTPS evita che, dopo la prima visita, un ritorno in chiaro passi inosservato. Nessuna di queste intestazioni cifra il canale da sola: la cifra la fa TLS, già terminato sul proxy. E nessuna ripara una query concatenata. Il server resta il posto del controllo.

Nel tema basta nominarle nel capitolo dell'interfaccia, come scelte del proxy, e dire che si provano: la pagina funziona, uno script esterno no, la pagina non si lascia incorniciare.

### Esempio

Il proxy del portale invia una politica che consente script solo dalla stessa origine, vieta l'incorporazione in altri siti e impone HTTPS. Una prova automatica scarica le intestazioni e verifica le tre. Un tentativo di caricare uno script da un dominio estraneo non parte nel browser. La stessa richiesta, sul server, è comunque rifiutata se l'input era maligno: le intestazioni non sono il primo controllo.

### In sede di prova

Politica stretta, niente script in linea se si può, prima segnalare e poi bloccare, le intestazioni non sostituiscono i controlli sul server né TLS.

### Errori da evitare

- Inserire una politica che permette qualsiasi origine, per far sparire gli errori.
- Credere che l'intestazione basti contro l'iniezione SQL.
- Lasciare per sempre la modalità di sola segnalazione e chiamarla difesa.

### Approfondire

- [Cross-site scripting](https://it.wikipedia.org/wiki/Cross-site_scripting)
- [HTTPS](https://it.wikipedia.org/wiki/HTTPS)

## La richiesta che il server fa per conto dell'utente

**Prove:** seconda prova gruppo 1, orale
**Tag:** SSRF, server, URL
**Semaforo:** giallo

### Inquadramento

La domanda descrive un difetto meno citato di XSS e altrettanto adatto a un'applicazione che «scarica un documento da un indirizzo». Il server diventa il client, e il suo punto di vista è più ricco di quello dell'utente.

### Definizione

Quando l'applicazione riceve un indirizzo e va lei a leggerlo, un attaccante può indicarle un indirizzo interno, che dall'esterno non si vede e dal server sì. È una richiesta falsificata dal lato del server. Il server, fidato dalla rete interna, legge ciò che l'utente non raggiungerebbe.

### Nel dettaglio

I casi leciti esistono: scaricare un allegato da un deposito noto, chiamare un servizio dell'ente. Il difetto nasce se l'indirizzo è libero. Si vieta lo schema che non sia quello previsto, si vieta l'indirizzo privato, l'indirizzo di loopback, i nomi che risolvono lì, e si permette solo una lista di destinazioni. La lista è corta. «Qualsiasi indirizzo pubblico» è ancora larga, se il server tiene credenziali che un sito esterno riceverebbe insieme alla richiesta.

Il controllo si fa sull'indirizzo risolto, non solo sul testo. Un nome innocuo può risolvere su un indirizzo interno, e può cambiare fra il controllo e la connessione. Si risolve, si verifica, si connette a quell'indirizzo, senza una seconda risoluzione. Le credenziali del server, e i gettoni, non partono verso una destinazione della lista se quella destinazione non deve averli.

Nel tema, se non c'è bisogno di far scaricare un indirizzo arbitrario, la funzione non si fa. È la difesa migliore. Un caricamento dal browser verso l'applicazione basta quasi sempre.

### Esempio

Un campo «importa da URL» accetta solo il deposito documenti dell'ente, per nome già risolto in un indirizzo interno previsto. Un indirizzo 169.254 o 10.x, o un nome che ci risolve, viene rifiutato. La richiesta di prova con l'indirizzo del metadata di un cloud non esce. Se l'ufficio non aveva un bisogno vero di quell'import, il campo si toglie e si carica il file.

### In sede di prova

Il server vede la rete interna. Lista di destinazioni, controllo sull'indirizzo risolto, niente credenziali verso destinazioni estranee, meglio non avere la funzione.

### Errori da evitare

- Filtrare solo il testo «localhost» e accettare l'indirizzo numerico.
- Far risolvere il nome due volte.
- Mandare il gettone di servizio insieme a una richiesta verso un indirizzo scelto dall'utente.

### Approfondire

- [Sicurezza informatica](https://it.wikipedia.org/wiki/Sicurezza_informatica)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## Phishing: il messaggio che chiede di entrare

**Prove:** seconda prova gruppo 1, orale
**Tag:** phishing, posta, utenti
**Semaforo:** verde

### Inquadramento

La domanda è fra le più concrete. Si descrive l'attacco e le due difese che contano, una tecnica e una organizzativa, senza ridurlo a «state attenti».

### Definizione

Il phishing è un messaggio, di posta o altro canale, che si spaccia per un mittente fidato e spinge a rivelare una credenziale, a consegnare un codice, o ad aprire un'azione. Il testo può essere perfetto. Il difetto da cercare sta nell'indirizzo vero, nel destino del collegamento e nell'urgenza artificiale.

### Nel dettaglio

La difesa tecnica toglie valore alla password rubata. Il secondo fattore, sui punti giusti, fa sì che la password da sola non basti. La posta dell'ente applica i controlli sul mittente, così un dominio che finge il nostro viene scartato più spesso dai destinatari, e noi scartiamo i falsi in ingresso. Un gestore di password, o l'ingresso unico, evita di digitare la credenziale su una pagina che non è la nostra: il gestore non la propone su un dominio diverso. Nessuna di queste ferma un utente che detta il codice del secondo fattore a qualcuno al telefono. Quello è un altro attacco, e si ferma con una regola detta in una frase: l'ente non chiede mai il codice, mai la password, mai per telefono.

La difesa organizzativa è quell'unica frase, ripetuta, più un modo facilissimo di segnalare. Se segnalare costa una procedura, non segnala nessuno. Un pulsante o una casella, e una persona che guarda. Le esercitazioni si fanno, e il collega che ha cliccato non si mette in berlina: altrimenti la volta dopo non avvisa.

In un elaborato si scrive la frase e il secondo fattore. Non si scrive «formeremo gli utenti» come unica misura.

### Esempio

Arriva un messaggio che sembra l'ufficio sistemi e chiede di «confermare la password entro un'ora». Il dominio del mittente non è quello dell'ente e il collegamento porta altrove. Chi ha un dubbio lo inoltra alla casella interna senza cliccare. Anche se qualcuno ha consegnato la password, senza il secondo fattore l'ingresso al pannello non si apre, e la password si cambia lo stesso giorno.

### In sede di prova

Messaggio falso, secondo fattore, controlli sul mittente, l'ente non chiede il codice, segnalazione facile, la formazione non è la misura unica.

### Errori da evitare

- Rispondere solo con «bisogna fare attenzione».
- Chiedere davvero, per telefono, il codice agli utenti, smentendo la regola.
- Punire chi segnala un clic.

### Approfondire

- [Phishing](https://it.wikipedia.org/wiki/Phishing)
- [Autenticazione a più fattori](https://it.wikipedia.org/wiki/Autenticazione_a_pi%C3%B9_fattori)

## Ingegneria sociale, oltre la posta

**Prove:** seconda prova gruppo 1, orale
**Tag:** social engineering, procedure, accesso
**Semaforo:** giallo

### Inquadramento

La domanda allarga il phishing a qualsiasi pressione su una persona per ottenere un gesto: aprire una porta, reimpostare un account, leggere un codice. La difesa è una procedura che non dipende dal tono di chi chiede.

### Definizione

L'ingegneria sociale convince una persona autorizzata a fare da tramite. Non sfrutta un difetto del programma. Sfrutta la cortesia, l'urgenza e il nome di un superiore. Si contrasta con un gesto previsto, uguale per tutti, che si può eseguire senza sentirsi scortesi.

### Nel dettaglio

Si scrivono tre procedure corte. Reimpostare un accesso: solo su un canale noto, mai richiamando il numero che il richiedente detta al momento, e con una traccia. Far entrare un ospite in sala: solo se è nell'elenco del giorno, altrimenti si chiama l'ufficio su un numero già noto, non su quello indicato dal visitatore. Consegnare un dispositivo: solo a fronte di un buono, non di una richiesta verbale «per il presidente che aspetta». Il numero già noto è il cuore. Chi attacca fornisce lui il numero su cui verificare, e la verifica diventa parte dell'attacco.

La procedura si prova. Una volta l'anno qualcuno, d'accordo con i responsabili, prova a farsi reimpostare un account al telefono. Non per cogliere in fallo un collega in pubblico, per vedere se la procedura tiene e se è abbastanza semplice da essere usata quando c'è fretta vera. Una procedura che sotto fretta vera nessuno segue è una procedura che non esiste.

Nel discorso tecnico si chiude così: i controlli nel software assumono che l'identità sia vera. Se la reimpostazione è aggirabile a parole, i controlli successivi poggiano su un'identità comprata con una telefonata.

### Esempio

Una persona chiama l'assistenza dicendo di essere un senatore in viaggio e detta un numero di cellulare per il codice. L'operatore non richiama quel numero. Usa il canale già registrato, o rinvia all'ufficio competente. La chiamata resta nel registro. Il rifiuto è il successo della procedura, anche se il tono era convincente e il nome era vero: vero o falso, la procedura è la stessa.

### In sede di prova

Il tramite è una persona autorizzata. Procedure corte, richiamo solo su numeri già noti, prova periodica, niente berlina. La reimpostazione è il punto più sensibile.

### Errori da evitare

- Richiamare il numero appena dettato da chi chiede.
- Cambiare procedura se il nome è noto.
- Affidarsi al fatto che «da noi ci si conosce».

### Approfondire

- [Phishing](https://it.wikipedia.org/wiki/Phishing)
- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)

## Un segreto finito nel repository

**Prove:** seconda prova gruppo 1, seconda prova gruppo 2
**Tag:** segreti, repository, credenziali
**Semaforo:** verde

### Inquadramento

La domanda è operativa: qualcuno ha commesso la password del database nel codice. Si dice l'ordine dei gesti, perché il primo istinto, cancellare la riga, non chiude nulla.

### Definizione

Un segreto nel repository è compromesso nel momento in cui il repository è stato letto da qualcuno che non doveva, e spesso lo è stato anche se è «privato»: è stato copiato sulle macchine di chi ci lavora e nei backup. Cancellare il file nell'ultimo commit lascia il segreto nella storia.

### Nel dettaglio

L'ordine è fisso. Si revoca il segreto, subito, e se ne emette uno nuovo: si ruota la password del database, si invalida la chiave, si aggiorna il posto vero in cui il segreto deve stare. Poi si toglie dalla storia, sapendo che è una pulizia e non la cura. Poi si guarda dove altro è arrivato: copie di sviluppo, registri di una pipeline che stampano le variabili, immagini di container già costruite. Un'immagine che contiene la chiave va ricostruita e la precedente va tolta dal registro delle immagini.

Si impedisce la ripetizione. Un controllo nel percorso di unione cerca schemi di chiavi e rifiuta il commit. I segreti arrivano all'applicazione da un archivio, in esecuzione, e non dal codice. La pipeline non stampa l'ambiente. Chi ha bisogno del segreto di esercizio è una lista corta, e lo usa dalla postazione di amministrazione, non lo incolla in un file di prova.

La fretta di «sistemare la storia» prima di ruotare è l'errore. Finché la chiave vecchia funziona, chi l'ha letta entra. La storia si pulisce con calma, dopo.

### Esempio

Un commit di prova contiene la password del database di esercizio. Si cambia la password, si aggiorna l'archivio dei segreti, si riavviano i nodi, e solo allora si pulisce la storia e si aggiunge il controllo che rifiuta quel tipo di stringa. L'immagine già pubblicata si ricostruisce. Si verifica che la pipeline non abbia stampato la variabile nel registro del rilascio.

### In sede di prova

Prima ruotare, poi pulire la storia, poi le copie e le immagini, poi il controllo che impedisce di rimettere il segreto. Cancellare l'ultimo file non basta.

### Errori da evitare

- Fare solo un commit che toglie il file.
- Ruotare dopo aver passato il pomeriggio a riscrivere la storia.
- Lasciare la chiave dentro un'immagine già distribuita.

### Approfondire

- [Gestione della configurazione](https://it.wikipedia.org/wiki/Gestione_della_configurazione)
- [Controllo di versione](https://it.wikipedia.org/wiki/Controllo_di_versione)

## L'account con cui gira il servizio

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** service account, privilegio minimo, servizi
**Semaforo:** verde

### Inquadramento

La domanda chiede con quale identità parla l'applicazione quando chiama il database o legge un deposito. Non con l'identità di una persona, e non con un amministratore.

### Definizione

Un account di servizio è un'identità non umana, usata da un processo. Ha i soli permessi che quel processo esercita, una credenziale che si può ruotare, e nessun accesso interattivo. Non ha una casella di posta. Non entra in VPN.

### Nel dettaglio

Si crea un account per applicazione, non uno condiviso «di tutti i servizi». Se l'inventario e le prenotazioni usano lo stesso account sul database, un difetto in uno legge i dati dell'altro e il registro non distingue. I permessi sono quelli delle tabelle che servono, spesso solo attraverso il ruolo dell'applicazione, non il ruolo che cambia lo schema. Lo schema lo cambia un altro percorso, in rilascio, con un'altra credenziale.

La credenziale non sta nel codice. Sta nell'archivio dei segreti e si ruota. Un account di servizio che non si può ruotare perché «non si sa chi lo usa» è già fuori controllo: si scopre chi lo usa, si ruota, si tiene l'elenco. Niente scadenza infinita per paura di un fermo. La rotazione si prova in esercizio negli orari previsti, come un rilascio piccolo.

L'account non è amministratore della macchina. Se l'applicazione viene ingannata, eredita i permessi dell'account. Un account amministratore trasforma un difetto dell'applicazione in un difetto della macchina. Il processo gira con un utente di sistema dedicato, che non legge i file degli altri servizi.

### Esempio

L'applicazione dei visitatori ha un account sul database che legge e scrive solo le sue tabelle, non può creare utenti del database e non può leggere l'inventario. La password sta nell'archivio dei segreti, ruotata due volte l'anno in una finestra. Sulla macchina, il processo non è amministratore. Un difetto che fa eseguire un comando all'applicazione non ottiene la sala: ottiene quelle tabelle.

### In sede di prova

Un account per servizio, permessi minimi, niente accesso interattivo, credenziale ruotabile e fuori dal codice, non amministratore della macchina.

### Errori da evitare

- Far girare il servizio come amministratore di sistema.
- Condividere un account fra applicazioni diverse.
- Non ruotarlo perché si teme di scoprire dove è stato copiato.

### Approfondire

- [Principio del privilegio minimo](https://it.wikipedia.org/wiki/Principio_del_privilegio_minimo)
- [Controllo degli accessi](https://it.wikipedia.org/wiki/Controllo_degli_accessi)

## Rimandare una patch, per scritto

**Prove:** seconda prova gruppo 1, orale
**Tag:** patch, eccezione, finestra
**Semaforo:** giallo

### Inquadramento

La domanda riconosce che non ogni aggiornamento entra il giorno in cui esce. Chiede come si rimanda senza trasformare il rimando in un modo di non aggiornare.

### Definizione

Un'eccezione di patch è una decisione di non applicare, entro il tempo ordinario, un aggiornamento noto. Ha un motivo, un proprietario, una data di fine e una misura che nel frattempo riduce il danno. Senza questi quattro elementi non è un'eccezione. È un buco.

### Nel dettaglio

Il motivo è concreto: l'aggiornamento rompe una funzione, e la rottura si è vista in prova. «Non abbiamo tempo» non è un motivo, è la descrizione del problema organizzativo. Il proprietario è una persona, non un ufficio. La data di fine è vicina, e allo scadere l'eccezione si rinnova con un nuovo motivo oppure l'aggiornamento entra. Le eccezioni senza data sono l'inventario dei sistemi che non si toccano da anni.

La misura temporanea dipende dal difetto. Se la falla è su un servizio esposto, si chiude l'esposizione o si limita a chi ne ha bisogno, e si accetta lo scomodità per quel periodo. Se la falla richiede un accesso già locale, la misura può essere più leggera, e lo si scrive. Trattare tutte le falle come uguali, o tutte come rinviabili, è non averle lette.

Si conta quante eccezioni sono aperte. Un elenco che cresce è un processo che non chiude. In orale si può dire che la patch è parte della disponibilità, perché un servizio facile da abbattere da fuori non è disponibile, e che il rimando è un'eccezione tracciata.

### Esempio

Un aggiornamento del proxy rompe, in prova, il caricamento di un allegato. Si apre un'eccezione a nome del responsabile del servizio, sette giorni, e nel frattempo il proxy accetta quell'origine solo dalla rete interna. Al quinto giorno la correzione è verificata e l'aggiornamento entra. L'eccezione si chiude. Non resta un biglietto «da fare».

### In sede di prova

Motivo, proprietario, data di fine, misura nel frattempo. «Non c'è tempo» non è un motivo. L'elenco delle eccezioni si conta.

### Errori da evitare

- Rinviare senza data.
- Rinviare un difetto già sfruttato e esposto, con la stessa calma di un difetto locale.
- Chiudere l'eccezione senza aver applicato l'aggiornamento né averne aperta un'altra.

### Approfondire

- [Patch](https://it.wikipedia.org/wiki/Patch)
- [Vulnerabilità](https://it.wikipedia.org/wiki/Vulnerabilit%C3%A0_(sicurezza_informatica))

## Impedire che un export esca dal perimetro

**Prove:** seconda prova gruppo 1, orale
**Tag:** DLP, export, dati
**Semaforo:** rosso

### Inquadramento

Voce laterale. Serve se la commissione chiede come si evita che un elenco di persone finisca in una casella personale o su una chiavetta. Si resta sul meccanismo, senza nomi di prodotti.

### Definizione

Il controllo di fuoriuscita osserva i canali da cui un dato può lasciare l'ente, posta esterna, caricamento verso siti, supporti rimovibili, e blocca o segnala ciò che corrisponde a una regola. La regola funziona se il dato è riconoscibile e se i canali leciti sono pochi.

### Nel dettaglio

Prima si riducono i canali, poi si compra un controllo. Se ogni postazione legge la posta personale e scrive su chiavette, il controllo insegue il mondo. Se la posta esterna passa da un solo servente e le chiavette sono disabilitate salvo eccezione, il controllo ha due punti da guardare. È la stessa logica del confine di rete.

Le regole partono dai dati già classificati. Un export di un'anagrafe, un file con molti codici fiscali, un archivio di documenti riservati. Senza classificazione il controllo blocca a caso o non blocca. Si accetta un periodo di sola segnalazione per vedere i falsi, poi si blocca ciò che è chiaro. Un blocco pieno il primo giorno ferma il lavoro e viene spento, che è il peggior esito.

Il controllo non sostituisce il permesso. Se l'applicazione consente a chiunque di esportare l'anagrafe, si chiude l'export. Il controllo di fuoriuscita è la rete di sicurezza per ciò che l'applicazione non può vedere, per esempio un allegato. Detto in orale con questa modestia, la voce rende. Venduta come il sistema che «impedisce le fughe», no.

### Esempio

L'applicazione non ha un pulsante «scarica tutti i visitatori». L'export di un giorno è un'operazione di un ruolo, registrata. In più, il servente di posta segnala un allegato con centinaia di codici verso un dominio esterno. La segnalazione la guarda una persona, non un automatismo che cancella la mail di un fascicolo lecito. Le chiavette non si usano, salvo un buono.

### In sede di prova

Prima pochi canali e niente export di massa, poi un controllo sui canali rimasti, regole su dati classificati, prima segnalare poi bloccare, una persona sulle eccezioni.

### Errori da evitare

- Comprare il controllo e lasciare l'export aperto a tutti nell'applicazione.
- Bloccare tutto il primo giorno e spegnere tutto il secondo.
- Trattarlo come garanzia che nulla possa uscire.

### Approfondire

- [Classificazione dei dati](https://it.wikipedia.org/wiki/Classificazione)
- [Protezione dei dati personali](https://it.wikipedia.org/wiki/Protezione_dei_dati_personali)
