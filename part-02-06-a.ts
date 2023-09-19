// 타입도 import export 해서 씁니다 그리고 namespace

// * 내보내기를 원하면 export 키워드 사용.
export let expName = "kim";
export let expAge = 10;

// type도 export 가능
export type ExpType = {
    name: string;
};

export interface ExpInterface {
    age: number;
}

// * 이전버전 type 변수는 namespace로 묶어서 object로 export해야 했음.
namespace expNamespace {
    export type oldName = string | number;
}

let testVar: expNamespace.oldName = "Paul";

// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
export type Car = {
    wheel: number;
    model: string;
};

export interface Bike {
    wheel: 2;
    model: string;
}

// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
export type voidFunc = (obj: object) => void;

// (숙제3) 타입 중복이 너무 많이 발생합니다
namespace GoodDog {
    export type Dog = string;
}
namespace BadDog {
    export interface Dog {
        name: string;
    }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
