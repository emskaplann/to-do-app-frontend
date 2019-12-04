export default class ItemService {
  constructor(component){
    this.component = component
  }

  completeItem = (itemId, bool) => {
    fetch(`https://arcane-sands-50858.herokuapp.com/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify({
        item: {
          is_completed: bool
        }
      })
    })
    .then(r => r.json())
    .then(editedItem => {
      this.component.setState({ isCompleted: editedItem.is_completed })
    })
  }

}
