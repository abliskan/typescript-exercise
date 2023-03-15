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


// Generics - interfaces
interface IPrint {
    print(): void;
}

interface ILogInterface<T extends IPrint> {
    logToConsole(iPrintObj: T): void;
}

class LogClass<T extends IPrint>
    implements ILogInterface<T> {
        logToConsole(iPrintObj: T): void {
            iPrintObj.print();
        }
}

let printObject: IPrint = {
    print() {
        console.log(`printObject.print() called`)
    }
}
let logClass = new LogClass();
logClass.logToConsole(printObject);

// Generics - interfaces | mapped types
interface IAbRequired {
    a: number;
    b: string;
}

let ab: IAbRequired = {
    a: 1,
    b: "test"
}

type WeakInterface<T> = {
    [K in keyof T]?: T[K];
}

let allOptional: WeakInterface<IAbRequired> = {}

// Generics - interfaces | partial, readonly, record, and pick
interface IAbRequired {
    a: number;
    b: string;
}

let ab: IAbRequired = {
    a: 1,
    b: "test"
}

type WeakInterface<T> = {
    [K in keyof T]?: T[K];
}
// Generics - interfaces | conditional types
function logNumberOrString<T> (input: NumberOrString<T>) {
    console.log(`logNumberOrString : ${input}`);
}

// Generics - interfaces | conditional type chaining
interface IA {
    a: number;
}

interface IAb {
    a: number;
    b: string;
}

interface IAbc {
    a: number;
    b: string;
    c: boolean;
}

type abc_ab_a<T> =
    T extends IAbc ? [number, string, boolean] :
    T extends IAb ? [number, string] :
    T extends IA ? [number] :
    never;

function getTupleStringAbc<T>
    (tupleValue: abc_ab_a<T>) : string {
        let [...tupleDestructured] = tupleValue;
        let returnString = "i";
        for (let value of tupleDestructured) {
            returnString += `${value}|`;
        }
        return returnString;
    }

// Generics - interfaces | distributed conditional types
type dateOrNumberOrString<T> = 
    T extends Date ? Date :
    T extends number ? Date | number :
    T extends string ? Date | number | string :
    never;

function compareValues 
    <T extends string | number | Date | boolean> (
        input: T,
        compareTo: dateOrNumberOrString<T>
    ) {
        // write code here
    }

compareValues(new Date(), new Date());
compareValues(1, 2);
compareValues(1, 2);
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");

// Generics - interfaces | conditional type inference
type testInferFromPropertyType<T> = 
    T extends { id: infer U} ? U : never;

function testInferFromPropertyType<T> (
    arg: testInferFromPropertyType<T>
) {}

testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);
*/
// Generics - interfaces | type inference from arrays
type inferTypeFromArray<T> = 
    T extends (infer U)[] ? U : never;

function testInferFromArray<T> (
    arg: inferTypeFromArray<T>
) {}

testInferFromArray<string[]>("test");
testInferFromArray<number[]>(1);

// Generics - interfaces | standard conditional types
type ExcludeStringAndNumber = Exclude<
    string | number | boolean,
    string | number>;

let boolValue: ExcludeStringAndNumber = true;

type NotNullOrUndef = NonNullable<number | undefined | null>;
let numValue: NotNullOrUndef = 1;

// finish