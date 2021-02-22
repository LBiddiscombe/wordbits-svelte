<script>
  import { guessArray, resultArray } from '../../stores/dingbats'
  import { findMiddlestSpace } from '../../utils'

  $: splitLineChar = findMiddlestSpace($resultArray)
</script>

<div class="answer-bar">
  {#each $resultArray as result, i}
    {#if ['1', '2'].includes(result)}
      <span class:correct={result === '1'} class:incorrect={result === '2'}>{$guessArray[i]}</span>
    {:else if result === ' '}
      {#if i === splitLineChar}
        <div class="break" />
      {:else}
        <span>&nbsp;</span>
      {/if}
    {:else}
      <span>{'_'}</span>
    {/if}
  {/each}
</div>

<style>
  .answer-bar {
    font-family: monospace;
    letter-spacing: 0.25rem;
    margin: 0 0.25rem 0 0;
    font-size: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }

  .correct {
    color: green;
  }

  .incorrect {
    color: red;
    font-weight: bold;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }
</style>
