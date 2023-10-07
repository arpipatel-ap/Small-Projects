//alert("hello world");
//console.log("hello world");
//document.write("<h1>hello world</h1>");

//static number
// let a =5;
// let b =6;

// var c= a + b;
// console.log("the sum of "+ a + " and " + b +  " is: "+c);

//Dynaminc number
// let a = prompt("Please enter first Number"," ");
// let b = prompt("Please enter Second Number"," ");

// var c = parseInt(a) + parseInt(b);
// console.log("the sum of "+ a + " and " + b +  " is: "+c);

// var a = prompt("Please enter a number", " ");
// var b = Math.sqrt(Arpi);

// console.log(b);

//find a area of triangle Right angle

// let base = prompt("Please enter the base value", " ");
// let height = prompt("Plase enter the height value", " ");

// var area = (base * height) / 2;
// console.log("Base: "+ base+ " Height: "+ height + " Area is:" +area);

//find a area of triangle

// let a = 10;
// let b = 5;
// let c = 10;
// let s = (a+b+c)/2;
// let temp = s*(s-a)*(s-b)*(s-c);
// let area = Math.sqrt(temp);
//  console.log(area);

//swapping of two number  using temporsry variable

// let a = prompt("Please enter the a value");
// let b = prompt("Please enter the b value");

// console.log(`The value of a is: ${a}, The value of b is: ${b}`);
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(` After swapping \n The value of a is: ${a}, The value of b is: ${b}`);

//swapping of two number   without using temporsry variable

// let a = parseInt(prompt("Please enter the a value"));
// let b = parseInt(prompt("Please enter the b value"));

// console.log(`The value of a is: ${a}, The value of b is: ${b}`);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(` After swapping \n The value of a is: ${a}, \n The value of b is: ${b}`);

//convert kms to miles using JavaScript Function
// function convert(){
    // var kms =  document.getElementById('data').value;
    // const factor = 0.621371;
    // var miles =  kms * factor;
    // document.getElementById('res').innerText = `${miles} miles`;

    // document.getElementById('res').innerText = miles +" miles "; another way to write 
// }

//convert Celsius to fahrenheit
//  function convert(){
//     let c = document.getElementById('data').value;
//     let f = (c * 1.8)+ 32;
//     document.getElementById('res').innerText = `${c} C = ${f} f `;
//  }

//Check if number is Positive, Nagative or Zero

// function check(){
//     var value = document.getElementById('data').value;
//     var res = Math.sign(value);

//     if(value > 0){
//         res = `${value} is Positive number`;
//     }else if(value < 0){
//         res = `${value} is Nagative number`;
//     }else if(value == 0){
//         res = `${value} is Zero`;
//     }else{
//         res = `${value} It is not a number`;
//     }
//     document.getElementById('res').innerText = res;
// }

//Generate a Random Number
//  let x = Math.random();
//  console.log(x);

// let x = Math.random();
// console.log("Before Calculation "+ x);
// x = x * (1000 - 1) + 1;
// console.log("After Calculation "+ x);

//Generate a Random Int number
// let x = Math.random();
// console.log("Before Calculation "+ x);
// x = x * (1000 - 1) + 1;

// four number otp
// x =  x *  10000;
// console.log("After Calculation "+ x)
// console.log("Floor Calculation "+ Math.floor(x));

// Check a number is odd or even using if- else
//  let x = prompt("Please enter your number");
//  if(x%2 == 0)
//  {
//     console.log(`${x} is a even number`);

//  }else{
//     console.log(`${x} is a odd number`);
//  }

// Check a number is odd or even using ternary oprater
//  let x = prompt("Please enter the number");
//  let res = x%2 == 0? "Even" : "Odd";
//  console.log(`${x} is an ${res} number`);

//Check a number is Prime number 
// let number = prompt("please enter the number");
// if(number == 1){
//     console.log(`${number} is neither prime nor composite number`);
// }else if(number < 1){
//     console.log(`${number} is not a prime `);

// }else{
//     for( var i = 2; i < number; i++)
//     {
//         if(number%1 == 0){
//             var res = `${number} is not a prime number `;
//             break;
//         }else{
//         var res = `${number} is  a prime number `;
        
//         }
//     }
//     console.log(res);
// }

//Larget Among three numbers using Math.max() method


// function check(p, q, r){
//     if(p >= q && p >= r){
//         return p;
//     }else if(q >= p && q >= r){
//         return q;

//     }else{
//         return r;
//     }

// }

// let a = prompt("Please enter First number");
// let b = prompt("Please enter Second number");
// let c = prompt("Please enter Third number");
// let x = check(a, b, c);


// console.log(`${a}, ${b}, ${c}: Largest = ${x}`);


//find factorial number

// let num = prompt("Please enter the number");
// let fact = 1;
// if(num == 0){
//     console.log(`The factorial of $(num) is 1`);
// }else if (num < 0){
//     console.log(`The factorial of -ve number is not possible`);
// }else{
//     for(var i=1; i<=num; i++){
//         fact = fact * i;
//     }
//     console.log(`The factorial of ${num} is ${fact}`);

// }
 
//Find a factorial using recursion

// let number = prompt("Please enter the number");
// let fact = 1;

// function  factr(n){
//     if(n> number){
//         return;
    
//     }
//     let temp =fact;
//     fact = fact * n;
//     n++;
//     factr(n);
// }
// factr(1);
// console.log(`The fact of ${number} is ${fact}`);

//Print the table of any user given number

// function table(number){
//     for(var i= 1; i<= 10; i++){
//         var temp = i * number;
//         console.log(`${number} x ${1} = ${temp}`);
//     }
// }
// table(5);
// table(15);

//Find an Armstrong number

// let number = prompt("Please enter the number");
// let temp =number;
// let sum = 0;
// while(temp > 0){
//     let digit = temp%10;
//     sum += digit**3;
//     temp = parseInt(temp/10);

// }
// if(sum == number){
//     console.log(`${number} is an Armstrong number`);
// }else{
//     console.log(`${number} is  not an Armstrong number`);

//}

// Check if the number have same digit

// let a = prompt("Please enter the First number");
// let b = prompt("Please enter the Second number");
// let c = prompt("Please enter the Third number");

// let res1 = a%10;
// let res2 = b%10;
// let res3 = c%10;

// if(res1 === res2 && res1 === res3){
//     console.log(`${a}, ${b}, ${c} are having the same  last digit`);
// }else{
//     console.log(`${a}, ${b}, ${c} are not  having the same last digit`);

// }

//Palindrome using Array methods

let string = prompt("Please enter the string");
//let len = string.length;

let stringArray =  string.split('');
console.log(stringArray);






