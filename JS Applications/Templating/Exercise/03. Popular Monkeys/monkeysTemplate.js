$(() => {
    const monkeysDiv = document.querySelector('.monkeys');
    let monkeyTemplate = Handlebars.compile(document.getElementById('monkey-template').innerHTML);

    monkeysDiv.innerHTML = monkeys.map(x => monkeyTemplate(x)).join('');

    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', showInfo);
    });

    function showInfo(e) {
        const infoBox = e.target.nextElementSibling;
        if (infoBox.style.display === 'block') {
            infoBox.style.display = 'none';
        } else {
            infoBox.style.display = 'block';
        }
    }
});