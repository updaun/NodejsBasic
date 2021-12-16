console.log(Math.round(1.6));  // 2
console.log(Math.round(1.4));  // 1

function sum(first, second) {
    console.log(first+second)
}

sum(2,4);

function sum_2(first, second) {
    return first+second         // 값 반환,  즉시 함수 종료
    console.log("이 문장은 출력되지 않습니다.")
}

console.log(sum_2(2,4));