<script lang="ts">
  import Icon from 'svelte-awesome'
  import { faHome, faSearch, faTrophy, faEraser, faAdjust } from '@fortawesome/free-solid-svg-icons'
  import { getLocalStorageSize } from '../utils'

  export let open: boolean = false

  let used

  $: if (open) used = getLocalStorageSize()

  function toggleTheme() {
    const currentTheme = JSON.parse(localStorage.getItem('theme'))
    const theme = currentTheme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', JSON.stringify(theme))
    document.body.setAttribute('data-theme', theme)
  }

  function clearCache() {
    sessionStorage.clear()
    localStorage.clear()
    used = getLocalStorageSize()
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
    color: var(--color-foreground);
    background-color: var(--color-background);
    border-top: 1px solid rgba(var(--color-base), 0.25);
    z-index: 99;
  }

  .open {
    transform: translateX(0);
  }

  .item {
    display: flex;
    align-items: center;
    color: var(--color-foreground);
    text-decoration: none;
    padding: 1rem;
    padding-right: 0;
    border-bottom: 1px solid rgba(var(--color-base), 0.1);
  }

  .item:hover {
    background-color: rgba(var(--color-base), 0.3);
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
    color: var(--color-foreground);
    text-decoration: none;
    padding: 1rem;
    padding-right: 0;
    border: 0;
    background-color: transparent;
    color: var(--color-foreground);
    border-bottom: 1px solid rgba(var(--color-base), 0.1);
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
  <button on:click={clearCache}>
    <Icon data={faEraser} scale="2" class="icon" />
    <span>Clear Cache ({used})</span>
  </button>
  <button on:click={toggleTheme}>
    <Icon data={faAdjust} scale="2" class="icon" />
    <span>Toggle Theme</span>
  </button>
</aside>
