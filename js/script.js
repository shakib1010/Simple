function functionality() {
  // ACCORDION FUNCTIONALITY
  // let toggleIcons = document.querySelectorAll("#accordion-icon")
  // let accordionBody = document.querySelectorAll("#accordion-body")

  // console.log(toggleIcons)
  // console.log(accordionBody)

  // toggleIcons.forEach((toggleIcon) => {
  //   toggleIcon.addEventListener("click", () => {
  //     toggleIcon.textContent === "+"
  //       ? (toggleIcon.textContent = "-")
  //       : (toggleIcon.textContent = "+")
  //     accordionBody.classList.toggle("accordion__body--open")
  //   })
  // })
  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  )

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      )
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active")
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
      }
      accordionItemHeader.classList.toggle("active")
      const accordionItemBody = accordionItemHeader.nextElementSibling
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px"
      } else {
        accordionItemBody.style.maxHeight = 0
      }
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  functionality()
})
