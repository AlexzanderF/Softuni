(function () {
    // URLs
    let baseUrl = 'https://softuni-test-78b9f.firebaseio.com/books.json';
    let exactBookUrl = 'https://softuni-test-78b9f.firebaseio.com/books/';

    // DOM elements
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const booksTable = document.querySelector('table > tbody');

    const loadBtn = document.getElementById('loadBooks');
    loadBtn.addEventListener('click', loadBooks)

    const createBtn = document.querySelector('form > button');
    createBtn.addEventListener('click', createBook);

    // Event Handlers and Functions
    function createBook(e) {
        e.preventDefault();

        let title = titleInput.value;
        let author = authorInput.value;
        let isbn = isbnInput.value;

        if (title === '' || author === '' || isbn === '') {
            return;
        }

        let newBookObj = {
            title,
            author,
            isbn
        };

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(newBookObj)
        })
            .then(res => {
                // reloads the book table only after the POST request is finished
                if (res.ok) {
                    loadBooks();
                } else {
                    throw res;
                }
            })
            .catch(err => console.log(err));

        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';

    }

    function loadBooks(e) {
        // runs preventDefault() only if the function is executed by a button click(the submit btn)
        if (e) {
            e.preventDefault();
        }

        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                booksTable.innerHTML = '';
                Object.keys(data).forEach(key => {
                    booksTable.appendChild(createTableBookElement(key, data[key]));
                });
            })
            .catch(err => console.log(err));
    }
    // creates new table row for a book
    function createTableBookElement(id, bookData) {
        let tr = document.createElement('tr');
        tr.setAttribute('data-id', id);
        tr.innerHTML = `
            <td>${bookData.title}</td>
            <td>${bookData.author}</td>
            <td>${bookData.isbn}</td>
        `;

        let btnsTd = document.createElement('td');
        let editBtn = document.createElement('button');
        let delBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        delBtn.textContent = 'Delete';
        editBtn.addEventListener('click', editBook);
        delBtn.addEventListener('click', deleteBook);
        btnsTd.appendChild(editBtn);
        btnsTd.appendChild(delBtn);
        tr.appendChild(btnsTd);

        return tr;
    }
    // uses the same form for creating a new book but changes the button to 'EDIT'
    function editBook(e) {
        const formElement = document.querySelector('form');
        if (formElement.lastElementChild.textContent === 'EDIT') {
            return;
        }
        let bookRow = e.target.parentElement.parentElement;
        // 'curr' means the data for the book we want to edit 
        let currTitle = bookRow.children[0].textContent;
        let currAuthor = bookRow.children[1].textContent;
        let currIsbn = bookRow.children[2].textContent;

        titleInput.value = currTitle;
        authorInput.value = currAuthor;
        isbnInput.value = currIsbn;

        let id = bookRow.dataset.id;

        const temporaryEditBtn = document.createElement('button');
        temporaryEditBtn.textContent = 'EDIT';
        createBtn.style.display = 'none';
        formElement.appendChild(temporaryEditBtn);

        temporaryEditBtn.addEventListener('click', () => {
            let editedTitle = titleInput.value;
            let editedAuthor = authorInput.value;
            let editedIsbn = isbnInput.value;

            fetch(exactBookUrl + `${id}.json`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: editedTitle,
                    author: editedAuthor,
                    isbn: editedIsbn
                })
            })
                .then(res => {
                    if (res.ok) {
                        loadBooks();
                    } else {
                        throw res;
                    }
                })
                .catch(err => console.log(err));

            createBtn.style.display = 'block';
            temporaryEditBtn.remove();

            titleInput.value = '';
            authorInput.value = '';
            isbnInput.value = '';
        });
    }
    function deleteBook(e) {
        // asks if the user wants to delete the book permanently
        window.confirm('Are you sure you want to delete this book permanently?');

        let bookRow = e.target.parentElement.parentElement;
        let id = bookRow.dataset.id;

        fetch(exactBookUrl + `${id}.json`, {
            method: 'DELETE'
        })
            .catch(err => console.log(err));

        bookRow.remove();
    }
})();
