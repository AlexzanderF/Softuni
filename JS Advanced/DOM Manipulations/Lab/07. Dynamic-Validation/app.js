function validate() {
    const input = document.getElementById('email');
    input.addEventListener('input', (e) => {
        if (/^[a-z]+@[a-z]+\.[a-z]+$/g.test(input.value) || input.value === '') {
            if (input.classList.contains('error')) {
                input.classList.remove('error');
            }
        } else {
            if (!input.classList.contains('error')) {
                input.classList.add('error');
            }
        }
    });
}