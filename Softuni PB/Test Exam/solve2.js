function sovle(input) {
    let w = Number(input.shift());
    let l = Number(input.shift());
    let h = Number(input.shift());
    let peopleH = Number(input.shift()) + 0.4;

    let space = w * l * h;
    let room = peopleH * 2 *2;
    let spaceFor = Math.floor(space / room);

    if (spaceFor < 3){
        console.log(`The spacecraft is too small.`);
    }else if (spaceFor >= 3 && spaceFor <= 10){
        console.log(`The spacecraft holds ${spaceFor} astronauts.`);
    } else{
        console.log(`The spacecraft is too big.`);
    }





}