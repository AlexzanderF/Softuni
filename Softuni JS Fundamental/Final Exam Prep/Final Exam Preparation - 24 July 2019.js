// # 1
function concert(input) {
    let applications = {};
    for (let command of input) {
        if (command === "start of concert") {
            break;
        }
        command = command.split("; ");
        if (command[0] === "Add") {
            let bandName = command[1];
            let members = command[2].split(", ");
            if (!applications.hasOwnProperty(bandName)) {
                applications[bandName] = {};
                applications[bandName].playTime = 0;
                applications[bandName].members = members;
            } else {
                for (let person of members) {
                    if (!applications[bandName].members.includes(person)) {
                        applications[bandName].members.push(person);
                    }
                }
            }
        } else if (command[0] === "Play") {
            let bandName = command[1];
            let time = Number(command[2]);
            if (applications.hasOwnProperty(bandName) && applications[bandName].playTime === 0) {
                applications[bandName].playTime += time;
            } else if (applications.hasOwnProperty(bandName) && applications[bandName].playTime > 0) {
                applications[bandName].playTime += time;
            } else {
                applications[bandName] = {};
                applications[bandName].playTime = time;
                applications[bandName].members = [];
            }
        }
    }
    let selection = input.pop();
    let print = "";
    for (let member of applications[selection].members) {
        print += `=> ${member}\n`;
    }
    applications = Object.entries(applications).sort((a, b) => b[1].playTime - a[1].playTime || a[0].localeCompare(b[0]));
    let totalTime = 0;
    for (let pair of applications) {
        totalTime += pair[1].playTime;
    }
    console.log(`Total time: ${totalTime}`);
    for (let pair of applications) {
        console.log(`${pair[0]} -> ${pair[1].playTime}`);
    }
    console.log(selection);
    console.log(print);
}

// # 2
function songEncryption(input) {
    let line = input.shift();
    while (line !== "end") {
        let valid = /^(?<artist>[A-Z][a-z\'\s]+):[A-Z\s]+$/g.exec(line);
        if (valid) {
            let key = (valid.groups.artist).length;
            let string = valid[0];
            string = string.split("");
            let encrypted = "";
            for (let char of string) {
                let code = char.charCodeAt();
                if (code >= 65 && code <= 90) {
                    if (code + key > 90) {
                        code = code + key - 26;
                    } else if (code + key <= 90) {
                        code = code + key;
                    }
                } else if (code >= 97 && code <= 122) {
                    if (code + key > 122) {
                        code = code + key - 26;
                    } else if (code + key <= 122) {
                        code = code + key;
                    }
                } else if (code === 58) {
                    code = 64;
                }
                encrypted += String.fromCharCode(code);
            }
            console.log(`Successful encryption: ${encrypted}`);
        } else {
            console.log("Invalid input!");
        }
        line = input.shift();
    }

}


// # 3
function ssleOfManTTRace(input) {
    for (let message of input) {
        let valid = /^([#$%*&])(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<geohashCode>.+)\b/g.exec(message);
        if (valid && valid.groups.length == (valid.groups.geohashCode).length) {
            let length = Number(valid.groups.length);
            let geohashCode = valid.groups.geohashCode;
            let decrypted = "";
            for (let char of geohashCode) {
                let code = char.charCodeAt() + length;
                decrypted += String.fromCharCode(code);
            }
            console.log(`Coordinates found! ${valid.groups.name} -> ${decrypted}`);
            break;
        } else {
            console.log("Nothing found!");
        }
    }

}
ssleOfManTTRace([
    '%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
]
);