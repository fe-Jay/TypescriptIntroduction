// (숙제1) Car 클래스를 만들고 싶습니다.
class GenerateCar {
    model;
    price;
    constructor(carName: string, carPrice: number) {
        this.model = carName;
        this.price = carPrice;
    }
    tax(): number {
        return this.price * 0.1;
    }
}

let car1 = new GenerateCar("BMW", 1000);
let car2 = new GenerateCar("Benz", 2000);

console.log(car1, car2.tax());

// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
class GenerateParamGroups {
    num: number[];
    str: string[];
    constructor(...param: (string | number)[]) {
        let num: number[] = [];
        let str: string[] = [];

        param.filter((item) => {
            typeof item === "string" ? str.push(item) : num.push(item);
        });

        this.num = num;
        this.str = str;
    }
}

const wordObj = new GenerateParamGroups("kim", 3, 5, "jay");
console.log({ ...wordObj });
