// function a() {
//     console.log('A');
// }

// 익명 함수
// javascript에서는 변수가 값이다.
var a = function() {
    console.log('A');
}

// a();

// 실행하는데 오래걸리는 함수
function slowfunc(callback) {
    callback();
}

slowfunc(a);