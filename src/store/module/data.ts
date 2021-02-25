/**
 * @name 数据
 */

/* private */

import Project from '@/type/project'
import { ActionContext } from 'vuex'

const DirectoryKey = 'directory'

interface State {
  current: string
  directory: string[]
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
  current: '', // 当前项目名
  directory: JSON.parse(localStorage.getItem(DirectoryKey) || '[]')
}
const mutations = {
  setCurrent(state: State, name: string) {
    state.current = name

    localStorage.setItem('current', name)
  }
}
const actions = {
  addProject({ state }: ActionContext<State, {}>, { name, period }: { name: string; period: number }) {
    state.directory.push(name)
    let project = new Project(name, { period })

    localStorage.setItem(calcProjectKey(name), JSON.stringify(project))
    localStorage.setItem(DirectoryKey, JSON.stringify(state.directory))
  },
  saveProject({ getters }: ActionContext<State, {}>, name: string) {
    localStorage.setItem(calcProjectKey(name), JSON.stringify(getters.project))
  }
}
const getters = {
  project(state: State) {
    return JSON.parse(localStorage.getItem(calcProjectKey(state.current)) || '{}')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
