// Calibration fixes for temperature-state and ray-angle models.
(function () {
  function positionParticles(box,state) {
    box.dataset.state=state;
    box.querySelectorAll("i").forEach((dot,index)=>{
      if(state==="solid") { dot.style.left=`${18+(index%6)*12}%`; dot.style.top=`${45+Math.floor(index/6)*15}%`; }
      else if(state==="liquid") { dot.style.left=`${6+(index%9)*10.5}%`; dot.style.top=`${38+Math.floor(index/9)*27+(index%3)*3}%`; }
      else { dot.style.left=`${4+((index*37)%90)}%`; dot.style.top=`${5+((index*23)%84)}%`; }
    });
  }

  function calibrate(root) {
    if(!root) return;
    if(root.dataset.lmMode==="states") {
      const slider=root.querySelector("[data-lm-slider]"), box=root.querySelector("[data-lm-particles]"), label=root.querySelector("[data-lm-state-name]"), out=root.querySelector("[data-lm-output]");
      if(!slider || !box) return;
      const v=Number(slider.value), state=v<0?"solid":v<100?"liquid":"gas";
      positionParticles(box,state);
      if(label) label.textContent=state==="solid"?"solid ice":state==="liquid"?"liquid water":"water vapour";
      if(out) out.textContent=state==="solid"?`${v} °C: solid ice; particles vibrate in fixed positions.`:state==="liquid"?`${v} °C: liquid water; particles stay close but move past one another.`:`${v} °C: water vapour; gas particles are far apart and move freely.`;
      return;
    }
    if(root.dataset.lmSpecial==="reflection") {
      const slider=root.querySelector("[data-lm-angle]"), inc=root.querySelector("[data-lm-inc]"), ref=root.querySelector("[data-lm-ref]");
      if(!slider || !inc || !ref) return;
      const ang=Number(slider.value), dy=70, dx=Math.tan(ang*Math.PI/180)*dy;
      inc.setAttribute("x1",260-dx); inc.setAttribute("y1",175-dy);
      ref.setAttribute("x2",260+dx); ref.setAttribute("y2",175-dy);
      return;
    }
    if(root.dataset.lmSpecial==="refraction") {
      const slider=root.querySelector("[data-lm-angle]"), inc=root.querySelector("[data-lm-inc]"), refr=root.querySelector("[data-lm-refr]");
      if(!slider || !inc || !refr) return;
      const ang=Number(slider.value), medium=Number(root.dataset.medium||1.33), theta2=Math.asin(Math.sin(ang*Math.PI/180)/medium)*180/Math.PI;
      const dy1=70, dx1=Math.tan(ang*Math.PI/180)*dy1, dy2=110, dx2=Math.tan(theta2*Math.PI/180)*dy2;
      inc.setAttribute("x1",260-dx1); inc.setAttribute("y1",150-dy1);
      refr.setAttribute("x2",260+dx2); refr.setAttribute("y2",150+dy2);
    }
  }

  function calibrateAll() {
    document.querySelectorAll('.lm-slider[data-lm-mode="states"],[data-lm-special="reflection"],[data-lm-special="refraction"]').forEach(calibrate);
  }

  document.addEventListener("input",event=>calibrate(event.target.closest(".lm-model")));
  document.addEventListener("click",event=>{
    if(event.target.closest("[data-lm-medium]")) calibrate(event.target.closest(".lm-model"));
  });

  const previousBind=window.bindCourseInteractions;
  if(typeof previousBind==="function") {
    window.bindCourseInteractions=function(route,slug) {
      previousBind(route,slug);
      requestAnimationFrame(calibrateAll);
    };
  }
  requestAnimationFrame(calibrateAll);
})();
