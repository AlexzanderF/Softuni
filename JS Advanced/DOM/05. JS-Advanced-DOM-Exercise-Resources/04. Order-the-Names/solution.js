function solve() {
    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', () => {
        const input = document.querySelector('#exercise > article > input');
        let name = input.value;
        let firstLetter = name[0].toUpperCase();
        name = firstLetter + name.slice(1).toLowerCase();
        let alphabetPos = firstLetter.charCodeAt() - 64;
        const list = document.querySelectorAll('ol > li')[alphabetPos - 1];
        if (list.textContent !== '') {
            list.textContent = list.textContent + ', ' + name;
        } else {
            list.textContent = name;
        }
        input.value = null;
    });
}