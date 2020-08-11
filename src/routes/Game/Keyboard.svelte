<script>
  import { keyCodes } from '../../stores/game'
  import Tile from './Tile.svelte'

  const keyboard = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']
</script>

<style>
  .row {
    display: flex;
  }
  .row2 {
    margin-left: 1.5rem;
  }
  .row3 {
    margin-left: 3rem;
  }
  button {
    width: 100px;
    height: 50px;
  }
</style>

<div class="keyboard">
  <div class="row row1">
    {#each keyboard[0] as key}
      <Tile data={$keyCodes.get(key)} highlight={true} />
    {/each}
  </div>
  <div class="row row2">
    {#each keyboard[1] as key}
      <Tile data={$keyCodes.get(key)} highlight={true} />
    {/each}
  </div>
  <div class="row row3">
    {#each keyboard[2] as key}
      <Tile data={$keyCodes.get(key)} highlight={true} />
    {/each}
    <button>Del</button>
  </div>
</div>
