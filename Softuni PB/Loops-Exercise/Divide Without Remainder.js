function solve(input){
    let n = Number(input.shift());
    let D1count = 0;
    let D2count = 0;
    let D3count = 0;

    for (let i = 1; i <= n ; i++){
        let num = Number(input.shift());
        if (num % 2 == 0){
            D1count += 1;
        }
        if (num % 3 == 0){
            D2count += 1;
        }
        if(num % 4 == 0){
            D3count += 1;
        }
    }

    p1 = (D1count / n * 100).toFixed(2) + "%";
    p2 = (D2count / n * 100).toFixed(2) + "%";
    p3 = (D3count / n * 100).toFixed(2) + "%";

    console.log(p1);
    console.log(p2);
    console.log(p3);
}

solve([10,
    680,
    2,
    600,
    200,
    800,
    799,
    199]);