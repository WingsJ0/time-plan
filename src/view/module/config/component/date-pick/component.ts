import { defineComponent } from 'vue'
import DayJS, { Dayjs } from 'dayjs'

export default defineComponent({
  name: 'date-pick',
  data() {
    return {
      date: DayJS()
    }
  },
  props: {
    modelValue: {
      type: String,
      default: '' // YYYY-MM-DD
    }
  },
  computed: {
    start(this: { date: Dayjs }) {
      return DayJS(this.date)
        .date(1)
        .day()
    },
    length(this: { date: Dayjs; year: number; month: number }) {
      return this.date.daysInMonth()
    },
    year: {
      get(this: { date: Dayjs }) {
        return this.date.year()
      },
      set(this: { date: Dayjs }, v: number) {
        this.date.year(v)
        this.date = this.date.year(v).clone()
      }
    },
    month: {
      get(this: { date: Dayjs }) {
        return this.date.month() + 1
      },
      set(this: { date: Dayjs }, v: number) {
        this.date = this.date.month(v - 1).clone()
      }
    },
    day: {
      get(this: { date: Dayjs }) {
        return this.date.date()
      },
      set(this: { date: Dayjs }, v: number) {
        this.date = this.date.date(v).clone()
      }
    }
  },
  watch: {
    modelValue: {
      handler() {
        if (this.modelValue) {
          this.date = DayJS(this.modelValue)
        }
      },
      immediate: true
    },
    date: {
      handler() {
        this.$emit('update:modelValue', DayJS(this.date).format('YYYY-MM-DD'))
      },
      immediate: true
    }
  },
  methods: {
    /**
     * @name 处理调节点击
     * @param tpye 类型
     * @param delta 变量
     */
    handle_adjust_click(type: string, delta: number) {
      if (type === 'year') {
        this.year += delta
      } else if (type === 'month') {
        let month = this.month + delta
        if (month > 12) {
          this.month = 1
          this.year++
        } else if (month <= 0) {
          this.month = 12
          this.year--
        } else {
          this.month = month
        }
      }
    },
    /**
     * @name 处理日点击
     * @param day 日
     */
    handle_day_click(day: number) {
      this.day = day
    }
  }
})
