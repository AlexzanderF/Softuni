function solve(input){
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());
    let moved = input.shift();
    let takenSpace = 0;
    let space = w * l * h;
    while(moved !== "Done"){
        moved = Number(moved);
        takenSpace += moved;
        if(takenSpace > space){
            console.log(`No more free space! You need ${takenSpace - space} Cubic meters more.`);
            break;
        }

        moved = input.shift();
    }
    if(space > takenSpace){
        console.log(`${space - takenSpace} Cubic meters left.`); 
    }

}

solve([
    '10', '10',  '2',
    '20', '20',  '20',
    '20', '122', ''
  ]);