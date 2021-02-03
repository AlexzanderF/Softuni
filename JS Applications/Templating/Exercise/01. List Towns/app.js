function attachEvents() {
    const listElement = document.getElementById('root');
    const inputField = document.getElementById('towns');
    const loadBtn = document.getElementById('btnLoadTowns');
    loadBtn.addEventListener('click', loadTowns);

    const townsTemplate = Handlebars.compile(document.getElementById('towns-template').innerHTML);

    function loadTowns(e) {
        e.preventDefault();
        if (inputField.value === '') {
            return;
        }
        let towns = inputField.value.split(', ');
        if (listElement.children.length > 0) {
            listElement.innerHTML = '';
        }
        listElement.innerHTML = townsTemplate({ towns });
    }
}

attachEvents();