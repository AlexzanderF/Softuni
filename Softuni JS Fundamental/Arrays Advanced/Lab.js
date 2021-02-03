// # 1
function sum(array) {
    let result = Number(array.shift()) + Number(array.pop());
    return result;
}

// # 2
function negativeOrPositive(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            result.unshift(array[i]);
        } else {
            result.push(array[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

// # 3.1
// function K_numbers(array){
//     let K = array.shift();
//     let firstK = [];
//     let lastK = [];

//     for(let i = 0; i <= (K - 1); i++){
//         firstK.push(array[i]);
//     }

//     for(let i = array.length - 1; i >= array.length - K; i--){
//         lastK.unshift(array[i]);
//     }

//     console.log(firstK.join(" ")); 
//     console.log(lastK.join(" ")); 
// }


// # 3.2
function K_numbers(array) {
    let K = array.shift();
    let firstK = array.slice(0, K);
    let lastK = array.slice(array.length - K);


    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}


// # 4
function lastKNumbers(n, k) {     // k - sum of previous elements
    let array = [1];
    for (let i = 1; i < n; i++) {
        let previousElem = array.slice(Math.max(i - k, 0), i);
        let sum = 0;
        for (let j = 0; j < previousElem.length; j++) {
            sum += previousElem[j];
        }
        array.push(sum);
        previousElem = [];
    }
    let result = array.join(" ");
    return result;
}

// # 5
function processOddNum(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            result.unshift(numbers[i]);
        }
    }
    let doubledArr = result.map(elem => elem * 2);
    console.log(doubledArr.join(" "));
}

function processOddNum2(numbers) {
    let result = numbers.filter((num, i) => i % 2 == 1).map(x => 2 * x).reverse();
    console.log(result.join(" "));

}

// # 6
function smallestTwoNum(numbers) {
    numbers.sort((a, b) => a - b);
    let smallest = numbers.splice(0, 2);
    console.log(smallest.join(" "));
}

// # 7
function productsList(products) {
    products.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}.${products[i]}`);
    }
}

// # 8
function arrManipulation(input) {
    let array = input.shift().split(" ").map(a => Number(a));
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let action = command[0];
        let num1 = Number(command[1]);
        let num2 = Number(command[2]);

        if (action === "Add") {
            array.push(num1);
        } else if (action === "Remove") {
            array = array.filter(a => a !== num1);   // all elements diff from that number stay in the arr
        } else if (action === "RemoveAt") {
            array.splice(num1, 1);
        } else {
            array.splice(num2, 0, num1);
        }
    }
    console.log(array.join(" "));
}

arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
