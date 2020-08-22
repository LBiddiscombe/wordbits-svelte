async function searchDictionary(searchString) {
  const response = await fetch(`/.netlify/functions/wordbits?${searchString}`)
  if (response.status !== 200) {
    console.error(`Search Failed: ${response.status.toString()} - ${response.statusText}`)
    throw {
      error: 'Search failed, try another',
    }
  }
  const data = await response.json()
  return data
}

async function getDefinition(word) {
  const response = await fetch(`/.netlify/functions/definition?${word}`)
  if (response.status !== 200) {
    console.error(`Lookup Failed: ${response.status.toString()} - ${response.statusText}`)
    throw {
      error: 'Lookup failed, try another word.',
    }
  }
  const data = await response.json()
  return data
}

export { searchDictionary, getDefinition }
