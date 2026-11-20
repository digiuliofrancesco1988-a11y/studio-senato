# Area 4 — Protocolli e reti di comunicazione

Protocolli e reti sono nel gruppo 1 della seconda prova e nel colloquio sulle architetture. Nella prima prova la rete è metà della consegna. Un disegno senza zone, senza porte e senza la freccia che manca fra l’utente e il database è un disegno incompleto.

### Il filo

OSI e TCP/IP danno i nomi dei livelli, così switch, router e firewall non si confondono. Gli indirizzi IPv4, le sottoreti e il NAT dicono chi parla con chi. IPv6 si sa dire per ciò che cambia, senza rifare tutto il corso. TCP e UDP scelgono l’affidabilità o la leggerezza. DNS e DHCP danno i nomi e gli indirizzi. HTTP e HTTPS sono il dialogo dell’applicazione, con i codici che significano permesso negato, conflitto, errore. VLAN e DMZ separano. La VPN porta dentro chi è fuori. Poi vengono gli esercizi: un subnetting da rifare a mano, il percorso di una richiesta fino al database, il proxy. Posta, Wi-Fi, directory LDAP, MAC e porte sono i quesiti che completano il disegno quando la traccia li sfiora.

### Come si risponde

Si scrive il livello insieme al dispositivo. Il MAC sta sulla rete locale, l’IP attraversa i router, la porta sceglie il programma. Sul disegno dell’elaborato due regole bastano e vanno scritte: dagli uffici al proxy solo la 443, dai nodi al database solo la porta del motore e solo da quegli indirizzi. LDAP si cita per dire che le password non si copiano in ogni applicazione.

### Da dove partire

Verde: OSI, dispositivi, IPv4 e sottoreti, TCP e UDP, DNS e DHCP, HTTP, VLAN, il disegno di rete dell’elaborato, il subnetting guidato, il percorso HTTPS, il proxy, la directory. Wi-Fi, posta e porte si aggiungono per non restare scoperti su un quesito breve. IPv6 e la VPN si studiano dopo i verdi.

## Modello OSI e modello TCP/IP

**Prove:** seconda prova gruppo 1, orale
**Tag:** OSI, TCP/IP, incapsulamento
**Semaforo:** verde

### Inquadramento

I modelli danno il posto di ogni pezzo. OSI ha sette livelli, TCP/IP ne usa quattro nella pratica didattica, e l'esame vuole sapere a che livello sta un dispositivo. Lo switch sta sul collegamento, il router sulla rete, il firewall filtra e può guardare più in alto. Sul foglio si prende un pacchetto dell'applicazione e si dice che intestazione si aggiunge a ogni discesa, e si toglie a ogni salita. Confondere il livello è l'errore che fa mettere un router dove basta uno switch.

### Definizione

Un modello di rete descrive la comunicazione fra sistemi dividendola in livelli. Ogni livello offre un servizio al livello superiore e usa il livello inferiore, senza che l’applicazione debba conoscere i cavi. Il modello OSI ha sette livelli ed è il linguaggio con cui si ragiona e si diagnostica. La famiglia TCP/IP, quella realmente usata su Internet, è organizzata in quattro livelli. I due modelli si corrispondono, non sono due reti diverse.

### I sette livelli, dal basso

Il livello fisico trasmette bit su un mezzo: cavo in rame, fibra, radio. Si occupa di segnali, connettori, velocità del collegamento. Un hub, oggi raro, sta qui: ripete il segnale a tutte le porte.

Il livello di collegamento trasferisce trame fra nodi della stessa rete locale e usa gli indirizzi MAC, scritti nelle schede. Lo switch opera qui. Rileva errori di trasmissione della trama. Non sa che cos’è un indirizzo IP.

Il livello di rete instrada i pacchetti fra reti diverse. L’indirizzo di questo livello, nella pratica, è l’indirizzo IP. Il router opera qui. Un pacchetto può attraversare molti router. Il livello di rete non garantisce che arrivi: consegna al meglio delle sue possibilità.

Il livello di trasporto fa comunicare due processi, non solo due macchine. La porta indica l’applicazione. TCP aggiunge connessione, ordine, ritrasmissione di ciò che manca e controllo di flusso. UDP spedisce datagrammi senza connessione e senza ritrasmissione. Entrambi stanno a questo livello.

Il livello di sessione, nel modello OSI, governa dialoghi lunghi, aperture e chiusure. Nella pratica TCP/IP queste esigenze sono coperte dal trasporto o dall’applicazione, e il livello quasi non si nomina da solo.

Il livello di presentazione si occupa della forma dei dati: codifiche, e in teoria compressione e cifratura. Anche questo, nella rete reale, è spesso assorbito dall’applicazione o da TLS.

Il livello di applicazione è quello dei protocolli che l’utente riconosce: HTTP, DNS, SMTP, IMAP, SSH. Non è «il programma di posta». È il protocollo che quel programma usa per parlare.

TCP/IP raggruppa così: accesso alla rete (fisico e collegamento), Internet (rete), trasporto, applicazione (sessione, presentazione e applicazione OSI). Dire «TCP/IP ha quattro livelli» senza saperli accostare ai sette è una risposta a metà.

L’incapsulamento è l’immagine da tenere. L’applicazione prepara i dati. Il trasporto aggiunge la propria intestazione, con le porte. Il livello di rete aggiunge gli indirizzi IP. Il collegamento aggiunge gli indirizzi MAC della tratta. All’arrivo ogni livello toglie la propria intestazione. Per questo un router può cambiare l’intestazione di collegamento a ogni salto, mentre gli indirizzi IP di origine e destinazione restano quelli degli estremi.


### Nel dettaglio

I modelli servono a dire chi fa che cosa quando un pacchetto attraversa un apparato, non a recitare sette nomi. Nel TCP/IP, che è quello che si disegna, l’applicazione produce il messaggio: HTTP, DNS, la query del database. Il trasporto, TCP o UDP, aggiunge le porte e, nel TCP, la garanzia di ordine e di completezza. La rete, IP, aggiunge gli indirizzi e decide il salto verso il prossimo apparato. Il collegamento mette il pacchetto sulla tratta fisica, con gli indirizzi MAC di quella tratta, e si rifà a ogni salto: il MAC cambia a ogni router, l’indirizzo IP di destinazione no, fino al NAT.

OSI nomina sette strati e si usa perché i testi e le domande lo usano. Fisico è il bit sul cavo o sull’aria. Collegamento è la trama fra due nodi della stessa rete. Rete è il pacchetto fra reti diverse. Trasporto è la comunicazione fra processi. Sessione, presentazione e applicazione, in OSI, sono distinti. Nel TCP/IP sessione e presentazione non sono strati autonomi: la sessione se serve sta nell’applicazione, e la presentazione, per esempio la cifratura di TLS, sta fra l’applicazione e il trasporto oppure dentro l’applicazione, secondo come la si racconta. In prova non si litiga sulla collocazione di TLS. Si dice: TLS protegge il flusso dell’applicazione prima che TCP lo trasporti, e sta sopra TCP.

Un router guarda l’IP e sceglie l’interfaccia. Non ha bisogno della porta per inoltrare, e un router puro non guarda il contenuto. Uno switch guarda il MAC e inoltra nella porta giusta della rete locale. Un firewall con stato guarda fino al trasporto e all’applicazione, secondo la sua regola: indirizzi, porte, e a volte il nome del sito. Dire «è di livello 3» significa: decide sugli indirizzi IP. Dire «è di livello 7» significa: capisce HTTP e può vietare un percorso. La frase va agganciata a un apparato del proprio disegno.

Incapsulamento, da ricordare con una frase. Il messaggio HTTP sta dentro un segmento TCP, che sta dentro un pacchetto IP, che sta dentro una trama Ethernet. Ogni strato aggiunge la sua intestazione e non guarda, di norma, quelle interne. Quando qualcosa non funziona, si chiede a quale strato: il cavo è fisico, la VLAN è collegamento, il piano di indirizzi è rete, la porta chiusa è trasporto, il certificato è sopra. Localizzare lo strato è metà della risposta.

### Esempio

Una pagina che non si apre. Se il cavo è staccato o la spia del collegamento è spenta, il problema è fisico. Se c’è collegamento ma non si raggiunge nessun indirizzo IP, si guarda indirizzo, maschera e router. Se il ping verso un indirizzo funziona e il nome no, si guarda il DNS, in alto. Se il nome si risolve e la pagina no, si guardano porta, firewall e servizio HTTP. I livelli servono a non cambiare tutto insieme.

### In sede di prova

Elencare i sette livelli in ordine, con un protocollo o un apparato per i quattro che contano di più: fisico, collegamento, rete, trasporto, applicazione. Dire che TCP/IP è il modello in esercizio e OSI è il modello di ragionamento. Una frase sull’incapsulamento distingue chi ha capito da chi ha memorizzato una lista.

### Errori da evitare

- Mettere lo switch al livello di rete e il router al livello di collegamento.
- Dire che TCP e IP sono allo stesso livello.
- Attribuire al livello di rete la garanzia di consegna. Quella, se c’è, è di TCP.

### Svolgimento da consegnare
Il modello OSI e la famiglia TCP/IP non sono due reti diverse. Sono due modi di descrivere la stessa comunicazione, dividendola in livelli perché un'applicazione non debba conoscere i cavi e un cavo non debba conoscere il significato di una pagina web. OSI ha sette livelli ed è il linguaggio con cui si ragiona e si diagnostica. TCP/IP, quella davvero usata su Internet, ne raggruppa quattro. Saperli accostare vale più che recitarne uno solo.

Dal basso, il livello fisico trasmette bit su rame, fibra o radio. Il collegamento trasferisce trame fra nodi della stessa rete locale e usa gli indirizzi MAC: qui sta lo switch. La rete instrada i pacchetti fra reti diverse e usa gli indirizzi IP: qui sta il router, e non garantisce che il pacchetto arrivi. Il trasporto fa comunicare due processi, non due macchine: la porta dice quale applicazione, TCP aggiunge connessione, ordine e ritrasmissione, UDP spedisce senza queste garanzie. Sessione e presentazione, nel modello OSI, esistono come livelli distinti; nella pratica sono assorbiti dal trasporto e dall'applicazione. L'applicazione è HTTP, DNS, SMTP, SSH: il protocollo, non il programma.

TCP/IP accorpa fisico e collegamento nell'accesso alla rete, tiene Internet come livello di rete, tiene il trasporto, e accorpa in un solo livello applicativo ciò che OSI separa in sessione, presentazione e applicazione. L'incapsulamento è il gesto da descrivere. L'applicazione prepara i dati. Il trasporto aggiunge le porte. La rete aggiunge gli indirizzi IP degli estremi. Il collegamento aggiunge gli indirizzi MAC della sola tratta, che cambiano a ogni salto. All'arrivo ogni livello toglie la propria intestazione. Per questo un router può riscrivere la trama e non deve riscrivere l'indirizzo IP di destinazione finale.

Lo schema serve anche a non cambiare tutto insieme quando qualcosa non funziona. Cavo spento: fisico. Indirizzo e router: rete. Il nome non si risolve ma l'indirizzo risponde: DNS, in alto. Il nome si risolve e la pagina no: porta, firewall o servizio. In un tema di progettazione, i livelli giustificano il disegno. Lo switch non sostituisce il router. Il firewall non sta «al livello dell'applicazione» solo perché è un apparecchio costoso: si dice quali campi guarda.

```disegno
titolo: Incapsulamento di una richiesta, da sinistra verso il filo
passo: 7-5 Applicazione. Il browser prepara la richiesta HTTP.
passo: 4 Trasporto. Si aggiungono le porte, per esempio 51514 verso 443, e TCP.
passo: 3 Rete. Si aggiungono gli IP del client e del server. Restano quelli per tutta la strada.
passo: 2 Collegamento. Si aggiungono i MAC della sola tratta, fino al prossimo switch o router.
passo: 1 Fisico. I bit viaggiano sul cavo o sulla rete senza fili.
nota: Al router successivo la busta di livello 2 si rifà. Gli indirizzi IP non diventano quelli del router.
```

### Approfondire

- [Modello OSI](https://it.wikipedia.org/wiki/Modello_OSI)
- [Fondamenti di rete](https://learn.microsoft.com/it-it/training/modules/network-fundamentals/)

## Hub, switch, router, firewall e access point

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** switch, router, firewall, MAC, IP
**Semaforo:** verde

### Inquadramento

Ogni dispositivo si definisce con che cosa legge. L'hub ripete tutto a tutti. Lo switch inoltra in base al MAC, sulla rete locale. Il router inoltra in base all'IP, fra reti. Il firewall decide se un flusso è ammesso. L'access point è il tratto radio, e non è una VPN. Sul foglio si mette ciascuno in una zona del disegno e si scrive che cosa non sa fare. Un firewall che lascia passare tutto, perché tanto c'è l'applicazione, non sta filtrando.

### Definizione

Sono apparati diversi, anche quando stanno nello stesso contenitore commerciale. Si distinguono per la decisione che prendono e per l’indirizzo che leggono.

### Le decisioni

L’hub ripete su tutte le porte ogni segnale ricevuto. Tutti gli host condividono il mezzo e possono entrare in collisione. Non ha un uso ragionevole in una rete nuova. Capirlo serve a capire lo switch.

Lo switch impara quale indirizzo MAC si trova su quale porta, osservando il traffico, e inoltra la trama solo alla porta giusta. Separa i domini di collisione. Non separa, da solo, i domini di broadcast: una trama inviata a tutti attraversa ancora lo switch, salvo che si usino le VLAN. Lo switch non decide un percorso fra reti IP diverse. Uno switch di livello 3 esiste e sa anche instradare: se lo si cita, va detto che unisce le due funzioni, non che «lo switch è un router».

Il router collega reti IP diverse. Guarda l’indirizzo IP di destinazione, consulta una tabella di instradamento e inoltra il pacchetto al prossimo salto. È il confine fra la rete dell’ufficio e il resto. Senza un router, o senza un apparato che ne fa la funzione, due sottoreti non si parlano. Il router decrementa il contatore di vita del pacchetto e non inoltra i broadcast della rete locale: per questo spezza i domini di broadcast.

Il firewall filtra i flussi secondo regole. Può stare su un apparato dedicato, su una funzione del router, o su un host. Le regole guardano almeno indirizzi e porte, e nei firewall più capaci anche lo stato della connessione: si lascia uscire una richiesta e si lascia tornare la risposta corrispondente, senza per questo aprire la porta a chiunque. Un firewall non «blocca i virus» per il solo fatto di esserci. Blocca ciò che le regole gli dicono di bloccare.

L’access point collega gli host senza fili alla rete cablata. La sicurezza qui è l’autenticazione della rete senza fili e la separazione degli ospiti dalla rete interna, non il nome commerciale dell’antenna.

In un ufficio il disegno base è: gli host si attaccano allo switch, lo switch alla rete interna del firewall o del router, e solo il firewall ha il collegamento verso l’esterno. I server possono stare su uno switch dedicato, in una zona distinta.


### Nel dettaglio

L’hub ripete il segnale elettrico su tutte le porte. Ogni macchina sente il traffico delle altre, e le macchine non possono parlare insieme senza collidere. Non si progetta più una rete con un hub, e lo si nomina per contrasto: non separa, non filtra, non sa a chi sta parlando. Se in una domanda compare, la risposta è che va sostituito da uno switch.

Lo switch impara quali MAC stanno su quale porta, guardando il mittente delle trame, e inoltra la trama solo sulla porta del destinatario. Il traffico fra due PC non inonda gli altri. Non capisce gli indirizzi IP, salvo gli switch di strato 3, che sono router con molte porte. Una tabella MAC piena o avvelenata manda traffico dove non dovrebbe: è un motivo per non lasciare porte libere accese in un corridoio. Le porte si spengono o si mettono in una VLAN di parcheggio.

Il router collega reti diverse. Toglie la trama, guarda l’IP di destinazione, consulta la tabella di instradamento, e rimette una trama nuova sull’interfaccia giusta. È il confine fra la rete degli uffici e la rete dei server, e fra l’ente e l’esterno. Senza router, due reti con indirizzi diversi non si parlano. Il NAT, spesso fatto sul router di confine, riscrive l’indirizzo privato in un indirizzo pubblico, così più postazioni escono con pochi indirizzi. Il NAT non è un firewall: nasconde, non decide in base a una politica.

Il firewall decide se il passaggio è ammesso. Quello con stato ricorda le connessioni: se l’interno ha aperto la conversazione, la risposta entra; una connessione iniziata da fuori, no, salvo regole. Si mette al confine e anche fra zone interne. L’access point è il ponte fra il senza fili e il cavo. Autentica la postazione, cifra la tratta radio, e consegna il traffico a una VLAN. Non è il firewall dell’ente: una volta superato l’access point, il traffico è in rete e va filtrato come il resto. Sul foglio ogni apparato sta in un punto solo del disegno, con una frase sul criterio con cui inoltra o scarta.

### Esempio

Il PC di un ufficio ottiene un indirizzo dalla rete locale. Lo switch consegna le trame al PC giusto. Per raggiungere un sito esterno, il PC manda il pacchetto al router predefinito. Il firewall, davanti o dentro quel confine, consente la porta HTTPS in uscita e la risposta, e rifiuta un tentativo in ingresso verso una porta di amministrazione.

### In sede di prova

Quattro definizioni brevi, con il livello OSI accanto. Poi una frase sul percorso di un pacchetto dall’ufficio a Internet. Nel disegno della prima prova usare simboli diversi e una legenda: non un rettangolo unico chiamato «rete».

### Errori da evitare

- Usare switch e router come sinonimi.
- Mettere il database «dietro il firewall» e basta, senza dire che il firewall deve anche impedire ai PC di parlargli direttamente.
- Credere che un firewall con la configurazione di fabbrica sia una politica di sicurezza.

### Approfondire

- [Switch](https://it.wikipedia.org/wiki/Switch)
- [Router](https://it.wikipedia.org/wiki/Router)
- [Fondamenti di rete](https://learn.microsoft.com/it-it/training/modules/network-fundamentals/)

## Indirizzi IPv4, CIDR, sottoreti e NAT

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** IPv4, CIDR, subnet, NAT, privati
**Semaforo:** verde

### Inquadramento

L'indirizzo identifica un'interfaccia. La maschera dice quanta parte è rete e quanta è nodo. CIDR è il modo di scrivere quella maschera. Le sottoreti dividono un blocco in reti più piccole, per zone. Il NAT permette a indirizzi privati di uscire con un indirizzo pubblico, e non è una misura di autorizzazione. Sul foglio si fa una divisione piccola, con i numeri, e si dice quale blocco è degli uffici, quale dei server, quale dei dati. Gli indirizzi privati non si annunciano su Internet.

### Definizione

Un indirizzo IPv4 identifica un’interfaccia di rete, non «un computer» in astratto: un host con due schede ha due indirizzi. È un numero di 32 bit, scritto di solito come quattro ottetti decimali, per esempio 192.168.1.10. La maschera di sottorete, o il prefisso CIDR, dice quanti di quei bit identificano la rete e quanti identificano l’host dentro la rete.

### Classi, CIDR e numeri che conviene saper fare

Le classi storiche A, B e C fissavano il confine in punti rigidi, a 8, 16 e 24 bit. Sono superate dall’instradamento senza classi, CIDR, in cui il prefisso si scrive dopo la sbarra. /24 significa 24 bit di rete e 8 di host: 256 indirizzi teorici, di cui il primo è l’indirizzo della rete e l’ultimo è il broadcast, quindi 254 host. /25 ne dimezza lo spazio. /26 lo dimezza ancora. Sapere leggere /24, /25 e /26, e sapere che allungare il prefisso rimpicciolisce la sottorete, basta per l’esame. Il subnetting è proprio questo: prendere un blocco e dividerlo in sottoreti più piccole, per uffici, per funzioni, per sicurezza.

Alcuni blocchi non si instradano su Internet pubblica e sono destinati alle reti interne. I più usati sono 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Un indirizzo come 192.168.1.10 può ripetersi in milioni di uffici, perché non è unico al mondo: è unico solo dentro quella rete.

Il NAT, traduzione degli indirizzi di rete, è il meccanismo con cui un router riscrive gli indirizzi privati in un indirizzo pubblico quando il traffico esce, e rifà il contrario quando torna la risposta. Permette a molti host di condividere un solo indirizzo pubblico. Complica le connessioni iniziate dall’esterno, che infatti si evitano: sono i server pubblici, con indirizzi e regole esplicite, a ricevere connessioni in ingresso, non i PC degli uffici.

L’indirizzo di un host va insieme a tre compagni: la maschera, l’indirizzo del router predefinito, e l’indirizzo di almeno un DNS. Senza router predefinito l’host parla solo con la propria sottorete. Senza DNS parla solo se conosce già l’indirizzo numerico.

Due host comunicano direttamente solo se stanno nella stessa sottorete. Altrimenti mandano il pacchetto al router. Mettere a mano un indirizzo già usato da un altro host crea un conflitto, intermittente e fastidioso. Per questo in una rete di ufficio gli indirizzi li assegna di norma il DHCP, con una riserva fissa per server e stampanti.


### Nel dettaglio

Un indirizzo IPv4 è trentadue bit, scritti in quattro numeri da zero a duecentocinquantacinque. La maschera dice quanti bit a sinistra identificano la rete e quanti a destra identificano l’host. In notazione CIDR il numero dopo la barra è il conteggio dei bit di rete. Una /24 ha ventiquattro bit di rete e otto di host: duecentocinquantaquattro indirizzi usabili, perché il primo è l’indirizzo della rete e l’ultimo è il broadcast. Una /25 ne ha centoventisei usabili. Una /26 ne ha sessantadue. Il conto si rifà dimezzando: da /24 a /25 si taglia a metà, e si perde un indirizzo di rete e uno di broadcast per ogni pezzo.

Gli indirizzi privati, quelli che non si annunciano su Internet, stanno in tre intervalli: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Dentro l’ente si usano questi. L’indirizzo pubblico sta sul confine. Il NAT traduce il privato in pubblico quando si esce, e tiene una tabella per far tornare la risposta al mittente giusto. Più host condividono un pubblico distinguendo le porte: è il PAT, e in pratica è ciò che un ufficio usa. Una connessione iniziata da fuori non trova la strada, se non si è pubblicata una regola. Questo non sostituisce il firewall.

Dividere in sottoreti non è un esercizio di aritmetica fine a sé. Ogni zona ha la sua sottorete: uffici, server, gestione, ospiti. Il traffico fra zone passa dal firewall, che può vietarlo. Se tutti stanno in una /16 piatta, una postazione compromessa parla direttamente con i server. Il piano di indirizzi si scrive prima dei cavi. Si lascia margine: una /24 per gli uffici di un piano si esaurisce, una /23 costa poco e evita di rinumerare. Il gateway è un indirizzo della sottorete, di solito il primo usabile, ed è il router a cui si consegna ciò che non è locale.

Sul foglio, per il proprio tema, si assegnano tre sottoreti con maschera e gateway, e si dice quale può iniziare connessioni verso quale. I numeri possono essere tondi. Devono tornare: l’host e il gateway nella stessa rete, il broadcast fuori dagli host, nessuna sovrapposizione.

### Esempio

Una rete di un piano, 192.168.10.0/24, contiene i PC. Un’altra, 192.168.20.0/24, contiene i server. Fra le due c’è un router o un firewall, che lascia passare solo le porte necessarie. I PC escono verso Internet con NAT sull’indirizzo pubblico dell’ente. Il server del portale, se deve essere raggiunto da fuori, ha una pubblicazione esplicita di una sola porta, non un NAT generico di tutta la macchina.

### In sede di prova

Scrivere un indirizzo, dire che cosa indica la sbarra, e fare un esempio di due sottoreti che non si parlano senza router. Citare i blocchi privati e il NAT. Nel disegno di un progetto assegnare due reti diverse ai client e ai server: è un segno di ordine, anche se gli indirizzi precisi sono di esempio.

### Errori da evitare

- Dire che 192.168.1.1 è un indirizzo pubblico.
- Confondere la porta TCP con l’indirizzo IP.
- Fare subnetting scrivendo numeri incompatibili con il prefisso. Se non si è sicuri del calcolo, descrivere la suddivisione a parole invece di inventare l’intervallo.

### Approfondire

- [CIDR](https://it.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
- [Indirizzo IP](https://it.wikipedia.org/wiki/Indirizzo_IP)
- [Microsoft Learn, fondamenti di indirizzamento](https://learn.microsoft.com/it-it/training/modules/network-fundamentals/)

## IPv6, in ciò che serve dirne

**Prove:** seconda prova gruppo 1, orale
**Tag:** IPv6, 128 bit
**Semaforo:** giallo

### Inquadramento

IPv6 allunga lo spazio degli indirizzi e cambia il modo di scriverli e di configurare un nodo. Per l'esame basta dire che cosa risolve, convivere con IPv4 per un periodo lungo, e che firewall e permessi vanno rifatti anche sul nuovo protocollo: lasciare IPv6 aperto e non amministrato è un ingresso. Sul foglio si dedica un capoverso, non una seconda teoria degli indirizzi. Si dice se l'ente lo usa già o se il tema resta in IPv4, e lo si dichiara.

### Definizione

IPv6 è la versione dell’Internet Protocol pensata per superare l’esaurimento degli indirizzi IPv4. Un indirizzo IPv6 è lungo 128 bit, scritto in esadecimale a gruppi. Lo spazio è abbastanza grande da rendere inutile, nella progettazione ordinaria, il NAT come espediente per la scarsità.

### Che cosa dire, e che cosa non inventare

IPv6 non è «più sicuro per definizione» nel senso che le applicazioni diventino sicure da sole. IPsec è stato progettato per integrarsi bene, ma la sicurezza di un servizio continua a dipendere da configurazione, identità e aggiornamenti. IPv6 non elimina i firewall.

Convive a lungo con IPv4. Un host può avere entrambi gli indirizzi, e un servizio può essere raggiungibile in un solo dei due modi. In una rete che si crede «solo IPv4» gli host moderni possono comunque avere un indirizzo IPv6, e una regola di firewall scritta solo per IPv4 lascia quella strada senza controllo. È un punto da adulti, e in un orale fa la differenza.

L’indirizzo link-local, che inizia con fe80, serve sulla tratta locale e non si instrada. L’indirizzo globale è quello con cui si esce. Esistono anche indirizzi locali unici per le reti interne, diversi dai privati IPv4 ma con uno scopo simile di non essere pubblici.

Per l’esame non serve comprimere a memoria gli zeri di un indirizzo. Serve sapere perché IPv6 esiste, quanto è lungo, che il NAT non è il suo modello naturale, e che il firewall deve tenerne conto.


### Nel dettaglio

IPv6 è centoventotto bit, scritti in esadecimale a gruppi. Lo spazio è così largo che la scarsità, motivo del NAT in IPv4, non si pone allo stesso modo. A un ente può arrivare un prefisso ampio, e ogni host può avere un indirizzo pubblico univoco. Il NAT smette di essere necessario per risparmiare indirizzi. Non smette di esistere come scelta di nascondere la rete interna, ma non è più il pilastro. In un tema, se si resta in IPv4, lo si dice. Se si nomina IPv6, non si disegna poi un NAT identico «per abitudine» senza una ragione.

L’autoconfigurazione è il punto pratico. Un host può costruirsi un indirizzo a partire dal prefisso annunciato dal router, senza un DHCP identico a quello di IPv4. Esiste anche un DHCP per IPv6, quando l’ente vuole registrare chi ha preso che cosa. Il link-local, l’indirizzo che esiste solo sulla tratta, c’è sempre ed è quello con cui gli apparati si parlano da vicini. Non si usa per raggiungere un server in un’altra rete.

La convivenza dura da anni e va detta in modo operativo. Dual stack: l’host ha entrambi gli indirizzi, e preferisce IPv6 quando il destinatario ha un IPv6. Il tunnel e la traduzione esistono per i passaggi, e in un elaborato non si costruisce una rete su un tunnel se non c’è un motivo. I firewall devono filtrare IPv6 davvero. Una rete «IPv4 filtrata» con IPv6 acceso e senza regole è una seconda rete aperta: molti sistemi provano IPv6 da soli. Se l’ente non lo usa, si spegne in modo controllato. Se lo usa, le regole di zona si riscrivono anche per lui.

Sul foglio bastano quattro frasi. Indirizzo largo, NAT non più necessario per scarsità, autoconfigurazione dal prefisso, e il firewall che deve conoscere il protocollo che è acceso. Non serve calcolare a mano un piano IPv6 completo, salvo che la domanda lo chieda.

### Esempio

Un ente pubblica un sito. Il nome DNS ha un record A, che dà l’indirizzo IPv4, e un record AAAA, che dà l’IPv6. Se il server ascolta solo su IPv4, gli utenti che arrivano con IPv6 falliscono, o ricadono sull’altro protocollo se il sistema ci riesce. La pubblicazione si prova su entrambi.

### In sede di prova

Quattro frasi: lunghezza, motivo, convivenza con IPv4, firewall e DNS che devono conoscere entrambi. Non improvvisare una configurazione.

### Errori da evitare

- Dire che IPv6 ha 64 bit.
- Dire che con IPv6 non servono più regole di sicurezza.
- Trattare IPv6 come un’opzione lontana che i PC in sala non hanno già attivato.

### Approfondire

- [IPv6](https://it.wikipedia.org/wiki/IPv6)

## TCP e UDP

**Prove:** seconda prova gruppo 1, orale
**Tag:** TCP, UDP, porta, handshake
**Semaforo:** verde

### Inquadramento

TCP stabilisce una conversazione, ritrasmette, mette in ordine, e costa di più. UDP spedisce e non promette: va bene quando perdere un pezzo è meglio che arrivare tardi, o quando un altro livello recupera. Sul foglio si assegna un protocollo dell'applicazione a TCP, per esempio HTTPS, e uno a UDP, per esempio una ricerca DNS. Si nominano le porte solo per dire quale programma riceve. Affidabile non vuol dire cifrato: la cifratura è TLS, un altro strato.

### Definizione

TCP e UDP sono i due protocolli di trasporto della suite TCP/IP. Entrambi usano le porte per distinguere le applicazioni su uno stesso host. TCP costruisce una connessione affidabile e ordinata. UDP spedisce messaggi indipendenti, senza connessione e senza garanzia di consegna.

### Che cosa aggiunge TCP, e perché ha un costo

Una comunicazione TCP inizia con uno scambio in tre passi, il three-way handshake: il client propone, il server accetta, il client conferma. Solo dopo viaggiano i dati dell’applicazione. Ogni ottetto ha un numero di sequenza. Il ricevente conferma ciò che è arrivato. Ciò che manca viene ritrasmesso. L’ordine viene ricostruito. Il flusso viene rallentato se un lato non sta dietro, e se la rete perde pacchetti TCP riduce la velocità per non aggravare la congestione.

Questo rende TCP adatto a tutto ciò che non può perdere pezzi: pagine web, posta, trasferimenti di file, sessioni di amministrazione. Il costo è il ritardo iniziale della connessione e il costo delle conferme. Per una lettera di una query SQL il costo è il benvenuto. Per un flusso in cui un pacchetto in ritardo non serve più, come una telefonata, ritrasmettere è controproducente.

UDP non apre una connessione e non ritrasmette. Il datagramma arriva, oppure no, oppure arriva doppio, oppure fuori ordine, e l’applicazione deve accettarlo. È leggero. Lo usano le interrogazioni DNS classiche, molte trasmissioni multimediali, e alcuni protocolli di gioco o di scoperta in rete locale. Sempre più spesso un’applicazione che vorrebbe il controllo senza tutto il comportamento di TCP lo costruisce sopra UDP: è il caso di QUIC, che trasporta HTTP/3. Per l’esame basta sapere che «usa UDP» non significa «non ha controllo»: significa che il controllo, se c’è, sta sopra.

La porta è un numero fra 0 e 65535. Le porte note identificano servizi standard: 443 è HTTPS, 22 è SSH, 53 è DNS, 25 è SMTP. La porta non è una password. Sapere che un servizio usa la 443 non lo rende sicuro; dice solo dove ascolta. Un servizio può ascoltare su una porta insolita, e un firewall che apre «tutte le porte alte» non sta applicando una politica.

TCP è connesso anche dal punto di vista del firewall: si può permettere un flusso iniziato dall’interno e rifiutare le connessioni iniziate dall’esterno. UDP, senza connessione, si controlla peggio con le stesse regole, ed è uno dei motivi per cui si aprono solo le porte UDP che servono.


### Nel dettaglio

TCP apre una connessione prima dei dati. Il cliente invia un segmento con il flag di sincronizzazione, il server risponde con sincronizzazione e conferma, il cliente conferma. Tre messaggi, e da lì i dati. Ogni segmento ha un numero di sequenza. Il ricevente conferma i byte arrivati. Se manca un pezzo, si ritrasmette. Se il ricevente è saturo, la finestra si chiude e il mittente rallenta. La chiusura è esplicita. Tutto questo costa messaggi e stato: ogni connessione occupa memoria sul server. Un server che accetta connessioni e non le chiude esaurisce le risorse. In un’applicazione, la connessione al database si tiene in un pool proprio per non rifare questo costo a ogni query, e però il pool ha un tetto.

UDP manda il datagramma e non chiede conferma. Non c’è connessione, non c’è ritrasmissione da parte del trasporto, non c’è ordine garantito. Costa poco e non aspetta. Si usa quando un dato vecchio non serve più: la voce, il video, una scoperta in rete, e quando è l’applicazione a voler gestire da sé la perdita, come fa DNS, che ritenta la domanda. Usare UDP per un aggiornamento di una pratica, perché «è più veloce», significa accettare di perderlo in silenzio. Non è una scelta da archivio.

Le porte sono il punto di esame insieme al protocollo. La porta distingue il processo sull’host. Il server ascolta su una porta nota: 443 per HTTPS, 5432 o 3306 per i database più citati, 22 per l’amministrazione remota. Il client usa una porta effimera, alta, per la sua parte di conversazione. Una regola di firewall che apre «il TCP» senza porta non ha senso. Una regola che apre una porta UDP pensando di aprire un servizio TCP non fa passare nulla. Si scrive protocollo e porta.

Il controllo di stato del firewall capisce il TCP meglio dell’UDP, proprio perché il TCP ha una connessione da ricordare. Per l’UDP lo stato è approssimato: si lascia entrare la risposta per un tempo breve. Sul foglio, per ogni freccia del disegno, si scrive TCP o UDP e la porta. HTTPS è TCP 443. DNS, nella forma usuale delle domande, è UDP 53, con TCP 53 quando la risposta è grande. Il database è TCP sulla sua porta, e quella porta non sta sul firewall di confine.

### Esempio

Il browser parla con il server in TCP sulla porta 443: perdere un segmento di una pagina non è accettabile. La risoluzione del nome, un messaggio breve, usa di norma UDP sulla porta 53; se la risposta non arriva, l’applicazione ripete la domanda. Una videoconferenza preferisce perdere un fotogramma che arrivare in ritardo con la ritrasmissione. Il backup notturno di un database usa TCP, perché un byte perso rende il backup inutile.

### In sede di prova

Confrontare in quattro dimensioni: connessione, affidabilità, ordine, costo. Dare un esempio per ciascuno. Nominare la porta come indirizzo del processo. Se si cita il three-way handshake, descriverlo in una frase, senza i flag, a meno di conoscerli davvero.

### Errori da evitare

- Dire che UDP è «TCP senza sicurezza». La sicurezza non è la differenza fra i due.
- Dire che TCP garantisce che il mittente sia chi dice di essere. TCP garantisce la consegna alla connessione, non l’identità. L’identità la aggiunge l’applicazione o TLS.
- Aprire una porta «perché il programma funzioni» senza dire quale programma e in quale direzione.

### Approfondire

- [TCP](https://it.wikipedia.org/wiki/Transmission_Control_Protocol)
- [UDP](https://it.wikipedia.org/wiki/User_Datagram_Protocol)
- [Porta](https://it.wikipedia.org/wiki/Porta_(reti))

## DNS e DHCP

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** DNS, DHCP, nome, indirizzo
**Semaforo:** verde

### Inquadramento

Il DNS traduce un nome in un indirizzo. Il DHCP assegna a un nodo l'indirizzo e i parametri, così non si configurano a mano cento postazioni. Un DNS interno dice dove sta il portale dell'ente. Un DNS avvelenato manda le persone altrove, ed è il motivo per cui il nome da solo non basta: ci vuole il certificato. Sul foglio si segue una richiesta dal nome fino all'indirizzo del proxy, e si dice chi assegna gli indirizzi degli uffici. Il database non si raggiunge per nome dalle postazioni.

### Definizione

Il DNS, Domain Name System, traduce nomi in indirizzi e altri dati associati a un nome. Il DHCP, Dynamic Host Configuration Protocol, assegna a un host la configurazione di rete: indirizzo, maschera, router predefinito, DNS da usare, e la durata di quell’assegnazione. Risolvono due problemi diversi. Uno trova un servizio. L’altro configura un host.

### Il DNS, abbastanza da spiegarlo

Lo spazio dei nomi è un albero. Un nome come portale.ente.it ha una zona che qualcuno amministra. Il risolutore dell’host, di solito quello ricevuto via DHCP, interroga i server DNS per conto dell’host e mette in cache le risposte per il tempo indicato dal record. Se la cache è sbagliata, per quel tempo l’errore si ripete: è la prima cosa che si controlla quando «il sito nuovo non si vede» e l’indirizzo è già stato cambiato.

I record che servono: A dà un indirizzo IPv4, AAAA un IPv6, CNAME è un alias verso un altro nome, MX indica i server di posta, TXT porta testi usati da verifiche e da politiche. NS indica chi è autorevole per la zona. Non serve elencarli tutti in un tema. Servono A e CNAME, e l’idea che la posta usi un record proprio, non il solo indirizzo del sito.

Il DNS è anche un punto di fiducia. Se un attaccante risponde al posto del DNS, l’utente arriva a un server falso con un nome vero. Per questo esistono, in reti curate, la validazione DNSSEC e, più semplicemente, l’uso di risolutori interni controllati invece di risolutori lasciati al caso. In un elaborato basta non mettere «un DNS pubblico qualsiasi» come configurazione dei server interni senza una frase.

Un nome interno, visibile solo dalla rete dell’ente, è utile per i servizi che non devono essere pubblicati. Il nome pubblico risolve solo ciò che è davvero pubblicato.

### Il DHCP

Quando un host si collega, se è configurato per l’assegnazione automatica, cerca un server DHCP, riceve un’offerta e accetta un indirizzo in affitto. Alla scadenza rinnova. Gli indirizzi tornano disponibili quando gli host se ne vanno. Per stampanti, server e apparati si fa una prenotazione: lo stesso indirizzo a quella scheda, così le regole di firewall non si rompono a ogni riavvio. I server più critici possono avere un indirizzo configurato a mano, purché sia escluso dal bacino automatico, altrimenti il DHCP lo assegnerà a qualcun altro.

Senza DHCP un ufficio di duecento persone si configura a mano, e gli errori di maschera sono garantiti. Senza DNS le persone dovrebbero ricordare gli indirizzi, e ogni cambio di server sarebbe un avviso a tutti gli utenti.


### Nel dettaglio

DNS traduce un nome in un indirizzo, ed è il motivo per cui gli utenti non inseguono i numeri. La risoluzione, in una rete di ente, parte dalla postazione, che chiede al risolutore interno. Il risolutore, se non ha la risposta in cache, chiede ai server dei domini, dalla radice verso il dominio, e consegna la risposta con un tempo di vita. Durante quel tempo non richiama. Un cambiamento di indirizzo non è istantaneo per tutti: chi ha in cache il vecchio lo usa finché il tempo non scade. Prima di una migrazione si abbassa il tempo di vita, si aspetta, poi si cambia. Farlo il giorno stesso, con un tempo di vita di un giorno, significa un giorno di utenti divisi fra vecchio e nuovo.

I record che servono in un tema sono pochi. A, il nome verso IPv4. AAAA, verso IPv6. CNAME, un alias verso un altro nome, non verso un indirizzo, e non si mette su un nome che ha già altri record. MX, dove arriva la posta del dominio. PTR, l’inverso, dall’indirizzo al nome, utile nei controlli della posta. NS, chi è autorevole per la zona. Autorevole è il server che possiede la zona. Il risolutore dell’ente non è autorevole per i nomi del mondo: li cerca e li ricorda. È autorevole, se così si è deciso, per i nomi interni.

DNS è un punto di fiducia. Se un attaccante risponde al posto del risolutore, manda gli utenti su un server suo, con un nome vero. Per questo il risolutore interno è quello configurato sulle postazioni, via DHCP, e le postazioni non interrogano un risolutore aperto qualunque. Le zone interne non si pubblicano all’esterno. Il nome del database non deve risolversi da Internet.

DHCP assegna l’indirizzo e, insieme, il gateway, la maschera, i DNS, e a volte altre opzioni. La postazione chiede, il server offre, la postazione accetta, il server conferma, per un tempo di locazione. Alla scadenza si rinnova. Una stampante o un server non prendono l’indirizzo a caso: si prenota l’indirizzo per quel MAC, oppure si assegna a mano un indirizzo fuori dal mucchio dinamico, così non si collide. Due server DHCP sulla stessa rete, non coordinati, danno due visioni e guasti intermittenti difficili da vedere. Lo scope è uno per sottorete, con un margine di indirizzi liberi. Sul foglio: i nomi interni li risolve il DNS dell’ente, gli indirizzi delle postazioni li dà il DHCP, i server hanno indirizzi stabili, e il tempo di vita si abbassa prima di un trasloco.

### Esempio

Un PC dell’ufficio si accende, riceve via DHCP l’indirizzo 10.1.8.40, il router 10.1.8.1 e il DNS interno. L’utente scrive il nome del portale. Il DNS interno risolve il nome privato verso l’indirizzo del reverse proxy. Lo stesso nome, chiesto da casa, non esiste oppure risolve verso un accesso pubblicato diverso. Quando si sposta il portale su un nuovo server si cambia il record DNS, non duemila configurazioni di PC.

### In sede di prova

Aprire con la distinzione, che è la domanda più frequente: DNS traduce nomi, DHCP assegna la configurazione. Poi una frase ciascuno sul guasto tipico. Nel progetto, mettere entrambi nel disegno della rete interna e dire chi risolve i nomi pubblici dei servizi.

### Errori da evitare

- Invertire le due sigle. È un errore che costa, perché è elementare.
- Dire che il DNS «assegna gli indirizzi IP».
- Pubblicare all’esterno nomi interni di server di amministrazione.

### Approfondire

- [DNS](https://it.wikipedia.org/wiki/Domain_Name_System)
- [DHCP](https://it.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

## HTTP, HTTPS e i codici che significano qualcosa

**Prove:** seconda prova gruppo 1, seconda prova gruppo 2, prima prova
**Tag:** HTTP, TLS, metodi, codici di stato
**Semaforo:** verde

### Inquadramento

HTTP è il dialogo di richiesta e risposta. HTTPS è lo stesso dialogo dentro TLS. I codici che servono in un tema sono pochi e precisi: 200, 201, 400, 401, 403, 404, 409, 500. 401 è identità mancante. 403 è identità presente e permesso negato. 409 è un conflitto, la sala appena presa da un altro. Sul foglio si lega un codice a un requisito. Un errore 500 non mostra la query. Il lucchetto senza un nome giusto nel certificato non è il portale atteso.

### Definizione

HTTP è il protocollo applicativo con cui un client chiede una risorsa a un server e riceve una risposta. È testuale, senza stato, organizzato in metodi, URL, intestazioni e corpo. HTTPS non è un protocollo diverso nei metodi: è HTTP dentro un canale TLS, che autentica il server e cifra la comunicazione.

### Metodi, stato e codici

GET legge e non dovrebbe modificare dati. POST invia dati per creare un effetto, per esempio un nuovo ticket. PUT sostituisce una risorsa. PATCH la modifica in parte. DELETE la elimina. La distinzione conta quando si progetta un’interfaccia a servizi e quando si ragiona di cache e di ripetizione: una GET ripetuta è innocua, una POST ripetuta può creare due volte.

HTTP non ricorda l’utente. Lo stato si aggiunge con cookie di sessione o con token. Un cookie di sessione serio ha gli attributi che gli impediscono di essere letto da script, se non serve, e di viaggiare solo su HTTPS.

Il codice di stato è la prima riga della risposta. 200 la richiesta è riuscita. 201 è stato creato qualcosa. 301 o 302 la risorsa è altrove. 400 la richiesta è malformata. 401 manca l’autenticazione o non è valida: il server non sa chi sei. 403 l’identità c’è e non ha il permesso: il server sa chi sei e rifiuta. 404 la risorsa non c’è. 500 il server ha avuto un errore interno. Confondere 401 e 403 è un errore da non fare, perché è la stessa distinzione fra autenticazione e autorizzazione.

TLS, davanti a HTTP, fa tre cose che vanno dette: il client verifica di parlare con il server giusto, grazie al certificato; i due concordano chiavi di sessione; il traffico successivo è cifrato e non alterabile senza che si noti. Il certificato è emesso da un’autorità che il client già riconosce, oppure da un’autorità interna dell’ente, installata sui client dell’ente. Un certificato scaduto o un nome che non coincide fanno comparire l’avviso. Ignorare l’avviso, nei sistemi interni, insegna agli utenti a cliccare comunque: è una pessima misura organizzativa.

HTTPS protegge il transito. Non protegge un server già compromesso, non sostituisce il controllo dei permessi, e non rende legittimo un sito solo perché il lucchetto è chiuso. Il lucchetto dice che il canale è protetto fino a quel nome, non che il contenuto sia benigno.


### Nel dettaglio

Una richiesta HTTP ha un metodo, un percorso, intestazioni e, se serve, un corpo. GET legge e non deve modificare: si può ripetere, si può mettere in cache, un bilanciatore può ritentarlo. POST e PUT modificano. POST su una collezione crea, PUT sostituisce una risorsa nota, PATCH modifica una parte, DELETE elimina. Mettere una cancellazione su un GET, perché «è più comodo da chiamare», la espone a prefetch, a cache, a un semplice ritento. In un’API i metodi si rispettano. In un modulo tradizionale il browser manda POST.

HTTPS non è un protocollo diverso nei metodi. È HTTP dentro TLS. TLS, prima dei dati, verifica il certificato e accorda le chiavi. Da lì il metodo, il percorso e il corpo viaggiano cifrati. Il nome del sito, nella forma attuale con l’indicazione del nome in chiaro all’inizio, è visibile a chi sta sulla rete: si vede dove si è collegati, non che cosa si è chiesto. Un firewall che filtra solo per indirizzo non vede il percorso. Uno che termina TLS e lo riapre vede tutto, ed è un punto delicato: può farlo il reverse proxy dell’ente, non un apparato qualunque in mezzo.

I codici si raggruppano. Duecento è andato a buon fine, duecentouno è creato. Trecento reindirizza: il client deve rifare la richiesta altrove, e un trecentodue dopo un login è normale. Quattrocento è errore del client: quattrocentouno manca l’autenticazione, quattrocentotre l’autenticazione c’è ma il permesso no, quattrocentoquattro la risorsa non c’è, quattrocentoventinove se ne sono chieste troppe. Cinquecento è errore del server: il servizio è in colpa, e un cinquecentotre dice che è temporaneamente non disponibile. In un elaborato i codici diventano comportamento. Credenziali sbagliate: quattrocentouno, senza dire se è sbagliato l’utente o la password. Permesso mancante: quattrocentotre. Validazione: quattrocento, con il campo. Guasto: cinquecento, senza mostrare la query.

Le intestazioni che vale la pena nominare sono poche. Il cookie di sessione, con i suoi attributi. La lunghezza e il tipo del corpo. L’indicazione di non mettere in cache le pagine private. Un’intestazione di controllo, usata con criterio, contro alcuni attacchi di contenuto attivo. Non serve un catalogo. Sul foglio, una richiesta di esempio del proprio tema: metodo, percorso, codice di successo e un codice di rifiuto, e la frase che sotto c’è TLS.

### Esempio

Il browser chiede la pagina di login in GET. Invia le credenziali in POST, solo su HTTPS. Se sono errate il server risponde 401. Se sono corrette crea una sessione e le pagine successive portano il cookie. Un utente autenticato che apre l’amministrazione senza averne il ruolo riceve 403, non 401. Un identificativo di ticket inesistente produce 404. Un guasto del database produce 500, e il messaggio all’utente non contiene la query.

### In sede di prova

Definire HTTP, poi dire che cosa aggiunge TLS. Citare tre metodi e quattro codici, includendo per forza 401 e 403 distinti. In un progetto, scrivere HTTPS fra browser e server e indicare chi termina TLS, di solito il reverse proxy.

### Errori da evitare

- Dire che HTTPS cifra anche i dati nel database.
- Scambiare 401 e 403.
- Mandare credenziali in GET, dove restano negli indirizzi e nei log.

### Approfondire

- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)

## VLAN, DMZ e segmentazione

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** VLAN, DMZ, segmentazione, minimo privilegio di rete
**Semaforo:** verde

### Inquadramento

Una VLAN divide una rete fisica in reti logiche, così gli uffici non stanno sullo stesso segmento dei server. La DMZ è la zona esposta, fra fuori e dentro, per ciò che deve essere raggiunto e non deve vedere i dati. Segmentare limita un incidente allo spazio in cui è nato. Sul foglio si nominano le zone e, per ciascuna, chi può iniziare una connessione verso quale altra. La zona di gestione non si raggiunge dagli uffici. Una VLAN senza regole sul firewall è solo un'etichetta.

### Definizione

Segmentare una rete significa dividerla in zone fra le quali il traffico non passa se non per le regole che si scrivono. Una VLAN, rete locale virtuale, è una suddivisione logica di uno switch: porte in VLAN diverse non si parlano come se fossero sulla stessa rete, anche se stanno sullo stesso apparato fisico. Una DMZ, zona demilitarizzata, è un segmento esposto, in modo controllato, verso l’esterno, separato sia da Internet sia dalla rete interna.

### Perché si segmenta

Una rete piatta, in cui ogni PC raggiunge ogni server su ogni porta, trasforma un solo PC compromesso nell’accesso all’intero ente. La segmentazione applica alla rete il minimo privilegio. I PC degli uffici parlano con il proxy o con il reverse proxy, non con la porta del database. I telefoni e le telecamere, se ci sono, stanno in una rete propria: non hanno motivo di vedere i file dei dipendenti. Gli ospiti, sul senza fili, escono verso Internet e non entrano nella rete interna.

Le VLAN da sole non filtrano per applicazione. Isolano i broadcast e creano sottoreti distinte. Fra una VLAN e l’altra serve un apparato che instrada e, se si vuole sicurezza, che filtri: un firewall interno, non solo un router che «fa passare tutto». Scrivere «usiamo le VLAN» senza dire quali flussi sono ammessi è incompleto.

La DMZ ospita ciò che deve essere raggiunto dall’esterno: reverse proxy, posta in ingresso, un servizio pubblicato. Un attaccante che compromette la macchina in DMZ non è già nella rete dei database. Deve attraversare un’altra regola, più stretta. Il disegno classico è a tre zone: esterna, DMZ, interna. Il database sta nella zona più interna. Il reverse proxy in DMZ termina TLS e inoltra solo le richieste HTTP ben formate verso l’applicazione.

Anche l’amministrazione si segmenta. Le interfacce di gestione di switch, hypervisor e UPS non stanno nella stessa VLAN dei PC, e non stanno su Internet. È un errore comune e molto concreto.


### Nel dettaglio

Una VLAN è una rete logica sopra uno switch fisico. Porte diverse dello stesso apparato stanno in reti diverse, non si parlano direttamente, e il traffico fra loro passa da un router o da un firewall dove si può filtrare. Il cavo fra due switch trasporta più VLAN se è un trunk, marcando ogni trama con l’identificativo della VLAN. Una porta di utente non è un trunk: se lo fosse, la postazione potrebbe presentarsi nella VLAN dei server. È un errore di configurazione classico, e in un tema si dice che le porte di accesso hanno una VLAN sola e le porte libere sono spente.

La segmentazione minima di un ente piccolo ha quattro zone. Uffici, dove stanno le postazioni. Server, dove stanno i nodi applicativi. Dati, dove sta il database, raggiungibile solo dai nodi. Gestione, dove stanno le interfacce di amministrazione di switch, hypervisor, UPS, raggiungibile solo da poche postazioni. Gli ospiti, se esistono, stanno in un’altra ancora, che esce verso Internet e non entra verso i server. Il firewall fra le zone ha regole scritte per permesso, non una regola finale che permette tutto «tanto siamo interni».

La DMZ è la zona esposta. Ci sta ciò che deve essere raggiunto da fuori: il reverse proxy, la posta di confine, un servizio pubblicato. Una macchina in DMZ può essere compromessa, e dal suo interno non si raggiunge il database. Si raggiunge, al massimo, il nodo applicativo su una porta, o meglio si raggiunge solo il proxy e il proxy parla con l’applicazione in un’altra zona. Mettere il database in DMZ «così l’applicazione ci arriva» annulla la DMZ.

Il nome della zona e la VLAN non bastano se le regole sono larghe. Due VLAN con una regola che le fa parlare su tutte le porte sono una rete sola con un’etichetta. Sul foglio si elencano le zone, che cosa ci sta, e una regola: da dove a dove, su quale porta, e il resto negato. Una zona in più, quella di gestione, è il dettaglio che fa sembrare il disegno pensato.

### Esempio

VLAN 10 uffici, VLAN 20 server applicativi, VLAN 30 database, VLAN 40 gestione apparati, VLAN 50 ospiti. Il firewall fra 10 e 20 consente solo HTTPS verso il reverse proxy. Fra 20 e 30 consente solo la porta del database, e solo dagli indirizzi degli application server. Dalla 50 non c’è alcuna regola verso le altre. La DMZ contiene solo il proxy pubblicato.

### In sede di prova

Definire VLAN e DMZ senza confonderle. Disegnare tre zone e due regole, non venti. Dire che la VLAN separa, e il firewall decide. Nel progetto della prima prova questo disegno vale punti, perché è «l’infrastruttura di rete necessaria al funzionamento» chiesta dal bando.

### Errori da evitare

- Mettere il database in DMZ perché «deve essere raggiunto dall’applicazione». L’applicazione lo raggiunge dalla zona applicativa, non da Internet.
- Credere che la VLAN cifri il traffico. Non lo cifra.
- Fare una sola VLAN «server» con applicazioni, database e backup che si vedono tutti.

### Approfondire

- [VLAN](https://it.wikipedia.org/wiki/VLAN)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## VPN e accesso remoto

**Prove:** seconda prova gruppo 1, prima prova, orale
**Tag:** VPN, accesso remoto, cifratura
**Semaforo:** giallo

### Inquadramento

La VPN porta un nodo esterno dentro una rete dell'ente, cifrando il tragitto. Non sostituisce l'autorizzazione sull'applicazione: una volta dentro, l'utente può solo ciò che il suo ruolo consente. L'accesso degli amministratori arriva da qui, con un secondo fattore, e non dalla rete degli ospiti. Sul foglio si dice chi usa la VPN, dove sbuca, e che cosa da lì non si raggiunge. Una VPN condivisa con una sola password, senza account individuali, non si sa revocare quando una persona lascia l'ente.

### Definizione

Una VPN, rete privata virtuale, è un canale cifrato costruito sopra una rete non fidata, di solito Internet, che fa comportare l’host remoto come se fosse collegato a una rete dell’ente, oppure collega fra loro due sedi. La cifratura protegge il transito. L’autenticazione decide chi può aprire il canale. Sono due cose distinte, e servono entrambe.

### I due usi da non mescolare

La VPN da sito a sito collega due firewall, per esempio due sedi, in modo stabile. Gli host non sanno di essere in VPN: vedono una rotta verso l’altra rete. Si usa per sedi distaccate e per un collegamento fra la sala dell’ente e un ambiente cloud.

La VPN di accesso collega una persona. Il portatile si autentica, riceve un indirizzo della rete remota o di una rete dedicata agli esterni, e raggiunge solo ciò che le regole gli consentono. «Connesso in VPN» non dovrebbe significare «dentro tutta la rete, come se fossi alla scrivania». Significa «dentro il perimetro deciso per gli esterni». Un amministratore e un consulente non ricevono le stesse rotte.

L’identità della VPN è un punto critico. Una password sola, senza secondo fattore, è debole, perché la VPN è raggiungibile da tutto Internet per definizione. Si usa un’autenticazione a più fattori e, dove serve, un controllo elementare sullo stato del portatile: non è un teorema, è la constatazione che un portatile infetto portato dentro la rete annulla buona parte della segmentazione.

La VPN non sostituisce HTTPS. Cifra il tratto fra il portatile e il firewall dell’ente. Fra il firewall e il server interno la protezione dipende da ciò che si è progettato. Le applicazioni web interne, raggiunte in VPN, possono comunque usare HTTPS. La difesa in strati non si interrompe perché «tanto c’è la VPN».

Esiste un’alternativa frequente per le sole applicazioni web: non dare accesso alla rete, ma pubblicare l’applicazione tramite un proxy di accesso con identità forte. L’utente arriva all’applicazione e a nient’altro. Per un portale di ticketing è spesso più sobrio di una VPN che apre la rete. La VPN resta necessaria quando servono protocolli diversi da HTTP, come l’amministrazione di un server.


### Nel dettaglio

La VPN costruisce un tunnel cifrato sopra una rete non fidata, e fa sì che la postazione remota sia, dal punto di vista degli indirizzi, dentro la rete dell’ente, oppure abbia accesso solo ad alcuni servizi. Le due forme vanno distinte. Il tunnel di rete mette la postazione in una sottorete interna: comodo, e pericoloso se la postazione di casa è compromessa, perché da lì si vede molto. L’accesso per applicazione pubblica solo i servizi scelti, e la postazione non diventa un membro della rete. Per un ente, la seconda forma è spesso quella da proporre: il dipendente raggiunge il portale e la posta, non l’intera sala.

Prima del tunnel c’è l’identità. La VPN non si apre con una chiave condivisa scritta uguale per tutti e tenuta per anni. Si apre con l’identità della persona, la stessa dell’ente, e un secondo fattore. Il certificato del dispositivo, in più, distingue il portatile dell’ente dal PC di casa. La sessione scade. Un portatile perso si revoca, e la revoca deve avere effetto senza aspettare la scadenza naturale di un certificato lungo.

Il tunnel protegge il percorso. Non protegge il dato una volta arrivato, e non sostituisce i permessi sull’applicazione. Un utente autenticato alla VPN è un utente autenticato alla rete, non un amministratore del database. Le regole dietro la VPN sono le stesse delle zone: dalla sottorete remota si raggiunge ciò che serve, sulla porta che serve. Lasciare che la VPN sbuchi davanti a tutto, perché «tanto è cifrata», sposta il problema di un metro.

Si dice anche che cosa non è una VPN. Il desktop virtuale è un accesso a una sessione, e può fare a meno di mettere la postazione in rete. L’HTTPS verso il portale è già un canale cifrato per quell’applicazione, e per molti temi basta, senza VPN. La VPN entra nel disegno quando serve raggiungere più di un servizio, o un servizio che non si vuole pubblicare. Sul foglio: chi può aprire il tunnel, con quale secondo fattore, dove sbuca, quali porte vede, e come si revoca un portatile.

### Esempio

Il tecnico di turno da casa apre la VPN con MFA. La sua profilazione gli lascia raggiungere solo la rete di amministrazione, e solo verso le porte di gestione. Il dipendente che consulta i propri ticket non usa la VPN: entra al portale pubblico con HTTPS e la propria identità, e non vede altro. Due bisogni, due soluzioni. Metterli entrambi «in VPN» sarebbe più largo del necessario.

### In sede di prova

Definire la VPN come canale cifrato e autenticato, non come «rendere sicuro Internet». Distinguere sito-sito e accesso personale. Dire che all’accesso seguono comunque le regole su che cosa si può raggiungere. Citare il secondo fattore.

### Errori da evitare

- Scrivere che la VPN cifra anche quando l’utente non la sta usando.
- Dare a tutti i client VPN l’accesso all’intera rete interna.
- Confondere VPN e VLAN.

### Approfondire

- [VPN](https://it.wikipedia.org/wiki/Virtual_private_network)

## Il disegno di rete di un elaborato

**Prove:** prima prova
**Tag:** schema di rete, zone, flussi
**Semaforo:** verde

### Inquadramento

Il disegno ha zone, non una nuvola. Uffici, server, dati, gestione. Sulle frecce il protocollo e la porta. La freccia che non c'è, dal browser al database, si scrive come nota. I nomi sono gli stessi del testo. Sul foglio si parte dai requisiti di chi parla con chi e si tracciano solo quei flussi. Un disegno con più tecnologie del testo è un secondo progetto. Si rilegge alla fine confrontando ogni server nominato nel tema con un rettangolo nel disegno.

### Definizione

Il disegno di rete di una prova di progettazione è lo schema dei nodi e dei flussi che permettono all’applicazione di funzionare in modo sicuro. Deve essere leggibile in un minuto e coerente con l’architettura software descritta prima.

### Che cosa deve comparire, e come lo si traccia

Si parte dagli utenti: interni, ed esterni se la traccia li prevede. Si mette la rete da cui arrivano. Si entra in un firewall. Si mette, se c’è esposizione, una DMZ con il reverse proxy. Si mette la zona applicativa con almeno due server se si è parlato di disponibilità, oppure uno solo se si è dichiarato un RTO compatibile con il fermo. Si mette la zona dati, con il DBMS e, separato, il backup. Si indicano switch e router solo dove servono a far capire il collegamento, senza disegnare l’armadio.

Su ogni freccia si scrive il protocollo e la direzione. Browser verso proxy: HTTPS, in ingresso. Proxy verso applicazione: HTTP o HTTPS, solo dalla DMZ. Applicazione verso database: la porta del DBMS, solo da quegli host. Amministratori verso la gestione: VPN e poi SSH o la console, non dalla rete degli uffici in chiaro.

Si scrive dove stanno DNS e DHCP, anche in un angolo, così non sembrano dimenticati. Si scrive chi assegna gli indirizzi alle due o tre sottoreti. Non serve calcolare tutte le sottoreti al bit se il tempo stringe: «sottorete uffici, sottorete applicazione, sottorete dati» è già una segmentazione.

Il disegno e il testo non si contraddicono. Se nel testo ci sono due nodi e nel disegno uno, il correttore non sa quale sia la proposta. Se nel testo il database è irraggiungibile da Internet e nel disegno sta davanti al firewall, il disegno vince come prova di confusione.

Si chiude con tre righe di disponibilità e di copia: dove sta il backup, se è fuori dalla stessa sala, e che cosa succede se cade un nodo applicativo.


### Nel dettaglio

Il disegno si fa dopo i dati e dopo i ruoli, e occupa una pagina, non tre. Si parte dagli utenti e si arriva al dato, nominando ogni salto. Postazione nell’ufficio, sulla VLAN degli uffici. Se è fuori sede, VPN o solo HTTPS, e lo si è già scelto. Firewall di confine. Reverse proxy nella DMZ, unica porta pubblica quattrocentoquarantatré. Nodi applicativi nella zona server, non raggiungibili direttamente dalle postazioni se si è stati rigorosi, oppure raggiungibili solo dal proxy. Database nella zona dati, porta del DBMS solo dagli indirizzi dei nodi. Gestione a parte.

Su ogni freccia stanno protocollo e porta, e un verso. Le frecce che mancano contano quanto quelle presenti: nessuna dal browser al database, nessuna da Internet alla gestione, nessuna dalla DMZ alla zona dati. Gli indirizzi si assegnano in modo schematico, una sottorete per zona, gateway indicato. Non serve un piano completo di ogni host. Serve che i numeri non si contraddicano.

Si aggiungono i pezzi che il resto del tema ha promesso. Se si è detto alta disponibilità, i nodi applicativi sono due e il bilanciatore pure, in due zone o almeno in due armadi. Se si è detto un solo nodo, si scrive che il suo guasto è un fermo accettato. Il backup ha una freccia verso un deposito che non sta nella stessa zona dati, altrimenti la copia muore con l’originale. L’amministrazione arriva da poche postazioni, con un protocollo ristretto, non da tutta la VLAN uffici.

Il disegno chiude con una frase di corrispondenza. Ogni zona ha un nome, un indirizzo, un elenco di ciò che contiene, e la regola di chi può entrare. Se un pezzo del tema, per esempio la posta o il DNS, non entra nel disegno, o si aggiunge o si dice che è un servizio già presente dell’ente e non parte di questo progetto. Inventare apparati che nessuna sezione usa è rumore. Omettere l’apparato da cui passa l’unica porta pubblica è un buco.

### Esempio

Per un portale interno di prenotazione: utenti sulla VLAN uffici, firewall interno, proxy e applicazione sulla VLAN server, database sulla VLAN dati, backup su un sistema che l’applicazione non può cancellare. Nessun flusso da Internet. L’accesso da fuori, se la traccia lo chiede, entra da VPN con MFA e arriva alla stessa VLAN uffici virtuale, non alla VLAN dati.

### In sede di prova

Disegnare prima di scrivere il paragrafo, così il paragrafo descrive il disegno. Usare una legenda. Controllare, nell’ultimo quarto d’ora, che ogni flusso del disegno sia necessario a un requisito e che ogni requisito di accesso abbia un flusso.

### Errori da evitare

- Un’unica nuvola chiamata «cloud» al posto della rete, se poi non si dice che cosa c’è dentro.
- Frecce senza protocollo.
- Il database raggiungibile dai PC «per comodità di manutenzione». La manutenzione passa da un percorso di amministrazione.

### Approfondire

- [Microsoft Learn, fondamenti di rete](https://learn.microsoft.com/it-it/training/modules/network-fundamentals/)

## Un subnetting guidato, con i numeri da rifare a mano

**Prove:** seconda prova gruppo 1, orale
**Tag:** CIDR, subnet, calcolo
**Semaforo:** verde

### Inquadramento

Il subnetting si impara rifacendo i conti, non guardandoli. Dato un blocco, si decide quante reti servono e quanto grandi, e si scrivono rete, primo indirizzo utile, ultimo e broadcast. Sul foglio si parte da un /24 degli uffici e lo si divide nelle zone del tema. Si controlla che i blocchi non si sovrappongano e che il numero di nodi basti, indirizzi di rete e broadcast esclusi. Un numero copiato a memoria, senza il passaggio, non si sa correggere se la traccia cambia il blocco.

### Definizione

Il subnetting divide un blocco di indirizzi in reti più piccole. Il prefisso dice quanti bit identificano la rete. Allungare il prefisso di un bit dimezza il numero di indirizzi e raddoppia il numero di sottoreti ottenibili da quel blocco. In prova non serve l'aritmetica di un /20 intero. Serve saper leggere /24, /25 e /26, disegnare due o tre reti che non si parlano senza un router, e non inventare un intervallo incompatibile con la maschera.

### I numeri che conviene saper ricostruire

Un /24 ha 24 bit di rete e 8 di host. Otto bit fanno 256 indirizzi. Il primo è l'indirizzo della rete, l'ultimo è il broadcast, restano 254 host. Esempio: 192.168.10.0/24 va da 192.168.10.0 a 192.168.10.255. Utilizzabili, in un uso ordinario, da .1 a .254. Il .1 si lascia spesso al gateway.

Un /25 prende metà di quel blocco: 128 indirizzi, 126 host. 192.168.10.0/25 copre da .0 a .127. 192.168.10.128/25 copre da .128 a .255. Sono due reti. Un host 192.168.10.20 e un host 192.168.10.200 non si parlano direttamente, anche se a occhio «stanno entrambi nella 192.168.10». Senza un router, o un firewall che instrada, non si vedono. Questo è il punto didattico del subnetting, non il virtuosismo.

Un /26 ha 64 indirizzi, 62 host. Dal blocco 10.1.8.0/24 si ottengono quattro /26: 10.1.8.0, 10.1.8.64, 10.1.8.128, 10.1.8.192. Si possono assegnare agli uffici, ai server, ai database e alla gestione. Se un calcolo in prova non torna, è meglio descrivere le quattro zone a parole che scrivere un intervallo sbagliato con sicurezza. Un intervallo sbagliato è un errore tecnico. Una zona nominata senza i bit è una scelta incompleta ma difendibile, se si dice che gli indirizzi esatti si fissano in esercizio senza cambiare le regole.

Gli indirizzi 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16 non si instradano su Internet. Si riusano in ogni ente. Il NAT, all'uscita, riscrive l'indirizzo privato in un indirizzo pubblico. Per questo i PC non accettano connessioni iniziate da fuori, e i server che devono essere raggiunti si pubblicano uno per uno, una porta per volta.

```disegno
titolo: Quattro /26 ricavati da 10.1.8.0/24
zona: 10.1.8.0/26 uffici | da .1 a .62, gateway .1
zona: 10.1.8.64/26 server applicativi | da .65 a .126
zona: 10.1.8.128/26 database | da .129 a .190, pochi host, regole strette
zona: 10.1.8.192/26 gestione apparati | da .193 a .254, nessuna strada da Internet
nota: Fra una zona e l'altra passa solo ciò che il firewall consente. Il /24 di partenza non resta una rete piatta.
```


### Nel dettaglio

Si parte da un blocco e lo si taglia su bisogni veri. L’ente ha 10.10.0.0/16. Servono: uffici, circa quattrocento postazioni, quindi non basta una /24, che ne tiene duecentocinquantaquattro. Una /23 ne tiene cinquecentodieci. Si assegna 10.10.0.0/23 agli uffici. Indirizzo di rete 10.10.0.0, broadcast 10.10.1.255, gateway 10.10.0.1, host da 10.10.0.2 in su. Server applicativi, pochi: una /26, sessantadue usabili, 10.10.2.0/26, gateway 10.10.2.1, broadcast 10.10.2.63. Database, ancora meno, e isolato: 10.10.2.64/26, così sta accanto ma è un’altra rete, e per passare serve il firewall. Gestione: 10.10.2.128/26. DMZ: 10.10.2.192/26. Il blocco 10.10.2.0/24 è così diviso in quattro /26, senza buchi e senza sovrapposizioni.

Il conto della /26 si verifica. Una /24 ha otto bit di host. Due bit in più di rete, da /24 a /26, fanno quattro sottoreti, e restano sei bit di host: sessantaquattro indirizzi, meno rete e broadcast, sessantadue. I confini cadono ogni sessantaquattro nel terzo ottetto: 0, 64, 128, 192. Un host 10.10.2.70 non sta nella prima /26, che finisce a 63. Sta nella seconda, quella del database. Mettere il gateway 10.10.2.1 su un host 10.10.2.70 è l’errore: gateway e host devono avere gli stessi bit di rete. Qui il gateway del database è 10.10.2.65.

La verifica da fare sempre è meccanica. Scrivere rete, primo host, ultimo host, broadcast. Controllare che il gateway sia dentro. Controllare che la rete successiva cominci esattamente dopo il broadcast. Controllare che due zone non condividano indirizzi. Un disegno con 10.10.2.10 nella zona server e 10.10.2.20 nella zona dati, con maschera /24 entrambe, è una rete sola, e il firewall fra loro non vede nulla se il traffico non gli passa: gli host si parlano direttamente. La maschera è ciò che decide se il traffico esce verso il gateway.

Sul foglio si rifà questo conto con i numeri del tema, piccoli se gli utenti sono pochi. Si scrive la tabella delle quattro zone. È il tipo di pagina che si prepara a casa e si ripete, perché i numeri, il giorno della prova, o tornano o si vedono subito.

### In sede di prova

Scrivere un blocco, il prefisso, quanti host restano, e due sottoreti che richiedono un router. Citare i privati e il NAT in tre righe. Se il tempo o il calcolo vacilla, fermarsi al /24 e al principio del dimezzamento, senza numeri inventati.

### Errori da evitare

- Dire che 192.168.10.20/25 e 192.168.10.200/25 sono nella stessa rete.
- Usare l'indirizzo di rete o il broadcast come indirizzo di un PC.
- Fare un piano di indirizzi e poi disegnare una rete sola.

### Approfondire

- [Indirizzo IP](https://it.wikipedia.org/wiki/Indirizzo_IP)
- [CIDR](https://it.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
- [Microsoft Learn, indirizzamento](https://learn.microsoft.com/it-it/training/modules/network-fundamentals/)

## Il percorso di una richiesta HTTPS, dall'utente al database

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** HTTPS, incapsulamento, zone
**Semaforo:** verde

### Inquadramento

Si segue una richiesta e non si saltano i passi. Nome, DNS, TCP verso il proxy, TLS, inoltro al nodo, controllo del ruolo, query parametrizzata, risposta. Il database vede solo il nodo, non il browser. Sul foglio i passi sono una sequenza, e accanto a ciascuno si dice che cosa morirebbe se quel passo mancasse. È la voce che tiene insieme reti, sicurezza e dati: va saputa ridire su qualunque traccia, cambiando solo il nome della risorsa.

### Definizione

Descrivere il percorso di una richiesta è il modo più compatto di mostrare, insieme, rete, applicazione e sicurezza. Si segue un solo gesto: il dipendente conferma un nuovo ticket. Si dice chi prepara il messaggio, chi lo cifra, chi decide se è lecito, chi lo scrive, e chi non lo vede.

### Il percorso, da riscrivere come racconto

Il browser ha già una sessione, oppure manda il dipendente all'identità dell'ente. Costruisce una richiesta POST verso il nome del portale. Il nome lo risolve il DNS interno, che restituisce l'indirizzo del reverse proxy, non quello del database e non quello di un nodo scelto dal browser. Il pacchetto esce dalla VLAN degli uffici con l'IP del PC e la destinazione del proxy, porta 443. Lo switch consegna in base al MAC solo sull'ultima tratta. Il firewall fra uffici e DMZ lascia passare solo quella porta e solo verso quell'indirizzo.

Il proxy presenta il certificato. Il browser controlla che il nome combaci, che la catena arrivi a un'autorità che già riconosce, che il certificato non sia scaduto. Poi i due concordano una chiave di sessione e il resto viaggia cifrato. Il proxy termina TLS: da lì in poi, sulla rete interna, può inoltrare in chiaro verso il nodo, oppure rifare un TLS interno. In un tema è accettabile dirlo e scegliere. Inoltra ai nodi sani, a turno. Un nodo che non risponde alla sonda non riceve richieste.

Il nodo applicativo ricostruisce l'utente dalla sessione. Non si fida del ruolo scritto nel modulo. Controlla che quell'utente possa aprire un ticket. Valida oggetto e descrizione. Apre una transazione sul database, che sta in un'altra VLAN, raggiungibile solo dagli IP dei nodi e solo sulla porta del DBMS. Inserisce la riga, ottiene il numero, fa commit. Risponde 201. Il proxy restituisce la risposta nel canale già cifrato. Il browser mostra il numero. Il log dell'operazione va a un server che il nodo applicativo non può cancellare.

Se il dipendente, subito dopo, cambia l'identificativo nell'indirizzo per leggere il ticket di un collega, il percorso di rete è lo stesso. Cambia la decisione del nodo: la query è filtrata per richiedente, il risultato non c'è, la risposta è 403. Il firewall non può fare questo controllo. Vede solo una richiesta HTTPS lecita.

```disegno
titolo: Una conferma di ticket, i punti in cui si decide
zona: Uffici | PC, DNS interno, switch
freccia: solo 443 verso il proxy
zona: DMZ | Firewall | Reverse proxy, certificato, bilanciamento
freccia: solo verso i nodi sani
zona: Applicazione | Controllo del ruolo, validazione, transazione
freccia: solo la porta del DBMS
zona: Dati | Database | Log su un sistema a parte
nota: Il DNS non restituisce l'indirizzo del database. Il firewall non conosce i ruoli. Il nodo non crede al browser.
```


### Nel dettaglio

Si segue un click, e a ogni salto si dice che cosa si aggiunge e che cosa si controlla. Il browser risolve il nome con il DNS dell’ente e ottiene l’indirizzo del reverse proxy, non quello del database e non quello del nodo applicativo. Apre TCP verso la porta quattrocentoquarantatré. Inizia TLS: il server manda il certificato, il browser controlla la catena, il nome, la data. Si accordano le chiavi. Da qui la richiesta HTTP viaggia cifrata. Il metodo e il percorso entrano nel proxy.

Il proxy termina TLS, quindi vede la richiesta. Applica i limiti: dimensione, percorso noto, magari un controllo grossolano. Apre una connessione verso un nodo applicativo sano, sulla rete interna, e inoltra. Il nodo riceve anche l’identità di rete del client originale in un’intestazione messa dal proxy, altrimenti vedrebbe solo il proxy. L’applicazione legge il cookie, ritrova la sessione, carica l’utente e il ruolo. Autorizza l’operazione su quell’oggetto. Valida i campi. Solo qui decide se l’operazione è lecita. Poi prende una connessione dal pool e manda la query parametrizzata al database, sulla porta del DBMS, dalla zona server alla zona dati.

Il database applica i vincoli ed esegue nella transazione. Risponde al nodo. Il nodo costruisce la risposta, pagina o JSON. Il proxy la rimanda al browser, cifrata. Il browser mostra. Se un passo rifiuta, la risposta torna indietro da quel passo: il proxy può rispondere quattrocentotre per una regola sua, l’applicazione risponde quattrocentotre per un permesso, il database rifiuta una chiave violata e l’applicazione lo traduce in un errore comprensibile, senza mostrare la query.

I punti in cui il percorso si rompe, da nominare se si chiede la diagnosi. DNS che punta al vecchio indirizzo. Certificato con il nome diverso. Porta quattrocentoquarantatré chiusa al confine. Nodo tolto dal bilanciatore perché la sonda fallisce. Sessione scaduta. Query lenta per un indice mancante. Connessioni del pool esaurite. Database che rifiuta perché il vincolo non è rispettato. Seguire il percorso è il metodo, e sul foglio si scrive come elenco numerato di una dozzina di passi, non come paragrafo unico.

### In sede di prova

Raccontare un solo gesto, in ordine. Nominare DNS, TLS, proxy, autorizzazione, transazione. Chiudere con che cosa questo percorso impedisce. È una risposta che copre mezza prova di reti e mezza di progettazione, se i nomi sono quelli del proprio tema.

### Errori da evitare

- Far risolvere al DNS l'indirizzo del database.
- Mettere il controllo del ruolo nel firewall.
- Dimenticare la sessione e trattare ogni richiesta come un login.

### Approfondire

- [Hypertext Transfer Protocol](https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)

## Proxy e reverse proxy

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** proxy, reverse proxy, TLS
**Semaforo:** verde

### Inquadramento

Il proxy in avanti agisce per i client, verso fuori. Il reverse proxy agisce per i server, verso chi arriva. Nell'elaborato serve il secondo: termina TLS, può bilanciare, nasconde i nodi. Non applica la regola di business e non interroga il database. Sul foglio si disegna il reverse proxy nella zona server e si scrive che il certificato porta il nome del portale. Chiamare proxy qualunque nodo intermedio, senza dire per chi lavora, è il modo di perdere la distinzione.

### Definizione

Un proxy sta in mezzo a una conversazione e la compie per conto di qualcun altro. Il proxy diretto, o forward proxy, agisce per conto dei client: i PC dell'ufficio non escono da soli, chiedono al proxy, e il proxy parla con i siti esterni. Il reverse proxy agisce per conto dei server: chi arriva da fuori crede di parlare con il sito, e parla con un nodo che sta davanti ai server veri, li nasconde e li protegge. La direzione decide il nome. In un elaborato di un'applicazione interna o pubblica, quello che si disegna davanti ai nodi è quasi sempre un reverse proxy.

### Che cosa ci si fa, in concreto

Il reverse proxy termina TLS, così i certificati stanno in un punto solo e non su ogni nodo. Può bilanciare, mandando la richiesta a un nodo sano. Può rifiutare ciò che non è HTTP ben formato, limitare la dimensione di un caricamento, registrare gli accessi prima ancora che l'applicazione li veda. Può servire i contenuti statici e lasciare all'applicazione solo le operazioni. Non è, da solo, l'autorizzazione. Non sa se quel dipendente può leggere quel ticket, a meno che l'applicazione non glielo abbia detto. Scrivere «il proxy controlla i permessi» è impreciso. Il proxy controlla il perimetro della richiesta. L'applicazione controlla il diritto sull'oggetto.

Il forward proxy serve un altro scopo: far uscire gli uffici verso Internet con una politica, un log e un punto in cui aggiornare i filtri, invece di aprire ogni PC. Non pubblica l'applicazione dell'ente. Confonderli produce un disegno in cui gli utenti interni e i server stanno dietro lo stesso apparato per ragioni opposte, e le regole diventano illeggibili. In un tema si possono usare entrambi, in punti diversi: il forward proxy sulla navigazione degli uffici, il reverse proxy davanti al portale. Due scatole, due frecce, due scopi.

Il proxy non sostituisce il firewall. Il firewall decide quali porte e quali reti si parlano. Il reverse proxy capisce la richiesta HTTP che su quella porta è stata ammessa. Servono tutti e due. Il database non sta dietro il reverse proxy come se fosse una pagina: non deve essere pubblicato affatto.

```disegno
titolo: I due versi
riga: PC degli uffici | Forward proxy | Internet
nota: Il forward proxy esce per conto dei client. I server dell'ente non si pubblicano qui.
riga: Utente del portale | Reverse proxy | Nodi applicativi
nota: Il reverse proxy entra per conto dei server. Il database non è un nodo di questa riga.
```


### Nel dettaglio

Il proxy in avanti sta dalla parte degli utenti. La postazione non esce da sola: chiede al proxy, e il proxy esce. Si usa per applicare una politica di uscita, per registrare, per non far parlare ogni PC con qualunque indirizzo. In un ente è spesso già presente, e nel tema lo si nomina se le postazioni devono raggiungere l’esterno. Non è il pezzo che pubblica il servizio.

Il reverse proxy sta dalla parte del servizio. Gli utenti conoscono lui. Lui conosce i nodi. I motivi per metterlo sono concreti. Termina TLS in un punto solo: il certificato sta lì, non su ogni nodo, e si rinnova in un posto. Può bilanciare, o stare davanti al bilanciatore. Può vietare percorsi, limitare la dimensione, tagliare intestazioni strane. Può registrare gli accessi in un formato unico. Può tenere le connessioni lente degli utenti e parlare in modo ordinato con i nodi. I nodi, dietro, possono parlare HTTP in rete interna, perché TLS è già stato fatto. In rete interna molto ostile si cifra anche quel tratto. In un elaborato normale, TLS al confine e rete interna segmentata sono una posizione difendibile, detta esplicitamente.

Il reverse proxy non è l’applicazione. Non conosce i ruoli. Non deve diventare il posto in cui si duplica la logica dei permessi, perché le due copie divergono. Conosce il traffico, non il significato. Un errore frequente è mettere nel proxy un controllo sul parametro «ruolo» arrivato dal client: il client se lo scrive. Il ruolo lo stabilisce l’applicazione dalla sessione.

Ce n’è uno solo nei disegni piccoli, e allora è un punto unico di guasto. Due, con un indirizzo che si sposta, tolgono il punto unico. Il certificato sta su entrambi, e il rinnovo pure. La configurazione è la stessa, versionata, non modificata a mano su uno solo. Sul foglio il reverse proxy è il rettangolo fra Internet e i nodi, con la porta pubblica da un lato e la porta interna dall’altro, e una frase: termina TLS, non autorizza le pratiche.

### In sede di prova

Definire i due versi con «per conto di chi». Elencare tre funzioni del reverse proxy nel proprio disegno: TLS, bilanciamento, log. Dire che i permessi sui dati restano all'applicazione. È una delle aggiunte che fanno passare il disegno di rete da generico a preciso.

### Errori da evitare

- Un solo «proxy» nel mezzo del foglio, senza direzione.
- Far controllare al proxy la regola «solo i propri ticket».
- Pubblicare il database attraverso il reverse proxy «così l'applicazione lo raggiunge». L'applicazione lo raggiunge da dietro, non da Internet.

### Approfondire

- [Reverse proxy](https://it.wikipedia.org/wiki/Reverse_proxy)
- [Proxy](https://it.wikipedia.org/wiki/Proxy)

## Posta elettronica, e che cosa non è la PEC

**Prove:** seconda prova gruppo 1
**Tag:** SMTP, IMAP, PEC
**Semaforo:** giallo

### Inquadramento

SMTP trasporta il messaggio fra server. IMAP lascia la cassetta sul server e la legge da più posti. La PEC aggiunge gestori e ricevute, accettazione e consegna, con un valore che la posta dell'ufficio non ha. Sul foglio si dice se l'applicazione deve solo avvisare, e allora basta un messaggio ordinario o una riga nel portale, oppure notificare con effetto legale, e allora si integra la PEC dell'ente e si conserva la ricevuta. Non si progetta un server di posta se la traccia chiede un'applicazione.

### Definizione

La posta elettronica ordinaria trasferisce messaggi fra cassette, con protocolli diversi per la spedizione e per la lettura. La posta elettronica certificata, la PEC, è un sistema regolato, con gestori abilitati e ricevute che hanno un valore giuridico. Usano entrambe l'idea del messaggio, e lì finisce la somiglianza utile in sede di esame. Un server SMTP dell'ufficio non diventa PEC perché «è la mail istituzionale».

### I protocolli, e il confine giuridico

SMTP trasporta il messaggio da un server all'altro. Il programma dell'utente consegna al proprio server, spesso su una porta di sottomissione autenticata, e i server si parlano fra loro. IMAP legge la cassetta lasciando i messaggi sul server, così la stessa cassetta si apre da più posti. POP3 scarica e, nell'uso antico, toglie il messaggio dal server: è il motivo per cui in un ente si preferisce IMAP, se si deve nominare uno dei due.

Questi protocolli non provano, da soli, chi sia il mittente in senso giuridico e non producono una ricevuta opponibile. Si può firmare il messaggio, si può cifrarlo, si può autenticare il server. Resta posta ordinaria.

La PEC aggiunge un giro formalizzato. Il gestore del mittente rilascia una ricevuta di accettazione. Il gestore del destinatario rilascia una ricevuta di consegna. Gli attori sono iscritti in un elenco, e il domicilio digitale è un indirizzo di quel sistema, non un indirizzo scelto sul dominio dell'ufficio senza quel ruolo. Per un tecnico, in un tema, la frase che conta è: se l'atto deve avere la prova dell'invio e della consegna prevista dalla legge, si usa il sistema di PEC già dell'ente, non si riscrive un mini-protocollo dentro l'applicazione.

L'applicazione nuova, di regola, non è un server di posta. Invia una notifica, oppure deposita un avviso che l'utente legge nel portale. Se la traccia chiede la notifica legale, si integra il servizio di PEC dell'ente e si conserva la ricevuta, come dato, legata alla pratica. Non si mettono in copia le credenziali della cassetta dentro il codice.

```disegno
titolo: Messaggio ordinario e messaggio certificato
riga: Utente | consegna autenticata al proprio server
freccia: SMTP fra i server, senza ricevuta opponibile
riga: Cassetta del destinatario | si legge con IMAP
freccia: è un altro sistema, con altri gestori
riga: PEC | ricevuta di accettazione e ricevuta di consegna
nota: La mail dell'ufficio non diventa PEC perché il dominio è quello dell'ente.
```


### Nel dettaglio

La posta ordinaria è un messaggio che viaggia fra server, con SMTP per l’invio e per il transito, e con IMAP o POP per la lettura. IMAP tiene la casella sul server e le cartelle sono le stesse da ogni postazione. POP scarica e, se configurato per togliere dal server, lega la posta a un solo dispositivo. In un ente si nomina IMAP. Il messaggio ordinario non prova il mittente: il campo del mittente si scrive, e senza controlli un messaggio arriva con un mittente falso. SPF, DKIM e DMARC sono i controlli con cui il dominio dichiara chi può spedire a suo nome e come riconoscere i messaggi alterati. Vanno nominati come difesa della posta, non come firma giuridica.

La PEC è un sistema italiano di posta in cui i gestori, in un circuito regolato, producono ricevute. La ricevuta di accettazione dice che il gestore del mittente ha preso il messaggio. La ricevuta di consegna dice che il messaggio è arrivato nella casella PEC del destinatario. Queste ricevute hanno valore legale, nei casi previsti, come prova dell’invio e della consegna. La PEC non dice che il destinatario ha letto, non dice che il contenuto è vero, non sostituisce una firma sul documento allegato. Un PDF allegato a una PEC è un file come gli altri, finché non è firmato.

Le due poste non si mescolano. Una PEC inviata a una casella ordinaria perde, nel percorso, le garanzie, e il mittente riceve spesso un avviso di mancata consegna nel circuito. Un messaggio ordinario verso una PEC non diventa PEC. In un procedimento si usa il domicilio digitale, che per le imprese e i professionisti è una PEC, e per i cittadini può essere un altro indirizzo eletto. Il tema tecnico distingue il canale, la ricevuta e il documento.

Sul foglio, se il sistema manda avvisi, si dice quale canale. Un avviso interno di un ticket è posta ordinaria o un messaggio nell’applicazione, e non ha valore di notifica. Una notifica che deve fare scadenza è una PEC verso un domicilio digitale, e il sistema conserva la ricevuta di consegna insieme alla pratica, perché la ricevuta è il fatto da provare. Conservare solo il testo inviato, senza ricevuta, non prova la consegna.

### Esempio

Il portale di assistenza avvisa il tecnico che ha una richiesta nuova. L'avviso è un messaggio ordinario, o anche solo una riga nel portale. Non prova nulla in giudizio e non deve farlo. Se dalla richiesta nasce una comunicazione che l'ente deve notificare a un fornitore con valore di consegna, quella comunicazione esce dalla PEC dell'ente, e nel portale si conserva il riferimento alla ricevuta, non il testo speduto da un account personale.

### In sede di prova

Nominare SMTP per il trasporto e IMAP per la lettura. Dire in una frase che cosa aggiunge la PEC: gestori e ricevute. Non progettare un server di posta se la traccia chiede un'applicazione. Se la traccia chiede una notifica con valore legale, integrare la PEC, non imitarla.

### Errori da evitare

- Scrivere «useremo la mail, quindi è certificata».
- Far scaricare la cassetta con POP3 e perdere lo storico quando il PC si rompe.
- Conservare la password della casella PEC nel codice del portale.

### Approfondire

- [Posta elettronica](https://it.wikipedia.org/wiki/Posta_elettronica)
- [Posta elettronica certificata](https://it.wikipedia.org/wiki/Posta_elettronica_certificata)
- [Simple Mail Transfer Protocol](https://it.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)

## Wi-Fi: che cosa cifra e che cosa resta visibile

**Prove:** seconda prova gruppo 1
**Tag:** WPA, access point, rete ospite
**Semaforo:** giallo

### Inquadramento

WPA cifra il tratto radio, fra il dispositivo e il punto di accesso. Da lì in poi il quadro è sulla rete cablata. HTTPS resta necessario. Una password unica di ufficio non è un account: chi lascia l'ente la conosce ancora. Sul foglio si mette l'accesso individuale per i dipendenti e una rete ospite separata, senza strada verso i server. Nascondere il nome della rete non è una misura. Il punto di accesso è un dispositivo da aggiornare, non una presa.

### Definizione

Il Wi-Fi è il tratto radio fra un dispositivo e un punto di accesso. La protezione di quel tratto, oggi WPA2 o WPA3, cifra il dialogo radio perché chi ascolta l'aria non legga i quadri. Non è la sicurezza dell'applicazione, non sostituisce HTTPS, e non dice chi sia la persona: dice solo che quel dispositivo è entrato in quella rete radio.

### Che cosa copre, e che cosa no

Dopo il punto di accesso il quadro viene decifrato e prosegue sulla rete cablata. Chi amministra il punto di accesso, o chi è già sulla rete interna, non è fermato da WPA. L'applicazione continua a dover usare TLS fino al proprio ingresso, e l'autorizzazione sul server. Il Wi-Fi protegge il corridoio, non la stanza.

Una password unica condivisa da tutto l'ufficio non è un'identità. Chi la conosce entra, e quando una persona lascia l'ufficio la password è ancora quella, finché qualcuno non la cambia per tutti. In un ente la forma adulta è l'accesso individuale: ogni persona si autentica con le proprie credenziali, e il punto di accesso chiede a un server se quell'utente è ancora abilitato. Si revoca una persona senza ridistribuire un segreto comune.

La rete ospite non sta sulla stessa rete dei server. Ha un nome distinto, esce verso Internet se deve, e non ha una strada verso il database né verso l'amministrazione degli apparati. Nascondere il nome della rete non è una misura: il nome si rivede appena un client legittimo lo pronuncia.

Il punto di accesso è un dispositivo da aggiornare e da amministrare, non una presa elettrica. Sta nella rete degli uffici, o in una rete sua, e la gestione arriva da un canale di amministrazione, non da qualunque client. Un punto di accesso dimenticato, con la password di fabbrica, è una porta.

```disegno
titolo: Il tratto cifrato finisce al punto di accesso
riga: Portatile
freccia: radio cifrata con WPA
riga: Punto di accesso
freccia: da qui in avanti la rete è quella cablata, con le sue regole
riga: Server | solo sulla rete che il firewall consente
nota: HTTPS resta necessario. La password unica di ufficio non è un account.
```


### Nel dettaglio

La cifra del Wi-Fi protegge la tratta radio, fra la postazione e l’access point. Chi ascolta l’aria non legge il contenuto, se la rete è WPA2 o WPA3 con una chiave per sessione. Non protegge il percorso dopo l’access point. Dal momento in cui il traffico è sul cavo, vale la sicurezza della rete cablata: zone, firewall, TLS. Una rete Wi-Fi «cifrata» con il server raggiungibile in chiaro è cifrata solo per i primi metri. TLS resta necessario.

WPA2 con una chiave unica condivisa, la stessa per tutto l’ufficio e scritta su un foglio, autentica la conoscenza della chiave, non la persona. Chi ha la chiave entra, e cambiarla significa cambiarla a tutti. Una chiave che non si cambia da anni è una chiave che è uscita dall’ente. WPA3 migliora lo scambio, e si preferisce dove gli apparati lo consentono. Per un ente la forma giusta è l’autenticazione personale: ciascuna persona, o ciascun dispositivo, ha credenziali proprie, e un server di autenticazione, spesso RADIUS, dice sì o no. Si revoca una persona senza toccare le altre. Gli ospiti stanno su una rete diversa, con una chiave propria o un portale, e da lì non si entra verso i server.

Resta visibile più di quanto si creda. Gli indirizzi MAC dei dispositivi, salvo le randomizzazioni parziali dei client moderni, si vedono. Il nome della rete si annuncia. Il momento in cui un dispositivo è presente si vede. Il contenuto e, con TLS, anche il percorso HTTP no. La posizione approssimativa si deduce dalla presenza. Per questo il Wi-Fi non è un luogo adatto a credere di essere invisibili, ed è un luogo adatto a segmentare: una VLAN per il personale, una per gli ospiti, una per gli oggetti, ciascuna con regole diverse.

L’access point è un punto di ingresso fisico facile. Una porta di rete in corridoio, senza autenticazione, vale quanto un Wi-Fi aperto. Si autentica il dispositivo anche sulla presa, oppure la presa sta in una VLAN che non porta da nessuna parte finché non c’è autenticazione. Sul foglio: tratta radio cifrata con autenticazione personale, ospiti separati, e TLS comunque, perché la cifra radio finisce all’access point.

### Esempio

I dipendenti si collegano con l'account dell'ente. Un consulente, per una giornata, usa la rete ospite e raggiunge Internet, non il portale interno. Il portale, anche dalla rete dipendenti, si apre in HTTPS e ricontrolla il ruolo. Se il tema dice «i magazzini sono raggiunti solo in Wi-Fi», si scrive la stessa segmentazione che si scriverebbe per una presa a muro: il magazzino non è, per questo, autorizzato a parlare con il database.

### In sede di prova

Dire che WPA cifra solo il tratto radio. Distinguere la password condivisa dall'accesso con account individuale. Mettere gli ospiti su una rete separata. Non togliere TLS «perché tanto il Wi-Fi è cifrato».

### Errori da evitare

- Trattare il Wi-Fi come una VPN. Non porta la persona fino al servizio: la porta sulla rete locale.
- Una sola password appesa in portineria, chiamata «sicurezza».
- Credere che nascondere il nome della rete tenga fuori qualcuno.

### Approfondire

- [Wi-Fi](https://it.wikipedia.org/wiki/Wi-Fi)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)
- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)

## Una directory unica e il protocollo LDAP

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** LDAP, directory, identità
**Semaforo:** verde

### Inquadramento

La directory è l'elenco delle identità dell'ente. LDAP è il protocollo con cui un'applicazione lo interroga. Le password restano lì, non si copiano in ogni sistema. I gruppi non sono automaticamente i ruoli dell'applicazione: la corrispondenza si scrive. Sul foglio si descrive una cessazione: tolta dal gruppo il lunedì, la persona al pomeriggio non vede più la coda. Si dice che cosa succede se la directory non risponde. La scelta sobria è rifiutare l'accesso, non entrare lo stesso.

### Definizione

Una directory è l'elenco strutturato delle identità di un'organizzazione: persone, gruppi, account di servizio, e il fatto che siano attivi. LDAP è il protocollo con cui un'applicazione interroga quell'elenco. L'alternativa, da evitare, è che ogni applicazione conservi le proprie password e il proprio elenco di utenti, che divergono il giorno dopo un trasferimento o una cessazione.

### Come si usa in un'applicazione

La persona si autentica contro la directory, oppure contro un servizio di identità che a sua volta usa la directory. L'applicazione non vede la password e non la conserva. Riceve un'identità già verificata, e con essa gli attributi che le servono: un identificativo stabile, il nome, i gruppi. I gruppi della directory non sono automaticamente i ruoli dell'applicazione. Un gruppo «ufficio protocollo» può corrispondere al ruolo «può aprire pratiche». La corrispondenza si scrive. Se si saltano i ruoli e si mettono i permessi fini nella directory, la directory diventa illeggibile e ogni applicazione ne dipende in modo diverso.

La domanda alla directory viaggia cifrata. Si usa la forma di LDAP sotto TLS, o un canale equivalente, e non una interrogazione in chiaro sulla rete degli uffici. L'applicazione ha un proprio account di servizio per leggerla, con il minimo di attributi, non l'account di un amministratore.

Va deciso che cosa succede se la directory non risponde. La scelta sobria è rifiutare l'accesso: meglio un servizio fermo che un accesso concesso su un elenco vecchio. Se si tiene una cache breve degli attributi, si scrive per quanti minuti e si dice che la disattivazione di un account può tardare di quei minuti. Non si inventa una modalità «senza autenticazione, solo per oggi».

LDAP non è l'autorizzazione completa. Dice chi è la persona e di quali gruppi fa parte. L'applicazione, a ogni richiesta, decide se quel ruolo può prendere in carico quella pratica. Un gruppo in più nella directory non deve bastare a scavalcare il filtro sul server.

```disegno
titolo: Una identità, molte applicazioni
riga: Persona
freccia: si autentica, la password resta nel sistema di identità
riga: Directory | account attivo, gruppi
freccia: l'applicazione riceve identità e gruppi, non la password
riga: Portale | traduce i gruppi in ruoli e ricontrolla a ogni richiesta
nota: Cessare l'account una volta. Non in ogni applicazione, a mano.
```


### Nel dettaglio

La directory è l’elenco delle identità: persone, gruppi, a volte computer, con attributi. Un ufficio che tiene gli utenti nel portale, un altro nella posta, un altro nella VPN, ha tre elenchi che divergono. La persona che cambia ufficio va aggiornata tre volte, e il conto disattivato ne lascia due vivi. La directory unica è il posto in cui l’identità nasce e muore. Gli altri sistemi si agganciano, non copiano a mano.

LDAP è il protocollo con cui un’applicazione interroga questa directory. Cerca l’utente, verifica la parola d’ordine, legge i gruppi. Il legame è in rete, verso un servizio che sta nella zona server o nella zona identità, non verso un file. LDAPS, o LDAP dentro TLS, cifra la domanda: una verifica di password in chiaro sulla rete degli uffici è una password regalata. L’applicazione non si collega come amministratore della directory. Si collega con un utente di servizio che può leggere ciò che serve e non può cancellare gli account.

Il gruppo nel directory diventa il ruolo nell’applicazione, con una corrispondenza scritta. Il gruppo «tecnici-assistenza» ha il ruolo di prendere in carico. Il gruppo «responsabili» ha il ruolo di chiudere. L’applicazione, a ogni accesso, rilegge i gruppi, oppure li rilegge a scadenza breve. Un gruppo tolto deve avere effetto senza aspettare il giorno dopo, e senza un riavvio. Copiare i gruppi dentro l’applicazione una volta sola, all’installazione, ricrea gli elenchi divergenti.

La directory non sostituisce l’autorizzazione fine. Sa dire a quale ufficio appartiene la persona. Non sa dire, da sola, se quella persona può vedere il ticket numero quattromila, che è riservato. Questa seconda decisione sta nell’applicazione, sui dati. In un tema si scrivono i due livelli: autenticazione e gruppi dalla directory, permesso sull’oggetto dall’applicazione. E si scrive come si disattiva: si toglie l’account in directory, e tutti i sistemi che si fidano di quella directory smettono di farlo entrare.

### Esempio

Il tecnico cambia ufficio il lunedì. L'ufficio del personale, o il sistema di identità, lo toglie dal gruppo del vecchio settore. Il portale di assistenza, alla richiesta successiva, non gli mostra più quella coda. Non c'è una schermata parallela di «utenti del portale» con una password diversa. L'amministratore del portale esiste ancora, ma è un ruolo dato a poche persone dentro la stessa identità, non un account condiviso scritto su un foglietto.

### In sede di prova

Definire directory e LDAP con una frase ciascuno. Dire che le password non si copiano nell'applicazione. Distinguere gruppi e ruoli. Scrivere il comportamento se la directory è ferma. È una delle risposte che collegano la rete, la sicurezza e l'elaborato senza aggiungere prodotti.

### Errori da evitare

- Un elenco di utenti e password dentro ogni applicazione.
- Interrogare la directory in chiaro.
- Un account di servizio con i diritti di amministratore della directory, incorporato nel codice.

### Approfondire

- [Lightweight Directory Access Protocol](https://it.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)
- [Autenticazione](https://it.wikipedia.org/wiki/Autenticazione)
- [SPID](https://www.agid.gov.it/it/piattaforme/spid)

## Indirizzo MAC, ARP e porte ben note

**Prove:** seconda prova gruppo 1
**Tag:** MAC, ARP, porte TCP
**Semaforo:** giallo

### Inquadramento

Il MAC identifica un'interfaccia sulla rete locale e lo switch lo usa. L'IP identifica la destinazione fra reti. ARP lega, in locale, un IP al MAC, e una risposta falsa è un motivo per segmentare. La porta sceglie il programma: 443, 22, 53, la porta del database. Sul foglio si scrivono due regole di firewall e quattro porte che c'entrano con il tema. La 22 degli amministratori arriva dalla rete di gestione, dopo la VPN, non dagli uffici.

### Definizione

Su una rete locale un dispositivo si raggiunge con un indirizzo fisico, il MAC, che lo switch usa per inoltrare il quadro sulla porta giusta. Fra una rete e l'altra si usa l'indirizzo IP, che il router inoltra. ARP è il protocollo con cui, sulla rete locale, un dispositivo chiede quale MAC corrisponda a un IP. La porta, in TCP o UDP, distingue quale programma di quel dispositivo riceve il segmento. Sono tre numeri diversi, di tre livelli diversi, e in un tema si citano per dire chi può parlare con chi.

### I tre numeri

Il MAC non si usa per progettare l'indirizzamento di un ente. Cambia importanza solo sulla rete locale: lo switch impara, guardando il traffico, da quale presa proviene un MAC. Due sedi diverse non si parlano «per MAC». Si parlano per IP, attraverso i router.

ARP esiste perché, per consegnare un quadro, serve il MAC del prossimo passo. Chi mente in una risposta ARP, sulla stessa rete locale, può deviare il traffico di un vicino. È un motivo concreto della segmentazione: una rete degli uffici piatta, unica, rende questo inganno più ampio. Non è un attacco che arrivi da Internet già oltre il firewall, se il firewall non inoltra quel dialogo. Si racconta così, senza sceneggiarlo.

La porta dice il servizio. Alcune sono convenzioni che la commissione si aspetta di riconoscere. La 443 è HTTPS. La 80 è HTTP, da non lasciare come strada parallela se si è scelto TLS. La 53 è il DNS. La 25 è il trasporto di posta fra server, la 587 è la consegna autenticata del client. La 22 è l'amministrazione remota di un sistema, e non sta aperta dagli uffici verso i server, tantomeno da Internet. La 389 è LDAP, la 636 è LDAP cifrato: si usa la seconda. La 3389, desktop remoto, è un classico da non esporre.

Nel disegno di rete dell'elaborato non serve l'elenco. Servono due regole. Dagli uffici al proxy, solo 443. Dai nodi applicativi al database, solo la porta del motore, solo da quegli indirizzi. L'amministrazione, se usa la 22, arriva da una rete di gestione dopo la VPN, non dalla rete degli ospiti.

```disegno
titolo: Tre numeri, tre domande
riga: MAC | chi è sulla presa di questa rete locale
riga: IP | come si arriva a un'altra rete
riga: Porta | quale programma, su quel sistema, riceve
nota: ARP lega IP e MAC solo in locale. Una risposta ARP falsa è un argomento per segmentare, non per una regola «da Internet».
```


### Nel dettaglio

Il MAC è l’indirizzo della scheda sulla rete locale, sei byte, di solito scritto in esadecimale. Vive nella trama, non nel pacchetto IP. Uno switch lo impara. Un router lo sostituisce a ogni salto: il MAC di destinazione, oltre il primo router, non è quello del server finale, è quello del router. Per questo filtrare per MAC al confine dell’ente non identifica un utente remoto. Sulla rete locale, riservare un indirizzo DHCP a un MAC è comodo per le stampanti. Come sicurezza è debole: un MAC si cambia in una riga di configurazione. Si usa come inventario, non come autenticazione.

ARP traduce l’IP in MAC sulla rete locale. Chi vuole mandare un pacchetto a un IP della stessa sottorete chiede, in broadcast: chi ha questo IP? Il proprietario risponde con il suo MAC. La risposta si tiene in cache per un po’. Un host che risponde al posto di un altro, l’avvelenamento ARP, si mette in mezzo e legge il traffico di quella rete, o lo dirotta. È un attacco di rete locale, ed è un motivo per segmentare: nella VLAN degli uffici un PC compromesso può fare ARP verso i vicini, non verso il database, che sta in un’altra rete e si raggiunge solo attraverso il router, dove l’ARP ricomincia da capo. Contromisure esistono, come legare MAC e porta sullo switch. In un tema basta sapere che ARP è locale e che la segmentazione ne limita il raggio.

Le porte ben note sono la convenzione con cui un client trova il servizio. Sotto il milleventiquattro stanno i servizi storici, e ascoltarle richiede privilegi sul sistema. Quattrocentoquarantatré è HTTPS, ventidue è l’amministrazione cifrata, cinquantatré è DNS, venticinque è SMTP, centotrentatré è IMAP, trecentottantanove è LDAP, trecentotrentatré è il database MySQL, cinquemilaquattrocentotrentadue è PostgreSQL. La convenzione non è una protezione. Spostare il database su una porta alta non lo nasconde a chi guarda, e lasciarlo sulla porta standard, chiuso al firewall verso tutti tranne i nodi, è più pulito di una porta strana aperta al mondo.

Sul foglio si citano le porte del proprio disegno, non l’elenco. E una frase: il MAC identifica una scheda sulla tratta locale, la porta identifica un servizio sull’host, l’IP identifica l’host fra le reti. Tre indirizzi, tre scopi.

### Esempio

Il PC di un ufficio risolve il nome del portale, ottiene l'IP del proxy, e apre la porta 443. Lo switch consegna il quadro usando i MAC del tratto locale. Il PC non conosce il MAC del database e non deve aprirne la porta. Un tecnico che amministra un server apre la 22 solo dopo essere entrato nella VPN di gestione. Se la stessa 22 rispondesse dalla rete uffici, qualunque postazione compromessa avrebbe una strada diretta all'amministrazione.

### In sede di prova

Associare MAC allo switch, IP al router, porta al servizio. Citare quattro porte che c'entrano con il tema, non venti. Collegare ARP alla ragione per cui la rete locale si segmenta. Chiudere con le due regole di firewall dell'elaborato, se il quesito è di progettazione.

### Errori da evitare

- Usare il MAC come se fosse un indirizzo instradabile fra sedi.
- Aprire «tutte le porte fra le VLAN, tanto c'è l'autenticazione nell'applicazione».
- Confondere la porta 443 del proxy con la porta del database.

### Approfondire

- [Indirizzo MAC](https://it.wikipedia.org/wiki/Indirizzo_MAC)
- [Address Resolution Protocol](https://it.wikipedia.org/wiki/Address_Resolution_Protocol)
- [Porta](https://it.wikipedia.org/wiki/Porta_(reti))

## Handshake TCP, in tre passi e con il costo

**Prove:** seconda prova gruppo 1, orale
**Tag:** TCP, handshake, connessione
**Semaforo:** verde

### Inquadramento

La domanda chiede come nasce una connessione, non la differenza generica fra TCP e UDP. Si raccontano i tre passi e si dice che cosa occupano sul server.

### Definizione

Il handshake a tre vie apre una connessione TCP. Il client invia un segmento di sincronizzazione, il server risponde con sincronizzazione e conferma, il client conferma. Da lì i dati possono partire, con numeri di sequenza e ritrasmissione.

### Nel dettaglio

Ogni connessione aperta occupa memoria sul server: i numeri di sequenza, la finestra, lo stato. Un server che accetta e non chiude, o che subisce aperture mai completate, esaurisce questa memoria prima di esaurire la banda. È un motivo per cui il proxy e il firewall limitano le aperture e per cui l'applicazione chiude ciò che non usa. Il pool di connessioni verso il database esiste per non ripetere questo costo a ogni query, e ha un tetto per non riempire la memoria del motore.

La chiusura è a sua volta uno scambio, non un silenzio. Una connessione abbandonata resta mezza aperta per un tempo, e in quel tempo occupa ancora stato. Un'applicazione che ne apre una per click e non le chiude cade sotto carico ordinario, senza alcun attacco. Si misura quante connessioni sono stabilite e quante stanno chiudendo.

Il handshake non autentica nessuno. Dice solo che i due capi accettano di parlare. L'identità, se serve, sta sopra, in TLS e nell'applicazione. Confondere «connessione TCP riuscita» con «utente autenticato» è il buco dei servizi che si fidano del fatto di essere stati raggiunti.

### Esempio

Il nodo applicativo tiene un pool di trenta connessioni verso il database, aperte con il handshake una volta e riusate. Una sonda mostra le connessioni stabilite. Se crescono senza tornare, c'è una mancata chiusura, e si interviene prima che il database rifiuti i nuovi ingressi.

### In sede di prova

I tre passi, lo stato occupato, perché si chiude e si riusa, il handshake non è un'autenticazione.

### Errori da evitare

- Dire che TCP autentica i due capi.
- Aprire una connessione nuova per ogni operazione breve senza un motivo.
- Ignorare le connessioni mezza chiuse come consumo di risorse.

### Approfondire

- [Transmission Control Protocol](https://it.wikipedia.org/wiki/Transmission_Control_Protocol)
- [Handshake](https://it.wikipedia.org/wiki/Handshake_(informatica))

## Che cosa verifica TLS prima di cifrare

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** TLS, certificato, handshake
**Semaforo:** verde

### Inquadramento

La domanda separa «il lucchetto c'è» da ciò che il lucchetto ha controllato. Si elencano i controlli del browser e si dice che cosa resta in chiaro.

### Definizione

TLS, prima dei dati applicativi, autentica il server tramite il certificato e accorda una chiave simmetrica di sessione. Da quel momento il contenuto HTTP viaggia cifrato e protetto da modifiche. Non sceglie l'utente applicativo.

### Nel dettaglio

Il browser controlla che il certificato sia firmato da una catena di cui si fida, che il nome nel certificato sia quello richiesto, che le date siano valide, che il certificato non sia revocato. Uno solo di questi fallisce e compare l'avviso. L'avviso cliccato per abitudine annulla il controllo: per questo un certificato scaduto si rinnova prima, non si spiega agli utenti come aggirarlo. Dopo i controlli, le due parti accordano le chiavi. I dati grossi usano la cifra simmetrica. Dire che «tutta la pagina è cifrata con la chiave pubblica» è impreciso.

In chiaro resta, sulla rete, l'indirizzo IP e in genere il nome del sito indicato all'inizio. Un osservatore vede verso chi si è aperta la connessione, non il percorso HTTP né il corpo. Per nascondere anche il nome servono altre misure, e in un tema di ente di solito non servono. Serve invece non terminare TLS su un apparato di cui non si ha il controllo: chi termina vede tutto.

La sessione TLS non è la sessione applicativa. La prima protegge il trasporto. La seconda dice chi è l'utente dopo il login. Si possono rinnovare e scadere in modo indipendente.

### Esempio

L'utente apre il portale. Il browser verifica il certificato del proxy, nome compreso. Solo dopo parte la richiesta di login, cifrata. Un certificato in scadenza fra dieci giorni è un avviso di monitoraggio, non un incidente del giorno dopo. Il login crea poi la sessione applicativa, che TLS non conosce.

### In sede di prova

I controlli sul certificato, lo scambio di chiavi, che cosa un osservatore vede ancora, distinzione fra sessione TLS e sessione dell'utente.

### Errori da evitare

- Ridurre TLS al lucchetto.
- Insegnare ad aggirare l'avviso del browser.
- Confondere la cifratura del trasporto con l'avvenuta autenticazione dell'utente.

### Approfondire

- [Transport Layer Security](https://it.wikipedia.org/wiki/Transport_Layer_Security)
- [Certificato digitale](https://it.wikipedia.org/wiki/Certificato_digitale)

## Instradamento statico e dinamico

**Prove:** seconda prova gruppo 1, orale
**Tag:** routing, rotta statica, OSPF
**Semaforo:** giallo

### Inquadramento

La domanda chiede come un router sa dove mandare un pacchetto. Si distinguono le rotte scritte a mano da quelle imparate, e si sceglie secondo la dimensione della rete.

### Definizione

Una rotta statica è scritta dall'amministratore: verso questa rete, inoltra a questo vicino. L'instradamento dinamico fa sì che i router si scambino informazioni e calcolino le rotte, aggiornandole se un collegamento cade.

### Nel dettaglio

In una rete piccola, con un firewall e una manciata di reti interne, le rotte statiche sono chiare e si vedono tutte in una pagina. La rotta di default manda a monte ciò che non è locale, verso il firewall. Una rete interna nuova si aggiunge a mano. L'errore si vede subito, perché le righe sono poche. Non si aggiornano da sole se un cavo muore: il router continua a inoltrare verso un vicino morto, finché qualcuno non cambia la rotta o finché un controllo non la toglie.

Quando le sedi e i collegamenti sono molti, e si vuole che la caduta di un link faccia passare il traffico sull'altro senza un intervento, si usa un protocollo interno. I router annunciano le reti che conoscono e scelgono il percorso. Si nomina il protocollo solo se lo si sa spiegare in una frase, per esempio che preferisce il percorso di costo minore e che ricalcola alla caduta. Non serve la configurazione. Serve dire che le rotte diventano un sistema da sorvegliare: un annuncio sbagliato, troppo largo, dirotta traffico.

In un tema di un ente con una sede, statico e default bastano e si scrivono. Il dinamico si cita per una rete fra più sedi con due collegamenti, come motivo di resilienza, non come ornamento.

### Esempio

Tre reti interne e una uscita. Sul firewall, tre rotte statiche e una default verso il provider. Il secondo collegamento verso l'archivio remoto, se esiste, giustifica un protocollo fra i due router di sede, così la caduta della fibra principale fa passare il traffico sul percorso di riserva senza una modifica a mano alle tre di notte.

### In sede di prova

Definire i due modi, dire la dimensione a cui il statico basta, dire che il dinamico serve quando un guasto deve cambiare il percorso da solo, e che un annuncio sbagliato è un incidente.

### Errori da evitare

- Mettere un protocollo dinamico in una rete di tre nodi per principio.
- Lasciare rotte statiche verso un vicino morto senza un controllo.
- Accettare annunci di reti troppo larghe.

### Approfondire

- [Routing](https://it.wikipedia.org/wiki/Routing)
- [Router](https://it.wikipedia.org/wiki/Router)

## Domini di collisione e domini di broadcast

**Prove:** seconda prova gruppo 1, orale
**Tag:** switch, broadcast, collisione
**Semaforo:** giallo

### Inquadramento

È la domanda che giustifica lo switch al posto dell'hub e la VLAN al posto di una rete piatta. Si definiscono i due domini e si dice chi li spezza.

### Definizione

Il dominio di collisione è l'insieme di nodi che non possono trasmettere insieme senza disturbarsi. Il dominio di broadcast è l'insieme di nodi raggiunti da un messaggio indirizzato a tutti. Lo switch spezza i primi. Il router, o la VLAN con un filtraggio, spezza i secondi.

### Nel dettaglio

Con un hub, tutti sono nello stesso dominio di collisione: uno parla, gli altri aspettano, e il traffico di ciascuno è ascoltabile dagli altri. Lo switch dà a ogni porta un dominio di collisione proprio, e due coppie possono parlare insieme. Per questo l'hub non si progetta più. Lo switch non spezza il broadcast. Una richiesta ARP, o un dispositivo rumoroso, raggiunge tutte le porte della stessa VLAN. Una VLAN grande, di un intero edificio, è un unico dominio di broadcast: un errore o un attacco locale si propaga a tutti gli uffici.

Il router non inoltra il broadcast. Mettere un router, o almeno una VLAN diversa, fra gli uffici e i server significa che il rumore degli uffici non arriva alle porte del database. È un argomento di segmentazione, non solo di indirizzi. In un disegno si scrive quanti domini di broadcast ci sono: uno per zona, non uno per l'ente intero.

### Esempio

Gli uffici stanno in VLAN per piano, i server in un'altra, i dati in una terza. Uno switch di piano evita le collisioni. Il broadcast di un PC malato resta nel piano e non arriva al database, perché fra le VLAN c'è il firewall che non inoltra il broadcast.

### In sede di prova

Due definizioni, chi spezza ciascuna, perché una VLAN enorme resta un problema, il disegno a zone come domini separati.

### Errori da evitare

- Dire che lo switch ferma i broadcast.
- Tenere l'intera amministrazione in un'unica VLAN «per semplicità».
- Proporre un hub in un disegno nuovo.

### Approfondire

- [Switch](https://it.wikipedia.org/wiki/Switch)
- [Dominio di broadcast](https://it.wikipedia.org/wiki/Dominio_di_broadcast)

## SSH, e perché Telnet non si nomina più

**Prove:** seconda prova gruppo 1, orale
**Tag:** SSH, amministrazione, Telnet
**Semaforo:** verde

### Inquadramento

La domanda è sull'amministrazione remota. Si dice che il canale è cifrato e autenticato, e da dove si può aprire.

### Definizione

SSH è un protocollo di accesso remoto cifrato. Autentica il server e l'utente e protegge la sessione. Telnet trasporta gli stessi comandi in chiaro, password compresa, e non si usa.

### Nel dettaglio

L'amministrazione dei nodi passa per SSH, dalla rete di gestione, non da tutte le postazioni e non da Internet. Si entra con chiave associata a una persona, o con l'identità dell'ente, non con una password condivisa «root» scritta in un foglio. Il conto di amministrazione diretto sul sistema si usa in emergenza e si registra. Meglio entrare con il proprio utente e alzare il privilegio per il comando che serve, così il registro ha un nome.

Le chiavi hanno una passphrase e si revocano quando la persona cambia incarico. Una chiave copiata su dieci macchine «per i job» è una chiave che non si può revocare a metà. I job usano una chiave di servizio, con permessi stretti, diversa da quella delle persone. Si disabilita l'accesso con password se la chiave è il metodo scelto, altrimenti la password resta una porta.

La porta di SSH non si pubblica sul firewall di confine. Chi deve entrare da fuori passa per la VPN o per un bastion, a sua volta autenticato con secondo fattore. Cambiare numero di porta e lasciarla aperta sul mondo non è una difesa, è un disguido.

### Esempio

Gli amministratori aprono SSH solo dalla rete di gestione, con la propria chiave. Un job notturno usa una chiave di servizio che può eseguire un solo comando. Telnet è spento su tutti i nodi. Dal firewall di confine la porta ventidue non è raggiungibile.

### In sede di prova

Cifrato, dalla rete di gestione, identità nominative, niente password condivisa, niente esposizione sul confine, Telnet spento.

### Errori da evitare

- Lasciare Telnet «per i dispositivi vecchi» senza una data di spegnimento.
- Pubblicare SSH e cambiare solo la porta.
- Usare la chiave personale di un amministratore dentro un job.

### Approfondire

- [Secure Shell](https://it.wikipedia.org/wiki/Secure_Shell)
- [Telnet](https://it.wikipedia.org/wiki/Telnet)

## Trasferire file: SFTP, e non FTP

**Prove:** seconda prova gruppo 1, orale
**Tag:** SFTP, FTP, file
**Semaforo:** giallo

### Inquadramento

La domanda confronta i modi di spostare un file fra sistemi. Si sceglie il canale cifrato e si dice chi è autenticato.

### Definizione

FTP trasferisce file in chiaro e con una modalità di porte scomoda da filtrare. SFTP trasferisce file dentro SSH, cifrato e autenticato. Sono protocolli diversi. La somiglianza del nome non li rende parenti stretti.

### Nel dettaglio

Un flusso in chiaro di un file di pratiche è una pubblicazione sulla rete che attraversa. Si usa SFTP, o un altro canale cifrato già presente, verso un server che autentica l'identità e scrive un registro di chi ha preso che cosa. L'area di scambio è una cartella dedicata, non la home di un amministratore e non la cartella dei backup. I file si tolgono quando il flusso li ha consumati, altrimenti la cartella diventa un archivio informale senza conservazione e senza permessi pensati.

FTP anonimo o con password in chiaro non entra in un disegno nuovo. Se un soggetto esterno sa parlare solo FTP, il canale si isola, si cifra a un altro livello se possibile, e si mette una data di sostituzione. Non si «tiene perché funziona» sulla rete degli uffici.

Il browser che carica un allegato nell'applicazione non ha bisogno di SFTP. Il canale è già HTTPS e il controllo dei permessi è l'applicazione. Aggiungere un accesso file al server, per comodità di qualcuno, duplica la via e aggira i permessi. Si chiude.

### Esempio

Un ufficio esterno deposita un flusso notturno via SFTP, con un'identità di servizio, in una cartella di ingresso. Un job valida i file e li sposta. La cartella non è leggibile dagli altri utenti del sistema. FTP non è pubblicato.

### In sede di prova

Cifrato e autenticato, cartella dedicata, registro, niente vie parallele che aggirano l'applicazione, FTP solo come debito con data di fine.

### Errori da evitare

- Usare FTP sulla rete interna perché «tanto è interna».
- Lasciare i file depositati nella cartella di ingresso per sempre.
- Aprire SFTP sul server applicativo per scambiarsi documenti che l'applicazione già gestisce.

### Approfondire

- [SSH File Transfer Protocol](https://it.wikipedia.org/wiki/SSH_File_Transfer_Protocol)
- [File Transfer Protocol](https://it.wikipedia.org/wiki/File_Transfer_Protocol)

## Banda, latenza e throughput non sono la stessa misura

**Prove:** seconda prova gruppo 1, orale
**Tag:** banda, latenza, throughput
**Semaforo:** verde

### Inquadramento

La domanda evita di rispondere «serve una linea più larga» a ogni lentezza. Si distinguono le tre misure e si applica al desktop remoto e al caricamento di un file.

### Definizione

La banda è la capacità del canale, in bit al secondo. La latenza è il ritardo di un messaggio, spesso di andata e ritorno. Il throughput è ciò che si trasferisce davvero, e dipende da banda, latenza, perdite e da come il protocollo le usa.

### Nel dettaglio

Un file grande e sequenziale usa la banda. Una linea più larga lo fa arrivare prima, finché il disco o il server non diventano il collo. Un'applicazione interattiva, un desktop remoto, un modulo che fa dieci richieste una dopo l'altra, dipende dalla latenza. Ogni richiesta paga il viaggio. Una linea larga con duecento millisecondi di ritardo resta scomoda per il desktop e va benissimo per un backup notturno. Aggiungere banda non accorcia il viaggio geografico.

Il throughput di TCP su un collegamento lungo e largo dipende anche dalla finestra: se non si può avere in volo abbastanza dato, non si riempie la banda. In un orale basta saperlo nominare, non calcolarlo. Le perdite peggiorano tutto, perché TCP rallenta quando vede perdita. Un collegamento che perde e un collegamento stretto si curano in modo diverso: il primo si ripara, il secondo si allarga o si riduce ciò che si manda.

Si misura prima. Il tempo di andata e ritorno verso la sede, la banda occupata nell'ora di punta, le perdite. Poi si decide. Un desktop virtuale verso una sede con latenza alta non si cura con un altro access point.

### Esempio

La sede distaccata ha una linea da cento megabit e quaranta millisecondi di ritardo. Il backup notturno satura la banda e si sposta in orario, o si riduce con gli incrementali. Il desktop remoto resta pesante per il ritardo, e per quel lavoro si preferisce l'applicazione web, che fa meno viaggi.

### In sede di prova

Tre definizioni, file grande contro interazione, misura prima della cura, la linea larga non accorcia la distanza.

### Errori da evitare

- Aumentare la banda per curare la latenza di un desktop remoto.
- Dare per buono il throughput nominale della linea.
- Ignorare le perdite e comprare più megabit.

### Approfondire

- [Larghezza di banda](https://it.wikipedia.org/wiki/Larghezza_di_banda)
- [Latenza](https://it.wikipedia.org/wiki/Latenza)

## MTU e frammentazione: il pacchetto che non passa

**Prove:** seconda prova gruppo 1, orale
**Tag:** MTU, frammentazione, VPN
**Semaforo:** rosso

### Inquadramento

È un guasto tipico delle VPN e dei tunnel, utile da riconoscere all'orale. La pagina piccola funziona, il caricamento grande si blocca.

### Definizione

L'MTU è la dimensione massima di un pacchetto su una tratta. Se un pacchetto più grande entra in una tratta più stretta, va frammentato o scartato. Un tunnel aggiunge intestazioni e riduce lo spazio utile.

### Nel dettaglio

Un tunnel cifra e incapsula. L'overhead gli ruba byte. Un pacchetto che sulla rete locale passa, dentro la VPN supera l'MTU del tunnel. Se la frammentazione funziona, si paga un costo. Se un apparato scarta i frammenti, o se il bit che vieta la frammentazione è acceso e il messaggio di «troppo grande» non torna al mittente, la connessione si comporta in modo strano: il login, fatto di pacchetti piccoli, riesce, e il primo allegato la congela. È una diagnosi da sapere, perché sembra un difetto dell'applicazione.

Si allinea l'MTU del tunnel a un valore che passi su tutta la tratta, spesso un po' sotto i 1500 byte classici, e si prova con un trasferimento grande, non solo con un ping piccolo. Il ping piccolo non vede il problema. Si prova anche che il messaggio di scarto torni, altrimenti il mittente non impara mai a rimpicciolire.

In un tema non si progetta l'MTU cifra per cifra, salvo che la traccia parli di sedi collegate da VPN. Si scrive: il tunnel si dimensiona e si prova con un trasferimento reale, perché l'overhead riduce la dimensione utile.

### Esempio

Dopo l'attivazione della VPN di sede, gli elenchi si aprono e gli allegati no. Si abbassa l'MTU del tunnel e si riprova con un file da dieci megabyte. Il trasferimento completa. La prova entra nella messa in servizio di ogni nuova sede.

### In sede di prova

Definire l'MTU, dire che il tunnel ruba spazio, descrivere il sintomo «il piccolo funziona, il grande no», prova con un trasferimento vero.

### Errori da evitare

- Provare un tunnel solo con il ping.
- Dare la colpa all'applicazione senza una prova di dimensione.
- Ignorare l'overhead quando si incapsula una rete dentro l'altra.

### Approfondire

- [Maximum transmission unit](https://it.wikipedia.org/wiki/Maximum_transmission_unit)
- [VPN](https://it.wikipedia.org/wiki/Virtual_Private_Network)

## DNS interno e DNS pubblico, due zone diverse

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** DNS, split horizon, nomi interni
**Semaforo:** verde

### Inquadramento

La domanda chiede chi risolve quale nome. Si tengono i nomi interni fuori da Internet e si evita che un ufficio interroghi un risolutore a caso.

### Definizione

Il DNS interno è autorevole per i nomi dell'ente e risolve, per conto delle postazioni, anche i nomi pubblici. Il DNS pubblico dell'ente pubblica solo i nomi che devono esistere da fuori, per esempio il sito e la posta. I nomi dei server interni non ci stanno.

### Nel dettaglio

Una postazione riceve dal DHCP l'indirizzo del risolutore interno e solo quello. Se una postazione usa un risolutore pubblico diretto, non vede i nomi interni e manda le query di lavoro, a volte i nomi interni digitati per errore, a un terzo. Si impedisce, per rete, la query DNS verso l'esterno che non passi dal risolutore dell'ente. Il risolutore interno inoltra ciò che non è suo.

La zona interna non si trasferisce e non si pubblica. Il nome del database, dei nodi, della gestione, resta interno. In un disegno si scrivono due righe: quali nomi sono pubblici, quali no. Lo stesso nome può dare risposte diverse secondo chi chiede, così da fuori si vede il proxy e da dentro, se serve, un altro indirizzo. La tecnica va usata con sobrietà e documentata, perché due verità sullo stesso nome confondono chi diagnostica.

Prima di una migrazione si abbassa il tempo di vita dei record che cambieranno, si aspetta, poi si cambia. Un tempo di vita di un giorno, cambiato la mattina della migrazione, lascia metà delle postazioni sul vecchio indirizzo fino al giorno dopo.

### Esempio

Da Internet si risolvono solo il sito e la posta. Da dentro, il risolutore dell'ente risolve anche `db.interno` e `proxy.interno`. Le postazioni non possono interrogare un DNS esterno direttamente. Il tempo di vita del record del proxy, la settimana della migrazione, è di cinque minuti.

### In sede di prova

Chi è autorevole di che cosa, le postazioni usano solo il risolutore interno, i nomi interni non si pubblicano, il tempo di vita prima di un cambio.

### Errori da evitare

- Pubblicare la zona interna per comodità di prova.
- Lasciare le postazioni libere di usare un risolutore qualsiasi.
- Cambiare un record con un tempo di vita lungo e aspettarsi l'effetto immediato.

### Approfondire

- [Domain Name System](https://it.wikipedia.org/wiki/Domain_Name_System)
- [DHCP](https://it.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)

## SPF, DKIM e DMARC, in ciò che un ente deve saper dire

**Prove:** seconda prova gruppo 1, orale
**Tag:** SPF, DKIM, DMARC, posta
**Semaforo:** giallo

### Inquadramento

La domanda è sulla posta che finge di venire dall'ente. Si distinguono tre controlli, senza trasformarli in una firma giuridica.

### Definizione

SPF dichiara quali server possono spedire posta per il dominio. DKIM firma il messaggio con una chiave del dominio, così il ricevente verifica che non sia stato alterato e che venga da chi ha quella chiave. DMARC dice al ricevente che cosa fare se i controlli falliscono, e chiede un rapporto.

### Nel dettaglio

Senza SPF, chiunque può annunciare un messaggio con il mittente dell'ente, e molti riceventi lo accettano. Si pubblica un record con i server leciti, e si include anche il servizio esterno che spedisce le circolari, altrimenti le circolari vere falliscono. DKIM mette una firma crittografica. Una modifica lungo la strada rompe la firma. DMARC, messo prima in sola segnalazione, fa vedere chi spedisce a nome dell'ente senza che lo si sappia. Poi si passa al rifiuto, quando si è sicuri di aver elencato tutti i mittenti leciti. Passare subito al rifiuto, dimenticando un servizio, butta la posta vera.

Questi controlli non dicono che il contenuto è vero, non sostituiscono la PEC e non firmano l'allegato. Dicono che il messaggio, con buona probabilità, è partito da un sistema del dominio e non è stato modificato. Un messaggio legittimo con un allegato dannoso li supera. Restano il filtro, la formazione e il secondo fattore.

Si allineano anche i nomi. Il dominio di cui gli utenti si fidano è quello che va protetto, compresi i domini simili che l'ente non usa e che qualcun altro potrebbe registrare. Almeno il dominio vero va chiuso.

### Esempio

L'ente pubblica SPF con il proprio server e con il servizio di newsletter. DKIM firma. DMARC per un mese è in segnalazione: si scopre un applicativo che spedisce da un indirizzo non elencato, lo si aggiunge, poi DMARC passa al rifiuto. La PEC resta un altro canale, per le notifiche.

### In sede di prova

Che cosa dichiara ciascuno dei tre, l'ordine segnalazione poi rifiuto, che cosa non garantiscono, la PEC che resta distinta.

### Errori da evitare

- Attivare il rifiuto prima di conoscere tutti i mittenti leciti.
- Presentare DMARC come valore legale del messaggio.
- Proteggere un dominio e lasciare che gli applicativi spediscano da un altro, non allineato.

### Approfondire

- [Sender Policy Framework](https://it.wikipedia.org/wiki/Sender_Policy_Framework)
- [DMARC](https://it.wikipedia.org/wiki/DMARC)

## Autenticare una presa e un accesso senza fili con 802.1X

**Prove:** seconda prova gruppo 1, orale
**Tag:** 802.1X, RADIUS, porte
**Semaforo:** giallo

### Inquadramento

La domanda chiede come una porta del corridoio non diventi un punto di rete anonimo. Si descrive l'autenticazione del dispositivo o della persona prima di entrare nella VLAN giusta.

### Definizione

802.1X è il meccanismo con cui una porta, cablata o radio, resta chiusa finché un server di autenticazione non dice chi è dall'altra parte e in quale rete metterlo. Spesso il server è RADIUS, agganciato alla directory dell'ente.

### Nel dettaglio

Senza autenticazione, una presa in sala riunioni è una presa nella VLAN degli uffici per chiunque colleghi un cavo. Con 802.1X la porta, all'inizio, parla solo con il server di autenticazione. Le credenziali o il certificato del dispositivo vengono verificati. Se sono di un dipendente, la porta entra nella VLAN degli uffici. Se sono di un ospite, entra nella VLAN ospiti, che esce verso Internet e non verso i server. Se non sono nulla, resta chiusa.

Il certificato sul dispositivo è più forte di una password condivisa del Wi-Fi, perché identifica la macchina e si revoca. La password di rete unica, appiccicata sotto il telefono della reception, non si revoca a una persona sola. Si preferisce l'identità personale o il certificato, e la password unica resta, se resta, solo per una rete ospiti isolata.

Il server di autenticazione è un componente critico. Se è spento, le porte non aprono, e nessuno lavora. Si ridonda, oppure si definisce con chiarezza una procedura di emergenza, corta e registrata, non una disattivazione permanente «finché non si capisce».

### Esempio

Le prese degli uffici chiedono il certificato del PC dell'ente e mettono il dispositivo nella VLAN uffici. La rete senza fili degli ospiti, con una chiave propria, finisce in una VLAN che non raggiunge i server. Un PC sconosciuto sulla presa della sala riunioni non ottiene un indirizzo degli uffici.

### In sede di prova

Porta chiusa finché non c'è identità, VLAN scelta dal server, ospiti separati, server di autenticazione ridondato, niente chiave unica per la rete interna.

### Errori da evitare

- Lasciare le prese di sala riunioni senza autenticazione nella rete interna.
- Usare una sola password di Wi-Fi per i dipendenti, per anni.
- Spegnere 802.1X al primo disguido e lasciarlo spento.

### Approfondire

- [IEEE 802.1X](https://it.wikipedia.org/wiki/IEEE_802.1X)
- [RADIUS](https://it.wikipedia.org/wiki/RADIUS)

## Firewall con stato e regola di default

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** firewall, stato, default deny
**Semaforo:** verde

### Inquadramento

La domanda chiede come si scrive una politica, non come si compra un apparato. Si parte dal negare e si aprono i passaggi necessari, ricordando le connessioni già aperte.

### Definizione

Un firewall con stato ricorda le connessioni. Una regola permette di iniziarne una in un verso, e i pacchetti di ritorno di quella connessione sono ammessi senza una regola speculare. Ciò che non corrisponde a una connessione nota e non è permesso da una regola viene negato.

### Nel dettaglio

Si scrive la politica come elenco di permessi, dall'alto, e in fondo il rifiuto. Una regola larga in cima rende morte quelle sotto. Ogni permesso dice zona di origine, zona di destinazione, porta, e il motivo. «Uffici verso proxy, TCP quattrocentoquarantatré, per il portale.» Il database non compare in alcuna regola che parta dagli uffici. Compare in una regola che parte dai nodi applicativi, sulla porta del motore.

Le regole temporanee hanno una data. Senza data restano. Due volte l'anno si leggono ad alta voce e si toglie ciò di cui nessuno ricorda il motivo. Il registro dei rifiuti si campiona: un rifiuto continuo verso una porta inattesa è un'applicazione mal configurata o un tentativo, e in entrambi i casi si vuole saperlo. Registrare tutto per sempre, senza leggerlo, riempie il disco.

Il firewall non vede il contenuto cifrato, se non termina lui TLS. Filtra indirizzi e porte, e lo stato. Il permesso applicativo sta comunque sull'applicazione. Aprire solo la porta giusta è necessario e non sufficiente.

### Esempio

Dagli uffici si esce verso il proxy sulla quarantatré e verso la posta sulle porte previste. Dai nodi si va al database sulla sua porta. Dalla gestione si va alle console. Tutto il resto è negato e una sintesi dei rifiuti si guarda ogni settimana. Una regola aperta per un fornitore, in marzo, ha la scadenza in aprile.

### In sede di prova

Stato, permesso esplicito, rifiuto finale, regole con il motivo e la scadenza, il firewall non sostituisce l'autorizzazione sull'oggetto.

### Errori da evitare

- Mettere un «consenti tutto» interno in cima.
- Aprire la porta del database verso gli uffici.
- Lasciare regole temporanee senza una data.

### Approfondire

- [Firewall](https://it.wikipedia.org/wiki/Firewall)
- [DMZ](https://it.wikipedia.org/wiki/DMZ)

## Pubblicare un solo servizio: inoltro e bastion

**Prove:** seconda prova gruppo 1, prima prova
**Tag:** NAT, pubblicazione, bastion
**Semaforo:** giallo

### Inquadramento

La domanda chiede come un servizio interno diventa raggiungibile, e come non si finisce a pubblicare la macchina intera. Si distingue l'inoltro di una porta dall'accesso di amministrazione.

### Definizione

L'inoltro pubblica una porta dell'indirizzo esterno verso una porta di un indirizzo interno. Un bastion è un punto di ingresso amministrativo, piccolo e sorvegliato, da cui poi si raggiungono i sistemi interni, senza pubblicare ciascun sistema.

### Nel dettaglio

Si pubblica la porta del proxy, non la porta del nodo e non la porta del database. L'inoltro di «tutte le porte» verso un server interno è la pubblicazione del server. Anche una porta sola va giustificata. Se per una migrazione si inoltra temporaneamente altro, la regola ha una scadenza e un nome di chi l'ha chiesta.

L'amministrazione non si pubblica. Gli amministratori entrano in VPN o su un bastion, con secondo fattore, e dal bastion aprono le sessioni verso i nodi. Il bastion registra le sessioni. Non tiene i dati delle pratiche. Non è un posto dove lavorare con i documenti. È una porta. Se viene compromesso, le chiavi che ci stanno sopra sono il danno: quindi non ci si lasciano password in un file e non ci si entra con l'utente di ogni giorno usato anche per la posta.

Si verifica da fuori, a messa in servizio e dopo ogni cambiamento del firewall, quali porte rispondono sull'indirizzo pubblico. L'elenco atteso ha una riga. Ogni riga in più si chiude lo stesso giorno.

### Esempio

L'indirizzo pubblico inoltra solo il quattrocentoquarantatré al proxy. Gli amministratori arrivano in VPN al bastion e da lì in SSH ai nodi, dalla rete di gestione. Una scansione esterna mensile conferma una sola porta aperta. Una regola di inoltro per un fornitore, aperta in emergenza, scade il venerdì.

### In sede di prova

Pubblicare una porta di un servizio, non una macchina. Amministrazione via bastion o VPN. Verifica periodica delle porte visibili. Scadenze.

### Errori da evitare

- Inoltrare il desktop remoto di un server sull'indirizzo pubblico.
- Pubblicare SSH insieme al sito «così è comodo».
- Non verificare da fuori che cosa risponde davvero.

### Approfondire

- [Network address translation](https://it.wikipedia.org/wiki/Network_address_translation)
- [Bastion host](https://it.wikipedia.org/wiki/Bastion_host)

## Aggregare più collegamenti fra gli stessi apparati

**Prove:** seconda prova gruppo 1, orale
**Tag:** LACP, aggregazione, ridondanza
**Semaforo:** rosso

### Inquadramento

È un dettaglio di sala, da sapere se si parla di switch ridondati. Si dice che cosa si guadagna mettendo due cavi fra gli stessi due apparati e quale guasto non si copre.

### Definizione

L'aggregazione tratta più collegamenti fisici come un canale solo, così la banda si somma, entro i limiti del protocollo, e la caduta di un cavo non fa cadere il canale. I due capi devono essere d'accordo sul protocollo, per esempio LACP.

### Nel dettaglio

Due cavi messi senza aggregazione, fra gli stessi switch, possono creare un anello, e l'anello senza un protocollo che lo gestisca moltiplica i broadcast fino a rendere inutilizzabile la rete. Non si «mettono due cavi per sicurezza» senza dire chi è il protocollo. Con l'aggregazione, i due cavi sono un canale. Se ne muore uno, l'altro porta il traffico, con metà banda. È ridondanza e capacità insieme, fra quei due apparati.

Non protegge dalla caduta dello switch intero. Se entrambi i cavi arrivano allo stesso switch, lo switch resta un punto unico. Per toglierlo servono due switch, e un protocollo fra loro, non solo due cavi. Si nomina il livello giusto del disegno: cavo doppio fra una coppia, switch doppio per il nodo.

Si prova staccando un cavo in finestra. Un cavo di riserva che non ha mai portato traffico può essere guasto, e lo si scopre insieme all'altro. La prova è parte della messa in servizio del rack.

### Esempio

Fra lo switch di piano e il centro stanno due fibre in aggregazione, su percorsi diversi. La rottura di una fibra dimezza la banda e non isola il piano. Lo switch di centro, se è uno solo, resta il punto unico, e per il servizio critico se ne mette una coppia, non un terzo cavo verso lo stesso chassis.

### In sede di prova

A che serve l'aggregazione, il rischio dell'anello se si fanno due cavi a mano, che cosa non copre (lo switch intero), la prova del distacco.

### Errori da evitare

- Aggiungere un secondo cavo senza un protocollo e creare un anello.
- Credere che due cavi verso lo stesso switch tolgano il punto unico.
- Non staccare mai un cavo per vedere se l'altro regge.

### Approfondire

- [Link aggregation](https://it.wikipedia.org/wiki/Link_aggregation)
- [Switch](https://it.wikipedia.org/wiki/Switch)

## SNMP e la lettura degli apparati, senza aprire una falla

**Prove:** seconda prova gruppo 1, orale
**Tag:** SNMP, monitoraggio, community
**Semaforo:** rosso

### Inquadramento

È lo strumento con cui il monitoraggio parla con switch e UPS. Si dice la versione e il confine, perché la versione vecchia è una password in chiaro con poteri di lettura, a volte di scrittura.

### Definizione

SNMP permette di leggere, e se abilitato di modificare, lo stato di un apparato: porte, errori, temperatura, carico. Le versioni antiche usano una stringa condivisa, spesso nota, trasportata in chiaro. Le versioni attuali autenticano e cifrano.

### Nel dettaglio

Si usa la versione che autentica, sulla rete di gestione, e solo il server di monitoraggio può interrogare. La stringa di fabbrica, la parola «public», si disabilita. La scrittura via SNMP, se non serve, si spegne: è un modo per cambiare la configurazione di uno switch senza entrare in console. Gli apparati che sanno fare solo la versione vecchia stanno isolati nella rete di gestione e hanno una data di sostituzione.

I dati che si leggono sono quelli che il monitoraggio userà. Interrogare tutto, ogni dieci secondi, carica apparati piccoli e produce grafici che nessuno guarda. Si scelgono porte su e giù, errori, temperatura degli UPS, spazio. Il resto si omette. Un allarme su «porta giù» del collegamento fra le sedi chiama una persona. Un allarme su ogni porta di ufficio che un dipendente spenge la sera non chiama nessuno, perché dopo una settimana non lo legge più nessuno.

### Esempio

Gli switch esportano lo stato verso il monitoraggio, sulla rete di gestione, con autenticazione. La scrittura è spenta. Le community di fabbrica non rispondono. Un collegamento di dorsale che cade apre un allarme. Lo spegnimento di una presa di ufficio resta un evento nel grafico, non una telefonata.

### In sede di prova

A che serve, versione che autentica, rete di gestione, scrittura spenta se non necessaria, allarmi pochi.

### Errori da evitare

- Lasciare «public» sulla rete degli uffici.
- Consentire la scrittura SNMP senza un motivo e senza registro.
- Allarmare su ogni porta di scrivania.

### Approfondire

- [Simple Network Management Protocol](https://it.wikipedia.org/wiki/Simple_Network_Management_Protocol)
- [Monitoraggio (informatica)](https://it.wikipedia.org/wiki/Monitoraggio_(informatica))

## Ping: che cosa conferma e che cosa non dice

**Prove:** seconda prova gruppo 1, orale
**Tag:** ICMP, ping, diagnosi
**Semaforo:** verde

### Inquadramento

La domanda chiede che cosa si è dimostrato quando un ping risponde, e che cosa resta aperto. Si distingue il raggiungimento di un indirizzo dal funzionamento di un servizio.

### Definizione

Il ping invia un messaggio ICMP di richiesta eco e attende la risposta. Se la risposta arriva, il nodo è raggiungibile a quel livello, nel momento della prova, lungo il percorso usato. Non dice che l'applicazione risponde, che la porta è aperta, né che il percorso sarà lo stesso fra un minuto.

### Nel dettaglio

Un ping che fallisce ha più cause lecite. Il nodo è spento, un firewall scarta ICMP, il nodo è configurato per non rispondere, il percorso è rotto. Trattare il silenzio come «server spento» è l'errore. Per questo, dopo un ping negativo, si prova la porta del servizio, si guarda il registro del firewall e si chiede a un secondo punto di osservazione. Un ping positivo con l'applicazione muta sposta il sospetto dal cavo al processo: il sistema risponde, il servizio no.

ICMP non va chiuso tutto e non va lasciato tutto aperto. Le sonde di un bilanciatore e la scoperta della dimensione massima del pacchetto usano ICMP. Chiuderlo in blocco rompe diagnosi e, a volte, il passaggio di pacchetti grandi. Lasciarlo aperto verso Internet su tutti i server offre una mappa. La regola si scrive: chi può fare eco, verso chi, e il resto si scarta.

### Esempio

Il portale non si apre. Il ping del server risponde in un millisecondo dalla rete interna. La porta 443 non accetta connessioni e il registro del processo dice che non è in esecuzione. Il guasto non è la rete. Dall'esterno, lo stesso ping è filtrato di proposito: il controllo pubblico è una richiesta HTTPS, non un eco.

### In sede di prova

Ping è raggiungibilità, non salute del servizio. Il silenzio ha più cause. ICMP si filtra con una regola, non si abolisce.

### Errori da evitare

- Dichiarare spento un server che non risponde al ping.
- Chiudere tutto ICMP e poi non capire perché i pacchetti grandi non passano.
- Fermare la diagnosi al primo ping positivo.

### Approfondire

- [Internet Control Message Protocol](https://it.wikipedia.org/wiki/Internet_Control_Message_Protocol)
- [Ping](https://it.wikipedia.org/wiki/Ping)

## Rotta predefinita e prefisso più lungo

**Prove:** seconda prova gruppo 1, orale
**Tag:** routing, default, longest match
**Semaforo:** verde

### Inquadramento

La domanda chiede come un router scelga l'uscita. Si tengono due idee: la rotta più specifica vince, e la rotta predefinita è il resto del mondo, non una rotta come le altre.

### Definizione

Una rotta associa un prefisso a un salto successivo. Se più rotte corrispondono, vince il prefisso più lungo, cioè il più specifico. La rotta predefinita, 0.0.0.0/0, corrisponde a tutto ciò che non ha una rotta migliore. Senza di lei, un indirizzo sconosciuto non esce.

### Nel dettaglio

L'errore classico è credere che la rotta «più importante» vinca per priorità amministrativa anche quando è meno specifica. La specificità si guarda prima. Una rotta per 10.1.0.0/16 verso la sala e una per 10.1.8.0/24 verso un laboratorio: il laboratorio vince per gli indirizzi di quel /24, il resto del /16 va in sala. La predefinita non ruba il traffico interno, se le rotte interne esistono. Le ruba se qualcuno le ha cancellate.

Su un host la predefinita è il gateway. Se è sbagliata, l'host parla con la propria sottorete e non con il resto. Su un firewall di confine la predefinita punta al fornitore. Una seconda predefinita, lasciata da una prova, crea due uscite e un ritorno che non coincide: il firewall con stato scarta le risposte che non ha visto partire.

Si scrive la rotta e si dice da dove arriva: statica, messa a mano, o appresa. Una rotta statica verso un salto spento resta in tabella e manda il traffico nel vuoto, finché qualcuno non la toglie.

### Esempio

La rete degli uffici è 10.2.0.0/16, il server di protocollo è 10.2.5.10. Una rotta più specifica non serve. Un portatile con gateway 10.2.5.10, per errore, manda a quel server tutto il traffico esterno: il server non è un router e le pagine non si aprono, mentre le stampanti della stessa sottorete funzionano. Il sintomo distingue il gateway rotto dal cavo rotto.

### In sede di prova

Vince il prefisso più lungo. La predefinita è il resto. Una predefinita di troppo spiega il ritorno che non torna.

### Errori da evitare

- Dire che la rotta predefinita ha sempre la precedenza.
- Dimenticare il gateway sull'host e cercarne il guasto sul router di confine.
- Lasciare una rotta statica verso un dispositivo spento.

### Approfondire

- [Instradamento](https://it.wikipedia.org/wiki/Instradamento)
- [Router](https://it.wikipedia.org/wiki/Router)

## Un solo percorso nel livello 2

**Prove:** seconda prova gruppo 1, orale
**Tag:** spanning tree, anello, broadcast
**Semaforo:** giallo

### Inquadramento

La domanda chiede perché due cavi fra gli stessi switch, messi per ridondanza, possano spegnere la rete invece di proteggerla. Si spiega l'anello e il protocollo che ne lascia attivo un solo ramo.

### Definizione

Al livello 2 un frame non ha un tempo di vita che lo fermi. Se esiste un anello, un broadcast gira all'infinito. Lo spanning tree calcola un albero, blocca le porte che chiuderebbero un ciclo e le riapre se il ramo attivo cade.

### Nel dettaglio

Due collegamenti fra due switch sono un anello. Senza spanning tree, il primo broadcast si moltiplica finché la rete non passa più traffico utile: la tempesta. Con lo spanning tree, una delle due porte sta in blocco. Il cavo c'è, la ridondanza c'è, il ciclo no. Quando il ramo attivo si stacca, la convergenza riapre l'altro. Quei secondi di convergenza sono il costo: una rete che «ritorna» da sola dopo una ventina di secondi, o meno con le varianti rapide, sta facendo questo.

Il protocollo va tenuto omogeneo. Uno switch nuovo con lo spanning tree spento, infilato «per provare», richiude l'anello. Si spegne il protocollo solo con una ragione scritta, su un tratto che non può fare ciclo, e si sa quale. Le porte verso i server non devono negoziare da capo a ogni accensione: si fissano, così un utente non finge di essere uno switch.

In orale basta il meccanismo. Il nome della variante e i tempi si citano se si è appena rivisti, altrimenti si dice che la convergenza non è istantanea e che durante quella finestra il traffico può fermarsi.

### Esempio

Due switch di piano collegati due volte, per non dipendere da un cavo. Una porta è in blocco. Si stacca il cavo attivo: per alcuni secondi le postazioni non parlano, poi il secondo cavo entra e la rete torna. Nessuno ha riconfigurato nulla. Se lo spanning tree fosse stato spento, lo stesso doppio cavo avrebbe saturato il piano al primo broadcast.

### In sede di prova

Anello, broadcast senza fine, albero che blocca un ramo, convergenza non istantanea, niente switch «di prova» con il protocollo spento.

### Errori da evitare

- Credere che due cavi fra switch siano ridondanza anche senza un protocollo.
- Descrivere lo spanning tree come un protocollo di routing IP.
- Ignorare i secondi di fermo durante la convergenza.

### Approfondire

- [Switch](https://it.wikipedia.org/wiki/Switch)
- [Dominio di broadcast](https://it.wikipedia.org/wiki/Dominio_di_broadcast)

## Porte note e porte effimere

**Prove:** seconda prova gruppo 1, orale
**Tag:** socket, porte, TCP
**Semaforo:** verde

### Inquadramento

La domanda chiede come, su uno stesso indirizzo, convivano il sito, la posta e dieci utenti. Si distingue la porta su cui il servizio ascolta dalla porta che il client sceglie per quella conversazione.

### Definizione

Un socket è la coppia indirizzo e porta, più il protocollo. I servizi ascoltano su porte note: 443 per HTTPS, 25 per la posta in ingresso fra serventi, 22 per l'amministrazione remota cifrata. Il client usa una porta effimera, scelta fra le alte, diversa per ogni connessione.

### Nel dettaglio

La connessione è identificata da quattro numeri: indirizzo e porta di partenza, indirizzo e porta di arrivo. Per questo mille persone aprono lo stesso sito: il server è uno, le porte effimere dei client distinguono le conversazioni. Esaurire le porte effimere, o tenerle occupate da connessioni mezze chiuse, fa fallire connessioni nuove mentre il ping funziona. È un sintomo da sapere nominare.

In un firewall la regola nomina la porta del servizio, non le effimere. Aprire «tutte le porte alte» verso un server perché i client le usano è il verso sbagliato: le effimere stanno dal lato di chi inizia. Il server di risposta usa la porta nota. Una regola scritta al contrario apre mezzo server.

Le porte note non sono una legge fisica. Un servizio può ascoltare altrove, e allora il client va configurato. Lasciare un database in ascolto sulla porta nota, raggiungibile dalla rete degli uffici, è una scelta, e di solito è una scelta sbagliata: il database parla solo con l'applicazione.

### Esempio

Il proxy termina TLS sulla 443 e parla con l'applicazione su una porta alta, solo dalla rete dei server. Gli uffici raggiungono la 443. Non raggiungono la porta dell'applicazione né quella del database. Dieci pratiche aperte dallo stesso posto sono dieci socket, con dieci porte effimere, e il server le distingue senza confondere le sessioni.

### In sede di prova

Quattro numeri identificano la connessione. Porta nota dal lato del servizio, effimera dal lato di chi apre. Il firewall non apre le alte verso il server.

### Errori da evitare

- Credere che ogni utente abbia bisogno di una porta pubblica diversa sul server.
- Aprire l'intervallo delle porte effimere in ingresso.
- Lasciare il database raggiungibile sulla porta nota.

### Approfondire

- [Transmission Control Protocol](https://it.wikipedia.org/wiki/Transmission_Control_Protocol)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## Il NAT non è un firewall

**Prove:** seconda prova gruppo 1, orale, prima prova
**Tag:** NAT, PAT, firewall
**Semaforo:** verde

### Inquadramento

La domanda, frequente quando il candidato ha appena descritto «la rete dell'ente esce con un indirizzo», chiede che protezione sia davvero quella. Si separa la traduzione degli indirizzi dal filtraggio.

### Definizione

Il NAT traduce indirizzi, e spesso porte, fra una rete privata e una pubblica. Molti host escono con un solo indirizzo pubblico. È un rimedio alla scarsità di indirizzi e un modo di non esporre la numerazione interna. Non decide, da solo, quali servizi sono leciti.

### Nel dettaglio

La traduzione dinamica fa uscire una conversazione nata dentro e fa rientrare le risposte di quella conversazione. Un pacchetto nato fuori, senza una traduzione già aperta, non trova la porta. Questo effetto somiglia a un firewall e non lo è: non c'è una politica, non c'è un registro delle regole, non c'è un rifiuto esplicito motivato. Basta una traduzione statica, messa per pubblicare un servizio, e quel servizio è raggiungibile. Basta un'applicazione interna che apre lei la connessione verso un comando esterno, e il NAT la lascia uscire.

Per questo nel disegno si mettono entrambi. Il firewall dice che cosa può iniziare, verso dove, su quale porta, e scrive il rifiuto. Il NAT, sul confine, traduce ciò che il firewall ha lasciato passare. Pubblicare un servizio è una traduzione statica di una sola porta, verso un bastione, non verso la rete degli uffici. La numerazione interna resta privata anche senza illudersi che questo basti.

Un caso da nominare: due reti private che si parlano attraverso un NAT simmetrico perdono l'indirizzo vero del client. I registri dell'applicazione vedono l'indirizzo del traduttore. Se l'audit deve dire quale postazione ha agito, o si evita il NAT su quel tratto, o si porta l'identità nell'applicazione, che è il posto giusto comunque.

### Esempio

Gli uffici escono verso Internet con un indirizzo pubblico. Il firewall permette 443 in uscita e vieta il resto, e tiene il registro. Una regola a parte traduce la sola porta 443 del proxy inverso. Il database non ha traduzione e non ha regola di ingresso. Dire «siamo al sicuro perché c'è il NAT» non descrive nessuna di queste tre scelte.

### In sede di prova

NAT traduce, il firewall filtra. La traduzione statica pubblica, la dinamica no. I registri applicativi non si fidano dell'indirizzo tradotto.

### Errori da evitare

- Presentare il NAT come misura di sicurezza sufficiente.
- Pubblicare un'intera macchina per esporre una porta.
- Cercare nei log del sito l'indirizzo vero del client dopo un NAT, senza averlo conservato altrove.

### Approfondire

- [Network address translation](https://it.wikipedia.org/wiki/Network_address_translation)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## Ping e traceroute non misurano la stessa cosa

**Prove:** seconda prova gruppo 1, orale
**Tag:** traceroute, latenza, diagnosi
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si localizza un rallentamento. Si distinguono tre numeri che i candidati mischiano: se il nodo risponde, quanti salti ci sono, quanto ci mette un salto.

### Definizione

Il ping misura se una destinazione risponde e il tempo di andata e ritorno verso di lei. Il traceroute elenca i salti fino alla destinazione, con il tempo di ciascun salto. Nessuno dei due misura la banda. Un collegamento lento e uno congestionato possono dare tempi alti per cause diverse.

### Nel dettaglio

Un tempo alto e stabile verso la destinazione, con i primi salti bassi, sposta il sospetto in fondo al percorso o sul server. Un tempo alto già al primo salto è la rete locale, il wireless, il cavo, la postazione. Un salto che non risponde, e i successivi che rispondono, spesso è un router che non genera messaggi di scadenza: non è un buco. Si impara a non dichiarare interrotto un percorso che poi arriva.

I tempi del traceroute sono campioni, non un contratto. Si ripetono. Una punta isolata non è un guasto. Una punta a ogni prova, sullo stesso salto, merita uno sguardo. La misura si fa dalla rete di chi soffre, non solo dalla rete dell'amministratore: il percorso può essere diverso.

La banda si misura altrimenti, con un trasferimento di dimensione nota, e non durante l'orario di punta se la prova stessa dà fastidio. In un elaborato, «la rete è lenta» non è una diagnosi. Si scrive che cosa si è misurato.

### Esempio

Gli uffici di un piano aprono il portale in quattro secondi, gli altri piani in meno di uno. Il ping verso il server è basso da ogni piano. Il traceroute del piano lento mostra il salto dello switch di piano già alto. Il server non c'entra. Il wireless di quel piano è saturato. Un ping fatto solo dalla sala server non avrebbe visto nulla.

### In sede di prova

Ping è la destinazione, traceroute sono i salti, nessuno dei due è la banda. Un salto muto in mezzo al percorso non è un'interruzione. Si misura da dove il sintomo si vede.

### Errori da evitare

- Leggere il traceroute come una misura di megabit.
- Dichiarare guasto un router che semplicemente non risponde ai messaggi di diagnosi.
- Fare la prova solo dal punto in cui tutto funziona.

### Approfondire

- [Traceroute](https://it.wikipedia.org/wiki/Traceroute)
- [Latenza](https://it.wikipedia.org/wiki/Latenza)

## Tempesta di broadcast

**Prove:** seconda prova gruppo 1, orale
**Tag:** broadcast, anello, VLAN
**Semaforo:** giallo

### Inquadramento

La domanda descrive una rete che di colpo non passa più nulla, senza un cavo staccato. Si spiega un meccanismo, non un prodotto.

### Definizione

Il broadcast è un frame diretto a tutti gli host di un dominio. Una tempesta è quel traffico che si moltiplica, di solito per un anello al livello 2, fino a occupare i collegamenti e la CPU degli switch. Il traffico utile non ha più spazio.

### Nel dettaglio

Le cause da saper dire sono tre. Un anello senza spanning tree. Una VLAN così grande che il traffico lecito di broadcast, DHCP, risoluzione degli indirizzi, già pesa. Un dispositivo guasto che emette senza sosta. Il sintomo comune è che il ping locale fallisce insieme alle applicazioni, e gli switch mostrano le porte saturate in ingresso senza un corrispondente traffico utile.

Si contiene restringendo il dominio: VLAN per funzione, non un'unica rete piatta per l'edificio. Lo spanning tree impedisce l'anello. Un limite di broadcast sulla porta verso le postazioni ferma un dispositivo impazzito prima che fermi il piano. Non si mette quel limite sui collegamenti fra switch senza aver capito il volume lecito, altrimenti si scarta traffico sano.

La diagnosi non è «spegnere tutto». Si stacca il tratto sospetto, si guarda quale porta smette di saturare, si rimette il tratto con il protocollo che impedisce il ciclo. Poi si scrive che cosa mancava, perché la tempesta torna il giorno in cui qualcuno ricollega il cavo «di scorta».

### Esempio

Un cavo di scorta, lasciato collegato alle due estremità fra due switch, chiude un anello. In un minuto le postazioni del piano non raggiungono nemmeno il gateway. Si stacca il cavo di scorta, la rete respira, si riaccende lo spanning tree che qualcuno aveva disattivato, e solo allora il cavo di scorta può tornare, con una porta in blocco.

### In sede di prova

Broadcast moltiplicato, anello come causa tipica, VLAN che limita il dominio, limite sulla porta delle postazioni, il cavo di scorta non si lascia innestato senza un protocollo.

### Errori da evitare

- Cercare il guasto al livello applicativo mentre tutto il piano è fermo.
- Allargare la VLAN «per semplificare» fino a un solo dominio enorme.
- Ricollegare il secondo cavo senza aver capito perché il primo incidente è finito.

### Approfondire

- [Dominio di broadcast](https://it.wikipedia.org/wiki/Dominio_di_broadcast)
- [Switch](https://it.wikipedia.org/wiki/Switch)

## Una presa, un indirizzo hardware

**Prove:** seconda prova gruppo 1, orale
**Tag:** port security, MAC, presa
**Semaforo:** giallo

### Inquadramento

La domanda chiede come si impedisce che chiunque attacchi uno switch personale alla presa dell'ufficio. È una misura di livello 2, utile e parziale.

### Definizione

La sicurezza di porta impara uno o pochi indirizzi hardware sulla presa e, se ne compare un altro, blocca la porta o scarta i frame nuovi. Riduce il danno di uno switch abusivo e di una sostituzione di apparato non autorizzata. Non autentica la persona.

### Nel dettaglio

Si fissa un numero basso di indirizzi per presa, di solito uno. La porta che va a una stampante non deve accettarne dieci. Quando l'indirizzo cambia perché il telefono di servizio è stato sostituito, la porta si sblocca con un gesto registrato, non si disattiva la misura su tutto il piano. Le porte degli switch di transito non hanno questo vincolo: lì gli indirizzi sono molti per definizione, e la misura starebbe nel posto sbagliato.

Il limite è chiaro. Un indirizzo hardware si può falsificare. Chi ha già un posto sulla rete non è fermato da questa regola. Per sapere chi è la persona serve l'autenticazione della presa, 802.1X, che è un'altra voce. Le due cose si sommano. La prima è rapida e ferma gli incidenti grossolani. La seconda dice l'identità.

In un elaborato basta una riga: le prese degli uffici accettano un solo indirizzo, le porte verso i server stanno su un altro switch, e l'accesso alla rete degli ospiti non condivide quelle prese.

### Esempio

Un tirocinante collega un piccolo switch per avere due posti. La porta vede più indirizzi e si chiude. La postazione smette di parlare, il resto del piano no. Il ripristino lo fa chi amministra la rete, dopo aver tolto lo switch. Senza la misura, lo switch del tirocinante poteva diventare un altro anello.

### In sede di prova

Un indirizzo per presa utente, blocco locale, sblocco registrato, non è autenticazione della persona, si affianca a 802.1X.

### Errori da evitare

- Presentarla come prova di identità.
- Applicarla alle porte di transito fra switch.
- Disattivarla su tutta la sede al primo telefono sostituito.

### Approfondire

- [Indirizzo MAC](https://it.wikipedia.org/wiki/Indirizzo_MAC)
- [Switch](https://it.wikipedia.org/wiki/Switch)

## I tre blocchi privati, da riscrivere

**Prove:** seconda prova gruppo 1
**Tag:** IPv4, indirizzi privati, esercizio
**Semaforo:** verde

### Inquadramento

È un esercizio numerico che la commissione può chiedere accanto al subnetting. I tre blocchi si sanno a memoria e si sa che non si annunciano su Internet.

### Definizione

Gli indirizzi privati sono 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16. Si usano dentro l'ente. Su Internet non sono instradati. Per uscire serve una traduzione, oppure un indirizzo pubblico assegnato al servizio che deve essere raggiunto da fuori.

### Nel dettaglio

Il secondo blocco è quello che si sbaglia. 172.16.0.0/12 va da 172.16.0.0 a 172.31.255.255. 172.32.0.0 non è privato. 192.168.0.0/16 arriva fino a 192.168.255.255, non si ferma a 192.168.1.0. Il primo blocco è un intero ottetto, 10, e per questo è quello che un ente sceglie quando vuole spazio per molte sottoreti.

Due sedi che usano entrambe 192.168.1.0/24 non si possono collegare in VPN senza traduzione: gli indirizzi non sono più univoci. Si progetta il piano di indirizzamento una volta, con blocchi diversi per sede e per funzione, e si scrive. Il piano è un documento, non una memoria del tecnico che c'era nel 2014.

Nel tema, la rete degli uffici, la rete dei server e la rete di gestione stanno in tre sottoreti del blocco 10, non in un unico 192.168.1.0 perché «tanto è interno». L'esercizio si rifà a mano: dato un /24, dire indirizzo di rete, primo host, ultimo host, broadcast. Il primo e l'ultimo indirizzo del blocco non si assegnano a una macchina.

### Esempio

Sede A: 10.1.0.0/16. Sede B: 10.2.0.0/16. Server: 10.1.10.0/24, uffici: 10.1.20.0/24, gestione: 10.1.30.0/24. Il portale pubblico ha un indirizzo pubblico sul proxy e un indirizzo 10.1.10.x sul server, che da Internet non si nomina. Una VPN fra sedi funziona perché i due /16 non si sovrappongono.

### In sede di prova

Tre blocchi a memoria, attenzione al 172.16/12, niente sovrapposizione fra sedi, primo e ultimo indirizzo non assegnati, pubblico solo su ciò che è pubblicato.

### Errori da evitare

- Credere privato tutto ciò che inizia per 172.
- Usare la stessa sottorete in due sedi da collegare.
- Assegnare l'indirizzo di broadcast a un server.

### Approfondire

- [Indirizzo IP](https://it.wikipedia.org/wiki/Indirizzo_IP)
- [Network address translation](https://it.wikipedia.org/wiki/Network_address_translation)

## Accesso, distribuzione e nucleo

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** rete a tre livelli, disegno, elaborato
**Semaforo:** verde

### Inquadramento

È la scaletta con cui si disegna la rete di un tema senza inventare venti apparati. Tre strati, una funzione ciascuno, e si sa che in un ente piccolo due strati possono coincidere, dichiarandolo.

### Definizione

L'accesso è dove si attaccano postazioni, telefoni, stampanti. La distribuzione aggrega gli accessi, applica le VLAN e le prime regole. Il nucleo inoltra veloce fra le distribuzioni e verso i server e l'uscita. I server non stanno sull'accesso degli uffici.

### Nel dettaglio

Nel disegno dell'elaborato compaiono cinque riquadri, non cinquanta. Postazioni, su uno switch di accesso, in VLAN uffici. Stampanti e dispositivi in una VLAN diversa, perché non devono vedere le porte di amministrazione. Server applicativi e database in una VLAN server, raggiunta solo dal proxy e, per il database, solo dall'applicazione. Gestione degli apparati in una VLAN che non porta il traffico degli utenti. Uscita verso Internet attraverso il firewall, con la zona esposta dove sta il solo proxy.

La distribuzione è il punto in cui le VLAN si instradano fra loro, e solo per le coppie previste. Uffici verso il proxy, sì. Uffici verso il database, no. Se l'ente del tema è piccolo, si scrive: accesso e distribuzione coincidono in un solo strato, il nucleo è il firewall. L'assunzione è lecita. Far finta di avere un nucleo ridondato con quattro router, senza saperlo spiegare, no.

Si segna un doppio collegamento solo dove si sa dire che cosa impedisce l'anello e che cosa succede se un ramo cade. Altrimenti un collegamento solo, e la frase «un secondo collegamento si aggiunge con spanning tree o con aggregazione, ed è un punto da non lasciare implicito».

### Esempio

Un piano di uffici, uno switch. Una sala, due switch per i server. Il firewall di confine fa da nucleo. Tre VLAN: uffici, server, gestione. L'unica pubblicazione è la 443 verso il proxy. Il database non ha porta verso gli uffici. Il disegno sta in mezza pagina e ogni freccia ha una frase.

### In sede di prova

Tre funzioni, server fuori dall'accesso utenti, VLAN che diventano regole, assunzione esplicita se due strati coincidono, niente apparati decorativi.

### Errori da evitare

- Attaccare il database allo stesso switch delle postazioni, nella stessa VLAN.
- Disegnare ridondanza senza dire chi blocca l'anello.
- Nominare un nucleo a più chassis senza un requisito che lo chieda.

### Approfondire

- [VLAN](https://it.wikipedia.org/wiki/VLAN)
- [Firewall](https://it.wikipedia.org/wiki/Firewall)

## Relay aperto: la posta che parte per conto di altri

**Prove:** seconda prova gruppo 1, orale
**Tag:** SMTP, relay, posta
**Semaforo:** giallo

### Inquadramento

La domanda chiede come un ente si ritrovi a spedire posta per sconosciuti, o a non spedire più la propria perché qualcuno l'ha fatto. Si distingue accettare posta per i propri domini da accettare posta per il mondo.

### Definizione

Un servente di posta accetta messaggi da inoltrare. Il relay per i propri utenti autenticati è il mestiere normale. Il relay aperto accetta messaggi da chiunque verso chiunque. Diventa una piattaforma di abusivi, e i domini dell'ente finiscono nelle liste di rifiuto.

### Nel dettaglio

La posta degli utenti esce autenticata, sulla porta di sottomissione, non sulla porta 25 lasciata senza credenziali. La porta 25 serve fra serventi, per ricevere la posta del dominio, e accetta solo i destinatari interni. Un servente di prova, acceso con la configurazione di fabbrica e raggiungibile, è il caso tipico: funziona, quindi nessuno lo guarda, e intanto inoltra.

Si controlla anche l'indirizzo di ritorno. Un nome che non corrisponde al dominio, o un dominio senza il record che autorizza quel servente, viene scartato dai destinatari seri. Le firme della posta, SPF, DKIM e DMARC, sono la dichiarazione pubblica di chi può spedire. Un relay aperto le rende false il giorno stesso.

Il sintomo, per chi amministra, è l'inverso di «la posta non parte»: per un po' parte troppa, poi non parte più nulla verso l'esterno, perché il dominio è stato rifiutato. Si chiude il relay, si guarda la coda, si svuota ciò che non è dell'ente, si chiede la rimozione dalle liste. Non si spegne il problema cambiando indirizzo del servente e lasciando la stessa regola.

### Esempio

Un'applicazione vecchia spedisce avvisi attraverso un servente interno che accetta qualsiasi mittente dalla rete uffici. Un portatile compromesso lo usa per migliaia di messaggi. Si restringe il servente all'applicazione, con credenziali, e i client utenti passano dal servente ufficiale autenticato. La coda abusiva si cancella. Il record del dominio continua a nominare solo il servente ufficiale.

### In sede di prova

Relay solo per i propri destinatari o per utenti autenticati. Porta di sottomissione distinta dalla 25. Un servente di prova non sta su Internet. Le firme della posta devono restare vere.

### Errori da evitare

- Lasciare in ascolto un servente di prova con la configurazione di fabbrica.
- Autenticare la posta degli utenti sulla stessa regola che accetta il mondo.
- Cambiare indirizzo senza chiudere la regola aperta.

### Approfondire

- [Simple Mail Transfer Protocol](https://it.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
- [Posta elettronica](https://it.wikipedia.org/wiki/Posta_elettronica)

## Rete ospiti, separata da chi ci lavora

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** ospiti, Wi-Fi, segmentazione
**Semaforo:** giallo

### Inquadramento

La domanda compare appena il tema ha visitatori, ditte o un'aula. Gli ospiti hanno bisogno di uscire. Non hanno bisogno di vedere i server.

### Definizione

La rete ospiti è un segmento che porta a Internet e non porta alla rete interna. L'accesso può essere una chiave che cambia, un portale che fa accettare una regola, o un account temporaneo. Il tratto comune è il perimetro, non la pagina di benvenuto.

### Nel dettaglio

Si disegna una VLAN che termina sul firewall e da lì esce, con una regola sola verso Internet e nessuna verso server, stampanti e gestione. Il wireless degli uffici è un'altra rete, con l'autenticazione delle persone dell'ente. Usare la stessa rete e «fidarsi del nome della rete» non separa nulla: chi è associato parla con i server.

Il portale che chiede un nome e fa spuntare una casella non autentica. Registra un gesto. Va bene per un visitatore, se il resto della separazione è vero. Va male se si crede che la casella sia un controllo di accesso. La chiave degli ospiti si cambia quando non è più un ospite, ed è scritta in un posto diverso dalla chiave interna. Una chiave stampata da anni sul cartello all'ingresso è pubblica.

La banda degli ospiti si limita, così un aggiornamento di un telefono non occupa il collegamento delle applicazioni. I registri tengono l'ora e l'indirizzo interno assegnato, per il tempo previsto, e non una copia della navigazione «per sicurezza» senza una base. Il minimo basta a rispondere a un incidente. Il resto è un trattamento di dati da giustificare.

### Esempio

I visitatori di una seduta usano una rete che esce su Internet. Non risolvono i nomi interni, non raggiungono il protocollo, non vedono le stampanti. La chiave è quella della giornata. Il personale entra con le proprie credenziali su un'altra rete, che raggiunge solo i servizi previsti. Il portale degli ospiti mostra la regola d'uso e non è il controllo che protegge i server.

### In sede di prova

Segmento diverso, uscita solo verso Internet, chiave o account che si revoca, portale come informazione e non come sicurezza, banda limitata.

### Errori da evitare

- Mettere gli ospiti nella VLAN degli uffici con una password diversa.
- Trattare il portale come un'autenticazione.
- Lasciare la stessa chiave per anni su un cartello.

### Approfondire

- [VLAN](https://it.wikipedia.org/wiki/VLAN)
- [Wi-Fi](https://it.wikipedia.org/wiki/Wi-Fi)

## Quando il ritorno non passa dallo stesso firewall

**Prove:** seconda prova gruppo 1, orale
**Tag:** routing asimmetrico, stato, firewall
**Semaforo:** giallo

### Inquadramento

La domanda spiega un guasto sottile: la connessione esce, la risposta esiste, il servizio per l'utente è muto. Si dà la colpa al routing che non torna indietro per la stessa strada.

### Definizione

Un firewall con stato lascia rientrare i pacchetti di una connessione che ha visto iniziare. Se la risposta rientra da un altro firewall, quello non ha lo stato, e la scarta. Il percorso è asimmetrico. I due versi non coincidono.

### Nel dettaglio

Succede quando ci sono due uscite, due rotte predefinite, un bilanciamento fatto a metà. Il client esce dal firewall A. Il server risponde verso il firewall B, perché la sua rotta dice così. A aspetta una risposta che non arriva. B vede una risposta senza richiesta e la butta. Il ping, che è simmetrico o permesso in entrambi, può funzionare lo stesso e confondere la diagnosi.

Si corregge facendo coincidere i percorsi, oppure tenendo lo stato condiviso fra i due firewall, che è una scelta da saper dire e da non inventare se non si conosce. La correzione semplice, in un ente, è una sola uscita attiva e l'altra di riserva, con un criterio chiaro di chi è attiva. Due uscite attive senza uno stato condiviso sono un incidente annunciato.

Nel disegno del tema, se si mettono due firewall, si scrive una frase: o uno solo inoltra, o lo stato è comune. Non si disegnano due scatole «per ridondanza» e si passa oltre.

### Esempio

Durante una prova si accende una seconda linea. Metà delle sessioni del portale si blocca, metà no, a seconda di dove esce la risposta. Si spegne la seconda linea, tutto torna, e la si riaccende solo come riserva che subentra quando la prima cade, non come seconda strada contemporanea.

### In sede di prova

Lo stato sta sul firewall che ha visto l'inizio. Il ritorno deve passare di lì. Due uscite attive richiedono uno stato condiviso, altrimenti una sola è attiva.

### Errori da evitare

- Diagnosticare un guasto applicativo quando solo alcune sessioni, a caso, falliscono.
- Aggiungere una seconda uscita senza dire dove sta lo stato.
- Fidarsi di un ping riuscito come prova che il firewall lascia passare la sessione.

### Approfondire

- [Firewall](https://it.wikipedia.org/wiki/Firewall)
- [Instradamento](https://it.wikipedia.org/wiki/Instradamento)

## Non inchiodare l'utente a un nodo

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** sessione, bilanciatore, stato
**Semaforo:** verde

### Inquadramento

La domanda arriva appena si è disegnato un bilanciatore. Si chiede se la seconda richiesta dello stesso utente debba tornare allo stesso nodo, e quale prezzo si paga a dir di sì.

### Definizione

La sessione appiccicata manda lo stesso client sempre allo stesso nodo, per un tempo. Serve solo se quel nodo tiene in memoria qualcosa che gli altri non hanno. Se lo stato di sessione sta in un archivio condiviso, o se non c'è stato, l'appiccico non serve e si toglie.

### Nel dettaglio

Con l'appiccico, spegnere un nodo per un aggiornamento spegne le sessioni che gli erano finite. Un nodo lento resta lento per chi gli è capitato, anche se gli altri sono liberi. Il bilanciatore sembra distribuire e in realtà ha delle pile storte. Si misura: nodi con il triplo delle sessioni degli altri sono il sintomo.

La via pulita è non tenere sullo specifico nodo nulla che il successivo non possa leggere. L'identità della sessione sta in un archivio comune, con una scadenza, oppure il server è davvero senza stato e ogni richiesta porta ciò che serve. Allora il bilanciatore manda la richiesta al nodo sano, e la sonda decide.

Se per un vincolo vero l'appiccico resta, si scrive perché, per quanto tempo, e che cosa succede quando il nodo cade: l'utente ripete l'accesso, non perde un dato già confermato. Il dato confermato sta nel database, che non è il nodo applicativo.

### Esempio

Due nodi dell'applicazione di prenotazione. La sessione, con l'identità e il ruolo, sta nel database, con scadenza a otto ore di lavoro. Il bilanciatore non appiccica. Si aggiorna un nodo, le richieste vanno all'altro, le prenotazioni già confermate restano. Un tentativo a metà, tenuto solo nel browser, si rifà, e questo è accettabile perché non era ancora un impegno.

### In sede di prova

Appiccico solo se lo stato è locale. Meglio lo stato condiviso. Il nodo che cade non porta con sé i dati confermati. La sonda resta la misura di salute.

### Errori da evitare

- Attivare l'appiccico per abitudine.
- Tenere la prenotazione confermata nella memoria di un solo processo.
- Credere che due nodi bilancino il carico mentre le sessioni sono inchiodate al primo.

### Approfondire

- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)
- [Bilanciamento del carico](https://it.wikipedia.org/wiki/Bilanciamento_del_carico)

## Tunnel completo e tunnel diviso

**Prove:** seconda prova gruppo 1, orale
**Tag:** VPN, split tunnel, accesso remoto
**Semaforo:** giallo

### Inquadramento

La domanda precisa un accesso remoto già disegnato. Si chiede se, una volta aperto il tunnel, anche la navigazione ordinaria passi dall'ente.

### Definizione

Nel tunnel completo tutto il traffico del portatile, anche quello verso Internet, entra nel tunnel e esce dal confine dell'ente. Nel tunnel diviso entra solo il traffico verso le reti interne. Il resto esce dal collegamento di casa o dell'albergo.

### Nel dettaglio

Il tunnel completo permette di applicare i controlli dell'ente anche alla navigazione, e impedisce che un portatile parli insieme con la rete interna e con una rete non fidata, tenendo le due porte aperte. Costa banda dell'ente e latenza. Un aggiornamento di sistema di cento portatili passa dal concentratore. Va dimensionato, altrimenti l'accesso remoto «c'è» e non si usa.

Il tunnel diviso è leggero e lascia fuori ciò che non deve vedere i server. È anche una strada laterale: il portatile è in rete interna e su Internet insieme, e un processo può usare la seconda strada. Si sceglie il diviso solo per reti destinate a pochi servizi, con i client il più possibile chiusi, e si scrive che cosa non deve mai prendere la strada corta. I servizi interni si risolvono con il DNS interno, così un nome interno non va a chiedere l'indirizzo a un risolutore di casa.

In un tema di prenotazioni interne il diviso basta, se la VPN serve solo a raggiungere il proxy. In un tema con amministratori di sistema il completo è la scelta più facile da difendere. La frase va scritta, non lasciata al prodotto.

### Esempio

Gli operatori in sede non usano la VPN. Chi lavora da fuori apre un tunnel completo verso il concentratore, poi raggiunge solo il proxy, come se fosse in ufficio. Il DNS è quello interno. Un amministratore usa lo stesso modello, e in più il secondo fattore. Non c'è una strada che dal portatile vada ai server saltando il concentratore.

### In sede di prova

Dire quale dei due tunnel si è scelto e perché. Il completo costa banda. Il diviso lascia il client su due reti. Il DNS dei nomi interni resta interno.

### Errori da evitare

- Non scegliere e scrivere solo «VPN».
- Far risolvere i nomi interni al DNS di casa.
- Dimensionare il concentratore sulla banda dei soli server, se il tunnel è completo.

### Approfondire

- [Virtual Private Network](https://it.wikipedia.org/wiki/Virtual_Private_Network)
- [Domain Name System](https://it.wikipedia.org/wiki/Domain_Name_System)

## I record DNS che non sono un indirizzo

**Prove:** seconda prova gruppo 1, orale
**Tag:** DNS, MX, TXT, CNAME
**Semaforo:** verde

### Inquadramento

La domanda allarga il DNS oltre «il nome diventa un numero». In un ente i record che contano sono pochi, e ciascuno ha un mestiere che non si scambia.

### Definizione

Il record A, e AAAA in IPv6, associa un nome a un indirizzo. Il CNAME fa di un nome un alias di un altro nome. L'MX dice chi riceve la posta del dominio. Il TXT porta testo, e in pratica le dichiarazioni di chi può spedire la posta. Il PTR fa il percorso inverso, dall'indirizzo al nome.

### Nel dettaglio

Un alias non si concatena all'infinito e non si mette, di norma, dove serve un MX: la posta vuole il nome vero del servente. Cambiare l'indirizzo di un servizio è cambiare il record A e aspettare che scada la memoria di chi l'ha letto. Il tempo di vita si sceglie. Breve, se si sta per migrare, sapendo che i risolutori chiederanno più spesso. Lungo, per un nome stabile, sapendo che una correzione non è immediata.

Il PTR dell'indirizzo da cui si spedisce la posta deve corrispondere al nome che ci si aspetta. Senza, molti destinatari scartano. È il controllo che si dimentica quando si cambia fornitore e l'indirizzo nuovo non ha il record inverso. Si prova prima, con un messaggio verso una casella propria esterna.

I nomi interni stanno su un risolutore interno e non si pubblicano. Il nome del database non ha un record pubblico. Il nome del portale sì, e punta al proxy, non al nodo applicativo. Due verità diverse, due zone, come già per il DNS diviso: qui si aggiunge che dentro la zona pubblica i record sono pochi e ciascuno ha un perché.

### Esempio

portale.ente.it è un A verso l'indirizzo del proxy, con tempo di vita di pochi minuti durante il cambio di indirizzo, poi si allunga. La posta di ente.it ha un MX verso posta.ente.it, un TXT che nomina i serventi autorizzati, e il PTR dell'indirizzo di uscita che torna a quel nome. db.ente.interno esiste solo sul risolutore interno.

### In sede di prova

A, CNAME, MX, TXT, PTR, ciascuno con un mestiere. Il tempo di vita spiega il ritardo di una modifica. Il nome interno non sta nella zona pubblica.

### Errori da evitare

- Mettere un alias al posto del servente di posta senza sapere se è accettato.
- Abbassare il tempo di vita il giorno del cambio, quando le memorie hanno già il valore lungo.
- Pubblicare il nome del database.

### Approfondire

- [Domain Name System](https://it.wikipedia.org/wiki/Domain_Name_System)
- [Posta elettronica](https://it.wikipedia.org/wiki/Posta_elettronica)

## Il traffico fra server non è il traffico degli utenti

**Prove:** prima prova, seconda prova gruppo 1
**Tag:** est-ovest, segmentazione, sala
**Semaforo:** giallo

### Inquadramento

La domanda sposta lo sguardo dal confine della rete a ciò che succede dentro la sala. Una volta entrati, i server non devono parlarsi tutti con tutti.

### Definizione

Il traffico nord-sud entra ed esce dal confine. Il traffico est-ovest va da server a server dentro la sala. Un firewall di perimetro non lo vede. Le regole fra VLAN dei server, o fra i singoli servizi, sono l'unico posto in cui quel traffico si decide.

### Nel dettaglio

Si scrive la matrice minima. Il proxy parla con l'applicazione su una porta. L'applicazione parla con il database su una porta. Il database non parla con il proxy e non inizia connessioni verso gli uffici. Il server di posta parla con il DNS e con il confine, non con il database delle prenotazioni. Tutto il resto è vietato, anche se «siamo in sala».

Questa matrice è la stessa del minimo privilegio, disegnata. Costa un pomeriggio e risparmia il racconto, dopo un incidente, di un server di prova che da anni poteva leggere il database. Si tiene aggiornata quando si aggiunge un servizio. Un servizio nuovo che «per farlo andare» apre tutto verso la VLAN server ha cancellato la matrice.

Gli strumenti, microsegmentazione o semplici regole di VLAN, si nominano solo se si sa dire la regola. In un elaborato bastano le tre righe della matrice e la frase che il firewall di confine non vede quel traffico. È il punto che distingue un disegno da uno schema con una nuvola sola.

### Esempio

Un'applicazione di inventario e una di prenotazione stanno nella stessa sala e non si parlano. Ciascuna ha il suo database. Il backup esce verso il servente di copie su una porta sola, iniziata dai database. Un portatile, anche in VPN, non entra in quella VLAN: arriva al proxy, come tutti.

### In sede di prova

Nord-sud e est-ovest. Matrice di tre righe. Il confine non protegge il traffico interno. Un servizio nuovo non apre «tutta la VLAN».

### Errori da evitare

- Disegnare solo il firewall verso Internet.
- Mettere tutti i server in una rete piatta perché sono amministrati dalle stesse persone.
- Aprire la VLAN server verso gli uffici per comodità di un client grafico.

### Approfondire

- [Firewall](https://it.wikipedia.org/wiki/Firewall)
- [VLAN](https://it.wikipedia.org/wiki/VLAN)
