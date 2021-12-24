var member = ['egoing','updaun','nodejs']
console.log(member[1]);

var i = 0;
while(i < member.length){
    console.log('array loop', member[i])
    i = i + 1
}

var roles = {
    'programmer':'updaun',
    'designer':'hello',
    'manager':'heyheyhey'
}
console.log(roles.designer) //hello
console.log(roles['designer']) //hello

// 식별자 key 출력
for (var name in roles){
    console.log('object =>', name, 'values =>', roles[name]);
}