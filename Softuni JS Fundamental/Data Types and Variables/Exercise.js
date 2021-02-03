// # 1
function sumDigits(number){
    number = number.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        sum += Number(number[i]);
    }
    console.log(sum);
}

// # 2
function charsToString(char1, char2, char3){
    let result = `${char1}${char2}${char3}`;
    console.log(result);
}

// # 3
function townInfo(town, population, area){
    console.log(`Town ${town} has population of ${population} and area ${area} square km.`);

}

// # 4
function convert(meters){
    let kilometers = meters / 1000;
    console.log(kilometers.toFixed(2));
}

// # 5
function poundsToDollars(pounds){
    let dollars = pounds * 1.31;
    console.log(dollars.toFixed(3));
}

// # 6
function reverse(a, b, c){
    console.log(`${c} ${b} ${a}`);
}

// # 7
function lowerOrUpper(letter){
    if (letter.charCodeAt() >= 97){
        console.log('lower-case');
    } else {
        console.log('upper-case');
    }
}

// # 8 
function calculator(num1, operator, num2){
    let result = 0.00;
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    console.log(result.toFixed(2));

}

// # 9
function gladiatorExpenses(losses, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let fights = 0; 
    let helmets = 0;
    let swords = 0;
    let shields = 0;
    let armour = 0;
    while (fights < losses){
        fights++;
        if (fights % 2 === 0){
            helmets++;
        }
        if (fights % 3 === 0){
            swords++;
        }
        if (fights % 2 === 0 && fights % 3 === 0){
            shields++;
            if (shields % 2 === 0){
                armour++;
            }
        }
    
    }
    let totalSum = helmets * helmetPrice + swords * swordPrice + shields * shieldPrice + armour * armourPrice;
    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);

}

// # 10
function spiceMustFlow(startingYield){
    let days = 0;
    let extracted = 0;
    while(startingYield >= 100  ){
        days++;
        extracted += startingYield;
        startingYield -= 10;
        extracted = Math.abs(extracted - 26);   // workers consumption
        
    }
    extracted -= 26;
    console.log(days);
    console.log(Math.max(0,extracted));

}
