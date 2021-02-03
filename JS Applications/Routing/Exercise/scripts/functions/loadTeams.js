export default async function () {
    let data = await (await fetch('https://softuni-test-78b9f.firebaseio.com/teams.json')).json();
    data = Object.entries(data);
    return data;
};