// * 1. type alias
// type 타입변수명 = 타입종류
// 일반 변수와 차이를 두기 위해 대문자로 시작
// 변수명을 type으로 끝내는 것이 관례
type AnimalType = string | number | undefined;
let cat: AnimalType = "😼citty";

// Object 타입 지정
type AnimalObjType = { name: string; age: number };
let dog:AnimalObjType = {
  name: "🐶doggy",
  age: 13,
}

// * 2. object readonly
// TS는 const로 선언한 Object 내부의 property는 변경할 수 없도록 제한 가능
type BirthdayType = {
  readonly year: number, // readonly
  month: number,
  day: number,
}
const birthday :BirthdayType = {
  year: 2021,
  month: 9,
  day: 1,
}

// birthday.year = '2022'; readonly 읽기 전용 속성으로 변경 불가


// * Type alias
// Option Parameter (타입 | undefined)
type Girlfriend = {
  name?: string,
  age?: number,
}

const myGirlfriend: Girlfriend = {
  name: 'Jay'
}

myGirlfriend.name = 'Anna';

// * extend
// type 변수를 '|'연산자로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

// Object Extend
// Object 두개를 '&'연산자로 합치기 가능
type PositionXY = PositionX & PositionY;

let position: PositionXY = {
  x: 10,
  y: 100,
}