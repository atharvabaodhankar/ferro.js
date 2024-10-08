const Ferro = {
  // Ferro Card Show
  cardShow: function (
    selector,
    style = 0,
    srb = false,
    st = "top",
    ed = "70%"
  ) {
    const FerroCards = document.querySelectorAll(selector);
    FerroCards[0].parentNode.style.overflow = "hidden";

    let animationProps;
    switch (style) {
      case 1:
        animationProps = {
          opacity: 0,
          rotation: 60,
          y: 50,
          stagger: 0.1,
        };
        break;
      case 2:
        animationProps = {
          opacity: 0,
          scale: 0.5,
          y: 50,
          stagger: 0.1,
        };
        break;
      case 3:
        animationProps = {
          opacity: 0,
          x: 50,
          y: 50,
          stagger: 0.1,
        };
        break;
      case 4:
        animationProps = {
          opacity: 0,
          y: -50,
          stagger: 0.1,
          duration: 1,
        };
        break;
      case 5:
        animationProps = {
          opacity: 0,
          x: -50,
          stagger: 0.1,
          duration: 1,
        };
        break;
      case 6:
        animationProps = {
          opacity: 0,
          skewX: 10,
          stagger: 0.1,
          duration: 1,
        };
        break;
      case 7:
        animationProps = {
          opacity: 0,
          skewY: 10,
          stagger: 0.1,
          duration: 1,
        };
        break;
      case 8:
        animationProps = {
          opacity: 0,
          skewY: 10,
          x: 200,
          stagger: 0.1,
          duration: 1,
        };
        break;
      default:
        animationProps = {
          opacity: 0,
          y: 50,
          stagger: 0.1,
        };
    }

    gsap.from(FerroCards, {
      ...animationProps,
      scrollTrigger: srb
        ? {
            trigger: FerroCards[0].parentNode,
            scrub: 3,
            start: `${st} 70%`,
            end: `${ed} 70%`,
          }
        : {
            trigger: FerroCards,
          },
    });
  },
  // Usage : FerroCardShow('.card', 3);

  // Ferro Text Underline
  textUnderline: function (buttons, cl = "#000", height = "3px") {
    var btn = document.querySelectorAll(buttons);
    btn.forEach((bt) => {
      bt.classList.add("ferro-text-underline");

      bt.style.setProperty("--f-text-underline", cl);
      bt.style.setProperty("--f-text-underline-height", height);
    });
  },
  // Usage : FerroTextUnderline(".btn" , "green", "5px");

  // Ferro Elastic Img

  elasticImg: function (element, style = 0) {
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
  },
  // Usage : FerroElasticImg(".box" , 0(height) or 1(width) or 2(height and width));

  // Ferro Parallax Img
  imgShift: function (element, eff = 10) {
    const ele = document.querySelector(element);
    ele.classList.add("ferro-img-shift");
    gsap.fromTo(
      ele.querySelector("img"),
      { y: `${eff * -1}vh` },
      { y: `${eff}vh`, scrollTrigger: { trigger: element, scrub: 3 } }
    );
  },
  // Usage : FerroImgShift(".box" , 20);

  // Ferro Text Waves

  textWaves: function (selector, txt, color1 = "#fff", color2 = color1) {
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
  },
  // Usage :  FerroTextWaves(".box1" , "Ferro.js" , "#000" , "#fff");

  // Ferro Text Split
  textSplit: function (
    selector,
    scrub = false,
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
  },
  // Usage : FerroTextSplit(".text", 1, 4, "0%", "5%" );
  // Ferro Magnet

  magnet: function (selector, sensitivity) {
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
  },
  // Usage : FerroMagnet(".ferro-magnet", 1 to 5 Sens)

  // Ferro Mouse Follower
  mouseFollower : function (sp = 0, size = "15px", blendMode = true, selectors = [] , se = 0) {
    const FerroMouseBall = document.createElement("div");
    FerroMouseBall.className = "ferro-mouse-follower-ball";
    document.body.insertBefore(FerroMouseBall, document.body.firstChild);
    FerroMouseBall.style.setProperty("--f-m-ball-size", size);
    
    const speedMap = {
        0: 0.08,
        1: 0.1,
        2: 0.2,
        3: 0.3,
        4: 0.4,
        5: 0.5,
    };
    const ScaleEnchancer = {
        0: 20,
        1: 40,
        2: 60,
        3: 80,
        4: 100,
        5: 120,
    };

    const speed = speedMap[sp] || 0.05;

    gsap.set(FerroMouseBall, {
        xPercent: -50,
        yPercent: -50,
        mixBlendMode: blendMode ? "difference" : "normal",
    });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    const xSet = gsap.quickSetter(FerroMouseBall, "x", "px");
    const ySet = gsap.quickSetter(FerroMouseBall, "y", "px");

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });

    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                const fontSize = parseFloat(window.getComputedStyle(element).fontSize) + ScaleEnchancer[se] || 20;
                const currentSize = parseFloat(size);
                const newScale = fontSize / currentSize;
          
                gsap.to(FerroMouseBall, { scale: newScale, duration: 0.3 });
            });
            element.addEventListener('mouseleave', () => {
                gsap.to(FerroMouseBall, { scale: 1, duration: 0.3 });
            });
        });
    });
}

,
  // Usage : Ferro.mouseFollower(0, "15px", true, [".box1", ".box2"] , 3);

  // Ferro Heading Effects

  headingEffect : function(selector, style = 0) {
    let headings = document.querySelectorAll(selector);

    headings.forEach(heading => {
        let characters = heading.textContent.split('');
        let combined = characters.map(char => `<span>${char}</span>`).join('');
        heading.innerHTML = combined;
        let spans = heading.querySelectorAll('span');
        let mid = spans.length / 2;
        spans.forEach((ele, idx) => {
            if (idx < mid) ele.classList.add("left");
            else ele.classList.add("right");
        });

        switch (style) {
            case 1:
                gsap.from(`${selector} span.left`, {
                    y: 150,
                    rotation: 60,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    y: 150,
                    rotation: -60,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 2:
                gsap.from(`${selector} span.left`, {
                    x: -50,
                    scale: 0.5,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    x: 50,
                    scale: 0.5,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 3:
                gsap.from(`${selector} span.left`, {
                    y: -50,
                    skewX: 45,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    y: -50,
                    skewX: -45,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 4:
                gsap.from(`${selector} span.left`, {
                    y: 150,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "bounce.out",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    y: 150,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "bounce.out",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 5:
                gsap.from(`${selector} span.left`, {
                    y: 150,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "elastic.out(1, 0.3)",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    y: 150,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "elastic.out(1, 0.3)",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 6:
                gsap.from(`${selector} span.left`, {
                    x: -100,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    x: 100,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 7:
                gsap.from(`${selector} span.left`, {
                    y: 100,
                    duration: 1.5,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    delay: 0.5,
                    ease: "elastic",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    y: 100,
                    duration: 1.5,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    delay: 0.5,
                    ease: "elastic",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 8:
                gsap.from(`${selector} span.left`, {
                    rotationY: 180,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    rotationY: -180,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 9:
                gsap.from(`${selector} span.left`, {
                    scale: 0,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    scale: 0,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            case 10:
                gsap.from(`${selector} span.left`, {
                    x: -50,
                    y: -50,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "circ.out",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    x: 50,
                    y: 50,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    ease: "circ.out",
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                break;
            default:
                gsap.from(`${selector} span.left`, {
                    y: 150,
                    duration: 1,
                    stagger: 0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
                gsap.from(`${selector} span.right`, {
                    y: 150,
                    duration: 1,
                    stagger: -0.1,
                    opacity: 0,
                    delay : 0.5,
                    scrollTrigger: {
                        trigger: heading,
                    },
                });
        }
    });
  },
  // Usage : Ferro.headingEffect(".h1", 7)

  // Ferro Button
  button: function (selector, time = 0.5 , easing = "cubic-bezier(0.68, -0.55, 0.265, 1.55)") {
    let buttons = document.querySelectorAll(selector);

    buttons.forEach((button) => {
      let btnTxt = button.innerText;
      button.style.transition = `all ${time}s ${easing}`;
      let btn1 = document.createElement("span");
      let btn2 = document.createElement("span");
      button.style.height = window.getComputedStyle(button).fontSize;
      button.classList.add("ferro-button");
      btn1.innerText = btnTxt;
      btn2.innerText = btnTxt;

      button.innerHTML = "";
      button.appendChild(btn1);
      button.appendChild(btn2);
    });
  },

  // Usage : Ferro.button(".btn" , .5 , "ease");

  // Ferro Dynamic Hover
  dynamicHover: function (selector, speed = 0) {

    const sensitivityValues = {
      1: 10,
      2: 12,
      3: 14,
      4: 15,
      5: 16,
    };
    const appliedSensitivity = sensitivityValues[speed] || 8;

    const selects = document.querySelectorAll(selector);
    selects.forEach((ele) => {
    
      window.addEventListener("mousemove", (e) => {
      let x = e.pageX - innerWidth / 2;
      let y = e.pageY - innerHeight / 2;
      gsap.to(ele, {
        x: x / appliedSensitivity,
        y: y / appliedSensitivity,
        ease : "ease",
        duration: 2
      });
    });
    
    });
  },
  // Usage : Ferro.dynamicHover(".box", 3);


  // Ferro Frame Effect
  frame : function (
    selector,
    color = "#fff",
    speed = "4s",
    width = "15px",
    easing = "ease-in-out",
  ) {
    const frames = document.querySelectorAll(selector);
  
    frames.forEach((frame) => {
      frame.classList.add("ferro-frame-effect");
      frame.style.setProperty("--ffe-speed", speed);
      frame.style.setProperty("--ffe-color", color);
      frame.style.setProperty("--ffe-easing", easing);
      frame.style.padding = width;
      const wrapper = document.createElement("div");
      wrapper.classList.add("ferro-frame-effect-in");
      while (frame.firstChild) {
        wrapper.appendChild(frame.firstChild);
      }
      frame.appendChild(wrapper);
    });
  },

  // Usage : Ferro.frame(".box", "#fff", "4s", "15px", "ease-in-out");


  // Add more methods as needed
};
