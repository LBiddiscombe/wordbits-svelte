<script>
  import { onDestroy } from 'svelte'
  import { push, location } from 'svelte-spa-router'
  import { fade } from 'svelte/transition'
  import { search } from '../../stores/search'
  import Input from './Input.svelte'
  import Results from './Results.svelte'

  export let params = {}
  let value

  // subscribing to the location store as the params object isn't updated in time when updating the search manually
  const unsubscribe = location.subscribe((route) => {
    const letters = route.substring(route.lastIndexOf('/') + 1) || params.letters
    const routeParts = (route.match(/\//g) || []).length

    if (letters && routeParts > 1) {
      value = letters.replace('%2F', '/')
    } else {
      value = ''
    }
    search.execute(value)
  })

  onDestroy(unsubscribe)
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

  <Input bind:value on:submit={() => push(`/search/${value}`)} on:click={() => push('/search')} />
  {#await $search}
    <p>Searching...</p>
  {:then data}
    {#if data}
      <Results {data} />
    {/if}
  {:catch error}
    <p>Error, try again - {error}</p>
  {/await}

</div>
