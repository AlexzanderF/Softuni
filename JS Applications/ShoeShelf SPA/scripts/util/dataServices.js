const baseUrl = 'https://shoe-shelf-23f55.firebaseio.com/shoes';

export const loadShoes = async () => {
    try {
        let res = await fetch(baseUrl + '.json');
        let data = await res.json();
        if (data) {
            data = Object.entries(data).map(([id, values]) => {
                return { id, ...values };
            });
            return data;
        }
    } catch (error) {
        console.log(error);
    }
}

export const createNewShoe = async (shoeObj) => {
    try {
        let res = await fetch(baseUrl + '.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shoeObj)
        });

        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getShoeDetails = async (id) => {
    const currUrl = baseUrl + `/${id}.json`;
    let res = await fetch(currUrl);
    let data = await res.json();
    return data;
}

export const deleteShoe = async (e) => {
    try {
        const id = location.hash.split('/')[2];
        await fetch(`https://shoe-shelf-23f55.firebaseio.com/shoes/${id}.json`, {
            method: 'DELETE'
        })
        location.hash = '#/home';
    } catch (error) {
        console.log(error);
    }
}

export const buyShoe = async (data, id, email) => {
    if (!data.bought) {
        let res = await fetch(baseUrl + `/${id}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bought: [email] })
        })
    } else {
        let updatedBought = [...data.bought, email];
        let res = await fetch(baseUrl + `/${id}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bought: updatedBought })
        })
    }
}

export const editShoe = async (id, shoeObj) => {
    try {
        await fetch(baseUrl + `/${id}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(shoeObj)
        });
    } catch (error) {
        console.log(error);
    }
}

export const sortShoes = (a, b) => {
    if (a.bought && b.bought) {
        return b.bought.length - a.bought.length;
    } else if (a.bought) {
        return -1;
    } else {
        return 1;
    }
}