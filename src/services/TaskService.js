class TaskService {
  constructor(component) {
    this.component = component
    this.workingURL = 'https://arcane-sands-50858.herokuapp.com'
    // this.workingURL = 'http://localhost:3000'
  }

  fetchAllTasksFor = (projectId) => {
    fetch(`${this.workingURL}/projects/${projectId}/tasks`)
      .then(response => response.json())
      .then(tasks => this.component.setState({ tasks }))
  }
}

export default TaskService
