function deleteByEmail() {
    const table = Array.from(document.querySelectorAll('#customers > tbody > tr'));
    let emails = table.map(td => td.lastElementChild.textContent);
    const input = document.getElementsByName('email')[0];
    const result = document.getElementById('result');
    if (emails.includes(input.value)) {
        for (let tr of table) {
            if (tr.lastElementChild.textContent === input.value) {
                tr.remove();
                result.innerHTML = 'Deleted.';
            }
        }
    } else {
        result.innerHTML = 'Not found.';
    }
    input.value = null;
}