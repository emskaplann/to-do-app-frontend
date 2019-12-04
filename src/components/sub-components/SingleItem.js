import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import ItemService from '../../services/ItemService.js'

export default class SingleItem extends React.Component {
  constructor(props){
    super();
    this.state = {
      isCompleted: props.is_completed
    }
    this.ItemService = new ItemService(this)
  }

  completeItem = (itemId) => {
    this.ItemService.completeItem(itemId, !this.state.isCompleted)
  }

  render(){
    return(
      <div>
        <Card.Body key={`checklist-item${this.props.item.id}`}>
          <ListGroup.Item key={this.props.item.id}>
            <div className='float-left'>
              {this.props.item.text}
            </div>
            <div className='float-right' onClick={() => this.completeItem(this.props.item.id)}>
              <i className="fa fa-fw fa-check" style={{ fontSize: '1.5em', color: !this.state.isCompleted ? 'silver' : 'green'}} />
            </div>
            <br />
          </ListGroup.Item>
        </Card.Body>
      </div>
    )
  }
}
