class CharacterCounter {
  constructor(characterSet) {
    this.characterSet = characterSet;
  }

  count(inputText) {
    let counter = 0;

    for (let i = 0; i < inputText.length; i++) {
      if (this.#isExistInCharacterSet(inputText[i])) {
        counter++;
      }
    }

    return counter;
  }

  #isExistInCharacterSet(character) {
    return this.characterSet.has(character.toLowerCase());
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
