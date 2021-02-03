function addItem() {
    const textInput = document.getElementById('newItemText');
    console.log(textInput);
    const valueInput = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    if (textInput.value !== '' && valueInput.value !== '') {
        let option = document.createElement('option');
        option.textContent = textInput.value;
        option.value = valueInput.value;
        menu.appendChild(option);

        textInput.value = '';
        valueInput.value = '';
    }

}