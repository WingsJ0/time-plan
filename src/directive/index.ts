/**
 * @name 指令
 */

/* private */

import { Directive } from 'vue'
import ObserveVisibility from './observe-visibility'

interface Directives {
  [index: string]: Directive
}

/* public */

let directives: Directives = {
  'observe-visibility': ObserveVisibility
}

/* construct */

export default directives
