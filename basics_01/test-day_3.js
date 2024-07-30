// operators in JavaScript  --- 


// let a = 20;
// let b = a/5;
// console.log(b);
//  let c =a%5;
//  console.log(c);


// Increment and decrement 

// Two types =>Pre and Post

// let a = 5;
// let b = ++a;
// let c = b;
// console.log(a);
// console.log(c);

// let a = 5;
// let b = a--;
// let c = b;
// console.log(a);
// console.log(c);




  
 /*
   =>  the major difference between the modulus(%) and Divison(/)
       is that Modulus returns the Remainder and Division returns the quiotent .

   => Increment and decrement operators in javascript works like(refer to 15-25).
      in pre increment/decrement the functionality works like (the value will first incremented and then used) but ;
      in post increment/decrement the functionality works like(first used then the incremented value is then assigned) 
 */


// Assignment Operators :

//  let str1 = "vivek"
// let str2 = " Andole"
// let str3 = str1+str2;
// console.log(str3);


// console.log("1"+2);  String concatination
// console.log("1" + 2 + 2 );   122 because in the first step itself it makes the string combines with number and the whole becomes string and again the same with the next number
// console.log(2 + 2 + "1");  41 it's the vice-versa of the above description 

// here in J.S we can apply the bodmass rule but the whole process is not apprecitable by the developers because if you want to write a code use parenthesis() notation to give the important in it so that it executes first


// console.log(typeof(true));  boolean   
// console.log(typeof(+true)); Number by adding + symbol it is converted(type-conversion) into Number



// ternary Operator(?:)

// W.A.Pto print gratest among the three numbers

// let a = 5;
// let b = 20;
// let c = 15;
// let x1 = (a>b)&&(a>c)?console.log("a is bigger"):(a<c)&&(b<c)?console.log("c is bigger"):console.log("b is bigger");


// console.log(null > 0);  => false 
// console.log(null == 0); => false
// console.log(null >= 0); => true


/*

here in the above code the working principle of the comparision operator(<,>,>=,<=) and the equality check operator (==) is completly different
when we used the graterthan equality comparison the javascript converted the null into 0(typeconversion)
*/

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id === anotherId);

/*

In the above code the Symbol is used Even though we gave the same values to both the id and anotherId 
the comparisionof the two was given false ;
so the Symbol is used to store/make them completely unique 

*/

// Stack and Heap 

// let myName = "Vivek";
// let FullName = myName;
//  FullName = "Andole Vivek";
//  console.log(myName);
//  console.log(FullName);

// let userOne = {
//   email : "vivekndole11@gmail.com",
//   upi : "vivek@axl"

// }
 
// let userTwo = userOne;

// userTwo.email = "andole@gmail.com"

// console.log(userOne);
// console.log(userTwo);




/*
 => First we used the Stack because we decalred string ; so the original value didi not get manuplate dwhen we changed the another string that we equally assigned
  so the functionality here works as the copy of the memory is assigned in the stack and it can manipulte only the copy but not the original string
  Hence we cannot chang the original string

 => But when it comes to the next example we used the object (non-primitive) and we have done changes in the duplicate data but when we print the both duplicate and the original data 
 the data in both of them have been changed .
   * it is because the Non Primitive Data is stord in the heap and the direct reference of the original data has been provided to the duplicate data and 
    any changes in the duplicate data  will actions to the cahnge in he original data 







*/
