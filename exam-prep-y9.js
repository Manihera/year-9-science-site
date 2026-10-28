/* Year 9 end-of-year preparation: 100-question bank and guided practice. */
window.Y9ExamPrep = (() => {
  const AREA_META = {
    nature: { short: "Nature of Science", colour: "#9f171b" },
    wai: { short: "Precious Wai", colour: "#13766f" },
    living: { short: "Living World", colour: "#4f6f2f" },
    "space-energy": { short: "Space & Energy", colour: "#374a78" }
  };

  const extras = {
    nature: [
      q("A student changes light level and measures plant height. What is the dependent variable?", ["Light level", "Plant height", "Plant type", "Pot size"], 1, "Plant height is measured in response to the changed light level."),
      q("Which change would most improve the reliability of a dissolving investigation?", ["Use a different beaker each time", "Repeat each test and calculate a mean", "Write a longer aim", "Change two variables"], 1, "Repeated measurements and a mean reduce the influence of random variation."),
      q("One result is very different from all the others. What is it called?", ["A control", "An anomaly", "A hypothesis", "A conclusion"], 1, "An anomalous result does not fit the overall pattern."),
      q("Which graph is usually best for temperature measured every minute?", ["Pie chart", "Bar graph", "Line graph", "Pictogram"], 2, "Time and temperature are continuous variables, so a line graph shows the changing pattern."),
      q("What should a useful scientific hypothesis include?", ["A prediction linked to science", "Only the equipment list", "The final result", "A colourful diagram"], 0, "A hypothesis predicts the relationship between variables and should be scientifically reasoned."),
      q("Why are control variables kept the same?", ["To make the graph larger", "To make the test fair", "To guarantee the hypothesis is right", "To remove the dependent variable"], 1, "Keeping other factors constant lets the independent variable be tested fairly."),
      q("Which graph feature is essential on both axes?", ["A photograph", "A label and unit where needed", "A written conclusion", "A hazard symbol"], 1, "Axis labels identify each variable, and units show how numerical values were measured."),
      q("A set of measurements is tightly grouped but far from the accepted value. It is...", ["accurate and precise", "accurate but not precise", "precise but not accurate", "neither measured nor recorded"], 2, "Precision is closeness between repeated values; accuracy is closeness to the accepted value."),
      q("Which statement is an inference rather than an observation?", ["The liquid is blue", "The volume is 20 mL", "A gas is being produced because bubbles formed", "The thermometer reads 35 °C"], 2, "An inference explains an observation; it is not directly measured or seen."),
      q("What belongs in the discussion or evaluation of an investigation?", ["Only the title", "Limitations and realistic improvements", "A new unrelated question", "The student's name only"], 1, "Evaluation considers evidence quality, limitations and specific improvements."),
    ],
    wai: [
      q("How are particles arranged in a solid?", ["Far apart and moving freely", "Close together in fixed positions", "Close together and flowing past each other", "With no movement at all"], 1, "Solid particles are closely packed and vibrate about fixed positions."),
      q("What is the change from liquid water to water vapour called?", ["Freezing", "Condensation", "Evaporation", "Melting"], 2, "During evaporation, higher-energy liquid particles escape into the gas state."),
      q("What happens to particles when water freezes?", ["They gain energy and spread out", "They lose energy and become fixed in an arrangement", "They turn into new atoms", "They disappear"], 1, "Cooling removes energy, so particles become fixed in the solid structure."),
      q("Which pollutant most directly makes stream water cloudy and reduces light?", ["Sediment", "Dissolved oxygen", "Native plants", "Shade"], 0, "Suspended sediment increases turbidity and blocks light in the water."),
      q("Why can high water temperature be harmful to stream organisms?", ["Warm water always freezes", "Warm water can hold less dissolved oxygen", "It creates new elements", "It removes all nutrients"], 1, "As water warms, its capacity to hold dissolved oxygen generally decreases."),
      q("Which observation is evidence of a physical change?", ["A new substance forms", "Ice melts but remains H₂O", "An atom becomes another element", "A gas burns to form products"], 1, "Melting changes state and particle arrangement, but the substance remains water."),
      q("What is an atom?", ["The smallest particle of an element", "A mixture of several substances", "Only a water particle", "A visible droplet"], 0, "An atom is the smallest particle that retains the identity of an element."),
      q("Which action best demonstrates kaitiakitanga for local wai?", ["Leaving rubbish beside a stream", "Monitoring water quality and restoring stream banks", "Removing all stream plants", "Sending stormwater straight to the river"], 1, "Caring for wai includes gathering evidence and taking action to protect its mauri."),
      q("During boiling, where does vaporisation occur?", ["Only at the surface", "Throughout the liquid", "Only inside ice", "Nowhere in the liquid"], 1, "Boiling produces vapour bubbles throughout the liquid; evaporation occurs at the surface."),
      q("Which sequence shows the water cycle correctly after evaporation?", ["Condensation, precipitation, collection", "Freezing, melting, burning", "Collection, evaporation, no condensation", "Precipitation, photosynthesis, radiation"], 0, "Water vapour condenses, falls as precipitation and collects before cycling again."),
    ],
    living: [
      q("Which organelle controls the activities of a cell?", ["Cell membrane", "Nucleus", "Vacuole", "Cell wall"], 1, "The nucleus contains genetic information and controls cell activities."),
      q("What is the main function of chlorophyll?", ["Absorb light energy", "Release mineral ions", "Carry pollen", "Break down soil"], 0, "Chlorophyll absorbs light energy used in photosynthesis."),
      q("Which word equation represents photosynthesis?", ["glucose + oxygen → carbon dioxide + water", "carbon dioxide + water → glucose + oxygen", "oxygen + water → carbon dioxide", "light → minerals + oxygen"], 1, "Plants use carbon dioxide and water to make glucose and oxygen using light energy."),
      q("What is the role of a decomposer in an ecosystem?", ["Capture sunlight directly", "Recycle nutrients from dead material", "Make all consumers extinct", "Stop respiration"], 1, "Decomposers break down dead material and return nutrients to the ecosystem."),
    ],
    "space-energy": [
      q("Why does the Moon appear to change shape during a month?", ["Earth's shadow covers it every night", "We see different amounts of its sunlit half", "The Moon produces different amounts of light", "Clouds reshape the Moon"], 1, "As the Moon orbits Earth, our view of its illuminated half changes."),
      q("In convection, why does warmer fluid rise?", ["It becomes denser", "It becomes less dense", "It stops moving", "It turns into radiation"], 1, "Heating usually makes a fluid expand and become less dense, so it rises."),
      q("A wave completes 12 cycles in 3 seconds. What is its frequency?", ["4 Hz", "9 Hz", "15 Hz", "36 Hz"], 0, "Frequency = number of cycles ÷ time = 12 ÷ 3 = 4 Hz."),
    ]
  };

  function q(text, options, a, why) { return { q: text, options, a, why }; }
  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function esc(value) { return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

  function html() {
    return `<div class="y9-exam-page">
      <section class="y9-exam-hero">
        <div class="y9-exam-hero-copy"><p class="y9-overline">End-of-year exam preparation</p><h1>Train the science. Not the test.</h1><p>Build secure knowledge across the whole Year 9 course, then apply it to fresh questions. Nothing here copies the end-of-year exam.</p>
          <div class="y9-exam-stats"><span><strong>100</strong> marked questions</span><span><strong>24</strong> per full set</span><span><strong>6</strong> written responses</span></div>
        </div>
      </section>
      <nav class="y9-path-nav" aria-label="Exam preparation pathway">
        <button type="button" data-y9-jump="y9-plan"><span>1</span><strong>Plan</strong><small>Find the gaps</small></button>
        <button type="button" data-y9-jump="y9-sharpen"><span>2</span><strong>Sharpen</strong><small>Practise the skills</small></button>
        <button type="button" data-y9-jump="y9-full"><span>3</span><strong>Full practice</strong><small>24 + 6 questions</small></button>
      </nav>

      <section class="y9-exam-section" id="y9-plan"><header><p class="y9-overline">Step 1 · Plan</p><h2>Turn the course into a revision plan</h2><p>Tick a checkpoint only when you can explain it without notes. Your choices stay on this device.</p></header>
        <div class="y9-plan-grid">
          ${planCard("nature","Science skills","Safety, measurement, variables, fair tests and graphs",0)}
          ${planCard("wai","Precious Wai","Wai as taonga, particles, state changes and water quality",1)}
          ${planCard("living","Cells and living things","Life processes, microscopes, cells and classification",2)}
          ${planCard("living","Plants and ecosystems","Photosynthesis, reproduction, adaptations and food webs",3)}
          ${planCard("space-energy","Space cycles","The solar system, seasons, Moon phases and eclipses",4)}
          ${planCard("space-energy","Energy and waves","Transfers, heating, efficiency, sound, light and the eye",5)}
          ${planCard("exam","Mixed retrieval","Complete a Test-mode set without notes",6)}
        </div>
        <div class="y9-plan-progress"><div><strong id="y9-plan-count">0 of 7 secure</strong><span>Keep moving—confidence grows through retrieval.</span></div><progress id="y9-plan-progress" max="7" value="0">0 of 7</progress></div>
      </section>

      <section class="y9-exam-section y9-sharpen" id="y9-sharpen"><header><p class="y9-overline">Step 2 · Sharpen</p><h2>Practise the moves that earn marks</h2><p>Use these short tools before the full mixed set.</p></header>
        <div class="y9-skill-grid">
          <article class="y9-tool-card"><div class="y9-tool-top"><span>Calculation lab</span><button type="button" class="y9-text-button" id="y9-new-calc">New question</button></div><h3 id="y9-calc-question"></h3><label for="y9-calc-answer">Your answer <span id="y9-calc-unit"></span></label><div class="y9-answer-row"><input id="y9-calc-answer" inputmode="decimal"><button type="button" class="button" id="y9-check-calc">Check</button></div><div class="y9-feedback neutral" id="y9-calc-feedback" aria-live="polite">Show your working, then check.</div></article>
          <article class="y9-tool-card"><div class="y9-tool-top"><span>Command-word coach</span><button type="button" class="y9-text-button" id="y9-next-command">Next</button></div><p class="y9-command" id="y9-command-word"></p><h3 id="y9-command-prompt"></h3><button type="button" class="button secondary-dark" id="y9-reveal-command">Reveal a strong response</button><div class="y9-feedback neutral" id="y9-command-feedback" aria-live="polite">Say or write your response before revealing the example.</div></article>
        </div>
      </section>

      <section class="y9-exam-section" id="y9-full"><header><p class="y9-overline">Step 3 · Full practice</p><h2>A bigger, balanced practice session</h2><p>Every set contains six fresh questions from each learning area, followed by six written responses. Recently used questions are held back.</p></header>
        <div class="y9-bank-summary">${Object.entries(AREA_META).map(([key,a])=>`<div style="--area:${a.colour}"><strong>25</strong><span>${a.short}</span></div>`).join("")}</div>
        <div id="y9-practice-app" class="y9-practice-app">
          <div class="y9-mode-picker"><h3>Choose how feedback works</h3><div class="y9-mode-grid">
            <button type="button" data-y9-mode="practice"><strong>Practice mode</strong><span>Feedback and teaching after every answer</span></button>
            <button type="button" data-y9-mode="test"><strong>Test mode</strong><span>Feedback held until the end</span></button>
          </div><p class="y9-bank-note">A set draws 24 of the 100 questions. Four full sets can be completed without repeating a marked question.</p></div>
        </div>
      </section>
    </div>`;
  }

  function planCard(slug, title, text, index) {
    const href = slug === "exam" ? "#exam" : `#revision/${slug}`;
    return `<article class="y9-plan-card"><label><input type="checkbox" data-y9-plan="${index}"><span><strong>${title}</strong><small>${text}</small></span></label><a href="${href}">${slug === "exam" ? "Ready for full practice" : "Open revision"} →</a></article>`;
  }

  function init() {
    document.querySelectorAll("[data-y9-jump]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.y9Jump)?.scrollIntoView({behavior:"smooth",block:"start"})));
    initPlan();
    initCalculator();
    initCommandCoach();
    document.querySelectorAll("[data-y9-mode]").forEach(button => button.addEventListener("click", () => startSession(button.dataset.y9Mode)));
  }

  function initPlan() {
    const boxes = [...document.querySelectorAll("[data-y9-plan]")];
    const update = () => {
      const count = boxes.filter(box => box.checked).length;
      document.getElementById("y9-plan-count").textContent = `${count} of 7 secure`;
      document.getElementById("y9-plan-progress").value = count;
    };
    boxes.forEach(box => {
      box.checked = localStorage.getItem(`manukura-y9-plan-${box.dataset.y9Plan}`) === "1";
      box.addEventListener("change", () => { localStorage.setItem(`manukura-y9-plan-${box.dataset.y9Plan}`, box.checked ? "1" : "0"); update(); });
    });
    update();
  }

  const calculators = [
    () => { const eye=[5,10][Math.floor(Math.random()*2)], obj=[4,10,40][Math.floor(Math.random()*3)]; return {prompt:`A microscope has a ×${eye} eyepiece and a ×${obj} objective. Calculate total magnification.`,answer:eye*obj,unit:"×",working:`${eye} × ${obj} = ${eye*obj}`}; },
    () => { const time=[2,3,4,5][Math.floor(Math.random()*4)], power=[20,30,40,50][Math.floor(Math.random()*4)]; return {prompt:`A device transfers ${time*power} J in ${time} s. Calculate its power.`,answer:power,unit:"W",working:`P = E ÷ t = ${time*power} ÷ ${time} = ${power} W`}; },
    () => { const input=[100,200,400,500][Math.floor(Math.random()*4)], pct=[20,25,50,75][Math.floor(Math.random()*4)]; return {prompt:`A device receives ${input} J and transfers ${input*pct/100} J usefully. Calculate efficiency.`,answer:pct,unit:"%",working:`efficiency = useful ÷ input × 100 = ${input*pct/100} ÷ ${input} × 100 = ${pct}%`}; }
  ];
  let currentCalc;
  function initCalculator() {
    const next = () => { currentCalc = calculators[Math.floor(Math.random()*calculators.length)](); document.getElementById("y9-calc-question").textContent=currentCalc.prompt; document.getElementById("y9-calc-unit").textContent=`(${currentCalc.unit})`; document.getElementById("y9-calc-answer").value=""; setFeedback("y9-calc-feedback","neutral","Show your working, then check."); };
    document.getElementById("y9-new-calc")?.addEventListener("click",next);
    document.getElementById("y9-check-calc")?.addEventListener("click",()=>{ const value=Number(document.getElementById("y9-calc-answer").value); Number.isFinite(value)&&Math.abs(value-currentCalc.answer)<0.001 ? setFeedback("y9-calc-feedback","correct",`Correct. ${currentCalc.working}`) : setFeedback("y9-calc-feedback","incorrect",`Not yet. Use the formula, substitute the values, then include the unit. ${currentCalc.working}`); });
    next();
  }

  const commands = [
    {word:"Describe",prompt:"Describe the arrangement of particles in a liquid.",answer:"The particles are close together but are not fixed. They move and slide past one another."},
    {word:"Explain",prompt:"Explain why repeated measurements improve reliability.",answer:"Repeats show whether results are consistent and allow a mean to be calculated, reducing the effect of unusual values."},
    {word:"Calculate",prompt:"A 300 J transfer takes 3 s. Calculate power.",answer:"P = E ÷ t = 300 J ÷ 3 s = 100 W."},
    {word:"Evaluate",prompt:"Evaluate one way to improve a stream-water investigation.",answer:"Collect samples from several sites and repeat each test. This makes the data more representative and reduces the effect of an unusual reading."}
  ];
  let commandIndex=-1;
  function initCommandCoach() {
    const next=()=>{ commandIndex=(commandIndex+1)%commands.length; const item=commands[commandIndex]; document.getElementById("y9-command-word").textContent=item.word; document.getElementById("y9-command-prompt").textContent=item.prompt; setFeedback("y9-command-feedback","neutral","Say or write your response before revealing the example."); };
    document.getElementById("y9-next-command")?.addEventListener("click",next);
    document.getElementById("y9-reveal-command")?.addEventListener("click",()=>setFeedback("y9-command-feedback","warning",commands[commandIndex].answer));
    next();
  }

  function setFeedback(id, type, text) { const el=document.getElementById(id); if(!el)return; el.className=`y9-feedback ${type}`; el.textContent=text; }

  function bank() {
    const result={};
    Object.keys(AREA_META).forEach(slug=>{
      result[slug]=[...units[slug].quiz,...extras[slug]].slice(0,25).map((item,index)=>({...item,slug,id:`${slug}-${index+1}`}));
      if(result[slug].length!==25) throw new Error(`Exam bank ${slug} has ${result[slug].length}, expected 25.`);
    });
    return result;
  }

  function drawBalancedSet() {
    const pools=bank(); let history={};
    try { history=JSON.parse(localStorage.getItem("manukura-y9-exam-history-v1")||"{}"); } catch { history={}; }
    const selected=[];
    Object.keys(pools).forEach(slug=>{
      const used=new Set(Array.isArray(history[slug])?history[slug]:[]);
      let available=pools[slug].filter(item=>!used.has(item.id));
      if(available.length<6){ used.clear(); available=[...pools[slug]]; }
      const chosen=shuffle(available).slice(0,6);
      history[slug]=[...used,...chosen.map(item=>item.id)];
      selected.push(...chosen);
    });
    localStorage.setItem("manukura-y9-exam-history-v1",JSON.stringify(history));
    return shuffle(selected);
  }

  let session;
  function startSession(mode) {
    session={mode,questions:drawBalancedSet(),index:0,answers:[],score:0};
    renderQuestion();
    document.getElementById("y9-practice-app")?.scrollIntoView({behavior:"smooth",block:"center"});
  }

  function renderQuestion() {
    const target=document.getElementById("y9-practice-app"), item=session.questions[session.index], meta=AREA_META[item.slug];
    target.innerHTML=`<div class="y9-session-head"><div><span>${session.mode === "practice" ? "Practice mode" : "Test mode"}</span><strong>Question ${session.index+1} of 24</strong></div><div class="y9-session-progress"><i style="width:${(session.index/24)*100}%"></i></div><button type="button" class="y9-text-button" id="y9-end-early">End set</button></div>
      <article class="y9-question-card" style="--area:${meta.colour}"><p class="y9-area-tag">${meta.short}</p><h3>${esc(item.q)}</h3><div class="y9-options">${item.options.map((option,i)=>`<button type="button" data-y9-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${esc(option)}</button>`).join("")}</div><div id="y9-question-feedback" class="y9-feedback neutral" aria-live="polite">Choose the best answer.</div><button type="button" class="button y9-next-question" id="y9-next-question" hidden>${session.index===23?"See results":"Next question"}</button></article>`;
    target.querySelectorAll("[data-y9-answer]").forEach(button=>button.addEventListener("click",()=>answerQuestion(Number(button.dataset.y9Answer))));
    document.getElementById("y9-next-question").addEventListener("click",()=>{ session.index++; session.index<24?renderQuestion():renderResults(); });
    document.getElementById("y9-end-early").addEventListener("click",renderResults);
  }

  function answerQuestion(choice) {
    if(session.answers[session.index]) return;
    const item=session.questions[session.index], correct=choice===item.a;
    session.answers[session.index]={choice,correct}; if(correct)session.score++;
    document.querySelectorAll("[data-y9-answer]").forEach((button,i)=>{ button.disabled=true; button.classList.toggle("chosen",i===choice); if(session.mode==="practice"){button.classList.toggle("right",i===item.a);button.classList.toggle("wrong",i===choice&&!correct);} });
    session.mode==="practice" ? setFeedback("y9-question-feedback",correct?"correct":"incorrect",correct?`Correct. ${item.why}`:`Not yet. ${item.why}`) : setFeedback("y9-question-feedback","neutral","Answer recorded. Feedback will appear at the end.");
    document.getElementById("y9-next-question").hidden=false;
  }

  function renderResults() {
    const target=document.getElementById("y9-practice-app"), answered=session.answers.filter(Boolean).length;
    const breakdown=Object.keys(AREA_META).map(slug=>{const qs=session.questions.map((q,i)=>({q,i})).filter(x=>x.q.slug===slug);return {slug,score:qs.filter(x=>session.answers[x.i]?.correct).length,total:qs.filter(x=>session.answers[x.i]).length};});
    const review=session.questions.map((item,i)=>({item,i,answer:session.answers[i]})).filter(x=>x.answer&&!x.answer.correct);
    target.innerHTML=`<div class="y9-results"><p class="y9-overline">Marked-question result</p><h3>${session.score} / ${answered}</h3><p>${resultMessage(session.score,answered)}</p>
      <div class="y9-breakdown">${breakdown.map(x=>`<div style="--area:${AREA_META[x.slug].colour}"><strong>${x.score}/${x.total}</strong><span>${AREA_META[x.slug].short}</span></div>`).join("")}</div>
      ${review.length?`<details class="y9-review"><summary>Review ${review.length} question${review.length===1?"":"s"} to sharpen</summary>${review.map(({item,answer})=>`<article><strong>${esc(item.q)}</strong><p>Your answer: ${esc(item.options[answer.choice])}</p><p><b>Correct answer:</b> ${esc(item.options[item.a])}. ${esc(item.why)}</p></article>`).join("")}</details>`:`<div class="y9-feedback correct">Excellent retrieval—every answered question was correct.</div>`}
      <button type="button" class="button" id="y9-start-written">Continue to 6 written responses</button><button type="button" class="button secondary-dark" id="y9-fresh-set">Start a fresh marked set</button></div>`;
    document.getElementById("y9-start-written").addEventListener("click",renderWritten);
    document.getElementById("y9-fresh-set").addEventListener("click",()=>startSession(session.mode));
  }

  function resultMessage(score,total) { const pct=total?score/total:0; return pct>=.8?"Secure retrieval. Use the review and written responses to deepen explanations.":pct>=.6?"A useful base. Review the explanations, then target the weakest area.":"This set has found useful gaps. Revisit the linked learning pages, then try a fresh set."; }

  const written=[
    {area:"Nature of Science",prompt:"A student investigates how water temperature affects the time taken for sugar to dissolve. Identify the independent variable, dependent variable and one control variable. Explain why the control matters.",model:"Independent variable: water temperature. Dependent variable: dissolving time. A suitable control is the mass of sugar, volume of water or stirring method. Keeping it the same makes the test fair, so changes in dissolving time can be linked to temperature."},
    {area:"Precious Wai",prompt:"Explain, using the particle model, what happens when liquid water boils.",model:"Heating transfers energy to water particles, so they move faster. At boiling point, particles have enough energy to overcome attractions and separate throughout the liquid, forming water vapour. The particles remain H₂O; no new substance forms."},
    {area:"Living World",prompt:"Compare a plant cell with an animal cell, including two similarities and two differences.",model:"Both have a cell membrane, cytoplasm, nucleus and mitochondria. A plant cell also has a cellulose cell wall, chloroplasts and usually a large permanent vacuole. Animal cells do not have a cell wall or chloroplasts."},
    {area:"Living World",prompt:"Predict what may happen to a hawk population if the mouse population in its food web decreases. Explain your reasoning using energy transfer.",model:"The hawk population may decrease because fewer mice means less prey and therefore less chemical energy transferred to hawks. Competition for the remaining food may increase. Other links in the food web could reduce or delay the effect."},
    {area:"Space & Energy",prompt:"Explain why New Zealand has warmer weather and longer days in summer. Do not say Earth is closer to the Sun.",model:"Earth's axis is tilted. During New Zealand summer, the Southern Hemisphere tilts toward the Sun, so sunlight is more direct and the Sun stays above the horizon longer. More energy is received per square metre and for more hours each day."},
    {area:"Space & Energy",prompt:"A device receives 800 J of energy and transfers 600 J usefully in 4 seconds. Calculate its efficiency and the power of the useful transfer. Show formulas, working and units.",model:"Efficiency = useful ÷ input × 100 = 600 ÷ 800 × 100 = 75%. Power = energy ÷ time = 600 J ÷ 4 s = 150 W."}
  ];
  function renderWritten() {
    const target=document.getElementById("y9-practice-app");
    target.innerHTML=`<div class="y9-written"><header><p class="y9-overline">Written-response review</p><h3>Explain, calculate and evaluate</h3><p>Write each answer first. Then reveal the model and rate your own response—there is no public ranking.</p></header>${written.map((item,i)=>`<article><p class="y9-area-tag">${item.area} · ${i+1} of 6</p><h4>${item.prompt}</h4><textarea rows="5" aria-label="Your response to written question ${i+1}" placeholder="Write your science response here..."></textarea><button type="button" class="button secondary-dark" data-y9-model="${i}">Reveal model answer</button><div class="y9-model" id="y9-model-${i}" hidden><strong>Model answer</strong><p>${item.model}</p><fieldset><legend>How secure was your response?</legend><label><input type="radio" name="y9-rate-${i}"> Not yet</label><label><input type="radio" name="y9-rate-${i}"> Nearly</label><label><input type="radio" name="y9-rate-${i}"> Secure</label></fieldset></div></article>`).join("")}<div class="y9-written-finish"><strong>Finish point</strong><p>Review every “Not yet” or “Nearly” response on the learning pages, then return for a fresh set.</p><button type="button" class="button" id="y9-written-fresh">Start another 24-question set</button></div></div>`;
    document.querySelectorAll("[data-y9-model]").forEach(button=>button.addEventListener("click",()=>{const model=document.getElementById(`y9-model-${button.dataset.y9Model}`);model.hidden=!model.hidden;button.textContent=model.hidden?"Reveal model answer":"Hide model answer";}));
    document.getElementById("y9-written-fresh").addEventListener("click",()=>startSession(session.mode));
    target.scrollIntoView({behavior:"smooth",block:"start"});
  }

  return { html, init, bank };
})();
