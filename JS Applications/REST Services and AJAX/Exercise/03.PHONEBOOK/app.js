function attachEvents() {
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    loadBtn.addEventListener('click', loadPhonebook);

    // handler function(callback) for fetching data from the api and displaying it
    function loadPhonebook() {
        const phoneList = document.getElementById('phonebook');
        phoneList.innerHTML = null;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(elem => {
                    let li = document.createElement('li');
                    li.textContent = `${elem[1].person}: ${elem[1].phone}`;
                    let delBtn = document.createElement('button');
                    delBtn.textContent = 'Delete';
                    delBtn.addEventListener('click', function () {
                        let delUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${elem[0]}.json`;
                        fetch(delUrl, { method: 'DELETE' })
                            .then(res => console.log(res));
                        this.parentElement.remove();   // manipulates the DOM instead of reloading the phonebook list with AJAX request because it works more smoothly
                    });

                    li.appendChild(delBtn);
                    phoneList.appendChild(li);
                });
            })
            .catch(err => console.log(err));
    }

    createBtn.addEventListener('click', () => {
        let name = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;

        if (name === '' || phone === '') {
            return;
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                person: name,
                phone: phone
            })
        }).catch(err => console.log(err));

        loadPhonebook(); // reloads the phonebook list

        document.getElementById('person').value = null;
        document.getElementById('phone').value = null;
    });

}

attachEvents();