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
        return res;
    } catch (error) {
        throw error;
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
        return res;
    } catch (error) {
        throw error;
    }
}

export const logout = async (ctx) => {
    try {
        await auth.signOut();
        localStorage.removeItem('currUser');
        ctx.redirect('#/login');
    } catch (err) {
        throw err;
    }
}