// Accordion functionality

const accordionBody = document.getElementById("accordion-body")
const accordionPlusIcon = document.getElementById("accordion-plus")
const accordionMinusIcon = document.getElementById("accordion-minus")

accordionPlusIcon.addEventListener("click", () => {
  accordionPlusIcon.classList.add("d-none")
  accordionMinusIcon.classList.remove("d-none")

  accordionBody.classList.add("accordion__body--open")
})

accordionMinusIcon.addEventListener("click", () => {
  accordionMinusIcon.classList.add("d-none")
  accordionPlusIcon.classList.remove("d-none")
  accordionBody.classList.remove("accordion__body--open")
})
