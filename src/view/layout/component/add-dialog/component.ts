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
  computed: {
    confirmable(this: { name: string }) {
      return Boolean(this.name)
    }
  },
  watch: {
    show() {
      if (!this.show) {
        this.name = ''
      }
    }
  },
  methods: {
    /**
     * @name 处理可见性变化
     */
    handle_visibility(intersecting: boolean) {
      if (!intersecting) {
        this.name = ''
      }
    },
    /**
     * @name 处理确认点击
     */
    handle_confirm_click() {
      this.$store.dispatch('data/addProject', this.name)

      this.$emit('close')
    }
  }
})
