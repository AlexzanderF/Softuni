function solve(input){
    let n = Number(input.shift());
    let salary = Number(input.shift());
    let noSalary = false;

    for (let i = 1; i <= n; i++){
        let website = input.shift();
        switch (website){
            case "Facebook":
                salary -= 150;
            break;
            case "Instagram":
                salary -= 100;
            break;
            case "Reddit":
                salary -= 50;
            break;
        }
        if(salary == 0){
            noSalary = true;
        }

    }

    if(noSalary){
        console.log('You have lost your salary.')
    } else{
        console.log(salary);
    }

}

solve([10,
    750,
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);