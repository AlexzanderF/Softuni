function solve() {
    const addBtn = document.getElementsByTagName('button')[0];
    const trainings = document.getElementsByClassName('modules')[0];

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let nameInput = document.querySelectorAll('input')[0];
        let dateInput = document.querySelectorAll('input')[1];
        let moduleInput = document.querySelectorAll('select')[0];
        if (nameInput.value === '' || dateInput.value === '' || moduleInput.value === 'Select module') {
            return;
        }

        let allCurrModules = Array.from(trainings.children).map(x => x.firstElementChild.textContent.split('-')[0]);  // elements are upper case !!!


        if (allCurrModules.includes(moduleInput.value.toUpperCase())) {   // already exsists
            let currModule = Array.from(trainings.children).find(x => x.firstElementChild.textContent.split('-')[0] === moduleInput.value.toUpperCase());
            currModule = currModule.children[1]; // the UL

            let arr = Array.from(currModule.children);  // the LIs
            currModule.innerHTML = ''; // UL = ''

            console.log(arr);

            let li = document.createElement('li');
            li.classList.add('flex');

            let h4 = document.createElement('h4');
            h4.textContent = `${nameInput.value} - ${dateInput.value.split('T')[0].split('-').join('/')} - ${dateInput.value.split('T')[1]}`;
            li.appendChild(h4);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Del';
            deleteBtn.addEventListener('click', (e) => {
                let wholeModule = e.target.parentElement.parentElement;
                e.target.parentElement.remove();
                if (wholeModule.children.length === 0) {
                    wholeModule.parentElement.remove();
                }
            });

            li.appendChild(deleteBtn);
            arr.push(li);

            arr.sort((a, b) => a.firstElementChild.textContent.split(' - ')[1].localeCompare(b.firstElementChild.textContent.split(' - ')[1]));
            for(let el of arr){  // el is LI
                currModule.appendChild(el);
            }
        } else {   // new module
            let newModuleDiv = document.createElement('div');
            newModuleDiv.classList.add('module');

            let h3 = document.createElement('h3');
            h3.textContent = `${moduleInput.value.toUpperCase()}-MODULE`;
            newModuleDiv.appendChild(h3);

            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.classList.add('flex');

            let h4 = document.createElement('h4');
            h4.textContent = `${nameInput.value} - ${dateInput.value.split('T')[0].split('-').join('/')} - ${dateInput.value.split('T')[1]}`;
            li.appendChild(h4);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Del';
            deleteBtn.addEventListener('click', (e) => {
                let wholeModule = e.target.parentElement.parentElement;
                e.target.parentElement.remove();
                if (wholeModule.children.length === 0) {
                    wholeModule.parentElement.remove();
                }
            });

            li.appendChild(deleteBtn);

            ul.appendChild(li);
            newModuleDiv.appendChild(ul);

            trainings.appendChild(newModuleDiv);
        }

        nameInput.value = '';
        dateInput.value = '';
        moduleInput.value = 'Select module';
    });
};