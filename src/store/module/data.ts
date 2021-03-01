/**
 * @name 数据
 */

/* private */

import Project from '@/type/project'
import { ActionContext } from 'vuex'

const CurrentKey = 'current'
const DirectoryKey = 'directory'

interface State {
  current: string
  directory: string[]
  project: Project
}

/**
 * @name 计算存储键
 * @parm name 名称
 */
function calcProjectKey(name: string): string {
  return `project_${name}`
}

/* public */

const state = {
  current: localStorage.getItem(CurrentKey) || '', // 当前项目名
  directory: JSON.parse(localStorage.getItem(DirectoryKey) || '[]'),
  project: null as Project | null
}
const actions = {
  async setCurrent({ state }: ActionContext<State, {}>, name: string) {
    state.current = name

    let s = localStorage.getItem(calcProjectKey(state.current))
    if (s) {
      state.project = JSON.parse(s)
    } else {
      // todo: 数据损坏
    }

    localStorage.setItem(CurrentKey, name)
  },
  async addProject({ state }: ActionContext<State, {}>, name: string): Promise<Project> {
    state.directory.push(name)
    let project = new Project(name)

    localStorage.setItem(calcProjectKey(name), JSON.stringify(project))
    localStorage.setItem(DirectoryKey, JSON.stringify(state.directory))

    return project
  },
  async saveProject({ state, getters }: ActionContext<State, {}>) {
    localStorage.setItem(calcProjectKey(state.current), JSON.stringify(getters.project))
  },
  async removeProject({ state }: ActionContext<State, {}>) {
    let index = state.directory.indexOf(state.current)
    if (index > -1) {
      state.directory.splice(index, 1)
    }
    localStorage.setItem(DirectoryKey, JSON.stringify(state.directory))

    state.current = ''
    localStorage.removeItem(calcProjectKey(state.current))
  }
}
const getters = {
  project(state: State) {
    if (state.project) {
      return state.project
    } else {
      let s = localStorage.getItem(calcProjectKey(state.current))
      if (s) {
        state.project = JSON.parse(s)

        return state.project
      } else {
        // todo: 数据损坏
      }
    }
  }
}

/* construct */

export default {
  namespaced: true,
  state,
  actions,
  getters
}
