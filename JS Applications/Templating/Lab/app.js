const contactsDiv = document.getElementById('contacts');

let contactTemplate = Handlebars.compile(document.getElementById('contact-template').innerHTML);
contactsDiv.innerHTML = contacts.map(data => contactTemplate(data));

let detailsBtns = document.querySelectorAll('.detailsBtn');
detailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const details = e.target.parentElement.querySelector('.details');
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});


