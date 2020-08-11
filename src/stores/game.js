import { writable } from 'svelte/store'
import { shuffle } from '../utils/shuffle'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let codes = shuffle([...alphabet]).map((letter, id) => ({ letter, code: id + 1, guess: '' }))

const lookup = new Map()
codes.forEach((key) => {
  lookup.set(key.letter, key)
})

export const keyCodes = writable(lookup)
export const selected = writable('')
