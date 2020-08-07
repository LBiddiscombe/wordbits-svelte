<script>
  import Router from 'svelte-spa-router'
  import routes from './routes'
</script>

<a href="/">Home</a>
<a href="#/game">Game</a>
<a href="#/search">Search</a>

<Router {routes} />
