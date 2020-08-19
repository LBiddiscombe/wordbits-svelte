<script lang="ts">
  import Logo from './Logo.svelte'
  import Hamburger from './Hamburger.svelte'

  export let checked: boolean = false
</script>

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
    color: var(--primary-dark);
  }

  @media screen and (min-width: 800px) {
    nav {
      display: grid;
    }
    .menu-btn {
      display: none;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 2.5rem;
  }
</style>

<header>
  <a href="/#">
    <span>Wordbits</span>
  </a>
  <nav>
    <a href="/#">Home</a>
    |
    <a href="#/game">Game</a>
  </nav>
  <div class="menu-btn">
    <Hamburger bind:checked />
  </div>
</header>
