<script>
  import { game, gameGrid, selectCode, selectedCode, showErrors } from '../../stores/codeword'
</script>

<style>
  .wrapper {
    width: calc(100vmin - 2rem);
    height: calc(100vmin - 2rem);
    max-height: 500px;
    max-width: 500px;
    padding: 0.5rem;
    border-radius: 0rem;
    margin: 1rem;
  }

  .grid {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(13, 1fr);
    gap: 2px;
    user-select: none;
  }

  .tile {
    margin: 0;
    box-sizing: border-box;
    display: grid;
    place-items: start;
    padding: 0 4px;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--color-base), 0.15);
    color: var(--color-foreground);
    border-radius: 2px;
    font-size: 0.75rem;
  }

  .letter {
    place-items: center;
    background-color: var(--color-foreground);
    color: var(--color-background);
    font-size: 1rem;
    font-weight: 600;
  }

  .letter.wrong.highlight {
    outline: 2px solid var(--color-error);
  }

  .letter.wrong:not(.highlight) {
    background-color: var(--color-error);
  }

  .highlight {
    background-color: hotpink;
  }
</style>

<div class="wrapper">
  <div class="grid">
    {#if $gameGrid}
      {#each $gameGrid as cell, i}
        <div
          data-letter={$game.letterGrid[i]}
          data-code={$game.codeGrid[i]}
          class:letter={isNaN(cell)}
          class:tile={cell !== ' '}
          class:highlight={$game.codeGrid[i] === $selectedCode}
          class:wrong={$showErrors && cell !== $game.letterGrid[i]}
          on:click={selectCode}>
          {cell}
        </div>
      {/each}
    {/if}
  </div>
</div>
