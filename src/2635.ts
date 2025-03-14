function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray: number[] = []

    arr.forEach((int, index) => newArray.push(fn(int, index)))

    return newArray 

};