import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import DatePick from './component/date-pick/index.vue'

export default defineComponent({
  name: 'config',
  components: {
    [DatePick.name]: DatePick
  },
  data() {
    return {
      field: {
        period: ''
      }
    }
  },
  computed: {
    ...mapGetters('data', ['project'])
  },
  methods: {
    /**
     * @name 处理输入变更
     */
    handle_input_change() {
      this.$store.dispatch('data/saveProject', this.project.name)
    }
  }
})
