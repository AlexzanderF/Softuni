function attachEventsListeners() {
    const btns = Array.from(document.getElementsByTagName('input')).filter(x => x.type === 'button');
    const inputFields = Array.from(document.getElementsByTagName('input')).filter(x => x.type === 'text');

    console.log(inputFields);
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let input = e.target.previousElementSibling;
            let id = input.id;
            let remaining = inputFields.filter(x => x.id !== id);
            let days = 0;
            let hours = 0;
            let min = 0;
            let sec = 0;
            switch (id) {
                case 'days':
                    days = Number(input.value);
                    hours = days * 24;
                    min = hours * 60;
                    sec = min * 60;
                    break;
                case 'hours':
                    hours = Number(input.value);
                    days = hours / 24;
                    min = hours * 60;
                    sec = min * 60;
                    break;
                case 'minutes':
                    min = Number(input.value);
                    hours = min / 60;
                    days = hours / 24;
                    sec = min * 60;
                    break;
                case 'seconds':
                    sec = Number(input.value);
                    min = sec / 60;
                    hours = min / 60;
                    days = hours / 24;
                    break;
            }
            for (let field of remaining) {
                switch (field.id) {
                    case 'days':
                        field.value = days;
                        break;
                    case 'hours':
                        field.value = hours;
                        break;
                    case 'minutes':
                        field.value = min;
                        break;
                    case 'seconds':
                        field.value = sec;
                        break;
                }
            }
        });
    });
}