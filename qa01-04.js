// Q1. 숫자와 문자가 섞인 array를 입력하면 숫자만 출력하는 함수를 작성하시오.
var setParseInt = function (arr) {
    var result = [];
    arr.forEach(function (i) {
        if (typeof i === "string") {
            result.push(parseInt(i));
        }
        else {
            result.push(i);
        }
    });
    return result;
};
console.log(setParseInt([1, 2, 3, "4", "5", 6, "7", 8, "9", 10]));
// Q2. 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
var matchSubject = function (teacher) {
    if (Array.isArray(teacher.subject)) {
        return teacher.subject.slice(-1).join();
        // return teacher.subject.pop();
    }
    else if (typeof teacher.subject === "string") {
        return teacher.subject;
    }
    else {
        return "과목이 없습니다.";
    }
};
console.log(matchSubject(민수쌤));
