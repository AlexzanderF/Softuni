function solve(input) {
    let numbers = input.split(" ").map(Number);

    let sum = 0;
    numbers.forEach(x => sum += x);

    let average = (sum / numbers.length).toFixed(2);

    let greaterThanAvg = [];
    numbers.forEach(x => {
        if (x > average) {
            greaterThanAvg.push(x);
        }
    });

    if (greaterThanAvg.length < 1) {
        console.log("No");
    } else {
        let topFive = [];
        topFive = greaterThanAvg.sort((a, b) => b - a);
        topFive.length = Math.min(topFive.length, 5);
        console.log(topFive.join(" "));
    }

}

solve('-1');