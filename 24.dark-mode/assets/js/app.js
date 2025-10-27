const themeToggle = document.querySelector('.toggle-btn')
const BODY = document.body;

const currentTheme = localStorage.getItem("theme") || "light"

if (currentTheme === "dark") {
  BODY.classList.add("dark-theme")
}

themeToggle.addEventListener('click', () => {
  BODY.classList.toggle('dark-theme')
  const theme = BODY.classList.contains("dark-theme") ? "dark" : "light"
  localStorage.setItem("theme", theme)
})


