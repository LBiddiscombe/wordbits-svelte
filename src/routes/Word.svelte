<script>
  import { fade } from 'svelte/transition'
  export let params = {}

  let promise = getDefinition(params.word)

  async function getDefinition(word) {
    const response = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
      headers: {
        Authorization: 'Token 6dfd4ac8127d6271d92d849840c3a8e2e05bec30',
      },
    })
    const result = await response.json()
    return result
  }
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
