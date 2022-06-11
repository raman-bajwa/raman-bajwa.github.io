(function () {
    setModeEventListener();
    setRandomLinkColor();

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

function getRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
    let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f", "#242F9B", "#FF0000", "#0c3866", "#ce181e"];

    Array.from(document.getElementsByTagName("a")).forEach((e) => {
        // get random color
        let randomColor = getRandomColor(colors);

        // set random color to currnt link
        e.style.color = randomColor;

        // remove that color from colors list, so it can't be picked 
        // randomly again
        colors = colors.filter(color => color !== randomColor)
    });
}
