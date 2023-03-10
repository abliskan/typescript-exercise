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
class Concatenator<T extends Array<string> | Array<number>> {
    public concatenateArray(items: T): string {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }
        return returnString;
    }

    let concator = new Concatenator();

    let concatResult = concator.concatenateArray([
        "first", "second", "third"
    ]);

    console.log(`concatResult = ${concatResult}`);

    concatResult = concator.concatenateArray([
        1000, 2000, 3000
    ]);

    console.log(`concatResult = ${concatResult}`);

// Generics - constraints
function printProperty<T, K extends keyof T>
    (object: T, key: K) {
        let propertyValue = object[key];
        // console.log(`object[${key}] = ${propertyValue}`)
    }
let obj1 = {
    id: 1,
    name: "myName",
    print() {
        console.log(`${this.id}`)
    }
}

printProperty(obj1, "id");
printProperty(obj1, "name");
// printProperty(obj1, "surname");
*/
var LogClass = /** @class */ (function () {
    function LogClass() {
    }
    LogClass.prototype.logToConsole = function (iPrintObj) {
        iPrintObj.print();
    };
    return LogClass;
}());
var printObject = {
    print: function () {
        console.log("printObject.print() called");
    }
};
var logClass = new LogClass();
logClass.logToConsole(printObject);
// Generics - interfaces | mapped types
// Generics - interfaces | partial, readonly, record, and pick
// Generics - interfaces | conditional types
// Generics - interfaces | conditional type chaining
// Generics - interfaces | distributed conditional types
// Generics - interfaces | conditional type inference
// Generics - interfaces | type inference from arrays
// Generics - interfaces | standard conditional types
// Last log (inside): 136
