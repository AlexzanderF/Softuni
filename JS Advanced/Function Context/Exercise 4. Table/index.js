function solve() {
    const rows = Array.from(document.getElementsByTagName('tbody')[0].children);
    rows.forEach(row => {
        row.addEventListener('click', () => {
            rows.forEach(x => {
                if (x.style['background-color'] = '#413f5e' && x !== row) {
                    x.style['background-color'] = '';
                }
            });
            if (row.style['background-color'] === '') {
                row.style['background-color'] = '#413f5e';
            } else {
                row.style['background-color'] = '';
            }
        });
    });
}
