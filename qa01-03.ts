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


// Q4. 다음 변수 4개에 타입을 지정해봅시다.
let testUser :string = 'kim';
let testAge :number | undefined = undefined;
let married :boolean = false;
let 철수 :unknown[] = [user, age, married]; // (string|number|undefined|boolean)


// Q5. 다음 함수의 타입을 지정해봅시다.
let 학교: {
  score: (boolean | number)[],
  teacher: string,
  friend: string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// Q6. 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
const getUserName = (name?: string) :string =>  {
  if (name) {
    return `안녕하세요 ${name}`
  } else {
    return '이름이 없습니다.'
  }
}

// Q7. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
const getWordLength = (word: string | number) :number => {
  return word.toString().length;
}

// Q8. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
const getMarriageability = (pay: number, home: boolean, charm: string) :string | void => {
  if (home) {
    pay += 500;
  }
  if (charm === '상') {
    pay += 100;
  }

  return pay >= 700 ? '결혼가능' : '';
};

console.log(getMarriageability(100, true, '상')); // 결혼가능