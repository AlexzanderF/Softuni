// # 1
function subSum(arr, start, end) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    for (let i = start; i <= end; i++) {
        if (typeof arr[i] !== 'number') {
            return NaN;
        }
        sum += arr[i];
    }
    return sum;
}

// # 2    FACTORY FUNCTION !!!
function playingCards(face, suit) {
    let validFaces = ['A', 'K', 'J', 'Q', '10'];
    if (!((face.charCodeAt(0) >= 50 && face.charCodeAt(0) <= 67) || validFaces.some(x => x === face))) {
        throw new Error('Invalid face!');
    }
    if (!['S', 'H', 'D', 'C'].some(x => x === suit)) {
        throw new Error('Invalid suit!');
    }
    return {
        face,
        suit,
        toString: function () {
            let utf = '';
            switch (this.suit) {
                case 'S':
                    utf = '\u2660';
                    break;
                case 'H':
                    utf = '\u2665';
                    break;
                case 'D':
                    utf = '\u2666';
                    break;
                case 'C':
                    utf = '\u2663';
                    break;
            }
            return this.face + utf;
        }
    };

}

// # 3
function deckOfCards(cards) {
    function createCard(face, suit) {
        let validFaces = ['A', 'K', 'J', 'Q', '10'];
        if (!((face.charCodeAt(0) >= 50 && face.charCodeAt(0) <= 67) || validFaces.some(x => x === face))) {
            throw new Error('Invalid face!');
        }
        if (!['S', 'H', 'D', 'C'].some(x => x === suit)) {
            throw new Error('Invalid suit!');
        }
        return {
            face,
            suit,
            toString: function () {
                let utf = '';
                switch (this.suit) {
                    case 'S':
                        utf = '\u2660';
                        break;
                    case 'H':
                        utf = '\u2665';
                        break;
                    case 'D':
                        utf = '\u2666';
                        break;
                    case 'C':
                        utf = '\u2663';
                        break;
                }
                return this.face + utf;
            }
        };
    }

    let output = [];

    for (let el of cards) {
        el = el.split('');
        let suit = el.pop();
        let face = el.join('');
        try {
            output.push(createCard(face, suit).toString());
        } catch (err) {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }
    console.log(output.join(' '));
};


