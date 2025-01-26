// Select the menu, open button, and close button
const nav = document.querySelector(".site");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

// Toggle the menu open/close on button clicks
openMenuBtn.addEventListener("click", () => {
  nav.classList.add("menu-open");
});

closeMenuBtn.addEventListener("click", () => {
  nav.classList.remove("menu-open");
});

const filterMenu = document.querySelector(".popup");
const toggleFilterBtn = document.querySelector(".open-filter-btn");

toggleFilterBtn.addEventListener("click", () => {
  filterMenu.classList.toggle("menu-open");
});

document.querySelectorAll(".filter__show-more").forEach((button) => {
  button.addEventListener("click", function () {
    const moreOptions = this.previousElementSibling;
    moreOptions.classList.toggle("hidden");
    this.textContent = moreOptions.classList.contains("hidden")
      ? "Toon meer (2)"
      : "Toon Minder";
  });
});

// Get the filter summary element
const filterSummary = document.querySelector(".filter__summary");

// Add event listener for click
filterSummary.addEventListener("click", function () {
  // Toggle the 'clicked' class
  filterSummary.classList.toggle("clicked");
});
