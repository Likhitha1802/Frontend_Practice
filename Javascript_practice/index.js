console.log("Hello World");
var my_Name = "Likhitha";
console.log(my_Name);
console.log(typeof(my_Name))
var my_Age = 19
console.log(typeof(my_Age));
var iamLikhi = true;
console.log(iamLikhi);
console.log(typeof(iamLikhi));
console.log(10+"20");
// console.log(9-"5"); bug1
console.log("Java"+"Script");
console.log("Java "+"Script");
console.log(" "+0);
console.log("java"-"script");
console.log(true+true);
console.log(true+false);
console.log(false+false);
console.log(false-true);
// null and undefined
var useless = null;
console.log(useless);
// console.log(typeof(useless)); bug2
var useful;
console.log(useful);

var myPhone = 9876543210;
var myName = "Likhi";
console.log(isNaN(myPhone));
console.log(isNaN(myName));
if(isNaN(myName)){
    console.log("pls enter a valid number");
}

//arthimetic operators
//postfix
var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);

//prefix
var num = 15;
var newNum = ++num;
console.log(num);
console.log(newNum);

//truthy and falsy values in javascript
//falsy values - 0," ",undefined,null,NaN,false
if(score=0){
    console.log("we loss the game")
}
else{
    console.log("we won the game")
}

//Conditional ternary operator
var age = 17;
console.log((age >= 18) ? " you can vote " : " you can't vote ");

//switch statement
var area = "rectangle";
var PI = 3.42,l=5,b=4,r=2;
switch(area){
    case "circle":
        console.log("area of circle : "+PI*r**2);
        break;
    case "rectangle":
        console.log("area of rectangle : "+l*b);
        break;
    case "traingle":
        console.log("area of triangle : "+(l+b)/2);
        break;
    default:
        console.log("please enter valid data");

}
