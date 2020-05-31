const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) =>
  accordion.addEventListener("click", () => {
    if (accordion.classList.contains("accordion-opened")) {
      accordion.classList.remove("accordion-opened");
      accordion.children[1].style.transform = "rotate(45deg)";
    } else {
      accordion.classList.add("accordion-opened");
      accordion.children[1].style.transform = "rotate(-90deg)";
    }
  })
);
