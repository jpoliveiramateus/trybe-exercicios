"use strict";
var daysWeek;
(function (daysWeek) {
    daysWeek[daysWeek["Sunday"] = 1] = "Sunday";
    daysWeek[daysWeek["Monday"] = 2] = "Monday";
    daysWeek[daysWeek["Tuesday"] = 3] = "Tuesday";
    daysWeek[daysWeek["Wednesday"] = 4] = "Wednesday";
    daysWeek[daysWeek["Thursday"] = 5] = "Thursday";
    daysWeek[daysWeek["Friday"] = 6] = "Friday";
    daysWeek[daysWeek["Saturday"] = 7] = "Saturday";
})(daysWeek || (daysWeek = {}));
var RainbowColors;
(function (RainbowColors) {
    RainbowColors["Red"] = "Vermelho";
    RainbowColors["Orange"] = "Laranja";
    RainbowColors["Yellow"] = "Amarelo";
    RainbowColors["Green"] = "Verde";
    RainbowColors["Blue"] = "Azul";
    RainbowColors["Indigo"] = "Anil";
    RainbowColors["Violet"] = "Violeta";
})(RainbowColors || (RainbowColors = {}));
console.log(daysWeek.Sunday);
console.log(RainbowColors.Indigo);
