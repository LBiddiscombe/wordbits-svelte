<script>
  import { scale } from 'svelte/transition'
  import { draw } from './draw'
  import { generateHslColors } from '../../utils'
  import { faInfo } from '@fortawesome/free-solid-svg-icons'

  export let data

  let cells = [...Array(100)]
  let wordColor = generateHslColors(70, 80, data.words.length)
  let wordMap = new Map(data.wordMap)
  let solved = []
  let highlight = {}
  let start = {}
  const CELL_OFFSET = 18

  function handleStart(e) {
    const i1 = Number(e.target.dataset.id)
    const x1 = cells[i1].offsetLeft + CELL_OFFSET
    const y1 = cells[i1].offsetTop + CELL_OFFSET
    highlight = { i1, x1, y1 }
  }

  function handleMove(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY)
    const { i1, x1, y1 } = highlight
    const i2 = Number(el.dataset.id)
    if (!i2) return

    const x2 = cells[i2].offsetLeft + CELL_OFFSET
    const y2 = cells[i2].offsetTop + CELL_OFFSET
    if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
      highlight = { ...highlight, i2, x2, y2 }
    }
  }

  function handleEnd(e) {
    let wordFound = null
    for (let [key, value] of wordMap) {
      if (value.i1 === highlight.i1 && value.i2 === highlight.i2) {
        wordFound = key
        break
      }
    }

    highlight = {}

    if (wordFound) solveWord(wordFound)
  }

  function solveWord(word) {
    const value = wordMap.get(word)
    value.solved = true
    wordMap.set(word, value)
    wordMap = wordMap // better way to trigger rectivity on a Map??
    const { i1, i2 } = value
    solved = [
      ...solved,
      {
        x1: cells[i1].offsetLeft + CELL_OFFSET,
        y1: cells[i1].offsetTop + CELL_OFFSET,
        x2: cells[i2].offsetLeft + CELL_OFFSET,
        y2: cells[i2].offsetTop + CELL_OFFSET,
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
    grid-template-columns: repeat(10, 2.25rem);
    grid-template-rows: repeat(10, 2.25rem);
    touch-action: none;
    user-select: none;
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

<div class="board" on:pointerdown={handleStart} on:pointermove={handleMove} on:pointerup={handleEnd}>
  {#each data.grid as item, i}
    <span
      bind:this={cells[i]}
      data-id={i}
      in:scale={{ duration: 300, start: 1.5, delay: (Math.floor(i / 10) + (i % 10)) * 25 }}
      class="item">
      {item}
    </span>
  {/each}

  {#if highlight.i2}
    <svg style="--stroke: 330, 100%, 71%">
      <path d="M{highlight.x1} {highlight.y1}l{highlight.x2 - highlight.x1} {highlight.y2 - highlight.y1}" />
    </svg>
  {/if}

  {#each solved as line}
    <svg style="--stroke:{line.color}">
      <path in:draw d="M{line.x1} {line.y1}l{line.x2 - line.x1} {line.y2 - line.y1}" />
    </svg>
  {/each}

</div>

<div class="tagwrapper">
  {#each data.words as word, i}
    <button class:solved={wordMap.get(word).solved} class="tag">{word.toLowerCase()}</button>
  {/each}
</div>
