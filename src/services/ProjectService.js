export default class ProjectService {
  constructor(component) {
    this.component = component
    this.productionURL = 'https://arcane-sands-50858.herokuapp.com'
    this.devURL = 'http://localhost:3000'
  }

  fetchProjects = (userId) => {
    fetch(`${this.productionURL}/users/${userId}/projects`, {
      headers: {
        "Authorization": this.component.props.authProps.token
      }
    })
      .then(r => r.json())
      .then(projects => {
        const allTasks = projects.map(project => project.tasks).flat()
        this.component.setState({ projects, allTasks })
      })
  }

  postProject = (project) => {
    fetch(`${this.productionURL}/users/${project.userId}/projects`, {
      method: "POST",
      headers: {
        "Authorization": this.component.props.authProps.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify(project)
    })
      .then(r => r.json())
      .then(newProject => this.component.setState({ projects: [...this.component.state.projects, newProject] }))
  }

  postTask = (task) => {
    console.log(task)
    fetch(`${this.productionURL}/projects/${task.projectId}/tasks`, {
      method: "POST",
      headers: {
        "Authorization": this.component.props.authProps.token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify(task)
    })
      .then(r => r.json())
      .then(newTask => {
        const project = this.component.state.projects.find(project => project.id === newTask.project_id)
        const projectCopy = Object.assign({}, project)
        projectCopy.tasks = [...projectCopy.tasks, newTask]
        const newProjects = this.component.state.projects.map(project => project.id === projectCopy.id ? projectCopy : project)
        this.component.setState({
          projects: newProjects,
          allTasks: newProjects.map(project => project.tasks).flat()
        })
      })
  }

}
