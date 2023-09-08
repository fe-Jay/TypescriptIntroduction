// 함수 rest 파라미터, destructuring 할 때 타입지정
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// * rest 파라미터
// parameter에 ...을 붙이면 rest 파라미터가 된다.
// parameter가 몇개가 들어올지 모르는 경우 사용!
// rest 파라미터는 Array로 받으니 주의.
function restFunc() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(params);
}
restFunc(1, 2, 3, 4, "5");
// * spread 연산
var arr1 = [1, 2, 3];
var arr2 = ["a", "b"];
var arr3 = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log(arr3); // => [1, 2, 3, "a", "b"]
// * destructuring
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
var _a = ["hello", 1004], str = _a[0], num = _a[1];
var _b = {
    students: "학생",
    teachers: "선생님",
}, students = _b.students, teachers = _b.teachers;
var family = {
    sister: "sister",
    brother: "brother",
};
console.log(students, teachers); // => 학생 선생님
// destructuring 할 때 타입지정
function destructuringFunc(_a) {
    var sister = _a.sister, brother = _a.brother;
    console.log(sister, brother);
}
destructuringFunc(__assign({}, family)); // => sister brother
