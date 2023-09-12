// never

// never 타입은 void로 대체 가능하고 거의 사용하지 않음. 알고만 있으면 됨
// - 무언가를 Return하지 않는 함수를 표현할 때 사용.
// - 끝나지 않는 함수(무한반복)를 표현할 때 사용.

// 1. 조건문에서 실행 가능성이 없는 값은 never 타입이 된다.
function sampleNeverFunc(param: string) {
    if (typeof param == "string") {
        console.log("string", param);
    } else {
        // param이 string일 수 밖에 없으므로 never타입이 된다.
        console.log(param);
    }
}

// 2. error을 throw해서 return이 없기 때문에 never 타입 함수가 된다.
let sampleNeverFunc2 = () => {
    throw new Error("ERROR!!");
};

// 3. 무한 반복문이기 때문에 never 타입 함수가 된다.
let sampleNeverFunc3 = () => {
    while (true) {
        console.log("hello");
    }
};
