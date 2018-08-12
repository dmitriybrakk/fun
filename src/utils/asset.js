export const toPrecision = (numberString, digits) => numberString.substring(0, numberString.indexOf('.') + (digits + 1));

export const getTotal = (quantity, price) => (quantity && price && toPrecision((quantity * parseFloat(price)).toString(), 4)) || '';
