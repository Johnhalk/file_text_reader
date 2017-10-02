describe("FileReader", () => {

  beforeEach( () =>{
     fileReader = new FileReader();
  });

  describe("Default FileReader", () =>{
    it('has an empty array upon creation', () =>{
      expect(fileReader.wordStore).toEqual([])
    });
  });

  describe("Reading words", function(){
    it('can read individual words', function (){
      fileReader.fileWordOccurances('Hello my name is test')
      expect(fileReader.wordStore).toEqual([ 'hello', 'is', 'my', 'name', 'test' ])
    });
  });

  describe("Sorting words into frequency", function(){
    it('can sort words and show how often they occur', function(){
      fileReader.sortWordFrequency(["greetings", "i", "am", "olaf", "olaf", "i", "am", "and", "i", "say", "greetings"])
      expect(fileReader.wordFrequency).toEqual({greetings: 2, i: 3, am: 2, olaf: 2, and: 1, say: 1})
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

  describe("Can check if word occurance is prime number", function (){
    it('returns a hash of key value pairs determining if occurance is prime or not', function(){
      FileReaderHelper()
      expect(fileReader.primeNumberFrequency).toEqual({    am: [ 1, false ], hello: [ 4, false ], i: [ 1, false ], is: [ 1, false ], meerkat: [ 2, true ], my: [ 1, false ], name: [ 1, false ], olaf: [ 2, true ], the: [ 2, true ]});
    });
  });
});
