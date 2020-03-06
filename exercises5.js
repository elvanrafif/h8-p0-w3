function palindrome(kata){
    var tpg = []
    for (var i = kata.length-1; i >= 0; i--){
        tpg += kata[i]    
    }
    if (tpg === kata){
        return true
    }
    return false
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false