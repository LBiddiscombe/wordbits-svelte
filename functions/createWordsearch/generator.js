class WordSearch {
  constructor(width, height, grid, words, wordMap) {
    this.width = width
    this.height = height
    this.grid = grid
    this.words = words
    this.wordMap = wordMap
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
    minLength: 5,
    maxLength: null,
    width: 10,
    height: 10,
    filler: null,
    effort: 10000,
  }
  options = Object.assign({}, defaults, options)

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
    const start = { x1: x, y1: y }
    for (let i = 0; i < word.length; i++) {
      const l = word[i].toUpperCase()
      set(x, y, l)
      x += dx
      y += dy
    }

    used.push(word)
    usedMap.set(word, {
      ...start,
      x2: x - dx,
      y2: y - dy,
      dx,
      dy,
      i1: start.y1 * width + start.x1,
      i2: (y - dy) * width + (x - dx),
      solved: false,
    })
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

  return new WordSearch(width, height, grid, used, [...usedMap])
}

exports.generate = generate

/* 

TODO: Utility function to create a random letter based on usage, state below;

Letter	Usage	Weighting
e	13%	11
t	9.10%	8
a	8.20%	8
o	7.50%	7
i	7%	7
n	6.70%	7
h	6.10%	6
s	6.30%	6
r	6%	5
d	4.30%	4
l	4%	4
c	2.80%	3
m	2.40%	3
u	2.80%	3
f	2.20%	2
w	2.40%	2
b	1.50%	2
g	2%	2
p	1.90%	2
y	2%	2
j	0.15%	1
k	0.77%	1
q	0.10%	1
v	0.98%	1
x	0.15%	1
z	0.07%	1

*/
