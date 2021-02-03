function addItem() {
    const items = document.getElementById('items');
    const newItem = document.createElement('li');
    const input = document.getElementById('newItemText');
    newItem.textContent = input.value;
    items.appendChild(newItem);
    input.value = null;
}