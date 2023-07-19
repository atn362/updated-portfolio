const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
  navList.classList.toggle("show");
}

function closeMenuOnClick() {
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
  }
}

hamburgerButton.addEventListener("click", toggleButton);

const menuItems = navList.getElementsByTagName("li");
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", closeMenuOnClick);
}
