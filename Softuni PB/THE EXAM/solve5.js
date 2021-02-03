function solve(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());
    let space = w*l*h;
    let command = input.shift();

    while(command != "Done"){
        command = Number(command);
        space -= command;
        if(space <= 0){
            break;
        }

        command = input.shift();
    }

    if (command === "Done"){
        console.log(`${space} Cubic meters left.`);
    }
    if(space <= 0){
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    }

}