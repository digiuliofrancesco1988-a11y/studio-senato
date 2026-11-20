const AREE = [
  { file: "area 1 - architetture e data center.md", n: "1", gruppo: "1", breve: "Architetture e data center", prova: "Seconda prova, gruppo 1 · orale a" },
  { file: "area 2 - virtualizzazione e cloud computing.md", n: "2", gruppo: "1", breve: "Virtualizzazione e cloud", prova: "Seconda prova, gruppo 1 · orale a" },
  { file: "area 3 - sistemi di gestione dei dati.md", n: "3", gruppo: "1", breve: "Sistemi di gestione dei dati", prova: "Seconda prova, gruppo 1 · orale b" },
  { file: "area 4 - protocolli e reti di comunicazione.md", n: "4", gruppo: "1", breve: "Protocolli e reti", prova: "Seconda prova, gruppo 1 · orale a" },
  { file: "area 5 - sicurezza informatica.md", n: "5", gruppo: "1", breve: "Sicurezza informatica", prova: "Seconda prova, gruppo 1 · orale c" },
  { file: "area 6 - ingegneria del software e linguaggi.md", n: "6", gruppo: "2", breve: "Ingegneria del software e linguaggi", prova: "Seconda prova, gruppo 2 · orale b" },
  { file: "area 7 - intelligenza artificiale e prompt engineering.md", n: "7", gruppo: "2", breve: "IA e prompt engineering", prova: "Seconda prova, gruppo 2 · prova tecnica" },
  { file: "area 8 - gestione progetti e servizi informatici.md", n: "8", gruppo: "3", breve: "Progetti e servizi informatici", prova: "Seconda prova, gruppo 3 · orale d" },
  { file: "area 9 - lingua inglese abstract.md", n: "9", gruppo: "en", breve: "Lingua inglese, abstract", prova: "Seconda prova, 10 punti" },
  { file: "area 10 - progettazione applicazione multiutente.md", n: "10", gruppo: "p", breve: "Progettazione multiutente", prova: "Prima prova, 30 punti" },
  { file: "area 11 - informatica giuridica e diritto costituzionale.md", n: "11", gruppo: "o", breve: "Informatica giuridica e Costituzione", prova: "Orale e, f" }
];

const CHIAVE = "senato-studio-v1";
const stato = { aree: [], voci: [], vista: "home", voceId: null, areaN: null, quiz: null, simula: null };
const memoria = carica();

const principale = document.getElementById("principale");
const lato = document.getElementById("lato");
const listaAree = document.getElementById("lista-aree");
const indice = document.getElementById("indice");
const tenda = document.getElementById("tenda");

document.getElementById("form-cerca").addEventListener("submit", (e) => {
  e.preventDefault();
  cerca(document.getElementById("q").value);
});
document.getElementById("q").addEventListener("input", (e) => {
  if (e.target.value.trim().length === 0 && stato.vista === "cerca") vaiHome();
});
document.getElementById("btn-stampa").addEventListener("click", () => window.print());
document.getElementById("azzera").addEventListener("click", () => {
  if (confirm("Togliere tutti i segni «studiata» e «da ripassare» su questo browser?")) {
    memoria.fatte = {};
    memoria.ripasso = {};
    salva();
    disegnaIndice();
    ridisegna();
  }
});
document.getElementById("apri-menu").addEventListener("click", () => {
  const aperto = indice.classList.toggle("aperto");
  tenda.hidden = !aperto;
});
tenda.addEventListener("click", chiudiMenu);
document.querySelectorAll("[data-vai]").forEach((b) => {
  b.addEventListener("click", () => {
    if (b.dataset.vai === "home") vaiHome();
    if (b.dataset.vai === "quiz") avviaQuiz({ ambito: "tutte", n: 5 });
    if (b.dataset.vai === "simula") schermataSimula();
  });
});

avvia();

async function avvia() {
  principale.innerHTML = "<p class='lead'>Sto aprendo la raccolta…</p>";
  try {
    const testi = await Promise.all(AREE.map(async (a) => {
      const r = await fetch("../raccolta%20domande/" + encodeURIComponent(a.file));
      if (!r.ok) throw new Error(a.file + " " + r.status);
      return r.text();
    }));
    testi.forEach((t, i) => parseArea(t, AREE[i]));
    disegnaIndice();
    vaiHome();
  } catch (err) {
    principale.innerHTML = `
      <p class="kicker">Avvio</p>
      <h1>Apri lo studio dal file di avvio</h1>
      <p class="lead">Le domande stanno nei file della cartella <em>raccolta domande</em>. Il browser, se apri <em>index.html</em> con un doppio clic, non può leggerli.</p>
      <p>Nella cartella del progetto fai doppio clic su <strong>avvia-studio.bat</strong>. Si apre il browser all’indirizzo <code>http://127.0.0.1:8765/studio/</code>.</p>
      <p class="muto">Dettaglio tecnico: ${escapeHtml(String(err.message || err))}</p>`;
    lato.innerHTML = "";
  }
}

function parseArea(md, meta) {
  md = md.replace(/\r/g, "");
  const parti = md.split(/\n(?=## )/);
  const intro = parti[0];
  const titolo = (intro.match(/^#\s+(.+)$/m) || [null, meta.breve])[1].trim();
  const introBody = intro.replace(/^#\s+.+$/m, "").trim();
  const area = { ...meta, titolo, intro: blocchi(introBody), voci: [] };
  parti.slice(1).forEach((blocco, idx) => {
    const linee = blocco.replace(/\r/g, "").split("\n");
    const titoloVoce = linee[0].replace(/^##\s+/, "").trim();
    const corpo = linee.slice(1).join("\n");
    const prove = campo(corpo, "Prove");
    const tag = campo(corpo, "Tag");
    const semaforo = (campo(corpo, "Semaforo") || "giallo").toLowerCase();
    const senzaMeta = corpo.replace(/^\*\*(Prove|Tag|Semaforo):\*\*.*$/gm, "").trim();
    const sezioni = [];
    senzaMeta.split(/\n(?=### )/).forEach((s) => {
      const righe = s.trim().split("\n");
      if (!righe[0]) return;
      if (righe[0].startsWith("### ")) {
        sezioni.push({ titolo: righe[0].replace(/^###\s+/, ""), html: htmlBlocchi(righe.slice(1).join("\n")) });
      } else if (s.trim()) {
        sezioni.push({ titolo: "", html: htmlBlocchi(s) });
      }
    });
    const id = "a" + meta.n + "-" + String(idx + 1).padStart(2, "0");
    const voce = {
      id, areaN: meta.n, titolo: titoloVoce, prove, tag, semaforo,
      sezioni, testo: senzaMeta, gruppo: meta.gruppo
    };
    area.voci.push(voce);
    stato.voci.push(voce);
  });
  stato.aree.push(area);
}

function campo(corpo, nome) {
  const m = corpo.match(new RegExp("^\\*\\*" + nome + ":\\*\\*\\s*(.+)$", "m"));
  return m ? m[1].trim() : "";
}

function carica() {
  try {
    const d = JSON.parse(localStorage.getItem(CHIAVE) || "{}");
    return { fatte: d.fatte || {}, ripasso: d.ripasso || {}, bozze: d.bozze || {} };
  } catch (e) {
    return { fatte: {}, ripasso: {}, bozze: {} };
  }
}
function salva() { localStorage.setItem(CHIAVE, JSON.stringify(memoria)); }

function disegnaIndice() {
  const fatte = stato.voci.filter((v) => memoria.fatte[v.id]).length;
  document.getElementById("conto-progresso").textContent =
    fatte + " voci segnate come studiate su " + stato.voci.length + ".";
  const acceso = stato.vista === "area" || stato.vista === "voce";
  const voce = (n) => {
    const a = stato.aree.find((x) => x.n === n);
    if (!a) return "";
    const studiate = a.voci.filter((v) => memoria.fatte[v.id]).length;
    const on = acceso && stato.areaN === a.n ? " on" : "";
    return `<button type="button" class="area-btn${on}" data-area="${a.n}">
      <small>${a.n}</small><span>${escapeHtml(a.breve)}</span><small>${studiate}/${a.voci.length}</small>
    </button>`;
  };
  const gruppo = (titolo, numeri) =>
    `<p class="gruppo">${titolo}</p><div class="sotto">${numeri.map(voce).join("")}</div>`;
  listaAree.innerHTML = `
    <h2 class="ramo">Scritto</h2>
    <h3 class="prova">Prima prova · 3 ore</h3>
    <div class="sotto">${voce("10")}</div>
    <h3 class="prova">Seconda prova · 4 ore</h3>
    ${gruppo("Gruppo 1", ["1", "2", "3", "4", "5"])}
    ${gruppo("Gruppo 2", ["6", "7"])}
    ${gruppo("Gruppo 3", ["8"])}
    ${gruppo("Inglese", ["9"])}
    <h2 class="ramo">Orale</h2>
    ${gruppo("Architetture, cloud e reti", ["1", "2", "4"])}
    ${gruppo("Dati, software e linguaggi", ["3", "6"])}
    ${gruppo("Sicurezza", ["5"])}
    ${gruppo("Progetti e servizi", ["8"])}
    ${gruppo("Inglese, lettura e conversazione", ["9"])}
    ${gruppo("Informatica giuridica e Costituzione", ["11"])}
    ${gruppo("Prova al computer", ["7"])}`;
  listaAree.querySelectorAll("[data-area]").forEach((b) => {
    b.addEventListener("click", () => { chiudiMenu(); apriArea(b.dataset.area); });
  });
}

function chiudiMenu() {
  indice.classList.remove("aperto");
  tenda.hidden = true;
}
function segnaNav(nome) {
  document.querySelectorAll("[data-vai]").forEach((b) => b.classList.toggle("attivo", b.dataset.vai === nome));
}

function vaiHome() {
  stato.vista = "home";
  stato.areaN = null;
  stato.voceId = null;
  segnaNav("home");
  disegnaIndice();
  const fatte = stato.voci.filter((v) => memoria.fatte[v.id]).length;
  principale.innerHTML = `
    <p class="kicker">Concorso Senato · segretario parlamentare · profilo tecnico informatico</p>
    <h1>Imparare le materie del bando, voce per voce</h1>
    <p class="lead">Ogni voce è una domanda da prova. Il semaforo dice quanto è plausibile che esca: verde molto, giallo possibile, rosso meno probabile. La prima prova è un solo elaborato di tre ore, circa otto-dieci facciate scritte a mano: sta nell’area 10, nel testo «Elaborato esteso», con gli schemi da ridisegnare. Ogni quesito della seconda prova sta in trenta-quaranta minuti, una o due pagine.</p>
    <p class="legenda"><span class="semaforo verde">molto probabile</span><span class="semaforo giallo">possibile</span><span class="semaforo rosso">meno probabile</span></p>
    <div class="griglia">
      <article class="scheda"><strong>Prima prova · 3 ore · 30 punti</strong><p>Progettazione di un’applicazione multiutente, della sua interfaccia e dell’infrastruttura hardware e di rete. Minimo <em>18/30</em>. Area 10.</p></article>
      <article class="scheda"><strong>Seconda prova · 4 ore · 40 punti</strong><p>Due quesiti per ciascuno dei tre gruppi tecnici (10 punti a gruppo) e un abstract in inglese (10 punti).</p></article>
      <article class="scheda"><strong>Soglia degli scritti</strong><p>Almeno <em>49/70</em> complessivi e almeno <em>6/10</em> in ciascuna materia della seconda prova.</p></article>
      <article class="scheda"><strong>Orale e prova tecnica · 80 punti</strong><p>Otto prove da 10. Soglia <em>56/80</em> e almeno 6 in ciascuna. La prova al PC è di prompt engineering, anche per scrivere codice.</p></article>
    </div>
    <h2>I tre gruppi della seconda prova</h2>
    <div class="griglia">
      <article class="scheda"><strong>Gruppo 1 · fino a 10</strong><p>Architetture, data center, virtualizzazione, cloud, dati, reti, sicurezza. Aree 1–5.</p></article>
      <article class="scheda"><strong>Gruppo 2 · fino a 10</strong><p>Ingegneria del software, linguaggi, intelligenza artificiale, prompt engineering. Aree 6–7.</p></article>
      <article class="scheda"><strong>Gruppo 3 · fino a 10</strong><p>Gestione, conduzione e sviluppo di progetti software, infrastrutturali e dei servizi. Area 8.</p></article>
      <article class="scheda"><strong>Inglese · fino a 10</strong><p>Abstract in inglese di un testo in lingua, senza vocabolario. Area 9.</p></article>
    </div>
    <p>Materiale di studio, non il testo ufficiale. Il bando è il concorso S01/26, Gazzetta Ufficiale, 4ª serie speciale, n. 57 del 28 luglio 2026. Controlla sempre convocazioni e istruzioni su <a href="https://concorsi.senato.it/" target="_blank" rel="noopener">concorsi.senato.it</a>.</p>
    <p class="muto">${fatte} voci già segnate come studiate, su ${stato.voci.length}. Il segno resta in questo browser.</p>
    <p class="no-stampa"><button type="button" class="primaria" id="inizia-1">Apri l’area 1</button>
    <button type="button" class="secondaria" id="inizia-10">Apri la prima prova</button></p>`;
  document.getElementById("inizia-1").onclick = () => apriArea("1");
  document.getElementById("inizia-10").onclick = () => apriArea("10");
  lato.innerHTML = `<p class="kicker">Come usarla</p>
    <p class="muto">Leggi la voce come una pagina di enciclopedia. Segnala «studiata» solo se sai riscriverla senza guardare. In allenamento rispondi prima a mano, poi confronta.</p>
    <p class="muto">Per stampare un’area intera, aprila e usa Stampa. I file restano anche in <em>raccolta domande</em>.</p>`;
  principale.focus();
}

function apriArea(n) {
  const area = stato.aree.find((a) => a.n === n);
  stato.vista = "area";
  stato.areaN = n;
  stato.voceId = null;
  segnaNav("");
  disegnaIndice();
  chiudiMenu();
  principale.innerHTML = `
    <p class="kicker">Area ${area.n} · ${escapeHtml(area.prova)}</p>
    <h1>${escapeHtml(area.titolo.replace(/^Area\s+\d+\s+[—-]\s+/, ""))}</h1>
    <div class="articolo">${area.intro}</div>
    <p class="no-stampa filtri" id="filtri-area">
      <button type="button" class="chip" data-filtro="tutte">Tutte</button>
      <button type="button" class="chip" data-filtro="verde">Verdi, molto probabili</button>
      <button type="button" class="chip" data-filtro="giallo">Gialle, possibili</button>
      <button type="button" class="chip" data-filtro="rosso">Rosse, meno probabili</button>
    </p>
    <p class="no-stampa"><button type="button" class="secondaria" id="stampa-area">Prepara la stampa di tutta l’area</button>
    <button type="button" class="primaria" id="quiz-area">Allenati su quest’area</button></p>
    <ol class="elenco-voci">${vociFiltrate(area).map((v) => `
      <li><button type="button" class="voce-card" data-id="${v.id}">
        ${semaforoHtml(v)}${badge(v)}<b>${escapeHtml(v.titolo)}</b>
        <span class="muto">${escapeHtml(v.tag)} · ${lunghezza(v)}</span>
      </button></li>`).join("")}</ol>`;
  document.querySelectorAll("#filtri-area [data-filtro]").forEach((b) => {
    b.classList.toggle("attivo", (stato.filtro || "tutte") === b.dataset.filtro);
    b.onclick = () => { stato.filtro = b.dataset.filtro; apriArea(n); };
  });
  principale.querySelectorAll("[data-id]").forEach((b) => b.onclick = () => apriVoce(b.dataset.id));
  document.getElementById("stampa-area").onclick = () => stampaArea(area);
  document.getElementById("quiz-area").onclick = () => avviaQuiz({ ambito: n, n: Math.min(6, area.voci.length) });
  lato.innerHTML = `<p class="kicker">Voci</p>` + area.voci.map((v) =>
    `<button type="button" class="link" data-id="${v.id}">${escapeHtml(v.titolo)}</button>`).join("");
  lato.querySelectorAll("[data-id]").forEach((b) => b.onclick = () => apriVoce(b.dataset.id));
  window.scrollTo(0, 0);
}

function apriVoce(id) {
  const voce = stato.voci.find((v) => v.id === id);
  const area = stato.aree.find((a) => a.n === voce.areaN);
  const i = area.voci.findIndex((v) => v.id === id);
  stato.vista = "voce";
  stato.voceId = id;
  stato.areaN = voce.areaN;
  segnaNav("");
  disegnaIndice();
  principale.innerHTML = `
    <p class="kicker"><button type="button" class="link" id="torna-area" style="display:inline;width:auto;padding:0;color:inherit">Area ${area.n}. ${escapeHtml(area.breve)}</button></p>
    <h1>${escapeHtml(voce.titolo)}</h1>
    <p class="lunghezza">${semaforoHtml(voce)} <span class="muto">${lunghezza(voce)}. In prova la prima è un solo elaborato di tre ore; ogni quesito della seconda sta circa in trenta-quaranta minuti, una o due pagine scritte a mano.</span></p>
    <div class="barra-voce no-stampa">
      ${voce.prove ? `<span class="badge">${escapeHtml(voce.prove)}</span>` : ""}
      <button type="button" class="secondaria" id="segna">${memoria.fatte[id] ? "Togli «studiata»" : "Segna come studiata"}</button>
      <button type="button" class="secondaria" id="ripasso">${memoria.ripasso[id] ? "Togli «da ripassare»" : "Da ripassare"}</button>
      <button type="button" class="secondaria" id="nascondi">Nascondi la risposta</button>
    </div>
    <article class="voce" id="corpo-voce">${voce.sezioni.map((s) =>
      `<section class="sezione">${s.titolo ? `<h3 id="${slug(s.titolo)}">${escapeHtml(s.titolo)}</h3>` : ""}${s.html}</section>`).join("")}</article>
    <div class="nav-voce no-stampa">
      <div>${i > 0 ? `<button type="button" class="secondaria" id="prev">← ${escapeHtml(area.voci[i - 1].titolo)}</button>` : ""}</div>
      <div>${i < area.voci.length - 1 ? `<button type="button" class="secondaria" id="next">${escapeHtml(area.voci[i + 1].titolo)} →</button>` : ""}</div>
    </div>`;
  document.getElementById("torna-area").onclick = () => apriArea(area.n);
  document.getElementById("segna").onclick = () => {
    if (memoria.fatte[id]) delete memoria.fatte[id]; else memoria.fatte[id] = Date.now();
    salva(); apriVoce(id);
  };
  document.getElementById("ripasso").onclick = () => {
    if (memoria.ripasso[id]) delete memoria.ripasso[id]; else memoria.ripasso[id] = true;
    salva(); apriVoce(id);
  };
  document.getElementById("nascondi").onclick = () => {
    document.getElementById("corpo-voce").classList.toggle("nascosto");
  };
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  if (prev) prev.onclick = () => apriVoce(area.voci[i - 1].id);
  if (next) next.onclick = () => apriVoce(area.voci[i + 1].id);
  lato.innerHTML = `<p class="kicker">In questa voce</p>` + voce.sezioni.filter((s) => s.titolo).map((s) =>
    `<a href="#${slug(s.titolo)}">${escapeHtml(s.titolo)}</a>`).join("") +
    `<p class="kicker">Nella stessa area</p>` + area.voci.map((v) =>
      `<button type="button" class="link" data-id="${v.id}">${escapeHtml(v.titolo)}</button>`).join("");
  lato.querySelectorAll("[data-id]").forEach((b) => b.onclick = () => apriVoce(b.dataset.id));
  window.scrollTo(0, 0);
}

function cerca(q) {
  const t = q.trim().toLowerCase();
  if (t.length < 2) return;
  stato.vista = "cerca";
  segnaNav("");
  const trovate = stato.voci.filter((v) => (v.titolo + " " + v.testo + " " + v.tag).toLowerCase().includes(t));
  principale.innerHTML = `
    <p class="kicker">Ricerca</p>
    <h1>${trovate.length} voc${trovate.length === 1 ? "e" : "i"} per «${escapeHtml(q.trim())}»</h1>
    <ol class="elenco-voci">${trovate.map((v) => {
      const area = stato.aree.find((a) => a.n === v.areaN);
      return `<li><button type="button" class="voce-card" data-id="${v.id}">${semaforoHtml(v)}${badge(v)}<b>${escapeHtml(v.titolo)}</b><span class="muto">Area ${area.n} · ${escapeHtml(area.breve)} · ${lunghezza(v)}</span></button></li>`;
    }).join("") || "<p>Nessuna voce contiene questo testo.</p>"}</ol>`;
  principale.querySelectorAll("[data-id]").forEach((b) => b.onclick = () => apriVoce(b.dataset.id));
  lato.innerHTML = "";
}

function avviaQuiz(opzioni) {
  let pool = stato.voci.slice();
  if (opzioni.ambito && opzioni.ambito !== "tutte") pool = pool.filter((v) => v.areaN === opzioni.ambito);
  if (opzioni.gruppo) pool = pool.filter((v) => v.gruppo === opzioni.gruppo);
  if (opzioni.soloRipasso) pool = pool.filter((v) => memoria.ripasso[v.id] || !memoria.fatte[v.id]);
  pool = mescola(pool).slice(0, opzioni.n || 5);
  stato.quiz = { coda: pool, i: 0, aperti: false };
  stato.vista = "quiz";
  segnaNav("quiz");
  disegnaQuiz();
}

function disegnaQuiz() {
  const qz = stato.quiz;
  if (!qz || qz.i >= qz.coda.length) {
    principale.innerHTML = `<p class="kicker">Allenamento</p><h1>Serie conclusa</h1>
      <p class="lead">Rileggi le voci segnate «da ripassare». Una risposta è tua quando la riscrivi senza il testo davanti.</p>
      <p><button type="button" class="primaria" id="ancora">Altra serie sulle non studiate</button></p>`;
    document.getElementById("ancora").onclick = () => avviaQuiz({ ambito: "tutte", n: 5, soloRipasso: true });
    lato.innerHTML = "";
    return;
  }
  const v = qz.coda[qz.i];
  const area = stato.aree.find((a) => a.n === v.areaN);
  principale.innerHTML = `
    <p class="kicker">Allenamento ${qz.i + 1} di ${qz.coda.length} · Area ${area.n}</p>
    <h1>${escapeHtml(v.titolo)}</h1>
    <p class="muto">Scrivi prima la risposta, anche in scaletta. Poi confronta. Non è un quiz a crocette: in prova si scrive.</p>
    <div class="quiz-box"><textarea id="bozza" placeholder="Definizione, poi il meccanismo, poi un esempio, poi un limite.">${escapeHtml(memoria.bozze[v.id] || "")}</textarea></div>
    <div class="barra-voce">
      <button type="button" class="primaria" id="confronta">${qz.aperti ? "Nascondi il modello" : "Confronta con la risposta"}</button>
      <button type="button" class="secondaria" id="so">La so, avanti</button>
      <button type="button" class="secondaria" id="nonso">Da ripassare</button>
    </div>
    <article class="voce ${qz.aperti ? "" : "nascosto"}" id="modello">${v.sezioni.map((s) =>
      `<section class="sezione">${s.titolo ? `<h3>${escapeHtml(s.titolo)}</h3>` : ""}${s.html}</section>`).join("")}</article>`;
  document.getElementById("bozza").addEventListener("input", (e) => {
    memoria.bozze[v.id] = e.target.value;
    salva();
  });
  document.getElementById("confronta").onclick = () => { qz.aperti = !qz.aperti; disegnaQuiz(); };
  document.getElementById("so").onclick = () => {
    memoria.fatte[v.id] = Date.now();
    delete memoria.ripasso[v.id];
    salva(); qz.i += 1; qz.aperti = false; disegnaIndice(); disegnaQuiz();
  };
  document.getElementById("nonso").onclick = () => {
    memoria.ripasso[v.id] = true;
    delete memoria.fatte[v.id];
    salva(); qz.i += 1; qz.aperti = false; disegnaIndice(); disegnaQuiz();
  };
  lato.innerHTML = `<p class="kicker">Criterio</p><p class="muto">La risposta regge se ha una definizione corretta, il meccanismo, almeno un vantaggio e un limite, e un esempio. Se manca uno di questi pezzi, segnala «da ripassare».</p>`;
  window.scrollTo(0, 0);
}

function schermataSimula() {
  stato.vista = "simula";
  stato.simula = null;
  segnaNav("simula");
  principale.innerHTML = `
    <p class="kicker">Simulazione</p>
    <h1>Prova a tempo, senza rileggere prima</h1>
    <p class="lead">Le tracce sono esercizi costruiti sul programma del bando, non temi già usciti. In prova non si consultano testi: qui il modello si apre solo quando decidi di correggere.</p>
    <div class="griglia">
      <article class="scheda"><strong>Prima prova · 180 minuti</strong><p>Una traccia di progettazione. Scrivi su carta la scaletta, poi confronta con lo svolgimento dell’area 10.</p><p><button type="button" class="primaria" id="sim-p">Estrai una traccia</button></p></article>
      <article class="scheda"><strong>Seconda prova · 240 minuti</strong><p>Due quesiti del gruppo 1, due del gruppo 2, due del gruppo 3 e un esercizio di abstract.</p><p><button type="button" class="primaria" id="sim-s">Componi la prova</button></p></article>
    </div>`;
  document.getElementById("sim-p").onclick = simulaPrima;
  document.getElementById("sim-s").onclick = simulaSeconda;
  lato.innerHTML = `<p class="kicker">Soglie</p><p class="muto">Prima prova: almeno 18/30. Seconda: almeno 6/10 per materia. Insieme: almeno 49/70.</p>`;
}

function simulaPrima() {
  const pool = stato.voci.filter((v) => v.areaN === "10" && /traccia/i.test(v.titolo));
  const v = pool[Math.floor(Math.random() * pool.length)] || stato.voci.find((x) => x.areaN === "10");
  stato.simula = { fine: Date.now() + 180 * 60 * 1000, tipo: "prima", voci: [v], aperti: false };
  disegnaSimula();
}
function simulaSeconda() {
  const prendi = (gruppo, n) => mescola(stato.voci.filter((v) => v.gruppo === gruppo)).slice(0, n);
  const voci = [...prendi("1", 2), ...prendi("2", 2), ...prendi("3", 2), ...prendi("en", 1)];
  stato.simula = { fine: Date.now() + 240 * 60 * 1000, tipo: "seconda", voci, aperti: false };
  disegnaSimula();
}
function disegnaSimula() {
  const s = stato.simula;
  const gruppi = { "1": "Gruppo 1", "2": "Gruppo 2", "3": "Gruppo 3", en: "Inglese", p: "Prima prova", o: "Orale" };
  principale.innerHTML = `
    <p class="kicker">${s.tipo === "prima" ? "Simulazione della prima prova" : "Simulazione della seconda prova"}</p>
    <h1><span class="timer" id="timer">—</span></h1>
    <p class="muto no-stampa">Scrivi su carta. Il timer è solo un allenamento: in questa pagina non viene inviato nulla.</p>
    <ol class="elenco-voci">${s.voci.map((v, i) => `
      <li class="scheda"><span class="badge">${gruppi[v.gruppo] || ""}</span><h2>${i + 1}. ${escapeHtml(v.titolo)}</h2>
      <div class="${s.aperti ? "" : "nascosto"} voce">${v.sezioni.map((sec) => `<section class="sezione">${sec.titolo ? `<h3>${escapeHtml(sec.titolo)}</h3>` : ""}${sec.html}</section>`).join("")}</div>
      </li>`).join("")}</ol>
    <div class="barra-voce no-stampa">
      <button type="button" class="primaria" id="rivela">${s.aperti ? "Nascondi gli svolgimenti" : "Apri gli svolgimenti"}</button>
      <button type="button" class="secondaria" id="chiudi-sim">Torna alla scelta</button>
    </div>`;
  document.getElementById("rivela").onclick = () => { s.aperti = !s.aperti; disegnaSimula(); };
  document.getElementById("chiudi-sim").onclick = schermataSimula;
  lato.innerHTML = "";
  tick();
}
function tick() {
  if (stato.vista !== "simula" || !stato.simula) return;
  const el = document.getElementById("timer");
  if (!el) return;
  const ms = stato.simula.fine - Date.now();
  if (ms <= 0) { el.textContent = "Tempo scaduto"; return; }
  const m = Math.floor(ms / 60000);
  const sec = Math.floor((ms % 60000) / 1000);
  el.textContent = String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
  setTimeout(tick, 500);
}

function stampaArea(area) {
  stato.vista = "stampa";
  principale.innerHTML = `<p class="kicker no-stampa">Stampa</p>
    <h1>${escapeHtml(area.titolo)}</h1>
    <p class="no-stampa muto">Si stampa tutta l’area. Nel dialogo di stampa puoi scegliere «Salva come PDF».</p>
    ${area.voci.map((v) => `<article class="voce"><h2>${escapeHtml(v.titolo)}</h2>${v.sezioni.map((s) =>
      `<section class="sezione">${s.titolo ? `<h3>${escapeHtml(s.titolo)}</h3>` : ""}${s.html}</section>`).join("")}</article>`).join("<hr>")}`;
  lato.innerHTML = "";
  setTimeout(() => window.print(), 200);
}

function ridisegna() {
  if (stato.vista === "home") vaiHome();
  else if (stato.vista === "voce" && stato.voceId) apriVoce(stato.voceId);
  else if (stato.vista === "area" && stato.areaN) apriArea(stato.areaN);
}

function vociFiltrate(area) {
  const f = stato.filtro || "tutte";
  if (f === "tutte") return area.voci;
  return area.voci.filter((v) => v.semaforo === f);
}
function semaforoHtml(v) {
  const s = v.semaforo || "giallo";
  const nome = { verde: "molto probabile", giallo: "possibile", rosso: "meno probabile" }[s] || s;
  return `<span class="semaforo ${s}">${nome}</span>`;
}
function lunghezza(v) {
  const parole = v.testo.split(/\s+/).filter(Boolean).length;
  const pagine = Math.max(1, Math.round(parole / 220));
  return "circa " + parole + " parole, " + pagine + (pagine === 1 ? " pagina" : " pagine") + " a mano";
}
function badge(v) {
  if (memoria.fatte[v.id]) return `<span class="badge fatto">studiata</span>`;
  if (memoria.ripasso[v.id]) return `<span class="badge ripasso">da ripassare</span>`;
  return "";
}
function mescola(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function slug(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function inline(s) {
  return escapeHtml(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}
function htmlBlocchi(src) {
  const lines = src.replace(/\r/g, "").split("\n");
  let html = "";
  let i = 0;
  while (i < lines.length) {
    if (lines[i].startsWith("```")) {
      const tipo = lines[i].slice(3).trim().toLowerCase();
      const buf = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) { buf.push(lines[i]); i += 1; }
      i += 1;
      html += (tipo === "disegno" || tipo === "schema") ? renderDisegno(buf.join("\n")) : `<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`;
      continue;
    }
    if (!lines[i].trim()) { i += 1; continue; }
    if (lines[i].startsWith("> ")) {
      const buf = [];
      while (i < lines.length && lines[i].startsWith("> ")) { buf.push(lines[i].slice(2)); i += 1; }
      html += `<p class="callout">${buf.map(inline).join("<br>")}</p>`;
      continue;
    }
    if (/^[-*] /.test(lines[i])) {
      const buf = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) { buf.push(lines[i].replace(/^[-*] /, "")); i += 1; }
      html += `<ul>${buf.map((x) => `<li>${inline(x)}</li>`).join("")}</ul>`;
      continue;
    }
    if (lines[i].startsWith("### ")) {
      html += `<h3 id="${slug(lines[i].slice(4))}">${inline(lines[i].slice(4))}</h3>`;
      i += 1;
      continue;
    }
    if (/^\d+\. /.test(lines[i])) {
      const buf = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) { buf.push(lines[i].replace(/^\d+\. /, "")); i += 1; }
      html += `<ol>${buf.map((x) => `<li>${inline(x)}</li>`).join("")}</ol>`;
      continue;
    }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !lines[i].startsWith("```") && !lines[i].startsWith("> ") && !/^[-*] /.test(lines[i]) && !/^\d+\. /.test(lines[i]) && !lines[i].startsWith("### ")) {
      buf.push(lines[i]); i += 1;
    }
    html += `<p>${buf.map(inline).join(" ")}</p>`;
  }
  return html;
}
function blocchi(src) { return htmlBlocchi(src); }
function renderDisegno(src) {
  let titolo = "";
  const pezzi = [];
  const note = [];
  src.split("\n").forEach((riga) => {
    const linea = riga.trim();
    if (!linea) return;
    const stacca = (prefisso) => linea.slice(prefisso.length).trim();
    if (linea.startsWith("titolo:")) titolo = stacca("titolo:");
    else if (linea.startsWith("nota:")) note.push(stacca("nota:"));
    else if (linea.startsWith("riga:")) pezzi.push({ tipo: "riga", voci: stacca("riga:").split("|") });
    else if (linea.startsWith("freccia:")) pezzi.push({ tipo: "freccia", testo: stacca("freccia:") });
    else if (linea.startsWith("zona:")) {
      const voci = stacca("zona:").split("|");
      pezzi.push({ tipo: "zona", nome: voci.shift(), voci });
    } else if (linea.startsWith("passo:")) pezzi.push({ tipo: "passo", testo: stacca("passo:") });
  });
  const nodo = (t) => `<span class="nodo">${escapeHtml(t.trim())}</span>`;
  const corpo = pezzi.map((p) => {
    if (p.tipo === "riga") return `<div class="schema-riga">${p.voci.map(nodo).join('<span class="schema-trattino"></span>')}</div>`;
    if (p.tipo === "freccia") return `<div class="schema-freccia">${escapeHtml(p.testo)}</div>`;
    if (p.tipo === "zona") return `<div class="schema-zona"><span class="schema-zona-nome">${escapeHtml((p.nome || "").trim())}</span><div class="schema-riga">${p.voci.map(nodo).join("")}</div></div>`;
    return `<div class="schema-passo">${escapeHtml(p.testo)}</div>`;
  }).join("");
  const noteHtml = note.map((n) => `<p class="schema-nota">${escapeHtml(n)}</p>`).join("");
  return `<figure class="schema">${titolo ? `<figcaption>${escapeHtml(titolo)}</figcaption>` : ""}${corpo}${noteHtml}</figure>`;
}
