// Arrays and Array Methods


// const myArr = Array(1,2,3,4,5);
// const newA = myArr.push(7);
// console.log(myArr);
// const newb = myArr.pop(7);
// console.log(myArr);
//  const arr1 = ["spiderman","superman","batman"];
//  const arr2 = ["thor","ironman","captain"];
//  const arr3 = arr1.concat(arr2);
//  console.log(arr3);


//  const arr1 = ["spiderman","superman","batman"];
//  const arr2 = ["thor","ironman","captain"];
//  const arr3 = [...arr1,...arr2];
//  console.log(arr3);


// const a = [1,2,3,[5,9,8,[10,22,21]],54];
// const b = a.flat(Infinity);
// console.log(b);

// const a = ("Vivek");
// const d = Array.from(a);
// console.log(d); 

// const a = ("Vivek");
// const b = ("hi");
// const c = ("Andole");
// const d = Array.of(a,b,c);
// // const d = Array.from(a,b,c);   it gives error
// console.log(d); 


// const arr1 = [1,2,3,4,5,6];
// const new1 = arr1.push(7); 
// console.log(arr1);
// const new3 = arr1.shift();
// const new4 = arr1.unshift("7");
// const new2 = arr1.pop();
// console.log(arr1.lastIndexOf(6));
// console.log(arr1.includes(9));
// console.log(arr1);

// let arr = ["vivek","Andole"];
// let new1 = arr.join(" Andole Aravind ");
// console.log(typeof new1);
// console.log(new1);

// const arr = [1,2,3,4,5,6];
// const arr2 = arr.join("hi")
// console.log(arr2);


// const arr1 = ["hi","hello","welcome","good","bad"];
// const arr2 = arr1.slice(1,3);
// console.log(arr2);
// console.log(arr1);


// const arr3 = ["hi","hello","welcome","good","bad"];
// const arr4 = arr3.splice(1,3);
// console.log(arr4);
// console.log(arr3);

// let arr7 = [1,2,3,4,5];
// let arr8 = [7];
// arr8.push(arr7)   
// console.log(arr8);  // [ 7, [ 1, 2, 3, 4, 5 ]];


// const arr9 = [1,2,3,4,5,6,7];
// const arr10 = [8,9,10,11];
// console.log(...arr9,...arr10);


// const obj = {"name" : "vivek"};
// const obj3 = from(obj.name);
// console.log(obj3);


// let a = "hi";
// let b = "hello";
// console.log(Array.from(b));
// console.log(Array.of(a,b));


// let a = [1,2,3,4,5,6,7];
// a[3]=9;
// console.log(a);


// let a =[1,2,3,4,5,6];
// let b = a.toString() 
// console.log(b);
// console.log(typeof b);
// let a = [1,2,3,4,5,6];
// console.log(a[2]);
// console.log(a.at(-2));

// let a = ["c","t","h","a","z","m"];
// let j = a.sort()
// console.log(j);


// let a = [1,2,3,4,5,6];
// console.log(a.reverse());


// let a = ["hi","hello"];
// let b = a.join(" welcome ");
// console.log(b);
// console.log(typeof b);


// let a = "hello";
// let b = [1,2,3,4,5];
// console.log(b.splice(6,7,"hello","hi"));
// console.log(b);
// console.log(b);
// console.log(a.slice(1,2));
// console.log(a);

// let a = [1,2,3,4,5,6,7,8];
// console.log(a.copyWithin(2,4));




/*
 => The Push() method adds the given number into the Array

 => The pop() method removes the last element from the Array

 => Unshift() method adds the given element into the Array to the Begining(Array[0]yh element) of the Array

 => Shift() method removes the first element of the Array 

 => Concat() method adds the two Array's

 => includes() method helps us to find out the given elment is in the String or not and the result is given in the boolean values

 => indexof() method helps us to find the index of the element from the begining of an array

 => LastIndexof() method helps us to find the index of the element from the End of an Array(Reverse of Indexof )

 => join() method joins the elements in the array ,if we give any parameters to the join(), it adds in the middle of the elements(refer line 52-54) and then it convert the datatype from Array to String

 => slice() method instances changes in the array it counts the parameters(a,b) here it includes a and includes all the arrays elements that exist before the b(excluding b) , and it does not modify the existing array .
    
 => splice() method instances the changes in the array it counts the parameters(a,b) here it includes all the elements from a to b (including b) , and it manipulates the existing array

 => The main differnce between the Splice and Slice is they both are used to instance the changes in the array but 
   * slice takes the parameters as (a,b) it counts a and it goes till b but does not include b and it does not the manipulate the original array(main difference)
   * splice takes the parameters as (a,b) it counts a and it does  include b and it manipulate the original array(main difference)
  
 => In the line -68 we used push method to push the two arrays and the main problem here is it combines along with the array(it consides another array as a data ) so we can use concat() method to merge the two Arrays by taking a new variable;
    it can be simply done by spread operator (...)refer line - (74-76).

 => flat() method is used to comine all the sub-arrays into one single array.

 => isArray() method is used to check whether the gven element is an Array or not(True/false).

 => from() method is used to convert element of any datatype into an Array.

 => of() method is used to convert multiple elements into the Array

 => at() method is used to find the values at the indexes and it can take the negative values also.

 => sort() method is used to sort the array into the alphabetical/numerical order.
 
 => reverse() method is used to reverse the whole array.

*/