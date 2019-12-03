export default class ProjectService {
  constructor (component) {
    this.component = component
  }

  fetchProjects = () => {
    fetch(`https://arcane-sands-50858.herokuapp.com/users/${this.component.state.userId}/projects`)
    .then(r => r.json())
    .then(r => {
      this.component.setState({projects: r})
    })
  }

  postProject = (obj) => {
    fetch(`https://arcane-sands-50858.herokuapp.com/users/${obj.userId}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify(obj)})
      .then(r => r.json())
      .then(newProject => {
        this.component.setState({ newProject })
      })
  }

}
