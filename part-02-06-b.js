"use strict";
// 타입도 import export 해서 씁니다 그리고 namespace
Object.defineProperty(exports, "__esModule", { value: true });
// * 경로를 입력해 destructuring import 실행
var part_02_06_a_1 = require("./part-02-06-a");
console.log(part_02_06_a_1.expName); // => kim
// type도 import 가능
var expTypeVar = {
    name: "Jay",
};
var expInterfaceVar = {
    age: 100,
};
var myCar = {
    wheel: 4,
    model: "Volvo",
};
var myBike = {
    wheel: 2,
    model: "BMW",
};
var sampleFunc = function (obj) {
    console.log(obj);
};
sampleFunc({ a: 1, b: 2 }); // => { a: 1, b: 2 }
