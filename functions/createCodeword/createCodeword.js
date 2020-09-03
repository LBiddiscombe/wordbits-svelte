const generator = require('./generator')
const words = require('./words')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    //const { diagonals = true, effort = 10000, filler = null } = event.queryStringParameters

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
