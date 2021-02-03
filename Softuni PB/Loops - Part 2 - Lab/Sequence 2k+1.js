function solve(input){
    let n = Number(input.shift());
    let k = 1;                     // първото число от редицата(1), всяко следващо е 2k + 1
    while(n >= k){
        console.log(k);
        k = k*2 + 1;

    }
}

solve([ '10' ]);