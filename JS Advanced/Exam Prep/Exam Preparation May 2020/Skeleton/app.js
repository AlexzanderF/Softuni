function solve() {
    const addBtn = document.getElementById('add');
    // let sections = document.querySelectorAll("section");
    // let orangeSection = sections[1].children[1];
    // let yellowSection = sections[2].children[1];
    // let greenSection = sections[3].children[1];
    // let taskField = document.getElementById('task');
    // let descriptionField = document.getElementById('description');
    // let dateField = document.getElementById('date');
    let addTaskSection = document.querySelectorAll('section');
    let orangeSection = addTaskSection.item(1).querySelectorAll('div').item(1);
    let yellowSection = addTaskSection.item(2).querySelectorAll('div').item(1);
    let greenSection = addTaskSection.item(3).querySelectorAll('div').item(1);

    let taskField = document.querySelector('#task');
    let descriptionField = document.querySelector('#description');
    let dateField = document.querySelector('#date');


    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let taskInput = taskField.value;
        let descriptionInput = descriptionField.value;
        let dateInput = dateField.value;
        // if (taskInput.length <= 0 || descriptionInput.length <= 0 || dateInput.length <= 0) {
        //     return;
        // }

        let newArticle = document.createElement('article');
        orangeSection.append(newArticle);


        let h3 = document.createElement('h3');
        h3.textContent = taskInput;
        newArticle.appendChild(h3);

        let description = document.createElement('p');
        description.textContent = 'Description: ' + descriptionInput;
        newArticle.appendChild(description);

        let date = document.createElement('p');
        date.textContent = 'Due Date: ' + dateInput;
        newArticle.appendChild(date);

        let div = document.createElement('div');
        div.classList.add('flex');

        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');
        startBtn.addEventListener('click', handleStart);
        div.appendChild(startBtn);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');
        deleteBtn.addEventListener('click', handleDelete);
        div.appendChild(deleteBtn);

        newArticle.appendChild(div);


        function handleDelete() {
            newArticle.remove();
        }
        function handleStart() {
            newArticle.remove();
            startBtn.remove();
            let finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.classList = 'orange';
            finishBtn.addEventListener('click', () => {
                newArticle.remove();
                div.remove();
                greenSection.appendChild(newArticle);
            });

            div.appendChild(finishBtn);
            yellowSection.append(newArticle);
        }

        taskField.value = '';
        descriptionField.value = '';
        dateField.value = '';
    });
}