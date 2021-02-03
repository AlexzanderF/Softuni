function solve() {
    const addBtns = Array.from(document.getElementsByClassName('add-product'));
    const checkoutBtn = document.getElementsByClassName('checkout')[0];
    const products = Array.from(document.getElementsByClassName('product'));
    let cart = document.getElementsByTagName('textarea')[0];

    let totalPrice = 0;
    let list = [];

    function adding(i) {
        let handler = function () {
            const name = products[i].children[1].firstElementChild.textContent;
            const price = products[i].children[3].textContent;
            let msg = `Added ${name} for ${price} to the cart.\n`;
            cart.textContent += msg;

            totalPrice += Number(price);
            if (!list.includes(name)) {
                list.push(name);
            }
        };
        return handler;
    }

    addBtns.forEach((btn, i) => {
        btn.addEventListener('click', adding(i));
    });

    checkoutBtn.addEventListener('click', () => {
        let msg = `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.`;
        cart.textContent += msg;
        cart = null;
        addBtns.forEach((btn, i) => {
            btn.removeEventListener('click', adding(i));
        });
    });

}