<script>
  import { scale } from 'svelte/transition'
  export let data

  console.log(data)
</script>

<style>
  .board {
    margin: 0 auto;
    display: grid;
    width: calc(100% - 3rem);
    max-width: 25rem;
    grid-template-columns: repeat(10, 2rem);
    grid-template-rows: repeat(10, 2rem);
    gap: 0.25rem;
  }
  .item {
    display: grid;
    place-items: center;
    font-weight: 600;
    background-color: var(--separator-light);
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
</style>

<div class="board">
  {#each data.grid as item, i}
    <span in:scale={{ duration: 300, start: 1.5, delay: (Math.floor(i / 10) + (i % 10)) * 25 }} class="item">
      {item}
    </span>
  {/each}
</div>

<div class="tagwrapper">
  {#each data.words as word}
    <span class="tag">{word.toLowerCase()}</span>
  {/each}
</div>
