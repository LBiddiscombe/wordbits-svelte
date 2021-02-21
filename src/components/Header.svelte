<script lang="ts">
  import Hamburger from './Hamburger.svelte'

  export let checked: boolean = false
</script>

<header>
  <a href="/#">
    <h1 class="title">Wordbits</h1>
  </a>
  <nav>
    <a href="/#">Home</a>
    |
    <a href="#/search">Search</a>
    |
    <a href="#/wordsearch">Wordsearch</a>
    |
    <a href="#/codeword">Codeword</a>
    |
    <a href="#/dingbats">Dingbats</a>
  </nav>
  <div class="menu-btn">
    <Hamburger bind:checked />
  </div>
</header>

<style>
  header {
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3rem;
    padding: 1rem;
    padding-bottom: 3rem;
  }

  nav {
    display: none;
    grid-auto-flow: column;
    gap: 0.5rem;
    font-size: 1.25rem;
  }

  a {
    color: var(--color-foreground);
  }

  @media screen and (min-width: 800px) {
    nav {
      display: grid;
    }
    .menu-btn {
      display: none;
    }
  }

  .title {
    margin: 0;
  }
</style>
