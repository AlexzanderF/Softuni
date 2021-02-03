function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for(let f = floors; f > 0; f--){
        let print = ``;
        if (f === floors) {  // check for last f= floor - 1 -> L
            for(let r = 0; r < rooms; r++){
                print += `L${f}${r} `;
            } 
        } else if (f % 2 != 0){ // A
            for(let r = 0; r < rooms; r++){
                print += `A${f}${r} `;
            }
        } else if(f % 2 === 0){  // O
            for(let r = 0; r < rooms; r++){
                print += `O${f}${r} `;
            }
        }    
        console.log(print);
    }

}

solve([ '6', '4' ]);