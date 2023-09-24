// Function to calculate the rule of three
export const numberInverter = (value: number): number => {
    // Make sure the values are not zero to avoid division by zero
    if (value === 0) {
     // "Unable to calculate. One of the values is zero.";
        return 0;
    }
    const result = 1 / value;

    return result;
}
