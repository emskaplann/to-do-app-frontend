export default class ProjectService {
  constructor (component) {
    this.component = component
  }

  fetchProjects = () => {
    fetch(`https://arcane-sands-50858.herokuapp.com/users/${this.component.state.userId}/projects`)
    .then(r => r.json())
    .then(projects => {
      this.component.setState({ projects })
    })
  }

  postProject = (project) => {
    fetch(`https://arcane-sands-50858.herokuapp.com/users/${project.userId}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify(project)})
      .then(r => r.json())
      .then(newProject => {
        this.component.setState({ projects: [...this.component.state.projects, newProject] })
      })
  }

}
