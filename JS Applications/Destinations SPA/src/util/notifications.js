function timeout(ms, elem) {
    return new Promise(resolve => setTimeout(function () {
        elem.style.display = 'none';
        resolve();
    }, ms))
}

export function handleError(msg) {
    const errorBox = document.getElementsByClassName('errorBox')[0];
    errorBox.textContent = msg;
    errorBox.style.display = 'block';
    errorBox.addEventListener('click', () => {
        errorBox.style.display = 'none';
    });
}

export async function informationalMsg(msg) {
    const msgBox = document.getElementsByClassName('infoBox')[0];
    msgBox.textContent = msg;
    msgBox.style.display = 'block';
    msgBox.addEventListener('click', () => {
        msgBox.style.display = 'none';
    });
    await timeout(3000, msgBox);
}