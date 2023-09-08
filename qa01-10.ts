// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface Products {
    brand: string;
    serialNumber: number;
    model: string[];
}

let product: Products = {
    brand: "Apple",
    serialNumber: 12345,
    model: ["ipad", "apple watch", "iphone"],
};

// (숙제2) array 안에 object 여러개가 필요합니다.
interface Carts {
    product: string;
    price: number;
}

let userCart01: Carts[] = [
    {
        product: "ipad",
        price: 900000,
    },
];

// (숙제3) 위에서 만든 타입을 extends 해봅시다.
interface CartCards extends Carts {
    card: boolean;
}

let userCart02: CartCards[] = [
    {
        product: "iphone",
        price: 1400000,
        card: false,
    },
];

// (숙제4) object 안에 함수를 2개 넣고 싶은데요
interface Calculators {
    plus: (num1: number, num2: number) => number;
    minus: (num1: number, num2: number) => number;
}
let calculator: Calculators = {
    plus(num1, num2) {
        return num1 + num2;
    },
    minus(num1, num2) {
        return num1 - num2;
    },
};
