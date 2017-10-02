function FileReader() {
  this.wordStore = []
  this.wordFrequency = {}
};

// Format input to store words in an array
FileReader.prototype.fileWordOccurances = function(file) {
  this.wordStore = file.toString().toLowerCase().replace(/[^a-z\d\s]/ig,'').split(" ").sort()
}

FileReader.prototype.sortWordFrequency = function(wordArray) {
  for (var i = 0; i < wordArray.length; i++) {
    var num = wordArray[i];
    this.wordFrequency[num] = this.wordFrequency[num] ? this.wordFrequency[num] + 1 : 1;
  }
}
