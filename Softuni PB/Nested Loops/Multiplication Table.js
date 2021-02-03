function solve(input) {
        for (let x = 1; x <= 10; x++){
            for(let i = 1; i <= 10; i++){
                let result = x * i;
                console.log(`${x} * ${i} = ${result}`);               
            }
        }
}

solve();

