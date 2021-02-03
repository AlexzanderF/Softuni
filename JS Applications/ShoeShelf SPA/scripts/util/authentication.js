export const login = async (email, password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(email, password);
        const { uid } = res.user;
        localStorage.setItem('currUser', JSON.stringify({ email, uid }));
    } catch (error) {
        console.log(error)
    }
};

export const register = async (email, password) => {
    try {
        let res = await auth.createUserWithEmailAndPassword(email, password);
        const { uid } = res.user;
        localStorage.setItem('currUser', JSON.stringify({ email, uid }));
    } catch (error) {
        console.log(error)
    }
};

export const getCurrUserInfo = () => {
    if (localStorage['currUser']) {
        return JSON.parse(localStorage['currUser']);
    } else {
        return;
    }
}

export const logout = () => {
    localStorage.removeItem('currUser');
    auth.signOut()
        .catch(err => console.log(err));
}

