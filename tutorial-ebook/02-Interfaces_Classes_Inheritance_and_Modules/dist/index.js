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
*/
// Complied Away
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
// 
