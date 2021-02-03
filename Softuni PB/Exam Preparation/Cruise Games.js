function solve(input) {
    let name = input.shift();
    let games = Number(input.shift());

    let badmSum = 0;
    let badmCount = 0;
    let badmAvg = 0;
    let tennisSum = 0;
    let tennisCount = 0;
    let tennisAvg = 0;
    let volleySum = 0;
    let volleyCount = 0;
    let volleyAvg = 0;

    for(let i = 1; i <= games; i++){
        let game = input.shift();
        let points = Number(input.shift());

        if (game === "volleyball"){
            volleySum += (points + 0.07 * points);
            volleyCount++;
        } else if (game === "tennis"){
            tennisSum += (points + 0.05 * points);
            tennisCount++;
        } else{
            badmSum += (points + 0.02 * points);
            badmCount++;
        }

    }

    volleyAvg = volleySum / volleyCount;
    tennisAvg = tennisSum / tennisCount;
    badmAvg = badmSum / badmCount;

    if (volleyAvg >= 75 && tennisAvg >= 75 && badmAvg >= 75){
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(volleySum + tennisSum + badmSum)} points.`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(volleySum + tennisSum + badmSum)}.`);
    }


}

solve(["Annie",
    5,
    "badminton",
    34,
    "tennis",
    76,
    "badminton",
    10,
    "volleyball",
    62,
    "badminton",
    56
    ]);