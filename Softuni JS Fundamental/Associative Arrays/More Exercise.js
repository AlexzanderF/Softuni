// # 1
function garage(input) {
    let garages = new Map();
    for (let line of input) {
        let [number, info] = line.split(" - ");
        if (!garages.has(number)) {
            garages.set(number, [info])
        } else {
            let newCarsInfo = garages.get(number);
            newCarsInfo.push(info);
            garages.set(number, newCarsInfo);
        }

    }
    for (let kvp of garages) {
        console.log(`Garage № ${kvp[0]}`);
        for (let car of kvp[1]) {
            console.log(`--- ${car.replace(/: /g, " - ")}`);
        }
    }
}

// # 2
function armies(input) {
    let armies = {};
    for (let line of input) {
        if (line.includes("arrives")) {
            line = line.split(" ");
            line.pop();
            let leader = line.join(" ");
            armies[leader] = {};
        } else if (line.includes(":")) {
            let leader = line.split(":").shift();
            if (armies.hasOwnProperty(leader)) {
                line = line.split(": ")[1];
                let [armyName, armyCount] = line.split(", ");
                armies[leader][armyName] = Number(armyCount);
            }
        } else if (line.includes("+")) {
            let [armyName, armyCount] = line.split(" + ");
            let exists = false;
            let leader = "";
            for (let key in armies) {
                if (armies[key].hasOwnProperty(armyName)) {
                    exists = true;
                    leader = key;
                    break;
                }
            }
            if (exists) {
                armyCount = Number(armyCount);
                armies[leader][armyName] += armyCount;
            }
        } else {
            line = line.split(" ");
            line.pop();
            let leader = line.join(" ");
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        }
    }
    for (let leader in armies) {
        let totalCount = 0;
        for (let army in armies[leader]) {
            totalCount += armies[leader][army];
        }
        armies[leader].totalCount = totalCount;
    }
    armies = Object.entries(armies);
    armies = armies.sort((a, b) => b[1].totalCount - a[1].totalCount);
    armies.forEach(pair => {
        console.log(`${pair[0]}: ${pair[1].totalCount}`);
        pair[1] = Object.entries(pair[1]).sort((a, b) => b[1] - a[1]);
        for (let armyPair of pair[1]) {
            if (armyPair[0] != 'totalCount') {
                console.log(`>>> ${armyPair[0]} - ${armyPair[1]}`);
            }
        }
    });
}

// # 3
function comments(input) {
    let storage = {};
    let userList = [];
    for (let line of input) {
        if (line.includes("user")) {
            line = line.split(" ");
            let name = line.pop();
            userList.push(name);
        } else if (line.includes("article")) {
            line = line.split(" ");
            let article = line.pop();
            // console.log(article);
            storage[article] = {};
        } else if (line.includes("posts")) {
            line = line.split(" posts on ");
            let user = line.shift();
            line = line[0].split(": ");
            let article = line.shift();
            line = line[0].split(", ");
            let title = line[0];
            let content = line[1];
            // console.log(content);
            if (userList.includes(user) && storage.hasOwnProperty(article)) {
                storage[article][user] = {};
                storage[article][user][title] = content;
            }
        }
    }
    storage = Object.entries(storage).sort((a, b) => {
        return Object.values(b[1]).length - Object.values(a[1]).length;
    });
    // console.log(storage);
    for (let pair of storage) {
        console.log(`Comments on ${pair[0]}`);
        pair[1] = Object.entries(pair[1]).sort((a, b) => {
            return a[0].localeCompare(b[0]);
        });
        // console.log(pair[1]);
        for (let userComPair of pair[1]) {
            console.log(`--- From user ${userComPair[0]}: ${Object.keys(userComPair[1])[0]} - ${Object.values(userComPair[1])[0]}`);
        }
    }
}

// # 4
function bookShelf(input) {
    let shelfs = {};
    for(let line of input){
        if(line.includes("->")){
            let [id, genre] = line.split(" -> ");
            if(!shelfs.hasOwnProperty(id)){
                shelfs[id] = {};
                shelfs[id].genre = genre;
                shelfs[id].books =  []; 
            }
        } else if(line.includes(":")){
            let [book, genre] = line.split(", ");
            for(let key in shelfs){
                if(shelfs[key].genre === genre){
                    shelfs[key].books.push(book);
                }
            }
        }
    }
    shelfs = Object.entries(shelfs).sort((a, b) => b[1].books.length - a[1].books.length);
    for(let pair of shelfs){
        console.log(`${pair[0]} ${pair[1].genre}: ${pair[1].books.length}`);
        let books = pair[1].books.sort((a, b) => a.localeCompare(b));
        for(let book of books){
            console.log(`--> ${book}`);
        }
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);