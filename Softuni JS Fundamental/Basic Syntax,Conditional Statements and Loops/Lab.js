// 4
function solve(num){
    for (let i=num; i>=1; i--){
     console.log(i);
    }
 }
 
// 5
function solve(M, N){
    for (let i= M; i>=N; i--){
     console.log(i);
    }
 }

// 6
function solve(name, age, grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
 }

// 7
function solve(num){
   switch(num){
      case 1:
         console.log("January");
         break;
      case 2:
         console.log("February");
         break;
      case 3:
         console.log("March");
         break;
      case 4:
         console.log("April");
         break;
      case 5:
         console.log("May");
         break;
      case 6:
         console.log("June");
         break;
      case 7:
            console.log("July");
            break;
      case 8:
         console.log("August");
         break;
      case 9:
         console.log("September");
         break;
      case 10:
         console.log("October");
         break;
      case 11:
         console.log("November");
         break;
      case 12:
         console.log("December");
         break;
      default:
         console.log("Error!");
         break;
      
}
}

// 8
function solve(country){
    switch(country){
       case "USA":
       case "England":
          console.log("English");
          break;
       case "Spain":
       case "Argentina":
       case "Mexico":
          console.log("Spanish");
          break;
       default:
          console.log("unknown");
 }
 }

// 9 
function solve(day, age){
    let price = 0;
 
    if (day === "Weekday"){
       if (age >= 0 && age <= 18){
          price = 12;
       } else if (age > 18 && age <=64){
          price = 18;
       } else if (age > 64 && age <= 122){
          price = 12;
       } else {
          console.log("Error!");
       }
    } else if(day === "Weekend"){
       if (age >= 0 && age <= 18){
          price = 15;
       } else if (age > 18 && age <=64){
          price = 20;
       } else if (age > 64 && age <= 122){
          price = 15;
       } else {
          console.log("Error!");
       }
    } else {
       if (age >= 0 && age <= 18){
          price = 5;
       } else if (age > 18 && age <=64){
          price = 12;
       } else if (age > 64 && age <= 122){
          price = 10;
       } else {
          console.log("Error!");
       }
    }
    if (age >= 0 && age <= 122){
       console.log(`${price}$`);
    }
 }

// 10
function solve(){
    for (let i= 1; i<=100; i++){
       if (i % 3 === 0){
          console.log(i);
       }
    }
 }

// 11
function solve(n){
    let sum = 0;
    let num = 1;
    for (let i= 1; i<= n; i++){
       if (i == 1){
          console.log(1);
       } else {
          num += 2;
          console.log(num);
          sum += num;
       }
    }
 
    console.log(`Sum: ${sum + 1}`);
 
 }
    
