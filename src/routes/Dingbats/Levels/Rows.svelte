<script>
  export let title = 'Guess the thing'
  export let dingbat = ''
</script>

<div class="dingbat">
  {@html dingbat}
</div>

<style>
  .dingbat {
    display: grid;
    font-size: 2rem;
    place-items: center;
    padding: 1rem;
    border: 1px solid darkgray;
    min-width: 300px;
  }

  :global(.dingbat-tight) {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
  }

  :global(.dingbat-start) {
    justify-self: start;
  }

  :global(.dingbat-end) {
    justify-self: end;
  }

  :global(.dingbat-up) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 5rem;
  }

  :global(.dingbat-down) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 5rem;
  }
</style>
