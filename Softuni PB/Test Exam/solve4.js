function solve(input) {
    let start = Number(input.shift());
    let stops = Number(input.shift());
    let special = 0;

    for(let i = 1; i <= (stops); i++){
        let out = Number(input.shift());
        let come = Number(input.shift());
        if(i % 2 != 0){   //even
            start -= out;
            start += (come + 2);

        } else {
            start -= (out + 2);
            start += come;
        }

    }
    console.log(`The final number of passengers is : ${start}`);
}

solve([20,
    2,
    10,
    5,
    5,
    3
    ]);