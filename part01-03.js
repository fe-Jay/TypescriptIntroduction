// 1. TypeScript의 기본 타입 예제
var userName;
var userAge;
var user = 'kim123'; // |는 유니온 타입
var users = ['kim', 'park', 'lee'];
var userObj = { name: 'kim', age: 30 }; // ?는 선택적 프로퍼티
var vipUser;
var jay = [99, true]; // tuple Type
var paul = {
    name: 'Paul',
    age: 22
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
//* Question
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var myName = 'jay';
var myAge = 10;
var MyAddress = 'Seoul';
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
var myFavoriteSong = {
    song: 'track9',
    singer: '이소라'
};
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
