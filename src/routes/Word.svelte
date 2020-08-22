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

  p {
    margin: 0;
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

  .definition {
    padding-left: 1rem;
  }

  .example {
    padding-left: 1rem;
    font-style: italic;
  }

  .imgwrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>{params.word}</h1>
  {#await promise}
    <p>Loading...</p>
  {:then data}
    {#if data.pronunciation}
      <p>{data.pronunciation}</p>
    {/if}
    {#each data.definitions as definition}
      <div class="list">
        <div class="type">{definition.type}</div>
        <div class="definition">
          -
          {@html definition.definition}
          {definition.emoji}
        </div>
        {#if definition.example}
          <div class="example">
            "
            {@html definition.example}
            "
          </div>
        {/if}
        {#if definition.image_url}
          <div class="imgwrap">
            <img src={definition.image_url} alt={params.word} />
          </div>
        {/if}
      </div>
    {/each}
  {:catch error}
    <p>No defintion found</p>
  {/await}

</div>
