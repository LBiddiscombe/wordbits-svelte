<script>
  import { fade, scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
  import Keyboard from './Keyboard.svelte'
  import Guess from './Guess.svelte'
  import { currentLevel, solved, setAnswer } from '../../stores/dingbats'

  $: {
    setAnswer($currentLevel.answer)
  }
</script>

<div in:fade={{ duration: 500 }} class="page">
  {#if currentLevel}
    <svelte:component this={$currentLevel.template} title={$currentLevel.title} dingbat={$currentLevel.dingbat} />
    <Guess />
    {#if $solved}
      <div in:scale={{ duration: 500, easing: elasticOut }} class="completed">
        <h1>Well Done!</h1>
        <p>
          <a href="#/dingbats" on:click={() => location.reload()}>Try another</a>
        </p>
      </div>
    {:else}
      <Keyboard />
    {/if}
  {/if}

</div>

<style>
  .page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    touch-action: manipulation;
  }

  .completed {
    margin-top: 1rem;
    z-index: 3;
    width: 100vw;
    max-width: 500px;
    background-color: var(--color-foreground);
    color: var(--color-background);
    text-align: center;
  }

  a {
    color: var(--color-background);
    text-decoration: underline;
  }
</style>
