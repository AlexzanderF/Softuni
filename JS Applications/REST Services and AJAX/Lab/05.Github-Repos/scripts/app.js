function loadRepos() {
	let username = document.getElementById('username').value;
	let url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(res => {
			if (res.status !== 200) {
				throw new Error(`${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.then(data => {
			document.getElementById('repos').innerHTML = data.map(x => `<li><a href =${x["html_url"]}>${x["full_name"]}</a></li>`).join('');
		})
		.catch(err => {
			document.getElementById('repos').innerHTML = `<li>${err}</li>`;
		});
		
	document.getElementById('username').value = null;
}