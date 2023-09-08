// Class Type
// * 필드값 타입지정
// class 내부에 타입 지정
// 함수를 사용하는 경우 파라미터에도 타입 지정
var ServiceUser = /** @class */ (function () {
    function ServiceUser(str) {
        this.data = 0;
        this.greet = function (param) {
            console.log("".concat(param, " Hello!"));
        };
        this.name = str;
        this.point = 100;
    }
    return ServiceUser;
}());
var goldUser = new ServiceUser("jay");
var silverUser = new ServiceUser("paul");
// goldUser.data = '10';  // number이 아닌 string을 넣으면 에러
console.log(goldUser, silverUser);
