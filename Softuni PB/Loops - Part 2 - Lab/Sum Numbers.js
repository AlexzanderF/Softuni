function solve(input){
    let data = input.shift();
    let sum = 0;
    while(data !== "Stop"){
        let num = Number(data);
        sum += num;
        data = input.shift();
       
        
    }
    console.log(sum);

}

solve(["10",
    "20",
    "30",
    "45",
    "Stop"]);