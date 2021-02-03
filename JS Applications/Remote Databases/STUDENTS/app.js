(function () {
    let url = 'https://softuni-test-78b9f.firebaseio.com/students.json';
    let currentId;

    // DOM elements
    const studentsTable = document.querySelector('table > tbody');
    const createBtn = document.querySelector('form > button');

    function loadStudents() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (studentsTable.innerHTML !== '') {
                    studentsTable.innerHTML = '';
                }
                let students = Object.values(data).sort((a, b) => a.id - b.id);
                students.forEach(x => {
                    studentsTable.appendChild(createTableRow(x));
                });
                currentId = students.slice(-1)[0].id;
                console.log(currentId);
            })
            .catch(err => console.log(err));
    };
    loadStudents();

    createBtn.addEventListener('click', addNewStudent);

    function addNewStudent(e) {
        e.preventDefault();

        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const facultyNumInput = document.getElementById('facultyNum');
        const gradeInput = document.getElementById('grade');

        if ([firstNameInput.value, lastNameInput.value, facultyNumInput.value, gradeInput.value].some(x => x === '')) {
            return;
        }

        currentId++;  // !!!

        let newStudentObj = {
            id: currentId,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumInput.value,
            grade: gradeInput.value
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newStudentObj)
        })
            .then(res => {
                loadStudents();
                firstNameInput.value = '';
                lastNameInput.value = '';
                facultyNumInput.value = '';
                gradeInput.value = '';
            })
            .catch(err => console.log(err));
    }
    function createTableRow(studentData) {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${studentData.id}</td>
            <td>${studentData.firstName}</td>
            <td>${studentData.lastName}</td>
            <td>${studentData.facultyNumber}</td>
            <td>${studentData.grade}</td>
        `;

        return tr;
    }

})();