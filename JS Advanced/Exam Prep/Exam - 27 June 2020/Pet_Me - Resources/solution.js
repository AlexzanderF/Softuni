function solve() {
    const addBtn = document.querySelector('button');
    const adoptionList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');

    function validInput(...inputs) {
        for (let elem of inputs) {
            if (elem.placeholder === 'Age') {
                if (!/\d+/g.test(elem.value) || elem.value.length <= 0) {
                    return false;
                }
            } else {
                if (elem.value.length <= 0) {
                    return false;
                }
            }
        }
        return true;
    }

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let nameInput = document.querySelectorAll('input')[0];
        let ageInput = document.querySelectorAll('input')[1];
        let kindInput = document.querySelectorAll('input')[2];
        let ownerInput = document.querySelectorAll('input')[3];

        if (!validInput(nameInput, ageInput, kindInput, ownerInput)) {
            return;   // stops the event function
        }

        let newListItem = document.createElement('li');

        let p = document.createElement('p');
        p.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
        newListItem.appendChild(p);

        let span = document.createElement('span');
        span.textContent = `Owner: ${ownerInput.value}`;
        newListItem.appendChild(span);

        let contactBtn = document.createElement('button');
        contactBtn.textContent = 'Contact with owner';
        newListItem.appendChild(contactBtn);

        adoptionList.appendChild(newListItem);

        contactBtn.addEventListener('click', () => {
            let newDiv = document.createElement('div');
            contactBtn.remove();
            let takeBtn = document.createElement('button');
            takeBtn.textContent = 'Yes! I take it!';
            let newInput = document.createElement('input');;
            newInput.placeholder = 'Enter your names';
            newDiv.appendChild(newInput);
            newDiv.appendChild(takeBtn);
            newListItem.appendChild(newDiv);

            takeBtn.addEventListener('click', () => {
                if (newInput.value.length > 0) {
                    newListItem.remove();
                    newDiv.remove();
                    span.textContent = `New Owner: ${newInput.value}`;
                    let checkBtn = document.createElement('button')
                    checkBtn.textContent = 'Checked';
                    checkBtn.addEventListener('click', () => {
                        newListItem.remove();
                    });
                    newListItem.appendChild(checkBtn);
                    adoptedList.appendChild(newListItem);
                }
            });
        });

        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        ownerInput.value = '';
    });

}

