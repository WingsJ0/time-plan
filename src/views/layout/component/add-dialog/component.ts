import { defineComponent } from 'vue'

export default defineComponent({
  name: 'add-dialog',
  data() {
    return {
      name: ''
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      if (!this.show) {
        this.name = ''
      }
    }
  },
  computed: {
    confirmable(this: { name: string }) {
      return Boolean(this.name)
    }
  },
  methods: {
    handle_visibility(intersecting: boolean) {
      if (!intersecting) {
        this.name = ''
      }
    },
    /**
     * @name 处理确认点击
     */
    handle_confirm_click() {
      this.$emit('confirm', this.name)
    }
  }
})
