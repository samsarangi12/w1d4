var words = ["ground", "control", "to", "major", "tom"];

function wordLength(input) {
  return input.length;
}

function upperCase(input) {
  return input.toUpperCase();
}

function reverseWord(input) {
  return input.split('').reverse().join('');
}

function map(array, func) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
}

console.log("Original Array is ", words);
console.log("Customised Map function gives the following output ", map(words, wordLength));
console.log("Customised Map function gives the following output ", map(words, upperCase));
console.log("Customised Map function gives the following output ", map(words, reverseWord));