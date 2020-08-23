<script>
  import { fade } from 'svelte/transition'
  import Board from './Board.svelte'
  import { createGame } from '../../api'

  let promise = createGame()
</script>

<style>
  .page {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  {#await promise}
    <p>Initialising...</p>
  {:then data}
    <Board {data} />
  {/await}

</div>
