<script>
  import { game, solution } from '../../stores/codeword'

  let selected

  let cells

  function handleClick(e) {
    selected = +e.target.dataset.code
  }

  $: {
    const letterGrid = $game.letterGrid
    const codeGrid = $game.codeGrid
    if (letterGrid.length > 0) {
      cells = letterGrid.map((letter, i) => {
        const code = codeGrid[i]
        if (solution[code]) return solution[code]
        if (letter !== ' ') return code
        return ' '
      })
    }
  }
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
    border: 1px solid var(--color-foreground);
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
    background-color: var(--brand-accent);
  }

  button:not(.tile) {
    visibility: hidden;
  }
</style>

<div class="grid">
  {#if cells}
    {#each cells as value, i}
      <button
        data-letter={$game.letterGrid[i]}
        data-code={$game.codeGrid[i]}
        class:letter={isNaN(value)}
        class:tile={value !== ' '}
        class:highlight={$game.codeGrid[i] === selected}
        on:click={handleClick}>
        {value}
      </button>
    {/each}
  {/if}
</div>
