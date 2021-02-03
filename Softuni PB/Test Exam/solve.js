function solve(input) {
    let food = Number(input.shift());
    let souveniers = Number(input.shift());
    let hotel = Number(input.shift());
    let neededMoney = 0;

    let fuel = 54.39;
    neededMoney = 3 * food + 3 * souveniers;
    let day1 = hotel * 0.9;
    let day2 = hotel * 0.85;
    let day3 = hotel * 0.8;
    neededMoney += (day1 + day2 + day3 + fuel);
    console.log(`Money needed: ${neededMoney.toFixed(2)}`);





}