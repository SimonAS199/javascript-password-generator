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
    const password = "";

    for (let i = 0; i < length; i++){

    }

}

//Button-Animation + Functionality
generateBtn.addEventListener("click", () => {
    generateBtn.classList.add("clickedButton");

    displayElement.innerText = "";

    setTimeout(() => {
        generateBtn.classList.remove("clickedButton");
    }, 1000)
})
