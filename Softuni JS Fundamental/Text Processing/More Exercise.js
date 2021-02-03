// # 1
function valueString(input) {
    let string = input.shift();
    let command = input.shift();
    let sum = 0;
    if (command === "UPPERCASE") {
        for (let i = 0; i < string.length; i++) {
            if (isUpper(string[i])) {
                sum += string[i].charCodeAt(0);
            }
        }
    } else {
        for (let i = 0; i < string.length; i++) {
            if (isLower(string[i])) {
                sum += string[i].charCodeAt(0);
            }
        }
    }

    console.log(`The total sum is: ${sum}`);

    function isUpper(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 65 && charCode <= 90);
    }
    function isLower(letter) {
        let charCode = letter.charCodeAt(0);
        return (charCode >= 97 && charCode <= 122);
    }
}

// # 2
function serializeString(string) {
    let obj = {};
    string = string.shift().split("");
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (!obj.hasOwnProperty(char)) {
            obj[char] = [];
            obj[char].push(i);
        } else {
            obj[char].push(i);
        }
    }
    for (let key in obj) {
        console.log(`${key}:${obj[key].join("/")}`);
    }
}

// # 3
function deserializeString(input) {
    let string = [];
    let biggestNum = 0;
    for (let line of input) {                  // gets the length of the string
        if (line === "end") {
            break;
        }
        let indexes = line.split(":")[1];
        if (Math.max(...indexes) > biggestNum) {
            biggestNum = Math.max(...indexes);
        }
    }

    string.length = biggestNum;

    for (let line of input) {
        if (line === "end") {
            break;
        }
        let [char, indexes] = line.split(":");
        indexes = indexes.split("/").map(Number);
        for (let index of indexes) {
            string[index] = char;
        }
    }

    console.log(string.join(""));
}

// # 4
function asciiSumator(input) {
    let firstCode = input.shift().charCodeAt(0);
    let secCode = input.shift().charCodeAt(0);
    let string = input[0];
    let sum = 0;
    for (let char of string) {
        if (firstCode < secCode && char.charCodeAt() > firstCode && char.charCodeAt() < secCode) {
            sum += char.charCodeAt();
        } else if (firstCode > secCode && char.charCodeAt() < firstCode && char.charCodeAt() > secCode) {
            sum += char.charCodeAt();
        }
    }
    console.log(sum);
}

// # 5
function treasureFinder(input) {
    let key = input.shift().split(" ").map(Number);
    for (let line of input) {
        if (line === "find") {
            break;
        }
        let index = 0;
        line = line.split("");
        for (let i = 0; i < line.length; i++) {
            let code = line[i].charCodeAt() - key[index];
            line.splice(i, 1, String.fromCharCode(code));

            index++;
            if (index > key.length - 1) {
                index = 0;
            }
        }
        line = line.join("");
        let type = line.split("&")[1];
        let coordinates = line.split("<")[1].replace(">", "");
        console.log(`Found ${type} at ${coordinates}`);
    }
}

// # 6
function melrahShake(input) {
    let string = input.shift();
    let pattern = input.shift();
    let skip = false;

    while (string.includes(pattern) && string.length > 0) {
        if (string.split(pattern).length > 2) {
            string = string.replace(pattern, "");
            string = string.split("").reverse().join("");
            string = string.replace(pattern.split("").reverse().join(""), "");
            string = string.split("").reverse().join("");
            console.log("Shaked it.");
            pattern = pattern.split("");
            pattern.splice(Math.floor(pattern.length / 2), 1);
            pattern = pattern.join("");
        } else {
            console.log("No shake.");
            console.log(string);
            skip = true;
            break;
        }
    }
    if (!skip) {
        console.log("No shake.");
        console.log(string);
    }
}

melrahShake(['astalavista baby', 'sta', '']);