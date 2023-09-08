// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
const solution = (...num: number[]) => {
    return num
        .sort((a, b) => b - a)
        .splice(0, 1)
        .join("");
};
console.log(solution(6, 3, 7, 2));

// (숙제2) 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
interface UserTypes {
    user: string;
    comment: number[];
    admin: boolean;
}
const getUserData = ({ user, comment, admin }: UserTypes): void => {
    console.log(user, comment, admin);
};

let testUserObj = {
    user: "kim",
    comment: [3, 5, 4],
    admin: false,
};
getUserData({ ...testUserObj });

// (숙제3) 함수( [40, 'wine', false] )
// 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
type ArrayDataTypes = (number | string | boolean)[];
const getArrayData = ([...arr]: ArrayDataTypes): void => {
    console.log(arr);
};
getArrayData([40, "wine", false]);
