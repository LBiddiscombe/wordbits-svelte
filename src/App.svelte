<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
</script>

<style>
  nav {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>

<nav>
  <a href="/#">Home</a>
  <a href="#/game">Game</a>
  <a href="#/search">Search</a>
</nav>

<Router {routes} />
