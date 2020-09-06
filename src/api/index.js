async function searchDictionary(searchString) {
  const cacheKey = `search_${searchString}`
  if (sessionStorage.getItem(cacheKey)) {
    return JSON.parse(sessionStorage.getItem(cacheKey))
  }

  const response = await fetch(`/.netlify/functions/search?${searchString}`)
  if (response.status !== 200) {
    console.error(`Search Failed: ${response.status.toString()} - ${response.statusText}`)
    throw {
      error: 'Search failed, try another',
    }
  }
  const data = await response.json()
  sessionStorage.setItem(cacheKey, JSON.stringify(data))
  return data
}

async function getDefinition(word) {
  const cacheKey = `define_${word}`

  if (sessionStorage.getItem(cacheKey)) {
    return JSON.parse(sessionStorage.getItem(cacheKey))
  }

  const response = await fetch(`/.netlify/functions/definition?${word}`)
  if (response.status !== 200) {
    console.error(`Lookup Failed: ${response.status.toString()} - ${response.statusText}`)
    throw {
      error: 'Lookup failed, try another word.',
    }
  }
  const data = await response.json()
  sessionStorage.setItem(cacheKey, JSON.stringify(data))
  return data
}

async function createWordsearch() {
  const cacheKey = 'wordsearch'
  if (localStorage.getItem(cacheKey)) {
    const localData = JSON.parse(localStorage.getItem(cacheKey))
    localData.wordMap = new Map(localData.wordMap)
    return localData
  }

  const response = await fetch(`/.netlify/functions/createWordsearch`)
  if (response.status !== 200) {
    console.error(`Game creation failed: ${response.status.toString()} - ${response.statusText}`)
    throw {
      error: 'Game creation failed, try again',
    }
  }
  const data = await response.json()
  // rehydrate the Map object from the json array returned
  localStorage.setItem(cacheKey, JSON.stringify(data))
  data.wordMap = new Map(data.wordMap)
  return data
}

async function createCodeword() {
  const cacheKey = 'codeword'
  if (localStorage.getItem(cacheKey)) {
    const localData = JSON.parse(localStorage.getItem(cacheKey))
    localData.letterMap = new Map(localData.letterMap)
    return localData
  }

  const response = await fetch(`/.netlify/functions/createCodeword`)
  if (response.status !== 200) {
    console.error(`Game creation failed: ${response.status.toString()} - ${response.statusText}`)
    throw {
      error: 'Game creation failed, try again',
    }
  }
  const data = await response.json()
  // rehydrate the Map object from the json array returned
  localStorage.setItem(cacheKey, JSON.stringify(data))
  data.letterMap = new Map(data.letterMap)
  console.log(data.letterMap)
  return data
}

export { searchDictionary, getDefinition, createWordsearch, createCodeword }
