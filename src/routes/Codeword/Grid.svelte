<script>
  import { game, gameGrid, selectCode, selectedCode, showErrors } from '../../stores/codeword'
</script>

<style>
  .wrapper {
    width: 100vmin;
    height: 100vmin;
    max-height: 400px;
    max-width: 400px;
    padding: 0.5rem;
    xbackground-color: rgba(var(--color-base), 0.1);
  }

  .grid {
    position: relative;
    width: 100%;
    max-width: 400px;
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
    background-color: var(--color-background);
    color: var(--color-foreground);
    border: 1px solid rgba(var(--color-base), 0.5);
    border-radius: 2px;
    font-size: 0.75rem;
  }

  .letter {
    place-items: center;
    background-color: var(--color-foreground);
    color: var(--color-background);
    font-size: 1.25rem;
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
