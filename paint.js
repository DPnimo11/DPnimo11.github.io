// --- Embedded Paint Project Script ---
// All the original JS is placed here, with selectors scoped to the #paint-app container
const paintAppContainer = document.querySelector('#paint-app');
const whiteboard = paintAppContainer.querySelector("#whiteboard");

// Use document for mouseup event to catch mouse releases outside the board
document.documentElement.addEventListener("mouseup", () => draw = false);

let width = 64;
let draw = false;
let rainbow = false;
let eraser = false;
let gradient = false;
// Scope the toolbar query to the paint app container
let toolbar = Array.from(paintAppContainer.querySelector("#toolbar").children);
let board = [];
let color = "#000000";

function hexConverter (hexColor) {
    let rgb = "rgb(";
    for (let i = 1; i < hexColor.length; i += 2) {
        rgb += parseInt(hexColor.slice(i, i + 2), 16) + ", ";
    }
    return rgb.slice(0, -2) + ")";
}

function drawHandler(e) {
    if (eraser) {
        e.target.style.backgroundColor = "rgb(255, 255, 255)";
        e.target.style.opacity = 1;
    } else if (rainbow) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        e.target.style.opacity = 1;
    } else if (gradient) {
        if (e.target.style.backgroundColor === hexConverter(color)) {
            let currentOpacity = +e.target.style.opacity;
            if (currentOpacity < 1) {
                 e.target.style.opacity = currentOpacity + 0.1;
            }
        } else {
            e.target.style.backgroundColor = color;
            e.target.style.opacity = 0.1;
        }
    } else {
        e.target.style.backgroundColor = color;
        e.target.style.opacity = 1;
    }
}

function initBoard() {
    whiteboard.replaceChildren();
    board = []; // Clear the board array
    for (let i = 0; i < width; i++) {
        let row = document.createElement("div");
        let temp = []
        row.setAttribute("class", "row");
        
        for (let j = 0; j < width; j++) {
            let box = document.createElement("div");
            box.setAttribute("class", "box");
            box.style.backgroundColor = "rgb(255, 255, 255)";
            box.style.opacity = 1;
            box.addEventListener("mousedown", (e) => {
                draw = true;
                drawHandler(e);
            })
            box.addEventListener("mouseenter", e => {
                if (draw) {
                    drawHandler(e);
                }
            })
            box.addEventListener('dragstart', e => {
                e.preventDefault();
            });
            row.appendChild(box);
            temp.push(box)
        }
        board.push(temp)
        whiteboard.appendChild(row);
    }
}

function clearBoard() {
    for (let row of board) {
        for (let box of row) {
            box.style.backgroundColor = "rgb(255, 255, 255)";
            box.style.opacity = 1;
        }
    }
}

// Reformat Button
toolbar[6].addEventListener("click", () => {
    let newWidth = +prompt("Choose the new number of squares per side (1-100)!");
    if (!isNaN(newWidth) && newWidth > 0 && newWidth <= 100) {
        width = newWidth;
        // Update the CSS variable on the whiteboard container
        whiteboard.style.setProperty("--board-dim", `${width}`);
        initBoard();
    } else if (newWidth !== null) { // Handle cancel button
         alert("Invalid number! Please choose a number between 1 and 100.");
    }
});

// Reset Button
toolbar[5].addEventListener("click", () => clearBoard());

// Eraser Button
toolbar[4].addEventListener("click", (e) => {
    toolbar.forEach(btn => btn.style.backgroundColor = "#FCB1A6");
    e.target.style.backgroundColor = "#C092C7";
    eraser = true;
    rainbow = false;
    gradient = false;
});

// Gradient Button
toolbar[3].addEventListener("click", (e) => {
    gradient = !gradient;
    toolbar.forEach(btn => btn.style.backgroundColor = "#FCB1A6");
    
    if (gradient) {
        e.target.style.backgroundColor = "#C092C7";
        toolbar[1].style.backgroundColor = "#C092C7"; // Also highlight color button
    } else {
         toolbar[1].click(); // Revert to normal color mode
    }
    
    rainbow = false;
    eraser = false;
    color = toolbar[0].value;
});

// Rainbow Button
toolbar[2].addEventListener("click", (e) => {
    toolbar.forEach(btn => btn.style.backgroundColor = "#FCB1A6");
    e.target.style.backgroundColor = "#C092C7";
    rainbow = true;
    eraser = false;
    gradient = false;
});

// Color Button
toolbar[1].addEventListener("click", (e) => {
    toolbar.forEach(btn => {
        if(btn.id !== 'gradient' || !gradient) {
           btn.style.backgroundColor = "#FCB1A6";
        }
    });
    e.target.style.backgroundColor = "#C092C7";
    if(gradient) toolbar[3].style.backgroundColor = "#C092C7";

    eraser = false;
    rainbow = false;
    color = toolbar[0].value;
});

// Color Input
toolbar[0].addEventListener("input", (e) => {
    color = e.target.value;
    if (!rainbow && !eraser) {
        toolbar[1].click();
    }
});

// Initialize the board on load
initBoard();
// Set default mode to color
toolbar[1].click();