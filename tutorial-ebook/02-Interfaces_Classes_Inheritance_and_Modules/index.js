var idObject = {
    id: 2
};
var idObject = {
    id: 2,
    name: "this is a name"
};
var optionalId = {
    id: 1
};
var optionalIdName = {
    id: 2,
    name: "optional name"
};
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
inteface;
IWeakType;
{
    id ?  : number,
        name ?  : string;
}
var weakTypeNoOverlap = {
    description: "a description"
};
function printNameOrValue(obj) {
    if ('id' in obj) {
        console.log("obj.name : ".concat(obj.name));
    }
    if ('descr' in obj) {
        console.log("obj.value : ".concat(obj.value));
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
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.print() called.");
    };
    return SimpleClass;
}());
// Case num-2 | works
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.print() called.");
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.print(); // output = SimpleClass.print() called.
// This keyword
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.print = function () {
        console.log("SimpleClass.id = ".concat(this.id));
    };
    return SimpleClass;
}());
var mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
// Class constructors
var ClassWithConstructor = /** @class */ (function () {
    function ClassWithConstructor(id) {
        this.id = id;
    }
    return ClassWithConstructor;
}());
var classWithConstructor = new ClassWithConstructor(10);
console.log("classWithConstructor = ".concat(JSON.stringify(classWithConstructor)));
// Class modifiers
var ClassWithPrivateProperty = /** @class */ (function () {
    function ClassWithPrivateProperty(id) {
        this.id = id;
    }
    return ClassWithPrivateProperty;
}());
var privateAccess = new ClassWithPrivateProperty(10);
privateAccess.id = 20;
// Class modifiers - readonly
var ClassWithReadonly = /** @class */ (function () {
    function ClassWithReadonly(_name) {
        this.name = _name;
    }
    ClassWithReadonly.prototype.setNameValue = function (_name) {
        this.name = _name;
    };
    return ClassWithReadonly;
}());
// Class modifiers - get and set
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
        this._id = 0;
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        get: function () {
            console.log('get id property');
            return this._id;
        },
        set: function (value) {
            console.log("set id property");
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    return ClassWithAccessors;
}());
var classWithConstructor = new ClassWithAccessors();
classWithConstructor.id = 10;
console.log("classWithAccessords.id = ".concat(ClassWithAccessors.id));
// Class modifiers - static functions
var StaticFunction = /** @class */ (function () {
    function StaticFunction() {
    }
    StaticFunction.printTwo = function () {
        console.log("2");
    };
    return StaticFunction;
}());
StaticFunction.printTwo();
// Class modofiers - static properties
var StaticProperty = /** @class */ (function () {
    function StaticProperty() {
    }
    StaticProperty.prototype.updateCount = function () {
        StaticProperty.count++;
    };
    StaticProperty.count = 0;
    return StaticProperty;
}());
var firstInstance = new StaticFunction();
var secondInstance = new StaticFunction();
firstInstance.updateCount();
console.log("StaticProperty.count = ".concat(StaticProperty.count));
// Class modofiers - namespace
var FirsNameSpace;
(function (FirsNameSpace) {
    var NameSpaceClass = /** @class */ (function () {
        function NameSpaceClass() {
        }
        return NameSpaceClass;
    }());
    FirsNameSpace.NameSpaceClass = NameSpaceClass;
    var NotExported = /** @class */ (function () {
        function NotExported() {
        }
        return NotExported;
    }());
})(FirsNameSpace || (FirsNameSpace = {}));
var nameSpaceClass = new FirstNameSpace.NameSpaceClass();
var NotExported = new FirsNameSpace.NotExported();
