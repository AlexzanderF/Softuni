function solve(input) {
    let n = Number(input.shift());
    let obj = {};
    for (let i = 0; i < n; i++) {
        let line = input.shift();
        line = line.split("<->");
        let plant = line[0];
        let rarity = Number(line[1]);
        if (!obj.hasOwnProperty(plant)) {
            obj[plant] = {};
            obj[plant].rarity = rarity;
            obj[plant].rating = [];
        } else {
            bj[plant].rarity = rarity;
        }
    }
    for (let line of input) {
        if (line === "Exhibition") {
            break;
        }
        line = line.split(": ");
        if (line[0] === "Rate") {
            let [plant, rating] = line[1].split(" - ");
            rating = Number(rating);
            if (obj.hasOwnProperty(plant)) {
                obj[plant].rating.push(rating);
            } else {
                console.log("error");
            }
        } else if (line[0] === "Update") {
            let [plant, newRarity] = line[1].split(" - ");
            newRarity = Number(newRarity);
            if (obj.hasOwnProperty(plant)) {
                obj[plant].rarity = newRarity;
            } else {
                console.log("error");
            }
        } else if (line[0] === "Reset") {
            let plant = line[1];
            if (obj.hasOwnProperty(plant)) {
                obj[plant].rating = [];
            } else {
                console.log("error");
            }
        } else {
            console.log("error");
        }
    }
    obj = Object.entries(obj);
    for (let pair of obj) {
        let ratings = pair[1].rating;
        let ratingsSum = 0;
        let ratingsCount = 0;
        if (ratings.length > 0) {
            ratings.forEach(el => {
                ratingsSum += el;
                ratingsCount++;
            });
            ratings = (ratingsSum / ratingsCount);
            pair[1].rating = ratings;
        } else {
            pair[1].rating = 0;
        }
    }
    obj = obj.sort((a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating);
    console.log("Plants for the exhibition:");
    for (let pair of obj) {
        console.log(`- ${pair[0]}; Rarity: ${pair[1].rarity}; Rating: ${pair[1].rating.toFixed(2)}`);
    }
}

solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Exhibition'
]
);