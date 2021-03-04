import { defineComponent, PropType } from 'vue'
import { mapGetters } from 'vuex'
import { Work } from '@/type/project'

export default defineComponent({
  name: 'work',
  props: {
    binding: {
      type: Object as PropType<Work>,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters('data', ['project'])
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
    /**
     * @name 处理拖放开始
     * @param ev 拖放事件
     */
    handle_dragstart(ev: DragEvent) {
      if (ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = 'move'
        ev.dataTransfer.setData('origin', this.index.toString())
      }
    },
    /**
     * @name 处理拖放悬停
     * @param ev 拖放事件
     */
    handle_dragover(ev: DragEvent) {
      ev.preventDefault()
      if (ev.dataTransfer) {
        ev.dataTransfer.dropEffect = 'move'
      }
    },
    /**
     * @name 处理拖放放置
     * @param ev 拖放事件
     */
    handle_drop(ev: DragEvent) {
      if (ev.dataTransfer) {
        let origin = +ev.dataTransfer.getData('origin')
        this.project.arrangeWork(origin, this.index)
      }
    }
  }
})
