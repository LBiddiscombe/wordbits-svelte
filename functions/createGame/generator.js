class WordSearch {
  constructor(width, height, grid, words) {
    this.width = width
    this.height = height
    this.grid = grid
    this.words = words
  }

  get(x, y) {
    return this.grid[y * this.width + x]
  }

  toString() {
    let result = ''
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        result += this.get(x, y) + ' '
      }
      result += '\n'
    }
    return result
  }
}

function generate(options) {
  const defaults = {
    words: [],
    diagonals: true,
    minLength: 3,
    maxLength: null,
    width: 10,
    height: 10,
    filler: null,
    effort: 10000,
  }
  options = Object.assign({}, defaults, options)

  console.log(options)

  let words = options.words
    .slice()
    .filter((w) => w.length >= options.minLength && (options.maxLength == null || w.length <= options.maxLength))
    .filter((w) => /^[a-z]*/.test(w))

  let { width, height, diagonals } = options

  let grid = []
  let used = []
  let usedMap = new Map()
  for (let i = 0; i < width * height; i++) {
    grid[i] = options.filler || ' '
  }

  let dxs = []
  let dys = []
  if (diagonals) {
    dxs = [0, 1, 1, 1, 0, -1, -1, -1]
    dys = [-1, -1, 0, 1, 1, 1, 0, -1]
  } else {
    dxs = [0, 1, 0, -1]
    dys = [-1, 0, 1, 0]
  }

  function rand(max) {
    return Math.floor(Math.random() * max)
  }

  function get(x, y) {
    return grid[y * width + x]
  }

  function set(x, y, letter) {
    grid[y * width + x] = letter
  }

  function tryWord(x, y, dx, dy, word) {
    let ok = false
    for (let i = 0; i < word.length; i++) {
      const l = word[i].toUpperCase()
      if (x < 0 || y < 0 || x >= width || y >= height) return false
      const cur = get(x, y)
      if (cur != ' ' && cur != l) return false
      if (cur == ' ') ok = true
      x += dx
      y += dy
    }
    return ok
  }

  function putWord(x, y, dx, dy, word) {
    for (let i = 0; i < word.length; i++) {
      const l = word[i].toUpperCase()
      set(x, y, l)
      x += dx
      y += dy
    }
    used.push(word)
    usedMap.set(word, true)
  }

  for (let i = 0; i < width * height * options.effort; i++) {
    if (used.length == words.length) break
    const word = words[rand(words.length)]
    if (usedMap.has(word)) continue
    const x = rand(width)
    const y = rand(height)
    const d = rand(dxs.length)
    const dx = dxs[d]
    const dy = dys[d]
    if (tryWord(x, y, dx, dy, word)) putWord(x, y, dx, dy, word)
  }

  if (!options.filler) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] == ' ') grid[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[rand(26)]
    }
  }

  used.sort()

  return new WordSearch(width, height, grid, used)
}

exports.generate = generate
