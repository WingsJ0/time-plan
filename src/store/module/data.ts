/**
 * @name 数据
 */

/* private */

import Project from '@/type/project'

interface State {
  projects: string[]
}

/* public */

const state = {
  current: '',
  projects: JSON.parse(localStorage.getItem('projects') || '[]')
}
const actions = {
  addProject({ state }: { state: State }, { name, period }: { name: string; period: number }) {
    // todo：类型
    state.projects.push(name)
    let project = new Project(name, { period })

    localStorage.setItem(`project_${name}`, JSON.stringify(project))
    localStorage.setItem('projects', JSON.stringify(state.projects))
  }
}

export default {
  namespaced: true,
  state,
  actions
}
