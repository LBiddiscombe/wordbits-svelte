<script lang="ts">
  import Icon from 'svelte-awesome'
  import { faHome, faSearch, faTrophy, faEraser, faAdjust } from '@fortawesome/free-solid-svg-icons'

  export let open: boolean = false

  function toggleTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'))
    const theme = currentTheme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', JSON.stringify(theme))
    document.body.setAttribute('data-theme', theme)
  }
</script>

<style>
  aside {
    position: fixed;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
    width: var(--aside-width);
    display: flex;
    flex-direction: column;
    transform: translateX(calc(var(--aside-width) * -1.1));
    transition: all 0.2s;
    color: var(--primary-dark);
    background-color: var(--primary-light);
    border-top: 1px solid var(--separator);
    z-index: 99;
  }

  .open {
    transform: translateX(0);
  }

  .item {
    display: flex;
    align-items: center;
    color: var(--brand-dark);
    text-decoration: none;
    padding: 1rem;
    padding-right: 0;
    border-bottom: 1px solid var(--separator-light);
  }

  .item:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.3s;
    transition-property: background-color;
  }

  .item span {
    padding-left: 1rem;
    justify-self: left;
    font-size: 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    color: var(--brand-dark);
    text-decoration: none;
    padding: 1rem;
    padding-right: 0;
    border: 0;
    background-color: transparent;
    color: var(--primary-dark);
    padding: 8;
    border-bottom: 1px solid var(--separator-light);
  }

  button span {
    padding-left: 1rem;
    justify-self: left;
    font-size: 1.25rem;
  }
</style>

<aside class:open>
  <a href="#/" class="item" on:click>
    <Icon data={faHome} scale="2" class="icon" />
    <span>Home</span>
  </a>
  <a href="#/search" class="item" on:click>
    <Icon data={faSearch} scale="2" class="icon" />
    <span>Search</span>
  </a>
  <a href="#/game" class="item" on:click>
    <Icon data={faTrophy} scale="2" class="icon" />
    <span>Game</span>
  </a>
  <p />
  <button on:click={() => sessionStorage.clear()}>
    <Icon data={faEraser} scale="2" class="icon" />
    <span>Clear Cache</span>
  </button>
  <button on:click={toggleTheme}>
    <Icon data={faAdjust} scale="2" class="icon" />
    <span>Toggle Theme</span>
  </button>
</aside>
