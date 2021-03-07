/**
 * @name 项目
 */

/* private */

import DayJS from 'dayjs'
import _ from 'lodash'

/**
 * @name 配置
 */
interface Config {
  period: number // 一日时长
  start: string // 起始日期
  rest: string[] // 休息日
}

const DefaultConfig: Config = {
  period: 6,
  start: '',
  rest: []
}

/* public */

/**
 * @name 进度
 */
interface Schedule {
  name: string
  start: string
  end: string
}

/**
 * @name 工作
 */
class Work {
  name: string
  time: number
  id: number
  status: boolean = false

  /**
   * @name 构造方法
   * @param name 名称
   * @param period 时长。小时
   */
  constructor(name: string, time: number) {
    this.name = name
    this.time = time

    this.id = Math.floor(Math.random() * 100000000)
  }
}

/**
 * @name 项目
 */
class Project {
  /**
   * @name 从实例创建
   * @param project 实例
   */
  static from(project: Project) {
    return new Project(project.name, project.config, project.id, project.works)
  }

  name: string
  config: Config
  id: number
  works: Work[]

  /**
   * @name 构造方法
   * @param name 名称
   * @param config 配置
   * @param works 工作列表
   */
  constructor(name: string, config?: Config, id?: number, works: Work[] = []) {
    this.name = name
    this.config = Object.assign({}, DefaultConfig, { start: DayJS().format('YYYY-MM-DD') }, config)
    this.works = works

    this.id = id || Math.floor(Math.random() * 100000000)
  }

  /**
   * @name 添加休息日
   * @param date 日期
   */
  addRest(date: string) {
    let rest = this.config.rest

    rest.push(date)
    rest.sort((a: string, b: string) => (a > b ? 1 : -1))
    rest = _.uniq(rest)

    this.config.rest = rest
  }
  /**
   * @name 删除休息日
   * @param date 日期
   */
  removeRest(date: string) {
    let rest = this.config.rest

    let index = rest.indexOf(date)
    if (index > -1) {
      rest.splice(index, 1)
    }
  }
  /**
   * @name 添加工作
   * @param name 名称
   * @param time 时长
   */
  addWork(name: string, time: number) {
    this.works.push(new Work(name, time))
  }
  /**
   * @name 删除工作
   * @param work 工作
   */
  removeWork(work: Work) {
    let index = this.works.indexOf(work)
    if (index > -1) {
      this.works.splice(index, 1)
    }
  }
  /**
   * @name 排列工作
   * @param origin 原位置
   * @param target 目标位置
   */
  arrangeWork(origin: number, target: number) {
    let work = this.works.splice(origin, 1)[0]
    this.works.splice(target, 0, work)
  }
  /**
   * @name 生成进度表
   */
  generateSchedules(): Schedule[] {
    let current = DayJS(this.config.start)
    let fill = 0

    let schedules = this.works.map(a => {
      let week = current.day()
      while (week === 0 || week === 6 || this.config.rest.includes(current.format('YYYY-MM-DD'))) {
        current = current.add(1, 'day')
        week = current.day()
      }

      let start = current.format('YYYY-MM-DD')
      let end

      fill += a.time
      let delta = Math.floor(fill / this.config.period)
      current = current.add(delta, 'day')
      fill = fill % this.config.period
      if (fill === 0) {
        end = current.subtract(1, 'day').format('YYYY-MM-DD') // 不超过一天算在同一天
      } else {
        end = current.format('YYYY-MM-DD')
      }

      return { name: a.name, start, end }
    })

    return schedules
  }
}

/* construct */

export default Project
export { Work }
