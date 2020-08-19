<script>
  import { fade } from 'svelte/transition'
  import { getDefinition } from '../api'
  export let params = {}

  let promise = getDefinition(params.word)
</script>

<style>
  .page {
    display: grid;
    place-items: center;
  }

  h1 {
    font-size: 1.25rem;
  }

  .list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .type {
    font-style: italic;
    font-weight: bold;
  }

  .example {
    font-style: italic;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>{params.word}</h1>

  {#await promise}
    <p>Loading...</p>
  {:then data}
    {#each data.definitions as definition}
      <div class="list">
        <div class="type">{definition.type}</div>
        <div class="definition">{definition.definition}</div>
        {#if definition.example}
          <div class="example">"{definition.example}"</div>
        {/if}
      </div>
    {/each}
  {/await}

</div>
