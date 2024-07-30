// Numbers and Math


// const balance = new Number(100);
// const balance1 = 100;
// console.log(typeof balance1); 
// console.log(typeof balance);



// let num = 135.5542;
// let k=num.toPrecision(4);
// console.log(k);
// console.log(typeof k);



// let a = 152.254;
// console.log(Number.isInteger(a));

// console.log(Number.isFinite(225.25));

/*

  => toPrecision method changes the values to String

*/



// Math Methods

// Math.abs

// let a = -175.5;
// let b = Math.abs(a);
// console.log(b);


// let ceilvalue = Math.ceil(7.05);
// console.log(ceilvalue);

// let floorValue = Math.floor(7.85);
// console.log(floorValue);


// let roundValue = Math.round(1.4);
// let roundValue2 = Math.round(1.8);
// console.log(roundValue);
// console.log(roundValue2);

// const maxValue = Math.max(1,2,3,4,5,24,58,709);
// console.log(maxValue);

// const maxValue = Math.max([1],[2],[3],[4])
// console.log(maxValue);

// const maxValue = Math.max([1,2],[2,3],[3,4],[4])
// console.log(maxValue);


// const minValue = Math.min(1,2,3,4,5,24,58,709);
// console.log(minValue);

// let powValue = Math.pow(25,2);
// console.log(powValue);

// let sqrt = Math.sqrt(625);
// console.log(sqrt);


// let k = Math.random();
// console.log(k);

// let otp = Math.ceil(Math.random()*1000000);
// console.log(otp);

let otp = Math.floor(Math.random()*1000000);
 console.log(otp);



/*
 => Math.abs() : It Returns the absolute value of a number
    (i.e) if we pass any negative values then we get positive values.

 => Math.ceil() : It returns the Round up value to the nearest integer
    Even if we give the value like 7.1 it rounds up and produces the output to 8.

 => Math.floor() : It returns the nearest floor value (i.e)
 if we give the value like 7.8, the Math.floor gives the output 7 

 => Math.round() : It returns the round up value that is nearer to the give integer 
  (i.e) if we give a number like 1.4 it gives the output 1
  and if we give 1.8 it round up and gives 2 as output

 => Math.max() : it returns the maximum value among the given numbers

 => Math.min() : it returns the minimum value among the given numbers
{
 ** In the 58,59th line the array contains more than single value in the array and Math.max & Math.min value for those arrays the output is NaN
   }

 => Math.pow() : It returns the Exponent power.
  here it takes two parameters (a,b) a is the base value and b is the exponent power value. 

 => Math.sqrt() : It gives the sqrt of the given number it has only one parameter.

 => Math.random() : It generates the random values and it generates the values between 0 and 1.
  
 **** By using Math.ceil(Math.random())*1000000) we can generate the six digit otp. we can use either ceil/floor  

 => 

*/