function getArticleGenerator(articles) {
    const div = document.getElementById('content');
    function show() {
        if (articles.length > 0) {
            let text = articles.shift();
            let newArticle = document.createElement('article');
            newArticle.textContent = text;
            div.appendChild(newArticle);
        }
    }
    return show;
}