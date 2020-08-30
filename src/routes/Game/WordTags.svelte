<script>
  export let wordMap
  export let wordColors
</script>

<style>
  .tagwrapper {
    width: calc(100vh - 2rem);
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    justify-content: center;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    border-radius: 0.75rem;
    background-color: hsl(var(--bg-color));
    margin: 0.25rem;
  }

  .tag.solved {
    text-decoration: line-through;
    background-color: hsl(var(--bg-color), 0.5);
    pointer-events: none;
  }
</style>

<div class="tagwrapper">
  {#each [...wordMap].sort() as [word], i}
    <div style="--bg-color:{wordColors[i]}" class="tag" class:solved={wordMap.get(word).solved}>
      {word.toLowerCase()}
    </div>
  {/each}
</div>
