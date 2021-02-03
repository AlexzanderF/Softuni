function solve(input){
    let age = Number(input.shift());
    let washmachinePrice = Number(input.shift());
    let toyPrice = Number(input.shift());

    let toysCount = 0;
    let BDmoney = 0;
    let toysMoney = 0;
    let savedMoney= 0;

    
    for (let i = 1; i <= age; i+=2 ){
        toysCount++ ;
        
    }

    for (i = 2; i <= age; i+=2 ){
        BDmoney = (BDmoney + (i * 5 -1)) ;
    }

    toysMoney = toysCount * toyPrice;
    savedMoney = toysMoney + BDmoney;

    if (savedMoney >= washmachinePrice){
        console.log(`Yes! ${(savedMoney - washmachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washmachinePrice - savedMoney).toFixed(2)}`)
    }


    
}
solve([21,
    1570.98,
    3]);