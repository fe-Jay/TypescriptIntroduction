// 타입을 파라미터로 입력하는 Generic

// * 함수 return 값의 타입이 애매하면
// 타입스크립트는 타입을 알아서 변경해주지 않음.
// parameter 타입 지정도 변수와 동일.
const geneFunc1 = (param: unknown[]) => {
    return param[0];
};

let a = geneFunc1([1, 2, 3]);
// console.log(a + 1) // => a가 unknown 타입이기 때문에 연산 에러

// * Generic 사용
const geneFunc2 = <T>(param: T[]): T => {
    return param[0];
};
let b = geneFunc2<number>([4, 2]);
let c = geneFunc2(["a", "b"]); // generic type을 생략하면 알아서 추론해줌

// * Generic 적용한 함수 만들기

// * Generic 타입 제한하기 (constraints)
// extends 문법을 쓰면 넣을 수 있는 타입을 제한할 수 있음.
type geneType = number;
const geneFunc3 = <T extends geneType>(param: T) => {
    return param - 1;
};
geneFunc3<number>(11); // => 10

// interface로도 제한 가능
interface LengthChk {
    length: number;
}
const geneFunc4 = <T extends LengthChk>(param: T) => {
    return param.length;
};
geneFunc4<LengthChk>([1, 2, 3]); // => 3

// * 언제나 커스텀 타입도 extends 가능
