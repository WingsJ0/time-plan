import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    data: any
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
