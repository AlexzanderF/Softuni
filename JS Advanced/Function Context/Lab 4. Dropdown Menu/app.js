function solve() {
    const chooseBtn = document.getElementById('dropdown');
    const box = document.getElementById('box');
    const links = document.getElementsByTagName('li');

    chooseBtn.addEventListener('click', (e) => {
        if (e.target.nextElementSibling.style.display === 'block') {
            e.target.nextElementSibling.style.display = 'none';
            box.style['background-color'] = 'black';
            box.style.color = 'white';
        } else {
            e.target.nextElementSibling.style.display = 'block';
        }
    });
    [...links].forEach(link => {
        link.addEventListener('click', (e) => {
            let rgb = e.target.textContent;
            box.style['background-color'] = rgb;
            box.style.color = 'black';
        });
    });
}