type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(expected: any): ToBeOrNotToBe {

function toBe(val: number) {
    if (expected === val) {
        return true
    }

    if (expected !== val) {
        throw new Error("Not Equal")
    }
}

function notToBe(val: number) {
    if (expected !== val) {
        return true
    }

    if (expected === val) {
        throw new Error("Equal")
    }
}

return {
    toBe,
    notToBe
}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */