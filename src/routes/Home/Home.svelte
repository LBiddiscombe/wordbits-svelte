<script>
  import { fade } from 'svelte/transition'
  import { push } from 'svelte-spa-router'
  import Icon from 'svelte-awesome'
  import { faSearch, faTh } from '@fortawesome/free-solid-svg-icons'
  import { generateHslColors } from '../../utils'
  import Input from '../Search/Input.svelte'
  import App from '../../App.svelte'

  let value = ''
  let wordsearch = 'plotliveoneswent'

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
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    min-height: 8rem;
    width: calc(100% - 1rem);
    max-width: 640px;
    border-radius: 1rem;
    margin: 0.5rem;
    background-color: hsl(var(--bg-color), 0.5);
    color: var(--primary-dark);
    font-size: 2rem;
    font-weight: 600;
  }

  .card .contents {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .card .wordsearch {
    margin-right: 1rem;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(4, 1rem);
    grid-template-rows: repeat(4, 1rem);
    place-items: center;
    color: rgba(var(--color-base), 0.5);
  }

  .card .image {
    margin-right: 1rem;
    color: rgba(var(--color-base), 0.5);
  }

  .soon {
    position: absolute;
    font-size: 0.75rem;
    right: 1rem;
    top: 1rem;
    background-color: hsl(var(--bg-color), 1);
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  <Input bind:value on:submit={() => push(`/search/${value}`)} on:click={() => push('/search')} />

  <p>Jump straight in with your search above or try out our other features</p>

  <a href="#/search" class="card" style="--bg-color: {cardColors[0]}">
    <div class="contents">
      <div class="image">
        <Icon data={faSearch} scale="4" class="icon" />
      </div>
      Search
    </div>
  </a>

  <a href="#/game" class="card" style="--bg-color: {cardColors[1]}">
    <div class="contents">
      <div class="wordsearch">
        {#each [...wordsearch] as letter}
          <span>{letter}</span>
        {/each}
      </div>
      Wordsearch
    </div>
  </a>

  <a href="#/" class="card" style="--bg-color: {cardColors[2]}">
    <div class="contents">
      <div class="image">
        <Icon data={faTh} scale="4" class="icon" />
      </div>
      Codewords
    </div>
    <span class="soon">Coming Soon!</span>
  </a>

</div>
