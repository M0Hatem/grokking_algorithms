/**
 * Calculate the factorial of a number.
 * @param num - The number to calculate the factorial of.
 * @returns The factorial of the input number.
 * @throws Will throw an error if the input number is negative.
 */
function calculateFactorial(num: number): number {
    if (num < 0) {
        throw new Error('Input must be a non-negative number');
    }

    // Base case: factorial of 0 or 1 is 1
    if (num === 0 || num === 1) {
        return 1;
    }

    // Recursive case: num * factorial of (num - 1)
    return num * calculateFactorial(num - 1);
}

try {
    console.log(calculateFactorial(-1));
} catch (error) {
    console.error(error.message);
}