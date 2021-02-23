/**
 * @name 数据
 */

/* private */

import Project from '@/type/project'

interface State {
  projects: Project[]
}

/* public */

const state = {
  projects: JSON.parse(localStorage.getItem('projects') || '[]')
}
const getters = {
  directory(state: State) {
    return state.projects.map(a => a.name)
  }
}
const mutations = {
  addProject(state: State, project: Project) {
    state.projects.push(project)

    localStorage.setItem('projects', JSON.stringify(state.projects))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
