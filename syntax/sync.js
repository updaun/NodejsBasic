var fs = require('fs');

// readFileSync
/*
console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// Sync가 없으면 비동기적 처리
// collback을 요구한다. 함수를 세 번째 인자로 요청한다.
console.log('A');
fs.readFile('sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');