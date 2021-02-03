// # 1 
class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
    }

    showInfo() {
        let output = JSON.stringify(this.info);
        return output;
    }

    get price() {
        let price = (800 - (this.info.age * 2) + (this.quality * 0.5));
        return price;
    }
}

// # 2
function flightSchedule(input) {
    let schedule = [];
    let allFlights = input.shift();
    let changes = input.shift();
    let statusToCheck = input.shift()[0];

    for (let i = 0; i < allFlights.length; i++) {
        let [sector, destination] = allFlights[i].split(" ");
        let obj = {
            [sector]: {
                Destination: destination,
                Status: "Ready to fly"
            }
        };
        schedule.push(obj);
    }
    for (let i = 0; i < changes.length; i++) {       //chages the status of the flights
        let [sector, status] = changes[i].split(" ");
        schedule.forEach((x, i) => {
            if (x.hasOwnProperty(sector)) {
                schedule[i][sector].Status = status;
            }
        });
    }
    for (let i = 0; i < schedule.length; i++) {
        if (Object.values(schedule[i])[0].Status === statusToCheck) {
            let values = Object.values(schedule[i]);
            console.log(values[0]);
        }
    }
}

// # 3
function schoolRegister(input) {
    let registry = {};
    for (let i = 0; i < input.length; i++) {
        let student = input[i].split(", ");
        let [name, grade, avgScore] = student;
        grade = Number(grade.split(": ").pop());
        name = name.split(": ").pop();
        avgScore = Number(avgScore.split(": ").pop());
        if (avgScore < 3.00) {
            continue;
        }
        if (!registry.hasOwnProperty(grade)) {
            registry[grade] = {
                names: [name],
                scores: [avgScore]
            };
        } else {
            registry[grade].names.push(name);
            registry[grade].scores.push(avgScore);
        }

    }
    registry = Object.entries(registry).sort((a, b) => Number(a[0]) - Number(b[0]));
    for (let grade of registry) {
        console.log(`${Number(grade[0]) + 1} Grade`);
        console.log(`List of students: ${grade[1].names.join(", ")}`);
        let avgAnnual = 0;
        for (let score of grade[1].scores) {
            avgAnnual += Number(score);
        }
        avgAnnual = (avgAnnual / grade[1].scores.length).toFixed(2);
        console.log(`Average annual grade from last year: ${avgAnnual}`)
        console.log();
    }
}

// # 4
function browserHistory(obj, commands) {
    for (let command of commands) {
        let [action, name] = command.split(" ");
        if (action === "Open") {
            obj['Open Tabs'].push(name);
            obj['Browser Logs'].push(command);
        } else if (action === "Close" && obj['Open Tabs'].includes(name)) {
            obj['Open Tabs'] = obj['Open Tabs'].filter(word => word !== name);
            obj['Recently Closed'].push(name);
            obj['Browser Logs'].push(command);
        } else if (action === "Clear") {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    }
    console.log(obj["Browser Name"]);
    delete obj["Browser Name"];
    for (let key in obj) {
        if (obj[key].length > 0) {
            console.log(`${key}: ${obj[key].join(", ")}`);
        } else {
            console.log(`${key}:`);
        }
    }
}

// # 5
function sequences(input) {
    let storage = [];
    for (let array of input) {
        array = JSON.parse(array).sort((a, b) => b - a);
        array = JSON.stringify(array);
        if (!storage.includes(array)) {
            storage.push(array);
        }
    }
    storage.forEach((arr, i) => {
        storage[i] = JSON.parse(arr);
    });
    storage = storage.sort((a, b) => a.length - b.length);
    storage.forEach(arr => {
        console.log(`[${arr.join(", ")}]`);
    });
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);