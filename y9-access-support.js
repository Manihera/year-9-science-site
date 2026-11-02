(() => {
  const blocked = /(calculate (a |the )?mean|\bthe mean\b|\bfrequency\b|\bmagnification\b|chromatograph)/i;
  const simpleWords = {
    "hazard":"something that could cause harm",
    "risk":"the chance that harm could happen",
    "variable":"something that can change",
    "independent variable":"what you change",
    "dependent variable":"what you measure",
    "control variable":"what you keep the same",
    "pattern":"what the results are showing",
    "reliable":"you get similar results when you repeat the test",
    "taonga":"something precious and valued",
    "mauri":"the life and health of a living thing or place",
    "kaitiakitanga":"caring for and protecting a place",
    "whakapapa":"connections between people, places and living things",
    "particles":"tiny pieces that make up matter",
    "evaporation":"liquid changes to gas at the surface",
    "condensation":"gas changes to liquid",
    "runoff":"water flowing over the land",
    "infiltration":"water soaking into the ground",
    "nucleus":"controls the cell",
    "cell membrane":"controls what enters and leaves a cell",
    "chloroplast":"absorbs light for photosynthesis",
    "producer":"a living thing that makes its own food",
    "consumer":"a living thing that eats other living things",
    "adaptation":"a feature or action that helps survival",
    "pollination":"pollen moves from anther to stigma",
    "rotation":"spinning on an axis",
    "revolution":"moving around another object",
    "conduction":"heat moves through touching particles",
    "convection":"heat moves as warm liquid or gas rises",
    "radiation":"energy travels as waves",
    "reflection":"light bounces",
    "refraction":"light changes speed and bends",
    "retina":"the light-sensitive layer at the back of the eye"
  };

  function tidyBank() {
    const prep = window.Y9ExamPrep;
    if (!prep || !prep.bank) return;
    Object.values(prep.bank).forEach(list => {
      if (!Array.isArray(list)) return;
      for (let i=list.length-1;i>=0;i--) {
        const text = [list[i].q,list[i].why,...(list[i].options||[])].join(" ");
        if (blocked.test(text)) list.splice(i,1);
      }
    });
  }

  function svgNature(){
    return '<svg viewBox="0 0 360 170" role="img" aria-label="Fair test diagram"><defs><marker id="arrN" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8z" fill="#8a1732"/></marker></defs><rect x="15" y="45" width="92" height="62" rx="12" fill="#f7e9ed" stroke="#8a1732" stroke-width="3"/><text x="61" y="69" text-anchor="middle">CHANGE</text><text x="61" y="91" text-anchor="middle" font-weight="700">one thing</text><line x1="112" y1="76" x2="165" y2="76" stroke="#8a1732" stroke-width="4" marker-end="url(#arrN)"/><rect x="172" y="45" width="92" height="62" rx="12" fill="#fff7df" stroke="#b67a00" stroke-width="3"/><text x="218" y="69" text-anchor="middle">MEASURE</text><text x="218" y="91" text-anchor="middle" font-weight="700">one thing</text><path d="M61 117 C61 151 218 151 218 117" fill="none" stroke="#555" stroke-width="3" stroke-dasharray="7 5"/><text x="140" y="160" text-anchor="middle" font-size="14">keep everything else the same</text></svg>';
  }
  function svgWai(){
    return '<svg viewBox="0 0 360 170" role="img" aria-label="Water problem cause and effect chain"><defs><marker id="arrW" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8z" fill="#13766f"/></marker></defs><g font-size="15" text-anchor="middle"><rect x="8" y="55" width="75" height="55" rx="10" fill="#fff2c9"/><text x="45" y="79">material</text><text x="45" y="98">on land</text><line x1="86" y1="82" x2="125" y2="82" stroke="#13766f" stroke-width="4" marker-end="url(#arrW)"/><rect x="132" y="55" width="83" height="55" rx="10" fill="#e1f3f0"/><text x="174" y="79">rain +</text><text x="174" y="98">runoff</text><line x1="218" y1="82" x2="256" y2="82" stroke="#13766f" stroke-width="4" marker-end="url(#arrW)"/><path d="M264 64 Q300 42 344 64 V111 H264z" fill="#bfe4f2"/><path d="M264 83 Q300 67 344 83" fill="none" stroke="#13766f" stroke-width="4"/><text x="304" y="105">stream</text></g></svg>';
  }
  function svgCells(){
    return '<svg viewBox="0 0 360 170" role="img" aria-label="Animal and plant cell comparison"><text x="92" y="20" text-anchor="middle" font-weight="700">ANIMAL</text><text x="272" y="20" text-anchor="middle" font-weight="700">PLANT</text><ellipse cx="92" cy="92" rx="65" ry="52" fill="#e6f6f7" stroke="#25818b" stroke-width="4"/><circle cx="82" cy="88" r="18" fill="#418a98"/><rect x="210" y="39" width="124" height="106" rx="12" fill="#eef7db" stroke="#b89600" stroke-width="6"/><circle cx="248" cy="91" r="18" fill="#418a98"/><ellipse cx="301" cy="92" rx="24" ry="38" fill="#c8dcad"/><g fill="#56b875"><ellipse cx="232" cy="62" rx="11" ry="6"/><ellipse cx="316" cy="60" rx="11" ry="6"/><ellipse cx="230" cy="123" rx="11" ry="6"/><ellipse cx="317" cy="124" rx="11" ry="6"/></g><line x1="92" y1="150" x2="272" y2="150" stroke="#8a1732" stroke-width="3"/><text x="182" y="166" text-anchor="middle" font-size="14">compare what is the same and different</text></svg>';
  }
  function svgEnergy(){
    return '<svg viewBox="0 0 360 170" role="img" aria-label="Heat transfer and light diagram"><defs><marker id="arrE" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8z" fill="#e78b22"/></marker></defs><circle cx="52" cy="58" r="28" fill="#ffd055"/><g stroke="#e78b22" stroke-width="4" marker-end="url(#arrE)"><line x1="85" y1="58" x2="145" y2="58"/><line x1="178" y1="96" x2="178" y2="40"/><line x1="232" y1="58" x2="318" y2="58"/></g><text x="115" y="42" text-anchor="middle">radiation</text><path d="M150 116 Q178 90 206 116 Q178 145 150 116" fill="#bfe4f2" stroke="#3d7ea6" stroke-width="3"/><text x="178" y="160" text-anchor="middle">warm rises • cool sinks</text><rect x="230" y="35" width="12" height="52" fill="#777"/><text x="278" y="106" text-anchor="middle">light bends at</text><text x="278" y="125" text-anchor="middle">a boundary</text></svg>';
  }

  const areas = [
    {name:"Nature of Science", colour:"#8a1732", visual:svgNature(), words:["independent variable","dependent variable","control variable","pattern","reliable"]},
    {name:"Precious Wai", colour:"#13766f", visual:svgWai(), words:["taonga","mauri","kaitiakitanga","particles","runoff","infiltration"]},
    {name:"Living World", colour:"#4f6f2f", visual:svgCells(), words:["nucleus","cell membrane","chloroplast","producer","consumer","adaptation"]},
    {name:"Space & Energy", colour:"#374a78", visual:svgEnergy(), words:["rotation","conduction","convection","radiation","reflection","refraction"]}
  ];

  function supportHTML(){
    return `<section class="y9-support" aria-labelledby="y9-support-title">
      <div class="y9-support-intro"><p class="y9-kicker">90-MINUTE EXAM SUPPORT</p><h2 id="y9-support-title">See it. Say it. Then answer it.</h2><p>You do not need huge words or long paragraphs. Learn the <strong>bold key word</strong>, look at the picture, then explain the idea in your own words.</p>
      <div class="y9-mark-guide"><span><b>1 mark</b><small>one clear idea</small></span><span><b>2 marks</b><small>two ideas, or idea + because</small></span><span><b>3 marks</b><small>three linked steps</small></span><span><b>calculate</b><small>formula + working + unit</small></span></div></div>
      <div class="y9-support-grid">${areas.map(a=>`<article style="--support-colour:${a.colour}"><h3>${a.name}</h3>${a.visual}<details><summary>Open the word help</summary><dl>${a.words.map(w=>`<div><dt><strong><u>${w}</u></strong></dt><dd><em>${simpleWords[w]}</em></dd></div>`).join("")}</dl></details></article>`).join("")}</div>
      <div class="y9-answer-recipe"><h3>How to build an answer</h3><ol><li><strong><u>Circle</u></strong> the command word: <em>name, describe, explain, calculate.</em></li><li><strong><u>Check</u></strong> the marks. Give one clear point for each mark.</li><li><strong><u>Explain</u></strong> means: write the answer, then add <em>because…</em></li><li><strong><u>Check</u></strong> that you answered every part of the question.</li></ol></div>
    </section>`;
  }

  function injectSupport(){
    const main=document.getElementById("main");
    if(!main) return;
    const route=(location.hash||"#home").toLowerCase();
    const wanted=route.includes("exam")||route.includes("revision");
    const existing=document.getElementById("y9-support-wrap");
    if(!wanted){ if(existing) existing.remove(); return; }
    if(existing) return;
    const wrap=document.createElement("div");
    wrap.id="y9-support-wrap";
    wrap.innerHTML=supportHTML();
    main.prepend(wrap);
  }

  function glossary(){
    if(document.getElementById("y9-word-help")) return;
    const root=document.createElement("div");
    root.id="y9-word-help";
    root.innerHTML=`<button type="button" class="y9-word-button" aria-expanded="false">Word help</button><aside class="y9-word-panel" hidden><div><h2>Science word help</h2><button type="button" class="y9-word-close" aria-label="Close word help">×</button></div><input type="search" placeholder="Type a word…" aria-label="Search science words"><dl>${Object.entries(simpleWords).map(([w,d])=>`<div data-word="${w}"><dt><strong><u>${w}</u></strong></dt><dd><em>${d}</em></dd></div>`).join("")}</dl></aside>`;
    document.body.append(root);
    const button=root.querySelector(".y9-word-button"),panel=root.querySelector(".y9-word-panel"),close=root.querySelector(".y9-word-close"),search=root.querySelector("input");
    const setOpen=open=>{panel.hidden=!open;button.setAttribute("aria-expanded",String(open));if(open)search.focus();};
    button.addEventListener("click",()=>setOpen(panel.hidden));
    close.addEventListener("click",()=>setOpen(false));
    search.addEventListener("input",()=>{const q=search.value.toLowerCase().trim();root.querySelectorAll("[data-word]").forEach(x=>x.hidden=q&&!x.dataset.word.includes(q)&&!x.textContent.toLowerCase().includes(q));});
  }

  function run(){tidyBank();glossary();injectSupport();}
  window.addEventListener("hashchange",()=>setTimeout(injectSupport,60));
  const observer=new MutationObserver(()=>injectSupport());
  window.addEventListener("DOMContentLoaded",()=>{run();const main=document.getElementById("main");if(main)observer.observe(main,{childList:true,subtree:false});});
  if(document.readyState!=="loading") run();
})();
