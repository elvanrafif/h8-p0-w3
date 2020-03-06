// var barang = ['penghapus','baju','penghapus','baju','sepatu']

// function barangku(arr){
//     var tpg = []
//         for (i = 0; i < arr.length; i++){
//             if (arr[i] === tpg){
//                 tpg === true
//             } 
//             for (j = 0; j < arr.length;j++){
//                 if (arr[i] == arr[j]){
//                     tpg.push (arr[i])
//                 }
//             }
//         }
//         return tpg
// }

// console.log(barangku(barang))


























var barang = ['penghapus','baju','penghapus','baju','sepatu','topi','sepatu']

function barangku(arr){
    var tpg = []
    for(var i = 0; i < arr.length; i++){
        if (tpg.indexOf(arr[i]) == -1){
        tpg.push (arr[i])
        }
    }
    return tpg
}

console.log(barangku(barang));