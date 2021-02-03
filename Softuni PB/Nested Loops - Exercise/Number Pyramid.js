function solve(input) {
    let n = Number(input.shift());
    let current = 1;
    let print = "";
    let bigger = false;

    for (let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col++){
            if(current > n){
                bigger = true;
                break;
            }
            print += `${current} `;
            current ++;
        }
        console.log(print);
        print = "";
        if(bigger){
            break;
        }
    }

}

solve();