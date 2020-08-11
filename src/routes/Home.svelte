<script>
  import { fade } from 'svelte/transition'
</script>

<style>
  .page {
    display: grid;
    place-items: center;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>Home</h1>
</div>
