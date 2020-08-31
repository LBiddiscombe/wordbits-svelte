<script>
  import { fade } from 'svelte/transition'
  import { push } from 'svelte-spa-router'
  import { generateHslColors } from '../../utils'
  import Input from '../Search/Input.svelte'

  let value = ''

  const cardColors = generateHslColors(70, 80, 3)
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0;
    padding-bottom: 1rem;
    border-radius: 0.5rem;
  }

  p {
    text-align: center;
  }

  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 8rem;
    width: calc(100% - 1rem);
    max-width: 640px;
    border-radius: 0.5rem;
    margin: 0.5rem;
    background-color: hsl(var(--bg-color), 0.5);
    color: var(--primary-dark);
    font-size: 2rem;
    font-weight: 600;
  }

  .soon {
    position: absolute;
    font-size: 0.75rem;
    right: 1rem;
    top: 1rem;
    background-color: var(--primary-light);
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  <Input bind:value on:submit={() => push(`/search/${value}`)} on:click={() => push('/search')} />

  <p>Jump straight in with your search above or try out our other features</p>

  <a href="#/search" class="card" style="--bg-color: {cardColors[0]}">Search</a>

  <a href="#/game" class="card" style="--bg-color: {cardColors[1]}">Wordsearch</a>

  <a href="#/" class="card" style="--bg-color: {cardColors[2]}">
    Codewords
    <span class="soon">Coming Soon!</span>
  </a>

</div>
