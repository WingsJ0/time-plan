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
    handle_start_focus() {},
    handle_start_blur() {}
  }
})
