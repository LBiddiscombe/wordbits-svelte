<script>
  export let answer = ''
  let keyboard = [[...'QWERTYUIOP'], [...'ASDFGHJKL'], [...'ZXCVBNM', 'DEL']]
  let answerArray = [],
    guessArray = [],
    guessIndex = 0

  $: {
    answerArray = [...answer.toUpperCase()]
    guessArray = answerArray.map((letter) => (letter === ' ' ? '&nbsp;' : '_'))
  }

  function selectKey(e) {
    let key = e.target.value
    if (key === 'DEL') {
      const charsToRemove = guessArray[guessIndex - 1] === '&nbsp;' ? 2 : 1
      guessIndex = Math.max(guessIndex - charsToRemove, 0)
      guessArray[guessIndex] = '_'
    } else {
      if (guessIndex < guessArray.length) {
        guessArray[guessIndex] = key
        guessIndex = Math.min(guessIndex + 1, guessArray.length)
      }
      if (guessArray[guessIndex] === '&nbsp;') guessIndex++
    }
  }
</script>

<div class="keyboard-wrapper">
  <div class="answer-bar">
    {#each guessArray as letter, i}
      <span
        class:correct={letter === answerArray[i]}
        class:incorrect={letter !== '_' && letter !== ' ' && letter !== answerArray[i]}
      >
        {@html letter}
      </span>
    {/each}
  </div>
  <div class="keyboard">
    {#each keyboard as row}
      <div class="row">
        {#each row as key}
          <button class="key" on:click={selectKey} value={key}>{key}</button>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .keyboard-wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(--color-background);
    width: 100vw;
    max-width: 500px;
  }

  .keyboard {
    margin: 0 auto;
    width: 100vmin;
    max-width: 500px;
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }

  @media (max-width: 600px) {
    .keyboard-wrapper {
      position: fixed;
      bottom: 0.5rem;
    }
  }

  .row {
    display: flex;
    margin-top: 0.25rem;
    justify-content: flex-start;
  }

  .row:nth-child(3) .key:last-child {
    width: 4rem;
    color: var(--color-error);
  }

  .key {
    min-height: 3rem;
    box-sizing: border-box;
    flex: 1;
    display: grid;
    place-items: center;
    margin: 0;
    margin-right: 0.25rem;
    background-color: var(--color-foreground);
    color: var(--color-background);
    border-radius: 0.25rem;
    font-weight: 600;
    border: none;
    font-size: 1rem;
  }

  button:disabled {
    background-color: transparent;
    color: rgba(var(--color-base), 0.25);
    text-decoration: line-through;
    border: none;
  }

  .answer-bar {
    font-family: monospace;
    letter-spacing: 0.25rem;
    margin: 0 0.25rem 0 0;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .correct {
    color: green;
  }

  .incorrect {
    color: red;
    font-weight: bold;
  }
</style>
