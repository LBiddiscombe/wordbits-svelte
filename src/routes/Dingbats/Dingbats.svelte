<script>
  import { fade } from 'svelte/transition'
  import Keyboard from './Keyboard.svelte'
  import Level from './Levels/Level2.svelte'

  let level = 1
  let answer
</script>

<div in:fade={{ duration: 500 }} class="page">
  <Level bind:answer />
  <Keyboard {answer} />
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
</style>
