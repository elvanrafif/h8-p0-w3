let str = ['Hello World!']
let tampung = ''

function balikString(str){
    for (var i = str[0].length-1; i >= 0; i--){
        tampung += str[0][i]
    }
    return tampung
}
console.log(balikString(str))