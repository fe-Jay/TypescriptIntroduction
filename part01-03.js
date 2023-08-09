// 1. TypeScript의 기본 타입 예제
var userName;
var userAge;
var user = "kim123"; // |는 유니온 타입
var users = ["kim", "park", "lee"];
var userObj = { name: "kim", age: 30 }; // ?는 선택적 프로퍼티
var vipUser;
var jay = [99, true]; // tuple Type
var paul = {
    name: "Paul",
    age: 22,
};
// 4. 함수의 타입 지정
function typeFunction(x) {
    return x * 2;
}
// 5. class의 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// 6. 두가지 이상의 타입을 허용하는 union Type
var union = "kim";
var unionArr = [1, "2", 3]; // 소괄호로 묶어주어야 함
var unionObj = { a: 111 };
// 7. 모든 타입을 허용하는 any, unknown Type
var any;
any = 123;
any = true;
var unknown;
unknown = 123;
unknown = true;
any - 1; // any 타입은 다른 타입과 연산이 가능
// unknown - 1; // unknown 타입은 다른 타입과 연산이 불가능
var age;
// age + 1; // number 타입만 연산이 가능
// 8. 함수의 type 지정
// 8-1. 함수의 parameter, return 타입 지정
var multiple = function (x) {
    return x * 2;
};
multiple(10); // => 20
// 8-2. void 타입
var printMe = function (x) {
    // return 1 + 1; // void 타입은 return을 방지
    x++;
};
// 8-3. 파라미터가 option인 경우
var optFunction = function (x, y) {
    // y?: number는 y가 없을 수도(undefined) 있다는 의미
    console.log(x, y);
};
optFunction(); // => undefined, undefined
