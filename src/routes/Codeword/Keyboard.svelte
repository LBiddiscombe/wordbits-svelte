<script>
  import { selectKey } from '../../stores/codeword'
  let keyboard = [[...'QWERTYUIOP'], [...'ASDFGHJKL'], [...'ZXCVBNM', 'DEL']]
</script>

<style>
  .keyboard {
    margin: 0 auto;
    margin-top: 3rem;
    width: 100%;
    max-width: 414px;
  }

  @media (max-width: 600px) {
    .keyboard {
      position: fixed;
      bottom: 1rem;
    }
  }

  .row {
    display: flex;
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
  }

  .key {
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0;
    margin-right: 0.25rem;
    background-color: var(--color-background);
    color: var(--color-foreground);
    border-radius: 0.25rem;
    font-weight: 600;
  }
</style>

<div class="keyboard">
  {#each keyboard as row}
    <div class="row">
      {#each row as key}
        <button class="key" value={key} on:click={selectKey}>{key}</button>
      {/each}
    </div>
  {/each}
</div>
