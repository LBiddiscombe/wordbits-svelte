<script>
  import { fade } from 'svelte/transition'
</script>

<style>
  .page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
  }

  h1 {
    display: flex;
    align-items: center;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>Game</h1>
</div>
