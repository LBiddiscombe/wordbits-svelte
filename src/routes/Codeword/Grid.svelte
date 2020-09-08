<script>
  import { game, cells, selectCode, selectedCode } from '../../stores/codeword'
</script>

<style>
  .grid {
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

  .tile {
    box-sizing: border-box;
    display: grid;
    place-items: start;
    padding: 0 2px;
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
    font-size: 1rem;
    font-weight: 600;
  }

  .highlight {
    background-color: hotpink;
  }

  button:not(.tile) {
    visibility: hidden;
  }
</style>

<div class="grid">
  {#if $cells}
    {#each $cells as value, i}
      <button
        data-letter={$game.letterGrid[i]}
        data-code={$game.codeGrid[i]}
        class:letter={isNaN(value)}
        class:tile={value !== ' '}
        class:highlight={$game.codeGrid[i] === $selectedCode}
        on:click={selectCode}>
        {value}
      </button>
    {/each}
  {/if}
</div>
