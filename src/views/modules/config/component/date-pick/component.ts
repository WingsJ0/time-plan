import { defineComponent } from 'vue'

export default defineComponent({
  name: 'date-pick',
  data() {
    return {
      date: new Date()
    }
  },
  props: {
    modelValue: {
      type: String,
      default: '' // YYYY-MM-DD
    }
  },
  watch: {
    modelValue: {
      handler() {
        this.date = new Date(this.modelValue)
      },
      immediate: true
    }
  }
})
