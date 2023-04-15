// Accordion functionality

// const accordionBody = document.getElementById("accordion-body")
// const accordionPlusIcon = document.getElementById("accordion-plus")
// const accordionMinusIcon = document.getElementById("accordion-minus")

// accordionPlusIcon.addEventListener("click", () => {
//   accordionPlusIcon.classList.add("d-none")
//   accordionMinusIcon.classList.remove("d-none")

//   accordionBody.classList.add("accordion__body--open")
// })

// accordionMinusIcon.addEventListener("click", () => {
//   accordionMinusIcon.classList.add("d-none")
//   accordionPlusIcon.classList.remove("d-none")
//   accordionBody.classList.remove("accordion__body--open")
// })

// intersection observer

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden")

hiddenElements.forEach((el) => {
  observer.observe(el)
})

// About page animation

const headingText = new SplitType("#rightTextSlide")
const headingtext2 = new SplitType(".leftTextSlide")

// const headinText2 = new SplitType("")

gsap.to("#rightTextSlide .word", {
  x: 0,
  stagger: 0.05,
  delay: 0.4,
  duration: 0.1,
})

gsap.to(".leftTextSlide .word", {
  x: 0,
  stagger: 0.05,
  ease: "bounce.out",
  delay: 1,
  duration: 0.1,
})

gsap.to(".left-text", {
  y: 0,
  // stagger: 0.05,
  delay: 1.5,
  duration: 0.1,
  ease: "power4.out",
})
