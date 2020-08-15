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
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>{params.word}</h1>

  {#await promise}
    <p>Loading...</p>
  {:then data}
    {#each data.definitions as definition}
      <div>
        <div>{definition.type}</div>
        <div>{definition.definition}</div>
        {#if definition.example}
          <div>"{definition.example}"</div>
        {/if}
      </div>
    {/each}
  {/await}

</div>
