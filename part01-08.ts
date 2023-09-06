// * DOM Element 탐색하기
const title = document.querySelector("#title");

// 1. if 조건문
if (title != null) {
    title.innerHTML = "🤓 Hi There";
}

// 2. && 조건문
title && (title.innerHTML = "🤓 Hi There");

// 3. instanceof
title instanceof HTMLElement && (title.innerHTML = "🤓 Hi There");

// 4. assertion
let title2 = document.querySelector("#title") as HTMLElement;
title2.innerHTML = "🤓 Hi There";

// 5. optional chaining
title?.innerHTML !== undefined && (title.innerHTML = "🤓 Hi There");

// * a 태그의 href 속성 바꾸기
let urlLink = document.querySelectorAll(".link");
urlLink.forEach((link) => {
    link instanceof HTMLAnchorElement ? (link.href = "https://github.com/fe-Jay") : urlLink;
});

// * EventListener

let btn = document.querySelector("#button");
btn?.addEventListener("click", (e) => {
    const target = e.target;

    target instanceof HTMLButtonElement && console.log(`${target.innerHTML} Clicked!`);
    target instanceof HTMLButtonElement && "value" in target && (target.innerHTML = target.value);

    const img = document.querySelector(".img");
    img instanceof HTMLImageElement && (img.src = "https://picsum.photos/300/300");
});
