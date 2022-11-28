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
