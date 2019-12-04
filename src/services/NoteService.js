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

  createNote = (note, projectId) => {
    fetch(`${this.workingURL}/projects/${projectId}/notes`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(note),
      method: 'POST'
    })
      .then(response => response.json())
      .then(note => {
        console.log(note)
        this.component.setState({
          notes: [...this.component.state.notes, note]
        })
      })
  }
}

export default NoteService
