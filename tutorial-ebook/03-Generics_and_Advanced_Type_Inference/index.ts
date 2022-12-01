// Generics 
/*
var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = ['first', 'second', 'third'];

myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), '5678'];
myNumber = myStringArray.length;

console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);
*/
function printGeneric<T>(value: T) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`);
}

printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1});

// Generics - Multiple generics