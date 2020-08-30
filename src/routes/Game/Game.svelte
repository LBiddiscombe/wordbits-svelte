<script>
  import { fade } from 'svelte/transition'
  import Board from './Board.svelte'
  import { createGame } from '../../api'
  import { generateHslColors } from '../../utils'
  import WordTags from './WordTags.svelte'

  let promise = createGame()
  let wordMap
  let wordColors = []

  $: wordColors = wordMap ? generateHslColors(70, 80, wordMap.size) : []
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

  {#await promise}
    <p>Initialising...</p>
  {:then data}
    <Board {data} bind:wordMap {wordColors} />
    {#if wordMap}
      <WordTags {wordMap} {wordColors} />
    {/if}
  {/await}

</div>
