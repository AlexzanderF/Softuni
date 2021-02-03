function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let print = "";

    for (let a = 1; a < n; a++){
        for(let b = 1; b < n; b++){
            for(let c = 97; c < (97 + l); c++){
                for(let d = 97; d < (97 + l); d++){
                    for(let e = 1 ; e <= n; e++){
                        if(a < e && b < e){
                           print += `${a}${b}${String.fromCharCode(c)}${String.fromCharCode(d)}${e} `;
                        }
                }
            }
        }
    }
    console.log(print);

}

solve([2,4]);