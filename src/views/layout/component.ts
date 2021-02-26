import { defineComponent } from 'vue'
import AddDialog from './component/add-dialog/index.vue'
import { mapState } from 'vuex'

enum Tab {
  config = 'config',
  word = 'work'
}

export default defineComponent({
  name: 'layout',
  components: {
    [AddDialog.name]: AddDialog
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
    ...mapState('data', ['current', 'directory'])
  },
  methods: {
    /**
     * @name 处理入口点击
     * @param name 名称
     */
    handle_entry_click(name: string) {
      this.$store.commit('data/setCurrent', name)
    },
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
     */
    handle_add_confirm(name: string) {
      this.dialogShow = false
      this.$store.dispatch('data/addProject', name)
    },
    /**
     * @name 处理删除点击
     */
    handle_remove_click() {
      this.$store.dispatch('data/removeProject', this.current)
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
