// * DOM Element 탐색하기
var title = document.querySelector("#title");
// 1. if 조건문
if (title != null) {
    title.innerHTML = "🤓 Hi There";
}
// 2. && 조건문
title && (title.innerHTML = "🤓 Hi There");
// 3. instanceof
title instanceof HTMLElement && (title.innerHTML = "🤓 Hi There");
// 4. assertion
var title2 = document.querySelector("#title");
title2.innerHTML = "🤓 Hi There";
// 5. optional chaining
(title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined && (title.innerHTML = "🤓 Hi There");
// * a 태그의 href 속성 바꾸기
var urlLink = document.querySelectorAll(".link");
urlLink.forEach(function (link) {
    link instanceof HTMLAnchorElement ? (link.href = "https://github.com/fe-Jay") : urlLink;
});
// * EventListener
var btn = document.querySelector("#button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
    var target = e.target;
    target instanceof HTMLButtonElement && console.log("".concat(target.innerHTML, " Clicked!"));
    target instanceof HTMLButtonElement && "value" in target && (target.innerHTML = target.value);
    var img = document.querySelector(".img");
    img instanceof HTMLImageElement && (img.src = "https://picsum.photos/300/300");
});
