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
    background-color: var(--brand-dark);
    min-height: 3rem;
    padding: 1rem;
    padding-bottom: 3rem;
    box-shadow: 0px 0.5rem 0px 0px var(--brand-accent);
    background-image: linear-gradient(
        216deg,
        rgba(77, 77, 77, 0.05) 0%,
        rgba(77, 77, 77, 0.05) 25%,
        rgba(42, 42, 42, 0.05) 25%,
        rgba(42, 42, 42, 0.05) 38%,
        rgba(223, 223, 223, 0.05) 38%,
        rgba(223, 223, 223, 0.05) 75%,
        rgba(36, 36, 36, 0.05) 75%,
        rgba(36, 36, 36, 0.05) 100%
      ),
      linear-gradient(
        44deg,
        rgba(128, 128, 128, 0.05) 0%,
        rgba(128, 128, 128, 0.05) 34%,
        rgba(212, 212, 212, 0.05) 34%,
        rgba(212, 212, 212, 0.05) 57%,
        rgba(25, 25, 25, 0.05) 57%,
        rgba(25, 25, 25, 0.05) 89%,
        rgba(135, 135, 135, 0.05) 89%,
        rgba(135, 135, 135, 0.05) 100%
      ),
      linear-gradient(
        241deg,
        rgba(55, 55, 55, 0.05) 0%,
        rgba(55, 55, 55, 0.05) 14%,
        rgba(209, 209, 209, 0.05) 14%,
        rgba(209, 209, 209, 0.05) 60%,
        rgba(245, 245, 245, 0.05) 60%,
        rgba(245, 245, 245, 0.05) 69%,
        rgba(164, 164, 164, 0.05) 69%,
        rgba(164, 164, 164, 0.05) 100%
      ),
      linear-gradient(
        249deg,
        rgba(248, 248, 248, 0.05) 0%,
        rgba(248, 248, 248, 0.05) 32%,
        rgba(148, 148, 148, 0.05) 32%,
        rgba(148, 148, 148, 0.05) 35%,
        rgba(202, 202, 202, 0.05) 35%,
        rgba(202, 202, 202, 0.05) 51%,
        rgba(181, 181, 181, 0.05) 51%,
        rgba(181, 181, 181, 0.05) 100%
      ),
      linear-gradient(92deg, rgb(20, 33, 61), rgb(20, 33, 61));
  }

  nav {
    display: none;
    grid-auto-flow: column;
    gap: 0.5rem;
    color: var(--brand-accent);
    font-size: 1.25rem;
  }

  a {
    color: var(--text-light);
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
    color: var(--brand-accent);
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
