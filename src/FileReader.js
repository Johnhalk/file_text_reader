function TextFileReader() {
  this.allWords = [] //Stores each individual word
  this.wordFrequency = {} //Stores each word matched with its frequency
  this.wordStore = [] //Stores each type of word that occurs
  this.wordFrequencyStore = [] //Stores the number of times each type of word occurs
  this.primeStore = [] //Stores if amount word occurs is prime or not
  this.finalResults = [] //Stores collective results in array
};

// Format input to store all words in an array
TextFileReader.prototype.fileWordOccurances = function(file) {
  this.allWords = file.toString().toLowerCase().replace(/[\n\r]/g, ' ').replace(/[^a-z\s]+/gi,' ').split(" ").sort().filter(function(entry) { return entry.trim() != ''; });
};

// assign word frequency as hash for key value pairing of word and frequency it occurs
TextFileReader.prototype.sortWordFrequency = function(wordArray) {
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    this.wordFrequency[word] = this.wordFrequency[word] ? this.wordFrequency[word] + 1 : 1;
  };
};

// Sorts each type of words into own array
TextFileReader.prototype.sortWords = function() {
    var fileRead = this;
  for(var i = 0; i < fileRead.allWords.length; i++){
    fileRead.wordStore.push(Object.keys(fileRead.wordFrequency)[i])
  }
}

// Sorts word frequency into own array
TextFileReader.prototype.sortFrequency = function() {
    var fileRead = this;
    for(var i = 0; i < Object.keys(fileRead.wordFrequency).length; i++){
      fileRead.wordFrequencyStore.push(Object.values(fileRead.wordFrequency)[i])
  }
}

// Standard function to check if a number is prime
TextFileReader.prototype.checkPrime = function(number) {
  for(var i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number !== 1;
};

// Checks if frequency of word is prime
TextFileReader.prototype.sortPrimes = function() {
  var fileRead = this;
  for (var i = 0; i < fileRead.wordFrequencyStore.length; i++){
    fileRead.primeStore.push(fileRead.checkPrime(fileRead.wordFrequencyStore[i]))
  }
}
// Creates final results of each word, frequency and if prime number or not
TextFileReader.prototype.createFinalResults = function () {
  var fileRead = this;
  for (var i = 0; i< fileRead.wordFrequencyStore.length; i++){
    fileRead.finalResults.push([fileRead.wordStore[i], fileRead.wordFrequencyStore[i], fileRead.primeStore[i]])
  }
}

TextFileReader.prototype.runTextReader = function (filetext) {
  this.fileWordOccurances(filetext)
  this.sortWordFrequency(this.allWords)
  this.sortWords()
  this.sortFrequency()
  this.sortPrimes()
  this.createFinalResults()

}
