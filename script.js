let show = true;

const menuSection = document.querySelector(".menu-section");

function menu() {
  if (menuSection.classList.contains("on")) {
    menuSection.classList.remove("on");
    document.body.style.overflow = "initial";
  } else {
    menuSection.classList.add("on");
    document.body.style.overflow = "hidden";
  }
}
