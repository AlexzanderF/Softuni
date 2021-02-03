// # 1 
function sumFirstAndLast(numbers) {
    let sum = Number(numbers[0]) + Number(numbers[numbers.length - 1]);
    console.log(sum);
}

// # 2
function dayOfWeek(dayNumber) {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (dayNumber >= 1 && dayNumber <= 7) {
        console.log(days[dayNumber - 1]);
    } else {
        console.log('Invalid day!');
    }

}

// # 3
function reverseArray(n, numbersArray) {
    let print = '';
    for (let index = n - 1; index >= 0; index--) {
        print += numbersArray[index] + ' ';
    }
    console.log(print);
}

// # 4
function reverseStringArray(stringArray) {
    let print = '';
    for (let index = stringArray.length - 1; index >= 0; index--) {
        print += stringArray[index] + ' ';
    }
    console.log(print);
}

// # 5
function sumEvenNumber(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        let digit = Number(numbers[index]);
        if (digit % 2 === 0) {      // is even
            sum += digit;
        } 
    }
    console.log(sum);

}

// # 6
function subtraction(numbers){
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < numbers.length; index++) {
        let digit = Number(numbers[index]);
        if (digit % 2 === 0) {   
            evenSum += digit;
        } else {                
            oddSum += digit;
        }
    }
    console.log(evenSum - oddSum);
}

// # 7
function equalArrays(array1, array2){
    let isEqual = false;
    let sum = 0;
    let differentIndex = 0;
    for(let a = 0; a < array1.length; a++){
        if (array1[a] === array2[a]){
            sum += Number(array2[a]);
            isEqual = true;
            continue;
        } else {
            isEqual = false;
            differentIndex = a;
            break;
        }
    }
    if (isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differentIndex} index`);
    }
}

// # 8
function condenseArray(numbers){
    let condensed = [];
    condensed.length = numbers.length - 1;      // sets the new array length
    if (numbers.length > 1){
        while(numbers.length > 1){
            for (let i = 0; i < numbers.length - 1; i++){
                condensed[i] = numbers[i] + numbers[i + 1];
                numbers[i] = condensed[i];
            }
            numbers.length -= 1;
            // numbers.pop();      <-- also works
        }
        console.log(numbers[0]);
    } else {
        console.log(`${numbers[0]}`);
    }
}

condenseArray([2,10,3]);

