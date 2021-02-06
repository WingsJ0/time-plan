import { defineComponent } from 'vue'

export default defineComponent({
  name: 'layout',
  created() {
    console.log(this.$store.state.data)
  }
})
