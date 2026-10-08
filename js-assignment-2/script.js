let name="Mudasir abid";
let fathername="Abid";

let age=24;
let price=100;

let isvalue=true;
let isage=false;

let a;
let x=null;

console.log(name);
console.log(fathername);

console.log(typeof name);

console.log(age);
console.log(price);

console.log(typeof age);

console.log(isvalue);
console.log(isage);

console.log(typeof isvalue);

console.log(typeof a);
console.log(typeof x);

// conversion of data types 
// convert string to number

let num="85";
let newnumber=Number(num);
console.log(newnumber);
console.log(typeof newnumber);

// convert number to string
let n=25;
let conversion=String(n);
console.log(conversion);
console.log(typeof conversion);

// convert string to boolean
let value="ahmad"
let istrue=Boolean(value);
console.log(istrue);
console.log(typeof istrue);

// important task

let nonnumericstring="abc";
let convertor=Number(nonnumericstring);
console.log(convertor);
console.log(typeof convertor);

// we are getting NAN in output which means not a number .So the conversion failed but NAN is 
// still considered a number datatype in javascript.

// important task part 2
let c=0;
let isboolean=Boolean(c);
console.log(isboolean);
console.log(typeof isboolean);

let d=1;
let isbooleanconvert=Boolean(d);
console.log(isbooleanconvert);
console.log(typeof isbooleanconvert);

// i get false and true in output which means in javascript 0 is considered as false
// and 1 is considered as true.
