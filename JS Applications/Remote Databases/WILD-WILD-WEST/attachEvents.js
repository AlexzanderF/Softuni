function attachEvents() {
    let url = 'https://softuni-test-78b9f.firebaseio.com/players.json';

    // DOM Elements
    const playersField = document.getElementById('players');
    const addPlayerBtn = document.getElementById('addPlayer');
    const canvasElement = document.getElementById('canvas');
    const reloadBtn = document.getElementById('reload');
    const saveBtn = document.getElementById('save');
    addPlayerBtn.addEventListener('click', createNewPlayer);

    // Functions and Event handlers
    function loadPlayers() {
        if (playersField.children.length > 0) {
            playersField.innerHTML = '';
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.keys(data).forEach(x => {
                    playersField.appendChild(createPlayerDiv(data[x], x));
                });
            })
            .catch(err => console.log(err));
    }

    loadPlayers();

    function createNewPlayer(e) {
        const nameInput = document.getElementById('addName');
        if (nameInput.value !== '') {
            let newPlayer = {
                name: nameInput.value,
                money: 500,
                bullets: 6
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(newPlayer)
            })
                .then(res => {
                    loadPlayers();
                    nameInput.value = '';
                })
                .catch(err => console.log(err))
        }
    }
    function createPlayerDiv(data, id) {
        const div = document.createElement('div');
        div.classList.add('player');
        div.setAttribute('data-id', id);
        div.innerHTML = `
        <ul>
            <li>Name: ${data.name}</li>
            <li>Money: ${data.money}</li>
            <li>Bullets: ${data.bullets}</li>
        </ul>`;

        const playBtn = document.createElement('button');
        playBtn.textContent = 'Play';
        playBtn.classList.add('play');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');

        playBtn.addEventListener('click', (e) => {
            startPlaying(e, data);
        });
        deleteBtn.addEventListener('click', deletePlayer);

        div.appendChild(playBtn);
        div.appendChild(deleteBtn);

        return div;
    }
    function startPlaying(e, data) {
        // e.preventDefault();
        let id = e.target.parentElement.dataset.id;
        console.log(data);
        console.log(id);

        reloadBtn.style.display = 'block';
        saveBtn.style.display = 'block';
        canvasElement.style.display = 'block';
        loadCanvas(data);

        saveBtn.addEventListener('click', saveProgress);
        reloadBtn.addEventListener('click', reloadBullets);

        function saveProgress(e,data) {
            clearInterval(canvasElement.intervalId);

            let newObj = {
                name: data.name,
                money: data.money,
                bullets: data.bullets
            };
            console.log(newObj);
            // fetch(`https://softuni-test-78b9f.firebaseio.com/players/${id}.json`, {
            //     method: 'PUT',
            //     body: JSON.stringify(newObj)
            // })
            //     .then(res => {
            //         reloadBtn.style.display = 'none';
            //         saveBtn.style.display = 'none';
            //         canvasElement.style.display = 'none';
            //     })
            //     .catch(err => console.log(err));
        }
    }
    function deletePlayer(e) {
        let id = e.target.parentElement.dataset.id;

        fetch(`https://softuni-test-78b9f.firebaseio.com/players/${id}.json`, {
            method: 'DELETE'
        })
            .catch(err => console.log(err));

        e.target.parentElement.remove();
    }

    function reloadBullets() {


    }
}
