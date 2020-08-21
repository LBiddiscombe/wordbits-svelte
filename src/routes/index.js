import Home from './Home/Home.svelte'
import Game from './Game/Game.svelte'
import Word from './Word.svelte'
import Search from './Search/Search.svelte'

const routes = {
  '/': Home,
  '/game': Game,
  '/search/:letters?': Search,
  '/word/:word': Word,
}

export default routes
