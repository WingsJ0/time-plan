import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import DatePick from './component/date-pick/index.vue'

export default defineComponent({
  name: 'config',
  components: {
    [DatePick.name]: DatePick
  },
  computed: {
    ...mapGetters('data', ['project'])
  },
  methods: {
    /**
     * @name 处理休息日更改
     * @param date 日期
     */
    handle_rest_change(date: string) {
      this.project.addRest(date)
    },
    /**
     * @name 处理休息日删除点击
     * @param date 日期
     */
    handle_resetRemove_click(date: string) {
      this.project.removeRest(date)
    }
  }
})
