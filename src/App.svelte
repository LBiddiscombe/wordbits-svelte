<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './components/Header.svelte'
  import Aside from './components/Aside.svelte'

  let asideOpen = false

  function onNavigate() {
    asideOpen = false
  }
</script>

<style>
  main {
    width: calc(100vw - 2rem);
    max-width: 1200px;
    border-radius: 0.25rem;
    min-height: calc(100vh - 6.25rem);
    display: flex;
    flex-direction: column;
    background-color: var(--text-light);
    margin: -2rem auto 1rem auto;
    z-index: 2;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
</style>

<Header bind:checked={asideOpen} />
<Aside open={asideOpen} on:click={onNavigate} />
<main>
  <Router {routes} />
</main>
