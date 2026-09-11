// Fix lesson-to-content alignment.
// The original renderer selected unit.topics[index % unit.topics.length],
// which caused unrelated key knowledge to repeat when a unit had more lessons
// than broad topic blocks. This renderer matches content by meaning instead
// and falls back to the lesson's own focus rather than showing unrelated notes.

(function () {
  const stopWords = new Set([
    "a","an","and","the","of","in","to","for","with","on","at","from","your","our",
    "i","ii","practical","research","science","scientific","local","why","how"
  ]);

  const aliases = {
    "Laboratory safety and hazards": ["laboratory safety and equipment"],
    "Laboratory equipment": ["laboratory safety and equipment"],
    "Bunsen burners": ["bunsen burner parts and flames"],
    "Observations and inferences": ["observations and measurement"],
    "Measurement in science": ["observations and measurement"],
    "Variables and fair tests": ["variables and fair tests"],
    "Bar graphs": ["graphs and scientific reports"],
    "Line graphs": ["graphs and scientific reports"],
    "The scientific method": ["graphs and scientific reports"],
    "Experiments and evaluation": ["reliable results and evaluation"],
    "The importance of water": ["why wai matters"],
    "Cultural significance of wai": ["mauri, whakapapa and te mana o te wai","why wai matters"],
    "Manawatū water": ["manawatū waterways and human impacts","eutrophication"],
    "Researching precious wai": ["why wai matters","mauri, whakapapa and te mana o te wai"],
    "A local water issue": ["manawatū waterways and human impacts","eutrophication"],
    "Solids, liquids and gases": ["particles and states of matter"],
    "Atoms, molecules and compounds": ["atoms, molecules and compounds"],
    "Changing states": ["changes of state"],
    "Heating ice practical": ["changes of state"],
    "Why wai matters research": ["why wai matters","mauri, whakapapa and te mana o te wai"],
    "Cells I": ["cells and microscopes"],
    "Microscopes": ["cells and microscopes"],
    "Plant biology": ["plants and photosynthesis"],
    "Photosynthesis starch practical": ["plants and photosynthesis"],
    "Photosynthesis oxygen practical": ["plants and photosynthesis"],
    "Plant reproductive anatomy": ["plant reproduction"],
    "Flower dissection": ["plant reproduction"],
    "Pollination": ["plant reproduction"],
    "Aotearoa flowers": ["plant reproduction"],
    "Seeds and germination": ["plant reproduction"],
    "Ecosystems I": ["ecosystems, adaptations and food webs"],
    "Aotearoa ecosystems": ["ecosystems, adaptations and food webs"],
    "Adaptations": ["ecosystems, adaptations and food webs"],
    "Predators and prey": ["ecosystems, adaptations and food webs"],
    "Food chains and food webs": ["ecosystems, adaptations and food webs"],
    "The Solar System": ["solar system"],
    "Scale of the Solar System": ["solar system"],
    "Solar System scale practical": ["solar system"],
    "Astronomical cycles": ["astronomical cycles"],
    "Solar and lunar eclipses": ["eclipses"],
    "Forms of energy": ["energy stores","forms of energy"],
    "Energy transfer": ["energy transfer"],
    "Food calorimetry": ["calorimetry"],
    "Energy sources": ["energy sources"],
    "Efficiency and power": ["efficiency","power"],
    "Waves": ["waves"],
    "Sound waves": ["sound"],
    "Light waves": ["light"],
    "Reflection": ["reflection"],
    "Refraction": ["refraction"],
    "Sight": ["sight","eye"]
  };

  function normalise(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9āēīōū]+/g, " ").trim();
  }

  function words(value) {
    return normalise(value).split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
  }

  function topicFor(unit, lesson) {
    const wanted = (aliases[lesson[0]] || []).map(normalise);
    if (wanted.length) {
      for (const alias of wanted) {
        const exact = unit.topics.find(t => {
          const title = normalise(t.title);
          return title === alias || title.includes(alias) || alias.includes(title);
        });
        if (exact) return exact;
      }
    }

    const lessonWords = new Set(words(lesson[0] + " " + lesson[1]));
    let best = null;
    let bestScore = 0;
    unit.topics.forEach(topic => {
      const topicWords = new Set(words(topic.title));
      let score = 0;
      topicWords.forEach(w => { if (lessonWords.has(w)) score += 1; });
      if (score > bestScore) { bestScore = score; best = topic; }
    });
    return bestScore >= 2 ? best : null;
  }

  function checkFor(unit, lesson, topic) {
    const target = new Set(words(lesson[0] + " " + lesson[1] + " " + (topic ? topic.title : "")));
    let best = null;
    let bestScore = 0;
    (unit.bank || []).forEach(item => {
      const qWords = new Set(words(item[0]));
      let score = 0;
      qWords.forEach(w => { if (target.has(w)) score += 1; });
      if (score > bestScore) { bestScore = score; best = item; }
    });
    if (bestScore >= 2) return best;
    return [
      `Explain the main idea in ${lesson[0]}.`,
      lesson[1]
    ];
  }

  window.lessonPanel = function (slug, unit, lesson, index, checked) {
    const topic = topicFor(unit, lesson);
    const points = topic && Array.isArray(topic.points) && topic.points.length
      ? topic.points
      : [lesson[1]];
    const check = checkFor(unit, lesson, topic);

    return `<details class="lesson-panel" id="${slug}-lesson-${index}" ${index === 0 ? "open" : ""}>
      <summary><span class="lesson-number">${String(index + 1).padStart(2,"0")}</span><span><small>Mission ${String(index + 1).padStart(2,"0")}</small><strong>${lesson[0]}</strong></span><span class="lesson-toggle">Open</span></summary>
      <div class="lesson-body">
        <section class="mission-step mission-learn"><span class="mission-label">1 • Learn</span><p class="lesson-focus">${lesson[1]}</p><h3>Key knowledge</h3><ul>${points.map(point=>`<li>${point}</li>`).join("")}</ul>${topic && topic.note ? `<div class="callout"><strong>Remember:</strong> ${topic.note}</div>` : ""}</section>
        <section class="mission-step mission-try"><span class="mission-label">2 • Try</span><div class="lesson-task"><strong>Class mission</strong><p>${lesson[2]}</p></div></section>
        <section class="mission-step mission-check"><span class="mission-label">3 • Check</span><details class="lesson-check"><summary>${check[0]}</summary><p><strong>Check your answer:</strong> ${check[1]}</p></details></section>
        <section class="mission-step mission-finish"><span class="mission-label">4 • Record</span><label class="complete-check"><input type="checkbox" data-course-complete="${slug}" data-lesson="${index}" ${checked ? "checked" : ""}> I completed the learning, task and check</label></section>
      </div>
    </details>`;
  };

  // course-ui.js renders once before this file loads. Render again using the fixed renderer.
  if (typeof window.renderCourseSite === "function") window.renderCourseSite();
})();
