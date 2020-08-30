<script>
  import { fade } from 'svelte/transition'
  import Board from './Board.svelte'
  import { createGame } from '../../api'
  import { generateHslColors } from '../../utils'
  import WordTags from './WordTags.svelte'

  let data, grid, words, wordMap
  let wordColors = []
  let solved = []

  createGame().then((res) => {
    data = res
    words = res.words
    grid = res.grid
    wordMap = res.wordMap
    wordColors = generateHslColors(70, 80, words.length)
  })

  function handleSelection(event) {
    const { i1, i2 } = event.detail
    let word = null
    for (let [key, value] of wordMap) {
      if (value.i1 === i1 && value.i2 === i2) {
        word = key
        break
      }
    }
    if (word) solved = [...solved, { word, ...event.detail }]
  }
</script>

<style>
  .page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  {#if data}
    <Board {grid} {words} {wordColors} {solved} on:selection={handleSelection} />
    <WordTags {words} {wordColors} {solved} />
  {:else}
    <p>Reading dictionary...</p>
  {/if}

</div>
