export function doubleNumbers(arr: number[]): number[] {
    return arr.map((num) => num * 2);
}

export function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter((num) => num % 2 === 0);
}

export function sumNumbers(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}
