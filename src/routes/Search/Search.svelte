<script>
  import { onDestroy } from 'svelte'
  import { push, location } from 'svelte-spa-router'
  import { fade } from 'svelte/transition'
  import { search } from '../../stores/search'
  import { generateHslColors } from '../../utils'
  import Input from './Input.svelte'
  import Results from './Results.svelte'

  export let params = {}
  let value

  let examples = [
    { link: 'listen', description: 'Anagrams using any of the letters', letters: 'listen', count: 53 },
    { link: 'listen%2F', description: 'Anagrams using all the letters', letters: 'listen/', count: 5 },
    { link: 'ha.e', description: 'Match a single missing character', letters: 'ha.e', count: 6 },
    { link: 'h3e', description: 'Multiple missing characters', letters: 'h3e', count: 10 },
    { link: 'h.g2e', description: 'Match a pattern', letters: 'h.g2e', count: 1 },
    { link: 'pref*', description: 'Words starting with', letters: 'pref*', count: 28 },
  ]

  let exampleColors = generateHslColors(100, 60, examples.length)

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

  a {
    color: var(--color-foreground);
    background-color: hsl(var(--bg-color), 0.25);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  a p {
    margin: 0;
    margin-right: 1rem;
  }

  .badge {
    background-color: hsl(var(--bg-color), 0.5);
    color: var(--color-foreground);
    border-radius: 100%;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    font-weight: bold;
    margin-left: auto;
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

  {#if !params.letters}
    Here's how it works...
    <p>
      {#each examples as example, i}
        <a href="#/search/{example.link}" style="--bg-color:{exampleColors[i]}">
          <div>
            <b>{example.letters}</b>
            <p>{example.description}</p>
          </div>
          <div class="badge">{example.count}</div>
        </a>
      {/each}
    </p>
  {/if}

</div>
