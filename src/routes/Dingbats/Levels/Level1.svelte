<script>
  export const answer = 'potatoes'
  let hint = 'thing'
</script>

<div class="wrapper">
  <span class="hint">Guess the {hint}</span>
  <div class="placeholder">
    <h1>PotatOOOOOOOO</h1>
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    place-items: center;
    padding: 2rem;
  }

  .hint {
    margin-bottom: 0.5rem;
  }

  .placeholder {
    display: grid;
    place-items: center;
    border: 1px solid darkgray;
    padding: 1rem;
  }
</style>
