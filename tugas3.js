var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
var tampung = ''
function dataHandling(input) {
    for (var i = 0; i < input.length; i++){
        // console.log(input[i])
        // for (var j = 0; j < input[i].length; j++){
        //     switch(j){
        //         case 0:
        //             tampung += '\n\nNomor ID : ' + input[i][j]
        //         break
        //         case 1:
        //             tampung += '\nNama Lengkap : ' + input[i][j]
        //         break
        //         case 2:
        //             tampung += '\nTTL : ' + input[i][j] + ' ' + input[i][j+1]
        //         break
        //         case 4:
        //             tampung += '\nHobi : ' + input[i][j]
        //     }
        // }
        console.log('\nNomor ID : ' + input[i][0])
        console.log('Nama Lengkap : ' + input[i][1])
        console.log('TTL : ' + input[i][2])
        console.log('Hobi : ' + input[i][3])
    }
    return tampung
}
console.log(dataHandling(input))