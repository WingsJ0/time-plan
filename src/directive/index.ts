/**
 * @name 指令
 */

/* private */

import { DirectiveBinding } from 'vue'
import ObserveVisibility from './observe-visibility'

interface Directive {
  [index: string]: {
    name: string
    mounted: (el: HTMLElement, binding: DirectiveBinding) => void
    unmounted: (el: HTMLElement) => void
  }
}

/* public */

const directive: Directive = {
  'observe-visibility': ObserveVisibility
}

/* construct */

export default directive
