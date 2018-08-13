export const toPrecision = (numberString, digits) => numberString.substring(0, numberString.indexOf('.') + (digits + 1));

export const getTotal = (quantity, price) => (quantity && price && (quantity * parseFloat(price))) || 0;

export const floatSum = (a, b) => parseFloat(a) + parseFloat(b);

export const floatMult = (a, b) => parseFloat(a) * parseFloat(b);

export const floatDivison = (a, b) => parseFloat(a) / parseFloat(b);
