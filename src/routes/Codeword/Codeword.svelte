<script>
  import { onMount } from 'svelte'
  import { fade, scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
  import { newGame, game, solved } from '../../stores/codeword'
  import Grid from './Grid.svelte'
  import Keyboard from './Keyboard.svelte'

  onMount(() => {
    newGame()
  })
</script>

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

<div in:fade={{ duration: 500 }} class="page">
  {#if $game.letterGrid}
    <Grid />
    {#if $solved}
      <div in:scale={{ duration: 500, easing: elasticOut }} class="completed">
        <h1>Well Done!</h1>
        <p>
          <a href="#/game" on:click={() => location.reload()}>Try another</a>
        </p>
      </div>
    {:else}
      <Keyboard />
    {/if}
  {:else}
    <p>Brute force attacking the problem...</p>
  {/if}
</div>
