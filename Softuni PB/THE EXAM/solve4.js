function solve(input) {
    let n = Number(input.shift());
    let p1Count = 0;
    let p2Count = 0;
    let p3Count = 0;

    for (let i = 1; i <= n; i++){
        let num = Number(input.shift());
        if(num % 2 === 0){
            p1Count++ ;
        }
        if(num % 3 === 0){
            p2Count++;
        }
        if(num % 4 === 0){
            p3Count++;
        }

    }

    let p1 = (p1Count / n * 100).toFixed(2);
    let p2 = (p2Count / n * 100).toFixed(2);
    let p3 = (p3Count / n * 100).toFixed(2);

    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
}