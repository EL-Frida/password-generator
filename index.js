const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

let paswords = {
    pasword1: "",
    pasword2: ""
}

let firstParagraph = document.getElementById("first")
let secondParagraph = document.getElementById("second")

let symbolCheck = document.getElementById("symbol")

function isNumberSelected() {
    let numberCheck = document.getElementById("number")
    return numberCheck.checked;
}

function isSymbolSelected() {
    let symbolCheck = document.getElementById("symbol")
    return symbolCheck.checked;
}

function generatePassword() {
    console.log("Is symbol selected? " + isSymbolSelected())
    console.log("Is number selected? " + isNumberSelected())

    if (isSymbolSelected() && isNumberSelected()) {
        paswords.pasword1 = generateWithNumberAndSymbol()
        paswords.pasword2 = generateWithNumberAndSymbol()
    } else if (isSymbolSelected()) {
        paswords.pasword1 = generateWithSymbol()
        paswords.pasword2 = generateWithSymbol()
    } else if (isNumberSelected()) {
        paswords.pasword1 = generateWithNumber()
        paswords.pasword2 = generateWithNumber()
    } else {
        paswords.pasword1 = generateAlfabeticalPsw()
        paswords.pasword2 = generateAlfabeticalPsw()
    }

    firstParagraph.textContent = paswords.pasword1;
    secondParagraph.textContent = paswords.pasword2;

}

function generateSymbol() {
    const symbolsLength = symbols.length;
    return symbols[Math.floor(Math.random() * symbolsLength)]
}

function generateNumber() {
    const numbersLength = numbers.length;
    return numbers[Math.floor(Math.random() * numbersLength)]
}

function generateCharacter() {
    const charsLength = alphabet.length;
    return alphabet[Math.floor(Math.random() * charsLength)]
}

function generateWithNumber() {
    let hasNumber = false;

    const charsLength = alphabet.length;
    let pswArray = [];

    for (let i = 0; i < 15; i++) {
        // generate 0 for array of characters and 1 for numbers array
        let arrayIndex = Math.floor(Math.random() * 2);
        if (arrayIndex === 1) {
            // generate index to choose a number 
            hasNumber = hasNumber || true;
            pswArray.push(generateNumber())
        } else {
            // generate index to choose a character  
            pswArray.push(generateCharacter())
        }
    }
    // in case, no number is choosen, remove last character and replace it with a number
    if (!hasNumber) {
        pswArray.pop();
        pswArray.push(generateNumber())
    }

    return pswArray.join("")

}

function generateWithSymbol() {
    let hasSymbol = false;
    let pswArray = [];

    for (let i = 0; i < 15; i++) {
        // generate 0 for array of characters and 1 for symbols array
        let arrayIndex = Math.floor(Math.random() * 2);
        if (arrayIndex === 1) {
            // generate index to choose a number 
            hasSymbol = hasSymbol || true;
            pswArray.push(generateSymbol())
        } else {
            // generate index to choose a character  
            pswArray.push(generateCharacter())
        }
    }
    // in case, no number is choosen, remove last character and replace it with a number
    if (!hasSymbol) {
        pswArray.pop();
        pswArray.push(generateSymbol())
    }

    return pswArray.join("");
}

function generateWithNumberAndSymbol() {
    let hasSymbol = false;
    let hasNumber = false;
    let pswArray = [];

    for (let i = 0; i < 15; i++) {
        // generate 0 for array of characters, 1 for symbols array, 2 for numbers array
        let arrayIndex = Math.floor(Math.random() * 3);
        console.log("index generated " + arrayIndex)
        if (arrayIndex === 2) {
            // generate index to choose a number 
            hasNumber = hasNumber || true;
            pswArray.push(generateNumber())
        } else if (arrayIndex === 1) {
            // generate index to choose a number 
            hasSymbol = hasSymbol || true;
            pswArray.push(generateSymbol())
        } else {
            // generate index to choose a character  
            pswArray.push(generateCharacter())
        }
    }
    // in case, no number is choosen, remove last character and replace it with a number
    if (!hasNumber) {
        pswArray.pop();
        pswArray.push(generateNumber())
    }
    // in case, no symbol is choosen, remove first character and replace it with a symbol
    if (!hasSymbol) {
        pswArray.shift();
        pswArray.unshift(generateSymbol())
    }

    return pswArray.join("");
}

function generateAlfabeticalPsw() {
    let psw = ""
    for (let i = 0; i < 15; i++) {
        psw += generateCharacter()
    }
    return psw;
}

function copyToClipboard(paragraph) {
    const text = paragraph.innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}





