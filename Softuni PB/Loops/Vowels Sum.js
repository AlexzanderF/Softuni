function solve(input){
    let text = input.shift();  
    let result = 0;

    for (i = 0; i < text.length; i++){

        if (text[i] == "a"){
            result += 1;
        } 
        if (text[i] == "e"){
            result += 2;
        } 
        if (text[i] == "i"){
            result += 3;
        } 
        if (text[i] == "o"){
           result += 4;
        } 
        if (text[i] == "u"){
            result += 5;
        } 
        
       
    }
    console.log(result);

}

solve(["hello"]);