/* ============================================================
   CONFIG — À VALIDER PAR SMART ELECTRO
   ============================================================ */
const CONFIG = {
  socle: { label:"Socle technique & mise en service KNX", min:1200, max:3500, enabled:true },
  currency:"€",
  leadMode:"wp",             // "console" | "formspree" | "webhook" | "wp"
  formspreeId:"",
  webhookUrl:"",
  wpEndpoint:"https://www.smart-electro.fr/?rest_route=/se/v1/lead",
};

const DATA = [
  { fam:"Éclairage", icon:"bulb", items:[
    {n:"On / Off", min:35, max:140},{n:"Variation", min:90, max:200},
    {n:"DALI", min:150, max:400},{n:"RGB / RGBW", min:350, max:800}]},
  { fam:"Volets & ouvrants", icon:"blind", items:[
    {n:"Volet vertical", min:70, max:170},{n:"BSO – Brise-Soleil Orientable", min:100, max:220},
    {n:"Store", min:70, max:170},{n:"Rideau motorisé", min:350, max:1500},
    {n:"Porte de garage", min:150, max:600},{n:"Portail électrique", min:110, max:350},
    {n:"Porte électrique", min:110, max:350}]},
  { fam:"Chauffage", icon:"heat", items:[
    {n:"Radiateur électrique", min:35, max:150},{n:"Radiateur hydraulique", min:350, max:500},
    {n:"Plancher chauffant", min:350, max:3500},{n:"Pompe à chaleur", min:450, max:1300},
    {n:"Chaudière", min:90, max:1200}]},
  { fam:"Climatisation", icon:"snow", items:[
    {n:"Climatisation", min:350, max:3500},{n:"Ventilo-convecteur", min:400, max:1300},
    {n:"Plancher rafraîchissant", min:1800, max:3500}]},
  { fam:"Ventilation & Air", icon:"air", items:[
    {n:"VMC simple flux", min:35, max:130},{n:"VMC double flux", min:450, max:1300},
    {n:"Ventilation", min:35, max:80}]},
  { fam:"Prises pilotées", icon:"plug", items:[
    {n:"Prise commandée", min:35, max:80},{n:"Groupe de prises", min:80, max:140},
    {n:"Prise extérieure", min:80, max:130}]},
  { fam:"Eau chaude sanitaire", icon:"heat", items:[
    {n:"Chauffe-eau électrique", min:90, max:350},{n:"Bouclage ECS", min:90, max:350}]},
  { fam:"Gestion énergétique", icon:"energy", items:[
    {n:"Comptage électrique", min:350, max:950},{n:"Sous-comptage", min:350, max:1200},
    {n:"Photovoltaïque", min:350, max:1200},{n:"Batterie", min:80, max:900},
    {n:"Borne de recharge", min:80, max:900}]},
  { fam:"Eau", icon:"water", items:[
    {n:"Électrovanne", min:90, max:350},{n:"Compteur d'eau", min:110, max:350},
    {n:"Pompe", min:90, max:300},{n:"Surpresseur", min:90, max:300},
    {n:"Récupération d'eau de pluie", min:350, max:700}]},
  { fam:"Arrosage", icon:"water", items:[
    {n:"Arrosage", min:700, max:1500},{n:"Électrovanne d'arrosage", min:150, max:300}]},
  { fam:"Piscine / Spa", icon:"pool", items:[
    {n:"Filtration", min:450, max:1000},{n:"Chauffage piscine", min:250, max:1200},
    {n:"Éclairage piscine", min:90, max:800}]},
  { fam:"Sécurité & Accès", icon:"lock", items:[
    {n:"Gâche électrique", min:100, max:350},{n:"Portail (accès)", min:100, max:350},
    {n:"Visiophone", min:700, max:17000}]},
  { fam:"Audio / Vidéo", icon:"media", items:[
    {n:"Audio multiroom", min:180, max:900, naEst:true},{n:"Télévision / Home cinéma", min:4000, max:9000, naEst:true}]},
  { fam:"Météo", icon:"weather", items:[
    {n:"Station météo", min:350, max:2100},{n:"Sonde extérieure", min:150, max:250}]},
  { fam:"Supervision & Pilotage", icon:"screen", items:[
    {n:"Écran tactile", min:350, max:2000},{n:"Supervision", min:500, max:2500},
    {n:"Serveur domotique", min:1800, max:5000, naEst:true}]},
  { fam:"Passerelles", icon:"bridge", items:[
    {n:"KNX / DALI", min:450, max:900},{n:"KNX / Modbus", min:400, max:845},
    {n:"KNX / EnOcean", min:150, max:280}]},
];

const ICONS = {
  bulb:'<path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7c.6.5 1 1.3 1 2.1V17h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0012 2z"/>',
  blind:'<path d="M4 4h16M5 4v9M9 4v9M13 4v9M17 4v9M4 13h16M9 13v4a3 3 0 006 0v-4"/>',
  heat:'<path d="M8 2c1 2-1 3 0 5s1 3 0 5M12 2c1 2-1 3 0 5s1 3 0 5M16 2c1 2-1 3 0 5s1 3 0 5M4 20h16"/>',
  snow:'<path d="M12 2v20M4 6l16 12M20 6L4 18M6 4l12 16M18 4L6 20"/>',
  air:'<path d="M4 8h11a3 3 0 100-6M4 12h16M4 16h9a3 3 0 110 6"/>',
  plug:'<path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 01-10 0zM12 16v6"/>',
  energy:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  water:'<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
  pool:'<path d="M2 16c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2M6 14V5a2 2 0 014 0M14 14V5a2 2 0 014 0"/>',
  lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>',
  media:'<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8M10 18v4M14 18v4"/>',
  weather:'<path d="M7 16a4 4 0 010-8 5 5 0 019.6 1.3A3.5 3.5 0 0117 16z"/>',
  screen:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  bridge:'<path d="M3 18v-4a9 9 0 0118 0v4M3 14h18M8 14v4M16 14v4M12 14v4"/>',
};

const euro = n => Math.round(n).toLocaleString('fr-FR')+' '+CONFIG.currency;
const state = { step:1, projet:null, univers:[], qty:{} };
const STEPS = 4;

const UNIVERS = [
  {id:"Éclairage", label:"Éclairage", desc:"On/Off, variation, DALI, RGB", icon:"bulb", fams:["Éclairage"]},
  {id:"Volets", label:"Volets & ouvrants", desc:"Volets, stores, portail, garage", icon:"blind", fams:["Volets & ouvrants"]},
  {id:"Chauffage", label:"Chauffage & Clim", desc:"Chauffage, clim, ECS", icon:"heat", fams:["Chauffage","Climatisation","Eau chaude sanitaire"]},
  {id:"Air", label:"Ventilation & air", desc:"VMC, qualité d'air", icon:"air", fams:["Ventilation & Air"]},
  {id:"Energie", label:"Énergie", desc:"PV, batterie, borne, comptage", icon:"energy", fams:["Gestion énergétique","Prises pilotées"]},
  {id:"Securite", label:"Sécurité & accès", desc:"Visiophone, gâche, portail", icon:"lock", fams:["Sécurité & Accès"]},
  {id:"Eau", label:"Eau & extérieur", desc:"Arrosage, piscine, eau", icon:"water", fams:["Eau","Arrosage","Piscine / Spa","Météo"]},
  {id:"Media", label:"Multimédia", desc:"Audio multiroom, TV", icon:"media", fams:["Audio / Vidéo"]},
  {id:"Pilotage", label:"Supervision", desc:"Écran, serveur, passerelles", icon:"screen", fams:["Supervision & Pilotage","Passerelles"]},
];

const el = (t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;};
function svgIc(name){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||'')+'</svg>';}

function renderUnivers(){
  const box=document.getElementById('universList'); box.innerHTML='';
  UNIVERS.forEach(u=>{
    const sel=state.univers.includes(u.id)?' sel':'';
    const o=el('label','opt'+sel);
    o.dataset.val=u.id;
    o.innerHTML=`<span class="ic">${svgIc(u.icon)}</span><span class="tx"><b>${u.label}</b><small>${u.desc}</small></span><span class="chk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span>`;
    o.onclick=()=>{ toggleArr(state.univers,u.id); o.classList.toggle('sel'); updateFoot(); };
    box.appendChild(o);
  });
}

function selectedFams(){
  const set=new Set();
  state.univers.forEach(uid=>{ const u=UNIVERS.find(x=>x.id===uid); if(u)u.fams.forEach(f=>set.add(f)); });
  return DATA.filter(d=>set.has(d.fam));
}
function renderItems(){
  const box=document.getElementById('itemsList'); box.innerHTML='';
  const fams=selectedFams();
  if(!fams.length){ box.innerHTML='<p class="q-sub">Sélectionnez au moins un univers à l\'étape précédente.</p>'; return; }
  fams.forEach(d=>{
    const block=el('div','cat-block');
    block.appendChild(el('h4',null,`<span class="cc">${svgIc(d.icon)}</span>${d.fam}`));
    d.items.forEach(it=>{
      const key=d.fam+'|'+it.n; const q=state.qty[key]||0;
      const row=el('div','item');
      const priceLbl = it.min===it.max ? euro(it.min) : euro(it.min)+' – '+euro(it.max);
      row.innerHTML=`<span class="nm">${it.n}</span><span class="pr">${priceLbl}${it.naEst?' *':''}</span>`;
      const st=el('div','stepper');
      st.innerHTML=`<button type="button" aria-label="moins">−</button><input type="text" inputmode="numeric" value="${q}"><button type="button" aria-label="plus">+</button>`;
      const inp=st.querySelector('input');
      const setQ=v=>{v=Math.max(0,Math.min(99,parseInt(v)||0));state.qty[key]=v;inp.value=v;updateFoot();};
      st.children[0].onclick=()=>setQ((parseInt(inp.value)||0)-1);
      st.children[2].onclick=()=>setQ((parseInt(inp.value)||0)+1);
      inp.oninput=()=>setQ(inp.value);
      row.appendChild(st); block.appendChild(row);
    });
    box.appendChild(block);
  });
}

function totals(){
  let min=0,max=0,lines=[];
  DATA.forEach(d=>{
    let fmin=0,fmax=0,any=false;
    d.items.forEach(it=>{
      const q=state.qty[d.fam+'|'+it.n]||0;
      if(q>0){any=true;fmin+=it.min*q;fmax+=it.max*q;}
    });
    if(any){lines.push({fam:d.fam,min:fmin,max:fmax});min+=fmin;max+=fmax;}
  });
  if(CONFIG.socle.enabled && (min>0||max>0)){min+=CONFIG.socle.min;max+=CONFIG.socle.max;}
  return {min,max,lines};
}
function updateFoot(){
  const t=totals();
  const rt=document.getElementById('runningTotal');
  rt.textContent = (t.min>0||t.max>0) ? euro(t.min)+' – '+euro(t.max) : '—';
}

function renderResult(){
  const t=totals();
  const box=document.getElementById('resultView');
  let rows=t.lines.map(l=>`<div class="row"><span>${l.fam}</span><span class="v">${euro(l.min)} – ${euro(l.max)}</span></div>`).join('');
  if(CONFIG.socle.enabled && t.lines.length){
    rows+=`<div class="row"><span>${CONFIG.socle.label}</span><span class="v">${euro(CONFIG.socle.min)} – ${euro(CONFIG.socle.max)}</span></div>`;
  }
  box.innerHTML=`
    <div class="result-hero">
      <div class="k">Votre budget domotique KNX estimé</div>
      <div class="price-range grad-txt">${euro(t.min)} – ${euro(t.max)}</div>
      <div class="note">Projet : ${state.projet||'—'} · Fourchette indicative fournie + posée</div>
    </div>
    <div class="breakdown">${rows||'<div class="row"><span>Aucun poste sélectionné</span><span class="v">—</span></div>'}
      <div class="row tot"><span>Total estimé</span><span>${euro(t.min)} – ${euro(t.max)}</span></div>
    </div>
    <div class="incl">
      <span>${chk()} Fourniture matériel KNX</span><span>${chk()} Intégration & câblage</span>
      <span>${chk()} Programmation ETS</span><span>${chk()} Mise en service</span>
    </div>
    <div class="lead" id="leadBox">
      <h3>Recevez ce chiffrage détaillé + une étude gratuite</h3>
      <p>On vous envoie le détail par email et on cale un rendez-vous pour affiner votre devis. Sans engagement.</p>
      <form id="leadForm">
        <div class="field">
          <input name="prenom" placeholder="Prénom *" required>
          <input name="nom" placeholder="Nom">
          <input name="email" type="email" placeholder="Email *" required>
          <input name="tel" placeholder="Téléphone *" required>
          <input class="full" name="cp" placeholder="Code postal / commune *" required>
          <textarea class="full" name="msg" rows="2" placeholder="Un détail sur votre projet ? (optionnel)"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top:14px">Recevoir mon devis détaillé →</button>
        <div class="consent">En envoyant ce formulaire, vous acceptez d'être recontacté par Smart Electro au sujet de votre projet. Vos données ne sont jamais revendues.</div>
      </form>
    </div>`;
  document.getElementById('leadForm').addEventListener('submit',submitLead);
  track('result_viewed',{min:t.min,max:t.max,postes:t.lines.length});
}
const chk=()=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>';

function submitLead(e){
  e.preventDefault();
  const t=totals();
  const f=new FormData(e.target);
  const payload=Object.fromEntries(f.entries());
  payload.projet=state.projet;
  payload.budget_min=t.min; payload.budget_max=t.max;
  payload.postes=Object.entries(state.qty).filter(([k,v])=>v>0).map(([k,v])=>k.split('|')[1]+' ×'+v).join(', ');
  f.append('projet',payload.projet||''); f.append('budget_min',t.min); f.append('budget_max',t.max); f.append('postes',payload.postes||'');
  track('lead_submitted',{budget_min:t.min,budget_max:t.max});

  const done=()=>{ document.getElementById('leadBox').innerHTML=`
    <div class="success">
      <div class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></div>
      <h3 style="font-size:20px">Demande envoyée&nbsp;!</h3>
      <p style="color:var(--muted);margin-top:6px">Merci ${payload.prenom||''}. On vous recontacte sous 48h avec votre chiffrage détaillé. À très vite&nbsp;!</p>
    </div>`; };

  if(CONFIG.leadMode==='wp' && CONFIG.wpEndpoint){
    fetch(CONFIG.wpEndpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(done).catch(done);
  } else if(CONFIG.leadMode==='formspree' && CONFIG.formspreeId){
    fetch('https://formspree.io/f/'+CONFIG.formspreeId,{method:'POST',headers:{'Accept':'application/json'},body:f}).then(done).catch(done);
  } else if(CONFIG.leadMode==='webhook' && CONFIG.webhookUrl){
    fetch(CONFIG.webhookUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).then(done).catch(done);
  } else {
    console.log('LEAD (mode démo) →',payload); done();
  }
}

function toggleArr(a,v){const i=a.indexOf(v);i>-1?a.splice(i,1):a.push(v);}
function setStep(n){
  state.step=n;
  document.querySelectorAll('.step').forEach(s=>s.classList.toggle('active',+s.dataset.step===n));
  document.getElementById('pbar').style.width=(n/STEPS*100)+'%';
  document.getElementById('stepCt').textContent='Étape '+n+'/'+STEPS;
  document.getElementById('btnBack').disabled = n===1;
  const next=document.getElementById('btnNext');
  document.getElementById('estFoot').style.display = n===4 ? 'none' : 'flex';
  next.textContent = n===3 ? 'Voir mon budget →' : 'Continuer';
  if(n===2)renderUnivers();
  if(n===3)renderItems();
  if(n===4)renderResult();
  updateFoot();
  track('step_viewed',{step:n});
}
function next(){
  if(state.step===1 && !state.projet){shake();return;}
  if(state.step===2 && !state.univers.length){shake();return;}
  if(state.step===3){
    const any=Object.values(state.qty).some(v=>v>0);
    if(!any){shake();return;}
  }
  if(state.step<STEPS)setStep(state.step+1);
}
function back(){ if(state.step>1)setStep(state.step-1); }
function shake(){const b=document.querySelector('.est-body');b.animate([{transform:'translateX(0)'},{transform:'translateX(-7px)'},{transform:'translateX(7px)'},{transform:'translateX(0)'}],{duration:260});}

document.querySelectorAll('[data-single="projet"] .opt').forEach(o=>{
  o.onclick=()=>{
    document.querySelectorAll('[data-single="projet"] .opt').forEach(x=>x.classList.remove('sel'));
    o.classList.add('sel'); state.projet=o.dataset.val;
    setTimeout(()=>next(),260);   // auto-avance : choix unique => étape suivante sans "Continuer"
  };
});
document.getElementById('btnNext').onclick=next;
document.getElementById('btnBack').onclick=back;

/* PRICING TABLE = statique dans le HTML */



function track(ev,props){ (window.dataLayer=window.dataLayer||[]).push({event:'quiz_'+ev,...props}); }

setStep(1);
track('quiz_loaded',{});