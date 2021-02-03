export default function (key, value) {
    let exsistingObj = JSON.parse(localStorage.getItem('userInfo'));
    exsistingObj[key] = value;
    localStorage.setItem('userInfo', JSON.stringify(exsistingObj));
};
