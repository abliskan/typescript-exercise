// modules - exporting modules
export class Module1 {
    print(): void {
        localPrint(`Module.print() called`);
    }
}

function localPrint(text: string) {
    console.log(`localPrint: ${text}`);
}
