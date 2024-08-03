// Ferro Magnet
function FerroMagnet(selector, sensitivity) {
  const FerroMagnets = document.querySelectorAll(selector);

  const sensitivityValues = {
    1: 20,
    2: 18,
    3: 15,
    4: 12,
    5: 10,
  };

  FerroMagnets.forEach((FerroMagnet) => {
    const appliedSensitivity = sensitivityValues[sensitivity] || 20;

    FerroMagnet.addEventListener("mousemove", (e) => {
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      const offsetX = e.pageX - centerX;
      const offsetY = e.pageY - centerY;

      gsap.to(FerroMagnet, {
        x: offsetX / appliedSensitivity,
        y: offsetY / appliedSensitivity,
      });
    });

    FerroMagnet.addEventListener("mouseleave", (e) => {
      gsap.to(FerroMagnet, {
        x: 0,
        y: 0,
      });
    });
  });
}
// Usage : FerroMagnet(".ferro-magnet", 1 to 5 Sens)

// Ferro Text Split
function FerroTextSplit(
  selector,
  scrub = 0,
  style = 0,
  st = "top",
  ed = "70%"
) {
  const FerroTextSplits = document.querySelectorAll(selector);

  FerroTextSplits.forEach((FerroTextSplit) => {
    let splitText = FerroTextSplit.textContent.split(" ");
    let combinedText = "";
    splitText.forEach((st) => {
      combinedText += `<span>${st}&nbsp;</span>`;
    });
    FerroTextSplit.innerHTML = combinedText;

    gsap.from(FerroTextSplit.querySelectorAll("span"), {
      duration: 1,
      skewX: style === 1 ? 10 : 0,
      y: style === 2 ? -50 : 50, // Add y-axis variation
      opacity: 0,
      stagger: 0.05,
      scale: style === 3 ? 0.8 : 1, // Add scale variation
      rotate: style === 4 ? 5 : 0, // Add rotation variation
      scrollTrigger: scrub
        ? {
            trigger: FerroTextSplit,
            scrub: 3,
            start: `${st} center`,
            end: `${ed} center`,
          }
        : {
            trigger: FerroTextSplit,
          },
    });
  });
}
// Usage : FerroTextSplit(".text", 1, 4, "0%", "5%" );

// Ferro Text Waves
function FerroTextWaves(selector, txt, color1 = "#fff", color2 = color1) {
  const FerroTextWave = document.querySelector(selector);

  FerroTextWave.classList.add("ferro-text-waves");
  let FerroText1 = document.createElement("h1");
  let FerroText2 = document.createElement("h1");

  FerroText1.innerText = txt;
  FerroText2.innerText = txt;

  FerroText1.style["-webkit-text-stroke"] = `2px ${color1}`;
  FerroText2.style.color = color2;

  FerroTextWave.appendChild(FerroText1);
  FerroTextWave.appendChild(FerroText2);
}

// Usage :  FerroTextWaves(".box1" , "Ferro.js" , "#000" , "#fff");

// Ferro Parallax Img

function FerroImgShift(element, eff = 10) {
  const ele = document.querySelector(element);
  ele.classList.add("ferro-img-shift");
  gsap.fromTo(
    ele.querySelector("img"),
    { y: `${eff * -1}vh` },
    { y: `${eff}vh`, scrollTrigger: { trigger: element, scrub: 3 } }
  );
}
// Usage : FerroImgShift(".box" , 20);

// Ferro Elastic Img

function FerroElasticImg(element, style = 0) {
  const options = {
    0: { height: 0 },
    1: { width: 0 },
    2: { height: 0, width: 0 },
  };

  const selectedOptions = options[style <= 2 ? style : 2];

  gsap.from(element, {
    ...selectedOptions,
    scale: 0.9,
    ease: "elastic",
    duration: 3,
    scrollTrigger: { trigger: element },
  });
}

// Usage : FerroElasticImg(".box" , 0(height) or 1(width) or 2(height and width));

// Ferro Text Underline
function FerroTextUnderline(buttons, cl = "#000" , height = "3px") {
  var btn = document.querySelectorAll(buttons);
  btn.forEach((bt) => {
    bt.classList.add("ferro-text-underline");

    bt.style.setProperty("--f-text-underline", cl);
    bt.style.setProperty("--f-text-underline-height", height);
  });
}
// Usage : FerroTextUnderline(".btn" , "green", "5px");
