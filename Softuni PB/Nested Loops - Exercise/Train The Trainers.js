function solve(input) { 
    let n = Number(input.shift());
    let presentation = input.shift();
    let assessmentSum =  0;   
    let gradeCount = 0;
    let assessment = 0

    while(presentation != "Finish"){
        let gradeSum = 0;
        let avg = 0;
        for (let i = 1; i <= n; i ++){
            let grade = Number(input.shift());
            gradeSum += grade;
            gradeCount ++;
            assessmentSum += grade;

        }
        avg = gradeSum / n;
        console.log(`${presentation} - ${avg.toFixed(2)}.`);
        assessment = assessmentSum / gradeCount;
        presentation = input.shift();
        
    }
    console.log(`Student's final assessment is ${assessment.toFixed(2)}.`);
}

solve([
    '2',        'While-Loop',
    '6.00',     '5.50',
    'For-Loop', '5.84',
    '5.66',     'Finish',
    ''
  ]
  );