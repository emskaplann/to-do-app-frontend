export default class ChecklistService {
  constructor(component){
    this.component = component
  }

  fetchChecklists = taskId => {
    fetch(`https://arcane-sands-50858.herokuapp.com/tasks/${taskId}/checklists`)
    .then(r => r.json())
    .then(checklists => {
      this.component.setState({ checklists })
    })
    }
}
