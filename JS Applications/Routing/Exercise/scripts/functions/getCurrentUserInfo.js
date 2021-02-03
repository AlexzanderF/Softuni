export default function() {
    if (localStorage.getItem('userInfo')) {
        const { email } = JSON.parse(localStorage.getItem('userInfo'));
        this.loggedIn = true;
        this.email = email;
    }
};