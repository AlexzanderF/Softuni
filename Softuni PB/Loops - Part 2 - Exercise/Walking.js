function solve(input){
    let goal = 10000;
    let done = false;
    let steps = input.shift();
    while(goal > 0){
        if(steps === "Going home"){
            let stepsHome = Number(input.shift());
            goal -= stepsHome;
            if(goal <= 0 ){
                console.log(`Goal reached! Good job!`);
                done = true;
            }else{
                console.log(`${goal} more steps to reach goal.`);
            }
            break;
        }
        steps = Number(steps);
        goal -= steps;
        steps = input.shift();
        
    }

    if(goal <= 0 && done != true){
        console.log(`Goal reached! Good job!`);
    }

}

solve([ '1500', '300', '2500', '3000', 'Going home', '200', '' ]);