//Operator '+' cannot be applied to types 'string | number' and 'number'

// * 1. Type Narrowing
// 1-1. narrowing by 'typeof'
function myFunc(x: number | string) {
    // x의 타입이 string이면
    if (typeof x === "string") {
        return x + "10";
    } else {
        return x + 10;
    }
}
myFunc(123);

// 1-2. narrowing by 'assertion'
function myArr(x: number | string) {
    let myNumber: number[] = [];

    // 'as' 키워드를 사용하여 타입을 덮어쓰기
    myNumber[0] = x as number;

    let name: string = "jay";
    // name as number;  // 에러 발생! (as문법은 union type에서만 사용 가능)

    let angleBracket: string = "jay";
    // <number>angleBracket; 'angle-bracket' 문법을 사용하여 타입을 덮어쓰기(현재는 권장되지 않음. as문법을 사용할 것)
}
