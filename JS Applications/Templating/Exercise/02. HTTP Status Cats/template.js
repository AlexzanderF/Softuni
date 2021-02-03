(() => {
    renderCatTemplate();

    function renderCatTemplate() {
        const listDiv = document.querySelector('#allCats > ul');
        let catTemplate = Handlebars.compile(document.getElementById('cat-template').innerHTML);

        cats.forEach(catData => {
            listDiv.innerHTML += catTemplate(catData);
        });

        document.querySelectorAll('.showBtn').forEach(btn => {
            btn.addEventListener('click', showStatus);
        });

        function showStatus(e) {
            const btn = e.target;
            const info = e.target.nextElementSibling;
            if (btn.textContent === 'Show status code') {
                // toggle the status code information
                info.style.display = 'block';
                btn.textContent = 'Hide status code';
            } else {
                info.style.display = 'none';
                btn.textContent = 'Show status code';
            }
        }
    }

})();
