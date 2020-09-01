<script>
  import { fade, scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
  import Board from './Board.svelte'
  import { createGame } from '../../api'
  import { generateHslColors } from '../../utils'
  import WordTags from './WordTags.svelte'

  let data, grid, words, wordMap
  let wordColors = []
  let solved = JSON.parse(localStorage.getItem('solved')) || []
  let completed = false

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

    localStorage.setItem('solved', JSON.stringify(solved))

    if (solved.length >= words.length) {
      setTimeout(() => (completed = true), 1000)
      localStorage.removeItem('game')
      localStorage.removeItem('solved')
    }
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

  .completed {
    position: fixed;
    left: 0;
    top: calc(30vh - 4rem);
    z-index: 3;
    width: 100vw;
    background-color: var(--primary-dark);
    color: var(--color-background);
    text-align: center;
  }

  a {
    color: var(--color-background);
    text-decoration: underline;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  {#if data}
    <Board {grid} {words} {wordColors} {solved} on:selection={handleSelection} />
    <WordTags {words} {wordColors} {solved} />
  {:else}
    <p>Reading dictionary...</p>
  {/if}

  {#if completed}
    <div in:scale={{ duration: 500, easing: elasticOut }} class="completed">
      <h1>Well Done!</h1>
      <p>
        <a href="#/game" on:click={() => location.reload()}>Try another</a>
      </p>
    </div>
  {/if}

</div>
