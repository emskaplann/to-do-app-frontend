import React from 'react'
import { Modal, Card, ListGroup, useAccordionToggle } from 'react-bootstrap'

export default class Checklist extends React.Component {
  constructor(){
    super();
    this.state = {
        showItems: false
      }
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
                <div className='float-right' onClick={() => console.log(item.id + ' ' + this.props.checklist.id)}>
                { !item.is_completed ? <i className="fa fa-fw fa-check" style={{ fontSize: '1.5em', color: 'silver'}} /> : <i className="fa fa-fw fa-check" style={{ fontSize: '1.5em', color: 'green'}} />}
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
