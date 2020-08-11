<script>
  import { selected } from '../../stores/game'
  export let data
  export let size = 48
  export let highlight = false
</script>

<style>
  .square {
    position: relative;
    width: var(--size);
    height: var(--size);
    border: 1px solid #ccc;
    overflow: hidden;
    display: flex;
  }

  .letter {
    flex: 1;
    text-align: center;
    font-size: calc(var(--size) * 0.7);
    font-weight: 900;
  }

  .highlight {
    background-color: lightgreen;
  }

  .id {
    padding: calc(var(--size) * 0.1);
    margin-top: calc(var(--size) * -0.05);
  }
</style>

<div class="square" class:highlight style="--size:{size}px" on:mouseenter={() => selected.set(data.letter)}>
  {#if highlight}
    <span class="letter">{data.letter}</span>
  {:else}
    <span class="id">{data.code}</span>
  {/if}
</div>
