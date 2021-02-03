function solve(input) {
    function Movie(input){
        let budget = Number(input.shift());
        let people = Number(input.shift());
        let clothPrice = Number(input.shift());
    
        let decor = budget * 0.10;
        let clothing = people * clothPrice;
    
    
        if (people > 150){
            clothing = clothing * 0.90;
        }
    
        let moviePrice = decor + clothing;
    
        if (budget >= moviePrice){
            console.log("Action!");
            console.log(`Wingard starts filming with ${(budget - moviePrice).toFixed(2)} leva left.`);
    
        } else if (budget < moviePrice){
            console.log("Not enough money!");
            console.log(`Wingard needs ${(moviePrice - budget).toFixed(2)} leva more.`)
        }
    
       
    }

}