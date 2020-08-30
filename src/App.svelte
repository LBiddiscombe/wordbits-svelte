<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from './components/Header.svelte'
  import Aside from './components/Aside.svelte'

  let asideOpen = false

  function onNavigate() {
    asideOpen = false
  }

  const theme = JSON.parse(localStorage.getItem('theme'))
  if (theme) {
    document.body.setAttribute('data-theme', theme)
  } else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.setAttribute('data-theme', 'dark')
    }
  }
</script>

<style>
  main {
    width: calc(100vw - 1rem);
    max-width: 1200px;
    border-radius: 0.25rem;
    min-height: calc(100vh - 6.25rem);
    display: flex;
    flex-direction: column;
    margin: -2rem auto 1rem auto;
    z-index: 2;
    color: var(--primary-dark);
  }
</style>

<Header bind:checked={asideOpen} />
<Aside open={asideOpen} on:click={onNavigate} />
<main>
  <Router {routes} />
</main>
