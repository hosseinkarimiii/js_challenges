class CharacterCounter {
  constructor(characterSet) {
    this.characterSet = new Set(
      [...characterSet].map((char) => char.toLowerCase())
    );
  }

  count(inputText) {
    let counter = 0;

    for (const char of inputText) {
      if (this.characterSet.has(char.toLowerCase())) {
        counter++;
      }
    }

    return counter;
  }
}

const vowelCharacterSet = new Set()
  .add("a")
  .add("e")
  .add("i")
  .add("o")
  .add("u");

console.log(
  new CharacterCounter(vowelCharacterSet).count(
    "Hello my friend have a coffee with me"
  )
);
