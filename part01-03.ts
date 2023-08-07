// 1. TypeScript의 기본 타입 예제
let userName :string
let userAge :number
let user :string | number = 'kim123'; // |는 유니온 타입
let users :string[] = ['kim', 'park', 'lee']
let userObj :{ name?: string, age?: number } = { name: 'kim', age: 30 } // ?는 선택적 프로퍼티
let vipUser: boolean;

// 2. 타입 변수명은 대문자로 시작
type MyType = string | null | undefined;
type MyFirstNames = 'Kim' | 'Park' | 'Lee';

// 3. 타입을 변수로 지정
// 3-1. Array 타입
type MemberArr = [number, boolean];
let jay: MemberArr = [99, true]; // tuple Type

// 3-2. Object 타입
type MemberObj = {
  // index signature : 객체의 key와 value의 타입을 동적으로 정의
  [key :string] :string | number;
}

let paul: MemberObj = {
  name :'Paul',
  age: 22
}

// 4. 함수의 타입 지정
function typeFunction(x: number) {
  return x * 2;
}


// 5. class의 타입 지정
class User {
  name :string;
  constructor(name :string) {
    this.name = name;
  }
}

// 6. 두가지 이상의 타입을 허용하는 union Type
let union: string | number | boolean = "kim";
let unionArr: (string | number)[] = [1, "2", 3]; // 소괄호로 묶어주어야 함
let unionObj: { a: string | number } = { a: 111 };


// 7. 모든 타입을 허용하는 any, unknown Type
let any: any;
any = 123;
any = true;

let unknown: unknown;
unknown = 123;
unknown = true;

any - 1; // any 타입은 다른 타입과 연산이 가능
// unknown - 1; // unknown 타입은 다른 타입과 연산이 불가능

let age: string | number;
// age + 1; // number 타입만 연산이 가능


// 8. 함수의 type 지정
// 8-1. 함수의 parameter, return 타입 지정
const multiple = (x :number)  :number => {
  return x * 2
}
multiple(10); // => 20

// 8-2. void 타입
const printMe = (x: number) :void => {
  // return 1 + 1; // void 타입은 return을 방지
  x++ ;
}

// 8-3. 파라미터가 option인 경우
const optFunction = (x?: number, y?: number): void => { // y?: number는 y가 없을 수도(undefined) 있다는 의미
  console.log(x, y);
}
optFunction(); // => undefined, undefined