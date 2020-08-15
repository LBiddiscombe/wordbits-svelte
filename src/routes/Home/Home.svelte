<script>
  import { fade } from 'svelte/transition'
  import Input from './Input.svelte'
  import Results from './Results.svelte'
  import { searchDictionary } from '../../api'

  const emptyData = { error: '', results: [], resultText: '' }
  let data

  let value = ''

  function onReset() {
    data = null
    value = ''
  }

  function onSubmit() {
    data = searchDictionary(value)
  }
</script>

<style>
  .page {
    height: 100%;
    width: 100%;
    padding: 0;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    align-items: center;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  <Input bind:value on:submit={onSubmit} on:click={onReset} />
  {#await data}
    <p>Searching...</p>
  {:then data}
    {#if data}
      <Results {data} />
    {/if}
  {:catch error}
    <p>Error, try again</p>
  {/await}

</div>
