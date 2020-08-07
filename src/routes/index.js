import Home from './Home.svelte'
import Search from './Search.svelte'
import Game from './Game.svelte'
import Word from './Word.svelte'

const routes = {
  '/': Home,
  '/search': Search,
  '/game': Game,
  '/word/:word': Word,
}

export default routes
