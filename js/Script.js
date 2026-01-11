// console.log("i am sagor..!");
// alert("i am sagor")

// var nam = "value"

// var sagor = "hossen"
// console.log(sagor);

// var x = "20"
// var x = "30"
// console.log(x);

// var x = "20"
// var y = "30"
// console.log(x);
// console.log(y);

// let x = 10
// let x =20
// console.log(x);

// let x = 10
// x =20
// console.log(x);

// const pi = 3.1416;
// pi = 4.1416;
// console.log(pi);

// {
//     var x = 10
// }
// console.log(x);

// {
//     let x = 10
// }
// console.log(x);

// {
//     let x = 10
//     console.log(x);
// }

// let name ="sagor";
// console.log("amar nam" + name);

// let name ="sagor";
// console.log("amar nam" + " " + name);

// let nam = "pabna"
// console.log(nam);

// let location = "pabna"
// console.log(location);

// let area = "pabna"
// console.log(area);

// let loc = "sagor"
// console.log(typeof loc);

// let loc = 420
// console.log(typeof loc);

// let loc = true
// console.log(typeof loc);

// let numOne = 50
// let numTwo = 20
// console.log(numOne / numTwo);

// let numOne = 50
// let numTwo = 20
// let result = numOne * numTwo
// console.log(result);

// 4 x 1 = 4
// let namtaNumber = 5
// console.log(namtaNumber + " " + "x" + " " + 1 + " " + " = " + namtaNumber*1);
// console.log(namtaNumber + " " + "x" + " " + 2 + " " + " = " + namtaNumber*2);
// console.log(namtaNumber + " " + "x" + " " + 3 + " " + " = " + namtaNumber*3);
// console.log(namtaNumber + " " + "x" + " " + 4 + " " + " = " + namtaNumber*4);
// console.log(namtaNumber + " " + "x" + " " + 5 + " " + " = " + namtaNumber*5);
// console.log(namtaNumber + " " + "x" + " " + 6 + " " + " = " + namtaNumber*6);
// console.log(namtaNumber + " " + "x" + " " + 7 + " " + " = " + namtaNumber*7);
// console.log(namtaNumber + " " + "x" + " " + 8 + " " + " = " + namtaNumber*8);
// console.log(namtaNumber + " " + "x" + " " + 9 + " " + " = " + namtaNumber*9);
// console.log(namtaNumber + " " + "x" + " " + 10 + " " + " = " + namtaNumber*10);

//  Metro Moni App Demo Start

let gender = "Male";
let income = 10000;
let area = "Dhaka";

// Note All Critaria Requriied

if (gender == "Male") {
  if (income >= 10000) {
    if (area == "Dhaka") {
      console.log("Congreats...You Are Perfect");
    } else {
      console.log("I will not give my daughter in marriage outside Dhaka");
    }
  } else {
    console.log("Your Income Is Very Low...");
  }
} else {
  console.log("Sorry, this form can only be filled out by males");
}

//  Metro Moni App Demo End

// Marksheet create Start

let marks = 80

if (marks < 0 || marks > 100) {
  console.log("Invalid Input");

}

else if (marks >=33 && marks <= 39) {
  console.log("You Got D");

}
else if (marks >=40 && marks <=49) {
   console.log("You Got C");
}
else if (marks >=50 && marks <=59) {
   console.log("You Got B");
}
else if (marks >=60 && marks <=69) {
   console.log("You Got A-");
}
else if (marks >=70 && marks <=79) {
   console.log("You Got A");
}
else if (marks >=80 && marks <=100) {
   console.log("You Got A+");
}
else{
  console.log("You Are Failed");

}
// Marksheet create End

// Login Logic Start
// Input
let userEmail = "hossenmdsagor8@gmail.com";
let userPassword = "Sagor1234";
// Input

if (userEmail == "hossenmdsagor8@gmail.com") {
  if (userPassword == "Sagor1234") {
    console.log("Login Successful");
  } else {
    console.log("Criteria did not match");
  }
} else {
  console.log("Criteria did not match");
}
// Login Logic End
