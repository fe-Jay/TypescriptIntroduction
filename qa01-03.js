//* Question
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
var myName = "jay";
var myAge = 10;
var MyAddress = "Seoul";
// Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
var myFavoriteSong = {
    song: "track9",
    singer: "이소라",
};
// Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// Q4. 다음 변수 4개에 타입을 지정해봅시다.
var testUser = "kim";
var testAge = undefined;
var married = false;
var 철수 = [user, age, married]; // (string|number|undefined|boolean)
// Q5. 다음 함수의 타입을 지정해봅시다.
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
// Q6. 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
var getUserName = function (name) {
    if (name) {
        return "\uC548\uB155\uD558\uC138\uC694 ".concat(name);
    }
    else {
        return "이름이 없습니다.";
    }
};
// Q7. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
var getWordLength = function (word) {
    return word.toString().length;
};
// Q8. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
var getMarriageability = function (pay, home, charm) {
    if (home) {
        pay += 500;
    }
    if (charm === "상") {
        pay += 100;
    }
    return pay >= 700 ? "결혼가능" : "";
};
console.log(getMarriageability(100, true, "상")); // 결혼가능
