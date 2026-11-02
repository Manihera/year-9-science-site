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

  function run(){tidyBank();glossary();}
  window.addEventListener("DOMContentLoaded",run);
  if(document.readyState!=="loading") run();
})();
