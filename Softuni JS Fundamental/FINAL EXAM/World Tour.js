function solve(input) {
    let stops = input.shift();
    for (let line of input) {
        if (line === "Travel") {
            break;
        }
        line = line.split(":");
        if (line[0] === "Add Stop") {
            let index = Number(line[1]);
            let string = line[2];
            if (index >= 0 && index < stops.length) {
                let firstPart = stops.substring(0, index);
                let secPart = stops.substring(index);
                stops = firstPart + string + secPart;
            }
        } else if (line[0] === "Remove Stop") {
            let start = Number(line[1]);
            let end = Number(line[2]);
            if (start >= 0 && end < stops.length) {
                let toRemove = stops.substring(start, end + 1);
                stops = stops.replace(toRemove, "");
            }
        } else {
            let oldString = line[1];
            let newString = line[2];
            if (stops.includes(oldString)) {

                stops = stops.replace(oldString, newString);

            }
        }
        console.log(stops);
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]
);