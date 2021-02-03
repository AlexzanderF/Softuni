function solve(input){
    let movie = input.shift();
    let kids = 0;        //counters
    let standards = 0;   //counters   
    let students = 0;    //counters   
    let fullness = 0; // % in use
    let soldTotal = 0;
    let stop = false;
    let totalKids = 0;
    let totalStandards = 0; 
    let totalStudents = 0;

    while(movie != "Finish"){
        let space = Number(input.shift());
        let takenSpace = 0;
        while(space > takenSpace){
            let ticket = input.shift();
            if(ticket === "End"){
                break;
            }
            if (ticket === "kid"){
                kids++;
                totalKids++;
            } else if(ticket === "standard"){
                standards++;
                totalStandards++;
            } else{
                students++;
                totalStudents++;
            }
            
            takenSpace += 1;
        }
        soldTotal += takenSpace;
        fullness = takenSpace / space * 100;
        console.log(`${movie} - ${fullness.toFixed(2)}% full.`);
        kids = 0;
        standards = 0;
        students = 0;
        movie = input.shift();
    }

    console.log(`Total tickets: ${soldTotal}`);
    console.log(`${(totalStudents / soldTotal * 100).toFixed(2)}% student tickets.`);
    console.log(`${(totalStandards / soldTotal * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(totalKids / soldTotal * 100).toFixed(2)}% kids tickets.`);

}

solve([
    'Taxi',     '10',
    'standard', 'kid',
    'student',  'student',
    'standard', 'standard',
    'End',      'Scary Movie',
    '6',        'student',
    'student',  'student',
    'student',  'student',
    'student',  'Finish'
  ]
  );