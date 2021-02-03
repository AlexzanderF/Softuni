function solve(input) {
    let income = Number(input.shift());
    let months = Number(input.shift());
    let personal = Number(input.shift());
    
    let aside = 0.3 * income + personal;
    let savingsMonthly = income - aside;
    let allSavings = months * savingsMonthly;
    let percent = (savingsMonthly / income) * 100;

    console.log(`She can save ${percent.toFixed(2)}%`);
    console.log(allSavings.toFixed(2));
}