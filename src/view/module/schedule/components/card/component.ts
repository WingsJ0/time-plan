import { defineComponent } from 'vue'

export default defineComponent({
  name: 'card',
  props: {
    name: {
      type: String,
      required: true
    },
    start: {
      type: String,
      required: true
    },
    end: {
      type: String,
      required: true
    }
  }
})
