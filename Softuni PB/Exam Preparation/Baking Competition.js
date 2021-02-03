function solve(input) {
    let people = Number(input.shift());
    let cookiesCount = 0;
    let cakesCount = 0;
    let wafflesCount = 0;
    let sum = 0;
    let bakeriesSum=0;

    for (let i = 1; i <= people; i++){
        let name = input.shift();
        let type = input.shift();
        while(type !== "Stop baking!"){
            let amount = Number(input.shift());
            switch (type){
                case "cookies":
                    sum += amount * 1.50;
                    cookiesCount += amount;
                    break;
                case "cakes":
                    sum += amount * 7.80;
                    cakesCount += amount;
                    break;
                case "waffles":
                    sum += amount * 2.30;
                    wafflesCount += amount;
                    break;
            }

            type = input.shift();
        }
        console.log(`${name} baked ${cookiesCount} cookies, ${cakesCount} cakes and ${wafflesCount} waffles.`);
        bakeriesSum += cookiesCount + cakesCount + wafflesCount;
        cookiesCount = 0;
        cakesCount = 0;
        wafflesCount = 0;


    }
    console.log(`All bakery sold: ${bakeriesSum}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);


}

solve([
    '3',            'Iva',
    'cookies',      '5',
    'cakes',        '3',
    'Stop baking!', 'George',
    'cakes',        '7',
    'waffles',      '2',
    'Stop baking!', 'Ivan',
    'cookies',      '6',
    'Stop baking!'
  ]
  );