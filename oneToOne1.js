function jadiOneDimensi(arr) {
    // you can only write your code here!
    var result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j])  
        }
    }
    return result
}

// TEST CASES
// console.log(jadiOneDimensi([[2, 4], [], [6]])); // [2, 4, 6] 
// console.log(jadiOneDimensi([[2, 4, 8], [1, 5, 7], [3, 6, 9]]));
//   [ 2, 4, 8, 1, 5, 7, 3, 6, 9]

function getTotal(arr){
    var total = 0
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]    
    }
    return total 
}

// console.log(getTotal([3, 4, 5, 6, 7, 5])) // 30


function getOnlyGenap(arr){
    var result = []
    for (var i=0; i< arr.length; i++){
        if (arr[i] % 2 == 0){
            result.push(arr[i])
        }
    }
    return result
}


var nums = [55, 77, 888, 555, 552, 4456, 2]
// console.log(getOnlyGenap(nums))
// [888, 552, 4456, 2]


function bentukin(num){
    var result = []
    var angka = 1
    for (var i = 0 ; i < num; i++){
        var baris = []
        for (var j = 0; j< num; j++){
            baris.push(angka)
            // console.log(baris)
            angka++
        }
        // console.log(baris)
        result.push(baris)
        // console.log(result, '<<<<<')
    }
    return result
}


// console.log(bentukin(3))
// [
//  [1, 2, 3],
//  [4, 5, 6], 
//  [7, 8, 9]
// ]


var array = [
    ['aba', 'zazaza'],
    ['baba'],
    ['caca', 'dadasd']
]

// for (var i = 0; i < array.length; i++) {
    // console.log(array[i][0][0])    
    // for (var j=0; j< array[i].length; j++) {
        // console.log(array[i] [j] [array[i][j].length - 1] )        
    // }
// }

// for (var i = 0; i < array.length; i++) {
    // console.log(array[i][0][0])    
    // for (var j=0; j< array[i].length; j++) {
        // for (let k = 0; k < array[i][j].length; k++) {
        //     if (k === array[i][j].length - 1){
        //         console.log(array[i][j][k])
        //     }
        // }
        
    // }
// }



var password = 'ayu@$%zzaauio' // b<t   <<

var encryptVokal = 'aeiuo'
var changeVokal = 'bfjtp'

var symbol = '@#$%*'

var encrypt = ''
for (let i = 0; i < password.length; i++) {
    // console.log(password[i], '<<<<<<<') 
    var check = true
    for (var j=0; j< encryptVokal.length; j++){ 
        if (password[i] === encryptVokal[j]){
            encrypt += changeVokal[j]
            check = false
        } 
    }

    for (var k =0 ; k< symbol.length; k++){
        if (password[i] === symbol[k]){
            encrypt+= symbol[k]
            check = false
        }
    }

    if(check){
        encrypt += '<'
    }

}
console.log(encrypt)