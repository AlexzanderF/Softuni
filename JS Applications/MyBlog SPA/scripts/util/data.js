import { getCurrUserInfo } from "./auth.js";

export const createPost = async (postObj) => {
    try {
        postObj.creator = getCurrUserInfo().email;
        await fetch('https://my-blog-spa.firebaseio.com/posts.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj)
        });
    } catch (err) {
        console.error(err);
    }
}

export const getAllPosts = async () => {
    try {
        const currUser = getCurrUserInfo();
        let res = await fetch('https://my-blog-spa.firebaseio.com/posts.json');
        let data = Object.entries(await res.json());
        data = data.filter(x => x[1].creator === currUser.email);
        data = data.map(([id, values]) => {
            return { id, ...values };
        });
        return data;
    } catch (err) {
        console.error(err);
    }
}

export const getOnePost = async (id) => {
    try {
        let res = await fetch(`https://my-blog-spa.firebaseio.com/posts/${id}.json`);
        let data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updatePost = async (id, editedObj) => {
    try {
        let postObj = await getOnePost(id);
        Object.assign(postObj, editedObj);
        await fetch(`https://my-blog-spa.firebaseio.com/posts/${id}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postObj)
        });
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = async (id) => {
    try {
        await fetch(`https://my-blog-spa.firebaseio.com/posts/${id}.json`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(error);
    }
}