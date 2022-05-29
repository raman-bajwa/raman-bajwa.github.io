let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function () {
    setModeEventListener();
    setRandomLinkColor();
    setColorHoverListener();

    setInterval(() => {
        setRandomLinkColor();
    }, 5000);
})();

/* Dark Mode */
function setModeEventListener() {
    let list = document.body.classList;
    document.getElementById("toggler").addEventListener("change", (event) => {
        event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
    });
}

/* Colors */

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
    Array.from(document.getElementsByTagName("a")).forEach((e) => {
        e.style.color = getRandomColor();
    });
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach((e) => {
        e.addEventListener("mouseover", setRandomLinkColor);
    });
}

