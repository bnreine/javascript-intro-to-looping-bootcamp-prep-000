function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i===1) {
      array.push(`"I am ${i} strange loop."`);}
      else {
        array.push(`"I am ${i} strange loops."`);}
    }
    return array;
}

function whileLoop(n) {
  while(n>0) {
    console.log(n);
    n--;
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while()
}


/*
  describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)

      expect(newArray).to.have.length.of.at.most(l - 1)
    })
  })
})

*/