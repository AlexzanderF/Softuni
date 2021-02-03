// # 1
function repeat(string, n){
    let result  = "";
    for(let i = 1; i <= n; i++ ){
        result += string;
    }
    return result;
}

console.log(repeat("abc", 3));

// # 2
function grades(grade){
    if(grade >= 2.00 && grade <= 2.99){
        return "Fail";
    } else if(grade >= 3.00 && grade <= 3.49){
        return "Poor";
    }else if(grade >= 3.50 && grade <= 4.49){
        return "Good";
    } else if(grade >= 4.50 && grade <= 5.49){
        return "Very good";
    } else {
        return "Excellent";
    }
}

// # 3
function mathPower(number, power){
    let result = number ** power;
    return result;
}

// # 4
function orders(product, quantity){
    let price = 0;
    switch (product){
        case "coffee":
            price = quantity * 1.50;
            break;
        case "water":
            price = quantity * 1.00;
            break;
        case "coke":
            price = quantity * 1.40;
            break;
        case "snacks":
            price = quantity * 2.00;
            break;
    }
    return (price.toFixed(2));
}

// # 5
function calculator(numOne, numTwo, operator){
    let result = 0;
    switch(operator){
        case 'multiply':
            result = numOne * numTwo;
            break;
        case 'divide':
            result = numOne / numTwo;
            break;
        case 'add':
            result = numOne + numTwo;
            break;
        case 'subtract':
            result = numOne - numTwo;
            break;
    }
    return result;
}

// # 6
function wrongResult(numOne, numTwo, numThree){
    if(numOne >= 0 && numTwo >= 0 && numThree >= 0){
        return 'Positive';
    } else if(numOne <= 0 && numTwo <= 0 && numThree >= 0){
        return 'Positive';
    } else if(numOne >= 0 && numTwo <= 0 && numThree <= 0){
        return "Positive";
    } else if(numOne <= 0 && numTwo >= 0 && numThree <= 0){
        return "Positive";
    } else if(numOne <= 0 && numTwo <= 0 && numThree <= 0){
        return "Negative";
    } else if(numOne <= 0 && numTwo >= 0 && numThree >= 0){
        return "Negative";
    } else if(numOne >= 0 && numTwo <= 0 && numThree >= 0){
        return "Negative";
    } else if(numOne >= 0 && numTwo >= 0 && numThree <= 0){
        return "Negative";
    }
}