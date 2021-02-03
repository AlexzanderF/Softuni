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
        let ticket = input.shift();
        let takenSpace = 0;
        while(ticket != "End"){
            //if(ticket === "Finish"){
            //    stop = true;
            //    break;
            //}
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
            if(takenSpace >= space){
                break;
            }
            ticket = input.shift();
        }
        soldTotal += takenSpace;
        fullness = (kids + standards + students) / space * 100;
        console.log(`${movie} - ${fullness.toFixed(2)}% full.`);
        //if (stop == true){
        //    break;
        //}
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