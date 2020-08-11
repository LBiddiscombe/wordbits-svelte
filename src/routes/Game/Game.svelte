<script>
  import { fade } from 'svelte/transition'
</script>

<style>
  .page {
    height: 100%;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
  }

  h1 {
    display: flex;
    align-items: center;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>Game</h1>
</div>
