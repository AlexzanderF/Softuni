export default function (teamId) {
    fetch(`https://softuni-test-78b9f.firebaseio.com/teams/${teamId}.json`, {
        method: 'DELETE'
    });
};