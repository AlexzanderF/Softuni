const fs = require('fs');
const url = require('url');
// const path = require('path');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/' && req.method === 'GET') {
        fs.readFile('./views/home/index.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }
            fs.readFile('./data/cats.json', (err, catsData) => {
                if (err) {
                    throw err;
                }

                let catsList = JSON.parse(catsData)
                    .map((cat) => {
                        return `<li>
                        <img src="./content/images/${cat.image}">
                        <h3>${cat.name}</h3>
                        <p><span>Breed: </span>${cat.breed}</p>
                        <p><span>Description: </span>${cat.description}</p>
                        <ul class="buttons">
                            <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                            <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
                        </ul>
                        </li>`;
                    })
                    .join('\n');
                data = data.replace('{{allCats}}', catsList);

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end();
            });
        });
    } else {
        // needs to return true because the upper code doesn't return anything(undefined) and this is the only way for the IF statement(in the loop) in the "index.js" to work !!!
        return true;
    }
};