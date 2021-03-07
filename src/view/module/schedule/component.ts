import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Project from '@/type/project'
import Card from './components/card/index.vue'

export default defineComponent({
  name: 'schedule',
  components: {
    [Card.name]: Card
  },
  computed: {
    ...mapGetters('data', ['project']),

    schedules(this: { project: Project }) {
      return this.project.generateSchedules()
    }
  }
})
