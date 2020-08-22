const searchDictionary = require('./search/dictionary')

exports.handler = async (event) => {
  const searchString = Object.keys(event.queryStringParameters)[0] || ''
  const results = searchDictionary(searchString)
  return {
    statusCode: 200,
    body: JSON.stringify(results),
  }
}
