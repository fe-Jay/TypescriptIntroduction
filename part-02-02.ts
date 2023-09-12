// Narrowing 할 수 있는 방법 더 알아보기

function narrFunc(a?: string) {
    // if문 안에 undefined가 들어오면 실행되지 않도록 && 조건식 실행.
    if (a && typeof a === "string") {
        console.log(a);
    } else {
        console.log("a is not string");
    }
}

// * 서로 다른 속성을 가진 타입을 구분할 때는 'in' 키워드를 사용.
type Fish = { swim: string };
type Bird = { fly: string };

const animalFunc = (animal: Fish | Bird) => {
    // animal 안에 swim이 있으면 실행(Fish 타입인지 확인)
    if ("swim" in animal) {
        animal.swim;
    }
};

// * instanceof 키워드를 사용하면 class 타입 구분 가능.
let days = new Date();
if (days instanceof Date) {
    console.log("오늘은 " + days + " 입니다.");
}

type Car = {
    model: 4;
    wheel: "4개";
    color: string;
};
type Bike = {
    wheel: "2개";
    color: string;
};

const rideFunc = (x: Car | Bike) => {
    if (x.wheel === "4개") {
        console.log("Car:", x.wheel);
    } else if (x.wheel === "2개") {
        console.log("Bike:", x.wheel);
    }
};
