import { writable } from 'svelte/store'
import { createCodeword } from '../api'
import { generateHslColors } from '../utils'

export const game = writable({})

export async function newGame() {
  const res = await createCodeword()
  game.set({
    ...res,
    wordColors: generateHslColors(100, 60, res.words.length),
  })
}
