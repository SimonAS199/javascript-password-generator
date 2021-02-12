const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
    generateBtn.classList.add("clickedButton");

    setTimeout(() => {
        generateBtn.classList.remove("clickedButton");
    }, 600)
})