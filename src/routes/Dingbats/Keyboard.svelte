<script>
  import { handleKey } from '../../stores/dingbats'
  let keyboard = [[...'QWERTYUIOP'], [...'ASDFGHJKL'], [...'ZXCVBNM', 'DEL']]
</script>

<div class="keyboard-wrapper">
  <div class="keyboard">
    {#each keyboard as row}
      <div class="row">
        {#each row as key}
          <button class="key" on:click={handleKey} value={key}>{key}</button>
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
    user-select: none; /* supported by Chrome and Opera */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none;
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
</style>
