// ACCORDION FUNCTIONALITY
let toggleIcon = document.getElementById("accordion-icon")
let accordionBody = document.getElementById("accordion-body")

toggleIcon.addEventListener("click", () => {
  toggleIcon.textContent === "+"
    ? (toggleIcon.textContent = "-")
    : (toggleIcon.textContent = "+")
  accordionBody.classList.toggle("accordion__body--open")
})

// intersection observer
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show")
//     } else {
//       entry.target.classList.remove("show")
//     }
//   })
// })

// const hiddenElements = document.querySelectorAll(".hidden")

// hiddenElements.forEach((el) => {
//   observer.observe(el)
// })

// // About page animation

// const headingText = new SplitType("#rightTextSlide")
// const headingtext2 = new SplitType(".leftTextSlide")

// const headinText2 = new SplitType("")

// gsap.to("#rightTextSlide .word", {
//   x: 0,
//   stagger: 0.05,
//   delay: 0.4,
//   duration: 0.1,
// })

// gsap.to(".leftTextSlide .word", {
//   x: 0,
//   stagger: 0.05,
//   ease: "bounce.out",
//   delay: 1,
//   duration: 0.1,
// })

// gsap.to(".left-text", {
//   y: 0,
//   delay: 1.5,
//   duration: 0.1,
//   ease: "power4.out",
// })
