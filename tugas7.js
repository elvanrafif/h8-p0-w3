function hitungJumlahKata(kalimat) {
    var tampung =''
    var arr = []
    kalimat+= ' '
    for (var i = 0; i < kalimat.length; i++){
        if (kalimat[i] !== ' '){
            tampung += kalimat[i]

        } else if (kalimat[i] === ' ' && tampung.length > 0){
            // console.log(tampung)
            arr.push(tampung)
            tampung = ''
        }
    }
    return arr.length
  }

//  TEST CASES
  console.log(hitungJumlahKata('I        have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5