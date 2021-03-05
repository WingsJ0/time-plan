/**
 * @name 状态
 */

/* private */

import { createStore } from 'vuex'
import Data from './module/data'

/* construct */

export default createStore({
  modules: {
    data: Data
  }
})
