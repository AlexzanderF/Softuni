// # 1
function smallestNum(numOne, numTwo, numThree) {
    // let smallest = 0;
    // if (numOne < numTwo && numOne < numThree) {
    // smallest = numOne;
    // } else if (numTwo < numThree && numTwo < numOne) {
    // smallest = numTwo;
    // } else if (numThree < numTwo && numThree < numOne) {
    // smallest = numThree;
    // }
    let smallest = Math.min(numOne, numTwo, numThree);
    return smallest;

}

// # 2
function subtract(numOne, numTwo, numThree) {
    let subtraction = sum(numOne, numTwo) - numThree;
    return subtraction;
    function sum(numOne, numTwo) {
        let sum = numOne + numTwo;
        return sum;
    }
}

// # 3
function charInRange(charOne, charTwo) {
    let print = [];
    let start = charOne.charCodeAt(0);
    let end = charTwo.charCodeAt(0);
    if (end > start) {
        for (let i = start + 1; i < end; i++) {
            print.push(String.fromCharCode(i));
        }
    } else {
        for (let i = end + 1; i < start; i++) {
            print.push(String.fromCharCode(i));
        }
    }

    let result = print.join(" ");
    return result;
}

// # 4
function oddAndEvenSum(input) {
    let number = input.toString();
    let array = number.split('');
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) % 2 === 0) {
            evenSum += Number(array[i]);
        } else {
            oddSum += Number(array[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// # 5
function palindrome(array) {
    for (let i = 0; i < array.length; i++) {
        let numberToCompare = array[i].toString();
        let forwCheck = "";
        let backwCheck = "";
        for (let j = 0; j < numberToCompare.length; j++) {
            forwCheck += numberToCompare[j];
        }
        for (let j = numberToCompare.length - 1; j >= 0; j--) {
            backwCheck += numberToCompare[j];
        }
        if (forwCheck === backwCheck) {
            console.log('true');
        } else {
            console.log('false');
        }
    }

}

// # 6
function passValidator(password) {
    let enoughLength = false;
    let onlyLetterAndDigits = true;
    let digits = 0;
    if (password.length >= 6 && password.length <= 10) {
        enoughLength = true;
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {    // digits
            digits++;
        } else if ((password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90) || (password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122)) {    // letters
            continue;
        } else {
            onlyLetterAndDigits = false;
        }

    }
    if (enoughLength === true && digits >= 2 && onlyLetterAndDigits === true) {
        console.log("Password is valid");
    } else {
        if (!enoughLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!onlyLetterAndDigits > 0) {
            console.log("Password must consist only of letters and digits");
        }
        if (digits < 2) {
            console.log("Password must have at least 2 digits");
        }
    }

}

// # 7
function nxnMatrix(num) {
    for (let i = 1; i <= num; i++) {
        let print = "";
        for (let j = 1; j <= num; j++) {
            print += `${num} `;
        }
        console.log(print);
    }
}

// # 8
function perfectNumber(number) {
    let sumOfDiv = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            sumOfDiv += i;
        }
    }
    if ((sumOfDiv / 2) === number) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

// # 9
function loadingBar(number) {
    if (number === 100) {
        let array = [];
        array.length = 10;
        array.fill("%");
        console.log('100% Complete!');
        // console.log('[%%%%%%%%%%]');
        console.log(`[${array.join('')}]`);
    } else {
        let array = [];
        array.length = 10;
        array.fill('.');
        for(let i = 0; i < number/10; i++){
            array[i] = "%";
        }
        console.log(`${number}% [${array.join('')}]`);
        console.log("Still loading...");
    }

}

// # 10
function factoralDivision(numOne, numTwo){
    let factorailOne = numOne;
    let factorailTwo = numTwo;
    for(let i = numOne - 1; i >= 1; i--){
        factorailOne = factorailOne * i;
    }
    for(let i = numTwo - 1; i >= 1; i--){
        factorailTwo = factorailTwo * i;
    }
    console.log((factorailOne / factorailTwo).toFixed(2));

}

factoralDivision(5, 2);







