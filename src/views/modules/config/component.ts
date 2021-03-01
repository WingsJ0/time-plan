import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'config',
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
