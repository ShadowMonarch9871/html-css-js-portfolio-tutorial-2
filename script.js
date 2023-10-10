function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const btn_trying = document.getElementsByClassName("btn_trying")[0];
const body = document.body;

btn_trying.addEventListener("click", () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
