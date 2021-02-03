function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    const commitsList = document.getElementById('commits');

    if (username === '' || repo === '') {  // no input handling
        return;
    }

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res);
                // throw res;   <- also works
            }
            return res.json();
        })
        .then(data => {
            data.forEach(x => {
                commitsList.innerHTML += `<li>${x.commit.author.name}: ${x.commit.message}</li>`;
            });
        })
        .catch(err => {
            commitsList.innerHTML = `<li>Error: ${err.status} (${err.statusText})</li>`;
        });
}