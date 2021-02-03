export function getCurrUserInfo() {
    if (localStorage['currUser']) {
        return JSON.parse(localStorage['currUser']);
    }
    return null;
}

export const login = async (email, password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(email, password);
        const { uid } = res.user;
        localStorage.setItem('currUser', JSON.stringify({
            email,
            uid
        }));
    } catch (error) {
        console.error(error);
    }
}

export const register = async (email, password) => {
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        const { uid } = res.user;
        localStorage.setItem('currUser', JSON.stringify({
            email,
            uid
        }));
    } catch (error) {
        console.error(error);
    }
}

export const logout = async (ctx) => {
    try {
        await auth.signOut();
        localStorage.removeItem('currUser');
        ctx.redirect('#/home');
    } catch (err) {
        console.error(err);
    }
}