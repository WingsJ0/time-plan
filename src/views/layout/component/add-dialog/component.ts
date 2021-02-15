import { defineComponent } from 'vue'

export default defineComponent({
  name: 'add-dialog',
  data() {
    return {
      name: '',
      period: 6
    }
  },
  computed: {
    confirmable(this: { name: string; period: number }) {
      return Boolean(this.name && this.period)
    }
  },
  methods: {
    /**
     * @name 处理确认点击
     */
    handle_confirm_click() {
      this.$emit('confirm', { name: this.name, period: this.period })
    }
  }
})
