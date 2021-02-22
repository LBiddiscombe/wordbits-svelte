<script>
  export let title = 'Guess the thing'
  export let dingbat = ''
</script>

<div class="wrapper">
  <div class="title">{title}</div>
  <div class="column">
    <div class="row">
      {@html dingbat}
    </div>
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

  .column {
    display: grid;
    grid-template: 1fr;
    place-items: center;
    border: 1px solid darkgray;
    padding: 1rem;
    min-width: 300px;
  }

  .row {
    display: grid;
    font-size: 2rem;
    place-items: center;
    padding: 1rem;
  }

  :global(.dingbat-tight) {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
  }
</style>
