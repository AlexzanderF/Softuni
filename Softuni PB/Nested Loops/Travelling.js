function solve(input) {
    let destination = input.shift();
    let savings = 0;
    
    while(destination != "End"){
        let goal = Number(input.shift());
        while(savings < goal){
            let saved = Number(input.shift());
            savings += saved;
        }
        if(savings >= goal){
            console.log(`Going to ${destination}!`);
            savings = 0;
        }
        destination = input.shift();
    }

}

solve([
    'France',   '2000',  '300',
    '300',      '200',   '400',
    '190',      '258',   '360',
    'Portugal', '1450',  '400',
    '400',      '200',   '300',
    '300',      'Egypt', '1900',
    '1000',     '280',   '300',
    '500',      'End',   ''
  ]
   
  );