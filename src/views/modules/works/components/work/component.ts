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
     * @name 处理状态点击
     */
    handle_status_click() {
      this.binding.status = !this.binding.status
    },
    /**
     * @name 处理删除点击
     */
    handle_remove_click() {
      this.$emit('remove', this.binding)
    },

    handle_dragstart(ev: any) {
      ev.dataTransfer.effectAllowed = 'move'
      ev.dataTransfer.setData('a', '0')
    },
    handle_dragover(ev: any) {
      ev.preventDefault() // 阻止默认事件，使得元素可以落下
      ev.dataTransfer.dropEffect = 'move'
      // console.log(ev.dataTransfer.getData('a'))
    },
    handle_drop(ev: any) {
      console.log(ev.dataTransfer.getData('a'))
    }
  }
})
