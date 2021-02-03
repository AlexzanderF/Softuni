function solve() {
    const result = document.getElementById('results');
    const questions = Array.from(document.getElementsByTagName('section'));
    const buttons = Array.from(document.getElementsByClassName('answer-text'));
    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let count = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (rightAnswers.includes(e.target.textContent)) {
                count++;
            }
            questions[0].style.display = 'none';
            questions.shift();
            if (questions.length !== 0) {
                questions[0].style.display = 'block'
            } else {
                if (count === 3) {
                    result.children[0].children[0].textContent = "You are recognized as top JavaScript fan!";
                } else {
                    result.children[0].children[0].textContent = `You have ${count} right answers`;
                }
                result.style.display = 'block';
                console.log(result)
            }
        });
    });

}
