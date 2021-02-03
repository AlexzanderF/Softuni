function solve() {
    const cards = Array.from(document.getElementsByTagName('img'));
    const resultBox = document.getElementById('result');
    const history = document.getElementById('history');;
    const url = 'images/whiteCard.jpg';
    let topCard;
    let bottomCard;

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.target.src = url;
            let cardValue = e.target.name;
            if (e.target.parentElement.id === 'player1Div') {
                resultBox.firstElementChild.textContent = cardValue;
                topCard = e.target;
            } else {
                resultBox.lastElementChild.textContent = cardValue;
                bottomCard = e.target;
            }
            // Card comparison
            if (resultBox.children[0].textContent !== '' && resultBox.children[2].textContent !== '') {
                let topCardValue = Number(resultBox.children[0].textContent);
                let bottomCardValue = Number(resultBox.children[2].textContent);
                if (topCardValue > bottomCardValue) {
                    topCard.style.border = '2px solid green';
                    bottomCard.style.border = '2px solid red';
                } else {
                    bottomCard.style.border = '2px solid green';
                    topCard.style.border = '2px solid red';
                }

                history.textContent += `[${topCardValue} vs ${bottomCardValue}] `;
                resultBox.firstElementChild.textContent = null;
                resultBox.lastElementChild.textContent = null;
                topCard = undefined;
                bottomCard = undefined;
            }
        });
    });
}