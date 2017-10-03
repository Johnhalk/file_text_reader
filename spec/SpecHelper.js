function sortWordHelper() {
  fileReader.fileWordOccurances("Hello i am olaf the meerkat, hello hello hello, my name is olaf the meerkat")
  fileReader.sortWordFrequency(fileReader.allWords)
  fileReader.sortWords()
}

function sortFrequencyHelper() {
  fileReader.fileWordOccurances("Hello i am olaf the meerkat, hello hello hello, my name is olaf the meerkat")
  fileReader.sortWordFrequency(fileReader.allWords)
  fileReader.sortFrequency()
}

function sortPrimesHelper() {
  fileReader.fileWordOccurances("Hello i am olaf the meerkat, hello hello hello, my name is olaf the meerkat")
  fileReader.sortWordFrequency(fileReader.allWords)
  fileReader.sortWords()
  fileReader.sortFrequency()
  fileReader.sortPrimes()
}

function createFinalResults() {
  fileReader.fileWordOccurances("Hello i am olaf the meerkat, hello hello hello, my name is olaf the meerkat")
  fileReader.sortWordFrequency(fileReader.allWords)
  fileReader.sortWords()
  fileReader.sortFrequency()
  fileReader.sortPrimes()
  fileReader.createFinalResults()
}
