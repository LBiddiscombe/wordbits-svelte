<script>
  import { fly } from 'svelte/transition'
  import WordList from './WordList.svelte'
  import { groupBy } from '../../utils'

  export let data = {}

  const { error, results, resultText } = data
  let groups = groupBy(results, 'length')
</script>

<style>
  p {
    margin-top: 0;
  }

  .wrapper {
    width: calc(100% - 2rem);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32ch, 1fr));
    grid-gap: 1rem;
  }

  .wordlist {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background-color: var(--primary-light);
    border: 1px solid var(--separator-light);
    border-radius: 0.5rem;
    padding-bottom: 1rem;
  }
</style>

<p>{resultText}</p>
<div class="wrapper">
  {#if groups}
    {#each Object.entries(groups).reverse() as group, i}
      <div class="wordlist" in:fly={{ y: -20, duration: 500, delay: i * 50 }}>
        <WordList title={`${group[0]} Letter Words (${group[1].length})`} words={group[1]} />
      </div>
    {/each}
  {/if}
</div>
