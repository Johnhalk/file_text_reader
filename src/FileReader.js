function FileReader() {
  this.wordStore = []
};

// Format input to store words in an array
FileReader.prototype.fileWordOccurances = function(file) {
  this.wordStore = file.toString().toLowerCase().replace(/[^a-z\d\s]/ig,'').split(" ").sort()
}
