function solve() {
    const expressionField = document.getElementById('expressionOutput');
    const resultField = document.getElementById('resultOutput');
    const clearButt = document.getElementsByClassName('clear')[0];
    let keys = document.querySelectorAll('.keys > button');
    keys = Object.values(keys);
    clearButt.addEventListener('click', () => {
        expressionField.textContent = null;
        resultField.textContent = null;
    });
    function calculate(expr) {
        let [firstNum, operator, secNum] = expr.split(" ");
        firstNum = Number(firstNum);
        secNum = Number(secNum);
        let result = 0;
        switch (operator) {
            case '+':
                result = firstNum + secNum;
                break;
            case '-':
                result = firstNum - secNum;
                break;
            case '*':
                result = firstNum * secNum;
                break;
            case '/':
                result = firstNum / secNum;
                break;
        }

        return result;
    }
    keys.forEach(button => {
        button.addEventListener('click', () => {
            if (!isNaN(Number(button.value)) || button.value === '.') {   // is a number
                expressionField.textContent += button.value;
            } else if (isNaN(Number(button.value)) && button.value !== '=') {
                expressionField.textContent += ` ${button.value} `;
            } else if (button.value === '=') {
                if (/^[\d\.]+ [+\-\*\/] [\d\.]+$/g.test(expressionField.textContent)) {
                    resultField.textContent = calculate(expressionField.textContent);
                } else {
                    resultField.textContent = NaN;
                }
            }
        });
    });
}