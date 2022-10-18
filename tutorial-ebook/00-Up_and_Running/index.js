"use strict";
/*
// Basic Types - primitive types
let id: number = 051;
let company: string = 'SBL';
let myStringArray: string[] = [`first`, `second`, `third`]; // type = string array
let myBoolean: boolean = true;
let test: null = null;
let test2: unknown = 5;
let test3: any = 6;
const test4: unique symbol = Symbol("seven");
let test5: never;

myBoolean = id === 456;
myStringArray = [id.toString(), `4567`];
id = myStringArray.length;
console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`id = ${id}`);

// Enums = They allow us to create named constants
const enum Bool {
  True,
  False
}

let truth: Bool = Bool.True;

// Array and tuples = Arrays represent a collection of items of the same type
const arr: number[] = [1, 2, 3];

// Classes = These are typical Object-Oriented Programming (OOP) abstractions that
// allow us to define objects of a specific shape with properties, methods, and visibility
// modifiers.
class User {
private name: string;
constructor(name: string) {
this.name = name;
}
public getName(): string {
return this.name;
}
}
const user = new User("Theo");
console.log(user.getName()); // prints "Theo"
*/
// Function 
function calculate(a, b, c) {
    return (a * b) + c;
}
console.log(`calculate() = ${calculate(3, 2, 1)}`);
