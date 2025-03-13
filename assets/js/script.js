let display = document.getElementById("display");

// append a character to the display
function appendCharacter(char) {
    display.value += char;
}

// clear display
function clearDisplay() {
    display.value = "";
}

// delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
