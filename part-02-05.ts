// class에서 사용가능한 protected, static 키워드

// * class 안에서 쓰는 protected 키워드
// private는 class안에서만 사용하고 싶은 변수를 만들 때 선언.
// protected는 private와 비슷한데 class를 상속받은 자식 class에서도 사용.
// 즉, extends된 class 안에서도 사용 가능
class Protected {
    protected x = 100; // 자식들이 물려받아서 사용.
    y = 0;
}

class NewProtected extends Protected {
    func() {
        this.x = 10;
    }
    y = 10;
}

let proUser = new Protected(); //  => Protected { x: 100, y: 0 }
let newProUser = new NewProtected(); // => NewProtected { x: 100, y: 10 }
newProUser.func(); // => NewProtected { x: 10, y: 10 }

// * class 안에서 쓰는 static 키워드
// class안에 있는 변수, 함수는 instance에 부여됨.
// static 키워드를 붙이면 class 자체에 부여됨.
class Course {
    // static은 private, protected, public 키워드와 같이 사용할 수 있음.
    public static skill = "js";
    private static level = "전문가";
    intro = Course.skill + Course.level + "입니다.";
}

// static 변수 수정.
// 외부에서 변경하면 위험할 수 있기 때문에 되도록 private 키워드 사용.
Course.skill = "ts";
// Course.level = "초보"; // => private 키워드 때문에 error 발생!

let myself = new Course();
console.log(myself);
