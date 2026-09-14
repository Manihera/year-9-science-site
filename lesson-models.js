// MANUKURA Year 9 interactive lesson models
// Adds a lesson-specific visualisation to every mission without changing progress storage.
(function () {
  const selectorModels = {
    "Laboratory safety and hazards": {
      title:"Hazard spotter", prompt:"Tap a scene and decide how the risk changes.", states:[
        ["Clear bench","🧪  ✅  👓","Low risk: goggles are on and the bench is clear."],
        ["Bag in aisle","🧪  🎒  ⚠️","Trip risk increases because the walkway is blocked."],
        ["Loose hair","🔥  💇  ⚠️","Hair near a flame is a hazard. Tie it back before heating." ]
      ]
    },
    "Laboratory equipment": {
      title:"Equipment explorer", prompt:"Choose the tool that best fits the job.", states:[
        ["Measure 35 mL","▥ 35 mL","Use a measuring cylinder for a more accurate liquid volume."],
        ["Swirl a reaction","⚗️ ↻","A conical flask can be swirled with less chance of spilling."],
        ["Heat a small sample","🧪 🔥","A test tube is suitable for small quantities when used safely."],
        ["Hold / mix liquid","🥛","A beaker is useful for holding and mixing, but not precise measuring."]
      ]
    },
    "Observations and inferences": {
      title:"Observation or inference?", prompt:"Switch between evidence and explanation.", states:[
        ["Cloudy liquid","👁️ cloudy","Observation: this directly describes what can be seen."],
        ["18 °C","🌡️ 18 °C","Quantitative observation: it includes a number and unit."],
        ["A reaction occurred","🧠 → ?","Inference: this is an explanation based on observations." ]
      ]
    },
    "Variables and fair tests": {
      title:"Fair-test visualiser", prompt:"Select each variable to see its role in the same experiment.", states:[
        ["Water temperature","🌡️ 20 → 60 °C","Independent variable: deliberately changed."],
        ["Dissolving time","⏱️ ? s","Dependent variable: measured as the result."],
        ["Water volume","🥛 100 mL","Control variable: keep it the same for a fair comparison."],
        ["Sugar amount","🥄 5 g","Control variable: changing it could affect dissolving time." ]
      ]
    },
    "The scientific method": {
      title:"Investigation pathway", prompt:"Tap through the stages of a scientific investigation.", states:[
        ["1 Aim","❓","State what you are trying to find out."],
        ["2 Hypothesis","💭","Make a testable prediction with a scientific reason."],
        ["3 Method","📋","Describe repeatable steps and what stays controlled."],
        ["4 Results","📊","Record the evidence clearly."],
        ["5 Conclusion","✅","Answer the aim using the pattern in the results." ]
      ]
    },
    "The importance of water": {
      title:"Where is Earth's water?", prompt:"Explore why usable freshwater is limited.", states:[
        ["Oceans","🌊  ~97%","Most water is salty ocean water and is not directly usable as freshwater."],
        ["Ice + groundwater","🧊  💧","Most freshwater is locked in ice or stored underground."],
        ["Surface freshwater","🏞️  tiny fraction","Only a very small fraction is readily available in lakes, rivers and wetlands." ]
      ]
    },
    "Cultural significance of wai": {
      title:"Wai connections", prompt:"Explore how one waterway can hold several connected values.", states:[
        ["Whakapapa","awa ↔ people ↔ ancestors","The waterway connects people, place and generations."],
        ["Mauri","💧 ↗","Mauri describes the vitality or life-supporting condition of the wai."],
        ["Kaitiakitanga","🤲 🌿","Kaitiakitanga is active responsibility to protect and restore those relationships." ]
      ]
    },
    "Researching precious wai": {
      title:"Evidence lens", prompt:"Choose a source and see what kind of evidence it can add.", states:[
        ["Monitoring data","📈 nitrate • clarity • E. coli","Useful for measured changes and comparisons over time."],
        ["Map / land use","🗺️ river • farms • city","Useful for seeing location, catchment and possible sources of impact."],
        ["Local knowledge","🗣️ whakapapa • history • observations","Adds relationships, history and observations that datasets may not show alone."],
        ["Combine sources","📈 + 🗺️ + 🗣️","A stronger conclusion checks multiple forms of evidence together." ]
      ]
    },
    "A local water issue": {
      title:"Cause → effect → response", prompt:"Follow a water issue through the whole chain.", states:[
        ["Cause","🌧️ + fertiliser → stream","Runoff can carry nutrients into waterways."],
        ["Evidence","🧪 high nitrate / algae","Measurements and observations show whether the issue is occurring."],
        ["Effect","🐟 ↓ oxygen","Ecosystems can be harmed when dissolved oxygen drops."],
        ["Response","🌿 riparian planting","A useful response should target the cause, not only the visible symptom." ]
      ]
    },
    "Atoms, molecules and compounds": {title:"Build a water molecule", prompt:"Compare an atom, a molecule and the compound H₂O.", states:[
        ["Atom","H","One symbol represents one atom of an element."],
        ["Molecule","H — H","A molecule contains two or more atoms chemically bonded together."],
        ["Water (H₂O)","H — O — H","Water is a molecule because atoms are bonded, and a compound because it contains two different elements."],
        ["Count atoms","H₂O = 2 H + 1 O","The subscript 2 tells you there are two hydrogen atoms for every oxygen atom." ]
      ]
    },
    "Why wai matters research": {
      title:"Build a supported conclusion", prompt:"Combine different evidence instead of listing facts.", states:[
        ["Scientific","🧪 water-quality evidence","Use measured patterns, species observations or monitoring data."],
        ["Cultural","🌿 whakapapa / mauri","Use relationships, significance and responsibilities connected to the wai."],
        ["Community","🏘️ use / history / priorities","Include how people interact with and value the waterway."],
        ["Conclusion","evidence → claim → why it matters","A strong conclusion explains how the evidence supports one clear claim." ]
      ]
    },
    "Taiao and living things": {
      title:"MRS C GREN explorer", prompt:"Tap a life process to see what it means.", states:[
        ["Movement","🏃","Living things can change position or move parts of themselves."],
        ["Respiration","🍞 → ⚡","Respiration releases usable energy from food."],
        ["Sensitivity","🌱 → ☀️","Living things detect and respond to changes."],
        ["Growth","🌱 → 🌿","Living things increase in size or cell number."],
        ["Reproduction","🌿 → 🌱","Living things produce offspring."],
        ["Excretion","cell waste → out","Metabolic wastes are removed."],
        ["Nutrition","food / minerals → organism","Organisms obtain materials needed for energy and growth." ]
      ]
    },
    "Classification": {
      title:"Classification ladder", prompt:"Move from the broadest group to the most specific.", states:[
        ["Kingdom","🌳 very broad","A large group containing many different organisms."],
        ["Phylum","↓","Organisms share more important body features."],
        ["Class","↓","The group becomes more specific."],
        ["Order","↓","Fewer organisms remain in the group."],
        ["Family","↓","Closely related genera are grouped together."],
        ["Genus","Homo","The first word of a scientific name."],
        ["Species","sapiens","The most specific level taught; genus + species forms the scientific name." ]
      ]
    },
    "Vertebrates": {
      title:"Vertebrate key", prompt:"Compare the five main vertebrate groups.", states:[
        ["Fish","🐟 gills • fins • scales","Aquatic vertebrates that usually breathe with gills."],
        ["Amphibians","🐸 moist skin • life in water/land","Often have aquatic young and more terrestrial adults."],
        ["Reptiles","🦎 dry scales • lungs","Generally have dry scaly skin and breathe with lungs."],
        ["Birds","🐦 feathers • eggs","Feathers are unique to birds."],
        ["Mammals","🐕 hair • milk","Mammals have hair/fur and females produce milk." ]
      ]
    },
    "Cells I": {
      title:"Plant vs animal cell", prompt:"Switch cells and compare structures.", states:[
        ["Animal cell","◯ nucleus • membrane • cytoplasm • mitochondria","Animal cells do not have a cell wall, chloroplasts or a large permanent vacuole."],
        ["Plant cell","▭ wall • chloroplasts • vacuole","Plant cells include a cell wall, chloroplasts and a large permanent vacuole."],
        ["Shared parts","nucleus • membrane • cytoplasm • mitochondria","These important structures are found in both typical plant and animal cells." ]
      ]
    },
    "Cells II": {
      title:"Specialised cells", prompt:"See how structure fits function.", states:[
        ["Sperm cell","◉~~~~ tail + mitochondria","The tail enables movement and many mitochondria provide energy."],
        ["Root hair cell","▭──── long extension","A long extension increases surface area for water and mineral absorption."],
        ["Nerve cell","◉────────","A long axon helps transmit electrical signals over distance."],
        ["Red blood cell","🔴 biconcave","Its shape gives a large surface area for gas exchange and room for haemoglobin." ]
      ]
    },
    "Plant biology": {
      title:"Plant transport", prompt:"Follow substances through the plant.", states:[
        ["Water","soil → roots ↑ stem → leaves","Roots absorb water; xylem carries it upward."],
        ["Carbon dioxide","air → stomata → leaf","Carbon dioxide enters through stomata for photosynthesis."],
        ["Glucose","leaf → rest of plant","Sugars made in leaves are transported to growing and storage tissues."],
        ["Oxygen","leaf → air","Oxygen produced in photosynthesis can diffuse out through stomata." ]
      ]
    },
    "Leaf practical": {
      title:"Leaf feature explorer", prompt:"Tap a feature and connect it to function.", states:[
        ["Veins","🍃 branching network","Veins transport water and minerals into the leaf and sugars away."],
        ["Broad blade","▰ large surface","A broad blade provides a large area to absorb light."],
        ["Stomata","••• underside","Tiny pores allow carbon dioxide, oxygen and water vapour to move in and out." ]
      ]
    },
    "Photosynthesis starch practical": {
      title:"Iodine test", prompt:"Compare a leaf with and without stored starch.", states:[
        ["No starch","🍂 + iodine → orange-brown","No blue-black colour means little or no starch detected."],
        ["Starch present","🍃 + iodine → blue-black","A blue-black colour is a positive starch test."],
        ["Why it matters","light → glucose → starch","Stored starch is evidence that glucose from photosynthesis has been produced." ]
      ]
    },
    "Plant reproductive anatomy": {
      title:"Flower anatomy", prompt:"Tap a structure to reveal its reproductive role.", states:[
        ["Anther","🌼 anther","Produces pollen containing male sex cells."],
        ["Filament","│ supports anther","Holds the anther where pollen can be released."],
        ["Stigma","✦ sticky tip","Receives pollen."],
        ["Style","│ pollen-tube pathway","Connects stigma to ovary."],
        ["Ovary","◯ contains ovules","Contains ovules that can become seeds after fertilisation." ]
      ]
    },
    "Flower dissection": {
      title:"Dissection sequence", prompt:"Work from outer structures toward reproductive structures.", states:[
        ["1 Sepals","🌿 outer layer","Observe and remove outer protective structures first."],
        ["2 Petals","🌸","Remove petals carefully so inner structures stay intact."],
        ["3 Stamens","anther + filament","Identify the male reproductive structures."],
        ["4 Carpel","stigma + style + ovary","Identify the female reproductive structure and label each part." ]
      ]
    },
    "Pollination": {
      title:"Pollination → fertilisation", prompt:"Follow the sequence from pollen transfer to seed formation.", states:[
        ["1 Pollination","anther → pollen → stigma","Pollen is transferred from anther to stigma."],
        ["2 Pollen tube","stigma ↓ style","A compatible pollen grain grows a tube down the style."],
        ["3 Fertilisation","male cell + female cell","Sex cells join inside an ovule."],
        ["4 Seed","fertilised ovule → seed","The fertilised ovule develops into a seed." ]
      ]
    },
    "Aotearoa flowers": {
      title:"Pollination adaptations", prompt:"Compare how flower features suit different pollen carriers.", states:[
        ["Wind","🌬️ light pollen • exposed anthers","Wind-pollinated flowers produce lots of light pollen and expose reproductive structures."],
        ["Insect","🐝 colour • scent • nectar","These features attract insects and encourage contact with anthers and stigmas."],
        ["Bird","🐦 strong colour • nectar • sturdy flower","Many bird-pollinated flowers are shaped and positioned to contact visiting birds." ]
      ]
    },
    "Ecosystems I": {
      title:"Levels of an ecosystem", prompt:"Zoom from one organism to the whole ecosystem.", states:[
        ["Organism","🐦","One individual living thing."],
        ["Population","🐦🐦🐦","Members of one species in an area."],
        ["Community","🐦🌿🐛🍄","All interacting populations in an area."],
        ["Ecosystem","community + ☀️💧🌡️ soil","The community plus non-living factors and their interactions." ]
      ]
    },
    "Aotearoa ecosystems": {
      title:"Ecosystem change", prompt:"See how threats and restoration can push populations in different directions.", states:[
        ["Introduced predators","🐀 ↑  →  🐦 ↓","Predation can strongly reduce vulnerable native populations."],
        ["Habitat loss","🌳 ↓  →  shelter/food ↓","Removing habitat reduces resources and breeding sites."],
        ["Predator control","trap effort ↑  →  native survival ↑","Reducing predator pressure can help native populations recover."],
        ["Habitat restoration","🌳🌳🌳 ↑","Restoring habitat increases resources and ecosystem resilience." ]
      ]
    },
    "Adaptations": {
      title:"Adaptation types", prompt:"Classify an adaptation by what kind of feature it is.", states:[
        ["Webbed feet","🦆 structural","A body feature is a structural adaptation."],
        ["Migration","🐦 →→ behavioural","An action is a behavioural adaptation."],
        ["Venom production","🐍 physiological","An internal biochemical process is physiological."],
        ["Thick fur","🐻 structural","A physical body feature that reduces heat loss is structural." ]
      ]
    },
    "Energy sources": {
      title:"Energy-source trade-offs", prompt:"Compare strengths and limitations instead of looking for one perfect source.", states:[
        ["Hydro","💧 renewable • controllable","Low operational emissions but dams alter rivers and need suitable geography."],
        ["Geothermal","🌋 steady output","Reliable in suitable regions, but sites are geographically limited."],
        ["Wind","🌬️ renewable • variable","Low operational emissions but output changes with wind conditions."],
        ["Fossil fuel","🔥 dispatchable • CO₂","Reliable on demand but finite and releases greenhouse gases when burned." ]
      ]
    },
    "Forms of energy": {
      title:"Energy stores", prompt:"Select a situation and identify the main energy store.", states:[
        ["Moving ball","🏀 →","Kinetic energy store."],
        ["Raised object","⬆️ 📦","Gravitational potential energy store."],
        ["Stretched band","↔️","Elastic potential energy store."],
        ["Food / battery","🍞 🔋","Chemical energy store." ]
      ]
    },
    "Energy transfer": {
      title:"Energy flow", prompt:"Trace where the energy starts and where it ends up.", states:[
        ["Torch","chemical → electrical → light + thermal","Useful light is produced, with some energy dissipated as heat."],
        ["Falling ball","gravitational → kinetic → sound + thermal","Energy changes store and eventually spreads into the surroundings."],
        ["Speaker","electrical → sound + thermal","Sound is useful output; some thermal energy is dissipated."],
        ["Person running","chemical → kinetic + thermal","Chemical energy from food is transferred into movement and heating." ]
      ]
    },
    "The Solar System": {
      title:"Planet order", prompt:"Jump to a planet and see its place in the Solar System.", states:[
        ["Mercury","☀️ • 1 • Mercury","Closest planet to the Sun; small and rocky."],
        ["Earth","☀️ • 1 • 2 • 3 Earth","Third planet; rocky with liquid surface water."],
        ["Jupiter","☀️ •••• 5 Jupiter","Fifth planet and the largest planet."],
        ["Neptune","☀️ •••••••• 8 Neptune","Eighth major planet; an ice giant." ]
      ]
    },
    "Scale of the Solar System": {
      title:"Distance scale", prompt:"Compare familiar Solar System distances in astronomical units.", states:[
        ["Earth","1 AU","Earth is about 1 AU from the Sun by definition."],
        ["Mars","~1.52 AU","Mars is roughly one and a half times Earth's Sun distance."],
        ["Jupiter","~5.2 AU","Jupiter is over five times Earth's Sun distance."],
        ["Neptune","~30 AU","Neptune is about thirty Earth–Sun distances from the Sun." ]
      ]
    },
    "Light waves": {
      title:"Light interaction", prompt:"Choose what a material can do to visible light.", states:[
        ["Reflect","↘️ █ ↗️","Light bounces from a surface and can enter the eye."],
        ["Absorb","→ █  (energy taken in)","The material absorbs light energy, often warming slightly."],
        ["Transmit","→ ░ →","A transparent material allows much of the light to pass through."],
        ["Colour","white light → red object → red to eye","Objects appear coloured because some wavelengths are reflected more strongly than others." ]
      ]
    }
  };

  const sliderModels = {
    "Bunsen burners": {title:"Air-hole and flame model",prompt:"Open the air hole and watch the flame change.",mode:"flame",min:0,max:100,value:0,left:"closed",right:"open"},
    "Measurement in science": {title:"Read the meniscus",prompt:"Move the liquid level and practise reading at eye level from the bottom of the curve.",mode:"meniscus",min:10,max:90,value:48,left:"10 mL",right:"90 mL"},
    "Bar graphs": {title:"Build a bar graph",prompt:"Change the final category and compare separate bar heights.",mode:"bar",min:1,max:10,value:6,left:"low",right:"high"},
    "Line graphs": {title:"Trend explorer",prompt:"Change the rate and watch a continuous relationship become steeper.",mode:"line",min:1,max:8,value:4,left:"slow change",right:"fast change"},
    "Experiments and evaluation": {title:"Repeats and anomalies",prompt:"Move one result away from the others and see why repeats matter.",mode:"repeat",min:10,max:40,value:22,left:"close to repeats",right:"possible anomaly"},
    "Manawatū water": {title:"Eutrophication model",prompt:"Increase nutrient runoff and watch the oxygen condition change.",mode:"eutrophication",min:0,max:100,value:20,left:"low nutrients",right:"high nutrients"},
    "Solids, liquids and gases": {title:"Particle-state model",prompt:"Add energy and watch particles spread out and move more freely.",mode:"particles",min:0,max:100,value:0,left:"solid",right:"gas"},
    "Changing states": {title:"Heating water",prompt:"Move temperature from ice through liquid water to water vapour.",mode:"states",min:-20,max:120,value:-10,left:"−20 °C",right:"120 °C"},
    "Heating ice practical": {title:"Heating-curve explorer",prompt:"Move through the heating timeline and notice the flat melting section.",mode:"heating",min:0,max:100,value:0,left:"start",right:"later"},
    "Microscopes": {title:"Magnification explorer",prompt:"Change the objective lens. Total magnification = eyepiece × objective.",mode:"microscope",min:0,max:2,value:0,left:"low power",right:"high power",step:1},
    "Photosynthesis oxygen practical": {title:"Light and bubble rate",prompt:"Increase light intensity and watch the model photosynthesis rate rise before levelling off.",mode:"bubbles",min:0,max:100,value:25,left:"dim",right:"bright"},
    "Seeds and germination": {title:"Germination conditions",prompt:"Move conditions from poor to suitable and watch the seed response.",mode:"germination",min:0,max:100,value:35,left:"poor conditions",right:"suitable conditions"},
    "Predators and prey": {title:"Predator–prey balance",prompt:"Change prey availability and see the likely predator response.",mode:"predator",min:0,max:100,value:50,left:"few prey",right:"many prey"},
    "Food chains and food webs": {title:"Food-web cascade",prompt:"Reduce producer abundance and see how less energy is available higher in the web.",mode:"foodweb",min:10,max:100,value:100,left:"few producers",right:"many producers"},
    "Astronomical cycles": {title:"Earth through the year",prompt:"Move Earth around its orbit and compare seasons in Aotearoa / the Southern Hemisphere.",mode:"season",min:0,max:3,value:0,left:"Jan",right:"Oct",step:1},
    "Energy transfer": {title:"Useful vs dissipated energy",prompt:"Change the useful share while keeping total energy constant.",mode:"efficiency",min:5,max:95,value:60,left:"mostly dissipated",right:"mostly useful"},
    "Waves": {title:"Wave explorer",prompt:"Change amplitude and frequency separately.",mode:"wave",min:1,max:5,value:2,left:"low frequency",right:"high frequency"}
  };

  const specialised = new Set(["Solar System scale practical","Food calorimetry","Efficiency and power","Solar and lunar eclipses","Sound waves","Reflection","Refraction","Sight"]);

  function esc(value) {
    return String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  function selectorHTML(model,key) {
    return `<div class="lm-model lm-selector" data-lm-key="${key}">
      <div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>${esc(model.title)}</h3><p>${esc(model.prompt)}</p></div>
      <div class="lm-choice-row">${model.states.map((s,i)=>`<button type="button" data-lm-choice="${i}" ${i===0?'aria-pressed="true"':'aria-pressed="false"'}>${esc(s[0])}</button>`).join("")}</div>
      <div class="lm-stage" data-lm-stage>${model.states[0][1]}</div>
      <p class="lm-output" data-lm-output aria-live="polite">${esc(model.states[0][2])}</p>
      <template data-lm-data>${model.states.map(s=>`${s[1]}|||${s[2]}`).join("###")}</template>
    </div>`;
  }

  function sliderStage(mode) {
    if(mode==="flame") return `<div class="lm-flame-wrap"><div class="lm-burner"></div><div class="lm-flame"></div></div>`;
    if(mode==="meniscus") return `<div class="lm-cylinder"><div class="lm-liquid"></div><div class="lm-meniscus"></div><div class="lm-eye-line"></div></div>`;
    if(mode==="bar") return `<div class="lm-chart lm-bars"><i style="height:35%"></i><i style="height:62%"></i><i style="height:48%"></i><i data-lm-dynamic-bar style="height:60%"></i></div>`;
    if(mode==="line") return `<svg class="lm-svg" viewBox="0 0 420 180"><line x1="38" y1="10" x2="38" y2="150"/><line x1="38" y1="150" x2="405" y2="150"/><path data-lm-path d=""/></svg>`;
    if(mode==="repeat") return `<div class="lm-repeat"><span style="--v:22">22</span><span style="--v:23">23</span><span style="--v:21">21</span><span data-lm-repeat>22</span></div>`;
    if(mode==="eutrophication") return `<div class="lm-water"><div class="lm-algae" data-lm-algae>algae</div><div class="lm-fish">🐟 🐟 🐟</div><div class="lm-oxygen" data-lm-oxygen></div></div>`;
    if(mode==="particles") return `<div class="lm-particles" data-lm-particles>${Array.from({length:18},(_,i)=>`<i style="--i:${i}"></i>`).join("")}</div>`;
    if(mode==="states") return `<div class="lm-state-stage"><strong data-lm-state-name>solid ice</strong><div class="lm-particles" data-lm-particles>${Array.from({length:18},(_,i)=>`<i style="--i:${i}"></i>`).join("")}</div></div>`;
    if(mode==="heating") return `<svg class="lm-svg" viewBox="0 0 420 190"><polyline class="lm-heating-line" points="25,160 120,105 230,105 385,30"/><circle data-lm-heating-dot cx="25" cy="160" r="8"/><text x="25" y="180">ice warms</text><text x="145" y="96">melting</text><text x="315" y="25">water warms</text></svg>`;
    if(mode==="microscope") return `<div class="lm-microscope"><div class="lm-lens">🔬</div><div class="lm-view" data-lm-view>small field • many cells</div></div>`;
    if(mode==="bubbles") return `<div class="lm-plant-tank"><span class="lm-plant">🌿</span><div data-lm-bubbles></div></div>`;
    if(mode==="germination") return `<div class="lm-seed-stage"><span>🫘</span><span data-lm-sprout>·</span></div>`;
    if(mode==="predator") return `<div class="lm-pop-bars"><div><span>Prey</span><i data-lm-prey></i></div><div><span>Predators</span><i data-lm-predator></i></div></div>`;
    if(mode==="foodweb") return `<div class="lm-foodweb"><span data-lm-prod>🌿🌿🌿🌿</span><b>→</b><span data-lm-herb>🐛🐛🐛</span><b>→</b><span data-lm-pred>🐦🐦</span></div>`;
    if(mode==="season") return `<div class="lm-orbit"><div class="lm-sun">☀️</div><div class="lm-earth" data-lm-earth>🌍</div></div>`;
    if(mode==="efficiency") return `<div class="lm-energy-split"><span class="lm-useful" data-lm-useful>60 J useful</span><span class="lm-waste" data-lm-waste>40 J dissipated</span></div>`;
    if(mode==="wave") return `<div class="lm-wave-controls"><label>Amplitude <input data-lm-amp type="range" min="10" max="55" value="30"></label></div><svg class="lm-svg" viewBox="0 0 420 180"><line x1="0" y1="90" x2="420" y2="90"/><path data-lm-wave-path d=""/></svg>`;
    return `<div class="lm-generic-stage"></div>`;
  }

  function sliderHTML(model,key) {
    return `<div class="lm-model lm-slider" data-lm-key="${key}" data-lm-mode="${model.mode}">
      <div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>${esc(model.title)}</h3><p>${esc(model.prompt)}</p></div>
      <div class="lm-stage">${sliderStage(model.mode)}</div>
      <label class="lm-range"><span>${esc(model.left)}</span><input data-lm-slider type="range" min="${model.min}" max="${model.max}" step="${model.step||1}" value="${model.value}"><span>${esc(model.right)}</span></label>
      <p class="lm-output" data-lm-output aria-live="polite"></p>
    </div>`;
  }

  function specialisedHTML(title,key) {
    if(title==="Solar System scale practical") return `<div class="lm-model lm-calc" data-lm-key="${key}" data-lm-special="scale"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Scale-model calculator</h3><p>Enter a real distance and a scale to see the model distance.</p></div><div class="lm-calc-grid"><label>Real distance (km)<input data-lm-real type="number" min="0" value="149600000"></label><label>1 model unit represents (km)<input data-lm-scale type="number" min="1" value="10000000"></label></div><div class="lm-big-result" data-lm-result></div><p class="lm-output">Use the same scale factor for every object or distance you compare.</p></div>`;
    if(title==="Food calorimetry") return `<div class="lm-model lm-calc" data-lm-key="${key}" data-lm-special="calorimetry"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Calorimetry calculator</h3><p>Change water mass and temperature rise to estimate energy transferred to the water.</p></div><div class="lm-calc-grid"><label>Water mass (g)<input data-lm-mass type="number" min="1" value="50"></label><label>Temperature rise (°C)<input data-lm-dt type="number" min="0" value="12"></label></div><div class="lm-big-result" data-lm-result></div><p class="lm-output">Model: energy = mass × 4.18 × temperature change.</p></div>`;
    if(title==="Efficiency and power") return `<div class="lm-model lm-calc" data-lm-key="${key}" data-lm-special="effpower"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Efficiency + power calculator</h3><p>Change the values and see both equations update.</p></div><div class="lm-calc-grid three"><label>Total input (J)<input data-lm-input type="number" min="1" value="200"></label><label>Useful output (J)<input data-lm-outputj type="number" min="0" value="50"></label><label>Time (s)<input data-lm-time type="number" min="0.1" step="0.1" value="10"></label></div><div class="lm-big-result" data-lm-result></div></div>`;
    if(title==="Solar and lunar eclipses") return `<div class="lm-model" data-lm-key="${key}" data-lm-special="eclipse"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Eclipse alignment model</h3><p>Switch the alignment and trace which object is in the middle.</p></div><div class="lm-choice-row"><button type="button" data-lm-eclipse="solar" aria-pressed="true">Solar eclipse</button><button type="button" data-lm-eclipse="lunar" aria-pressed="false">Lunar eclipse</button></div><div class="lm-eclipse-stage" data-lm-eclipse-stage></div><p class="lm-output" data-lm-output></p></div>`;
    if(title==="Sound waves") return `<div class="lm-model" data-lm-key="${key}" data-lm-special="sound"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Sound wave model</h3><p>Change frequency and amplitude. Watch pitch and loudness change independently.</p></div><div class="lm-two-ranges"><label>Frequency <input data-lm-sound-f type="range" min="1" max="6" value="3"></label><label>Amplitude <input data-lm-sound-a type="range" min="10" max="55" value="30"></label></div><svg class="lm-svg" viewBox="0 0 420 180"><line x1="0" y1="90" x2="420" y2="90"/><path data-lm-sound-path d=""/></svg><p class="lm-output" data-lm-output></p></div>`;
    if(title==="Reflection") return `<div class="lm-model" data-lm-key="${key}" data-lm-special="reflection"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Reflection ray model</h3><p>Change the angle of incidence. The reflected ray must leave at the same angle to the normal.</p></div><svg class="lm-ray-svg" viewBox="0 0 520 260"><line class="lm-mirror-line" x1="35" y1="175" x2="485" y2="175"/><line class="lm-normal-line" x1="260" y1="25" x2="260" y2="235"/><line data-lm-inc x1="80" y1="45" x2="260" y2="175"/><line data-lm-ref x1="260" y1="175" x2="440" y2="45"/><text x="270" y="45">normal</text><text x="38" y="198">mirror</text></svg><label class="lm-range"><span>10°</span><input data-lm-angle type="range" min="10" max="70" value="35"><span>70°</span></label><p class="lm-output" data-lm-output></p></div>`;
    if(title==="Refraction") return `<div class="lm-model" data-lm-key="${key}" data-lm-special="refraction"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Refraction ray model</h3><p>Change the incident angle and the material. The model uses Snell's law to show the bend.</p></div><div class="lm-choice-row"><button type="button" data-lm-medium="1.33" aria-pressed="true">Water</button><button type="button" data-lm-medium="1.50" aria-pressed="false">Glass</button><button type="button" data-lm-medium="2.42" aria-pressed="false">Diamond</button></div><svg class="lm-ray-svg" viewBox="0 0 520 300"><rect x="25" y="150" width="470" height="125" class="lm-medium-fill"/><line class="lm-interface-line" x1="25" y1="150" x2="495" y2="150"/><line class="lm-normal-line" x1="260" y1="20" x2="260" y2="285"/><line data-lm-inc x1="80" y1="30" x2="260" y2="150"/><line data-lm-refr x1="260" y1="150" x2="330" y2="270"/><text x="35" y="42">air</text><text x="35" y="178" data-lm-medium-label>water</text></svg><label class="lm-range"><span>10°</span><input data-lm-angle type="range" min="10" max="70" value="45"><span>70°</span></label><p class="lm-output" data-lm-output></p></div>`;
    if(title==="Sight") return `<div class="lm-model" data-lm-key="${key}" data-lm-special="eye"><div class="lm-copy"><span class="lm-kicker">Interactive visualisation</span><h3>Eye focusing model</h3><p>Choose an eye condition, then test a correcting lens.</p></div><div class="lm-choice-row"><button type="button" data-lm-eye="normal" aria-pressed="true">Normal</button><button type="button" data-lm-eye="myopia" aria-pressed="false">Myopia</button><button type="button" data-lm-eye="hyperopia" aria-pressed="false">Hyperopia</button></div><svg class="lm-eye-svg" viewBox="0 0 560 260"><path class="lm-eye-shape" d="M175 38 C330 -10 510 55 510 130 C510 205 330 270 175 222 C115 205 95 165 95 130 C95 95 115 55 175 38Z"/><ellipse class="lm-eye-lens" cx="205" cy="130" rx="24" ry="62"/><line class="lm-retina" x1="455" y1="63" x2="455" y2="197"/><line data-lm-eye-ray1 x1="25" y1="80" x2="205" y2="80"/><line data-lm-eye-ray2 x1="25" y1="180" x2="205" y2="180"/><line data-lm-eye-focus1 x1="205" y1="80" x2="455" y2="130"/><line data-lm-eye-focus2 x1="205" y1="180" x2="455" y2="130"/><circle data-lm-focus cx="455" cy="130" r="7"/><text x="431" y="54">retina</text></svg><div class="lm-correction"><span>Correction:</span><button type="button" data-lm-correct="none" aria-pressed="true">None</button><button type="button" data-lm-correct="concave" aria-pressed="false">Concave</button><button type="button" data-lm-correct="convex" aria-pressed="false">Convex</button></div><p class="lm-output" data-lm-output></p></div>`;
    return "";
  }

  function modelHTML(title,key) {
    if(selectorModels[title]) return selectorHTML(selectorModels[title],key);
    if(sliderModels[title]) return sliderHTML(sliderModels[title],key);
    if(specialised.has(title)) return specialisedHTML(title,key);
    // Safety net: every lesson still receives an interactive compare model if a title is added later.
    return selectorHTML({title:`Explore ${title}`,prompt:"Use the two views to connect the idea with an explanation.",states:[["What I see","👁️ observe","Describe the evidence or pattern first."],["What it means","🧠 explain","Then connect the observation to the scientific idea."]]},key);
  }

  const originalLessonPanel = window.lessonPanel;
  if(typeof originalLessonPanel === "function") {
    window.lessonPanel = function(slug,unit,lesson,index,checked) {
      const html = originalLessonPanel(slug,unit,lesson,index,checked);
      const key = `${slug}-${index}`;
      const model = `<section class="mission-step mission-model"><span class="mission-label">Explore • Interactive</span>${modelHTML(lesson[0],key)}</section>`;
      return html.replace('<section class="mission-step mission-try">', model + '<section class="mission-step mission-try">');
    };
  }

  function parseSelectorData(root) {
    const raw = root.querySelector("[data-lm-data]")?.content?.textContent || "";
    return raw.split("###").filter(Boolean).map(x=>x.split("|||"));
  }

  function setPressed(buttons,active) {
    buttons.forEach(btn=>btn.setAttribute("aria-pressed",String(btn===active)));
  }

  function updateSlider(root) {
    const slider=root.querySelector("[data-lm-slider]"); if(!slider) return;
    const v=Number(slider.value), mode=root.dataset.lmMode, out=root.querySelector("[data-lm-output]");
    if(mode==="flame") {
      root.style.setProperty("--lm-open",`${v}%`);
      const flame=root.querySelector(".lm-flame");
      flame.classList.toggle("blue",v>45);
      out.textContent=v>45?`Air hole ${v}% open: more oxygen mixes with the gas, producing a hotter blue heating flame.`:`Air hole ${v}% open: the flame remains more visible and orange, suitable as the safety flame.`;
    } else if(mode==="meniscus") {
      root.style.setProperty("--lm-level",`${v}%`);
      root.querySelector(".lm-liquid").style.height=`${v}%`;
      root.querySelector(".lm-meniscus").style.bottom=`calc(${v}% - 4px)`;
      out.textContent=`Model reading: about ${v} mL. Read at eye level from the bottom of the meniscus.`;
    } else if(mode==="bar") {
      root.querySelector("[data-lm-dynamic-bar]").style.height=`${v*9}%`;
      out.textContent=`Category D = ${v}. Each bar stays separate because the x-axis contains categories.`;
    } else if(mode==="line") {
      const pts=[]; for(let x=40;x<=400;x+=60){const y=150-(x-40)*v*0.045; pts.push(`${x},${Math.max(18,y)}`);} root.querySelector("[data-lm-path]").setAttribute("d",`M${pts.join(" L")}`);
      out.textContent=`Rate setting ${v}: a steeper line shows the dependent variable changing faster as the independent variable increases.`;
    } else if(mode==="repeat") {
      root.querySelector("[data-lm-repeat]").textContent=v;
      const mean=(22+23+21+v)/4;
      out.textContent=`Results: 22, 23, 21, ${v}. Mean = ${mean.toFixed(1)}. ${Math.abs(v-22)>8?"The final result may be an anomaly, so investigate and repeat it.":"The repeats are reasonably close, which supports reliability."}`;
    } else if(mode==="eutrophication") {
      root.querySelector("[data-lm-algae]").style.width=`${20+v*.65}%`;
      root.querySelector("[data-lm-oxygen]").style.width=`${Math.max(8,100-v)}%`;
      out.textContent=`Nutrient level ${v}%. More nutrients can drive algal growth; decomposition can then reduce dissolved oxygen available to aquatic organisms.`;
    } else if(mode==="particles" || mode==="states") {
      const box=root.querySelector("[data-lm-particles]");
      const state=v<33?"solid":v<67?"liquid":"gas"; box.dataset.state=state;
      box.querySelectorAll("i").forEach((dot,index)=>{
        if(state==="solid"){dot.style.left=`${18+(index%6)*12}%`;dot.style.top=`${45+Math.floor(index/6)*15}%`;}
        else if(state==="liquid"){dot.style.left=`${6+(index%9)*10.5}%`;dot.style.top=`${38+Math.floor(index/9)*27+(index%3)*3}%`;}
        else {dot.style.left=`${4+((index*37)%90)}%`;dot.style.top=`${5+((index*23)%84)}%`;}
      });
      if(root.querySelector("[data-lm-state-name]")) root.querySelector("[data-lm-state-name]").textContent=v<0?"solid ice":v<100?"liquid water":"water vapour";
      if(mode==="states") out.textContent=v<0?`${v} °C: solid ice; particles vibrate in fixed positions.`:v<100?`${v} °C: liquid water; particles stay close but move past one another.`:`${v} °C: water vapour; gas particles are far apart and move freely.`;
      else out.textContent=`Energy level ${v}%: ${state} particle behaviour is being modelled.`;
    } else if(mode==="heating") {
      const dot=root.querySelector("[data-lm-heating-dot]");
      let x,y,label; if(v<30){x=25+v*3.17;y=160-v*1.83;label="Ice warms: temperature rises."} else if(v<60){x=120+(v-30)*3.67;y=105;label="Melting: energy changes particle arrangement, so temperature stays nearly flat."} else {x=230+(v-60)*3.88;y=105-(v-60)*1.88;label="Liquid water warms: temperature rises again."} dot.setAttribute("cx",x);dot.setAttribute("cy",y);out.textContent=label;
    } else if(mode==="microscope") {
      const opts=[{obj:4,total:40,text:"wide field • many cells"},{obj:10,total:100,text:"medium field • fewer cells"},{obj:40,total:400,text:"narrow field • much more detail"}][v]; root.querySelector("[data-lm-view]").textContent=opts.text; out.textContent=`10× eyepiece × ${opts.obj}× objective = ${opts.total}× total magnification.`;
    } else if(mode==="bubbles") {
      const count=Math.max(1,Math.round(2+v*.13));root.querySelector("[data-lm-bubbles]").innerHTML=Array.from({length:count},(_,i)=>`<i style="left:${12+(i*29)%78}%;bottom:${12+(i*17)%75}%"></i>`).join("");out.textContent=`Light intensity ${v}%: the model bubble rate ${v>75?"is beginning to level off because another factor may become limiting":"rises as more light energy is available for photosynthesis"}.`;
    } else if(mode==="germination") {
      const sprout=root.querySelector("[data-lm-sprout]"); sprout.textContent=v<30?"·":v<60?"🌱":"🌿";out.textContent=v<30?"Poor conditions: germination is unlikely or slow.":v<60?"Some suitable conditions are present: germination begins.":"Suitable water, oxygen and temperature allow strong germination.";
    } else if(mode==="predator") {
      root.querySelector("[data-lm-prey]").style.height=`${Math.max(10,v)}%`;root.querySelector("[data-lm-predator]").style.height=`${Math.max(10,20+v*.65)}%`;out.textContent=`Prey availability ${v}%. Predator populations often respond to changes in food supply, usually with a time lag.`;
    } else if(mode==="foodweb") {
      root.querySelector("[data-lm-prod]").style.opacity=.2+.008*v;root.querySelector("[data-lm-herb]").style.opacity=.2+.0065*v;root.querySelector("[data-lm-pred]").style.opacity=.2+.005*v;out.textContent=`Producer level ${v}%. Less producer biomass means less energy is available to consumers higher in the food web.`;
    } else if(mode==="season") {
      const pos=[[50,2],[92,50],[50,92],[8,50]][v];root.querySelector("[data-lm-earth]").style.left=`${pos[0]}%`;root.querySelector("[data-lm-earth]").style.top=`${pos[1]}%`;const labels=["Around January: Southern Hemisphere summer — more direct sunlight and longer days.","Around April: moving toward shorter days and cooler conditions.","Around July: Southern Hemisphere winter — less direct sunlight and shorter days.","Around October: moving toward longer days and warmer conditions."];out.textContent=labels[v];
    } else if(mode==="efficiency") {
      root.querySelector("[data-lm-useful]").style.width=`${v}%`;root.querySelector("[data-lm-waste]").style.width=`${100-v}%`;root.querySelector("[data-lm-useful]").textContent=`${v} J useful`;root.querySelector("[data-lm-waste]").textContent=`${100-v} J dissipated`;out.textContent=`For a 100 J input, ${v} J is useful and ${100-v} J is dissipated. Energy is conserved.`;
    } else if(mode==="wave") {
      const amp=Number(root.querySelector("[data-lm-amp]").value),f=v,pts=[];for(let x=0;x<=420;x+=4)pts.push(`${x},${90-amp*Math.sin(x/420*Math.PI*2*f)}`);root.querySelector("[data-lm-wave-path]").setAttribute("d",`M${pts.join(" L")}`);out.textContent=`Frequency ${f} cycles across the model; amplitude ${amp}. Frequency changes cycle spacing, amplitude changes maximum displacement.`;
    }
  }

  function updateSpecial(root) {
    const type=root.dataset.lmSpecial;
    if(type==="scale") {const real=Number(root.querySelector("[data-lm-real]").value)||0,scale=Math.max(1,Number(root.querySelector("[data-lm-scale]").value)||1);root.querySelector("[data-lm-result]").textContent=`Model distance = ${(real/scale).toFixed(2)} units`;}
    else if(type==="calorimetry") {const m=Math.max(0,Number(root.querySelector("[data-lm-mass]").value)||0),dt=Math.max(0,Number(root.querySelector("[data-lm-dt]").value)||0);root.querySelector("[data-lm-result]").textContent=`${(m*4.18*dt).toFixed(0)} J transferred to the water`;}
    else if(type==="effpower") {const input=Math.max(.0001,Number(root.querySelector("[data-lm-input]").value)||0),useful=Math.max(0,Number(root.querySelector("[data-lm-outputj]").value)||0),time=Math.max(.0001,Number(root.querySelector("[data-lm-time]").value)||0);root.querySelector("[data-lm-result]").textContent=`Efficiency ${(useful/input*100).toFixed(1)}%  •  Power ${(input/time).toFixed(1)} W (using input energy ÷ time)`;}
    else if(type==="eclipse") {const solar=root.querySelector('[data-lm-eclipse="solar"]')?.getAttribute("aria-pressed")!=="false";root.querySelector("[data-lm-eclipse-stage]").innerHTML=solar?`<span class="sun">Sun</span><b>→</b><span>Moon</span><b>→ shadow →</b><span>Earth</span>`:`<span class="sun">Sun</span><b>→</b><span>Earth</span><b>→ shadow →</b><span>Moon</span>`;root.querySelector("[data-lm-output]").textContent=solar?"Solar eclipse: Moon is between Sun and Earth.":"Lunar eclipse: Earth is between Sun and Moon, so Earth's shadow falls on the Moon.";}
    else if(type==="sound") {const f=Number(root.querySelector("[data-lm-sound-f]").value),a=Number(root.querySelector("[data-lm-sound-a]").value),pts=[];for(let x=0;x<=420;x+=4)pts.push(`${x},${90-a*Math.sin(x/420*Math.PI*2*f)}`);root.querySelector("[data-lm-sound-path]").setAttribute("d",`M${pts.join(" L")}`);root.querySelector("[data-lm-output]").textContent=`Frequency ${f}: ${f>=4?"higher":"lower"} pitch. Amplitude ${a}: ${a>=35?"louder":"quieter"} sound.`;}
    else if(type==="reflection") {const ang=Number(root.querySelector("[data-lm-angle]").value),dy=125,dx=Math.min(205,Math.tan(ang*Math.PI/180)*dy),inc=root.querySelector("[data-lm-inc]"),ref=root.querySelector("[data-lm-ref]");inc.setAttribute("x1",260-dx);inc.setAttribute("y1",175-dy);ref.setAttribute("x2",260+dx);ref.setAttribute("y2",175-dy);root.querySelector("[data-lm-output]").textContent=`Angle of incidence = ${ang}°. Angle of reflection = ${ang}°. Both are measured from the normal.`;}
    else if(type==="refraction") {const ang=Number(root.querySelector("[data-lm-angle]").value),medium=Number(root.dataset.medium||1.33),theta2=Math.asin(Math.sin(ang*Math.PI/180)/medium)*180/Math.PI,dy1=120,dx1=Math.min(210,Math.tan(ang*Math.PI/180)*dy1),dy2=120,dx2=Math.tan(theta2*Math.PI/180)*dy2;root.querySelector("[data-lm-inc]").setAttribute("x1",260-dx1);root.querySelector("[data-lm-inc]").setAttribute("y1",150-dy1);root.querySelector("[data-lm-refr]").setAttribute("x2",260+dx2);root.querySelector("[data-lm-refr]").setAttribute("y2",150+dy2);root.querySelector("[data-lm-output]").textContent=`Air → medium: incident angle ${ang}°, refracted angle ≈ ${theta2.toFixed(1)}°. The ray bends toward the normal because it slows in the denser optical medium.`;}
    else if(type==="eye") {const condition=root.dataset.eye||"normal",corr=root.dataset.correction||"none";let focus=455;if(condition==="myopia")focus=405;if(condition==="hyperopia")focus=505;if(corr==="concave")focus+=50;if(corr==="convex")focus-=50;focus=Math.max(360,Math.min(530,focus));root.querySelector("[data-lm-focus]").setAttribute("cx",focus);root.querySelector("[data-lm-eye-focus1]").setAttribute("x2",focus);root.querySelector("[data-lm-eye-focus2]").setAttribute("x2",focus);const onRetina=Math.abs(focus-455)<18;root.querySelector("[data-lm-output]").textContent=condition==="normal"?`Normal eye: light focuses on the retina. ${corr==="none"?"No correcting lens is needed.":"Adding a correcting lens would move the focus away from the retina."}`:condition==="myopia"?`${onRetina?"Corrected: concave lens moves the focus back onto the retina.":"Myopia: without the correct lens, light focuses in front of the retina."}`:`${onRetina?"Corrected: convex lens moves the focus forward onto the retina.":"Hyperopia: without the correct lens, light would focus behind the retina."}`;}
  }

  if(!window.__lessonModelsBound) {
    window.__lessonModelsBound=true;
    document.addEventListener("click",e=>{
      const choice=e.target.closest("[data-lm-choice]");
      if(choice){const root=choice.closest(".lm-selector"),data=parseSelectorData(root),idx=Number(choice.dataset.lmChoice),row=data[idx];setPressed([...root.querySelectorAll("[data-lm-choice]")],choice);if(row){root.querySelector("[data-lm-stage]").innerHTML=row[0];root.querySelector("[data-lm-output]").textContent=row[1];}return;}
      const eclipse=e.target.closest("[data-lm-eclipse]");
      if(eclipse){const root=eclipse.closest("[data-lm-special]");setPressed([...root.querySelectorAll("[data-lm-eclipse]")],eclipse);updateSpecial(root);return;}
      const medium=e.target.closest("[data-lm-medium]");
      if(medium){const root=medium.closest("[data-lm-special]");root.dataset.medium=medium.dataset.lmMedium;setPressed([...root.querySelectorAll("[data-lm-medium]")],medium);root.querySelector("[data-lm-medium-label]").textContent=medium.textContent.toLowerCase();updateSpecial(root);return;}
      const eye=e.target.closest("[data-lm-eye]");
      if(eye){const root=eye.closest("[data-lm-special]");root.dataset.eye=eye.dataset.lmEye;setPressed([...root.querySelectorAll("[data-lm-eye]")],eye);updateSpecial(root);return;}
      const correct=e.target.closest("[data-lm-correct]");
      if(correct){const root=correct.closest("[data-lm-special]");root.dataset.correction=correct.dataset.lmCorrect;setPressed([...root.querySelectorAll("[data-lm-correct]")],correct);updateSpecial(root);}
    });
    document.addEventListener("input",e=>{
      const root=e.target.closest(".lm-model"); if(!root) return;
      if(root.classList.contains("lm-slider")) updateSlider(root);
      if(root.dataset.lmSpecial) updateSpecial(root);
    });
  }

  function initialiseModels() {
    document.querySelectorAll(".lm-slider").forEach(updateSlider);
    document.querySelectorAll("[data-lm-special]").forEach(root=>{
      if(root.dataset.lmSpecial==="refraction" && !root.dataset.medium) root.dataset.medium="1.33";
      if(root.dataset.lmSpecial==="eye"){root.dataset.eye="normal";root.dataset.correction="none";}
      updateSpecial(root);
    });
  }

  if(!document.getElementById("lesson-model-styles")) {
    const style=document.createElement("style"); style.id="lesson-model-styles"; style.textContent=`
      .mission-model{background:linear-gradient(135deg,#f7f8f6,#eef2f0)!important;border-left:4px solid var(--unit-colour,#287049)}
      .lm-model{margin-top:.65rem;border:1px solid rgba(0,0,0,.13);border-radius:18px;background:#fff;padding:1rem;overflow:hidden}.lm-copy h3{margin:.2rem 0 .35rem;font-size:1.12rem}.lm-copy p{margin:0 0 .8rem}.lm-kicker{font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;font-weight:800;opacity:.58}.lm-choice-row{display:flex;flex-wrap:wrap;gap:.5rem;margin:.75rem 0}.lm-choice-row button,.lm-correction button{min-height:44px;border:1px solid #bbb;border-radius:999px;background:#fff;padding:.55rem .8rem;font:inherit;font-weight:700;cursor:pointer}.lm-choice-row button[aria-pressed="true"],.lm-correction button[aria-pressed="true"]{background:#111;color:#fff;border-color:#111}.lm-stage{min-height:150px;border-radius:14px;background:#f1f3f2;display:grid;place-items:center;padding:1rem;font-size:1.35rem;text-align:center;overflow:hidden}.lm-selector .lm-stage{font-weight:800;letter-spacing:.01em}.lm-output{margin:.8rem 0 0;font-weight:600;line-height:1.5}.lm-range{display:grid;grid-template-columns:auto minmax(120px,1fr) auto;align-items:center;gap:.7rem;margin-top:.8rem;font-size:.78rem;font-weight:700}.lm-range input,.lm-two-ranges input,.lm-wave-controls input{width:100%;min-height:44px}.lm-svg,.lm-ray-svg,.lm-eye-svg{width:100%;max-height:300px}.lm-svg line,.lm-svg path,.lm-ray-svg line,.lm-eye-svg line{stroke:#202020;stroke-width:4;fill:none}.lm-svg path{stroke:#354b79}.lm-ray-svg .lm-normal-line{stroke:#888;stroke-dasharray:8 8;stroke-width:2}.lm-mirror-line{stroke:#354b79!important;stroke-width:8!important}.lm-interface-line{stroke:#444!important;stroke-width:4!important}.lm-medium-fill{fill:#dceaf3;stroke:none}.lm-ray-svg text,.lm-eye-svg text{font:14px Inter,sans-serif;fill:#333}.lm-flame-wrap{position:relative;width:170px;height:180px}.lm-burner{position:absolute;left:67px;bottom:10px;width:38px;height:98px;background:#50545a;border-radius:8px 8px 3px 3px;box-shadow:0 12px 0 18px #34373b}.lm-flame{position:absolute;left:54px;bottom:104px;width:64px;height:78px;border-radius:50% 50% 45% 45%;background:radial-gradient(circle at 50% 70%,#ffe27a 0 20%,#f2a33a 30%,#d75b2a 75%);clip-path:polygon(50% 0,86% 50%,75% 100%,25% 100%,14% 50%)}.lm-flame.blue{background:radial-gradient(circle at 50% 75%,#fff 0 12%,#83c8ff 20%,#1f77d0 58%,#285aa0 85%);height:105px}.lm-cylinder{position:relative;width:120px;height:190px;border:4px solid #555;border-top:0;border-radius:0 0 16px 16px;background:repeating-linear-gradient(to bottom,transparent 0 17px,rgba(0,0,0,.18) 18px 19px)}.lm-liquid{position:absolute;left:0;right:0;bottom:0;background:#a8d7ec;border-radius:0 0 11px 11px}.lm-meniscus{position:absolute;left:6px;right:6px;height:10px;border-bottom:3px solid #3186ad;border-radius:50%}.lm-eye-line{position:absolute;left:-45px;right:-45px;top:50%;border-top:2px dashed #9f171b}.lm-chart{height:170px;border-left:3px solid #222;border-bottom:3px solid #222;display:flex;align-items:flex-end;gap:12px;padding:0 18px}.lm-chart i{flex:1;background:#9f171b;border-radius:5px 5px 0 0;min-height:8px}.lm-repeat{display:flex;align-items:flex-end;justify-content:center;gap:.75rem;height:150px}.lm-repeat span{display:grid;place-items:center;width:60px;height:60px;border-radius:50%;background:#dde7df;font-weight:800}.lm-water{position:relative;width:min(100%,520px);height:180px;border-radius:14px;background:linear-gradient(#cbe9f6 0 35%,#74b9d6 36% 100%);overflow:hidden}.lm-algae{position:absolute;left:0;top:65px;height:25px;background:#77a96e;font-size:.7rem;display:grid;place-items:center;transition:width .2s}.lm-fish{position:absolute;left:20%;right:0;bottom:42px;font-size:1.8rem}.lm-oxygen{position:absolute;left:0;bottom:0;height:18px;background:#dff6ff;transition:width .2s}.lm-particles{position:relative;width:min(100%,430px);height:170px;border:2px solid #555;border-radius:14px}.lm-particles i{position:absolute;width:14px;height:14px;border-radius:50%;background:#166b7a;transition:left .25s,top .25s}.lm-state-stage{width:100%;display:grid;gap:.5rem;place-items:center}.lm-heating-line{fill:none;stroke:#9f171b!important;stroke-width:5}.lm-microscope{display:flex;align-items:center;gap:1rem;font-weight:800}.lm-lens{font-size:4rem}.lm-view{padding:1rem;border-radius:50%;border:5px solid #333;min-width:170px;min-height:110px;display:grid;place-items:center;text-align:center}.lm-plant-tank{position:relative;width:280px;height:170px;border:3px solid #4a6b79;border-top:0;background:#d7f1fa;border-radius:0 0 18px 18px}.lm-plant{position:absolute;left:105px;bottom:10px;font-size:4rem}.lm-plant-tank i{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid #4a97b8;background:#fff}.lm-seed-stage{font-size:4rem;display:flex;align-items:flex-end;gap:1rem}.lm-pop-bars{width:min(100%,420px);height:160px;display:flex;align-items:flex-end;justify-content:center;gap:2.5rem}.lm-pop-bars div{height:130px;width:100px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;gap:.4rem}.lm-pop-bars i{display:block;width:58px;background:#287049;border-radius:8px 8px 0 0;min-height:10px}.lm-pop-bars div:last-child i{background:#9f171b}.lm-foodweb{display:flex;align-items:center;gap:.65rem;flex-wrap:wrap;font-size:1.55rem}.lm-orbit{position:relative;width:260px;height:220px;border:2px dashed #8aa;border-radius:50%}.lm-sun{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font-size:3rem}.lm-earth{position:absolute;transform:translate(-50%,-50%);font-size:2rem;transition:left .25s,top .25s}.lm-energy-split{width:min(100%,520px);display:flex;border-radius:12px;overflow:hidden;min-height:90px}.lm-energy-split span{display:grid;place-items:center;text-align:center;padding:.5rem;min-width:0;transition:width .2s}.lm-useful{background:#dbeadf}.lm-waste{background:#f1d9d6}.lm-calc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.8rem}.lm-calc-grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}.lm-calc-grid label{font-weight:700;font-size:.82rem}.lm-calc-grid input{width:100%;min-height:44px;margin-top:.3rem;border:1px solid #aaa;border-radius:10px;padding:.55rem;font:inherit}.lm-big-result{font-size:1.35rem;font-weight:800;margin-top:1rem;padding:1rem;border-radius:12px;background:#111;color:#fff}.lm-eclipse-stage{min-height:150px;display:flex;align-items:center;justify-content:center;gap:.7rem;flex-wrap:wrap;font-weight:800;font-size:1.15rem}.lm-eclipse-stage span{display:grid;place-items:center;width:78px;height:78px;border-radius:50%;background:#c7d8e5}.lm-eclipse-stage .sun{background:#f2d372}.lm-two-ranges,.lm-wave-controls{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.lm-two-ranges label,.lm-wave-controls label{font-weight:700}.lm-eye-shape{fill:#edf2f5;stroke:#50616e;stroke-width:4}.lm-eye-lens{fill:#bcd9e8;stroke:#4d7a8f;stroke-width:4}.lm-retina{stroke:#9f171b!important;stroke-width:8!important}.lm-eye-svg line:not(.lm-retina){stroke:#d38c2b;stroke-width:3}.lm-eye-svg circle{fill:#9f171b}.lm-correction{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-top:.5rem}.lm-correction span{font-weight:800}.lm-correction button{background:#fff}.lm-correction button[aria-pressed="true"]{background:#111;color:#fff}.lm-wave-controls{grid-template-columns:1fr}.lm-model input[type="range"]{accent-color:#111}
      @media(max-width:700px){.lm-calc-grid,.lm-calc-grid.three,.lm-two-ranges{grid-template-columns:1fr}.lm-range{grid-template-columns:1fr}.lm-range span{display:none}.lm-stage{min-height:130px}.lm-model{padding:.85rem}.lm-choice-row button{flex:1 1 120px}.lm-eclipse-stage{font-size:.95rem}.lm-ray-svg,.lm-eye-svg{max-height:230px}.lm-output{font-size:.92rem}}
    `; document.head.appendChild(style);
  }

  const oldBind=window.bindCourseInteractions;
  if(typeof oldBind==="function") {
    window.bindCourseInteractions=function(route,slug){
      oldBind(route,slug);
      requestAnimationFrame(initialiseModels);
    };
  }
  // course-ui and lesson-alignment-fix have already rendered once before this file loads.
  // Render once more so the upgraded lesson panels include the new models. Future route
  // changes initialise through the wrapped bindCourseInteractions function above.
  if(typeof window.renderCourseSite==="function") window.renderCourseSite();
  else requestAnimationFrame(initialiseModels);
})();
