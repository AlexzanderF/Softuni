function solve() {
    let text = document.getElementById('input');
    let output = document.getElementById('output');
    let sentences = text.innerHTML.split('.');
    sentences = sentences.filter(x => {
        if (x === '' || x.length <= 1) {
            return false;
        }
        return true;
    });
    for (let i = 0; i < sentences.length; i += 3) {
        let newParagraph = document.createElement('p');
        newParagraph.innerHTML = sentences.slice(i, i + 3).join('. ');
        output.appendChild(newParagraph);
    }
}