function solve() {
    // CLOSURE
    let currentId = 'depot';
    const infoBox = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    function depart() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                infoBox.textContent = `Next stop ${data.name}`;
                currentId = data.next;
            })
            .catch(err => {
                infoBox.textContent = 'Error';
                arriveBtn.setAttribute('disabled', 'true');
                departBtn.setAttribute('disabled', 'true');
            });

        departBtn.setAttribute('disabled', 'true');
        arriveBtn.removeAttribute('disabled');
    }

    function arrive() {
        let url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                infoBox.textContent = `Next stop ${data.name}`;
                currentId = data.next;
            })
            .catch(err => {
                infoBox.textContent = 'Error';
                arriveBtn.setAttribute('disabled', 'true');
                departBtn.setAttribute('disabled', 'true');
            });

        departBtn.removeAttribute('disabled');
        arriveBtn.setAttribute('disabled', 'true');
    }

    return {
        depart,
        arrive
    };
}

let result = solve(); // object with both functions as methods, works exactly like a module