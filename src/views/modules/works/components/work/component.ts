import { defineComponent, PropType } from 'vue'
import { Work } from '@/type/project'

export default defineComponent({
  name: 'work',
  props: {
    binding: {
      type: Object as PropType<Work>,
      required: true
    }
  },
  methods: {
    /**
     * @name 处理删除点击
     */
    handle_remove_click() {
      this.$emit('remove', this.binding)
    }
  }
})
