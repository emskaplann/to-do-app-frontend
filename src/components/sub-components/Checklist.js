import React from 'react'
import { Card } from 'react-bootstrap'
import SingleItem from './SingleItem.js'

export default class Checklist extends React.Component {
  constructor(){
    super();
    this.state = {
        showItems: false
      }
    }

    renderItems = () => this.props.checklist.items.map(item => <SingleItem key={item.id} item={item}/>)

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
