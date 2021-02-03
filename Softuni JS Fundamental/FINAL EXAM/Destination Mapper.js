function solve(string) {
    let destinations = [];
    let points = 0;
    let validDest = string.match(/([=\/])[A-Z][A-Za-z]{2,}\1/);
    if (validDest !== null && validDest.length > 0) {
        for (let destination of validDest) {
            destination = destination.substring(1, destination.length - 1);
            destinations.push(destination);
            points += destination.length;
        }
        console.log(`Destinations: ${destinations.join(", ")}`);
        console.log(`Travel Points: ${points}`);
    } else {
        console.log(`Destinations:`);
        console.log(`Travel Points: ${points}`);
    }
}

solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');