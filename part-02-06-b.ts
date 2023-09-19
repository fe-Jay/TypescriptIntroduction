// 타입도 import export 해서 씁니다 그리고 namespace

// * 경로를 입력해 destructuring import 실행
import { expName, ExpType, ExpInterface, expAge } from "./part-02-06-a";
console.log(expName); // => kim

// type도 import 가능
let expTypeVar: ExpType = {
    name: "Jay",
};

let expInterfaceVar: ExpInterface = {
    age: 100,
};

// * 이전버전 namespace는 reference path로 import 해야했음.(참고만할 것)
// <reference path="./part-02-06-a.ts" />

// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
import { Car, Bike } from "./part-02-06-a";
let myCar: Car = {
    wheel: 4,
    model: "Volvo",
};

let myBike: Bike = {
    wheel: 2,
    model: "BMW",
};

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
import { voidFunc } from "./part-02-06-a";
const sampleFunc: voidFunc = (obj) => {
    console.log(obj);
};

sampleFunc({ a: 1, b: 2 }); // => { a: 1, b: 2 }
