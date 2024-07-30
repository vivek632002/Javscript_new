// Date Methods in JavaScript
  
// here it takes the Gmt(Greewich Mean Time) as Reference if we do not metion any paticular time


// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let createdDate = new Date(2024, 6, 28);
// let createdDate = new Date(2024, 6, 28, 15, 46);
// let createdDate = new Date("2024-07-14");
// let createdDate = new Date("07-28-2024");


// console.log(createdDate.toString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// let myDate = new Date("04-07-2024")
// console.log(myDate.getTime());


// let newDate = new Date();
// console.log(newDate.getMonth());


let newDate = new Date();
newDate.toLocaleString(`default`,{
    weekday:"long"
})
console.log(newDate);
/*
   => The Type of Date is object 

   *** In Date Method the month satrts from 0(January) and ends with 11(December) ***

  => in line 22 we got the milliseconds value of the current time and
   the milliseconds are caluclated from the time(01-01-1970) 
  
    *** All the Date method Values are calucalted from the Date(01-01-1970).
*/


let d1 = new Date();
// let s1 = d1.getSeconds();
let s2 = Date.parse(d1);
console.log(s2);
/*
 => To get the current seconds we use the new date method and we pass .get seconds to that date 


*/

// Set Methods :


