const button = document.getElementById("theme-toggle");
const root = document.documentElement;

// On page load, restore the saved choice
if (localStorage.getItem("theme") === "light") {
    root.setAttribute("data-theme", "light");
    button.textContent = "Dark mode";
}

// On click, switch theme
button.addEventListener("click", function () {
    const isLight = root.getAttribute("data-theme") === "light";

    if (isLight) {
        root.removeAttribute("data-theme");
        button.textContent = "Light mode";
        localStorage.setItem("theme", "dark");
    } else {
        root.setAttribute("data-theme", "light");
        button.textContent = "Dark mode";
        localStorage.setItem("theme", "light");
    }
});