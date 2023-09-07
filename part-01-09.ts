// Class Type

// * 필드값 타입지정
// class 내부에 타입 지정
// 함수를 사용하는 경우 파라미터에도 타입 지정
class ServiceUser {
    data: number = 0;
    name: string;
    point: number;
    constructor(str: string) {
        this.name = str;
        this.point = 100;
    }
    greet = function (param: string) {
        console.log(`${param} Hello!`);
    };
}

let goldUser = new ServiceUser("jay");
let silverUser = new ServiceUser("paul");
// goldUser.data = '10';  // number이 아닌 string을 넣으면 에러

console.log(goldUser, silverUser);
