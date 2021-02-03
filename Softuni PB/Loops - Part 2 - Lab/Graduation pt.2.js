function solve(input) {
    let name = input.shift();
    let counter = 1;
    let gradesSum = 0;
    let penalty = 0;
    while (counter <= 12) {
        let grade = Number(input.shift());

        if (grade >= 4.00) {
            gradesSum += grade;
            counter++;
        } else {
            penalty++;
        }

        if (penalty > 1) {
            console.log(`${name} has been excluded at ${counter} grade`);
            break;
        }

    }

    if (penalty <= 1) {
        let average = gradesSum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
}

solve([

]);