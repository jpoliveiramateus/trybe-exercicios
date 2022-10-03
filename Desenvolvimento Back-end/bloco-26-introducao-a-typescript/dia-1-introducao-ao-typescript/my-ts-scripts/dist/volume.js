"use strict";
const unitsVolume = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];
function convertVolume(value, fromUnit, toUnit) {
    const fromIndex = unitsVolume.indexOf(fromUnit);
    const toIndex = unitsVolume.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(1000, exponent);
}
console.log(convertVolume(1000, "km³", "m³"));
