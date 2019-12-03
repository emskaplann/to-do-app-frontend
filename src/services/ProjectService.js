export default class ProjectService {
  constructor(component) {
    this.component = component
    this.productionURL = 'https://arcane-sands-50858.herokuapp.com'
    this.devURL = 'http://localhost:3000'
  }

  fetchProjects = (userId) => {
    fetch(`${this.devURL}/users/${userId}/projects`)
      .then(r => r.json())
      .then(projects => {
        this.component.setState({ projects })
      })
  }

  postProject = (project) => {
    fetch(`${this.devURL}/users/${project.userId}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify(project)
    })
      .then(r => r.json())
      .then(newProject => {
        this.component.setState({ projects: [...this.component.state.projects, newProject] })
      })
  }

}
