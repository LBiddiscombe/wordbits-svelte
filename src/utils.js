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
  return array.reduce((entryMap, e) => entryMap.set(e.length, [...(entryMap.get(e.length) || []), e]), new Map())
}
