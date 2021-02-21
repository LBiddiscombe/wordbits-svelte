<script>
  import { fade, scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
  import Keyboard from './Keyboard.svelte'
  import Guess from './Guess.svelte'
  import { currentLevel, solved } from '../../stores/dingbats'

  //#region Levels
  import Level1 from './Levels/Level1.svelte'
  import Level2 from './Levels/Level2.svelte'
  //#endregion

  let level

  $: {
    switch ($currentLevel) {
      case '1':
        level = Level1
        break
      case '2':
        level = Level2
        break
      default:
        level = Level1
    }
    console.log($currentLevel)
  }
</script>

<div in:fade={{ duration: 500 }} class="page">
  <svelte:component this={level} />
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
