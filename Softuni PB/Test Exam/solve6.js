function solve(input) {
    let N = Number(input.shift());
    let num = `${N}`;

    for(let c = 1; c <= N % 10; c++){
        for (let b = 1; b <= num.charAt(num.length - 2); b++){
            for(let a = 1; a <= num.charAt(num.length - 3); a++){
                console.log(`${c} * ${b} * ${a} = ${c * b * a};`);
            }
        }
    }
}

solve(["324"]);