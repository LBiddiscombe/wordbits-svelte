<script>
  import { selectKey, solution, startingSolution } from '../../stores/codeword'
  let keyboard = [[...'QWERTYUIOP'], [...'ASDFGHJKL'], [...'ZXCVBNM', 'DEL']]
  let solved = []
  $: {
    solved = $solution.filter((item) => item)
  }
</script>

<style>
  .keyboard {
    margin: 0 auto;
    margin-top: 3rem;
    width: 100vmin;
    max-width: 500px;
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }

  @media (max-width: 600px) {
    .keyboard {
      position: fixed;
      bottom: 1rem;
    }
  }

  .row {
    display: flex;
    min-height: 3rem;
    margin-top: 0.25rem;
    justify-content: flex-start;
  }

  .row:nth-child(2) {
    margin-left: 0.75rem;
    width: calc(100% - 0.75rem);
  }

  .row:nth-child(3) {
    margin-left: 1.5rem;
    width: calc(100% - 1.5rem);
  }

  .row:nth-child(3) .key:last-child {
    width: 3rem;
    background-color: var(--color-error);
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
    font-size: 1.25rem;
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
</style>

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
