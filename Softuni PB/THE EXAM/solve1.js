function solve(input) {
    let skumriq = Number(input.shift());
    let caca = Number(input.shift());
    let kgPalamud = Number(input.shift());
    let kgSafrid = Number(input.shift());
    let midi = Number(input.shift()) * 7.50;
    let bill = 0;

    let palamud = skumriq + 0.60 * skumriq;
    let palamudSum = palamud * kgPalamud;
    let safrid = caca + caca * 0.80;
    let safridSum = safrid * kgSafrid;

    bill = palamudSum + safridSum + midi;
    console.log(bill.toFixed(2));
    




}