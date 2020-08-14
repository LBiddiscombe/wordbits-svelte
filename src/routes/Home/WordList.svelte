<script>
  export let words = []
  export let title = 'Title'

  let shownWords = words.slice(0, 10)
</script>

<style>
  .title {
    color: var(--text-dark);
    background-color: var(--brand-accent);
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    font-weight: 900;
  }

  .word {
    margin: 0 1rem;
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    font-size: 1.25rem;
    color: var(--brand-dark);
  }

  button {
    border: none;
    background-color: transparent;
    text-decoration: underline;
  }
</style>

<div class="title">{title}</div>
{#each shownWords as word, i}
  <a href={`#/word/${word}`} class="word">{word.toLowerCase()}</a>
{/each}
{#if shownWords.length < words.length}
  <button on:click={() => (shownWords = words)}>Show More</button>
{/if}
