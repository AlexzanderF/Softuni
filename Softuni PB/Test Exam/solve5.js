function solve(input) {
    let singerMoney = Number(input.shift());
    let group = input.shift();
    let sum = 0;
    let guestCounter = 0;

    while (group !== "The restaurant is full"){
        group = Number(group);
        guestCounter += group;
        if(group < 5){
            sum += group * 100;
        } else {
            sum += group * 70;
        }

        group = input.shift();      

    }
    if (sum >= singerMoney){
        console.log(`You have ${guestCounter} guests and ${sum - singerMoney} leva left.`);
    } else{
        console.log(`You have ${guestCounter} guests and ${sum} leva income, but no singer.`);
    }

}