var name=['fara','mosin','ashwini','sanjana','prajwal','shara'];
var num=[10,15,20,25,30,35,40];
var str='javascript';


// sort given array of string 
// console.log(name.sort());


//Write a JavaScript function to clone an array
function clone(){
    var clonearray=name.slice();
    console.log(clonearray);
}


//Write a JavaScript function to return first element from array 
function first()
{
    var fst=name.slice(0,1);
    console.log(fst);
}


//converte array of string to string
function stos()
{
    var s=name.toString();
    console.log(s);
}


//converte string two uppercase
function strupper()
{
    console.log(str.toUpperCase());
}


//converte string two lowercase
function strlower()
{
    console.log(str.toLowerCase());
}


//finding value
function findvalue()
{
    var n=num.find((e)=>e>20);
    console.log(n);
}

//check element is present or not
function check()
{
    var n=num.includes(20);
    console.log(n);
}


//Demostration of filter method
function fil()
{
    console.log("Increament each value of array by 1!!")
    var newarray=num.filter((e)=>{
        return e<15;
    });
    console.log(newarray);
}
// clone();
// first();
// stos();
// strupper();
// strlower();
// findvalue();
// check();
// fil();