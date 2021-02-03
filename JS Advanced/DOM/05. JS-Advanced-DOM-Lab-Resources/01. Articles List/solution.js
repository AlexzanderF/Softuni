function createArticle() {
	let input = document.getElementById('createTitle');
	let content = document.getElementById('createContent');
	let articles = document.getElementById('articles');

	let newArticle = document.createElement('article');
	let heading = document.createElement('h3');
	let text = document.createElement('p');

	if(input.value !== '' && content.value !== ''){
		heading.innerHTML = input.value;
		text.innerHTML = content.value;
		
		newArticle.appendChild(heading);
		newArticle.appendChild(text);
		articles.appendChild(newArticle);
	}

	input.value = '';
	content.value = '';
}