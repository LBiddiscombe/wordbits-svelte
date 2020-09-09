const generator = require('./generator')
const wordsGSL = require('./wordsGSL')
const wordsCommon = require('./wordsCommon')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    //const { diagonals = true, effort = 10000, filler = null } = event.queryStringParameters
    const wordSet = new Set([...wordsCommon, ...wordsGSL])
    const words = [...wordSet]
      .sort()
      .filter((word) => word.length >= 3)
      .map((word) => word.toUpperCase())
      .filter((word) => /^[A-Z]*$/.test(word))

    return {
      statusCode: 200,
      body: JSON.stringify(generator.generate({ words })),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
