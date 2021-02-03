function addItem() {
    const items = document.getElementById('items');
    const newItem = document.createElement('li');
    const input = document.getElementById('newText');
    newItem.textContent = input.value;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (e) => {
        deleteItem(e);
    });
    newItem.appendChild(deleteBtn);
    items.appendChild(newItem);
    input.value = null;

    function deleteItem(e){
        e.target.parentElement.remove();
    }
}