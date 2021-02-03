const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const formidable = require('formidable');

const catsData = require('../data/cats.json');
const { type } = require('os');

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;

    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        fs.readFile('./views/addCat.html', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }
            fs.readFile('./data/breeds.json', (err, breedsData) => {
                if (err) {
                    throw err;
                }
                // add all breeds dynamically to the HTML
                let breedsOptions = JSON.parse(breedsData)
                    .map((breed) => `<option value="${breed}">${breed}</option>`)
                    .join('\n');
                data = data.toString().replace('{{catBreeds}}', breedsOptions);

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end();
            });
        });
    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        fs.readFile('./views/addBreed.html', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            const uploadedFile = files.upload;
            if (uploadedFile.size > 0 && !Object.values(fields).some(x => x === '')) {
                const filePath = uploadedFile.path;
                let newPath = path.normalize(path.join(__dirname, '../content/images/')) + uploadedFile.name;

                fs.rename(filePath, newPath, (err) => {
                    if (err) throw err;
                    console.log('Uploaded successfully!');
                });

                fs.readFile('./data/cats.json', (err, data) => {
                    if (err) throw err;

                    let allCats = JSON.parse(data);
                    let newCat = {
                        id: allCats.length + 1,
                        ...fields,
                        image: uploadedFile.name
                    };
                    allCats.push(newCat);
                    fs.writeFile('./data/cats.json', JSON.stringify(allCats), () => {
                        console.log('Cat added successfully!');
                        res.writeHead(302, {
                            location: '/'
                        });
                        res.end();
                    });
                });
            } else {
                console.log('Fill all input fields');
                res.writeHead(204);
                res.end();
            }
        });
    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
        let formData = '';

        req.on('data', (data) => {
            formData += data;
        });

        req.on('end', () => {
            let body = qs.parse(formData);
            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) {
                    throw err;
                }

                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let newJSON = JSON.stringify(breeds);

                fs.writeFile('./data/breeds.json', newJSON, () => console.log('Breed added successfully'));
            });

            res.writeHead(302, {
                location: '/'
            });
            res.end();
        });
    } else if (pathname.includes('/cats-edit') && req.method === 'GET') {
        const catId = Number(pathname.split('/')[2]);
        fs.readFile('./views/editCat.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                res.write('404 Not Found');
                res.end();
                return;
            }
            fs.readFile('./data/cats.json', (err, allCats) => {
                if (err) throw err;
                let currCat = JSON.parse(allCats).find(x => x.id === catId);
                for (let key in currCat) {
                    let regex = new RegExp(`{{${key}}}`, 'g');
                    data = data.replace(regex, currCat[key]);
                }
                let allBreeds = fs.readFileSync('./data/breeds.json');
                let breedsOptions = JSON.parse(allBreeds)
                    .map((breed) => `<option value="${breed}">${breed}</option>`)
                    .join('\n');
                data = data.replace('{{catBreeds}}', breedsOptions)

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end();
            });
        });
    } else if (pathname.includes('/cats-edit') && req.method === 'POST') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            if (!Object.values(fields).some(x => x === '')) {
                const uploadedFile = files.upload;
                const catId = Number(pathname.split('/')[2]);

                fs.readFile('./data/cats.json', (err, data) => {
                    if (err) throw err;

                    let allCats = JSON.parse(data);
                    let currCat = allCats.find(x => x.id === catId);
                    Object.assign(currCat, fields);

                    if (uploadedFile.size > 0) {
                        const filePath = uploadedFile.path;
                        let newPath = path.normalize(path.join(__dirname, '../content/images/')) + uploadedFile.name;
                        try {
                            fs.renameSync(filePath, newPath);
                            fs.rmSync(`./content/images/${currCat.image}`);
                            currCat.image = uploadedFile.name;
                        } catch (error) {
                            console.log(error);
                        }
                    }

                    fs.writeFile('./data/cats.json', JSON.stringify(allCats), (e) => {
                        if (e) throw e;
                        console.log('Cat edited successfully!');
                        res.writeHead(302, {
                            location: '/'
                        });
                        res.end();
                    });
                });
            } else {
                console.log('Fill all input fields');
                res.writeHead(204);
                res.end();
            }
        });
    } else if (pathname.includes('/cats-find-new-home') && req.method === 'GET') {
        fs.readFile('./views/catShelter.html', 'utf8', (err, data) => {
            const catId = Number(pathname.split('/')[2]);
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
                if (err) throw err;

                let currCat = JSON.parse(catsData).find(x => x.id === catId);
                for (let key in currCat) {
                    data = data.replace(`{{${key}}}`, currCat[key]);
                }

                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                res.end();
            });
        });
    } else if (pathname.includes('/cats-find-new-home') && req.method === 'POST') {
        fs.readFile('./data/cats.json', (err, catsData) => {
            if (err) throw err;

            const catId = Number(pathname.split('/')[2]);
            let allCats = JSON.parse(catsData);
            const { image } = allCats.find(x => x.id === catId);
            let filteredCats = allCats.filter(x => x.id !== catId);
            // changes all ids to be in order (correct) after deleting a certain cat
            fs.rm(`./content/images/${image}`, (e) => {
                if (e) throw e;
            });
            for (let i = catId - 1; i < filteredCats.length; i++) {
                filteredCats[i].id = i + 1;
            }

            fs.writeFile('./data/cats.json', JSON.stringify(filteredCats), (e) => {
                if (e) throw e;
                console.log(`Cat deleted!`);
                res.writeHead(302, {
                    location: '/'
                });
                res.end();
            });
        });
    } else {
        return true;
    }
}