import { getCurrUserInfo } from "./auth.js";

const URL = 'https://destinations-spa-default-rtdb.firebaseio.com/destinations';

export const getById = async (id) => {
    try {
        let res = await fetch(URL + `/${id}.json`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getAll = async () => {
    try {
        let res = await fetch(URL + '.json');
        let data = Object.entries(await res.json());
        data = data.map(([id, values]) => {
            return { id, ...values };
        });
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const add = async (obj) => {
    try {
        obj.creator = getCurrUserInfo().email;
        // obj.likes = [];
        await fetch(URL + '.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const update = async (id, editedObj) => {
    try {
        let existingObj = await getById(id);
        Object.assign(existingObj, editedObj);
        await fetch(URL + `/${id}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(existingObj)
        });
    } catch (error) {
        console.error(error);
    }
}

export const deleteById = async (id) => {
    try {
        await fetch(URL + `/${id}.json`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function validateParams(params) {
    let { destination, city, duration, departureDate, imgUrl } = params;
    duration = Number(duration);
    if (!destination.match(/^[0-9]+$/g) && !city.match(/^[0-9]+$/g) && !imgUrl.match(/^[0-9]+$/g) &&
        typeof (departureDate) === 'string' && typeof (duration) === 'number' &&
        duration >= 1 && duration <= 100) {
        return true;
    }
    return false;
}