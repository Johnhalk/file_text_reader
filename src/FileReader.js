function TextFileReader() {
  this.wordStore = []
  this.wordFrequency = {}
  this.primeNumberFrequency = {}
};

// Format input to store words in an array
TextFileReader.prototype.fileWordOccurances = function(file) {
  this.wordStore = file.toString().toLowerCase().replace(/[^a-z\d\s]/ig,'').split(" ").sort()
}

TextFileReader.prototype.sortWordFrequency = function(wordArray) {
  for (var i = 0; i < wordArray.length; i++) {
    var num = wordArray[i];
    this.wordFrequency[num] = this.wordFrequency[num] ? this.wordFrequency[num] + 1 : 1;
  }
}

TextFileReader.prototype.checkPrime = function(number) {
  for(var i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

TextFileReader.prototype.checkPrimeFrequency = function(){
  var fileRead = this;
  Object.keys(fileRead.wordFrequency).forEach(function(key) {
    var wordFrequency = fileRead.wordFrequency[key];
    var checkIfPrime = fileRead.checkPrime(wordFrequency);
    var result = [wordFrequency, checkIfPrime]
    fileRead.primeNumberFrequency[key] = result;
  })
}
