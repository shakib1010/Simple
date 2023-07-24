function animate() {
  const news1Title = new SplitType('#news1-title', { types: 'words, lines' })
  gsap.from(news1Title.words, {
    y: "100%",
    duration: 1,
    stagger: 0.2,
  })
}

// --- DOCUMENT LOAD EVENT ---
document.addEventListener('DOMContentLoaded', () => {
  animate()
})
