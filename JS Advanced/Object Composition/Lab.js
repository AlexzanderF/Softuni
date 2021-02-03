// # 1
function orderRectangles(input) {
    let result = [];
    for (let pair of input) {
        let [w, h] = pair;
        let newRect = {
            width: w,
            height: h,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (otherRect) {
                return otherRect.area() - this.area() || otherRect.width - this.width;
            }
        };
        result.push(newRect);
    }
    let sorted = result.sort((a, b) => {
        if (b.area() - a.area() !== 0) {
            return b.area() - a.area();
        } else {
            return b.width - a.width;
        }
    });
    return sorted;
}

// # 2
function listProcessor(input) {
    function innerFunc() {
        let innerCollection = [];
        return {
            add: function (str) {
                innerCollection.push(str);
            },
            remove: function (str) {
                innerCollection = innerCollection.filter(x => x !== str);
            },
            print: function () {
                console.log(innerCollection.join(','));
            }
        };
    }
    let processorFunc = innerFunc();
    input.forEach(element => {
        let [command, arg] = element.split(' ');
        processorFunc[command](arg);
    });
}

// # 3
function objFactory(input) {
    input = JSON.parse(input);
    let resultObj = {};
    input.forEach(obj => {
        for (let key in obj) {
            if (!resultObj.hasOwnProperty(key)) {
                resultObj[key] = obj[key];
            }
        }
    });
    return resultObj;
}

objFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`);

// # 4
function solve(input) {
    function outerFunc() {
        let resultObj = {};
        return function (command) {
            command = command.split(' ');
            if (command[0] === 'create' && command.length === 2) {
                let name = command[1];
                resultObj[name] = {};
            } else if (command[0] === 'create' && command.length !== 2) {
                let parentName = command[3];
                let name = command[1];
                let newObj = Object.create(resultObj[parentName]);
                resultObj[name] = newObj;
            } else if (command[0] === 'set') {
                let [name, key, value] = command.slice(1);
                resultObj[name][key] = value;
            } else {
                let name = command[1];
                let toPrint = [];
                for (let key in resultObj[name]) {
                    toPrint.push(`${key}:${resultObj[name][key]}`);
                }
                console.log(toPrint.join(', '));
            }
        };
    }
    let mainFunc = outerFunc();
    for (let line of input) {
        mainFunc(line);
    }
}

// # 5
function sum() {
    return {
        init(elem1, elem2, resultElem) {
            this.elem1 = elem1;
            this.elem2 = elem2;
            this.resultElem = resultElem;
        },
        add() {
            let firstElem = document.querySelector(this.elem1).value;
            let secondElem = document.querySelector(this.elem2).value;
            let resultBox = document.querySelector(this.resultElem);
            resultBox.value = Number(firstElem) + Number(secondElem);
        },
        subtract() {
            let firstElem = document.querySelector(this.elem1).value;
            let secondElem = document.querySelector(this.elem2).value;
            let resultBox = document.querySelector(this.resultElem);
            resultBox.value = Number(firstElem) - Number(secondElem);
        }
    };
}
