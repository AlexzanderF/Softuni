function lockedProfile() {
    const showBtns = Array.from(document.querySelectorAll('.profile > button'));
    showBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            let lock = e.target.parentElement.children[2];
            const info = document.getElementById(`user${i + 1}HiddenFields`);
            if (e.target.textContent === 'Show more') {
                if (!lock.checked) {
                    info.style.display = 'block';
                    e.target.textContent = 'Hide it';
                }
            } else {
                if (!lock.checked) {
                    info.style.display = 'none';
                    e.target.textContent = 'Show more';
                }
            }
        });
    });
}