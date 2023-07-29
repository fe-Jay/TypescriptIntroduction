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

//* Question
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
const myName :string = 'jay';
const myAge :number = 10;
const MyAddress :string = 'Seoul';


// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
const myFavoriteSong :{
  song: string,
  singer: string
} = {
  song: 'track9',
  singer: '이소라'
}

// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project: {
  member: string[],
  days: number,
  started: boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
