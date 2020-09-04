<script>
  import { onMount } from 'svelte'
  import { fade, scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
  import Board from './Board.svelte'
  import WordTags from './WordTags.svelte'
  import { newGame, game, tryWord, solved, completed } from '../../stores/wordsearch'

  let words, grid, wordColors
  $: {
    words = $game.words
    grid = $game.grid
    wordColors = $game.wordColors
  }

  onMount(() => {
    newGame()
  })
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
    margin-top: 1rem;
    z-index: 3;
    width: 100vw;
    max-width: 414px;
    background-color: var(--color-foreground);
    color: var(--color-background);
    text-align: center;
  }

  a {
    color: var(--color-background);
    text-decoration: underline;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  {#if words}
    <Board {grid} {words} {wordColors} solved={$solved} on:selection={tryWord} />
    {#if $completed}
      <div in:scale={{ duration: 500, easing: elasticOut }} class="completed">
        <h1>Well Done!</h1>
        <p>
          <a href="#/game" on:click={() => location.reload()}>Try another</a>
        </p>
      </div>
    {:else}
      <WordTags {words} {wordColors} solved={$solved} />
    {/if}
  {:else}
    <p>Reading dictionary...</p>
  {/if}

</div>
