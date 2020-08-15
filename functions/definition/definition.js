const fetch = require('node-fetch')
exports.handler = async function (event, context) {
  try {
    const word = Object.keys(event.queryStringParameters)[0] || ''
    const response = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
      headers: { Authorization: 'Token ' + process.env.OWLBOT_TOKEN },
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
