function attachEvents() {
    const firebaseUrl = `https://blog-apps-c12bf.firebaseio.com/`;
    const selectBox = document.getElementById('posts');

    const loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', () => {
        let postsUrl = firebaseUrl + 'posts.json';
        selectBox.innerHTML = null;

        async function getPosts() {
            let res = await fetch(postsUrl);
            if (!res.ok) {
                throw res;
            }
            let data = await res.json();
            return data;
        }

        getPosts().then(data => {
            for (let key in data) {
                let option = document.createElement('option');
                option.value = key;
                option.textContent = data[key].title;
                selectBox.appendChild(option);
            }
        }).catch(err => console.log(`Error: ${err}`));
    });

    const viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', () => {
        let value = selectBox.value;
        let postsUrl = firebaseUrl + `posts/${value}.json`;

        const postTitle = document.getElementById('post-title');
        const postBody = document.getElementById('post-body');

        fetch(postsUrl)
            .then(res => res.json())
            .then(data => {
                let postId = data.id;

                fetch(firebaseUrl + 'comments.json')
                    .then(res => res.json())
                    .then(comments => {
                        postTitle.textContent = data.title;
                        postBody.textContent = data.body;
                        document.getElementById('post-comments').innerHTML = null;
                        Object.values(comments).forEach(x => {
                            if (x.postId === postId) {
                                document.getElementById('post-comments').innerHTML += `<li>${x.text}</li>`;
                            }
                        });
                    });
            });

    });
}

attachEvents();