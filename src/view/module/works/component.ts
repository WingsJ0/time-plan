import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { Work } from '@/type/project'
import Card from './components/card/index.vue'

export default defineComponent({
  name: 'works',
  components: {
    [Card.name]: Card
  },
  computed: {
    ...mapGetters('data', ['project'])
  },
  methods: {
    /**
     * @name 处理添加点击
     */
    handle_add_click() {
      this.project.addWork('[新建工作]', 1)
    },
    /**
     * @name 处理工作删除
     * @param work 工作
     */
    handle_work_remove(work: Work) {
      this.project.removeWork(work)
    }
  }
})
