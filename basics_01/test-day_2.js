/*
   DataTypes 
     1 - Primitive 
       They are immutable ()
       a - Number 
       b - String 
       c - Boolean
       d - undefined 
       e - Null
       f - BigInt
       g - Symbol




     2 - Non-Primitive
       they are  Mutable ()
       a - Arrays 
       b - Objects 
       c - Functions
       d - Regular Expressions
       e - Sets and Maps

  
     
*/

// let a = 25
// b = a**2;
// console.log( typeof typeof b);

// let a = null;
// console.log(typeof a);  => type of null is object because 


// let a = [1,2,3,4,5];
// console.log(typeof a);  => type of array is object

// let a = [1,8,25,80,54];
// console.log(a[3]-1);

// console.log(a[4]);
// let obj = {
//     "key1":"vivek",
//     "key2":"Aravind",
//     "key3":[1,2,3,4,5],
//     key4:{name:"vishnu",city:"Hyd",phone:"5455445",address:{"d.no" : "5-4-8-14/4"}}
// console.log(obj["key3"][4]);
// console.log(obj.key2);
// console.log(obj.key4.name);


// const x = [1,2,3,4,5];
// x[1]=8;
// console.log(x);

// let x = 25;
// let y = "25";
// console.log(x===y);
    


// Confusion in DataTypes

// let a = "33ab";

// console.log(typeof a);
// console.log(typeof (a));

// let b = Number(a);
// console.log(typeof b);
// console.log(b);


// let valueInNumber = null;
 // console.log(typeof valueInNumber);
    
// let b = Number(valueInNumber);
// console.log(b);

// let valueInNumber = undefined;
//  console.log(typeof valueInNumber);
    
// let b = Number(valueInNumber);
// console.log(b);
 
// let isLoggedIn = 1;
// let boolean = Boolean(isLoggedIn);
// console.log(boolean);






/*
   => so when we convert any string that has numbers along with the words can be converted into number 
   when we convert by using the Number() method but when we print it it shows NaN because 
   when we combine the number with any alphabet it converts into Not a Number  
   
   => when we print the Number of null then it gives output as 0

   => when we print the Number of Undefined then we get NaN as output

   => when we print the Number of any Boolean Values then we get 1(true) and o(false) as Output
   ** And we get its Vice-Versa when you give 1 to Boolean() method it gives you true and 0 (false)

   => If you Print Number of any String then it gives NaN
*/


