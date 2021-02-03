// # 1
function digitsWithWords(digit) {
    switch (digit) {
        case "one":
            console.log("1");
            break;
        case "two":
            console.log("2");
            break;
        case "three":
            console.log("3");
            break;
        case "four":
            console.log("4");
            break;
        case "five":
            console.log("5");
            break;
        case "six":
            console.log("6");
            break;
        case "seven":
            console.log("7");
            break;
        case "eight":
            console.log("8");
            break;
        case "nine":
            console.log("9");
            break;
        case "zero":
            console.log("0");
            break;
    }
}

// # 2
function primeNumber(number) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log('true');
    } else {
        console.log('false');
    }
}

// # 3
function cone(r, h) {
    let volume = (1 / 3) * Math.PI * (r ** 2) * h;
    let slan = Math.sqrt(r * r + h * h);
    let L = Math.PI * r * slan;
    let B = Math.PI * (r ** 2);
    let totalArea = L + B;
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalArea.toFixed(4)}`);
}

// # 4
function biggestNumber(a, b, c) {
    let biggest = Math.max(a, b, c);
    console.log(biggest);
}

// # 5
function binaryToDecimal(binary) {
    binary = binary.toString();
    let decimal = 0;
    let exponent = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += binary[i] * (2 ** exponent);
        exponent++;
    }
    console.log(decimal);

}

// # 6
function chessBoard(n) {
    console.log('<div class="chessboard">');
    for (let i = 1; i <= n; i++) {     // divs
        console.log('  <div>');
        if (i % 2 !== 0) {               // starts with black
            for (let span = 1; span <= n; span++) {
                if (span % 2 !== 0) {
                    console.log('    <span class="black"></span>');
                } else {
                    console.log('    <span class="white"></span>');
                }
            }
        } else {                        // starts with white
            for (let span = 1; span <= n; span++) {
                if (span % 2 !== 0) {
                    console.log('    <span class="white"></span>');
                } else {
                    console.log('    <span class="black"></span>');
                }
            }
        }
        console.log('  </div>');
    }
    console.log('</div>');
}

// # 7 
function area(a, b, c) {
    let s = (a + b + c) / 2;
    let A = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(A);
}