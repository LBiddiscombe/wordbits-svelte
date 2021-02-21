export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

export function groupBy(array, key) {
  return array.reduce(function (item, x) {
    ;(item[x[key]] = item[x[key]] || []).push(x)
    return item
  }, {})
}

export function groupMapByLen(array) {
  return array.reduce((group, item) => group.set(item.length, [...(group.get(item.length) || []), item]), new Map())
}

export function generateHslColors(saturation, lightness, amount) {
  let colors = []
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < amount; i++) {
    let hue = (i * huedelta + 120) % 360 // start at green - 120
    colors.push(`${hue},${saturation}%,${lightness}%`)
  }

  return colors
}

export function randomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getLocalStorageSize() {
  const local = new Blob(Object.entries(localStorage)).size
  const session = new Blob(Object.entries(sessionStorage)).size

  return formatBytes(local + session)
}

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export function findMiddlestSpace(string) {
  if (string.indexOf(' ') === -1) return string.length
  const mid = Math.floor(string.length / 2)
  const stringArray = [...string]
  let middlest = string.length
  let currentBest = string.length

  stringArray.forEach((char, i) => {
    if (char !== ' ') return
    if (Math.abs(mid - i) < currentBest) {
      middlest = i
      currentBest = Math.abs(mid - i)
    }
  })

  return middlest
}
