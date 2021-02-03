import { getCurrUserInfo } from "./auth.js";

const URL = 'https://movies-spa-54c0b-default-rtdb.europe-west1.firebasedatabase.app/movies';

export const addMovie = async (movieObj) => {
    try {
        movieObj.creator = getCurrUserInfo().email;
        movieObj.likes = [];
        await fetch(URL + '.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieObj)
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getAllMovies = async () => {
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