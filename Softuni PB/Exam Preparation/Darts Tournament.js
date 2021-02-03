function solve(input) {
    let startingPoints = Number(input.shift());
    let won = false;
    let moves = 0;

    while (startingPoints > 0){
        let sector = input.shift();
        let points = Number(input.shift());
        moves++;
        
        switch (sector) {
            case "number section":
                startingPoints -= points;
                break;
            case "double ring":
                startingPoints -= points * 2;
                break;
            case "triple ring":
                startingPoints -= points * 3;
                break;
            case "bullseye":
                won = true;
                console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`);
                break;
        
        }
        if(won){
            break;
        }

        if (startingPoints < 0){
            console.log(`Sorry, you lost. Score difference: ${Math.abs(startingPoints)}.`);
            break;
        }
    }

    if (startingPoints === 0){
        console.log(`Congratulations! You won the game in ${moves} moves!`);
    }

}

solve([ '101', 'triple ring', '7', 'double ring', '19', 'bullseye', '' ]

  

  );