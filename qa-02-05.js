// (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
var XyzUser = /** @class */ (function () {
    function XyzUser() {
        // extends로 확장한 class에서도 사용 가능.
        this.z = 30;
    }
    // class안에서 사용할 수 있는 static키워드.
    // instance에서 변수나 함수 사용 불가
    XyzUser.x = 10;
    // class와 instance 모두에서 사용 가능. public 생략 가능(기본 값)
    XyzUser.y = 20;
    return XyzUser;
}());
// (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
var Sum = /** @class */ (function () {
    function Sum() {
    }
    Sum.addOne = function (param) {
        Sum.x += param;
    };
    Sum.printX = function () {
        console.log(Sum.x);
    };
    Sum.x = 10;
    Sum.y = 20;
    return Sum;
}());
Sum.addOne(3); // = Sum.x = 13
Sum.addOne(4); // = Sum.x = 17
Sum.printX(); // = 17
// (숙제3) 이렇게 네모.draw()를 할 때마다
// index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가 무작위로 배치되어야합니다.
var Square = /** @class */ (function () {
    function Square(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var random = Math.random();
        var div = document.createElement("div");
        div.style.width = "".concat(this.x, "px");
        div.style.height = "".concat(this.y, "px");
        div.style.backgroundColor = "".concat(this.color);
        div.style.position = "absolute";
        div.style.top = "".concat(random * 400, "px");
        div.style.left = "".concat(random * 400, "px");
        document.body.appendChild(div);
    };
    return Square;
}());
var squareInstance = new Square(30, 30, "red");
squareInstance.draw();
squareInstance.draw();
squareInstance.draw();
