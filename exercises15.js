function groupAnimals(animals) {
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var result = []
for (var i = 0; i < alphabet.length; i++){
    var temp = []
  for (var j = 0; j < animals.length; j++){
    if (alphabet[i] == animals[j][0]){
      temp.push(animals[j])
    }  
  }
  if (temp.length !== 0){
    result.push(temp)
  }

} 
return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil'])); // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ])); // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
