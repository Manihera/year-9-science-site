const units = {
  nature: {
    number: "01",
    title: "The Nature of Science",
    subtitle: "The skills and habits that help scientists investigate the world safely and fairly.",
    intro: "This section revises laboratory safety, equipment, observations, measurement, variables, graphs and scientific reports.",
    topics: [
      {
        title: "Laboratory safety and equipment",
        points: [
          "A hazard can cause harm. A risk describes the chance that the harm will happen.",
          "Wear safety glasses, tie back long hair and follow the teacher's instructions during practical work.",
          "Know the uses of common equipment such as beakers, conical flasks, test tubes, measuring cylinders, thermometers and Bunsen burners.",
          "Scientific diagrams use sharp pencil, clear single lines, a ruler for labels and correct proportions."
        ],
        note: "Orange Bunsen flame: air hole closed, visible safety flame. Blue flame: air hole open, hotter heating flame."
      },
      {
        title: "Observations and measurement",
        points: [
          "A qualitative observation describes a quality using the senses, such as colour or texture.",
          "A quantitative observation includes a number and unit, such as 24 °C or 35 mL.",
          "An inference is an explanation based on observations and prior knowledge.",
          "A measurement needs both a number and a unit. Read liquid volume at eye level from the bottom of the meniscus."
        ],
        note: "Accuracy means closeness to the accepted value. Precision means repeated measurements are close to one another."
      },
      {
        title: "Variables and fair tests",
        points: [
          "The independent variable is deliberately changed.",
          "The dependent variable is measured or observed.",
          "Control variables stay the same to make the investigation fair.",
          "A useful hypothesis predicts how the independent variable will affect the dependent variable and gives a scientific reason."
        ]
      },
      {
        title: "Graphs and scientific reports",
        points: [
          "Bar graphs compare separate categories or discrete data. The bars do not touch.",
          "Line graphs show relationships involving continuous data.",
          "Graphs need a clear title, labelled axes, units and an even scale.",
          "A scientific report includes aim, hypothesis, variables, equipment, method, results, conclusion and discussion."
        ],
        note: "Put the independent variable on the x-axis and the dependent variable on the y-axis."
      }
    ],
    cards: [
      ["Hazard", "Something that can cause damage or harm."],
      ["Qualitative observation", "A description made using qualities such as colour, smell or texture."],
      ["Quantitative observation", "An observation containing a number and unit."],
      ["Independent variable", "The variable deliberately changed by the scientist."],
      ["Dependent variable", "The variable measured as the result."],
      ["Control variable", "A factor kept the same to make the test fair."],
      ["Accuracy", "How close a measurement is to the accepted or true value."],
      ["Precision", "How close repeated measurements are to one another."],
      ["Conclusion", "A statement explaining what the results show and whether they support the hypothesis."]
    ],
    quiz: [
      {q:"Which Bunsen flame should be showing when you are not heating?", options:["Blue flame","Orange safety flame","No visible flame","Green flame"], a:1, why:"The orange flame is clearly visible and is used as the safety flame."},
      {q:"A student records that a liquid is 42 mL. What type of observation is this?", options:["Inference","Qualitative","Quantitative","Prediction"], a:2, why:"It contains a number and a unit."},
      {q:"In an investigation of how water temperature affects dissolving time, what is the independent variable?", options:["Water temperature","Dissolving time","Amount of sugar","Container"], a:0, why:"The scientist deliberately changes the water temperature."},
      {q:"Where does the dependent variable usually go on a graph?", options:["Title","x-axis","y-axis","Key"], a:2, why:"The measured dependent variable goes on the y-axis."},
      {q:"Which report section explains exactly what was done?", options:["Aim","Method","Results","Conclusion"], a:1, why:"The method gives the repeatable steps."}
    ],
    practice: [
      ["Explain the difference between an observation and an inference.", "An observation is information gathered directly using the senses or measuring equipment. An inference is an explanation based on observations and previous knowledge."],
      ["A student tests whether ramp height affects the time a marble takes to travel 1 m. Identify the independent and dependent variables.", "Independent variable: ramp height. Dependent variable: time taken to travel 1 m."],
      ["Give two features of a correctly drawn scientific diagram.", "Any two: sharp pencil, clear single lines, large drawing, correct proportions, straight ruled label lines, no shading or colour."],
      ["Why must control variables stay the same?", "So that any change in the results can be linked to the independent variable, making the investigation a fair test."]
    ]
  },
  wai: {
    number: "02",
    title: "Precious Wai",
    subtitle: "Wai as a taonga, a local resource and a substance made from particles.",
    intro: "This section connects the cultural and environmental importance of wai with particles, states of matter and changes of state.",
    topics: [
      {
        title: "Why wai matters",
        points: [
          "Wai supports people, plants, animals and microorganisms and shapes the ecosystems around us.",
          "Waterways can carry cultural, historical and spiritual significance and connect people with whakapapa and place.",
          "Local waterways support recreation, food gathering, agriculture and community wellbeing.",
          "Healthy wai requires kaitiakitanga and informed action from communities and authorities."
        ],
        note: "When discussing wai, include scientific evidence as well as cultural and community perspectives."
      },
      {
        title: "Manawatū waterways and human impacts",
        points: [
          "Water quality can change because of sediment, nutrients, pathogens, rubbish and chemicals.",
          "Stormwater carries material from roads and urban areas into streams and rivers.",
          "Farming, sewage overflows, forestry and land-use changes can affect local waterways.",
          "Riparian planting, careful waste management and reducing runoff can improve waterway health."
        ]
      },
      {
        title: "Particles and states of matter",
        points: [
          "Matter has mass and takes up space. Matter is made from atoms and molecules.",
          "A water molecule is H₂O: two hydrogen atoms bonded to one oxygen atom.",
          "Solid particles vibrate in fixed positions. Liquid particles remain close but move past each other. Gas particles spread out and move freely.",
          "Heating adds energy to particles. Cooling removes energy from particles."
        ]
      },
      {
        title: "Changes of state",
        points: [
          "Melting changes a solid to a liquid. Freezing changes a liquid to a solid.",
          "Evaporation or boiling changes a liquid to a gas. Condensation changes a gas to a liquid.",
          "During a change of state, energy changes particle arrangement rather than immediately increasing temperature.",
          "A heating curve can show flat sections while a substance changes state."
        ],
        note: "In the ice-heating practical, the independent variable was time and the dependent variable was temperature."
      }
    ],
    cards: [
      ["Taonga", "Something treasured and valued."],
      ["Kaitiakitanga", "Guardianship and responsible care for the environment."],
      ["Matter", "Anything that has mass and takes up space."],
      ["H₂O", "A molecule containing two hydrogen atoms and one oxygen atom."],
      ["Melting", "Solid to liquid."],
      ["Freezing", "Liquid to solid."],
      ["Evaporation", "Liquid to gas at the surface of a liquid."],
      ["Condensation", "Gas to liquid."],
      ["Water quality", "A measure of how suitable water is for organisms or a particular use."]
    ],
    quiz: [
      {q:"Which formula represents one water molecule?", options:["HO","H₂O","O₂H","H₂O₂"], a:1, why:"Water contains two hydrogen atoms and one oxygen atom."},
      {q:"What happens to particles when a substance is heated?", options:["They lose mass","They gain energy and move more","They become new atoms","They stop moving"], a:1, why:"Heating transfers energy to particles, increasing their motion."},
      {q:"Which change of state is gas to liquid?", options:["Melting","Evaporation","Condensation","Freezing"], a:2, why:"Condensation occurs when gas particles lose energy and form a liquid."},
      {q:"Which action can help protect a stream beside farmland?", options:["Removing riverside plants","Adding fertiliser beside the bank","Riparian planting","Sending stormwater directly into it"], a:2, why:"Plants beside the waterway can reduce erosion and filter runoff."},
      {q:"Why can temperature remain steady while ice melts?", options:["No energy enters","Energy breaks atoms","Energy changes particle arrangement","The thermometer stops working"], a:2, why:"The transferred energy helps particles change state rather than raising temperature immediately."}
    ],
    practice: [
      ["Describe the particles in a solid, liquid and gas.", "Solid particles are close together and vibrate in fixed positions. Liquid particles are close but move past each other. Gas particles are far apart and move freely."],
      ["Explain one way human activity can reduce water quality in the Manawatū.", "For example, stormwater can carry oil, rubbish and sediment from roads into streams, making the water less suitable for organisms and recreation."],
      ["Explain why wai can be described as a taonga.", "Wai sustains life and ecosystems and can carry cultural, spiritual, historical and whakapapa connections for communities."],
      ["Name the changes: solid to liquid, liquid to gas, gas to liquid and liquid to solid.", "Melting, evaporation or boiling, condensation, and freezing."]
    ]
  },
  living: {
    number: "03",
    title: "Living World",
    subtitle: "How organisms are organised, reproduce, survive and connect within ecosystems.",
    intro: "This section revises classification, cells, microscopes, plant biology, reproduction, ecosystems, adaptations and food webs.",
    topics: [
      {
        title: "Living things and classification",
        points: [
          "Living things carry out life processes such as nutrition, respiration, growth, reproduction, excretion, movement and sensitivity.",
          "Classification groups organisms by shared characteristics and helps scientists identify relationships.",
          "Vertebrates have a backbone and include fish, amphibians, reptiles, birds and mammals.",
          "Scientific names and classification reduce confusion caused by different common names."
        ]
      },
      {
        title: "Cells and microscopes",
        points: [
          "Cells are the basic units of living organisms.",
          "Animal cells contain a cell membrane, cytoplasm and nucleus.",
          "Plant cells also have a cell wall, chloroplasts and a large vacuole.",
          "Total microscope magnification equals eyepiece magnification multiplied by objective magnification."
        ],
        note: "Start with the lowest-power objective, focus carefully and centre the specimen before increasing magnification."
      },
      {
        title: "Plants and photosynthesis",
        points: [
          "Roots absorb water and minerals. Stems support the plant and transport substances. Leaves capture light.",
          "Photosynthesis uses carbon dioxide and water to make glucose and oxygen using light energy.",
          "Chlorophyll inside chloroplasts absorbs light energy.",
          "Stomata allow gases to enter and leave a leaf. Guard cells control their opening."
        ],
        note: "Word equation: carbon dioxide + water → glucose + oxygen. Light and chlorophyll are required."
      },
      {
        title: "Plant reproduction",
        points: [
          "Anthers produce pollen. The stigma receives pollen. The ovary contains ovules.",
          "Pollination is the transfer of pollen from anther to stigma.",
          "Fertilisation occurs when male and female sex cells join. The fertilised ovule develops into a seed.",
          "Seeds need suitable water, oxygen and temperature to germinate."
        ]
      },
      {
        title: "Ecosystems, adaptations and food webs",
        points: [
          "An ecosystem includes a community of organisms interacting with each other and their non-living environment.",
          "An adaptation is an inherited feature that improves survival or reproduction in an environment.",
          "Food-chain arrows show the direction of energy transfer from food to consumer.",
          "Producers make food, consumers eat other organisms and decomposers recycle nutrients."
        ],
        note: "A food web contains connected food chains. A change in one population can affect several others."
      }
    ],
    cards: [
      ["Vertebrate", "An animal with a backbone."],
      ["Cell", "The basic unit of a living organism."],
      ["Nucleus", "Controls cell activities and contains genetic information."],
      ["Cell membrane", "Controls movement of substances into and out of a cell."],
      ["Chloroplast", "Plant-cell structure containing chlorophyll where photosynthesis occurs."],
      ["Pollination", "Transfer of pollen from anther to stigma."],
      ["Germination", "The beginning of growth from a seed."],
      ["Adaptation", "An inherited feature that improves survival or reproduction."],
      ["Producer", "An organism, usually a plant, that makes its own food."]
    ],
    quiz: [
      {q:"Which structure is found in plant cells but not animal cells?", options:["Cell membrane","Cytoplasm","Nucleus","Cell wall"], a:3, why:"Plant cells have a cellulose cell wall outside the cell membrane."},
      {q:"An eyepiece is ×10 and the objective is ×40. What is the total magnification?", options:["×4","×50","×400","×4,000"], a:2, why:"10 × 40 = 400."},
      {q:"Which gas enters a leaf for photosynthesis?", options:["Oxygen","Carbon dioxide","Nitrogen","Hydrogen"], a:1, why:"Plants use carbon dioxide and water to make glucose and oxygen."},
      {q:"What is pollination?", options:["A seed beginning to grow","Pollen moving from anther to stigma","Sex cells joining","Fruit being eaten"], a:1, why:"Pollination transfers pollen to the stigma."},
      {q:"What do arrows show in a food chain?", options:["Animal size","Direction of movement","Direction of energy transfer","Which organism is strongest"], a:2, why:"Energy moves from the organism being eaten to the consumer."},
      {q:"Which term describes an inherited feature that helps an organism survive?", options:["Habitat","Adaptation","Community","Classification"], a:1, why:"An adaptation improves survival or reproduction in a particular environment."}
    ],
    practice: [
      ["Give two differences between a plant cell and an animal cell.", "Plant cells have a cell wall, chloroplasts and a large permanent vacuole. Animal cells do not have these structures."],
      ["Write the word equation for photosynthesis.", "Carbon dioxide + water → glucose + oxygen, using light energy absorbed by chlorophyll."],
      ["Explain why the arrows point from grass to rabbit in a food chain.", "The arrows show energy transfer. Energy stored in the grass transfers to the rabbit when it eats the grass."],
      ["Describe what could happen to hawks if the mouse population decreased.", "The hawk population may decrease because less food is available. Hawks might also eat more of another prey species, affecting that population."],
      ["State three conditions required for seed germination.", "Water, oxygen and a suitable temperature."]
    ]
  },
  "space-energy": {
    number: "04",
    title: "Space and Energy",
    subtitle: "Astronomical cycles, energy transformations, heating and waves.",
    intro: "This section revises the Solar System, astronomical cycles, eclipses, energy, heat transfer, efficiency, sources and waves.",
    topics: [
      {
        title: "The Solar System and scale",
        points: [
          "The Solar System contains the Sun and objects held in orbit by its gravity.",
          "The eight planets in order are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",
          "Inner planets are smaller and rocky. Outer planets are much larger and mostly gas or ice giants.",
          "Scale models reduce distances and sizes by the same factor so enormous space relationships can be represented."
        ]
      },
      {
        title: "Astronomical cycles and eclipses",
        points: [
          "Earth rotates once in about 24 hours, causing day and night.",
          "Earth revolves around the Sun in about 365.25 days.",
          "Earth's tilted axis and revolution around the Sun cause seasons.",
          "A solar eclipse occurs when the Moon passes between Earth and the Sun. A lunar eclipse occurs when Earth is between the Sun and Moon."
        ],
        note: "Moon phases result from seeing different portions of the Moon's sunlit half as it orbits Earth."
      },
      {
        title: "Forms and conservation of energy",
        points: [
          "Energy is the ability to do work or cause change.",
          "Kinetic energy includes movement, thermal, sound and light energy. Potential energy includes gravitational, elastic, chemical and nuclear stores.",
          "Energy cannot be created or destroyed. It transfers between objects or transforms between forms.",
          "Energy diagrams should identify the starting energy store and all useful and wasted outputs."
        ]
      },
      {
        title: "Heating, efficiency and power",
        points: [
          "Conduction transfers thermal energy through particle collisions, especially in solids.",
          "Convection transfers thermal energy through the movement of liquids or gases.",
          "Radiation transfers energy by electromagnetic waves and does not need particles.",
          "Efficiency compares useful energy output with total energy input. Power is the rate of energy transfer: P = E ÷ t."
        ],
        note: "Food calorimetry estimate: energy transferred to water = mass of water × 4.18 × temperature change."
      },
      {
        title: "Energy sources",
        points: [
          "Fossil fuels formed from organic matter over millions of years and release pollution and greenhouse gases when burned.",
          "Renewable sources replenish naturally, including solar, wind, hydro, geothermal and biofuels.",
          "Different energy sources have environmental, reliability, cost and location trade-offs.",
          "Aotearoa uses substantial hydro, geothermal and wind generation alongside other sources."
        ]
      },
      {
        title: "Waves, sound and light",
        points: [
          "Waves transfer energy without transferring matter from one place to another overall.",
          "Transverse vibrations are perpendicular to travel. Longitudinal vibrations are parallel to travel.",
          "Amplitude relates to loudness or wave energy. Frequency is cycles per second in hertz and determines sound pitch.",
          "Light is a transverse electromagnetic wave. Reflection changes direction at a surface. Refraction changes direction when wave speed changes in a new medium."
        ],
        note: "Visible objects reflect light into the eye. The lens focuses light on the retina, which sends nerve signals to the brain."
      }
    ],
    cards: [
      ["Rotation", "An object spinning on its axis."],
      ["Revolution", "One object travelling in an orbit around another."],
      ["Solar eclipse", "The Moon passes between Earth and the Sun."],
      ["Law of conservation of energy", "Energy cannot be created or destroyed, only transferred or transformed."],
      ["Conduction", "Thermal energy transfer through direct particle collisions."],
      ["Convection", "Thermal energy transfer by movement within a fluid."],
      ["Radiation", "Energy transfer by electromagnetic waves."],
      ["Frequency", "The number of wave cycles passing a point each second, measured in hertz."],
      ["Refraction", "A change in wave direction caused by a change in speed between media."]
    ],
    quiz: [
      {q:"Which planet is fifth from the Sun?", options:["Mars","Jupiter","Saturn","Earth"], a:1, why:"The order begins Mercury, Venus, Earth, Mars, Jupiter."},
      {q:"What mainly causes the seasons on Earth?", options:["Changing distance from the Sun","Earth's axial tilt and revolution","Moon phases","Daily rotation only"], a:1, why:"The tilt changes sunlight angle and day length during Earth's orbit."},
      {q:"A torch changes electrical energy mainly into which outputs?", options:["Light and thermal","Chemical and nuclear","Elastic and sound","Gravitational and magnetic"], a:0, why:"Light is useful output and some energy is dissipated as heat."},
      {q:"Which heat-transfer process can travel through empty space?", options:["Conduction","Convection","Radiation","Evaporation"], a:2, why:"Electromagnetic radiation does not need particles."},
      {q:"A machine receives 200 J and produces 50 J useful output. What is its efficiency?", options:["4%","25%","50%","75%"], a:1, why:"50 ÷ 200 × 100 = 25%."},
      {q:"Which wave feature determines pitch?", options:["Amplitude","Frequency","Direction","Speed only"], a:1, why:"A higher frequency produces a higher pitch."},
      {q:"What happens during refraction?", options:["Light is destroyed","A wave changes speed and direction","A wave becomes matter","Sound travels through a vacuum"], a:1, why:"A speed change between media can make a wave bend."}
    ],
    practice: [
      ["Explain why Earth experiences day and night.", "Earth rotates on its axis. The side facing the Sun experiences day while the side facing away experiences night."],
      ["Describe the energy changes in a person completing a bungy jump.", "Chemical energy enables the jump. Gravitational potential energy changes to kinetic energy while falling, then elastic potential energy as the cord stretches. Some energy dissipates as thermal and sound energy."],
      ["Compare conduction, convection and radiation.", "Conduction transfers energy through particle collisions, mainly in solids. Convection transfers energy through movement of liquids or gases. Radiation uses electromagnetic waves and can travel through a vacuum."],
      ["A device receives 500 J and gives 350 J useful output. Calculate efficiency.", "Efficiency = 350 ÷ 500 × 100 = 70%."],
      ["Explain why sound travels faster through solids than through gases.", "Particles in solids are much closer together, so vibrations transfer between particles more quickly."],
      ["Describe the path of light that allows a person to see an object.", "Light from a source reflects from the object into the eye. The cornea and lens focus it onto the retina. The retina creates nerve signals that travel to the brain."]
    ]
  }
};

Object.entries(window.manukuraExpandedContent || {}).forEach(([slug, extra]) => {
  const unit = units[slug];
  if (!unit) return;
  ["topics", "cards", "quiz", "practice"].forEach(key => {
    if (extra[key]) unit[key].push(...extra[key]);
  });
  unit.bank = extra.bank || [];
});

const main = document.querySelector("main");
const nav = document.querySelector("#main-nav");
const menuButton = document.querySelector(".menu-button");

document.querySelector(".skip-link").addEventListener("click", event => {
  event.preventDefault();
  main.focus();
  main.scrollIntoView();
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

function homePage() {
  return `
    <section class="hero">
      <img class="hero-logo" src="manukura-logo.png" alt="MANUKURA">
      <p class="eyebrow">Year 9 Pūtaiao Revision</p>
      <h1>Prepare with purpose</h1>
      <p>Revise the exact ideas covered in class across Nature of Science, Precious Wai, Living World, Space and Energy.</p>
      <div class="hero-actions">
        <a class="button" href="#nature">Start revising</a>
        <a class="button secondary" href="#home/how">Revision method</a>
      </div>
    </section>
    <section class="section">
      <div class="section-heading">
        <span class="kicker">Choose a wāhanga</span>
        <h2>Four revision areas</h2>
        <p>Each area has clear notes, kupu cards, a self-marking quiz and written practice with model answers.</p>
      </div>
      <div class="unit-grid">
        ${Object.entries(units).map(([slug,u]) => `
          <a class="unit-card" href="#${slug}" data-number="${u.number}">
            <span>Wāhanga ${u.number}</span>
            <h3>${u.title}</h3>
            <p>${u.subtitle}</p>
            <span>Open revision →</span>
          </a>`).join("")}
      </div>
    </section>
    <section class="section" id="how">
      <div class="section-heading">
        <span class="kicker">A simple routine</span>
        <h2>See, know, apply</h2>
        <p>Do more than reread. Use this three-step cycle until you can explain each idea without help.</p>
      </div>
      <div class="revision-method">
        <div class="method-step"><strong>See</strong>Review the notes and identify the scientific idea, pattern or process.</div>
        <div class="method-step"><strong>Know</strong>Use the flashcards until you can define the key kupu in your own words.</div>
        <div class="method-step"><strong>Apply</strong>Complete the quiz and written questions. Check the model answer only after attempting yours.</div>
      </div>
    </section>`;
}

function unitPage(slug, unit) {
  return `
    <section class="unit-banner">
      <div class="breadcrumbs"><a href="#home">Home</a> / Wāhanga ${unit.number}</div>
      <p class="eyebrow">Revision area ${unit.number}</p>
      <h1>${unit.title}</h1>
      <p>${unit.subtitle}</p>
    </section>
    <section class="section compact">
      <div class="topic-layout">
        <div>
          <div class="section-heading">
            <span class="kicker">Key knowledge</span>
            <h2>What you need to know</h2>
            <p>${unit.intro}</p>
          </div>
          <div class="resource-counts" aria-label="Revision resources">
            <span>${unit.cards.length} flip cards</span>
            <span>${unit.quiz.length} quick-quiz questions</span>
            <span>${unit.practice.length} written questions</span>
            <span>${(unit.bank || []).length} bank questions</span>
          </div>
          ${unit.topics.map((topic,i) => `
            <article class="topic-block" id="${slug}-topic-${i}">
              <h2>${topic.title}</h2>
              <ul class="knowledge-list">${topic.points.map(p=>`<li>${p}</li>`).join("")}</ul>
              ${topic.note ? `<div class="callout"><strong>Remember:</strong> ${topic.note}</div>` : ""}
            </article>`).join("")}

          <article class="topic-block" id="${slug}-cards">
            <span class="kicker">Kupu recall</span>
            <h2>Flip cards</h2>
            <p>Select a card to reveal the meaning.</p>
            <div class="flashcards">
              ${unit.cards.map(([q,a])=>`<button class="flashcard" type="button"><span class="question"><small>Tap to reveal</small><strong>${q}</strong></span><span class="answer"><small>Meaning</small>${a}</span></button>`).join("")}
            </div>
          </article>

          <article class="topic-block" id="${slug}-quiz">
            <span class="kicker">Check yourself</span>
            <h2>Quick quiz</h2>
            <form class="quiz" data-unit="${slug}">
              ${unit.quiz.map((item,i)=>`
                <fieldset class="quiz-question">
                  <legend><h3>${i+1}. ${item.q}</h3></legend>
                  ${item.options.map((opt,j)=>`<label class="quiz-option"><input type="radio" name="${slug}-q${i}" value="${j}"> <span>${opt}</span></label>`).join("")}
                  <div class="quiz-feedback" hidden></div>
                </fieldset>`).join("")}
              <div class="quiz-actions"><button class="button" type="submit">Mark my quiz</button><span class="quiz-result" aria-live="polite"></span></div>
            </form>
          </article>

          <article class="topic-block" id="${slug}-practice">
            <span class="kicker">Written revision</span>
            <h2>Practice questions</h2>
            <p>Write your answer first, then open the model answer.</p>
            <div class="practice-list">
              ${unit.practice.map(([q,a],i)=>`<details><summary>${i+1}. ${q}</summary><p><strong>Model answer:</strong> ${a}</p></details>`).join("")}
            </div>
          </article>

          <article class="topic-block" id="${slug}-bank">
            <span class="kicker">Full coverage</span>
            <h2>Question bank</h2>
            <p>Work through these in any order. Say your answer aloud or write it down before opening the answer.</p>
            <div class="bank-grid">
              ${(unit.bank || []).map(([q,a],i)=>`<details><summary>${i+1}. ${q}</summary><p><strong>Answer:</strong> ${a}</p></details>`).join("")}
            </div>
          </article>
        </div>
        <aside class="topic-nav">
          <strong>On this page</strong>
          ${unit.topics.map((t,i)=>`<a href="#${slug}/topic-${i}">${t.title}</a>`).join("")}
          <a href="#${slug}/cards">Flip cards</a>
          <a href="#${slug}/quiz">Quick quiz</a>
          <a href="#${slug}/practice">Written practice</a>
          <a href="#${slug}/bank">Question bank</a>
        </aside>
      </div>
    </section>`;
}

function bindInteractions(slug) {
  document.querySelectorAll(".flashcard").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("revealed"));
  });
  const form = document.querySelector(".quiz");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const unit = units[slug];
    let score = 0;
    unit.quiz.forEach((item,i) => {
      const chosen = form.querySelector(`input[name="${slug}-q${i}"]:checked`);
      const feedback = form.querySelectorAll(".quiz-feedback")[i];
      if (!chosen) {
        feedback.hidden = false;
        feedback.textContent = `Not answered. ${item.why}`;
      } else if (Number(chosen.value) === item.a) {
        score++;
        feedback.hidden = false;
        feedback.textContent = `Correct. ${item.why}`;
      } else {
        feedback.hidden = false;
        feedback.textContent = `Have another look. ${item.why}`;
      }
    });
    const result = form.querySelector(".quiz-result");
    result.textContent = `${score} / ${unit.quiz.length}`;
    result.classList.toggle("good", score >= Math.ceil(unit.quiz.length * .7));
    result.scrollIntoView({behavior:"smooth",block:"center"});
  });
}

function render() {
  const [slugRaw, anchor] = (location.hash.slice(1) || "home").split("/");
  const slug = (units[slugRaw] || slugRaw === "home") ? slugRaw : "home";
  main.innerHTML = slug === "home" || !units[slug] ? homePage() : unitPage(slug, units[slug]);
  document.querySelectorAll("nav a").forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${slug}`));
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  if (units[slug]) bindInteractions(slug);
  requestAnimationFrame(() => {
    const targetId = anchor ? (slug === "home" ? anchor : `${slug}-${anchor}`) : null;
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) target.scrollIntoView({behavior:"smooth", block:"start"});
    else window.scrollTo({top:0});
  });
}

if (!window.manukuraCourseUI) {
  window.addEventListener("hashchange", render);
  render();
}
