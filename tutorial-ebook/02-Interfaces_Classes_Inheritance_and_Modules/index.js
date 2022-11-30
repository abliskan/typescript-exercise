"use strict";
// Interface
/* Case num-1: Error
interface IIdName {
    id: number;
    name: string;
}

let idObject: IIdNameObject = {
    id: 2
}

// Case num-2: Works
interface IIdName {
    id: number;
    name: string;
}

let idObject: IIdName = {
    id: 2,
    name: "this is a name"
}

// Interface - optional properties
interface IOptional {
    id: number;
    name?: string;
}

let optionalId: IOptional = {
    id: 1
}

let optionalIdName: IOptional = {
    id: 2,
    name: "optional name"
}


// Interface - Complied Away
var idObject = {
    id: 2,
    name: "This is a name"
};
var optionalId = {
    id: 1
};
var optionalIdName = {
    id: 2,
    name: "optional name"
};

// Interface - Weak types (error)
inteface IWeakType {
    id?: number,
    name?: string
}

let weakTypeNoOverlap: IWeakType = {
    description: "a description"
}

// Interface - in operator
interface IIdName {
    id: number;
    name: string;
}

interface IDescrValue {
    descr: string;
    value: number;
}

function printNameOrValue (
    obj: IIdName | IDescrValue): void {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }
    if ('descr' in obj) {
        console.log(`obj.value : ${obj.value}`);
    }
}

printNameOrValue({
    id: 1,
    name: "nameValue"
});

printNameOrValue({
    descr: "description",
    value: 2
});

// Classes
// Case num-1 | this will cause an error
class SimpleClass {
    id: number;
    print(): void {
        console.log(`SimpleClass.print() called.`)
    }
}

// Case num-2 | works
class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log(`SimpleClass.print() called.`)
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.print(); // output = SimpleClass.print() called.

// This keyword
class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();


// Class constructors
class ClassWithConstructor {
    id: number;
    constructor(id: number) {
        this.id = id;
    }
}

let classWithConstructor = new ClassWithConstructor(10);
console.log(`classWithConstructor = ${JSON.stringify(classWithConstructor)}`);


// Class modifiers
class ClassWithPrivateProperty {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}

let privateAccess = new ClassWithPrivateProperty(10);
privateAccess.id = 20;

// Class modifiers - readonly
class ClassWithReadonly {
   readonly name: string;
   constructor(_name: string) {
    this.name = _name;
   }
   setNameValue(_name: string) {
    this.name = _name;
   }
}

// Class modifiers - get and set
class ClassWithAccessors {
    private _id: number = 0;
    get id(): number {
        console.log('get id property');
        return this._id;
    }
    set id(value: number) {
        console.log("set id property");
        this._id = value;
    }
}

let classWithConstructor = new ClassWithAccessors();
classWithConstructor.id = 10;
console.log(`classWithAccessords.id = ${ClassWithAccessors.id}`);

// Class modifiers - static functions
class StaticFunction {
    static printTwo() {
        console.log("2");
    }
}

StaticFunction.printTwo();

// Class modofiers - static properties
class StaticProperty {
    static count = 0;
    updateCount() {
        StaticProperty.count++;
    }
}

let firstInstance = new StaticFunction();
let secondInstance = new StaticFunction();

firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`);

// Class modofiers - namespace
namespace FirsNameSpace {
    export class NameSpaceClass {
        class NotExported {

        }
    }

let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
let NotExported = new FirsNameSpace.NotExported();

// Inheritance
class IdNameClass implements IDerivedFromBase {
    id: number = 0;
    name: string = "nameString";
}

interface IBaseStringOrNumber {
    id: string | number;
}
/*
interface IDerivedFromBaseNumber {
    extends IBaseStringOrNumber {
        id: number;
    }
}

interface IMultiple extends IDerivedFromBase, IDerivedFromBase {
    description: string;
}

let multipleObject: IMultiple = {
    id: 1,
    name: "myName",
    description: "myDescription"
}


interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class BaseClass implements IBase {
    id: number = 0;
}

class DerivedFromBaseClass extends BaseClass implements IDerivedFromBase {
    name: string = "nameString";
}

interface IFirstInterface {
    id: number;
}

interface ISecondInterface {
    name: string;
}

class MultipleInterfaces implements IFirstInterface, ISecondInterface {
    id: number = 0;
    name: string = "namestring";
}

// Inheritance - super function
class BaseClassWithCtor {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}

class DerivedClassWithCtor extends BaseClassWithCtor {
    private name: string;
    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }
}

// Inheritance - overriding
class BaseClassWithFn {
    print(text: string) {
        console.log(`BaseClassWithFn.print() : ${text}`);
    }
}

class DerivedClassFnOverride extends BaseClassWithFn {
    print(text: string) {
        console.log(`DerivedClassFnOverride.print(${text})`)
    }
}

let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");

// Inheritance - protected
class BaseClassProtected {
    protected id: number;
    private name: string = "";
    constructor(id: number) {
        this.id = id;
    }
}

class AccessProtected extends BaseClassProtected {
    constructor(id: number) {
        super(id);
        console.log(`base.id = ${this.id}`);
        console.log(`base.name = ${this.name}`);
    }
}

let accessProtected = new AccessProtected(1);
accessProtected.id = 1;
accessProtected.name = "test";

// Inheritance - abstract
abstract class EmployeeBase {
    public id: number;
    public name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class OfficeWorker extends EmployeeBase {

}

class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = [];
}

let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill");
let jackManager = new OfficeManager(3, "Jack");


abstract class EmployeeBase1 {
    public id: number;
    public name: string;
    abstract doWork(): void;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class OfficeCoWorker extends EmployeeBase1 {
    doWork() {
        console.log(`${this.name} : doing work`);
    }
}

class OfficeCoManager extends OfficeCoWorker {
    public employees: OfficeWorker[] = [];
    manageEmployees() {
        super.doWork();
        for(let employee of this.employees) {
            employee.doWork
        }
    }
}

jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);
jackManager.manageEmployees();

// Inheritance - instanceof
class A {
  
}

class BfromA extends A {

}

class CfromA extends A {

}

class DfromA extends CfromA {

}

console.log(`A instance of A: ${new A() instanceof A}`);
console.log(`BfromA instance of A : ${new BfromA() instanceof A}`);
console.log(`BfromA instance of BfromA ${new BfromA() instanceof BfromA}`);
console.log(`CfromA instance of BformA : ${new CfromA() instanceof BfromA}`)


// Inheritance - interfaces extending classes
class BaseInterfaceClass {
    id: number = 0;
    print() {
        console.log(`this.id = ${this.id}`);
    }
}

interface IBaseInterfaceClassExt extends BaseInterfaceClass {
    setId(id: number): void;
}

class ImplementsExt extends BaseInterfaceClass implements IBaseInterfaceClassExt {
    setId(id: number): void {
        this.id = id;
    }
}
*/
// Modules 
exports.__esModule = true;
var Module1_1 = require("./modules/Module1");
var mod1 = new Module1_1.Module1();
mod1.print();
// Module - renaming
var Module1_2 = require("./modules/Module1");
var myRenamedMod = new Module1_2.Module1;
myRenamedMod.print();
// Module - namespaces
var MultipleExports = require("./modules/MultipleExports");
var meMc1 = new MultipleExports.MultipleClass1();
var meMc2 = new MultipleExports.MultipleClass1();
var DefaultExport_1 = require("./modules/DefaultExport");
var modDefault = (0, DefaultExport_1["default"])(1, 2);
