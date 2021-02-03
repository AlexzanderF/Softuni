function solve(input) {
    let firstDigit = Number(input.shift());
    let secondDigit = Number(input.shift());
    let thirdDigit = Number(input.shift());    

    for (let a = 2; a <= firstDigit; a+=2){
        for(let b = 2; b <= secondDigit; b++){
            for(let c = 2; c <= thirdDigit; c++){
                if (c % 2 === 0 && (b === 2 || b === 3 || b === 5 || b === 7)){
                    console.log(`${a} ${b} ${c}`);
                }
            }
        }
    }
}

solve([ '3', '5', '5' ]);