// # 1
function stringLength(...arr) {
    let sum = 0;
    for (let str of arr) {
        sum += str.length;
    }
    console.log(sum);
    console.log(Math.floor(sum / arr.length));
}

// # 2
function mathOperations(num1, num2, operator) {
    let result = 0;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num1 / num2;
    } else if (operator === "%") {
        result = num1 % num2;
    } else {
        result = num1 ** num2;
    }
    console.log(result);
}

// # 3
function sumOfNumbers(n, m) {
    let sum = 0;
    for (let i = Number(n); i <= Number(m); i++) {
        sum += i;
    }
    console.log(sum);
}

// # 4
function largestNumber(...arr) {
    console.log(`The largest number is ${Math.max(...arr)}.`);

}

// # 5
function circleArea(arg) {
    if (typeof (arg) !== 'number') {
        return `We can not calculate the circle area, because we receive a ${typeof (arg)}.`;
    }
    console.log((Math.PI * arg ** 2).toFixed(2));

}

// # 6
function squareOfStars(num) {
    for (let i = 1; i <= num; i++) {
        console.log('* '.repeat(num))
    }
}

// # 7
function dayOfWeek(day) {
    switch (day) {
        case "Monday":
            console.log(1);
            break;
        case "Tuesday":
            console.log(2);
            break;
        case "Wednesday":
            console.log(3);
            break;
        case "Thursday":
            console.log(4);
            break;
        case "Friday":
            console.log(5);
            break;
        case "Saturday":
            console.log(6);
            break;
        case "Sunday":
            console.log(7);
            break;
        default:
            console.log('error');
    }
}

// # 8
function aggregateElements(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = '';
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i];
        sum2 += 1 / arr[i];
        sum3 += `${arr[i]}`;
    }
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
}

// # 9
function wordsUppercase(str) {
    let result = [];
    let words = str.match(/\w+/g);
    for(let word of words){
        result.push(word.toUpperCase());
    }
    console.log(result.join(', '));
}