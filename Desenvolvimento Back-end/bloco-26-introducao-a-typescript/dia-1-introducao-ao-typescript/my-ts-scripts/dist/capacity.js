"use strict";
const unitsCapacity = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, fromUnit, toUnit) {
    const fromIndex = unitsCapacity.indexOf(fromUnit);
    const toIndex = unitsCapacity.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
console.log(convertCapacity(1000, 'ml', 'l'));
