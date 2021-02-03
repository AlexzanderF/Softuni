// # 1
function fruit(...arr) {
    let weight = Number((arr[1] / 1000));
    let price = Number((weight * arr[2]));
    let fruit = arr[0];
    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

// # 2
function gcd(a, b) {
    let result = 0;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            if (i > result) {
                result = i;
            }
        }
    }
    console.log(result)
}

// # 3
function sameNumbers(num) {
    num = num.toString();
    num = num.split("");
    let sum = 0;
    let same = false;
    if (num.length === 1) {
        same = true;
    } else {
        let set = new Set(num);
        if (set.size > 1) {
            same = false;
        } else {
            same = true;
        }
    }
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    console.log(same);
    console.log(sum);
}

// # 4
function timeToWalk(steps, length, speed) {
    let s = (steps * length);
    let breaks = Math.floor(s / 500);
    s = s / 1000;
    let time = Number((((s / speed) * 60 * 60) + (breaks * 60)).toFixed(0)); // turns time in seconds

    let hours = Math.floor(time / 60 / 60).toFixed(0);
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}


// # 5
function roadRadar(arr) {
    let speed = arr[0];
    let area = arr[1];
    let result = '';
    if (area === 'motorway' && speed > 130) {
        if (speed - 130 > 0 && speed - 130 <= 20) {
            result = 'speeding';
        } else if (speed - 130 > 20 && speed - 130 <= 40) {
            result = 'excessive speeding';
        } else if (speed - 130 > 40) {
            result = 'reckless driving';
        }
    } else if (area === 'interstate') {
        if (speed - 90 > 0 && speed - 90 <= 20) {
            result = 'speeding';
        } else if (speed - 90 > 20 && speed - 90 <= 40) {
            result = 'excessive speeding';
        } else if (speed - 90 > 40) {
            result = 'reckless driving';
        }
    } else if (area === 'city') {
        if (speed - 50 > 0 && speed - 50 <= 20) {
            result = 'speeding';
        } else if (speed - 50 > 20 && speed - 50 <= 40) {
            result = 'excessive speeding';
        } else if (speed - 50 > 40) {
            result = 'reckless driving';
        }
    } else if (area === 'residential') {
        if (speed - 20 > 0 && speed - 20 <= 20) {
            result = 'speeding';
        } else if (speed - 20 > 20 && speed - 20 <= 40) {
            result = 'excessive speeding';
        } else if (speed - 20 > 40) {
            result = 'reckless driving';
        }
    }
    console.log(result);
}

// # 6
function cookingByNumbers(arr) {
    let num = Number(arr.shift());
    for (let command of arr) {
        if (command === 'chop') {
            num = num / 2;
            console.log(num);
        } else if (command === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (command === 'spice') {
            num += 1;
            console.log(num);
        } else if (command === 'bake') {
            num *= 3;
            console.log(num);
        } else if (command === 'fillet') {
            num = num - num * 0.20;
            console.log(num);
        }
    }
}

// # 7
function validityChecker(arr) {
    let [x1, y1, x2, y2] = arr;

    function pitagor(x1, y1, x2, y2) {
        let disX = x1 - x2;
        let disY = y1 - y2;
        return Math.sqrt(disX ** 2 + disY ** 2);
    }

    if (Number.isInteger(pitagor(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(pitagor(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (Number.isInteger(pitagor(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// # 8
function calorieObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        let item = arr[i];
        let calories = Number(arr[i + 1]);
        obj[item] = calories;
    }
    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);