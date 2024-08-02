// Ferro Magnet

if (document.querySelectorAll(".ferro-magnet").length > 0) {
  var FerroMagnets = document.querySelectorAll(".ferro-magnet");

  FerroMagnets.forEach((FerroMagnet) => {
    FerroMagnet.addEventListener("mousemove", (e) => {
      let x = e.pageX - innerWidth / 2;
      let y = e.pageY - innerHeight / 2;
      gsap.to(FerroMagnet, {
        x: x / 20,
        y: y / 20,
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

// Usage : class : ferro-magnet



// Ferro Text Split

if (document.querySelectorAll(".ferro-text-split").length > 0) {
    var FerroTextSplits = document.querySelectorAll(".ferro-text-split");
  
    FerroTextSplits.forEach((FerroTextSplit) => {
      let splitText = FerroTextSplit.textContent.split(/\s/);
      let combinedText = "";
      splitText.forEach((st) => {
        combinedText += `<span>${st}&nbsp;</span>`;
      });
      FerroTextSplit.innerHTML = combinedText;
  
      if (FerroTextSplit.classList.contains("ferro-text-split-scrub")) {
        gsap.from(FerroTextSplit.querySelectorAll("span"), { 
          duration: 1,
          skewX: 10,
          y: 50,
          opacity: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: FerroTextSplit,
            scrub: 3,
            start: "top center",
            end: "bottom center",
          },
        });
      } else {
        gsap.from(FerroTextSplit.querySelectorAll("span"), {
          duration: 1,
          skewX: 10,
          y: 50,
          opacity: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: FerroTextSplit,
          },
        });
      }
    });
}
  
// Usage : class : ferro-text-split ferro-text-split-scrub 
  