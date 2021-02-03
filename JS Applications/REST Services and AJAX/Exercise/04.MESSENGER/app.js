function attachEvents() {
    let url = `https://rest-messanger.firebaseio.com/messanger.json`;

    const nameInput = document.getElementById('author');
    let msgInput = document.getElementById('content');

    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', () => {
        let author = nameInput.value;
        let content = msgInput.value;

        if(author === '' || content === ''){
            return;
        }

        let obj = { author, content };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).catch(err => console.log(err));

        nameInput.value = null;
        msgInput.value = null;
    });

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', () => {
        const textarea = document.getElementsByTagName('textarea')[0];

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(Object.values(data));
                textarea.textContent = Object.values(data).map(x => `${x.author}: ${x.content}`).join('\n');
            })
            .catch(err => console.log(err));
    });

}

attachEvents();