function solve(input){
    let n = Number(input.shift());
    let p1 = p2 = p3 = p4 = p5 = 0;
    let D1count = 0;
    let D2count = 0;
    let D3count = 0;
    let D4count = 0;
    let D5count = 0;

    for (let i = 1; i <= n; i++){
        let num = Number(input.shift());
        if(num < 200){
            D1count += 1;
        }
        if(num >= 200 && num < 400){
            D2count += 1;
        }
        if(num >= 400 && num < 600){
            D3count += 1;
        }
        if(num >= 600 && num < 800){
            D4count += 1;
        }
        if(num >= 800){
            D5count += 1;
        }
    }

    p1 = D1count / n * 100;
    p2 = D2count / n * 100;
    p3 = D3count / n * 100;
    p4 = D4count / n * 100;
    p5 = D5count / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
   
}
solve([3,
    1,
    2,
    999]);