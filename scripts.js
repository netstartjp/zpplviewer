// scripts.js
debugger;

function pauseExecution() {
  debugger;
  setTimeout(pauseExecution, 100);
}

pauseExecution();

let startX, endX;
const container = document.querySelector(".swiper-container");
const images = document.querySelectorAll(".swiper-container img");
let currentIndex = 0;

function showImage(index) {
    container.scrollLeft = container.clientWidth * index;
    currentIndex = index;
}

container.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
});

container.addEventListener("touchmove", function (e) {
    e.preventDefault(); // スクロールの無効化
});

container.addEventListener("touchend", function (e) {
    endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) {
        if (currentIndex > 0) showImage(currentIndex - 1); // 逆方向に変更
    } else if (startX < endX - 50) {
        if (currentIndex < images.length - 1) showImage(currentIndex + 1); // 逆方向に変更
    }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
    return false;
  }
  if (e.key === "ArrowRight") {
    if (currentIndex > 0) showImage(currentIndex - 1);
  } else if (e.key === "ArrowLeft") {
    if (currentIndex < images.length - 1) showImage(currentIndex + 1);
  } else if ((e.ctrlKey && e.key === "s") || (e.ctrlKey && e.key === "p")) {
    e.preventDefault();
  }
});


document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // 右クリックメニューの無効化
});

container.addEventListener("dragstart", function (e) {
    e.preventDefault(); // 画像のドラッグの無効化
});

showImage(currentIndex);

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // 右クリックメニューの無効化
});

document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && e.key === "s") || (e.ctrlKey && e.key === "p")) {
        e.preventDefault(); // Ctrl + S や Ctrl + P の保存や印刷を無効化
    }
});

// 画像の選択を防ぐ
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});


