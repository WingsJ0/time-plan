/**
 * @name 数据
 */

/* private */

import Project from '@/type/project'
import { ActionContext } from 'vuex'

const CurrentKey = 'current'
const DirectoryKey = 'directory'

interface State {
  current: number
  directory: { name: string; id: number }[]
  project: Project | null
}

/**
 * @name 计算存储键
 * @parm id 编号
 */
function calcProjectKey(id: number): string {
  return `project_${id}`
}

/* public */

const state = {
  current: +(localStorage.getItem(CurrentKey) || 0), // 当前项目名
  directory: JSON.parse(localStorage.getItem(DirectoryKey) || '[]'),
  project: null as Project | null
}
const mutations = {
  setCurrent(state: State, id: number) {
    state.current = id

    localStorage.setItem(CurrentKey, id.toString())
  }
}
const actions = {
  addProject({ state }: ActionContext<State, {}>, name: string) {
    // todo: 重名

    let project = new Project(name)
    state.directory.push({ name, id: project.id })

    localStorage.setItem(calcProjectKey(project.id), JSON.stringify(project))
    localStorage.setItem(DirectoryKey, JSON.stringify(state.directory))
  },
  saveProject({ state, getters }: ActionContext<State, {}>) {
    if (state.current) {
      localStorage.setItem(calcProjectKey(state.current), JSON.stringify(getters.project))
    }
  },
  removeProject({ state, commit }: ActionContext<State, {}>) {
    let target = state.directory.find(a => a.id === state.current)
    if (target) {
      let index = state.directory.indexOf(target)
      if (index > -1) {
        state.directory.splice(index, 1)
      }
      localStorage.setItem(DirectoryKey, JSON.stringify(state.directory))

      localStorage.removeItem(calcProjectKey(state.current))
      state.project = null
      commit('setCurrent', '')
    }
  }
}
const getters = {
  project(state: State) {
    if (state.project?.id === state.current) {
      return state.project
    } else {
      let s = localStorage.getItem(calcProjectKey(state.current))
      if (s) {
        state.project = Project.From(JSON.parse(s))

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
  mutations,
  actions,
  getters
}
