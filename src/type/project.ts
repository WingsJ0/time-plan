/**
 * @name 项目
 */

/**
 * @name 选项
 */
interface Option {
  period?: number // 一日时长
}
/**
 * @name 工作
 */
interface Work {
  name: string
  period: number
}

/* private */

const DefaultOption: Option = {
  period: 6
}

/* public */

/**
 * @name 项目
 */
class Project {
  name: string
  option: Option
  works: Work[]

  /**
   * @name 构造方法
   * @param name 名称
   * @param option 选项
   */
  constructor(name: string, option?: Option) {
    this.name = name
    this.option = Object.assign({}, DefaultOption, option)

    this.works = []
  }
}

/* construct */

export default Project
