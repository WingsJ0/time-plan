/**
 * @name 项目
 */

/**
 * @name 配置
 */
interface Config {
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

const DefaultConfig: Config = {
  period: 6
}

/* public */

/**
 * @name 项目
 */
class Project {
  name: string
  config: Config
  works: Work[]

  /**
   * @name 构造方法
   * @param name 名称
   * @param config 配置
   */
  constructor(name: string, config?: Config) {
    this.name = name
    this.config = Object.assign({}, DefaultConfig, config)

    this.works = []
  }
}

/* construct */

export default Project
