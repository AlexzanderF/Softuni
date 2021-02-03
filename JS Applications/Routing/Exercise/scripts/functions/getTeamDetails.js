export default async function (teamId) {
    let res = await fetch(`https://softuni-test-78b9f.firebaseio.com/teams/${teamId}.json`);
    let data = await res.json();
    return data;
};