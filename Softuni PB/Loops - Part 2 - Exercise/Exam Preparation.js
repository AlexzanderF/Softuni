function solve(input){
    let poorGrades = Number(input.shift());
    let name = input.shift();
    let grade = Number(input.shift());
    let checkedGrades = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastProblem;
    while(name !== "Enough"){
        if (grade <= 4){
            checkedGrades ++;
        }
        if(checkedGrades >= poorGrades){
            console.log(`You need a break, ${checkedGrades} poor grades.`);
            break;
        }
        gradeCount++;
        gradeSum += grade;
        lastProblem = name;

        name = input.shift();
        grade = Number(input.shift());

    }
    if (checkedGrades < poorGrades){
        console.log(`Average score: ${(gradeSum / gradeCount).toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

solve([
    '3', 'Money',
    '6', 'Story',
    '4', 'Spring Time',
    '5', 'Bus',
    '6', 'Enough',
    ''
  ]
  );