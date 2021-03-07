import { defineComponent } from 'vue'
import AddDialog from './component/add-dialog/index.vue'
import RemoveDialog from './component/remove-dialog/index.vue'
import { mapGetters, mapState } from 'vuex'

enum Tab {
  config = 'config',
  word = 'work'
}

export default defineComponent({
  name: 'layout',
  components: {
    [AddDialog.name]: AddDialog,
    [RemoveDialog.name]: RemoveDialog
  },
  data() {
    return {
      Tab,

      dialogType: '', // add
      dialogShow: false,
      tab: Tab.config
    }
  },
  computed: {
    ...mapState('data', ['current', 'directory']),
    ...mapGetters('data', ['project'])
  },
  watch: {
    project: {
      handler() {
        this.$store.dispatch('data/saveProject')
      },
      deep: true
    }
  },
  methods: {
    /**
     * @name 处理入口点击
     * @param id 编号
     */
    handle_entry_click(id: number) {
      this.$store.commit('data/setCurrent', id)
    },
    /**
     * @name 处理对话框关闭
     */
    handle_dialog_close() {
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
     * @name 处理名称变更
     */
    handle_name_change() {
      this.$store.commit('data/modifyDirectory', { id: this.current, name: this.project.name })
    },
    /**
     * @name 处理删除点击
     */
    handle_remove_click() {
      this.dialogType = 'remove'
      this.dialogShow = true
    },
    /**
     * @name 处理标签点击
     * @param tab 标签项
     */
    handle_tab_click(tab: Tab) {
      this.tab = tab
    }
  }
})
