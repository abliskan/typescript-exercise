// Interface
// Case num-1: Error
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
