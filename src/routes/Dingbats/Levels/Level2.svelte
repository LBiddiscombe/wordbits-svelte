<script>
  import { answer, guessArray, guessIndex, resultArray } from '../../../stores/dingbats'
  const dingbat = 'what goes up must come down'
  answer.set(dingbat)
  guessIndex.set(0)
  guessArray.set([...dingbat].map((letter) => (letter === ' ' ? ' ' : '_')))
  resultArray.set([...dingbat].map((letter) => (letter === ' ' ? ' ' : '0')))
</script>

<div class="wrapper">
  <span class="hint">Guess the phrase</span>
  <div class="placeholder">
    <h1 class="up">WHAT</h1>
    <h1 class="down">MUST</h1>
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
    grid-template-columns: 1fr 1fr;
    border: 1px solid darkgray;
    padding: 1rem;
  }

  .up {
    transform: rotate(-90deg);
  }
  .down {
    transform: rotate(90deg);
  }
</style>
