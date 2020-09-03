<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { newGame, game } from '../../stores/codeword'

  onMount(() => {
    newGame()
  })

  let letters

  $: {
    letters = $game.words && $game.words.join('').split('')
    letters = [...new Set(letters)].sort()
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

  .board {
    position: relative;
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(13, 1.5rem);
    grid-template-rows: repeat(13, 1.5rem);
    gap: 0.25rem;
    user-select: none;
  }

  .item {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-foreground);
    color: var(--color-background);
    border-radius: 0.25rem;
    font-weight: 600;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  {#if $game.grid}
    <div class="board">
      {#each $game.grid as letter}
        <span class:item={letter !== ' '}>{letter}</span>
      {/each}
    </div>
  {:else}
    <p>Brute force attacking the problem...</p>
  {/if}
</div>
