const fs = require('fs')
const wordsGSL = require('./wordlists/wordsGSL')
const wordsCommon = require('./wordlists/wordsCommon')

/*
let wordSearchWords = wordsGSL.filter((word) => word.length >= 3)
wordSearchWords = wordSearchWords.map((word) => word.toUpperCase())
wordSearchWords = new Set([...wordSearchWords])

wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsSportsStars.txt')
wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsAnimals.txt')
wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsBoysNames.txt')
wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsGirlsNames.txt')
wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsColours.txt')
wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsCountries.txt')
wordSearchWords = appendWords(wordSearchWords, './wordlists/wordsTownsCitiesUK.txt')
*/

/*
let codewordWords = [...wordsCommon, ...wordsGSL].filter((word) => word.length >= 3)
codewordWords = codewordWords.map((word) => word.toUpperCase())
codewordWords = new Set([...codewordWords])
codewordWords = appendWords(codewordWords, './wordlists/wordsSportsStars.txt')
codewordWords = appendWords(codewordWords, './wordlists/wordsAnimals.txt')
codewordWords = appendWords(codewordWords, './wordlists/wordsBoysNames.txt')
codewordWords = appendWords(codewordWords, './wordlists/wordsGirlsNames.txt')
codewordWords = appendWords(codewordWords, './wordlists/wordsColours.txt')
codewordWords = appendWords(codewordWords, './wordlists/wordsCountries.txt')
codewordWords = appendWords(codewordWords, './wordlists/wordsTownsCitiesUK.txt')
*/

let codewordWords = new Set()
codewordWords = appendWords(codewordWords, './wordlists/wordsUKEnglish.txt')

saveFile('./wordlists/wordsCodeword.js', JSON.stringify([...codewordWords], null, 2))

function appendWords(words, file) {
  try {
    // read contents of the file
    const data = fs.readFileSync(file, 'UTF-8')

    // split the contents by new line
    const lines = data.toUpperCase().split(/\r?\n/)

    lines
      .filter((w) => w.length >= 3)
      .filter((w) => /^[A-Z]*$/.test(w))
      .forEach((line) => {
        words.add(line)
      })

    return words
  } catch (err) {
    console.error(err)
  }
}

function saveFile(filename, data) {
  fs.writeFile(filename, data, function (err) {
    if (err) throw err
    console.log('Data is written to file successfully.')
  })
}
