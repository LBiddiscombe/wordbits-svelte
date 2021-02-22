import Rows from './Rows.svelte'
import Columns from './Columns.svelte'

export const levels = [
  {
    title: 'Guess the phrase',
    answer: 'good looking',
    dingbat: '<span>G👀D</span>',
    template: Rows,
  },
  {
    title: 'Guess the Disney film',
    answer: 'dumbo',
    dingbat: '<div>🎪 🐘</div>',
    template: Rows,
  },
  {
    title: 'Guess the noun',
    answer: 'criminal',
    dingbat: '<span>A<b>CRIM</b>L</span>',
    template: Rows,
  },
  {
    title: 'Guess the film',
    answer: 'lord of the rings',
    dingbat: '<div>👑 👴🏻 💍💍</div>',
    template: Rows,
  },
  {
    title: 'Guess the thing',
    answer: 'potatoes',
    dingbat: '<div>PotatOOOOOOOO</div>',
    template: Rows,
  },
  {
    title: 'Guess the thing',
    answer: 'neon lights',
    dingbat: '<div>Knee</div><div>Lights Lights</div>',
    template: Rows,
  },
  {
    title: 'Guess the film',
    answer: 'back to the future',
    dingbat: '<div>🕚 ⬅️ 🚗 💨</div>',
    template: Rows,
  },
  {
    title: 'Guess the phrase',
    answer: 'what goes up must come down',
    dingbat: '<div class="db-rotate-up">WHAT</div><div class="db-rotate-down">MUST</div>',
    template: Columns,
  },
  {
    title: 'Guess the thing',
    answer: 'clean underwear',
    dingbat: '<div>Wear</div><div>Clean</div>',
    template: Rows,
  },
  {
    title: 'Guess the phrase. Hint: use search with the word pattern',
    answer: 'painless operation',
    dingbat: '<div>O_er_t_o_</div>',
    template: Rows,
  },
]
