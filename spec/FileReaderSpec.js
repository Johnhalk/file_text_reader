describe('FileReader', function() {

  beforeEach(function() {
    var filereader = new FileReader();
  });

  describe("Default FileReader", function(){
    it('has an empty array upon creation', function(){
      expect(filereader.wordStore()).toEqual([])
    });
  });

  describe("Reading words", function(){
    it('can sort individual words', function (){
      filereader.fileWordOccurances('Hello my name is test')
      expect(filereader.wordStore()).length.toBe(5)
    })
  })
});
