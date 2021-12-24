// array, object

// javascript에서 function은 값이다.

// 조건문은 값이 될 수 없다.
// var i = if(true){console.log(1)};
// 반복문은 값이 될 수 없다.
// var w = while(true){console.log(1)};

var f = function(){
    console.log(1+1);
    console.log(1+2);
}
console.log(f);
f();

// array 내 요소로 함수 지정 가능
var a = [f];
a[0]();

// object 내 요소로 함수 지정 가능
var o = {
    func:f
}
o.func();