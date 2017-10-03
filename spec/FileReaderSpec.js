describe("FileReader", () => {

  beforeEach( () =>{
     fileReader = new TextFileReader();
  });

  describe("Default FileReader", () =>{
    it('is empty upon creation', () =>{
      expect(fileReader.allWords).toEqual([])
      expect(fileReader.wordFrequency).toEqual({})
      expect(fileReader.wordStore).toEqual([])
      expect(fileReader.wordFrequencyStore).toEqual([])
      expect(fileReader.primeStore).toEqual([])
      expect(fileReader.finalResults).toEqual([])

    });
  });

  describe("Reading words", function(){
    it('can read individual words', function (){
      fileReader.fileWordOccurances("Hello i am olaf the meerkat, hello hello hello, my name is olaf the meerkat")
      expect(fileReader.allWords).toEqual([ 'am', 'hello', 'hello', 'hello', 'hello', 'i', 'is', 'meerkat', 'meerkat', 'my', 'name', 'olaf', 'olaf', 'the', 'the'])
    });
  });

  describe("Sorting words into frequency", function(){
    it('can sort words and show how often they occur', function(){
      fileReader.fileWordOccurances(["Hello i am olaf the meerkat, hello hello hello, my name is olaf the meerkat"])
      fileReader.sortWordFrequency(fileReader.allWords)
      expect(fileReader.wordFrequency).toEqual({ am: 1, hello: 4, i: 1, is: 1, meerkat: 2, my: 1, name: 1, olaf: 2, the: 2 })
    });
  });

  describe("Can sort each type of word", function(){
    it('returns an array full of each type of word', function(){
      sortWordHelper()
      expect(fileReader.wordStore).toContain('am', 'hello', 'i', 'is', 'meerkat', 'my', 'name', 'olaf', 'the')
    });
  });

  describe("Can sort frequency of each type of word", function(){
    it('returns array full of frequencies to the corresponding word', function(){
      sortFrequencyHelper()
      expect(fileReader.wordFrequencyStore).toEqual([1, 4, 1, 1, 2, 1, 1, 2, 2])
    });
  });

  describe("Can check if Prime number", function(){
    it('return true if number is prime', function(){
      expect(fileReader.checkPrime(29)).toBe(true)
    });
  });

  describe("Can check if not a prime number", function (){
    it('returns false if number is not a prime', function (){
      expect(fileReader.checkPrime(4)).toBe(false)
    });
  });

  describe("Can sort occurance numbers into array", function(){
    it('sorts occurance numbers', function(){
      sortPrimesHelper()
      expect(fileReader.primeStore).toEqual([false, false, false, false, true, false, false, true, true])
    });
  });

  describe("Can sort all data into one array", function(){
    it('pushes each individual store data into one single array', function(){
      createFinalResults()
      expect(fileReader.finalResults).toEqual([ [ 'am', 1, false ], [ 'hello', 4, false ], [ 'i', 1, false ], [ 'is', 1, false ], [ 'meerkat', 2, true ], [ 'my', 1, false ], [ 'name', 1, false ], [ 'olaf', 2, true ], [ 'the', 2, true ] ])
    })
  })
});
