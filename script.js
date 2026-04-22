const chars = "ABCDEFGHJKMNPQRSTUVWXY3456789#%&*+";
const targetText = "DEEPTHI KONAKANCHI";
const displayElement = document.getElementById("scramble-text");

let iteration = 0;

const interval = setInterval(() => {
    displayElement.innerText = targetText
        .split("")
        .map((letter, index) => {
            if (index < iteration) {
                return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

    if (iteration >= targetText.length) {
        clearInterval(interval);
        
        // Hide loader after a short delay once text is finished
        setTimeout(() => {
            document.body.classList.add("loaded");
        }, 500);
    }

    iteration += 1 / 3;
}, 50);