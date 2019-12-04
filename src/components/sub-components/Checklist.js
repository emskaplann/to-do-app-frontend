import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import ItemService from '../../services/ItemService.js'


export default class Checklist extends React.Component {
  constructor(){
    super();
    this.state = {
        showItems: false
      }
      this.ItemService = new ItemService(this)
    }

    completeItem = (itemId) => {
      this.ItemService.completeItem(itemId)
    }

    renderItems = () => {
      return(
        <div>
          {this.props.checklist.items.map(item => {
            return(
            <Card.Body key={`checklist-item${item.id}`}>
              <ListGroup.Item key={item.id}>
                <div className='float-left'>
                  {item.text}
                </div>
                <div className='float-right' onClick={() => this.completeItem(item.id)}>
                  <i className="fa fa-fw fa-check" style={{ fontSize: '1.5em', color: !item.is_completed? 'silver' : 'green'}} />
                </div>
                <br />
              </ListGroup.Item>
            </Card.Body>
            )
          })}
        </div>
      )
    }

    render(){
      return(
        <div key={this.props.checklist.id}>
          <Card>
            <Card.Header onClick={() => this.setState({showItems: !this.state.showItems})}>
                {this.props.checklist.title}
            </Card.Header>
              {this.state.showItems ? this.renderItems() : null}
          </Card>
        </div>
      )
    }
}
