function focus() {
    const inputFields = Array.from(document.querySelectorAll('input'));
    inputFields.forEach(field => {
        field.addEventListener('focus', (e) => {
            let div = e.target.parentElement;
            div.classList.add('focused');
        });
        field.addEventListener('blur', (e) => {
            let div = e.target.parentElement;
            div.classList.remove('focused');
        });
    });
}