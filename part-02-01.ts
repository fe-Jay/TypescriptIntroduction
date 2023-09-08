// 함수 rest 파라미터, destructuring 할 때 타입지정

// * rest 파라미터
// parameter에 ...을 붙이면 rest 파라미터가 된다.
// parameter가 몇개가 들어올지 모르는 경우 사용!

// rest 파라미터는 Array로 받으니 주의.
function restFunc(...params: (number | string)[]) {
    console.log(params);
}
restFunc(1, 2, 3, 4, "5");

// * spread 연산
let arr1 = [1, 2, 3];
let arr2 = ["a", "b"];
let arr3 = [...arr1, ...arr2];

console.log(arr3); // => [1, 2, 3, "a", "b"]

// * destructuring
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
let [str, num] = ["hello", 1004];
let { students, teachers } = {
    students: "학생",
    teachers: "선생님",
};
let family = {
    sister: "sister",
    brother: "brother",
};
console.log(students, teachers); // => 학생 선생님

// destructuring 할 때 타입지정
function destructuringFunc({ sister, brother }: { sister: string; brother: string | number }) {
    console.log(sister, brother);
}
destructuringFunc({ ...family }); // => sister brother
