document.getElementById("increment-btn").addEventListener("click", ()=>{
    const numberParagraph = document.getElementById("number");
    let currentNumber = parseInt(numberParagraph.textContent);
    numberParagraph.textContent = ++currentNumber;
});

//# sourceMappingURL=index.6a31943b.js.map
