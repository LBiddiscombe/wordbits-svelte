<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { newGame, game } from '../../stores/codeword'
  import Keyboard from './Keyboard.svelte'

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
    justify-content: space-between;
    align-items: center;
    touch-action: manipulation;
  }

  .board {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(13, 2rem);
    gap: 1px;
    user-select: none;
  }

  .item {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-foreground);
    color: var(--color-background);
    border-radius: 2px;
    font-weight: 600;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  {#if $game.grid}
    <div class="board">
      {#each $game.grid as letter}
        <span class:item={letter !== ' '}>{$game.letterMap.get(letter) || ' '}</span>
      {/each}
    </div>
    <Keyboard />
  {:else}
    <p>Brute force attacking the problem...</p>
  {/if}
</div>
