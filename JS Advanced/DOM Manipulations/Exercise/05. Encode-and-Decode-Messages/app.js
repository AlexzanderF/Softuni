function encodeAndDecodeMessages() {
    const encodeBtn = document.getElementsByTagName('button')[0];
    const decodeBtn = document.getElementsByTagName('button')[1];
    const receiverInput = decodeBtn.parentElement.children[1];

    encodeBtn.addEventListener('click', (e) => {
        const senderInput = e.target.parentElement.children[1];
        let str = senderInput.value.split('')
            .map(char => {
                let code = char.charCodeAt() + 1;
                char = String.fromCharCode(code);
                return char;
            })
            .join('');

        senderInput.value = null;
        receiverInput.value = str;
    });
    decodeBtn.addEventListener('click', (e) => {
        let str = receiverInput.value.split('')
            .map(char => {
                let code = char.charCodeAt() - 1;
                char = String.fromCharCode(code);
                return char;
            })
            .join('');

        receiverInput.value = str;
    });
}