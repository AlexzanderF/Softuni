// # 1
function sort(num1, num2, num3){
    let big = Math.max(num1, num2, num3);
    let small = Math.min(num1, num2, num3);
    let middle = (num1 + num2 + num3) - big - small;
    console.log(big);
    console.log(middle);
    console.log(small);
}

// # 2
function nameOfLastDigit(name){
    let string = name.toString();
    let letter = string.length - 1;
    let lastDigit = string[letter];
    switch(lastDigit){
        case "1":
            console.log("one");
            break;
        case "2":
            console.log("two");
            break;
        case "3":
            console.log("three");
            break;
        case "4":
            console.log("four");
            break;
        case "5":
            console.log("five");
            break;
        case "6":
            console.log("six");
            break;
        case "7":
            console.log("seven");
            break;
        case "8":
            console.log("eight");
            break;
        case "9":
            console.log("nine");
            break;
        case "0":
            console.log("zero");
            break;
    }
}

// # 3
