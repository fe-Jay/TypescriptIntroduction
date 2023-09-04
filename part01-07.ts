// * 함수의 type alias 정의
// function 함수이름 :NumOut (){}
type strToNum = (a: string) => number;

const sampleFunc: strToNum = () => {
    return 123;
};
sampleFunc("test");

// 객체 내부의 함수 type 지정
type memberType = {
    name: string;
    plusOne: (x: number, y: number) => number;
    changeName: () => void;
};
let memberInfo: memberType = {
    name: "kim",
    // 객체에 함수 추가
    plusOne: (x, y) => {
        return x + y + 1;
    },
    changeName: () => {
        console.log("Hello");
    },
};

memberInfo.plusOne(1, 100);
