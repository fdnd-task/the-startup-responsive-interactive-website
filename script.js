const nav = document.querySelector(".main-nav");
const openMenu = document.querySelector(".open-menu-btn");
const closeMenu = document.querySelector(".close-menu-btn");

openMenu.addEventListener("click", () => {
  nav.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("menu-open");
});

const filterMenu = document.querySelector(".popup-wrapper");
const toggleFilterBtn = document.querySelector(".open-filter-btn");

toggleFilterBtn.addEventListener("click", () => {
  filterMenu.classList.toggle("filter-menu-open");
});

document.querySelectorAll(".show-more-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const moreOptions = this.previousElementSibling;
    moreOptions.classList.toggle("hidden");
    this.textContent = moreOptions.classList.contains("hidden")
      ? "Show More"
      : "Show Less";
  });
});
