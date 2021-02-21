<script>
  import { answer, guessArray, guessIndex, resultArray } from '../../../stores/dingbats'
  const dingbat = 'potatoes'
  answer.set(dingbat)
  guessIndex.set(0)
  guessArray.set([...dingbat].map((letter) => (letter === ' ' ? ' ' : '_')))
  resultArray.set([...dingbat].map((letter) => (letter === ' ' ? ' ' : '0')))
</script>

<div class="wrapper">
  <span class="hint">Guess the thing</span>
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
