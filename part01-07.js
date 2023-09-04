var sampleFunc = function () {
    return 123;
};
sampleFunc("test");
var memberInfo = {
    name: "kim",
    // 객체에 함수 추가
    plusOne: function (x, y) {
        return x + y + 1;
    },
    changeName: function () {
        console.log("Hello");
    },
};
memberInfo.plusOne(1, 100);
