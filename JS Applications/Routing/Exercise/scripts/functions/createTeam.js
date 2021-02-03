export default async function (name, comment) {
    const url = 'https://softuni-test-78b9f.firebaseio.com/teams';
    const { email } = JSON.parse(localStorage.getItem('userInfo'));
    return fetch(url + '.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            comment,
            creator: email,
            members: [email]
        })
    });
};

// const id = database.ref('teams/').push().getKey();