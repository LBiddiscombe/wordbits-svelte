<script>
  import { fly } from 'svelte/transition'
  import WordList from './WordList.svelte'
  import { groupMapByLen, generateHslaColors } from '../../utils'
  import App from '../../App.svelte'

  export let data = {}

  const { error, results, resultText } = data
  let groups = groupMapByLen(results)
  let groupColor = generateHslaColors(70, 80, 0.25, groups.size)
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
    --bg-color: var(--primary-mid);
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    background-color: var(--bg-color);
    border-radius: 0.5rem;
    padding-bottom: 1rem;
  }
</style>

<p>{resultText}</p>
<div class="wrapper">
  {#if groups}
    {#each [...groups] as [len, words], i}
      <div class="wordlist" style="--bg-color:{groupColor[i]}" in:fly={{ y: -20, duration: 500, delay: i * 50 }}>
        <WordList title={`${len} Letter Words (${words.length})`} {words} />
      </div>
    {/each}
  {/if}
</div>
