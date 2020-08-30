<script>
  import { fade } from 'svelte/transition'
  import { generateHslColors } from '../../utils'

  let examples = [
    { link: 'listen', description: 'Anagrams using any of the letters', letters: 'listen', count: 53 },
    { link: 'listen%2F', description: 'Anagrams using all the letters', letters: 'listen/', count: 5 },
    { link: 'ha.e', description: 'Match a single missing character', letters: 'ha.e', count: 6 },
    { link: 'h3e', description: 'Multiple missing characters', letters: 'h3e', count: 10 },
    { link: 'h.g2e', description: 'Match a pattern', letters: 'h.g2e', count: 1 },
    { link: 'pref*', description: 'Words starting with', letters: 'pref*', count: 28 },
  ]

  let exampleColors = generateHslColors(70, 80, examples.length)
</script>

<style>
  .page {
    height: 100%;
    width: 100%;
    padding: 0;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  a {
    color: var(--primary-dark);
    background-color: hsl(var(--bg-color), 0.25);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  a p {
    margin: 0;
    margin-right: 1rem;
  }

  .badge {
    background-color: hsl(var(--bg-color), 0.5);
    color: var(--primary-dark);
    border-radius: 100%;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    font-weight: bold;
    margin-left: auto;
  }
</style>

<div in:fade={{ duration: 500 }} class="page">

  <div class="container">

    <p>Try some of these searches</p>

    {#each examples as example, i}
      <a href="#/search/{example.link}" style="--bg-color:{exampleColors[i]}">
        <div>
          <b>{example.letters}</b>
          <p>{example.description}</p>
        </div>
        <div class="badge">{example.count}</div>
      </a>
    {/each}
  </div>

</div>
