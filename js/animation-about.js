function animate() {
  // SECTION ABOUT HEADER
  const aboutHeader1 = new SplitType("#about-header-1", {
    types: "words, lines",
  })

  const aboutHeader2 = new SplitType("#about-header-2", {
    types: "words, lines",
  })

  const aboutHeaderText = new SplitType("#about-header-text", {
    types: "lines",
  })
  console.log(aboutHeaderText)

  const aboutHeaderTl = gsap.timeline({ duration: 1 })
  aboutHeaderTl
    .from(aboutHeader1.words, {
      y: "100%",
      stagger: 0.2,
    })
    .from(
      aboutHeader2.words,
      {
        y: "100%",
        stagger: 0.2,
      },
      "<"
    )
    .from(aboutHeaderText.lines, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
    })

  // SECTION ABOUT PHOTOS
  gsap.from("#about-photos-line", {
    height: 0,
    scrollTrigger: {
      trigger: "#about-photos",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  })

  // ABOUT LOGO SECTION PAGE3
  gsap.from("#about-page3-img", {
    y: "100%",
    scrollTrigger: {
      trigger: "#about-page3",
      start: "center center",
      end: "center center",
    },
  })
}

// --- DOCUMENT LOAD EVENT ---
document.addEventListener("DOMContentLoaded", () => {
  animate()
})
