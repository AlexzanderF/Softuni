function solve() {
    const toMenu = document.getElementById('selectMenuTo');
    const firstOption = document.createElement('option');
    firstOption.setAttribute('value', 'binary');
    firstOption.textContent = 'Binary';
    const secOption = document.createElement('option');
    secOption.setAttribute('value', 'hexadecimal');
    secOption.textContent = 'Hexadecimal';
    toMenu.appendChild(firstOption);
    toMenu.appendChild(secOption);

    const resultField = document.getElementById('result');
    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        const input = document.getElementById('input');
        const toSelection = document.getElementById('selectMenuTo').value;
        let decimal = input.value;

        resultField.value = convertion(decimal, toSelection);
        console.log(toSelection);
    });

    function convertion(decimal, selection) {
        if (selection === 'binary') {
            let binary = (Number(decimal) >>> 0).toString(2);
            return binary;
        } else if (selection === 'hexadecimal') {
            let hexadecimal = Number(decimal).toString(16).toUpperCase();
            return hexadecimal;
        }
    }
}