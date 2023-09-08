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
// (숙제1) Car 클래스를 만들고 싶습니다.
var GenerateCar = /** @class */ (function () {
    function GenerateCar(carName, carPrice) {
        this.model = carName;
        this.price = carPrice;
    }
    GenerateCar.prototype.tax = function () {
        return this.price * 0.1;
    };
    return GenerateCar;
}());
var car1 = new GenerateCar("BMW", 1000);
var car2 = new GenerateCar("Benz", 2000);
console.log(car1, car2.tax());
// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
var GenerateParamGroups = /** @class */ (function () {
    function GenerateParamGroups() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var num = [];
        var str = [];
        param.filter(function (item) {
            typeof item === "string" ? str.push(item) : num.push(item);
        });
        this.num = num;
        this.str = str;
    }
    return GenerateParamGroups;
}());
var wordObj = new GenerateParamGroups("kim", 3, 5, "jay");
console.log(__assign({}, wordObj));
