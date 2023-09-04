var cutZero = function (str) {
    return str[0] === "0" ? str.slice(1) : str;
};
var removeDash = function (str) {
    return parseInt(str.replace(/-/g, ""));
};
var extendFunc = function (str, func1, func2) {
    console.log(removeDash(cutZero(str)));
};
extendFunc("010-1111-2222", cutZero, removeDash);
