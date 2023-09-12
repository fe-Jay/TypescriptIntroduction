// public, private 키워드
// 타입스크립트의 장점은 JS에 없는 객체 지향 언어 public, private, static, protected 와 같은 키워드 사용 가능
// public: 클래스 외부에서 접근 가능
// 모든 자식들이 사용 가능.
// instance에서 접근해야하는 값에 public을 붙여줌
// 기본값이 public이기 때문에 생략 가능
// private: 클래스 내부에서만 접근 가능
// 자식들도 사용 불가능
var TestUser = /** @class */ (function () {
    function TestUser(a) {
        this.familyName = "kim"; // private 키워드를 붙여서 수정이 불가능하도록 구현.
        this.name = a + this.familyName;
    }
    TestUser.prototype.changeFamilyName = function () {
        this.familyName = "Lee";
    };
    return TestUser;
}());
var user1 = new TestUser("Tester");
user1.name = "JAY"; // public이기 때문에 접근 가능
// user1.familyName = 'Lee'  // private이기 때문에 접근 불가능
console.log(user1.name); // => TesterKim
// private 속성 수정 방법
user1.changeFamilyName();
console.log(user1); // => TestUser { name: 'TesterLee', familyName: 'Lee' }
// * public 키워드로 축약 가능
var testPerson = /** @class */ (function () {
    function testPerson(name) {
        this.name = name;
        this.name = name;
    }
    return testPerson;
}());
new testPerson("Jay"); // => testPerson { name: 'Jay' }
