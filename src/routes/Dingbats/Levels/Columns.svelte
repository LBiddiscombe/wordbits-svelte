<script>
  export let title = 'Guess the thing'
  export let dingbat = ''
</script>

<div class="wrapper">
  <div class="title">{title}</div>
  <div class="row">
    {@html dingbat}
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    place-items: center;
    padding: 2rem;
  }

  .title {
    margin-bottom: 0.5rem;
  }

  .row {
    display: flex;
    border: 1px solid darkgray;
    font-size: 2rem;
    padding: 1rem;
    justify-content: space-around;
    min-width: 300px;
  }

  :global(.dingbat-rotate-up) {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
  :global(.dingbat-rotate-down) {
    writing-mode: vertical-rl;
  }
</style>
