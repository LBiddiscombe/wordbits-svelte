import Home from './Home.svelte'
import Game from './Game/Game.svelte'
import Word from './Word.svelte'

const routes = {
  '/': Home,
  '/game': Game,
  '/word/:word': Word,
}

export default routes
