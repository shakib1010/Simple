function animate() {
  const news1Title = new SplitType('#contact1-title', { types: 'words, lines' })
  gsap.from(news1Title.words, {
    y: "100%",
    duration: 1,
    stagger: 0.2,
  })


  gsap.from('#c-cards-line', {
    height: 0,
    scrollTrigger: {
      trigger: '#c-cards',
      start: 'top top+=200',
      end: 'bottom top+=200',
      scrub: true,
    },
  })
}

// --- DOCUMENT LOAD EVENT ---
document.addEventListener('DOMContentLoaded', () => {
  animate()
})