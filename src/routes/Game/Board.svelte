<script>
  import { scale } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'
  import { draw } from './draw'

  export let grid
  export let words
  export let wordColors
  export let solved = []

  const dispatch = createEventDispatcher()
  let cells = [...Array(100)]
  let selection = {}

  function setXY(id) {
    return {
      x: cells[id].offsetLeft + 18,
      y: cells[id].offsetTop + 18,
    }
  }

  function handleStart(e) {
    const i1 = Number(e.target.dataset.id)
    const { x: x1, y: y1 } = setXY(i1)
    selection = { i1, x1, y1 }
  }

  function handleMove(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY)
    const i2 = Number(el.dataset.id)
    if (isNaN(i2)) return

    const { x1, y1 } = selection
    const { x: x2, y: y2 } = setXY(i2)

    // valid selection if start and end are in same row, column or on a diagonal
    if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
      selection = { ...selection, i2, x2, y2 }
    }
  }

  function handleEnd() {
    dispatch('selection', {
      ...selection,
    })
    selection = {}
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
    user-select: none;
  }

  .item {
    display: grid;
    place-items: center;
    font-weight: 600;
    z-index: 2;
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

  svg.selection {
    z-index: 1;
  }
</style>

<div
  touch-action="none"
  class="board"
  on:pointerdown={handleStart}
  on:pointermove={handleMove}
  on:pointerup={handleEnd}>
  {#each grid as item, i}
    <span
      bind:this={cells[i]}
      data-id={i}
      in:scale={{ duration: 300, start: 1.5, delay: (Math.floor(i / 10) + (i % 10)) * 25 }}
      class="item">
      {item}
    </span>
  {/each}

  {#if selection.i2 !== undefined}
    <svg class="selection" style="--stroke: 330, 100%, 71%">
      <path d="M{selection.x1} {selection.y1}l{selection.x2 - selection.x1} {selection.y2 - selection.y1}" />
    </svg>
  {/if}

  {#each solved as line}
    <svg style="--stroke:{wordColors[words.indexOf(line.word)]}">
      <path in:draw d="M{line.x1} {line.y1}l{line.x2 - line.x1} {line.y2 - line.y1}" />
    </svg>
  {/each}

</div>
