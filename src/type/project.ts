/**
 * @name 项目
 */

/**
 * @name 配置
 */
interface Config {
  period: number // 一日时长
}

/* private */

const DefaultConfig: Config = {
  period: 6
}

/* public */

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
  static From(project: Project) {
    return new Project(project.name, project.config, project.id, project.works)
  }

  name: string
  config: Config
  id: number
  works: Work[]

  get progress(): number {
    let total = this.works.length
    let done = this.works.reduce((p, c) => p + (c.status ? 1 : 0), 0)

    return done / total
  }

  /**
   * @name 构造方法
   * @param name 名称
   * @param config 配置
   * @param works 工作列表
   */
  constructor(name: string, config?: Config, id?: number, works: Work[] = []) {
    this.name = name
    this.config = Object.assign({}, DefaultConfig, config)
    this.works = works

    this.id = id || Math.floor(Math.random() * 100000000)
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
}

/* construct */

export default Project
export { Work }
