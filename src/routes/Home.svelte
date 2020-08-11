<script>
  import { fade } from 'svelte/transition'
</script>

<style>
  .page {
    display: grid;
    height: 100%;
    place-items: center;
    border-radius: 0.5rem;
  }

  h1 {
    text-align: center;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>Home</h1>
</div>
