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
}
