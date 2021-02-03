function solve(input) {
    let n = Number(input.shift());
    let result = "";

    for (let i = 1; i <= 9; i++){
       
        for(let a = 1; a <= 9; a++){
           
            for(let b = 1; b <= 9; b++){
                
                for(let c = 1; c <= 9; c++){
                    if (n % i === 0 && n % a === 0 && n % b === 0 && n % c === 0){
                        result += `${i}${a}${b}${c} `;
                    }
                }
            }
        }
    }
    console.log(result);

}

solve([3]);