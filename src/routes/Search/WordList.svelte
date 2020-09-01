<script>
  export let words = []
  export let title = 'Title'

  let shownWords = words.slice(0, 10)
</script>

<style>
  .title {
    color: var(--color-foreground);
    background-color: hsl(var(--bg-color), 0.5);
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .word {
    margin: 0 1rem;
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-size: 1.25rem;
    color: var(--color-foreground);
  }

  button {
    border: none;
    color: var(--color-foreground);
    background-color: transparent;
    text-decoration: underline;
    margin-bottom: 0;
  }
</style>

<div class="title">{title}</div>
{#each shownWords as word, i}
  <a href={`#/word/${word}`} class="word">{word.toLowerCase()}</a>
{/each}
{#if shownWords.length < words.length}
  <button on:click={() => (shownWords = words)}>Show More</button>
{/if}
