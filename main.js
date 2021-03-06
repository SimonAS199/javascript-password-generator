const generateBtn = document.getElementById("generate");
const displayElement = document.getElementById("display");
const passwordLengthElement = document.getElementById("length");
const includeUpperCharsElement = document.getElementById("upper");
const includeSpecialCharsElement = document.getElementById("special");
const includeDigitsElement = document.getElementById("digit");

const components = [
    //uppercase [0]
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

    //lowercase [1]
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    //special [2]
    ["!", "#", "$", "%", "&", "-", ".", "/", "?", "@", "_"],

    //digits [3]
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
]

const generatePassword = (length, upperCase, specialChars, digits) => {
    const passwordCharacters = [];
    const previousComponents = [];

    if (length < parseInt(passwordLengthElement.min) || length === "") {
        length = passwordLengthElement.min;
        passwordLengthElement.value = passwordLengthElement.min.toString();
    } else if (length > parseInt(passwordLengthElement.max)) {
        length = passwordLengthElement.max;
        passwordLengthElement.value = passwordLengthElement.max.toString();
    }

    //Generate random string
    for (let i = 0; i < length; i++) {
        let randomComponentPointer = Math.floor(Math.random() * 4);
        let randomValuePointer;

        while (upperCase === false && randomComponentPointer === 0 ||
        specialChars === false && randomComponentPointer === 2 ||
        digits === false && randomComponentPointer === 3) {
            randomComponentPointer = Math.floor(Math.random() * 4);
        }

        while (i >= (length - 3) && upperCase === true && previousComponents.includes(0) === false ||
        i >= (length - 3) && specialChars === true && previousComponents.includes(2) === false ||
        i >= (length - 3) && digits === true && previousComponents.includes(3) === false) {
            randomComponentPointer = Math.floor(Math.random() * 4);

            if (upperCase === true && randomComponentPointer === 0 && previousComponents.includes(0) === false ||
                specialChars === true && randomComponentPointer === 2 && previousComponents.includes(2) === false ||
                digits === true && randomComponentPointer === 3 && previousComponents.includes(3) === false) {
                previousComponents.push(randomComponentPointer);
            }
        }

        if (previousComponents.length < length) {
            previousComponents.push(randomComponentPointer);
        }

        randomValuePointer = Math.floor(Math.random() * components[randomComponentPointer].length);

        passwordCharacters.push(components[randomComponentPointer][randomValuePointer]);
    }

    passwordCharacters.forEach(character => {

        displayElement.innerText += character;

    })

}

//Button-Animation + Functionality
generateBtn.addEventListener("click", () => {
    generateBtn.classList.add("clickedButton");

    displayElement.innerText = "";

    setTimeout(() => {
        generateBtn.classList.remove("clickedButton");
    }, 1000)

    generatePassword(passwordLengthElement.value, includeUpperCharsElement.checked,
        includeSpecialCharsElement.checked, includeDigitsElement.checked);
})

passwordLengthElement.addEventListener("keydown", k => {
    if (k.keyCode === 13) {
        displayElement.innerText = "";
        generatePassword(passwordLengthElement.value, includeUpperCharsElement.checked,
            includeSpecialCharsElement.checked, includeDigitsElement.checked);
    }
})