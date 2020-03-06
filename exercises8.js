  function pasanganTerbesar(num) {
    let newNum = num.toString()
    let res = 0
    for (var i = 0; i < newNum.length - 1; i++) {
      if (res < newNum[i] + newNum[i + 1]) {
        res = newNum[i] + newNum[i + 1]
      }
    }
    return res
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  