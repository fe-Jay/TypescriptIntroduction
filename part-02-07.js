// 타입을 파라미터로 입력하는 Generic
// * 함수 return 값의 타입이 애매하면
// 타입스크립트는 타입을 알아서 변경해주지 않음.
// parameter 타입 지정도 변수와 동일.
var geneFunc1 = function (param) {
    return param[0];
};
var a = geneFunc1([1, 2, 3]);
// console.log(a + 1) // => a가 unknown 타입이기 때문에 연산 에러
// * Generic 사용
var geneFunc2 = function (param) {
    return param[0];
};
var b = geneFunc2([4, 2]);
var c = geneFunc2(["a", "b"]); // generic type을 생략하면 알아서 추론해줌
var geneFunc3 = function (param) {
    return param - 1;
};
geneFunc3(11);
var geneFunc4 = function (param) {
    return param.length;
};
geneFunc4([1, 2, 3]); // => 3
// * 언제나 커스텀 타입도 extends 가능
