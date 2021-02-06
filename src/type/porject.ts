/**
 * @name 项目
 */

/* private */

/**
 * @name 项目
 */
interface Option {
  dayHours: number // 一日时长
}
/**
 * @name 工作
 */
interface Work {
  name: string
  period: number
}

/* public */

/**
 * @name 项目
 */
interface Project {
  name: string
  option: Option
  works: Work[]
}

/* construct */

export default Project
