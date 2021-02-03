export default function (teamId, dataObj) {
    return fetch(`https://softuni-test-78b9f.firebaseio.com/teams/${teamId}.json`, {
        method: 'PUT',
        body: JSON.stringify(dataObj)
    });
};