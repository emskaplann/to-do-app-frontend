class NoteService {
  constructor(component) {
    this.component = component
    this.workingURL = 'https://arcane-sands-50858.herokuapp.com'
    // this.workingURL = 'http://localhost:3000'

  }

  fetchNotesForProject = (projectId) => {
    fetch(`${this.workingURL}/projects/${projectId}/notes`)
      .then(response => response.json())
      .then(notes => this.component.setState({ notes }))
  }
}

export default NoteService