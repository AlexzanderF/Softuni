function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secNum = document.getElementById('secondNumber').value;
    const output = document.getElementById('result');

    let result = firstNum - secNum;
    output.innerHTML = result;
}