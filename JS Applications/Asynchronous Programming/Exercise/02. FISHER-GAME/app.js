function attachEvents() {
    const loadBtn = document.getElementsByClassName('load')[0];
    const addBtn = document.getElementsByClassName('add')[0];
    const catchesDiv = document.getElementById('catches');
    const addFormElement = document.getElementById('addForm');

    let baseUrl = 'https://fisher-game.firebaseio.com/catches.json';

    loadBtn.addEventListener('click', () => {
        catchesDiv.innerHTML = '';  // resets the catches and removes the example catch
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(([key, value]) => {
                    catchesDiv.appendChild(createCatchElement(key, value));
                });
            })
            .catch(err => console.log(err));
    });

    addBtn.addEventListener('click', () => {
        let angler = addFormElement.getElementsByClassName('angler')[0].value;
        let bait = addFormElement.getElementsByClassName('bait')[0].value;
        let captureTime = addFormElement.getElementsByClassName('captureTime')[0].value;
        let location = addFormElement.getElementsByClassName('location')[0].value;
        let species = addFormElement.getElementsByClassName('species')[0].value;
        let weight = addFormElement.getElementsByClassName('weight')[0].value;

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({
                angler,
                bait,
                captureTime,
                location,
                species,
                weight
            })
        })
            .catch(err => console.log(err));

        // clears the input fields
        [...addFormElement.getElementsByTagName('input')].forEach(x => x.value = '');
    });

    // creates new div for the catches
    function createCatchElement(id, catchObj) {
        let catchDiv = document.createElement('div');
        catchDiv.classList.add('catch');
        catchDiv.setAttribute('data-id', id);
        catchDiv.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${catchObj.angler}"/>
            <hr>
            <label>Weight</label>      
            <input type="number" class="weight" value="${catchObj.weight}"/>
            <hr>
            <label>Species</label>
            <input type="text" class="species" value="${catchObj.species}"/>
            <hr>
            <label>Location</label>
            <input type="text" class="location" value="${catchObj.location}"/>
            <hr>
            <label>Bait</label>
            <input type="text" class="bait" value="${catchObj.bait}"/>
            <hr>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${catchObj.captureTime}"/>
            <hr>
        `;
        const updateBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        updateBtn.textContent = 'Update';
        deleteBtn.textContent = 'Delete';
        updateBtn.addEventListener('click', updateCatch);
        deleteBtn.addEventListener('click', deleteCatch);
        catchDiv.appendChild(updateBtn);
        catchDiv.appendChild(deleteBtn);

        return catchDiv;
    }

    function updateCatch(e) {
        let parentCatch = e.target.parentElement;
        let id = e.target.parentElement.getAttribute('data-id');
        let currUrl = `https://fisher-game.firebaseio.com/catches/${id}.json`;

        let putObj = {
            angler: parentCatch.getElementsByClassName('angler')[0].value,
            bait: parentCatch.getElementsByClassName('bait')[0].value,
            captureTime: parentCatch.getElementsByClassName('captureTime')[0].value,
            location: parentCatch.getElementsByClassName('location')[0].value,
            species: parentCatch.getElementsByClassName('species')[0].value,
            weight: parentCatch.getElementsByClassName('weight')[0].value
        };

        //updates the catch data
        fetch(currUrl, {
            method: 'PUT',
            body: JSON.stringify(putObj)
        })
            .catch(err => console.log(err));
    }
    function deleteCatch(e) {
        let id = e.target.parentElement.getAttribute('data-id');
        let currUrl = `https://fisher-game.firebaseio.com/catches/${id}.json`;

        fetch(currUrl, { method: 'DELETE' })
            .catch(err => console.log(err));

        e.target.parentElement.remove(); // removes the div from the DOM
    }
}

attachEvents();

