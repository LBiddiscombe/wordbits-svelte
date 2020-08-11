<script>
  import { selected, keyCodes } from '../../stores/game'
  import { fade } from 'svelte/transition'
  import Tile from './Tile.svelte'
  import Keyboard from './Keyboard.svelte'

  let letters =
    'FZEJUMNGTPAAHWOTPBRKQELJVLZENVTVAMNRPDXMSVYZUZTMJIRBNLIWPDDVFEJBGGUMLXGRGQCNTTQJBPNTYSHHBXXGJTFLFCMSOBQJFFJHQOFOWZWRZWMBRTBVFFHNMPKDVOLQUGQLGDVW'

  let board = [...letters].map((letter, id) => ({ id, tile: $keyCodes.get(letter) }))
</script>

<style>
  .page {
    display: grid;
    place-items: center;
  }

  h1 {
    display: flex;
    align-items: center;
  }

  div {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">
  <h1>Wordbits</h1>
  <Keyboard />
  <div>
    {#each board as item (item.id)}
      <Tile data={item.tile} highlight={$selected === item.tile.letter} />
    {/each}
  </div>
</div>
