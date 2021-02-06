/**
 * @name 状态
 */

import { createStore } from 'vuex'
import Data from './module/data'

export default createStore({
  modules: {
    data: Data
  }
})
