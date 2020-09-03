import Home from './Home/Home.svelte'
import Wordsearch from './Wordsearch/Wordsearch.svelte'
import Word from './Word.svelte'
import Codeword from './Codeword/Codeword.svelte'
import Search from './Search/Search.svelte'

const routes = {
  '/': Home,
  '/wordsearch': Wordsearch,
  '/codeword': Codeword,
  '/search/:letters?': Search,
  '/word/:word': Word,
}

export default routes
