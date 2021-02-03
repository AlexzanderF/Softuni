function solve(input) {
    let n = Number(input.shift());
    let m = Number(input.shift());
    let result = "";

    for(let i = n; i <= m; i ++){
        let num = `${i}`;
        let oddSum = 0;
        let evenSum = 0;
        for(let a = 0; a < num.length; a++){
            let current = num.charCodeAt(a);
            if (a % 2 === 0){
                evenSum += current;
            } else{
                oddSum += current;
            }
        }
        if(evenSum === oddSum){
            result += `${num} `;
        }
    }
    console.log(result);

}

solve([100000,
    100050
    ]);