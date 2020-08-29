/*

  Temporary custom draw function instead of
  import { draw } from 'svelte/transition'
  as the library draw function does not take into account the linecap so causes a horrible flicker

  To be removed when issue is resolved - https://github.com/sveltejs/svelte/issues/4540

*/

import { quintOut } from 'svelte/easing'

export function draw(node, { delay = 0, speed, duration, easing = quintOut }) {
  // check for a linecap - if used add this to the dasharray length property
  const hasEndCaps = getComputedStyle(node).strokeLinecap !== 'butt'
  let capSize = hasEndCaps ? parseInt(getComputedStyle(node).strokeWidth) : 0
  const len = node.getTotalLength() + capSize

  // the rest is the standard draw function from svelte
  if (duration === undefined) {
    if (speed === undefined) {
      duration = 800
    } else {
      duration = len / speed
    }
  } else if (typeof duration === 'function') {
    duration = duration(len)
  }

  return {
    delay,
    duration,
    easing,
    css: (t, u) => `stroke-dasharray: ${t * len} ${u * len}`,
  }
}
