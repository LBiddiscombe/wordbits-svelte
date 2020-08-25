<script>
  import { scale } from 'svelte/transition'
  import { draw } from './draw'
  import { generateHslColors } from '../../utils'
  import { faInfo } from '@fortawesome/free-solid-svg-icons'

  export let data

  let cells = [...Array(100)]
  let wordColor = generateHslColors(70, 80, data.words.length)
  let wordMap = new Map(data.wordMap)
  let highlights = []

  function solveWord(word) {
    const value = wordMap.get(word)
    value.solved = true
    wordMap.set(word, value)
    wordMap = wordMap // better way to trigger rectivity on a Map??
    const { i1, i2 } = value
    highlights = [
      ...highlights,
      {
        x1: cells[i1].offsetLeft + 16,
        y1: cells[i1].offsetTop + 16,
        x2: cells[i2].offsetLeft + 16,
        y2: cells[i2].offsetTop + 16,
        color: wordColor[data.words.indexOf(word)],
      },
    ]
  }
</script>

<style>
  .board {
    position: relative;
    margin: 0 auto;
    display: grid;
    width: calc((2rem + 0.25rem) * 10);
    grid-template-columns: repeat(10, 2rem);
    grid-template-rows: repeat(10, 2rem);
    gap: 0.25rem;
  }

  .item {
    display: grid;
    place-items: center;
    font-weight: 600;
    z-index: 2;
  }

  .tagwrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    justify-content: center;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    border-radius: 0.75rem;
  }

  svg {
    width: calc(100% + 1rem);
    height: 100%;
    position: absolute;
  }

  svg path {
    stroke: hsl(var(--stroke));
    stroke-opacity: 0.75;
    stroke-width: 24;
    stroke-linecap: round;
  }

  button {
    border: none;
    margin: 0.25rem;
  }

  .solved {
    text-decoration: line-through;
    background-color: var(--separator);
    pointer-events: none;
  }
</style>

<div class="board">
  {#each data.grid as item, i}
    <span
      bind:this={cells[i]}
      in:scale={{ duration: 300, start: 1.5, delay: (Math.floor(i / 10) + (i % 10)) * 25 }}
      class="item">
      {item}
    </span>
  {/each}

  {#each highlights as line, i}
    <svg style="--stroke:{line.color}">
      <path in:draw d="M{line.x1} {line.y1}l{line.x2 - line.x1} {line.y2 - line.y1}" />
    </svg>
  {/each}

</div>

<div class="tagwrapper">
  {#each data.words as word, i}
    <button class:solved={wordMap.get(word).solved} on:click|once={solveWord(word)} class="tag">
      {word.toLowerCase()}
    </button>
  {/each}
</div>
