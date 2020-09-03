<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { newGame, game } from '../../stores/codeword'

  onMount(() => {
    newGame()
  })

  $: console.log($game.words)
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

  .board {
    position: relative;
    margin: 0 auto;
    display: grid;
    place-items: center;
    width: calc(1.5rem * 12);
    grid-template-columns: repeat(12, 1.5rem);
    grid-template-rows: repeat(12, 1.5rem);
    user-select: none;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>Codeword</h1>
  {#if $game.grid}
    <div class="board">
      {#each $game.grid as letter}
        <span>{letter}</span>
      {/each}
    </div>
  {:else}
    <p>Brute force attacking the problem...</p>
  {/if}
</div>
