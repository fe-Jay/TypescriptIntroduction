// Object에 쓸 수 있는 interface 문법

// * interface는 extends로 상속받을 수 있음.
// 일반 함수나 변수는 type로 선언, object는 interface로 선언하는 것이 좋음!
interface Students {
    name: string;
}
// interface는 중복선언 가능 (유연하게 속성추가 가능)
interface Students {
    score?: number;
}
interface Teachers extends Students {
    age: number;
}

let student: Students = { name: "kim" };
let teacher: Teachers = { name: "kim", age: 20 };

// * Intersection Types(두 타입을 모두 만족하는 타입이라는 뜻)
type Animal = { name: string };
type Cat = { age: number } & Animal;

let citty: Cat = { name: "citty", age: 20 };
