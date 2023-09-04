// * Q1. cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
type cutZeroType = (str: string) => string;
const cutZero: cutZeroType = (str) => {
    return str[0] === "0" ? str.slice(1) : str;
};

// * Q2. removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
type removeDashType = (str: string) => number;
const removeDash: removeDashType = (str) => {
    return parseInt(str.replace(/-/g, ""));
};

// * Q3. 함수에 함수를 집어넣고 싶습니다.
type funcType1 = (str: string) => string;
type funcType2 = (str: string) => number;
const extendFunc = (str: string, func1: funcType1, func2: funcType2) => {
    console.log(removeDash(cutZero(str)));
};

extendFunc("010-1111-2222", cutZero, removeDash);
