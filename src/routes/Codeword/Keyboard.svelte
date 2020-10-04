<script>
  import { selectKey, showErrors, solution, startingSolution } from '../../stores/codeword'
  let keyboard = [[...'QWERTYUIOP'], [...'ASDFGHJKL'], [...'ZXCVBNM', 'DEL']]
  let solved = []
  $: {
    solved = $solution.filter((item) => item)
  }

  function handleReset() {
    if (confirm('Are you sure you want to restart this level?')) {
      solution.reset()
    }
  }
</script>

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

  .solved {
    background-color: rgba(var(--color-base), 0.15);
    color: var(--color-foreground);
    text-decoration: line-through;
  }

  button:disabled {
    background-color: transparent;
    color: rgba(var(--color-base), 0.25);
    text-decoration: line-through;
    border: none;
  }

  .btn-bar {
    margin: 0 0.25rem 0 0;
    display: flex;
    justify-content: space-between;
    height: 1.5rem;
  }

  .btn-bar button {
    padding: 0 1rem;
    font-size: 0.75rem;
  }

  .reset {
    background-color: var(--color-error);
    color: white;
    border: none;
  }
</style>

<div class="keyboard-wrapper">
  <div class="btn-bar">
    <button on:click={() => showErrors.set(true)}>Show Errors</button>
    <button class="reset" on:click={handleReset}>Reset</button>
  </div>
  <div class="keyboard">
    {#each keyboard as row}
      <div class="row">
        {#each row as key}
          <button
            disabled={$startingSolution.includes(key)}
            class="key"
            class:solved={solved.includes(key) && !$startingSolution.includes(key)}
            value={key}
            on:click={selectKey}>
            {key}
          </button>
        {/each}
      </div>
    {/each}
  </div>
</div>
