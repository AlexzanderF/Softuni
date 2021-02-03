function solve(input){
    let year = input.shift();
    let p = Number(input.shift());
    let h = Number(input.shift());

    let saturdayGames = 0;   // in Sofia 
    let sundayGames = h;     //every Sunday in his hometown

    let holidayGames = (2/3) * p;
    saturdayGames = (48 - h) * (3/4);
    
    let totalGames = saturdayGames + sundayGames + holidayGames;

    if (year === "leap"){
        totalGames += totalGames * 0.15;
    } 

    console.log(Math.floor(totalGames));


}

solve(["leap",
    5,
    2]);