describe("FileReader", () => {

  beforeEach( () =>{
     filereader = new FileReader();
  });

  describe("Default FileReader", () =>{
    it('has an empty array upon creation', () =>{
      expect(filereader.wordStore).toEqual([])
    });
  });

  describe("Reading words", function(){
    it('can read individual words', function (){
      filereader.fileWordOccurances('Hello my name is test')
      expect(filereader.wordStore).toEqual([ 'hello', 'is', 'my', 'name', 'test' ])
    });
  });

  describe("Sorting words into frequency", function(){
    it('can sort words and show how often they occur', function(){
      filereader.sortWordFrequency(["greetings", "i", "am", "olaf", "olaf", "i", "am", "and", "i", "say", "greetings"])
      expect(filereader.wordFrequency).toEqual({greetings: 2, i: 3, am: 2, olaf: 2, and: 1, say: 1})
    });
  });
});
