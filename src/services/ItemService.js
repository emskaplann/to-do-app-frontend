export default class ItemService {
  constructor(component){
    this.component = component
  }

  completeItem = itemId => {
    fetch(`https://arcane-sands-50858.herokuapp.com/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }, body: JSON.stringify({
        item: {
          text: "edited",
          is_completed: "true"
        }
      })
    })
    .then(r => r.json())
    .then(editedItem => {
      console.log(editedItem)
    })
  }

}
