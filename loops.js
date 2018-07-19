function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i===1) {
      array.push(`"I am ${i} strange loop."`);}
      else {
        array.push(`"I am ${i} strange loops."`);}
    }
    return array;
}




/*
`"I am ${i} strange loops."`.


  describe('forLoop(array)', () => {
    it('adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times', () => {
      const [array, t] = makeArray()
      const strangeArray = forLoop(array)

      expect(strangeArray.length).to.equal(t + 25)

      const testArray = strangeArray.slice(array.length)

      for (let i = 0, l = testArray.length; i < l; i++) {
        let s = i === 1 ? "I am 1 strange loop." : `I am ${i} strange loops.`
        expect(testArray[i]).to.equal(s)
      }
    })
  })
*/