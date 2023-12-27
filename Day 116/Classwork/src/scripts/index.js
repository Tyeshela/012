document.getElementById('increment-btn').addEventListener('click', () => {
    const numberParagraph = document.getElementById('number');
    let currentNumber = parseInt(numberParagraph.textContent);
    numberParagraph.textContent = ++currentNumber
})