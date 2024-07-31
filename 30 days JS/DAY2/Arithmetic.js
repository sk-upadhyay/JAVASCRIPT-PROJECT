var a = 76;
var b = 56; 
var c = a+b;
function add (a,b){
    return a+b;
}
var d = add(a,b);
console.log(c);
console.log(d);
function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function modulo (a,b){
    return a%b;
}

var count = 34;
count+=1;
count-=3;

console.log(count);

function comapre(a,b){
        if(a>b){
            console.log(a,"is bigger than",b);
        }
        else{
            console.log(b,"is greater than",a);   
        }
}



leapYear(1947);