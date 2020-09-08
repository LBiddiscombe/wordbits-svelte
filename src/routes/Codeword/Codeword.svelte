<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { newGame, game } from '../../stores/codeword'
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
</style>

<div in:fade={{ duration: 500 }} class="page">
  {#if $game.letterGrid}
    <Grid />
    <Keyboard />
  {:else}
    <p>Brute force attacking the problem...</p>
  {/if}
</div>
