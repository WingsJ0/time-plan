import { defineComponent } from 'vue'
import AddDialog from './component/add-dialog/index.vue'

export default defineComponent({
  name: 'layout',
  components: {
    [AddDialog.name]: AddDialog
  },
  data() {
    return {
      dialogType: '', // add
      dialogShow: false
    }
  },
  methods: {
    /**
     * @name 处理遮罩点击
     */
    handle_mask_click() {
      this.dialogShow = false
    },
    /**
     * @name 处理添加点击
     */
    handle_add_click() {
      this.dialogType = 'add'
      this.dialogShow = true
    }
  }
})
