# Area 2 — Virtualizzazione e cloud computing

Virtualizzazione e cloud stanno nel gruppo 1 della seconda prova e nel colloquio sulle architetture. Nella prima prova il cloud è una scelta da motivare: un ente con una sala già esistente può restare lì, e dirlo è una risposta.

### Il filo

L’hypervisor stacca il sistema operativo dal ferro. La macchina virtuale porta con sé un sistema intero; il container porta l’applicazione e condivide il nucleo. Sopra i container, l’orchestrazione mantiene il numero di copie dichiarato. IaaS, PaaS e SaaS dicono chi, fra ente e fornitore, amministra che strato. Pubblico, privato, ibrido e comunitario dicono di chi è l’infrastruttura. Lock-in, migrazione e regioni completano il giudizio. Il serverless è il caso limite: la macchina non si vede, e restano comunque codice, dati e identità.

### Come si risponde

Si distingue sempre il ruolo dal prodotto. «Un hypervisor di tipo 1 sul ferro» vale più di un marchio. La responsabilità condivisa si disegna a strati: sotto una linea il fornitore, sopra la linea l’ente. Una scelta di cloud senza dire dove stanno i dati e chi applica le patch è incompleta. In un elaborato, due macchine virtuali dietro un proxy sono spesso più credibili di una piattaforma che nessuno sa esercire.

### Da dove partire

Verde: hypervisor, macchina virtuale e container, IaaS PaaS SaaS. Subito dopo il modello pubblico privato ibrido e la protezione degli accessi. Orchestrazione e serverless si aggiungono quando si sa già dire perché, in un ente piccolo, si può rifiutarli.

## Che cos’è la virtualizzazione e che cosa fa un hypervisor

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** hypervisor, VM, tipo 1, tipo 2
**Semaforo:** verde

### Inquadramento

L'hypervisor fa girare più sistemi operativi sullo stesso ferro e li isola. Il tipo 1 sta sul hardware. Il tipo 2 sta sopra un sistema già acceso, e serve alle prove, non all'esercizio di un ente. Sul foglio si dice che cosa si guadagna: consolidare, spostare una macchina, provare senza comprare un server. Si dice anche il limite: un guasto del ferro ferma tutte le macchine che ci stanno sopra, se non c'è un secondo host. Il nome del prodotto, se non lo si sa spiegare, si omette.

### Definizione

La virtualizzazione è la tecnica che crea risorse informatiche logiche, distinte dall’hardware fisico sottostante. Nel caso più importante per l’esame, un server fisico esegue più macchine virtuali. Ogni macchina virtuale ha il proprio sistema operativo, le proprie applicazioni e un hardware simulato o assegnato: processori, memoria, dischi, schede di rete. Le macchine sono isolate fra loro anche se condividono lo stesso elaboratore.

### L’hypervisor

L’hypervisor è il componente che crea le macchine virtuali e spartisce fra loro CPU, RAM e dispositivi. Ne esistono due famiglie.

L’hypervisor di tipo 1, detto bare metal, è installato direttamente sull’hardware. Non c’è un sistema operativo generale sotto di lui. È la forma usata nei data center. Esempi di prodotti, da citare solo se si ricorda anche il ruolo, sono VMware ESXi, Microsoft Hyper-V in modalità hypervisor, KVM con la sua gestione su Linux, e gli ambienti dei cloud pubblici. Il tipo 1 è più efficiente e più adatto a un esercizio continuativo.

L’hypervisor di tipo 2, detto hosted, è un’applicazione installata sopra un sistema operativo già presente, come VirtualBox o VMware Workstation su un PC. È comodo per laboratori e prove. In produzione, il sistema operativo ospite aggiunge uno strato e una superficie di aggiornamenti che non serve.

Dentro la macchina virtuale il sistema operativo si chiama guest. La macchina fisica e il suo hypervisor sono l’host. Si può sospendere una macchina, farne uno snapshot, clonarla per una prova, e in molti ambienti spostarla accesa da un host a un altro: è la migrazione live. Lo spostamento riesce se gli host vedono lo stesso storage condiviso e se la rete è predisposta. È il gesto che permette di manutenzionare un server fisico senza spegnere il servizio che ci gira sopra.

### Perché si è diffusa

Prima della virtualizzazione un’applicazione prudente stava su un server intero, spesso usato al dieci per cento. Dieci servizi volevano dieci server, dieci contratti di assistenza, dieci consumi. Con la virtualizzazione quegli ambienti convivono su meno macchine, restando isolati: un crash del sistema guest non abbatte, di regola, gli altri guest. Si prepara un nuovo server in minuti, da un modello già configurato, invece di ordinare hardware. Si prova un aggiornamento su un clone.

I limiti restano. Un host sovraccarico rallenta tutte le macchine. Un errore sull’hypervisor o sull’hardware colpisce tutti i guest di quell’host: l’isolamento è logico, non miracoloso. Per questo gli host si mettono in cluster. E la virtualizzazione non corregge un’applicazione scritta male.


### Nel dettaglio

Senza virtualizzazione un server ospita un sistema operativo, e quel sistema possiede il ferro. Se l’applicazione ne usa il dieci per cento, il resto sta fermo, e una seconda applicazione con esigenze diverse di librerie non si installa volentieri accanto. La virtualizzazione inserisce uno strato che presenta a più sistemi operativi un ferro finto, coerente, mentre il ferro vero resta uno. Ogni sistema ospite crede di avere processore, memoria, dischi e schede. Lo strato si chiama hypervisor.

L’hypervisor di tipo 1 gira sul ferro, senza un sistema operativo generale sotto. È la forma della sala: il nodo si accende, parte l’hypervisor, e le macchine virtuali stanno sopra. Un guasto di un ospite non spegne gli altri, perché non condividono il kernel. L’hypervisor di tipo 2 gira dentro un sistema già avviato, come un programma. È la forma del laboratorio sul proprio PC. In produzione si nomina il tipo 1. Il tipo 2 si cita per dire dove si prova.

L’hypervisor non fa magie sulla fisica. La RAM data a una macchina è RAM tolta alle altre, salvo tecniche di deduplica che in un tema non servono. Se si promettono otto macchine da sedici gigabyte su un nodo da sessantaquattro, il conto è già oltre, prima ancora del sistema. Il processore si condivide nel tempo: finché gli ospiti sono oziosi, ciascuno crede di avere i core. Quando tutti lavorano, il nodo è saturo e tutti rallentano insieme. Il disco è il collo più frequente: otto macchine che scrivono sullo stesso gruppo di dischi si contendono le operazioni. Per questo il dimensionamento si fa sulla somma dei picchi, non sulla somma delle targhette.

Isolare è il beneficio che in un ente conta quanto il risparmio. Un servizio vecchio, che vuole un sistema operativo fuori supporto, sta in una macchina sua, con rete ristretta, senza costringere gli altri a restare vecchi. Si può fermare, clonare, spostare su un altro nodo se l’hypervisor è in cluster. Lo spostamento a caldo richiede storage condiviso e CPU compatibili: la memoria della macchina viene copiata sull’altro nodo e il controllo passa. Non è un backup e non è una replica dei dati applicativi: è il trasloco del calcolatore acceso.

Sul foglio si disegnano il ferro, l’hypervisor e tre ospiti, e si scrive che cosa è condiviso: alimentatori, nodi, dischi. Poi una frase sul limite: la virtualizzazione moltiplica i sistemi, non la corrente, non la RAM e non le operazioni dei dischi.

### Esempio

Un ente accorpa su tre host fisici in cluster i server che prima erano venti macchine sottoutilizzate: posta interna, applicazione dei ticket, database di prova, un controller di dominio, il server di stampa. Il database di produzione, se è esigente, può restare su hardware dedicato o su una macchina virtuale con risorse riservate, non in concorrenza con tutto il resto. Di notte si sposta a caldo la macchina dei ticket per aggiornare un host.

### In sede di prova

Definire la macchina virtuale e l’isolamento. Distinguere hypervisor di tipo 1 e di tipo 2 e dire che in un data center si usa il tipo 1. Elencare consolidamento, isolamento, snapshot, cloni e migrazione come vantaggi, e l’host come possibile punto di guasto concentrato se non c’è un cluster.

### Errori da evitare

- Dire che le macchine virtuali «non hanno un sistema operativo».
- Citare VirtualBox come soluzione da data center.
- Credere che la virtualizzazione sia già il cloud. È una tecnica che il cloud usa. Si può virtualizzare restando nella propria sala.

### Approfondire

- [Hypervisor](https://it.wikipedia.org/wiki/Hypervisor)
- [Microsoft Learn, introduzione alla virtualizzazione](https://learn.microsoft.com/it-it/virtualization/hyper-v-on-windows/about/)

## Macchine virtuali e container

**Prove:** seconda prova gruppo 1, seconda prova gruppo 2, orale
**Tag:** container, Docker, immagine, kernel
**Semaforo:** verde

### Inquadramento

La macchina virtuale porta un sistema operativo intero. Il container porta l'applicazione e condivide il nucleo dell'host: è più leggero e meno isolato. I dati non stanno nel container, che si può rifare. Stanno su un volume o, meglio, in un database con le sue copie. Sul foglio si assegna l'uno o l'altro a un pezzo del sistema, con il motivo. Due container senza una rete che li separi non sono una segmentazione. L'immagine non contiene password.

### Definizione

Una macchina virtuale virtualizza un intero elaboratore e vi installa un sistema operativo completo. Un container virtualizza l’ambiente di esecuzione di un’applicazione: impacchetta il programma e le sue librerie, e condivide il kernel del sistema operativo dell’host con gli altri container. Non c’è un secondo sistema operativo avviato dentro ogni container.

### Confronto utile in un tema

La macchina virtuale isola in modo forte. Si possono far convivere sistemi operativi diversi, anche di famiglie diverse, sullo stesso hardware. L’avvio richiede il boot di un sistema, e l’immagine occupa da centinaia di megabyte a decine di gigabyte. È la scelta giusta quando serve un sistema diverso, un isolamento più netto, oppure un’applicazione legacy che si aspetta una macchina intera.

Il container parte in secondi, pesa meno e tiene insieme l’applicazione e le dipendenze nella versione giusta. Due applicazioni che sullo stesso server si disturbavano per via di librerie diverse possono stare in due immagini distinte. Lo stesso file immagine si esegue sul portatile di sviluppo e sul server, riducendo la frase «sulla mia macchina funzionava». Lo svantaggio è che i container dello stesso host condividono il kernel: un isolamento meno profondo di quello fra macchine virtuali, e l’impossibilità di far girare un kernel diverso. In produzione non si gestiscono a mano decine di container. Si usa un orchestratore che li avvia, li sorveglia, li sostituisce se cadono e li colloca sui nodi.

Le due tecniche si combinano. È normale avere un cluster di macchine virtuali, o di server, e dentro quelle macchine eseguire container. Dire «usiamo i container al posto dei server» è impreciso: i container hanno comunque bisogno di macchine, fisiche o virtuali, su cui girare.

Anche l’immagine di un container va aggiornata. Una libreria vulnerabile dentro l’immagine resta vulnerabile finché non si ricostruisce l’immagine e non la si ridistribuisce. La leggerezza non è una misura di sicurezza già compiuta.


### Nel dettaglio

La macchina virtuale porta con sé un kernel. Dentro c’è un sistema operativo intero, i suoi aggiornamenti, i suoi processi, il suo filesystem. L’avvio dura come l’avvio di un sistema, secondi o decine di secondi. L’isolamento è forte: un kernel ospite compromesso non è il kernel del vicino, e per passare oltre deve bucare l’hypervisor. Il costo è la duplicazione. Dieci macchine con lo stesso sistema sono dieci copie del sistema da aggiornare, dieci avvii, dieci quantità di RAM occupate dal kernel prima ancora dell’applicazione.

Il container porta il processo e le librerie, e usa il kernel dell’host. Non c’è un secondo sistema operativo. L’avvio è l’avvio del processo, spesso inferiore al secondo. L’immagine contiene ciò che serve all’applicazione e poco altro, e la stessa immagine gira uguale in prova e in esercizio se l’host ha un kernel compatibile. L’isolamento è di namespace e di limiti: il container vede un suo albero di file, una sua rete, un tetto di CPU e di RAM. Non vede i processi degli altri. Il kernel, però, è uno. Una vulnerabilità del kernel è una vulnerabilità di tutti i container di quell’host. Per un carico che gestisce dati riservati e uno che è esposto a Internet, due macchine virtuali restano la separazione più facile da difendere. Dentro ciascuna, i servizi possono essere container.

L’immagine è la ricetta congelata. Si costruisce una volta, si versiona, si promuove. Non si entra in produzione a installare pacchetti a mano: la macchina così curata non è più riproducibile, e il secondo nodo verrà diverso. I dati non stanno nell’immagine. Un container che tiene i dati solo nel proprio filesystem li perde quando viene sostituito dall’immagine nuova. I dati stanno su un volume, esterno al container, e il backup si fa su quello.

In un elaborato la frase giusta è una scelta motivata. Macchine virtuali per separare i grandi confini: database, applicazione, servizi di rete. Container per far correre più copie dell’applicazione stessa, tutte uguali, da accendere e spegnere con il carico. Dire «usiamo i container» senza dire dove stanno i dati e chi è il kernel è la versione sintetica che non regge a una domanda.

### Esempio

L’applicazione dei ticket è impacchettata in un’immagine: runtime, librerie e configurazione. In esercizio l’orchestratore tiene due copie in esecuzione dietro il bilanciatore. Una nuova versione si pubblica avviando i container nuovi e spegnendo i vecchi. Il database, con il suo stato e i suoi dischi, resta una macchina virtuale o un servizio gestito, non un container effimero di cui si può perdere il disco locale.

### In sede di prova

Una tabella a parole basta. Macchina virtuale: sistema operativo completo, isolamento forte, più pesante. Container: processo isolato che condivide il kernel, più leggero, dipendente dall’immagine e da un orchestratore. Dire per che cosa si userebbe ciascuno nel progetto. Non serve conoscere a memoria i comandi.

### Errori da evitare

- Affermare che un container contiene un sistema operativo intero come una macchina virtuale.
- Mettere i dati persistenti solo dentro il container, che è fatto per essere distrutto e ricreato.
- Presentare i container come sempre più sicuri delle macchine virtuali. L’isolamento della macchina virtuale è più profondo.

### Approfondire

- [Docker](https://it.wikipedia.org/wiki/Docker)
- [Virtualizzazione a livello di sistema operativo](https://it.wikipedia.org/wiki/Virtualizzazione_a_livello_di_sistema_operativo)

## IaaS, PaaS e SaaS, e il modello di responsabilità

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** IaaS, PaaS, SaaS, responsabilità condivisa
**Semaforo:** verde

### Inquadramento

I tre modelli dicono fino a che strato arriva il fornitore. Nell'IaaS l'ente ha il sistema e l'applicazione. Nel PaaS consegna l'applicazione e non le macchine. Nel SaaS usa un servizio finito. La responsabilità si disegna sulla stessa scala: ciò che l'ente configura, l'ente lo protegge. Sul foglio si sceglie un modello per un pezzo solo, per esempio la posta come SaaS e il portale come IaaS o in sala, e si dice chi applica le patch. Un account qualunque, non qualificato per la pubblica amministrazione, non è una scelta completa.

### Definizione

Il cloud computing è l’erogazione di risorse informatiche — elaborazione, memoria, storage, piattaforme, applicazioni — come servizio di rete, su richiesta, con una capacità che si può aumentare o ridurre e, di solito, con un costo legato all’uso. I tre modelli di servizio dicono quanto di quella pila è gestito dal fornitore e quanto dal cliente.

### I tre modelli

Nello IaaS, infrastructure as a service, il fornitore mette a disposizione macchine virtuali, reti e dischi. Il cliente installa il sistema operativo, le piattaforme e le applicazioni, e li aggiorna. Ha il controllo più ampio e anche il lavoro più ampio. È lo schema di un server virtuale noleggiato. Esempio tipico: una macchina virtuale su un cloud pubblico.

Nel PaaS, platform as a service, il fornitore gestisce anche sistema operativo, runtime e spesso il database o l’ambiente di esecuzione. Il cliente porta il codice e la configurazione. Non deve patchare il sistema la notte, e in cambio accetta i vincoli della piattaforma: linguaggi e servizi disponibili, modo in cui si scrivono i log, limiti di personalizzazione.

Nel SaaS, software as a service, il cliente usa un’applicazione finita, di solito dal browser. Posta, videoscrittura collaborativa, un gestionale offerto come servizio. Non gestisce l’infrastruttura né il codice. Configura utenti, permessi e, nei prodotti seri, alcune regole. La disponibilità e l’evoluzione del software dipendono dal fornitore.

Si incontra anche il modello a funzioni, in cui si carica una funzione e il fornitore la esegue solo quando arriva un evento. È un caso estremo di piattaforma. In un tema d’esame va citato solo se si sa dire che non mantiene stato da sola e che il controllo sull’ambiente è minimo.

La responsabilità è condivisa e il confine si sposta. Nello IaaS il fornitore protegge la fisica della sala, la rete del cloud e l’hypervisor; il cliente protegge sistema operativo, configurazione della rete virtuale, identità, dati e applicazione. Nel SaaS il fornitore gestisce quasi tutta la pila, ma il cliente resta responsabile di chi abilita, di quali dati carica e di come configura la condivisione. «È in cloud, quindi ci pensa il fornitore» è il malinteso da non scrivere.

Esiste poi il piano di controllo: gli account con cui si creano macchine e si leggono i dati. Un account amministratore del cloud senza autenticazione forte è una porta più larga di un vecchio server in sala.


### Nel dettaglio

Il modello si capisce elencando, riga per riga, chi patcha che cosa. Nello IaaS il fornitore dà ferro virtuale, rete virtuale, dischi. L’ente installa il sistema operativo, lo aggiorna, installa l’applicazione, configura il firewall del sistema, fa i backup dei dati, gestisce gli accessi. Dimenticare gli aggiornamenti del sistema, perché «è in cloud», è l’errore tipico: il fornitore aggiorna l’hypervisor, non l’ospite. Il vantaggio è il controllo. Si sposta una macchina quasi com’è. Il prezzo è che la conduzione resta in capo all’ente.

Nel PaaS il fornitore dà la piattaforma già accesa: un runtime, un database gestito, un ambiente in cui si deposita l’applicazione. L’ente non patcha il sistema sotto, non dimensiona i dischi del database uno a uno, non si accorge del failover se il fornitore lo fa. L’ente resta responsabile del codice, delle regole di accesso dentro l’applicazione, dei dati che ci mette, e della configurazione che il fornitore gli lascia in mano: utenti, rete permessa, copie. Il vincolo è la forma. L’applicazione deve entrare in ciò che la piattaforma ammette. Una dipendenza da un disco locale particolare, o da un sistema vecchio, non entra, e va detta come motivo per restare sullo IaaS.

Nel SaaS l’ente non scrive l’applicazione. La usa. Il fornitore aggiorna, conduce, progetta le funzioni. L’ente configura i ruoli, immette i dati, sceglie chi entra, legge il contratto su dove stanno i dati e come si esce. La responsabilità dei dati non si delega insieme al software: un dato personale messo in un servizio non adatto resta un problema dell’ente. E l’uscita va pensata prima: in che formato si riprendono i dati se il contratto finisce.

Una tabella mentale da riscrivere sul foglio, per un portale fatto in casa. Ferro, energia, hypervisor: fornitore, se è IaaS. Sistema operativo e patch: ente. Applicazione e permessi: ente. Backup dei dati: ente, salvo un servizio di copie che va comunque verificato. Identità degli utenti: ente. Se invece il portale è un prodotto comprato come SaaS, si invertono applicazione e patch, e restano all’ente identità, dati e contratto. La frase «il cloud è sicuro» non compare: si dice chi fa quale controllo.

### Esempio

Per la stessa applicazione di ticketing un ente ha tre modi coerenti. IaaS: due macchine virtuali, sistema operativo curato dall’ente, database installato dall’ente, backup decisi dall’ente. PaaS: l’ente pubblica l’applicazione e usa un database gestito, di cui il fornitore cura versioni e alta disponibilità di base, mentre l’ente cura schema, accessi e copie logiche. SaaS: l’ente adotta un prodotto di service desk già fatto, se le regole del prodotto coprono i requisiti e se i dati possono stare presso quel fornitore. La scelta dipende da controllo, competenze interne e vincoli sui dati, non dalla moda.

### In sede di prova

Definire il cloud in una frase, poi i tre acronimi con «chi gestisce che cosa». Aggiungere la responsabilità condivisa con un esempio di ciò che resta sempre al cliente: identità, permessi, classificazione dei dati. Se si sceglie un modello in un progetto, una riga di motivazione basta.

### Errori da evitare

- Invertire IaaS e SaaS. IaaS è infrastruttura, SaaS è l’applicazione finita.
- Elencare solo marchi commerciali senza dire il modello.
- Affidare al fornitore, per definizione, anche la correttezza dei permessi dati agli utenti dell’ente.

### Svolgimento da consegnare
Il cloud computing è l'erogazione di risorse informatiche come servizio di rete, su richiesta, con una capacità che si può variare e di solito con un costo legato all'uso. Dire «andiamo in cloud» non è una scelta. La scelta è quanto della pila resta all'ente e quanto passa al fornitore, e di chi è l'infrastruttura. Il primo asse è il modello di servizio. Il secondo, da non confondere, è il modello di deployment: pubblico, privato, ibrido, comunitario.

Nello IaaS il fornitore mette macchine virtuali, reti e dischi. L'ente installa il sistema operativo, la piattaforma e l'applicazione, e li aggiorna. Ha il controllo più ampio e anche il lavoro più ampio. Nel PaaS il fornitore gestisce anche il sistema operativo e l'ambiente di esecuzione. L'ente porta il codice e la configurazione, e accetta i vincoli della piattaforma. Nel SaaS l'ente usa un'applicazione finita, di solito dal browser, e configura utenti e permessi. Non gestisce il codice. La disponibilità del programma dipende dal fornitore.

La responsabilità è condivisa e il confine si sposta, non sparisce. Nello IaaS il fornitore protegge la sala, la rete del cloud e l'hypervisor. L'ente protegge il sistema operativo, le regole di rete virtuale, le identità, i dati e l'applicazione. Nel SaaS il fornitore gestisce quasi tutta la pila, ma l'ente resta responsabile di chi abilita, di quali dati carica e di come configura la condivisione. La frase da non scrivere è «è in cloud, quindi ci pensa il fornitore». Un account di amministrazione senza un secondo fattore, o un disco reso leggibile da chiunque, sono errori dell'ente anche nel cloud più certificato.

Per la stessa applicazione di ticketing i tre modelli sono tre progetti diversi. IaaS: due macchine, sistema operativo curato dall'ente, backup decisi dall'ente. PaaS: l'ente pubblica l'applicazione e usa un database gestito, e deve comunque curare schema, accessi e prove di copia. SaaS: si adotta un prodotto già fatto, se copre i requisiti e se i dati possono stare presso quel fornitore secondo le regole della pubblica amministrazione. In un ente non è indifferente quale cloud: i servizi per la PA passano da una qualificazione, e il Polo strategico nazionale è l'infrastruttura pensata per questo, distinta dall'acquisto di un servizio pubblico qualsiasi. La scelta si motiva con il controllo sui dati, le competenze interne e il vincolo di uscita, il lock-in, non con la moda.

```disegno
titolo: Chi gestisce che cosa, dal basso verso l'alto
zona: Sempre il fornitore, in tutti i modelli | Sala, energia, rete fisica del cloud
zona: IaaS, lo gestisce l'ente | Sistema operativo, runtime, applicazione, dati, identità
zona: PaaS, lo gestisce il fornitore fino al runtime | L'ente porta codice, configurazione, dati, identità
zona: SaaS, lo gestisce il fornitore fino all'applicazione | L'ente gestisce utenti, permessi e il contenuto dei dati
nota: Identità, permessi e classificazione dei dati non passano mai per intero al fornitore.
```

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Modello di responsabilità condivisa, panoramica Azure](https://learn.microsoft.com/it-it/azure/security/fundamentals/shared-responsibility)

## Cloud pubblico, privato, ibrido e comunitario

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** deployment, pubblico, privato, ibrido, PSN
**Semaforo:** giallo

### Inquadramento

Pubblico è di un fornitore, per molti clienti. Privato è dedicato all'ente. Ibrido tiene alcuni pezzi nell'uno e alcuni nell'altro, con un confine da sorvegliare. Comunitario è condiviso da enti con gli stessi vincoli. Sul foglio si parte dai dati e dalla sala che esiste già. Se i dati sono interni e la sala regge, restare in privato è una motivazione. L'ibrido si accetta solo dicendo quale dato attraversa il confine e come è protetto.

### Definizione

Il modello di servizio dice che cosa si acquista. Il modello di deployment dice di chi è l’infrastruttura e chi può usarla. Sono due assi indipendenti: si può avere uno IaaS pubblico o uno IaaS privato.

### I modelli

Nel cloud pubblico l’infrastruttura è di un fornitore e i clienti ne condividono l’uso, isolati fra loro da meccanismi logici. Si acquista in ore o in minuti, la capacità è ampia, la sala e gli impianti non sono un problema dell’ente. Il rovescio è la dipendenza dal fornitore, il costo che va sorvegliato, e la necessità di sapere in quale giurisdizione stanno i dati e chi può accedervi per legge.

Nel cloud privato l’infrastruttura è dedicata a una sola organizzazione. Può stare nella sala dell’ente o essere gestita da un fornitore ma non mescolata con altri clienti. Il controllo è maggiore. La capacità elastica è minore, e tornano i costi di impianto o di un contratto dedicato. «Privato» non significa automaticamente «più sicuro»: significa dedicato. Un cloud privato senza patch e senza controllo degli accessi è soltanto una sala riservata e vulnerabile.

Nel cloud ibrido una parte del sistema sta nel privato e una parte nel pubblico, collegate da una rete protetta, e i due ambienti sono gestiti in modo coordinato. Si usa quando alcuni dati o alcuni carichi devono restare in un perimetro controllato e altri beneficiano della capacità pubblica: per esempio i documenti riservati in sala, e un ambiente di prova o un picco di calcolo fuori. L’ibrido è più complesso. Identità, rete, monitoraggio e backup vanno progettati su entrambi i lati, altrimenti è solo due sistemi giustapposti.

Nel cloud comunitario l’infrastruttura è condivisa da organizzazioni con gli stessi vincoli, per esempio pubbliche amministrazioni, e non dal mercato generico. Per la pubblica amministrazione italiana il riferimento concreto di questi anni è il Polo strategico nazionale, l’infrastruttura cloud destinata alla PA, nata per offrire un ambiente con requisiti di sicurezza e di controllo adatti alle amministrazioni, distinto dal semplice acquisto di un servizio pubblico qualsiasi. In un tema non è obbligatorio adottarlo, ma è un nome corretto da conoscere se si parla di cloud per un ente pubblico, insieme alle qualificazioni dei servizi cloud per la PA curate da AgID.


### Nel dettaglio

Il pubblico è di un fornitore, condiviso fra clienti che non si vedono, raggiunto per rete. Si acquista a consumo o a blocchi, si accende in minuti, e si accetta che l’infrastruttura sotto sia di un altro, con un contratto e una localizzazione dei dati da leggere. Per un carico che varia, o per un servizio che l’ente non vuole costruire, è la strada corta. Il dato che non può uscire dal perimetro, per una regola o per un vincolo di segretezza, non ci si mette solo perché è comodo.

Il privato è dedicato all’ente. Può stare nella sua sala o in un housing riservato. L’ente, o chi conduce per lui, controlla accessi, macchine, confini. Costa anche quando è fermo, perché il ferro è suo o è prenotato. Si sceglie quando il carico è stabile e il controllo vale più dell’elasticità, o quando il vincolo sui dati esclude il pubblico. Un privato senza le pratiche di un data center, però, è solo una sala con un nome nuovo.

L’ibrido tiene entrambi e, soprattutto, tiene il collegamento fra i due. L’identità è una sola, altrimenti ogni utente ha due vite. La rete fra sala e cloud è cifrata e stabile, perché le applicazioni si chiamano. I dati hanno un padrone chiaro: si scrive quale dato resta in casa e quale può stare fuori. Il trabocchetto è il sistema spezzato, in cui il pubblico contiene una copia informale e nessuno sa più qual è l’originale. L’ibrido va disegnato, non subito.

Il comunitario è condiviso da enti con gli stessi vincoli, per esempio una infrastruttura per pubbliche amministrazioni, con regole comuni e un perimetro più stretto del pubblico generico. Si nomina quando esiste davvero un’offerta del genere e i vincoli dell’ente ci rientrano. Non è un privato, perché si condivide, e non è un pubblico qualunque, perché l’ingresso è riservato a soggetti omogenei.

Sul foglio si sceglie un modello e si motivano due cose: dove sta il dato più sensibile, e chi opera la macchina di notte. Un pubblico senza presidio dell’ente va bene se il fornitore ha un contratto con orari. Un privato senza persone va bene solo di giorno.

### Esempio

Un’applicazione di gestione del personale, con dati particolari, può stare su un ambiente privato o su un cloud qualificato per la PA, mentre il sito pubblico di consultazione di documenti già destinati alla diffusione sta su un servizio pubblico più elastico. Il collegamento fra i due, se esiste, è cifrato e minimo: il sito pubblico non ha una strada verso il database del personale.

### In sede di prova

Non scegliere «il cloud» come se fosse una cosa sola. Scrivere il modello di servizio e il modello di deployment. Per un ente, aggiungere una frase su dati, giurisdizione e competenze che restano interne. Il privato non va romanticizzato e il pubblico non va trattato come una rinuncia a ogni controllo.

### Errori da evitare

- Usare pubblico, privato e ibrido come sinonimi di IaaS, PaaS e SaaS.
- Scrivere che nel cloud i dati sono «da un’altra parte» senza dire chi ne risponde.
- Ignorare, in un contesto di pubblica amministrazione, che esistono vincoli di qualificazione dei servizi cloud.

### Approfondire

- [AgID, qualificazione dei servizi cloud per la PA](https://www.agid.gov.it/it/infrastrutture/cloud-pa)
- [Polo strategico nazionale](https://www.polostrategiconazionale.it/)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Vantaggi, rischi e lock-in del cloud

**Prove:** seconda prova gruppo 1, orale
**Tag:** lock-in, costi, sovranità, elasticità
**Semaforo:** giallo

### Inquadramento

I vantaggi sono elasticità, tempi di avvio e il non dover comprare il picco. I rischi sono il luogo dei dati, la dipendenza, il costo che cresce con l'uso e l'uscita difficile. Il lock-in è il costo di andarsene: formati, servizi che esistono solo lì, competenze. Sul foglio si mettono due vantaggi e due rischi sullo stesso servizio, e si dice che cosa si è tenuto esportabile, per esempio i backup in un formato che un altro motore sa leggere.

### Definizione

Il cloud sposta un investimento in hardware e sale, pagato in anticipo, verso un servizio pagato in base all’uso e gestito in larga parte dal fornitore. Il vantaggio e il rischio nascono dallo stesso fatto: l’ente non possiede più tutta la pila.

### Che cosa si guadagna e che cosa si sorveglia

Si guadagna velocità. Un ambiente di prova si ottiene in un pomeriggio, non in una gara per acquistare un server. Si guadagna elasticità: la capacità cresce per il periodo di un picco e poi si riduce. Si guadagna, nei fornitori grandi, un impianto fisico che un singolo ente faticherebbe a replicare: energia, siti multipli, difese di rete di scala. Si spostano costi da investimento a spesa corrente, il che può essere un vantaggio o un vincolo di bilancio, e va detto come tale, non come un miracolo contabile.

Si sorveglia la dipendenza. Il lock-in è la difficoltà di andarsene. Se si usano servizi molto particolari di un solo fornitore, riscrivere l’applicazione per un altro ambiente costa caro. Una contromisura è tenere i dati in formati esportabili, conoscere le procedure di uscita prima di entrare, e non spargere logica in servizi che non si saprebbero sostituire. Il lock-in non è un argomento per non usare mai il cloud. È un argomento per decidere quali pezzi devono restare portabili, in primo luogo i dati e le copie di backup, che devono essere recuperabili anche se l’account è compromesso o il contratto finisce.

Si sorveglia il costo vivo. Una macchina accesa e dimenticata, un disco che cresce, un log troppo verboso inviato a un servizio a pagamento, trasformano l’elasticità in una bolletta. Serve un responsabile del consumo, con soglie e avvisi.

Si sorvegliano i dati. Dove sono, chi del fornitore può accedervi, in base a quale contratto, con quale cifra a riposo e in transito, per quanto tempo restano le copie dopo la cessazione. Per una pubblica amministrazione si aggiungono le regole sull’uso di servizi cloud e la preferenza per servizi qualificati quando trattano dati dell’amministrazione.

Si sorveglia l’identità. L’ingresso di amministrazione del cloud va protetto con autenticazione a più fattori, permessi minimi e tracciamento. Molti incidenti di cloud non bucano l’hypervisor: usano una chiave lecita troppo potente, pubblicata per errore in un archivio di codice.


### Nel dettaglio

I vantaggi si scrivono come effetti, non come aggettivi. Elasticità: si aggiunge capacità in ore invece che in mesi di gara per il ferro. Costo variabile: un ambiente di prova si spegne, e spento costa poco o nulla. Conduzione di ciò che si è delegato: il fornitore sostituisce il disco, presidia la sala, spesso offre zone già ridondate. Velocità di prova: si può sperimentare un servizio senza comprare un rack. Questi effetti valgono se l’ente sa spegnere ciò che non usa. Un ambiente dimenticato acceso costa ogni mese, e il vantaggio si inverte.

I rischi sono operativi prima che filosofici. Un dato nel posto sbagliato, copiato in una regione non prevista. Un’identità troppo potente: una chiave di amministrazione sul portatile di un fornitore esterno. Una configurazione aperta, perché il default di una rete nuova è spesso più permissivo di quanto si creda. La dipendenza dalla rete: la sala dell’ente può essere sana e il servizio irraggiungibile se il collegamento cade. La perdita di competenza: se nessuno interno sa più come è fatto il sistema, un incidente si gestisce solo aprendo un ticket, e l’RTO diventa il tempo di risposta del fornitore.

Il lock-in è il costo di uscire. Un disco virtuale standard si copia altrove con relativa facilità. Un servizio proprietario, che tiene i dati in una forma sua e li espone solo tramite le sue API, si lascia riscrivendo l’applicazione. Più si sale verso il PaaS e il SaaS, più si guadagna in conduzione e più si paga in uscita. La contromisura si decide all’ingresso: dati esportabili in un formato documentato, uso misurato delle funzioni che non esistono altrove, e una prova vera di export, non la clausola del contratto letta una volta. Sul foglio, accanto a ogni vantaggio, si scrive il rischio gemello e la misura: elasticità con un tetto di spesa, delega con un contratto che dice i tempi, servizio gestito con un export provato.

### Esempio

Un ente sposta l’archivio di consultazione pubblica su un servizio a oggetti e tiene l’applicazione di protocollo, con i suoi vincoli, su infrastruttura qualificata. I backup del protocollo sono scaricati anche in una copia sotto il controllo dell’ente. Il contratto dice come si esportano i dati e in quanto tempo. L’account di amministrazione è nominativo, non una casella condivisa «cloudadmin» con la password nel cassetto.

### In sede di prova

Bilanciare. Due vantaggi concreti, due rischi concreti, una contromisura. Lock-in, responsabilità sui dati e protezione degli account di controllo sono i tre rischi che distinguono una risposta matura da un dépliant.

### Errori da evitare

- Presentare il cloud solo come risparmio. A volte costa di più e compra velocità e impianti.
- Presentarlo solo come pericolo, senza dire quale problema risolve.
- Dimenticare le chiavi e gli account, che sono il vero perimetro.

### Approfondire

- [AgID, cloud della PA](https://www.agid.gov.it/it/infrastrutture/cloud-pa)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Come si protegge un ambiente cloud da accessi non autorizzati

**Prove:** seconda prova gruppo 1, orale
**Tag:** IAM, MFA, segmentazione, cifratura
**Semaforo:** giallo

### Inquadramento

Nel cloud l'identità sostituisce il perimetro. Chi entra, con quale ruolo, su quale risorsa, va detto in modo esplicito, e il permesso predefinito è nessuno. Le chiavi degli amministratori non stanno nel codice. I registri di chi ha letto che cosa si conservano dove l'applicazione non li cancella. Sul foglio si descrive un accesso di un amministratore: secondo fattore, ruolo minimo, scadenza. Si richiama la responsabilità condivisa: il fornitore protegge la piattaforma, l'ente protegge gli account e i dati.

### Definizione

Proteggere un ambiente cloud significa controllare chi può entrare nel piano di gestione e nei dati, limitare che cosa ciascun soggetto può fare, cifrare i dati, segmentare la rete e accorgersi degli usi anomali. Le misure sono le stesse della sicurezza classica, applicate a risorse che si creano via software.

### Le misure, in un ordine che si può riscrivere

L’identità è il perimetro. Ogni amministratore ha un account nominativo. L’autenticazione a più fattori è obbligatoria per gli account privilegiati. Non esistono password condivise della «casella cloud». Le chiavi tecniche, usate dalle applicazioni, sono distinte dalle persone, hanno permessi stretti e si ruotano. Un amministratore non usa l’account potente per il lavoro quotidiano: ha un’utenza ordinaria e un’utenza elevata, oppure un meccanismo di elevazione temporanea.

I permessi seguono il minimo privilegio. Un gruppo che deve solo leggere i backup non può creare macchine né cancellare dischi. I ruoli sono rivisti quando le persone cambiano ufficio. Il fornitore offre un registro delle chiamate di amministrazione: va raccolto e conservato, perché è l’audit di chi ha spento una macchina o ha cambiato un permesso.

La rete virtuale imita la segmentazione fisica. Sottoreti distinte per presentazione, applicazione e dati. Regole che lasciano passare solo le porte necessarie. Il database non ha un indirizzo pubblico. L’accesso di amministrazione avviene da una rete nota o da una VPN, non da un qualsiasi punto di Internet. I gruppi di sicurezza vanno scritti per divieto predefinito e aperture esplicite.

I dati sono cifrati in transito, con TLS, e a riposo, con chiavi di cui si sa chi è il custode. Se le chiavi stanno solo presso il fornitore, va accettato in modo esplicito. Se l’ente gestisce le chiavi, deve anche saperle proteggere e recuperare: una chiave persa è un dato perso.

Le immagini e le configurazioni sono aggiornate. Un vantaggio del cloud è ricostruire un server da un modello aggiornato invece di rattoppare per anni la stessa macchina. Le console di amministrazione vanno raggiunte con cautela e i servizi inutili spenti: un disco reso pubblico per errore è un incidente frequente, ed è un errore di configurazione, non un attacco sofisticato.

Il monitoraggio avvisa su accessi privilegiati, creazioni di risorse, aperture di rete verso il mondo e tentativi falliti. L’avviso senza una persona che lo legge non è un controllo.


### Nel dettaglio

L’identità è il perimetro, più della rete. Nel cloud un indirizzo può cambiare e una macchina nuova nasce in minuti: fidarsi della rete «interna» come ci si fidava della sala è il modo in cui una macchina di prova, aperta, diventa una porta. Ogni persona e ogni servizio hanno un’identità. Le persone dell’ente entrano con l’identità dell’ente, non con un utente creato nel pannello del fornitore e una password in un foglio. Il secondo fattore sta sull’amministrazione, senza eccezioni per la fretta. Le chiavi dei servizi non stanno nel codice e non stanno nel repository: stanno in un deposito di segreti, e la macchina le riceve all’avvio.

Il privilegio si dà per compito e si toglie. Amministrare l’infrastruttura, amministrare l’applicazione e leggere i dati sono tre ruoli. La stessa persona può averli in momenti diversi, non tutti insieme per sempre. Un ruolo di amministrazione usato ogni giorno per il lavoro ordinario finisce per fare un danno ordinario con potenza da disastro. Le chiavi di servizio hanno il minimo: il nodo applicativo legge il suo database e non può cancellare l’intero progetto. Si registrano gli accessi di amministrazione e si rileggono, almeno a campione e dopo un allarme.

La rete chiude ciò che l’identità da sola non chiude. I nodi non hanno indirizzo pubblico se non devono. Il database non ha una porta verso Internet, mai, neanche «per un’ora, per una verifica». L’amministrazione passa da un canale ristretto, una rete privata o un bastion, non da una porta aperta sul mondo. I gruppi di sicurezza nominano chi può parlare con chi: il nodo applicativo verso la porta del database, e nient’altro. Una regola «tutto verso tutto» dentro il progetto è una sala senza porte.

Le copie e i log fanno parte della protezione. Un attaccante con un’identità rubata cancella anche i backup se quei backup sono scrivibili con la stessa identità. Una copia immutabile, e un registro di audit che l’amministratore ordinario non può alterare, sono le due misure che restano quando le credenziali sono già perse. Sul foglio si scrivono quattro controlli: identità dell’ente con secondo fattore, ruoli separati, database senza indirizzo pubblico, copia che l’amministratore del servizio non può cifrare.

### Esempio

L’ambiente dell’applicazione documentale ha tre sottoreti. Solo il reverse proxy è raggiungibile da Internet, e soltanto sulla porta HTTPS. Gli amministratori entrano con MFA da una VPN. Il database è cifrato a riposo. Un allarme parte se qualcuno assegna a un disco la lettura anonima. I log di amministrazione sono conservati in un account separato, così chi compromette l’applicazione non cancella anche le tracce.

### In sede di prova

Organizzare la risposta in identità, permessi, rete, cifratura, configurazione e monitoraggio. Sottolineare che la responsabilità di questi punti, nello IaaS, è del cliente. Citare un errore tipico, il deposito dati reso pubblico, per mostrare che si conosce la differenza fra un attacco e una configurazione sbagliata.

### Errori da evitare

- Rispondere solo «mettiamo un firewall».
- Lasciare un account di root condiviso come misura temporanea diventata definitiva.
- Cifrare i dischi e poi lasciare le chiavi nello stesso archivio, sullo stesso account, senza controllo.

### Approfondire

- [Microsoft Learn, responsabilità condivisa](https://learn.microsoft.com/it-it/azure/security/fundamentals/shared-responsibility)
- [Agenzia per la cybersicurezza nazionale](https://www.acn.gov.it/)

## Migrazione di un sistema verso il cloud

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** rehost, replatform, refactor
**Semaforo:** giallo

### Inquadramento

Migrare è spostare un sistema che già funziona, non ricomprarlo con un nome nuovo. Si può trasferire così com'è, adattarlo, sostituirlo con un servizio, oppure lasciarlo dov'è. Sul foglio si sceglie una via per un solo sistema e si dice che cosa si prova prima del passaggio: un ripristino, un confronto dei risultati, un modo di tornare indietro. La finestra di fermo e il destino delle copie vecchie fanno parte della risposta. Un passaggio senza ritorno è un progetto incompleto.

### Definizione

Migrare verso il cloud significa spostare un’applicazione, i suoi dati e il suo esercizio da un ambiente attuale, di solito una sala dell’ente, a un servizio cloud, senza perdere funzionalità né sottovalutare il passaggio.

### Tre strategie, dalla più prudente alla più invasiva

Il rehosting, detto anche lift and shift, sposta la macchina così com’è su una macchina virtuale del fornitore. Cambia poco il software. Si guadagna in fretta l’uscita dalla sala, e si portano nel cloud anche i difetti dell’applicazione. È adatto quando l’obiettivo è chiudere un impianto o ottenere un sito più robusto, e il software non va riscritto.

Il replatforming cambia alcuni pezzi per usare servizi gestiti, senza riscrivere la logica. Il database autogestito diventa un database gestito. I backup li offre la piattaforma, con l’ente che deve comunque provarli. È un compromesso frequente.

Il refactoring riprogetta l’applicazione per l’ambiente nuovo: servizi separati, scalabilità orizzontale, configurazione esterna. Costa di più e si giustifica se l’applicazione deve cambiare comunque, o se tenerla identica impedisce di ottenere i benefici per cui si è scelto il cloud.

Prima del gesto tecnico viene l’inventario. Quali applicazioni, quali dipendenze, quali dati e di che natura, quali integrazioni, quali finestre di fermo tollerate. Un sistema che di notte scambia file con un altro ufficio va migrato insieme al flusso, non solo insieme al server. Si prova la migrazione su una copia. Si stabilisce come si torna indietro se il fine settimana del passaggio fallisce. Il ritorno indietro è parte del piano, non una sconfitta.

I dati si spostano con un controllo di completezza: conteggi, hash, prova di un utente reale su una lista di casi d’uso. Gli indirizzi e i certificati cambiano in modo coordinato, altrimenti gli utenti arrivano ancora al vecchio server. Dopo il passaggio si osserva il sistema per giorni, con la possibilità di correggere, e solo allora si spegne l’origine.


### Nel dettaglio

Si migra un servizio alla volta, e si comincia da quello di cui si conoscono dipendenze e dati, non dal più importante. Il primo passo è l’inventario vero: chi chiama il sistema, quali file usa, quali orari ha, quale dato è personale, quale integrazione si rompe se cambia l’indirizzo. Un sistema «semplice» con una condivisione di rete usata da un ufficio a mano è un sistema con una dipendenza nascosta. Quella dipendenza, scoperta il lunedì dopo il trasloco, è il fermo.

Le tre strategie si distinguono per quanto si tocca. Il rehosting sposta la macchina quasi com’è, da fisico a virtuale o da una sala al fornitore. Cambia poco il software. Si guadagna la sala del fornitore e si portano dietro i difetti: sistema vecchio, backup artigianale, permessi larghi. È la mossa giusta per uscire da uno stanzino in fretta, e va accompagnata da una data in cui quei difetti si chiudono. Il replatforming tiene l’applicazione e cambia un pezzo di piattaforma: il database diventa un servizio gestito, i file diventano un oggetto, il sistema viene aggiornato. Si toccano configurazioni e si riprovano le funzioni. Il refactoring riscrive per usare la piattaforma: più lungo, si giustifica se il sistema deve vivere anni e la forma attuale non è manutenibile.

Il taglio si fa con un ritorno possibile. Si copiano i dati, si prova nel nuovo sito con utenti veri in numero piccolo, si confrontano i risultati, si sposta il nome. Per un periodo il vecchio resta spento ma integro, non cancellato. Se il nuovo fallisce, il nome torna indietro. Cancellare il vecchio il venerdì sera è il modo di restare senza né l’uno né l’altro. I dati si verificano nel numero: conteggi di righe, somme, un campione di pratiche aperte e chiuse.

Si scrive anche che cosa non si migra. Un sistema che nessuno sa più modificare, con dati che non possono uscire, può restare dov’è, isolato, mentre il resto si sposta. Dirlo è una scelta di progetto, non una sconfitta. Sul foglio: inventario, strategia scelta e perché, prova con utenti, vecchio tenuto fino a verifica, data di spegnimento.

### Esempio

L’ente vuole chiudere una sala ormai inadeguata. Il portale informativo, senza dati particolari, fa un rehosting in un fine settimana, con il DNS che punta al nuovo indirizzo solo dopo la prova. L’applicazione dei fascicoli, più delicata, resta dov’è fino a una seconda fase, perché il suo database ha integrazioni non ancora provate. Migrare tutto in un unico gesto, per simmetria, sarebbe più rischioso che utile.

### In sede di prova

Nominare le tre strategie e dire che la meno dirompente non è sempre la migliore, né la più dirompente è sempre necessaria. Insistere su inventario, prova, criterio di successo e piano di ritorno. In un progetto nuovo, nato già sul cloud, questa voce serve comunque: spiega perché un sistema esistente non si «sposta» con un interruttore.

### Errori da evitare

- Trattare la migrazione come una copia di file.
- Spegnere il sistema vecchio il giorno stesso, senza una misura di successo.
- Dimenticare DNS, certificati, identità e i flussi con gli altri sistemi.

### Approfondire

- [Microsoft Learn, strategie di migrazione](https://learn.microsoft.com/it-it/azure/cloud-adoption-framework/migrate/azure-best-practices/)

## Disponibilità in cloud: regioni, zone e progettazione minima

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** regione, availability zone, progettazione
**Semaforo:** giallo

### Inquadramento

Una regione è un'area geografica. Una zona è un data center distinto dentro la regione, con energia e rete proprie. Mettere due copie nella stessa zona non regge il guasto di quella zona. Sul foglio si dichiara quante zone servono all'RTO scelto, e si ricorda che i dati della pubblica amministrazione hanno anche un vincolo di luogo. Due zone in un paese che il vincolo non consente non sono una soluzione. La copia immutabile resta necessaria anche con le zone.

### Definizione

I grandi fornitori organizzano il cloud in regioni geografiche e, dentro una regione, in zone di disponibilità: gruppi di data center distinti, con energia e rete indipendenti, collegati fra loro da reti a bassa latenza. Progettare la disponibilità significa decidere in quante di queste aree deve sopravvivere il servizio.

### Come usarle senza trasformare il tema in un catalogo

Una macchina sola, in una zona sola, ha la stessa logica di un server solo in una sala: comoda, ed è un singolo punto di guasto. Due macchine in due zone, dietro un bilanciatore, reggono il guasto di una zona. Il database è il pezzo che va detto con cura. Una replica sincrona in un’altra zona riduce la perdita di dati e aggiunge un po’ di latenza in scrittura. Una replica asincrona in un’altra regione regge anche la perdita dell’intera regione, con un RPO pari al ritardo della replica.

Moltiplicare le regioni moltiplica i costi e la complessità: identità, dati, prove di passaggio, indirizzi. Per un’applicazione di un ente, una scelta difendibile e spiegabile è spesso: servizio su due zone della stessa regione, backup immutabile anche fuori da quella regione, procedura di ripristino provata. Si sale di livello solo se l’RTO dichiarato non si ottiene altrimenti.

La regione non è un dettaglio amministrativo. Influenza la latenza per gli utenti e la giurisdizione dei dati. In un elaborato per un soggetto pubblico si preferisce una regione e un contratto coerenti con i vincoli dell’amministrazione, e lo si scrive.


### Nel dettaglio

La regione è un’area geografica del fornitore, un gruppo di siti distanti abbastanza da non condividere un singolo guasto di edificio, e abbastanza vicini da avere latenze basse fra loro. La zona di disponibilità è un sito distinto dentro la regione: energia e rete proprie, così un guasto di zona non spegne le altre. Mettere due nodi nella stessa zona, sullo stesso rack logico, è il rack unico tradotto nel vocabolario del cloud. Metterli in due zone è il minimo se si è promesso che un guasto di sito non ferma il servizio.

Il disegno minimo per un’applicazione a tre livelli, senza inseguire l’architettura da congresso, è questo. Nodi applicativi in almeno due zone, dietro un bilanciatore che toglie la zona malata. Database con un primario in una zona e un secondario in un’altra, replica sincrona se l’RPO è zero, asincrona se si accetta una perdita breve in cambio di latenza minore. I backup in un deposito che sopravvive anche se le due zone hanno un problema logico, per esempio un cancellazione: quindi un’altra regione, oppure un blocco immutabile. La seconda regione intera, con il servizio già caldo, si paga e si giustifica solo con un RTO di minuti e un rischio di perdita dell’intera regione.

La latenza fra zone è bassa, millisecondi, e l’applicazione la regge se non fa cento chiamate in serie per una pagina. La latenza fra regioni è quella geografica, e un database sincrono fra regioni lontane rallenta ogni scrittura. Per questo il primario e il suo secondario stretto stanno in zone della stessa regione, e l’altra regione riceve una copia asincrona per il disastro vero.

Il fallimento parziale va ammesso. Una zona può sparire e l’applicazione deve avviarsi lo stesso, con i nodi rimasti. Se la configurazione assume che un certo disco di una certa zona ci sia sempre, l’avvio muore insieme alla zona. Si prova spegnendo una zona in un ambiente di prova. Sul foglio si nominano le due zone, dove sta il primario, dove sta la copia di disastro, e quale guasto si è deciso di non coprire.

### Esempio

L’applicazione di prenotazione sale gira su due nodi in due zone. Il database ha il primario in una zona e una replica sincrona nell’altra. Ogni notte una copia di backup è scritta su un servizio di un’altra regione, immutabile per trenta giorni. Perdere una zona non impedisce le prenotazioni. Perdere i dati per un ransomware richiede il restore dalla copia immutabile, con un RTO più lungo, dichiarato nel piano.

### In sede di prova

Mostrare di conoscere zona e regione come domini di guasto diversi. Proporre un disegno minimo e dire che cosa non copre. È meglio un disegno piccolo e onesto di una frase del tipo «multi-region active-active» che non si saprebbe spiegare a voce.

### Errori da evitare

- Dire «siamo su due zone, quindi non ci serve il backup».
- Scegliere una regione a caso, senza una parola su latenza e dati.
- Descrivere l’alta disponibilità solo sullo strato web.

### Approfondire

- [Regioni e zone di disponibilità](https://learn.microsoft.com/it-it/azure/reliability/regions-overview)

## Funzioni serverless, e che cosa resta in carico all'ente

**Prove:** seconda prova gruppo 1
**Tag:** serverless, funzioni, responsabilità
**Semaforo:** giallo

### Inquadramento

Serverless vuol dire che l'ente non amministra la macchina, non che il server non esista. La funzione parte su un evento e non tiene stato fra una chiamata e l'altra. Restano in carico all'ente il codice, i permessi, i dati e il modo in cui la funzione sbaglia. Sul foglio la si accetta per un avviso o una miniatura, e la si rifiuta per la transazione centrale, quella della presa in carico o della sala, perché lì servono un database e un esito unico. Si nomina l'avvio a freddo se il requisito di tempo vale anche per la prima richiesta del mattino.

### Definizione

Un servizio serverless esegue una funzione quando arriva un evento, senza che l'ente amministri la macchina virtuale sotto. Si paga l'uso, la capacità segue il carico, e il sistema operativo della macchina non compare nel lavoro quotidiano. Non significa che non ci sia un server. Significa che lo gestisce il fornitore. La responsabilità dell'ente non scompare: restano il codice, i dati, l'identità, i permessi e il modo in cui la funzione sbaglia.

### Quando ha senso, e quando no

Ha senso per un compito breve, innescato da un evento, che non tiene uno stato proprio fra una chiamata e l'altra. Ridimensionare un'immagine caricata. Inviare una notifica. Validare un file. Il fornitore avvia la capacità quando serve e la ritira dopo.

Ha senso poco per il cuore di un'applicazione gestionale. Una transazione che aggiorna richieste, commenti e storico vuole un database e un processo che restano, non una funzione che nasce e muore. I collegamenti a un database relazionale, aperti a ogni chiamata, si esauriscono proprio quando il carico sale. L'avvio a freddo, il tempo per preparare la funzione rimasta inattiva, peggiora la prima richiesta dopo una pausa: fastidioso se il requisito è «entro tre secondi anche la prima della mattina».

Il codice è comunque nostro. Una funzione può leggere più dati del necessario, registrare di meno, o chiamare un altro servizio con un permesso troppo largo. Il modello di responsabilità del cloud non si inverte: sotto una certa linea il fornitore protegge la piattaforma, sopra la linea l'ente protegge ciò che ha scritto e i dati che ha messo. In una pubblica amministrazione si aggiunge il vincolo del servizio qualificato e del luogo dei dati. «Serverless» non è un'autorizzazione a usare un account qualsiasi.

Il costo va detto. A basso traffico può costare meno di una macchina sempre accesa. A traffico costante e alto, una macchina dimensionata costa meno e si prevede meglio. La scelta si motiva con il profilo del carico, non con la novità del nome.

```disegno
titolo: Che cosa amministra l'ente anche senza la macchina
riga: Evento | una richiesta, un file, un orario
freccia: il fornitore avvia la funzione
riga: Codice nostro | permessi | dati | registri
nota: La macchina sotto non si vede. L'errore nel codice e il dato nel posto sbagliato restano nostri.
```


### Nel dettaglio

Una funzione è un pezzo di codice che il fornitore esegue quando arriva un evento: una richiesta, un file depositato, un orario. L’ente non prepara la macchina, non la accende, non la patcha. Paga le esecuzioni. La funzione nasce, risponde, e può sparire. Non tiene dati suoi fra una chiamata e la successiva: lo stato sta in un database o in un deposito, esattamente come in un nodo senza stato. Se la funzione scrive su un disco locale, quella scrittura la volta dopo non c’è.

Ha senso per carichi irregolari e per compiti corti. Una trasformazione di un file al momento del deposito. Una verifica notturna. Un’integrazione che scatta poche volte al giorno. Non è la forma naturale di un portale con sessioni, regole lunghe e connessioni tenute aperte al database: si può fare, e si finisce per ricostruire a mano ciò che un server applicativo dà già, pagando le invocazioni e inseguendo i limiti di tempo massimo. Il limite di durata, di memoria e di dipendenze va letto prima di scegliere. Un’elaborazione che può durare dieci minuti non entra in una funzione che il fornitore interrompe al minuto.

Resta in carico all’ente tutto ciò che è decisione e dato. Il codice e i suoi difetti. I permessi: la funzione ha un’identità, e quell’identità deve poter fare solo l’operazione prevista. Un ruolo troppo largo, copiato da un esempio, permette alla funzione di leggere ogni deposito del progetto. I segreti, presi da un deposito e non scritti nel codice. I dati, che stanno in servizi soggetti alle stesse regole di luogo e di copia. Il costo, perché un ciclo impazzito può invocare la funzione un numero enorme di volte. Il monitoraggio: il fornitore accende la macchina, ma l’ente deve accorgersi che la funzione risponde errore.

Sul foglio, se si usa, si usa per un pezzo solo e si dice l’evento che la sveglia, dove sta lo stato, e quale identità ha. Il resto dell’applicazione può restare su nodi normali. Obbligarsi a scrivere tutto il sistema a funzioni è una scelta di stile, non un requisito di un ente.

### Esempio

Nel portale di assistenza la presa in carico resta nell'applicazione e nel database, dentro una transazione. Una funzione a parte può, all'arrivo di una richiesta, avvisare il gruppo competente. Se l'avviso fallisce, la richiesta esiste lo stesso. Se si mettesse la presa in carico nella funzione, due esecuzioni parallele e un avvio lento renderebbero più difficile il vincolo «una sola presa in carico», che nel database si esprime in una riga.

### In sede di prova

Definire serverless come esecuzione a evento senza amministrare la macchina, non come assenza di server. Dire che restano codice, dati e identità. Accettarlo per un compito laterale e breve. Rifiutarlo per la transazione centrale, con il motivo. Citare la qualificazione del servizio se i dati sono dell'ente.

### Errori da evitare

- «Serverless, quindi non c'è niente da proteggere.»
- Usarlo per un dialogo lungo con un utente, tenendo lo stato dentro la funzione.
- Dimenticare l'avvio a freddo quando il requisito di tempo riguarda anche la prima richiesta.

### Approfondire

- [Serverless](https://it.wikipedia.org/wiki/Serverless)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Cloud della pubblica amministrazione](https://www.agid.gov.it/it/infrastrutture/cloud-pa)

## Orchestrare i container

**Prove:** seconda prova gruppo 1
**Tag:** orchestrazione, stato desiderato, container
**Semaforo:** giallo

### Inquadramento

L'orchestrazione mantiene il numero di copie che si è dichiarato: se una manca, ne riaccende un'altra su un nodo sano. Non è un sinonimo di container e non è un backup. Sul foglio si scrive lo stato desiderato in una riga, due copie del nodo applicativo su due host, e si dice dove stanno i dati e i segreti. Per un ente piccolo, due macchine virtuali dietro un bilanciatore possono bastare: si scrive anche il rifiuto, se la piattaforma da esercire sarebbe più grande del sistema.

### Definizione

Un container impacchetta un'applicazione con le sue librerie, così parte uguale in più ambienti, e condivide il nucleo del sistema che lo ospita. L'orchestrazione è il sistema che decide su quali macchine far girare quei container, li riavvia se muoiono, li collega in rete e sostituisce una versione con la successiva. Non è un sinonimo di container. Senza orchestrazione i container si avviano a mano, uno per uno, e il guasto di una macchina è un intervento notturno.

### Lo stato desiderato

Si dichiara che cosa si vuole: due copie del nodo applicativo, una rete fra loro e il database, una quantità di memoria. L'orchestratore confronta ciò che ha dichiarato con ciò che vede. Se una copia manca, ne avvia un'altra, su un nodo ancora sano. Questo è il punto da scrivere in un tema. Il nome del prodotto, se non lo si conosce da dentro, si può omettere. La funzione no.

Il rilascio diventa la sostituzione graduale delle copie: ne parte una nuova, risponde alla prova di vita, poi si spegne una vecchia. Se la nuova non risponde, si torna indietro. È lo stesso ragionamento del bilanciamento, applicato agli aggiornamenti.

Ciò che l'orchestratore non fa va detto con la stessa chiarezza. Non è il backup dei dati. Un container che non conserva stato si può rifare. Il database no. Non sostituisce la segmentazione: le regole di rete fra i container vanno scritte, altrimenti qualunque container parla con qualunque altro. Non mette le password nell'immagine. I segreti stanno in un deposito, e l'immagine si ricostruisce senza di essi. Non rende inutile la sonda di vita: se l'applicazione è in piedi ma non risponde, va tolta dal servizio.

Per un ente piccolo, due macchine virtuali dietro un bilanciatore possono bastare e si spiegano in meno righe. L'orchestrazione si sceglie quando le componenti sono molte, i rilasci sono frequenti e si vuole che il guasto di un nodo sia un fatto automatico. Si rifiuta quando aggiungerebbe una piattaforma che nessuno sa esercire. La piattaforma diventa essa stessa un sistema da aggiornare, da proteggere e da ripristinare.

```disegno
titolo: Dichiaro due copie, il sistema le mantiene
riga: Stato desiderato | due copie del nodo, memoria, rete
freccia: confronta con ciò che è in esecuzione
riga: Nodo A, copia 1 | Nodo B, copia 2
freccia: se il nodo A cade, la copia rinasce sul nodo B
riga: Il database non è un container da rifare | ha le sue copie
nota: L'immagine non contiene password. I dati non stanno nel container.
```


### Nel dettaglio

Orchestrare significa dichiarare lo stato desiderato e avere un controllore che lo insegue. Si scrive: di questa applicazione voglio tre copie, su nodi diversi, con questo tetto di memoria, dietro questo nome, con questo volume per i dati. Il controllore, Kubernetes è il nome che in prova si può citare, confronta ciò che è scritto con ciò che gira. Se una copia muore, ne avvia un’altra. Se un nodo sparisce, le copie che ci stavano vengono riprogrammate altrove. Non si entra in un server a riavviare a mano, perché la mano e il controllore litigherebbero.

I pezzi da saper dire sono pochi. Il pod è la unità che gira, uno o più container sempre insieme. Il deployment dichiara quante copie e di quale immagine. Il service è il nome stabile: le copie cambiano indirizzo, il nome no, e il traffico va alle copie sane. Il volume è il dato che sopravvive al pod. La configurazione e i segreti stanno fuori dall’immagine, così la stessa immagine gira in prova e in esercizio con parametri diversi. L’immagine si identifica con un numero di versione, non con la parola «ultima», perché «ultima» domani è un’altra e non si sa che cosa gira.

I limiti fanno parte della dichiarazione. Senza un tetto di memoria, un container con una perdita si mangia il nodo e, con il nodo, i vicini. Senza un numero di copie su nodi diversi, il controllore può mettere le tre copie sullo stesso nodo, e quel nodo diventa il punto unico. Le sonde di vita dicono al controllore quando riavviare: una sonda che controlla solo che il processo esista tiene in vita un’applicazione bloccata. Una sonda che controlla se l’applicazione risponde davvero permette di sostituirla.

Lo stato desiderato non è un backup. Se si dichiara zero copie, il controllore obbedisce e spegne il servizio. Se un’immagine è sbagliata, la distribuisce con diligenza. I dati sui volumi si copiano come ogni dato. Sul foglio: tre copie su nodi diversi, un nome stabile, i dati su un volume, l’immagine versionata, un tetto di risorse. E la frase: il controllore mantiene ciò che è scritto, quindi ciò che è scritto si rivede come si rivede un programma.

### Esempio

Il portale di assistenza ha due copie senza stato, la sessione in un deposito condiviso e il database fuori. L'orchestratore tiene le due copie su due host diversi. Un aggiornamento sostituisce prima una copia. La presa in carico continua sull'altra. Se si orchestrasse anche il database come un container qualunque, senza volumi e senza backup, il primo rinnascio dell'immagine porterebbe via i dati. Il database resta un servizio con il proprio ciclo di copie.

### In sede di prova

Distinguere container e orchestrazione. Spiegare lo stato desiderato con la frase «se ne manca una, ne riaccende un'altra». Dire dove stanno i dati e i segreti. Sceglierla solo se il numero di componenti la paga. Altrimenti due macchine virtuali sono una risposta più credibile.

### Errori da evitare

- Credere che il container sia un backup.
- Mettere la password nell'immagine.
- Introdurre l'orchestrazione per una sola applicazione che due processi identici già reggono.

### Approfondire

- [Virtualizzazione a livello di sistema operativo](https://it.wikipedia.org/wiki/Virtualizzazione_a_livello_di_sistema_operativo)
- [Docker](https://it.wikipedia.org/wiki/Docker)
- [Kubernetes](https://it.wikipedia.org/wiki/Kubernetes)

## Sovra-allocare CPU e RAM, e quando si paga

**Prove:** seconda prova gruppo 1, orale
**Tag:** overcommit, hypervisor, RAM
**Semaforo:** giallo

### Inquadramento

La domanda chiede se si possono promettere ai sistemi ospiti più risorse di quelle fisiche. Si distingue il caso in cui funziona da quello in cui tutti chiedono il dovuto insieme.

### Definizione

Il sovra-allocamento assegna alle macchine virtuali, sommate, più processore o più RAM di quanti il nodo abbia. Funziona finché gli ospiti non usano insieme ciò che è stato promesso. Quando lo fanno, il nodo satura e tutti rallentano.

### Nel dettaglio

Sulla CPU è pratica comune. Dieci macchine con due processori virtuali su un nodo con otto core stanno ferme quasi sempre, e il processore basta. Il rapporto si sceglie basso per i servizi che contano, più alto per i laboratori. Non esiste un numero magico: si misura il pronto della CPU, cioè quanto un ospite aspetta prima di essere eseguito. Se l'attesa cresce, si è oltre.

Sulla RAM il gioco è più pericoloso. Memoria promessa e non usata si può tenere da parte. Se la somma usata supera la RAM fisica, l'hypervisor sposta pagine su disco o le toglie agli ospiti. È il thrashing, spostato di un piano. Le macchine di un ente, che di giorno lavorano insieme, non sono ospiti oziosi di un laboratorio. Per i nodi di produzione si alloca RAM che esiste, con un margine, e si lascia il sovra-allocamento ai servizi che possono rallentare.

Si scrive il rapporto nel dimensionamento. «Sedici core fisici, venti virtuali impegnati a regime, non di più.» Un progetto che mette quaranta core virtuali di un database su otto core fisici ha già deciso il rallentamento.

### Esempio

Il nodo di esercizio ha sessantaquattro gigabyte. Le macchine di produzione ne hanno assegnati cinquantadue, il resto è margine e hypervisor. Le macchine di prova stanno su un altro nodo, sovra-allocato, e possono essere lente. Nessuna prova gira sul nodo di esercizio.

### In sede di prova

Distinguere CPU e RAM, dire che il picco contemporaneo è il limite, misurare l'attesa, non sovra-allocare la RAM del servizio che non può rallentare.

### Errori da evitare

- Sommare la RAM virtuale oltre la fisica sui nodi dello sportello.
- Prendere il rapporto di un laboratorio e usarlo in esercizio.
- Non misurare l'attesa e scoprire il limite il giorno del picco.

### Approfondire

- [Hypervisor](https://it.wikipedia.org/wiki/Hypervisor)
- [Memoria virtuale](https://it.wikipedia.org/wiki/Memoria_virtuale)

## Spostare una macchina accesa su un altro nodo

**Prove:** seconda prova gruppo 1, orale
**Tag:** migrazione, hypervisor, manutenzione
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si manutenga un nodo senza spegnere il servizio. Si descrive lo spostamento a caldo e le condizioni senza le quali non parte.

### Definizione

La migrazione a caldo copia la memoria di una macchina virtuale su un altro nodo e, in un istante breve, sposta l'esecuzione. L'indirizzo di rete resta. Il disco deve essere visibile a entrambi i nodi, oppure va copiato anche quello, e allora l'operazione dura molto di più.

### Nel dettaglio

Le condizioni sono precise. Stesso storage condiviso, oppure una copia dei dischi che tenga il ritmo delle scritture. Processori compatibili, altrimenti la macchina ripresa sull'altro nodo esegue istruzioni che lì non ci sono. Rete fra i nodi capace di copiare la RAM in un tempo ragionevole: sessantaquattro gigabyte su un collegamento da un gigabit sono minuti lunghi, e nel frattempo la memoria cambia e va ricopiata. Se la macchina scrive più veloce di quanto la rete copi, la migrazione non converge.

Il buco percepito è di una frazione di secondo, se tutto va bene, abbastanza corto perché le sessioni TCP non cadano. Non è zero, e una transazione in corso nel database, se la macchina migrata è il database, va capita: di solito regge, e si prova. La migrazione non è un backup e non è una replica geografica. I due nodi sono nella stessa sala, sullo stesso storage. Un guasto dello storage li ferma entrambi.

Si usa per svuotare un nodo prima di una patch del firmware o dell'hypervisor. Si migrano le macchine, si lavora sul nodo vuoto, si rimettono. Una alla volta, non tutte insieme sulla stessa tratta di rete.

### Esempio

Prima della patch dell'hypervisor si spostano le otto macchine sul nodo gemello, di sera, una alla volta. Lo sportello non chiude. Il nodo vuoto si aggiorna e si riavvia. Le macchine tornano il giorno dopo, ancora una alla volta.

### In sede di prova

Che cosa si copia, storage condiviso, CPU compatibili, rete dimensionata, buco breve, non è un disaster recovery.

### Errori da evitare

- Promettere lo spostamento a caldo fra due sale senza una rete e uno storage che lo reggano.
- Trattarlo come backup.
- Migrare insieme tutte le macchine e saturare la rete di servizio.

### Approfondire

- [Migrazione a caldo](https://it.wikipedia.org/wiki/Migrazione_(virtualizzazione))
- [Hypervisor](https://it.wikipedia.org/wiki/Hypervisor)

## Snapshot di una macchina virtuale e perché non è il backup

**Prove:** seconda prova gruppo 1, orale
**Tag:** snapshot, macchina virtuale, backup
**Semaforo:** verde

### Inquadramento

La domanda corregge un'abitudine da console: scattare e sentirsi al sicuro. Si dice a che cosa lo snapshot di macchina serve e quanto costa lasciarlo lì.

### Definizione

Lo snapshot di una macchina virtuale congela i dischi e, se si chiede, la memoria, per poter tornare a quello stato. Le scritture successive finiscono in un file di differenze. Sta sullo stesso storage della macchina.

### Nel dettaglio

Serve prima di una modifica rischiosa: si scatta, si aggiorna, se l'aggiornamento rompe l'applicazione si torna indietro in minuti. Finita la verifica, lo snapshot si cancella. Tenerlo per settimane fa crescere il file delle differenze, rallenta la macchina, perché ogni lettura può dover ricostruire la catena, e non protegge dal guasto dello storage. Uno snapshot dimenticato è un incidente annunciato, non una copia.

Non è coerente magicamente con l'applicazione. Come ogni fotografia di disco, può capitare a metà di una scrittura. Per un database si preferisce lo strumento del motore, oppure si ferma la macchina per lo scatto, se si può. Tornare a uno snapshot di tre giorni fa riporta anche i dati a tre giorni fa: le pratiche inserite nel frattempo spariscono. Lo si dice prima di premere il ritorno, e lo si fa su una copia se il dubbio è grande.

Il backup è un'altra operazione: copia fuori dallo storage, generazioni, prova di ripristino. Lo snapshot può essere il modo comodo per ricavare quel backup senza spegnere, e poi si butta. In un tema si nominano entrambi, con i due verbi: scattare prima della patch, copiare ogni notte fuori.

### Esempio

Prima di aggiornare l'applicazione si scatta. L'aggiornamento va male, si torna indietro, lo sportello riparte con i dati del momento dello scatto, venti minuti prima. Poi si cancella lo snapshot. Il backup notturno, su un altro mezzo, non è stato toccato e resta la rete di sicurezza.

### In sede di prova

A che serve, dove sta, perché si cancella, che dato si perde tornando indietro, differenza dal backup.

### Errori da evitare

- Lasciare snapshot a catena per mesi.
- Tornare indietro in produzione senza dire che le pratiche recenti spariscono.
- Contare lo snapshot nel piano di disaster recovery.

### Approfondire

- [Snapshot (informatica)](https://it.wikipedia.org/wiki/Snapshot_(informatica))
- [Macchina virtuale](https://it.wikipedia.org/wiki/Macchina_virtuale)

## Rete virtuale e segmentazione fra macchine dello stesso nodo

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** rete virtuale, segmentazione, VLAN
**Semaforo:** giallo

### Inquadramento

La domanda porta le zone di rete dentro l'hypervisor. Si dice che due macchine sullo stesso nodo non devono parlarsi solo perché condividono il ferro.

### Definizione

La rete virtuale collega le macchine con switch logici, spesso agganciati alle VLAN della rete fisica. Le regole di chi parla con chi si applicano anche al traffico che non esce mai dal nodo, perché resta fra due ospiti.

### Nel dettaglio

Senza una regola, due macchine nello stesso gruppo di porte si vedono direttamente e il firewall fisico, messo più a monte, non le vede. Il database e un'applicazione di prova finiti per errore nello stesso segmento si parlano senza controllo. Si assegnano le reti come in sala: una per i nodi applicativi, una per i dati, una per la gestione, e il traffico fra loro passa da un punto che filtra, sia esso un firewall virtuale o il firewall fisico, se il disegno costringe il traffico a uscire.

Il nome della VLAN si documenta insieme all'indirizzo. Una macchina nuova entra in una rete di approdo senza permessi, finché qualcuno non la assegna. La rete di approdo che invece «per comodità» vede tutto è il buco. Le stesse regole valgono per i container sullo stesso nodo: la rete fra container è rete, e si filtra.

Si disegna nel tema anche se tutto sta su un solo hypervisor di laboratorio. Si scrive: in esercizio queste reti sono VLAN distinte, il database non è raggiungibile dagli utenti, la prova non sta nella rete di esercizio.

### Esempio

Tre reti virtuali: applicazioni, dati, gestione. Fra applicazioni e dati passa solo la porta del DBMS, e la regola sta sul firewall, non sul fatto che «tanto sono virtuali». Una macchina di prova nuova nasce nella rete di approdo e non risolve nemmeno il nome del database di esercizio.

### In sede di prova

Le macchine sullo stesso ferro non sono una zona fidata. Reti distinte, filtraggio del traffico anche interno, rete di approdo senza permessi.

### Errori da evitare

- Fidarsi del firewall di perimetro per il traffico fra due ospiti.
- Mettere prova e produzione nella stessa rete virtuale.
- Dimenticare i container nello stesso ragionamento.

### Approfondire

- [VLAN](https://it.wikipedia.org/wiki/VLAN)
- [Virtualizzazione](https://it.wikipedia.org/wiki/Virtualizzazione)

## Vicini rumorosi e isolamento delle prestazioni

**Prove:** seconda prova gruppo 1, orale
**Tag:** noisy neighbor, multi-tenant, limiti
**Semaforo:** giallo

### Inquadramento

La domanda riguarda il cloud pubblico e anche un cluster interno condiviso. Si spiega come il carico di un altro utente diventa il rallentamento del proprio servizio, e quale limite si contratta.

### Definizione

Il vicino rumoroso è un carico, sullo stesso ferro o sullo stesso storage, che consuma disco, CPU o rete al punto da rallentare gli altri. L'isolamento mette un tetto a ciò che ciascuno può prendere.

### Nel dettaglio

Nel cloud pubblico il ferro è condiviso. Un'istanza economica senza garanzia può essere spostata accanto a un cliente che legge dischi senza sosta, e la latenza del proprio database peggiora senza che il proprio codice sia cambiato. Si riconosce perché il rallentamento non coincide con un proprio picco. Le offerte con risorse dedicate o con un livello di prestazioni garantito costano di più e si giustificano per lo sportello, non per un laboratorio.

Anche in casa il fenomeno c'è. Una macchina di backup che parte a mezzogiorno sullo stesso storage dello sportello è un vicino rumoroso interno. Si separano i carichi: dischi diversi, orari diversi, tetti di operazioni. L'hypervisor può limitare la CPU di una macchina e garantire un minimo a un'altra. Senza questi tetti, la macchina più avida vince.

Nel contratto si chiede che cosa è garantito e che cosa è al massimo. «Fino a mille operazioni» non è «mille operazioni». Per il servizio che ha un tempo di risposta promesso si compra il minimo garantito e si misura. Se la misura sfora e il proprio carico non spiega lo sfioro, si apre il discorso del vicino, con i numeri.

### Esempio

Lo sportello rallenta ogni giorno alle tredici. Non è un picco di utenti. È il job di un altro ufficio sullo stesso storage. Si sposta il job alle venti e si mette un tetto di operazioni. In cloud, lo stesso sintomo si risolve passando il database a un profilo con prestazioni minime garantite.

### In sede di prova

Definire il fenomeno, dirlo anche per la sala propria, tetti e minimi garantiti, misura per non accusare il codice.

### Errori da evitare

- Dare per isolato ciò che è solo condiviso.
- Comprare il profilo più basso per un servizio con tempi promessi.
- Cercare il difetto nell'applicazione senza guardare chi altro usa il disco.

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Virtualizzazione](https://it.wikipedia.org/wiki/Virtualizzazione)

## Scalare da soli e il tetto di spesa

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** autoscaling, costo, tetto
**Semaforo:** giallo

### Inquadramento

La domanda chiede se i nodi possono aumentare da soli quando il carico sale. Si dice la condizione, il ritardo, e il tetto senza il quale un guasto diventa una fattura.

### Definizione

La scalabilità automatica aggiunge o toglie nodi secondo una misura, per esempio la CPU o le richieste in coda. Il servizio cresce nel picco e si riduce dopo. Ogni nodo in più costa, e un errore di misura può farne nascere troppi.

### Nel dettaglio

Funziona se il nodo è senza stato e parte in pochi minuti da un'immagine. Un database non si aggiunge da solo con la stessa leggerezza. Si mette la scalabilità sui nodi applicativi, con un minimo che regge l'orario ordinario e un massimo che protegge la spesa e il database, perché dieci nodi nuovi che aprono dieci pool verso il database lo abbattono. Il massimo è parte del disegno, non un'opzione.

La misura giusta è quella del servizio. Scalare sulla CPU mentre il collo è il database aggiunge nodi inutili. Scalare sulle richieste in attesa ha più senso. Il ritardo c'è: l'immagine si avvia, l'applicazione parte, la sonda diventa verde, e solo allora arriva traffico. Un picco di due minuti può finire prima che il nodo sia pronto. Per quei picchi serve margine già acceso, non solo la regola automatica.

Si prova. Si genera carico in un ambiente di prova e si verifica che i nodi nascano e che, finito il carico, tornino al minimo. Una regola che non toglie i nodi lascia il costo del picco per sempre. L'allarme sul raggiungimento del massimo avvisa che il tetto è diventato il nuovo collo.

### Esempio

Minimo due nodi, massimo sei, misura sulle richieste in attesa. Oltre i sei si degradano le funzioni secondarie e si avvisa, non si apre il portafoglio all'infinito. Il database resta uno, dimensionato per il carico dei sei, non per sessanta.

### In sede di prova

Condizione senza stato, minimo e massimo, misura giusta, ritardo di avvio, prova che i nodi anche diminuiscono.

### Errori da evitare

- Scalare all'infinito senza tetto.
- Scalare la CPU con il collo nel database.
- Dimenticare di scalare verso il basso.

### Approfondire

- [Scalabilità](https://it.wikipedia.org/wiki/Scalabilit%C3%A0)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Dove stanno i dati e come si esce da un fornitore

**Prove:** seconda prova gruppo 1, orale
**Tag:** residenza, lock-in, export
**Semaforo:** verde

### Inquadramento

È la domanda da pubblica amministrazione sul cloud. Si dice in quale territorio stanno i dati, chi può spostarli, e come si riprendono se il contratto finisce.

### Definizione

La residenza è il luogo in cui i dati sono conservati. L'uscita è la possibilità di riprenderli in un formato usabile, in tempi e costi scritti, senza dipendere dalla buona volontà del momento.

### Nel dettaglio

Per un ente il luogo non è un dettaglio commerciale. Dati amministrativi e dati personali stanno dove le regole consentono, spesso nell'Unione europea o in un perimetro più stretto previsto per le amministrazioni. Il contratto dice le regioni e dice se il fornitore può spostare una copia in un altro paese per il proprio supporto. Una copia di assistenza all'estero è uno spostamento, anche se il sito principale è a Roma. Si legge quella riga.

L'uscita si prova all'inizio, quando toglierla costa poco. Si esporta il database in un formato documentato, si scaricano gli allegati, si verifica di saper riaprire altrove. Un servizio che espone i dati solo dalla sua interfaccia, a schermate, non si lascia in tempi umani. Si contratta un export completo e lo si esercita una volta l'anno. Il tempo di export di alcuni terabyte, e il costo di uscita che alcuni fornitori fanno pagare sul traffico, entrano nel piano: un RTO che ignora tre giorni di download è falso.

Si tengono le configurazioni, non solo i dati. Reti, regole, identità. Ricostruire a memoria un sistema vissuto per tre anni dentro un pannello altrui non si fa. La descrizione sta in un deposito dell'ente.

### Esempio

I dati del registro stanno in una regione europea indicata nel contratto, senza copie extra europee. Ogni gennaio si esporta un ambiente di prova e lo si riapre su un altro sistema, cronometrando. Le regole di rete sono descritte in un file tenuto dall'ente.

### In sede di prova

Luogo dei dati, copie comprese, formato di export, prova annuale, tempo e costo di uscita dentro il piano.

### Errori da evitare

- Accontentarsi della sede legale del fornitore come se fosse la sede dei dati.
- Rimandare la prova di export al giorno in cui il contratto è già finito.
- Salvare solo i dati e non le configurazioni.

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Protezione dei dati personali](https://it.wikipedia.org/wiki/Protezione_dei_dati_personali)

## Database gestito: che cosa non si amministra più

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** database gestito, patch, failover
**Semaforo:** giallo

### Inquadramento

La domanda distingue comprare un disco e un motore da comprare un servizio che tiene il motore acceso. Si elenca che cosa passa al fornitore e che cosa resta, perché il resto resta davvero.

### Definizione

Un database gestito è un servizio in cui il fornitore installa, patcha, fa il failover e spesso le copie del motore. L'ente crea gli schemi, scrive le query, gestisce i permessi applicativi e decide il contenuto.

### Nel dettaglio

Passano al fornitore la fatica del motore: versioni, dischi guasti, promozione di una replica, a volte il backup di base. Restano all'ente le scelte che il fornitore non può indovinare. Quali indici. Quali query. Quale utente applicativo, con pochi privilegi. Quale dato ci si mette, e con quale base giuridica. Se il backup di base si può ripristinare in un tempo utile, cosa che si prova, e se le copie stanno nel luogo giusto. Un backup gestito in una regione sbagliata è un problema dell'ente anche se il pulsante è del fornitore.

Il failover gestito ha un buco dichiarato, secondi o minuti, e durante il buco le scritture falliscono. L'applicazione deve ritentare, non mostrare un errore definitivo al primo tentativo. Si legge il numero e si progetta su quello. Le finestre di manutenzione del motore le decide spesso il fornitore: si sceglie un orario compatibile con lo sportello, se il contratto lo consente, e ci si mette comunque.

Uscire da un database gestito è più facile se si è usato SQL ordinario e non una funzione che esiste solo lì. Ogni funzione proprietaria usata è un pezzo di riscrittura il giorno dell'uscita. Si segnano.

### Esempio

Il motore è gestito, con una replica e un failover di pochi minuti. L'applicazione ritenta le scritture. L'utente del servizio ha i privilegi sulle sole tabelle del tema. Una volta all'anno si ripristina il backup gestito su un altro motore, per sapere di poter uscire.

### In sede di prova

Elencare che cosa fa il fornitore e le quattro cose che restano: schema, permessi, dato, prova di ripristino e di uscita.

### Errori da evitare

- Credere che gestito significhi «non mi occupo dei dati».
- Usare estensioni proprietarie senza segnarle.
- Non ritentare durante il failover.

### Approfondire

- [Database](https://it.wikipedia.org/wiki/Database)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Registro delle immagini e promozione fra ambienti

**Prove:** seconda prova gruppo 1, gruppo 2
**Tag:** registro, immagine, container
**Semaforo:** giallo

### Inquadramento

La domanda chiede da dove arriva il container che gira in esercizio. Si descrive un registro e la regola che la stessa immagine, non una ricostruita, attraversa gli ambienti.

### Definizione

Il registro conserva le immagini dei container, con un nome e un numero di versione. Gli ambienti prelevano da lì. Promuovere significa lasciare che la stessa immagine, già provata, passi in esercizio, senza ricostruirla.

### Nel dettaglio

Ricostruire in esercizio dal codice «tanto è lo stesso» non è lo stesso. Una dipendenza scaricata oggi può essere diversa da ieri, e l'immagine di esercizio non è quella provata. Si costruisce una volta, si numera, si carica nel registro, si prova quell'identificativo, si promuove quell'identificativo. La parola «ultima» non è un identificativo: domani punta altrove. Si vieta in esercizio.

Il registro sta in rete interna o in un servizio con accesso controllato. Chi può pubblicare immagini è pochi. Un'immagine non firmata o arrivata da un registro pubblico sconosciuto non entra. Le immagini pubbliche, quando servono, si copiano nel registro proprio dopo averle esaminate, e si aggiornano di proposito, non a ogni avvio. Le credenziali non stanno dentro l'immagine: un'immagine è un file che molti possono leggere. I segreti arrivano a runtime dal deposito.

Si tiene il numero che gira. In un incidente si sa quale versione risponde, e si può tornare al numero precedente, che è ancora nel registro. Cancellare le vecchie immagini lo stesso giorno del rilascio toglie il ritorno.

### Esempio

La build produce l'immagine 1.4.2, la carica nel registro interno, la prova nell'ambiente di test. L'esercizio preleva 1.4.2, non «ultima». La 1.4.1 resta per il ritorno. I segreti del database entrano come configurazione, non nello strato dell'immagine.

### In sede di prova

Costruire una volta, numerare, promuovere lo stesso numero, niente «ultima», segreti fuori, vecchie versioni tenute per il ritorno.

### Errori da evitare

- Ricostruire l'immagine sul server di esercizio.
- Mettere password nell'immagine.
- Cancellare la versione precedente il giorno stesso.

### Approfondire

- [Docker](https://it.wikipedia.org/wiki/Docker)
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Aggiornare i container senza spegnere il servizio

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** rolling update, rollout, ritorno
**Semaforo:** giallo

### Inquadramento

La domanda chiede il rilascio su più copie. Si descrive la sostituzione una copia alla volta e il segnale che deve fermare la sostituzione.

### Definizione

L'aggiornamento progressivo sostituisce le copie dell'applicazione una dopo l'altra. Il servizio resta sulle copie non ancora toccate. Se le copie nuove non diventano sane, la sostituzione si ferma e si torna all'immagine precedente.

### Nel dettaglio

Con tre copie, se ne toglie una dal turno, la si sostituisce, si aspetta la sonda, poi la successiva. In ogni momento due rispondono. La sonda deve controllare la funzione, non solo l'avvio del processo: un'immagine che parte e poi fallisce sulla prima query non deve ricevere l'intera sostituzione. Alla prima copia malata ci si ferma. Proseguire perché «ormai è in corso» mette in servizio un difetto su tutte le copie e non c'è più la vecchia a reggere.

Il ritorno è la stessa procedura al contrario, con l'immagine precedente. Funziona se lo schema dei dati è compatibile. Una modifica che cancella una colonna impedisce il ritorno nel momento in cui servirebbe. Si fanno modifiche compatibili, e il ritorno si prova in test, non si descrive soltanto.

Due versioni convivono per alcuni minuti. Entrambe devono poter parlare con il database di quel momento. È un vincolo concreto sul rilascio, più utile del nome dello strumento di orchestrazione.

### Esempio

Si rilascia la 1.4.2 su tre copie, una alla volta, in orario d'ufficio. La prima non supera la sonda. La procedura si ferma, le altre due restano alla 1.4.1, la prima torna indietro. Lo sportello non si accorge di nulla, e il difetto non è arrivato a tutti.

### In sede di prova

Una copia alla volta, sonda sulla funzione, stop al primo fallimento, ritorno condizionato allo schema compatibile.

### Errori da evitare

- Sostituire tutte le copie insieme.
- Continuare il rilascio dopo una sonda rossa.
- Cambiare lo schema in modo irreversibile nello stesso istante.

### Approfondire

- [Orchestrazione](https://it.wikipedia.org/wiki/Orchestrazione_(informatica))
- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)

## Segreti nei container, fuori dall'immagine

**Prove:** seconda prova gruppo 1, orale
**Tag:** segreti, configurazione, container
**Semaforo:** verde

### Inquadramento

La domanda unisce cloud e sicurezza. Si dice dove sta la password del database e come arriva al processo senza finire nel codice e nel registro.

### Definizione

Un segreto è un dato di cui la copia non autorizzata è già un incidente: password, chiavi, token. In un ambiente a container vive in un deposito di segreti e viene iniettato nel processo all'avvio, in memoria o in un file con permessi stretti, non nell'immagine e non nel codice.

### Nel dettaglio

L'immagine è leggibile da chiunque possa prelevarla, e resta nelle cache. Una password scritta nel file di build è pubblica dentro l'ente, per sempre, anche dopo che si è «tolta» dall'immagine successiva, perché la precedente è ancora nel registro. Si ruota quel segreto appena si scopre, e si considera compromesso. Il deposito consegna il segreto al momento dell'avvio, a un'identità del servizio che può leggere solo i propri. Un altro servizio non li legge.

I registri non devono stamparlo. Un errore che scrive l'intera configurazione nel log vanifica il deposito. Si verifica cercando, a campione, nei registri. Il segreto ruota: il deposito tiene la versione nuova, i processi si riavviano, la vecchia scade. Un segreto che non si può ruotare perché qualcuno l'ha copiato a mano in un file è un segreto fuori controllo, e quel file è il difetto da togliere.

In un tema si scrive una frase. I segreti stanno nel deposito dell'ente, l'immagine è la stessa in prova e in esercizio, gli ambienti ricevono segreti diversi. La prova non usa la password di esercizio, mai, nemmeno per «fare prima».

### Esempio

La connection string non sta nel sorgente. Il processo, all'avvio, la riceve dal deposito con la propria identità. Nei log si stampa «connessione rifiutata», non la stringa. La password di prova e quella di esercizio sono due segreti, e la prova non ha nemmeno il permesso di leggere il secondo.

### In sede di prova

Dove non sta il segreto, come arriva, come si ruota, prova e esercizio diversi, registri puliti.

### Errori da evitare

- Scrivere la password nel file di configurazione dentro l'immagine.
- Riusare il segreto di esercizio in prova.
- Stampare la configurazione completa a ogni avvio.

### Approfondire

- [Docker](https://it.wikipedia.org/wiki/Docker)
- [Gestione degli accessi](https://it.wikipedia.org/wiki/Gestione_dell%27identit%C3%A0)

## Costo del cloud: che cosa si guarda ogni mese

**Prove:** seconda prova gruppo 1, orale
**Tag:** costi, cloud, budget
**Semaforo:** giallo

### Inquadramento

La domanda evita la sorpresa della fattura. Si indicano le voci che crescono da sole e il controllo che si mette prima, non dopo il conto.

### Definizione

Il costo del cloud segue l'uso: nodi accesi, spazio, traffico in uscita, operazioni, indirizzi, registri tenuti. Senza un tetto e senza un proprietario, l'uso dimenticato cresce per mesi.

### Nel dettaglio

Le voci che sfuggono sono ripetitive. Ambienti di prova lasciati accesi nel fine settimana. Dischi di macchine cancellate. Registri verbosi tenuti per sempre. Traffico in uscita di un backup che copia tutto ogni giorno verso un'altra regione. Scalabilità automatica senza massimo. Si assegna ogni ambiente a un ufficio, con un tetto. Superato il tetto, si avvisa il proprietario e, per gli ambienti di prova, si può spegnere. Per l'esercizio si avvisa e non si spegne da soli.

Si spegne ciò che non lavora. Un orario per la prova, spenta di notte, costa una frazione. Si sceglie la dimensione dopo la misura, non al massimo «per non pensarci». Un nodo grande acceso al cinque per cento è una scelta, e va detta. Si rilegge il conto ogni mese, con le cinque voci più care, e si chiede quale è ancora giustificata. Un conto che nessuno apre non è un servizio gestito, è un canone cieco.

Il costo entra nel confronto con la sala propria. La sala costa anche da spenta, il cloud costa acceso. Un carico stabile tutto l'anno può costare meno in casa. Un carico a picchi può costare meno acceso solo nei picchi. Si scrive il confronto in una pagina, con i numeri dell'anno, non con lo slogan.

### Esempio

La prova si spegne alle venti e nel fine settimana. L'esercizio ha un tetto di nodi. Il backup fra regioni si misura: copiare ogni giorno dati che non cambiano era la prima voce, e si passa agli incrementali. Ogni mese le cinque voci si rileggono con il proprietario del servizio.

### In sede di prova

Voci che crescono da sole, tetto, spegnimento della prova, lettura mensile, confronto onesto con la sala.

### Errori da evitare

- Lasciare gli ambienti di prova sempre accesi.
- Scalare senza un massimo di spesa.
- Non aprire il dettaglio del conto.

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Capacity planning](https://it.wikipedia.org/wiki/Capacity_planning)

## Collegare l'identità dell'ente al cloud senza una seconda password

**Prove:** seconda prova gruppo 1, orale
**Tag:** federazione, identità, cloud
**Semaforo:** verde

### Inquadramento

La domanda chiede chi entra nel pannello e nei servizi. Si porta l'identità che l'ente ha già, e si tolgono gli utenti locali creati a mano nel fornitore.

### Definizione

La federazione fa sì che il cloud si fidi dell'identità dell'ente. La persona entra con le credenziali che usa già, il secondo fattore compreso, e il cloud riceve l'identità e i gruppi, non una password da conservare.

### Nel dettaglio

Un utente creato nel pannello del fornitore, con una password sua, è un'identità che l'ente dimentica. La persona cambia ufficio, l'utente nel cloud resta. La persona esce dall'ente, l'utente nel cloud resta. La federazione rovescia il verso: disabilitare l'account in directory toglie anche il cloud, lo stesso giorno. I gruppi del directory diventano ruoli nel cloud. Amministrare l'infrastruttura è un gruppo piccolo, con secondo fattore, e non è il gruppo di chi usa l'applicazione.

Le chiavi tecniche, quelle dei servizi, non sono persone e non passano dalla federazione delle persone. Stanno nel deposito, ruotano, e hanno permessi da programma, non da amministratore. Non si usa l'utente personale di un collega come chiave di un job notturno. Quando il collega va in ferie, o cambia password, il job muore, oppure, peggio, la sua password era stata copiata.

Si registrano gli accessi di amministrazione e si rileggono. Un ingresso da un paese imprevisto, su un'identità federata, si vede nel registro dell'ente, non solo in un pannello che nessuno apre.

### Esempio

Gli amministratori entrano nel cloud con l'identità dell'ente e un secondo fattore. Il gruppo «cloud-admin» ha tre persone. I nodi usano un'identità tecnica che può leggere solo il proprio deposito. Quando un amministratore cambia ufficio, esce dal gruppo e il giorno stesso non entra più.

### In sede di prova

Federare, non duplicare le password, gruppi che diventano ruoli, chiavi tecniche a parte, effetto immediato della disabilitazione.

### Errori da evitare

- Creare utenti locali nel pannello «tanto siamo in pochi».
- Usare la password di una persona dentro un job.
- Dare a tutti gli informatici il ruolo di amministrazione del cloud.

### Approfondire

- [Single sign-on](https://it.wikipedia.org/wiki/Single_sign-on)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Tenere i servizi senza un indirizzo pubblico

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** rete privata, indirizzo pubblico, cloud
**Semaforo:** verde

### Inquadramento

È il disegno di rete del cloud, lo stesso della sala tradotto. Si dice quali pezzi non devono avere un indirizzo raggiungibile da Internet.

### Definizione

Un indirizzo pubblico è raggiungibile da fuori. Un servizio senza indirizzo pubblico si raggiunge solo dalla rete interna o attraverso un punto di ingresso controllato. Il database, i nodi e la gestione stanno senza indirizzo pubblico.

### Nel dettaglio

Il disegno ha un solo ingresso: il proxy o il bilanciatore, con la porta del servizio. I nodi stanno in sottoreti private e accettano traffico solo dal proxy. Il database accetta traffico solo dai nodi, sulla sua porta. La gestione accetta traffico solo da una rete di amministrazione, raggiunta con identità forte. Una macchina di prova con un indirizzo pubblico «per collegarsi da casa» è la macchina da cui entrano. Si toglie l'indirizzo e si entra per la via di amministrazione.

Si verifica guardando l'elenco degli indirizzi, non fidandosi del disegno di sei mesi prima. Una regola di rete troppo larga, «tutto il mondo verso questa porta, per una prova», si riconosce perché non ha una data di fine. Si mettono scadenze. Si prova da fuori: una scansione dalle rete esterna deve vedere solo la porta prevista. Ciò che non si vede da fuori non si attacca da fuori, e resta da proteggere da dentro.

Nel tema si disegnano le sottoreti private e si scrive la frase: il database non ha un indirizzo pubblico, nemmeno temporaneamente.

### Esempio

Il proxy ha l'unico indirizzo pubblico, porta quattrocentoquarantatré. I nodi hanno indirizzi privati. Il database ha un indirizzo privato visibile solo dai nodi. L'amministrazione passa da una rete privata dedicata. Una verifica mensile elenca gli indirizzi pubblici e trova solo il proxy.

### In sede di prova

Un ingresso solo, database senza pubblico, verifica periodica dell'elenco, niente eccezioni senza scadenza.

### Errori da evitare

- Pubblicare il database per una verifica e lasciarlo.
- Dare indirizzi pubblici ai nodi per comodità.
- Controllare il disegno e non l'elenco reale degli indirizzi.

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## Provare la perdita di una zona

**Prove:** seconda prova gruppo 1, orale
**Tag:** zona, chaos, prova
**Semaforo:** giallo

### Inquadramento

La domanda chiede la prova della disponibilità, non il disegno. Si spegne una zona in un ambiente che conta e si guarda che cosa si rompe davvero.

### Definizione

La prova di perdita di zona toglie, di proposito, i nodi e le rete di una zona di disponibilità e osserva se il servizio continua, in quanto tempo, e con quale perdita di dati. Senza questa prova la seconda zona è una speranza.

### Nel dettaglio

Si fa in un ambiente uguale all'esercizio, o sull'esercizio in una finestra dichiarata se non esiste un gemello, con gli utenti avvisati. Si spengono i nodi di una zona, non si «simula» con un flag che il software tratta in modo speciale. Il bilanciatore deve smettere di mandarci gente. Il database deve promuovere l'altra zona, se il primario era lì, oppure continuare, se il primario era altrove. Si cronometra. Si annota ogni intervento a mano: ogni gesto manuale è un pezzo che mancava nell'automazione e che di notte, da soli, si sbaglierà.

Si guarda il ritorno. Rimettere la zona non deve creare due primari. I dati scritti durante la prova stanno da una parte sola e vanno riconciliati nel verso giusto. Si verifica una funzione, non solo che le macchine siano accese: un utente di prova compie l'operazione principale.

Il difetto tipico è una configurazione che punta all'indirizzo della zona caduta invece che al nome del servizio. In prova l'applicazione non riparte. Si corregge e si riprova. Una prova all'anno è il minimo. Una prova mai fatta non si cita in commissione come se fosse un risultato.

### Esempio

Si spegne la zona A in prova. Il servizio torna in quattro minuti sulla zona B, con una scrittura di prova persa perché la replica era asincrona di pochi secondi, coerente con l'RPO di un minuto. Un parametro puntava all'indirizzo vecchio: si corregge, si ripete, il secondo giro torna in due minuti senza mani.

### In sede di prova

Spegnere davvero, cronometrare, annotare gli interventi a mano, provare il ritorno senza due primari, ripetere dopo le correzioni.

### Errori da evitare

- Citare due zone senza averne spenta una.
- Provare solo lo spegnimento e non il ritorno.
- Dichiarare un successo pieno di gesti manuali non scritti.

### Approfondire

- [Alta disponibilità](https://it.wikipedia.org/wiki/Alta_disponibilit%C3%A0)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Licenze e virtualizzazione: che cosa si sta duplicando

**Prove:** seconda prova gruppo 1, orale
**Tag:** licenze, macchine virtuali, costi
**Semaforo:** rosso

### Inquadramento

È un argomento di contorno che diventa concreto il giorno in cui le macchine virtuali si moltiplicano. Si chiede come il produttore conta il software, per non scoprirlo in un audit.

### Definizione

La licenza è il permesso di usare un software, con una metrica: per processore, per core, per utente, per macchina. Virtualizzare non azzera la metrica. Spesso la moltiplica, perché ogni ospite è una macchina, o perché si contano i core fisici del nodo intero.

### Nel dettaglio

Un software contato per macchina, clonato in venti copie, può volere venti licenze. Un software contato sui core del nodo può volere i core di tutto il nodo anche se la macchina ne usa due, secondo il contratto. Si legge prima di clonare, non dopo l'audit. L'immagine standard contiene solo ciò che si ha diritto di replicare. Un'immagine con un prodotto dal licenza incerta, clonata per comodità, replica anche l'incertezza.

I container non sono automaticamente «liberi». L'immagine può contenere componenti con licenze che obbligano a ridistribuire il sorgente, o che vietano l'uso in certi contesti. Si tiene l'elenco di ciò che è dentro l'immagine di base. Lo stesso elenco serve al riuso e alla sicurezza.

Nel tema, se si nomina un prodotto non libero, si aggiunge mezza frase: la metrica di licenza è compatibile con il numero di nodi previsti. Non si inventa il prezzo. Si mostra di averci pensato.

### Esempio

Il motore di database è contato sui core del nodo. Prima di raddoppiare i nodi si verifica il contratto. L'immagine applicativa contiene solo componenti di cui si è registrata la licenza. Il clone di una macchina non clona anche, in silenzio, un prodotto da postazione.

### In sede di prova

La metrica esiste, virtualizzare può moltiplicarla, l'immagine contiene solo ciò che si può replicare, l'elenco delle licenze sta insieme all'elenco delle versioni.

### Errori da evitare

- Clonare una macchina e dare per clonato anche il diritto di usarla.
- Ignorare le licenze dentro l'immagine di base del container.
- Citare prodotti nel tema senza una parola su come si pagano o si riusano.

### Approfondire

- [Licenza (informatica)](https://it.wikipedia.org/wiki/Licenza_(informatica))
- [Macchina virtuale](https://it.wikipedia.org/wiki/Macchina_virtuale)

## Volume persistente e vita dei dati nei container

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** volume, persistenza, container
**Semaforo:** verde

### Inquadramento

La domanda corregge l'idea che il container «contenga» i dati. Si dice dove stanno i dati che devono sopravvivere alla sostituzione dell'immagine.

### Definizione

Il filesystem del container è effimero: nasce con la copia e muore quando la copia viene sostituita. Un volume è uno storage esterno, montato dentro il container, che sopravvive alla sostituzione e si gestisce con le regole dei dati, non con quelle dell'immagine.

### Nel dettaglio

Tutto ciò che si scrive solo dentro il container si perde al rilascio successivo. Per questo i dati non ci stanno. Gli allegati stanno su un volume o a oggetti. Il database, se proprio gira in un container, ha un volume dedicato, con backup proprio, e non è il posto migliore per cominciare: un database gestito o una macchina dedicata è più semplice da spiegare in un tema. I registri, se devono restare, vanno su un collettore, non sul disco del container che sta per sparire proprio quando servirebbero, cioè dopo un crash.

Il volume ha un proprietario. Due copie dell'applicazione che scrivono lo stesso volume senza coordinarsi se lo dividono. Si dice se il volume è di una copia sola o condiviso in sola lettura. Il backup è del volume, fatto in modo coerente, non dell'immagine. Ripristinare l'immagine e dimenticare il volume è ripartire vuoti.

Nel disegno si vede la linea: container sostituibile da una parte, volume con il backup dall'altra. Se la linea non c'è, i dati sono nel posto sbagliato.

### Esempio

L'applicazione gira in tre copie senza dischi propri. Gli allegati stanno a oggetti. I registri vanno al collettore. Una nuova immagine sostituisce le copie e gli allegati restano. Il database è un servizio a parte, con i suoi dischi e il suo backup.

### In sede di prova

Effimero contro persistente, che cosa sta sul volume, backup del volume, copie che non si dividono un volume a caso.

### Errori da evitare

- Salvare documenti nel filesystem del container.
- Cercare i registri di un incidente dentro un container già sostituito.
- Far scrivere tre copie sullo stesso volume senza una regola.

### Approfondire

- [Docker](https://it.wikipedia.org/wiki/Docker)
- [Kubernetes](https://it.wikipedia.org/wiki/Kubernetes)

## Limiti di risorse per ogni container

**Prove:** seconda prova gruppo 1, orale
**Tag:** limiti, memoria, noisy neighbor
**Semaforo:** giallo

### Inquadramento

È il vicino rumoroso dentro un solo nodo. Si mette un tetto a ogni copia così una perdita di memoria non si prende tutto il nodo.

### Definizione

Un limite di risorsa è il massimo di CPU o di memoria che un container può usare. Oltre la memoria, il sistema lo termina. Oltre la CPU, lo rallenta. La richiesta è invece il minimo che gli si garantisce per poterlo piazzare su un nodo.

### Nel dettaglio

Senza limite, un container con un difetto di memoria cresce finché il nodo non inizia a paginare o a uccidere processi a caso, compresi quelli degli altri servizi sullo stesso nodo. Con il limite, muore quel container e l'orchestratore lo riavvia. Il servizio può perdere una copia e le altre restano. È un guasto contenuto. Il limite si mette un po' sopra il consumo normale misurato, non a caso. Un limite troppo basso uccide un servizio sano ogni pomeriggio di picco. Si misura, poi si scrive il numero.

La richiesta serve all'orchestratore per non mettere troppe copie sullo stesso nodo. Se si promettono quattro gigabyte e il nodo ne ha sedici, di copie che chiedono quattro ne stanno tre, non dieci. Senza richiesta, l'orchestratore le ammassa e i limiti scattano tutti insieme. Richiesta e limite si scrivono entrambi.

Si osserva quante volte il limite uccide il processo. Se succede ogni giorno, il limite è basso o c'è una perdita. Alzare il limite all'infinito nasconde la perdita. Si alza un poco e si cerca il difetto.

### Esempio

Ogni copia dell'applicazione chiede un gigabyte e non può superarne due. Il nodo da sedici ne ospita alcune, con margine per il sistema. Una copia con una perdita raggiunge due gigabyte, viene terminata e riavviata, le altre non se ne accorgono. Il riavvio ripetuto compare nel monitoraggio e si apre un difetto.

### In sede di prova

Tetto di memoria, minimo garantito, perché si misura, che cosa succede allo sforamento, il difetto che non si cura alzando il tetto per sempre.

### Errori da evitare

- Lasciare i container senza limiti sullo stesso nodo del database.
- Mettere limiti a caso, sotto il consumo normale.
- Alzare il limite a ogni riavvio senza cercare la perdita.

### Approfondire

- [Kubernetes](https://it.wikipedia.org/wiki/Kubernetes)
- [Container](https://it.wikipedia.org/wiki/Container)

## Infrastruttura immutabile, in una frase operativa

**Prove:** seconda prova gruppo 1, orale
**Tag:** immutabile, immagine, deriva
**Semaforo:** giallo

### Inquadramento

La domanda dà un nome a una pratica già utile in sala. Non si corregge il server acceso. Si sostituisce con uno costruito bene.

### Definizione

L'infrastruttura immutabile non viene modificata dopo l'avvio. Una correzione produce una immagine nuova e sostituisce i nodi. Nessuno entra a installare pacchetti sul nodo in esercizio.

### Nel dettaglio

Il nodo modificato a mano diverge dagli altri e non si sa ricostruire. A sei mesi di distanza nessuno ricorda il pacchetto installato di fretta. Con l'immutabilità, tutto ciò che serve sta nella definizione dell'immagine e nella configurazione esterna. Il nodo è un risultato, non un luogo di lavoro. Se è malato, lo si butta e se ne accende uno dalla stessa definizione. Il tempo di ripristino di un nodo diventa il tempo di accensione, che si misura.

Le eccezioni si chiudono in fretta. Una diagnosi può richiedere di entrare sul nodo, in sola lettura. Una modifica fatta lì per far ripartire lo sportello si riporta nella definizione lo stesso giorno, e il nodo toccato si sostituisce appena possibile. Lasciarlo «tanto ormai funziona» reintroduce la deriva, e il prossimo nodo nuovo non avrà la correzione.

Si applica bene ai nodi applicativi. Si applica male, o con più cautela, a ciò che ha stato unico e non si butta: un database con i dati solo lì. Quei sistemi si curano con le loro procedure, e lo si dice, invece di fingere che tutto l'ente sia immutabile.

### Esempio

Un difetto di libreria si corregge nell'immagine, si rilasciano nodi nuovi, i vecchi si spengono. Nessuno si è collegato in console a installare la libreria sul nodo tre. Il nodo tre, se avesse ricevuto una patch a mano durante un incidente, verrebbe sostituito entro la giornata.

### In sede di prova

Definizione che produce i nodi, divieto di curare a mano, eccezione dell'incidente da riportare il giorno stesso, attenzione a ciò che ha stato.

### Errori da evitare

- Installare pacchetti sul server acceso perché è più veloce.
- Dimenticare di riportare nella definizione la correzione fatta in emergenza.
- Buttare e ricreare un database come se fosse un nodo senza stato.

### Approfondire

- [Gestione della configurazione](https://it.wikipedia.org/wiki/Gestione_della_configurazione)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Tenere insieme ciò che non deve spegnersi insieme

**Prove:** seconda prova gruppo 1, orale
**Tag:** affinità, cluster, disponibilità
**Semaforo:** giallo

### Inquadramento

La domanda chiede dove si mettono due macchine virtuali che fanno lo stesso servizio. La risposta è una regola di posizione, non un disegno lasciato al caso del bilanciatore.

### Definizione

Una regola di anti-affinità vieta a due macchine dello stesso servizio di stare sullo stesso nodo fisico. Una regola di affinità le tiene insieme, o vicine, quando si parlano molto e la latenza fra nodi costa. Senza regole, un riavvio del nodo «sbagliato» spegne entrambe le copie.

### Nel dettaglio

Il caso comune è l'anti-affinità. Due nodi applicativi, o l'applicazione e il suo unico database se non c'è altra ridondanza, non condividono l'alimentatore e il disco dello stesso host. Si verifica spegnendo l'host in una prova, non leggendo la regola a video: la regola può essere scritta e non rispettata se manca capacità. Se il cluster ha due soli host, l'anti-affinità è una frase vera e la manutenzione di un host spegne comunque metà servizio: si dice, e non si vende come alta disponibilità.

L'affinità si usa con parsimonia. Tenere il database vicino all'applicazione riduce i salti, e concentra il rischio. Si sceglie in base al guasto che si teme di più. In un ente, di solito si teme di più il fermo simultaneo, quindi si separa.

Le regole si rileggono dopo ogni aggiunta di host. Un host nuovo vuoto attira tutte le macchine riavviate, e due copie finiscono lì il giorno della manutenzione. La prova periodica è spegnere un host e contare le copie ancora vive.

### Esempio

I due processi del portale hanno anti-affinità. Si spegne l'host uno in prova: il portale resta, più lento, sull'host due. Il database sta su una coppia diversa, anch'essa separata. Non c'è una regola che tenga portale e database «vicini per performance» a costo di spegnerli insieme.

### In sede di prova

Anti-affinità per le copie dello stesso servizio, verifica spegnendo l'host, due soli host non sono alta disponibilità, l'affinità si motiva col guasto che si accetta.

### Errori da evitare

- Dare per scontato che «due macchine virtuali» stiano su due hardware.
- Scrivere la regola e non avere posto libero per rispettarla.
- Accoppiare per latenza le uniche due copie.

### Approfondire

- [Alta disponibilità](https://it.wikipedia.org/wiki/Alta_disponibilit%C3%A0)
- [Macchina virtuale](https://it.wikipedia.org/wiki/Macchina_virtuale)

## Svuotare un nodo prima di spegnerlo

**Prove:** seconda prova gruppo 1, orale
**Tag:** drain, manutenzione, cluster
**Semaforo:** verde

### Inquadramento

La domanda chiede come si fa manutenzione su un host senza chiudere il servizio. Il gesto ha un nome operativo: si svuota il nodo, poi si spegne.

### Definizione

Svuotare un nodo significa non mandargli lavoro nuovo e spostare altrove il lavoro che può spostarsi. Quando è vuoto, o quando resta solo ciò che si è deciso di interrompere, si fa la manutenzione. Alla fine il nodo rientra e torna a ricevere.

### Nel dettaglio

L'ordine conta. Prima si toglie il nodo dai bilanciatori e dalle regole che gli assegnano macchine, così non arriva nulla mentre si sposta il resto. Poi si migrano le macchine accese, se l'architettura lo consente, o si riavviano i servizi sulle copie già altrove. Si aspetta che le sessioni in corso finiscano, entro un tempo massimo, e allo scadere si interrompe ciò che resta: un tempo massimo evita la manutenzione che non inizia mai perché c'è sempre una sessione.

Durante lo svuotamento la capacità residua deve bastare. Se i nodi rimasti sono già al limite, svuotare il primo affonda gli altri. Si fa quando c'è margine, o si aggiunge capacità prima. Dopo la manutenzione il nodo non rientra da solo nel servizio se non ha superato i controlli: un nodo che torna guasto riceve subito traffico e lo perde.

Si registra l'inizio, la fine e chi l'ha deciso. È un cambiamento, non un gesto informale del venerdì sera.

### Esempio

Per aggiornare l'host tre, lo si toglie dal bilanciatore, si migrano le macchine del portale sull'host quattro, si aspetta dieci minuti le sessioni, si aggiorna, si verifica l'host, poi lo si rimette. Se durante l'attesa l'host quattro supera la soglia di CPU, ci si ferma e non si continua «tanto è un attimo». Il portale non ha avuto un buco, ha avuto un nodo in meno per il tempo previsto.

### In sede di prova

Niente lavoro nuovo, sposta ciò che si può, tempo massimo, capacità residua verificata, rientro solo dopo il controllo, cambiamento registrato.

### Errori da evitare

- Spegnere l'host e lasciare che il cluster «se la veda».
- Svuotare senza margine sugli altri nodi.
- Rimmettere il nodo nel bilanciatore prima di averlo verificato.

### Approfondire

- [Macchina virtuale](https://it.wikipedia.org/wiki/Macchina_virtuale)
- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)

## Due modi di rilasciare senza un buco lungo

**Prove:** seconda prova gruppo 1, seconda prova gruppo 2
**Tag:** blue-green, canary, rilascio
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si passa a una versione nuova delle macchine, o dei container, senza spegnere il servizio per il tempo dell'installazione. Si descrivono due schemi e il prerequisito comune.

### Definizione

Nel rilascio a due ambienti, uno riceve traffico e l'altro, già aggiornato, aspetta. Si sposta il traffico quando il secondo è pronto, e il primo resta per tornare indietro. Nel rilascio graduale una piccola parte del traffico va alla versione nuova, si osserva, poi si allarga. In entrambi si torna indietro spostando il traffico, non reinstallando di corsa.

### Nel dettaglio

Il prerequisito è uno schema compatibile con la versione vecchia e con la nuova, oppure una migrazione già fatta in un passo precedente. Se la versione nuova scrive una colonna che la vecchia non sa leggere, il ritorno non esiste. Si torna al vincolo dei rilasci piccoli: prima lo schema compatibile, poi il codice, poi la rimozione del vecchio.

Il graduale è meglio quando il difetto si vede solo con il traffico vero. Costa la capacità di osservare errori e tempi sulla sola fetta nuova, altrimenti si scopre il difetto quando è già al cento per cento. Il doppio ambiente è più semplice da raccontare e costa il doppio delle macchine per il tempo del rilascio. In un ente con poco traffico il doppio ambiente basta. Il graduale si nomina se si sa dire quale misura ferma l'allargamento.

Lo stato di sessione non sta nella macchina che si sta per spegnere. Altrimenti spostare il traffico disconnette tutti, e il «rilascio senza buco» ha un buco di sessioni.

### Esempio

La versione nuova del portale è accesa accanto alla vecchia, senza traffico. Le prove sintetiche passano. Si sposta il bilanciatore. Gli errori restano nella norma per quindici minuti. La versione vecchia si tiene fino al giorno dopo, spenta al traffico e pronta. Lo schema non è cambiato in questo passo. Una sessione nata prima del passaggio continua, perché sta nel database e non nella memoria della versione vecchia.

### In sede di prova

Schema compatibile prima, traffico spostato e non reinstallato, modo di tornare indietro, sessione fuori dalla macchina, una misura se si allarga per gradi.

### Errori da evitare

- Cambiare lo schema in modo incompatibile lo stesso giorno del rilascio.
- Non avere la versione precedente ancora avviabile.
- Tenere la sessione in memoria e chiamarlo rilascio trasparente.

### Approfondire

- [Integrazione continua](https://it.wikipedia.org/wiki/Integrazione_continua)
- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)

## Il backup, quando il server non è nostro

**Prove:** seconda prova gruppo 1, orale
**Tag:** IaaS, backup, responsabilità
**Semaforo:** verde

### Inquadramento

La domanda applica il modello di responsabilità a un gesto solo: le copie. Nel cloud a infrastruttura, l'aver acceso una macchina non significa che qualcuno la stia copiando.

### Definizione

Nel servizio a infrastruttura il fornitore protegge la piattaforma. La copia delle macchine, dei dischi e dei database che abbiamo acceso è una configurazione nostra, salvo un servizio di backup che abbiamo esplicitamente comprato e verificato. «È nel cloud» non è una policy di copia.

### Nel dettaglio

Si scrive chi copia che cosa, con quale frequenza, dove finisce la copia e chi l'ha ripristinata l'ultima volta. Una snapshot del disco presa dal fornitore, se è nello stesso account e nella stessa zona, non è un backup contro un errore di cancellazione dell'account né contro un ransomware che ha le stesse chiavi. La copia utile sta in un altro account o in un altro luogo, con permessi che l'applicazione quotidiana non ha, e con un tempo di conservazione.

Si prova il ripristino. Nel cloud la prova è più facile da rinviare, perché non c'è un nastro da tenere in mano, e quindi si mette in calendario lo stesso. Si cronometra. Un disco da un terabyte che si ripristina in un tempo maggiore dell'RTO non rispetta l'RTO, anche se la console dice «backup ok».

I database gestiti spostano una parte del lavoro, non la decisione. Il fornitore può fare il backup automatico. Noi diciamo la ritenzione, il punto di ripristino, e verifichiamo un restore in un'istanza che non è l'esercizio. Senza questa frase, il database gestito è un luogo in cui il backup «qualcuno lo farà».

### Esempio

Le macchine del portale hanno una snapshot notturna nell'account di esercizio e una copia settimanale in un account separato, che gli amministratori dell'applicazione non possono cancellare. Una volta al trimestre si ripristina la copia in una rete di prova e si apre l'applicazione. Il tempo misurato sta nel registro accanto all'RTO. Il database gestito ha la sua ritenzione a quattordici giorni e un ripristino di prova nello stesso trimestre.

### In sede di prova

La piattaforma non è la copia. Copia in un altro perimetro di permessi, ritenzione, prova cronometrata, il gestito non toglie la decisione.

### Errori da evitare

- Considerare la snapshot nello stesso account come l'unica copia.
- Non sapere se il database gestito è incluso in una policy.
- Saltare la prova perché il pannello è verde.

### Approfondire

- [Backup](https://it.wikipedia.org/wiki/Backup)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Più fornitori non sono, da soli, un piano

**Prove:** seconda prova gruppo 1, orale
**Tag:** multi-cloud, lock-in, uscita
**Semaforo:** rosso

### Inquadramento

Voce laterale. Serve a rispondere con misura se chiedono se convenga usare due cloud pubblici insieme. La risposta onesta, per un ente, è di solito no, salvo un motivo preciso.

### Definizione

Il multi-cloud usa più fornitori pubblici per carichi di lavoro veri, non solo per una copia ferma. Promette indipendenza e costa il doppio di competenze, di rete, di identità e di modi diversi di fare la stessa cosa. Non coincide con l'ibrido, che è privato più pubblico.

### Nel dettaglio

Due fornitori si giustificano se un servizio deve sopravvivere al fallimento di un intero fornitore, e se si è costruita l'applicazione per girare su entrambi: stesse immagini, dati che si replicano, identità che esiste nei due posti, persone che sanno operare entrambi alle tre di notte. Senza questo, il secondo fornitore è un contratto, non una ridondanza. Il giorno del guasto si scopre che i dati non ci sono, o ci sono con un ritardo che supera l'RPO.

Ciò che conviene quasi sempre è più piccolo: un fornitore, una zona secondaria, e un modo di uscire. L'uscita è l'esportazione dei dati in un formato che si sa leggere, provata, più le immagini. È la difesa dal lock-in che un ente può permettersi. Tenere i dati in un formato proprio e il servizio stateless rende l'uscita possibile. Distribuire ogni componente su due console rende l'esercizio fragile.

In orale si può dire questa gerarchia senza disprezzare il multi-cloud: prima l'uscita dei dati, poi la seconda zona, poi, se il requisito è davvero la sopravvivenza a un fornitore, il secondo fornitore con un progetto, non con un ordine.

### Esempio

Il portale sta in un cloud, su due zone. I dati si esportano ogni notte in un formato aperto, verso un deposito dell'ente. Una prova annuale ricostruisce il database da quell'export, da un'altra parte. Non c'è un secondo fornitore con un'applicazione gemella non aggiornata. Se un giorno il requisito cambiasse, si partirebbe da quell'export, non da zero.

### In sede di prova

Multi-cloud è un progetto di esercizio doppio, non un acquisto. L'ibrido è un'altra cosa. L'uscita dei dati viene prima. La seconda zona copre il guasto più probabile.

### Errori da evitare

- Comprare due cloud e chiamarla continuità, senza replica né competenze.
- Confondere multi-cloud e ibrido.
- Non avere un export perché «tanto abbiamo due fornitori».

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Interoperabilità](https://it.wikipedia.org/wiki/Interoperabilit%C3%A0)

## Capacità riservata e capacità a consumo

**Prove:** seconda prova gruppo 1, orale
**Tag:** costi, capacità, cloud
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché il conto del cloud varia, e come si smette di pagare il prezzo pieno per un carico che si conosce. Si distinguono due modi di comprare la stessa macchina.

### Definizione

La capacità a consumo si accende e si spegne, e si paga per il tempo acceso, a un prezzo più alto. La capacità riservata è un impegno su una quantità, per un periodo, a un prezzo più basso. Si riserva ciò che sta acceso comunque. Si lascia a consumo ciò che cresce a punte e ciò che non si conosce ancora.

### Nel dettaglio

Un portale interno, acceso tutto l'anno con due macchine, non è un carico elastico. Pagato a consumo costa di più e non compra flessibilità che si usi. Si riserva la base. La macchina in più, per la chiusura di un bilancio o per un'iscrizione, può essere a consumo, se davvero si spegne dopo. Lasciarla accesa «per non riconfigurarla» è il picco che diventa base, e il conto che sale senza un progetto.

Si guarda ogni mese la base e il picco. Se la base è cresciuta, si adegua la riserva alla scadenza, non il giorno stesso con un impegno lungo preso di fretta. Un impegno troppo lungo su una quantità che si sta per spegnere è l'opposto del risparmio. Si incrocia con il tetto di spesa: la riserva è un piano, il tetto ferma la sorpresa del consumo.

I nomi commerciali cambiano. In orale si descrivono i due modi e non si recita il listino. Il punto è che l'elasticità si paga, e si compra solo dove il carico è elastico.

### Esempio

Due macchine del portale sono un impegno annuale. Una terza si accende nella settimana delle iscrizioni e si spegne, e lo spegnimento è un cambiamento in calendario, non un proposito. Il mese dopo si verifica che sia spenta. Il database, acceso sempre, non sta a consumo. Un ambiente di prova si spegne la notte, e quello è consumo vero, perché il tempo spento non si paga.

### In sede di prova

Base riservata, punte a consumo, la punta lasciata accesa diventa base, impegno non più lungo del bisogno, verifica dello spegnimento.

### Errori da evitare

- Pagare a consumo un servizio acceso tutto l'anno, per principio.
- Riservare per tre anni una quantità non ancora misurata.
- Dimenticare di spegnere la macchina del picco.

### Approfondire

- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)
- [Scalabilità](https://it.wikipedia.org/wiki/Scalabilit%C3%A0)

## L'identità con cui un servizio chiama un altro servizio

**Prove:** seconda prova gruppo 1, orale
**Tag:** service account, cloud, identità
**Semaforo:** giallo

### Inquadramento

La domanda chiede come un'applicazione nel cloud acceda a un deposito o a un database senza una password nel file di configurazione. Si usa un'identità del servizio, con permessi stretti.

### Definizione

L'identità di servizio è un'identità non umana, assegnata al carico di lavoro. Il fornitore le consegna credenziali temporanee, che l'applicazione non conserva. I permessi elencano le sole operazioni su quelle sole risorse. Non è l'account con cui entra l'amministratore.

### Nel dettaglio

Una chiave a lunga durata, scritta in un file sulla macchina, è il difetto standard. Finisce nelle copie, nei ticket, nei repository. L'identità di servizio la evita perché la credenziale scade e non sta nel disco. Il permesso è del tipo «leggere questo deposito», non «amministrare l'account». Un permesso asterisco, dato per sbloccare un errore in prova e rimasto, è un amministratore di fatto.

Si separano gli ambienti. L'identità di prova non legge il deposito di esercizio. Si separano le applicazioni. L'inventario non usa l'identità delle prenotazioni. Si registra l'uso. Si rivede, una volta per stagione, quali permessi non sono stati usati, e si tolgono. Un permesso non usato non è prudenza. È superficie.

L'amministratore umano entra con la propria identità e il secondo fattore, dalla postazione prevista, non impersonando l'identità di servizio per «fare prima». Se impersona, il registro mente.

### Esempio

Il portale ha un'identità che può leggere e scrivere solo il deposito degli allegati di prenotazione, e un'altra, distinta, per la coda degli avvisi. Non ha chiavi sul disco. L'ambiente di prova ha identità proprie su depositi propri. Un amministratore che deve guardare un allegato entra a suo nome, e la lettura compare nel registro a suo nome, non a nome del servizio.

### In sede di prova

Credenziali che scadono, permessi sulla singola risorsa, ambienti separati, niente asterisco rimasto, le persone non si mascherano da servizio.

### Errori da evitare

- Lasciare una chiave permanente nel file di configurazione.
- Usare un'identità sola per tutti i servizi dell'account.
- Dare il permesso di amministrazione per chiudere un errore e non toglierlo.

### Approfondire

- [Principio del privilegio minimo](https://it.wikipedia.org/wiki/Principio_del_privilegio_minimo)
- [Cloud computing](https://it.wikipedia.org/wiki/Cloud_computing)

## Orologi delle macchine virtuali

**Prove:** seconda prova gruppo 1, orale
**Tag:** orologio, VM, NTP
**Semaforo:** rosso

### Inquadramento

Voce di contorno. Spiega un difetto che si vede nei registri e nelle sessioni: l'ora di una macchina virtuale che scivola, perché il tempo fisico sotto di lei non è il suo.

### Definizione

Una macchina virtuale non ha un orologio hardware proprio affidabile. Il tempo glielo dà l'host, oppure un servizio di rete. Se le due fonti divergono, o se l'host è saturo e il tempo virtuale rallenta, i registri e le scadenze si spostano.

### Nel dettaglio

Si sceglie una fonte. Di solito la macchina si allinea a un servizio interno, lo stesso di tutto l'ente, e l'host fa lo stesso. Due correzioni insieme, host che spinge l'ora e servizio che la ritira, fanno saltare l'orologio avanti e indietro. I certificati, le sessioni e i token scadono «a caso». Si disattiva una delle due correzioni, secondo la pratica del virtualizzatore, e si sa dire quale.

Si allarma lo scarto. Uno scarto di qualche secondo si tollera. Minuti no. Un salto all'indietro è peggio di un ritardo, perché i registri si mescolano e una scadenza già passata torna nel futuro. Meglio correggere in modo graduale, salvo uno scarto così grande da richiedere un intervento.

Nel discorso d'esame si collega all'orologio unico: la macchina virtuale entra nello stesso regime delle altre, non è un caso speciale dimenticato perché «tanto è un file».

### Esempio

Dopo uno spostamento di host, un nodo del portale resta indietro di quattro minuti. Le sessioni nate lì scadono prima, e il suo registro non si allinea agli altri. L'allarme di scarto, se c'è, lo dice subito. Si riallinea alla fonte interna e si verifica che l'host non stia applicando una seconda correzione. I token emessi nel frattempo si lasciano scadere, non si «aggiustano».

### In sede di prova

Una fonte, non due correzioni, allarme sullo scarto, niente salti all'indietro silenziosi, la macchina virtuale è nel perimetro dell'orologio unico.

### Errori da evitare

- Dare per buono l'orologio perché la macchina «è accesa».
- Correggere da host e da rete insieme.
- Ignorare uno scarto di minuti nei registri di un incidente.

### Approfondire

- [Network Time Protocol](https://it.wikipedia.org/wiki/Network_Time_Protocol)
- [Macchina virtuale](https://it.wikipedia.org/wiki/Macchina_virtuale)
