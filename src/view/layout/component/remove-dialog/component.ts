import { defineComponent } from 'vue'

export default defineComponent({
  name: 'remove-dialog',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    /**
     * @name 处理确认点击
     */
    handle_confirm_click() {
      this.$store.dispatch('data/removeProject')

      this.$emit('close')
    },
    /**
     * @name 处理取消点击
     */
    handle_cancel_click() {
      this.$emit('close')
    }
  }
})
