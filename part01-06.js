// ? Literal Types
// 문자열, 숫자, 불리언, 객체, 배열, 함수, null, undefined, any, never, unknown, void, enum, tuple, class, interface, type alias, generics, union, intersection, ...
// * Literal Type : 특정 글자나 숫자만 가질 수 있게 제한을 두는 타입
var LiteralName;
// LiteralName = "jay" // 에러 발생
var LiteralAge;
//LiteralAge = 24; // 에러 발생
// * 함수의 argument, return type으로도 사용 가능
function LiteralFunc(arg) {
    // return 100; // 에러발생
    return 1;
}
// LiteralFunc("world"); // 에러 발생
function RockPaperScissors(arg) {
    return ["rock"];
}
RockPaperScissors("rock");
// * Const보다 엄격하게 타입을 지정 가능
// literal type을 사용해서 엄격하게 관리
var mySelf;
var newUser = mySelf;
// newUser = "Busan"; // 에러 발생
// * as const 문법
// as const를 사용하면 모든 속성이 literal type으로 변환된다.
// as const를 사용하면 모든 속성이 readonly로 변환된다.
var asConstType = {
    name: "Jay"
};
function testAsConst(arg) {
    return arg;
}
testAsConst(asConstType.name);
