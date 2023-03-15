// Data type: any 
/* #Not best practice
var item1: any { id:1, name: "item1" }
item1 = { id:2 }

// #Best practice - type1
var item1 = <any>{ id:1, name: "item1" } // angled bracket
item1 = { id:2 }

// #Best practice - type2
var item2 = { id:1, name: "item2" } as any;
item2 = { id:2 }

// Data type: union
function printObject(obj: string | number) {
    console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value")

// Explicit casting - any type
// #Best practice - type1
var item3 = <any>{ id:1, name: "item3" }
item3 = { id:3 }

// #Best practice - type1
var item4 = {  id:1, name: "item4" } as any;
item4 = { id:4 }

// Data type: union
function printObject(obj: string | number) {
    console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value");

// Type guards
function addWithGuard(
    arg1: string | number,
    arg2: string | number,
) {
    if (typeof arg1 === "string") {
        // arg1 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
}

console.log(` "1", "2" = ${addWithGuard("1", "2")}`);
console.log(` "1", "2" = ${addWithGuard(1, 2)}`);
console.log(` "1", "2" = ${addWithGuard(1, "2")}`);

// Type alias
type StringOrNumber = string | number;

function addWithTypeAlias (
    arg1: StringOrNumber,
    arg2: StringOrNumber
){ 
    return arg1.toString() + arg2.toString();
}

// Data type: enums
enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

// #1 Enums - string
enum DoorState1 {
    OPEN = "Open",
    CLOSED = "Closed"
}

function checkDoorState1(state: DoorState1) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState1.OPEN:
            console.log(`OPEN = ${DoorState1.OPEN}`);
            break;
        case DoorState1.CLOSED:
            console.log(`CLOSED = ${DoorState1.CLOSED}`);
            break;
    }
}

checkDoorState1(DoorState1.OPEN);
checkDoorState1(DoorState1.CLOSED);

// #1 Enums - const
const enum DoorState2 {
    Open = 10,
    Closed = 20
}

function checkDoorState2(state: DoorState2) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState2.Open:
            console.log(`const Open = ${DoorState2.Open}`);
            break;
        case DoorState2.Closed:
            console.log(`const Closed = ${DoorState2.Closed}`);
            break;
    }
}

checkDoorState2(DoorState2.Open);
checkDoorState2(DoorState2.Closed);

let array = ["123", "456", "789"]

delete array[0];

for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}

function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined) {
        console.log(`invalid array element`);
    }       
    else {
        console.log(`valid array element : ${arrElement}`);
    } 
}

// Data type: null
function privateValues(a: number | null) {
    console.log(`a = ${a}`);
}

privateValues(1);
privateValues(null);

// Nullish coalescing
function nullishCheck(a: number | undefined | null) {
    console.log(`a : ${a ?? `undefined or null`}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

// Null or undefined operands
function testNullOperator(a: number, b: number | null | undefined) {
    let addResult = a + (b ?? 0);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`a + b = ${addResult}`);
}

testNullOperator(1, 3);

// Define assignment 
var globalString!: string;
setGlobalString("this string is set");
console.log(`globalString = ${globalString!}`);
function setGlobalString(value: string) {
    globalString = value;
}

// Object data type
let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
}

function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);
printObjectType("this is a string");

// Unknown data type 
let a: any = "test";
let aNumber: number = 2;
let u:unknown = "an unknown";
u = 1;
console
let aNumber2: number;
aNumber2 = <number>u;
console.log(`number1 = ${aNumber}`);
console.log(`number2 = ${aNumber2}`);

// Never data type 
function alwaysThrows(): never {
    throw new Error("this will always throw");
    return -1;
}

// Never | switch data type 
enum AnEnum {
    FIRST, 
    SECOND
}

function getEnumValue(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        case AnEnum.SECOND: return "Second Case";
    }
    let returnValue: never = enumValue;
    return returnValue;
}

// Object spread
// Sample #1
let firstObj: object = {id: 1, name: "firstObj"};
let secondtObj: object = { ...firstObj};

console.log(`secondObj : ${JSON.stringify(secondtObj)}`);

// Sample #2
let nameObj: object = {name: "nameObj name"};
let idObj: object = { id : 1};

let obj3 = { ...nameObj, ...idObj};

console.log(`obj3 = ${JSON.stringify(obj3)}`);

// Spread precedence 
let objPrec1: object = { id: 1, name: "obj name"};
let objPrec2: object = { id: 2, desc: "obj description"};
let objPrec3 = { ...objPrec1, ...objPrec2};

console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);

// Spread with arrays
let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];

console.log(`third array = ${thirdArray}`);

let objArray1 = [
    { id:1, name: "first element"},
]

let objArray2 = [
    { id:2, name: "second element"}
]

let objArray3 = [
    ...objArray1, 
    ...objArray2,
    { id:3, name: "third element"}
]

console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);

// Tuples
let tuple1: [string, boolean];
let tuple2: [string, any];
tuple1 = ["test", true];
tuple2 = ["run", false]

// tuple desctructuring
// #1 
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);
console.log(`tuple2[0] : ${tuple2[0]}`);
console.log(`tuple2[1] : ${tuple2[1]}`);

// #2
let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);

// #3 - optional tuple elements 
let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];
console.log(`tupleOptional[0] = ${tupleOptional[0]}`);
console.log(`tupleOptional[1] = ${tupleOptional[1]}`);

// Tuple and spread syntax 
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];

// Object destructuring
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
}

let { aNum, bStr, cBool } = complexObject;

console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`); 

let { aNum: objId, bStr: objName, cBool: isValid} = complexObject;

console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`); 

// Functions 
// #1 Optional parameter
function concatValues(a: string, b?: string) {
    console.log(`a + b = ${a + b}`);
}

concatValues("first", "second");
concatValues("third");

// #2 Default parameters
function concatWithDefault(a: string, b: string = " default") {
    console.log(`a + b = ${a + b}`);
}

concatWithDefault("first", "second");
concatWithDefault("third");

// #3 Rest parameters
function testArguments(...args: string[] | number[]) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}

testArguments("1");
testArguments(10, 20);

// #4 Function callbacks
// #5 Function signatures as parameters
function myCallback(text: string): void {
    console.log(`myCallback called with ${text}`);
}
function withCallbackArg(message: string, callbackFn: (text: string) => void) {
    console.log(`${message} from withCallbackArg`)
    callbackFn(`${message} from withCallback`);
}

withCallbackArg("initial text". myCallback);
withCallbackArg("text", "this is not a function");

// Function overrides
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
    return a + b;
}

add("first", "second");
add(1, 2);

// Literals
type AllowedStringValues = "ones" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiteral(input:
    AllowedStringValues | AllowedNumericValues) {
    console.log(`called with : ${input}`);
}

withLiteral("one");
withLiteral("two");
withLiteral("three");
withLiteral(65535);

withLiteral("four");
withLiteral(2);

// Literals 
type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiterals(input:
    AllowedNumericValues | AllowedStringValues) {
        console.log(`called with : ${input}`);
    }

withLiterals("one");
withLiterals(65535);

withLiterals("four");
withLiterals(535);
*/

// finish