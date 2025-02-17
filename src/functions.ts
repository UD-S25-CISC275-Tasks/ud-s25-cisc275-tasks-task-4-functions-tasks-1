/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature - 32) * (5 / 9);
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let first_is_positive: number = 0;
    let second_is_positive: number = 0;
    let third_is_positive: number = 0;
    if (first > 0) {
        first_is_positive = first;
    }
    if (second > 0) {
        second_is_positive = second;
    }
    if (third > 0) {
        third_is_positive = third;
    }
    return first_is_positive + second_is_positive + third_is_positive;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    //let moddified_message = message.toUpperCase();
    //return moddified_message + "!";

    let upper_case = "";
    for (let i: number = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);
        // Check if the character is a lowercase letter
        if (charCode >= 97 && charCode <= 122) {
            // Convert to uppercase by subtracting 32 from the char code
            charCode -= 32;
        }
        upper_case += String.fromCharCode(charCode);
    }

    return upper_case + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    return message[message.length - 1] === "?" ? true : false;
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    if (word === "yes" || word === "YES" || word === "Yes") {
        return true;
    } else if (word === "no" || word === "NO" || word === "No") {
        return false;
    } else {
        return null;
    }
}
