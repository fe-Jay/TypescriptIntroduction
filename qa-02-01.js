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
// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
var solution = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num
        .sort(function (a, b) { return b - a; })
        .splice(0, 1)
        .join("");
};
console.log(solution(6, 3, 7, 2));
var getUserData = function (_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
};
var testUserObj = {
    user: "kim",
    comment: [3, 5, 4],
    admin: false,
};
getUserData(__assign({}, testUserObj));
var getArrayData = function (_a) {
    var arr = _a.slice(0);
    console.log(arr);
};
getArrayData([40, "wine", false]);
