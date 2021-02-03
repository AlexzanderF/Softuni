// # 1
function carWash(array) {
    let cleanValue = 0;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command === "soap") {
            cleanValue += 10;
        } else if (command === "water") {
            cleanValue += cleanValue * 0.20;
        } else if (command === "vacuum cleaner") {
            cleanValue += cleanValue * 0.25;
        } else {
            cleanValue -= cleanValue * 0.10;
        }
    }
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);

}

// # 2
function numberMod(number) {
    // let length = number.toString().length;
    let array = number.toString().split('');
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Number(array[i]);
    }
    let average = sum / array.length;
    if (average > 5) {
        console.log(number);
    } else {
        while (average <= 5) {
            array.push(9);
            sum += 9;
            average = sum / array.length;
        }
        console.log(array.join(""));
    }
}

// # 3
function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    let isXto0Valid = false;
    let isYto0Valid = false;
    let isToEeachOtherValid = false;

    if (x1 === 0 || y1 === 0) {
        isXto0Valid = true;
    }

    if (x2 === 0 || y2 === 0) {
        isYto0Valid = true;
    }

    if(x1 === y2 || x2 === y1 || x2 === x1 || x1 === x2){
        isToEeachOtherValid = true;
    }

    if(isXto0Valid){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(isYto0Valid){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(isToEeachOtherValid){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

pointsValidation([2, 1, 1, 1]);