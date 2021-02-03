function solve() {
    let links = document.querySelectorAll('a');
    links = Object.values(links);
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // ignores the href in the <a> tag

            updateCount(link);
        })
    });

    function updateCount(link) {
        let currVisits = link.nextElementSibling;
        let count = currVisits.innerHTML.split(" ")[1];
        currVisits.innerHTML = `visited ${++count} times`;
    }
}   