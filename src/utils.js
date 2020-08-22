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
    let hue = (i * huedelta + 60) % 360 // start at yellow - 60
    colors.push(`${hue},${saturation}%,${lightness}%`)
  }

  return colors
}
