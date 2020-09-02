<script>
  export let words
  export let wordColors = []
  export let solved = []
</script>

<style>
  .tagwrapper {
    width: calc(100vw - 2rem);
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem 0;
    justify-content: center;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    border-radius: 0.75rem;
    background-color: hsl(var(--bg-color), 0.5);
    color: var(--color-foreground);
    border: none;
    margin: 0.25rem;
  }

  .tag.solved {
    text-decoration: line-through;
    background-color: hsl(var(--bg-color), 0);
  }
</style>

<div class="tagwrapper">
  {#each words as word, i}
    <a
      href="#/word/{word}"
      style="--bg-color:{wordColors[i]}"
      class="tag"
      class:solved={solved.find((w) => w.word === word)}>
      {word.toLowerCase()}
    </a>
  {/each}
</div>
