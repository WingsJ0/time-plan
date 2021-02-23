import Project from '@/type/project'
import { defineComponent } from 'vue'
import AddDialog from './component/add-dialog/index.vue'
import { mapState } from 'vuex'

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
  computed: {
    ...mapState('data', ['projects'])
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
    },
    /**
     * @name 处理添加确认
     * @param name 名称
     * @param period 一日时长
     */
    handle_add_confirm({ name, period }: { name: string; period: number }) {
      this.dialogShow = false
      this.$store.commit('data/addProject', new Project(name, { period }))
    }
  }
})
