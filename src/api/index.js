async function searchDictionary(searchString) {
  const cacheKey = `search_${searchString}`
  if (sessionStorage.getItem(cacheKey)) {
    return JSON.parse(sessionStorage.getItem(cacheKey))
  }

  const response = await fetch(`/.netlify/functions/wordbits?${searchString}`)
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

export { searchDictionary, getDefinition }
