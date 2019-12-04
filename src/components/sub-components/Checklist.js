import React from 'react'
import { Card } from 'react-bootstrap'
import SingleItem from './SingleItem.js'
import { Form, Row, Col, Button } from 'react-bootstrap'

export default class Checklist extends React.Component {
  constructor() {
    super();
    this.state = {
      showItems: false,
      addItem: false,
      text: ''
    }
  }

  renderItems = () => this.props.checklist.items.map(item => <SingleItem authProps={this.props.authProps} key={item.id} item={item} deleteItem={this.deleteItem} />)
  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })
  handleClick = () => this.setState({ addItem: !this.state.addItem })
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.itemService.createNewItem(this.props.checklist.id, { text: this.state.text })
    this.setState({ addItem: false, text: '' })
  }

  deleteItem = (itemId) => {
    this.props.itemService.deleteItem(itemId, this.props.checklist.id)
  }

  renderForm = () => {
    const { title } = this.state
    return (
      <Form className='pt-1 pb-1 pl-2' onSubmit={this.handleSubmit}>
        <Row>
          <Col sm='7'>
            <Form.Control placeholder='text' name='text' value={title} onChange={this.handleChange} />
          </Col>
          <Col sm='2'>
            <Button onClick={this.handleSubmit} >
              Submit
            </Button>
          </Col>
          <Col sm='2'>
            <Button variant="danger" onClick={() => this.setState({ addItem: false, text: '' })}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }

  render() {
    return (
      <div key={this.props.checklist.id} className='mb-3'>
        <Card>
          <Card.Header className='d-flex'>
            {this.props.checklist.title}

            <span className='flex-fill text-right'>
              <Button size="sm" onClick={() => this.setState({ showItems: !this.state.showItems })}>Expand</Button>
              <i onClick={event => this.handleClick()} className="fa fa-fw fa-plus-square align-self-center" style={{ fontSize: '1.5em', marginLeft: 5 }} />
            </span>
          </Card.Header>
          {this.state.addItem ? this.renderForm() : null}
          {this.state.showItems ? this.renderItems() : null}
        </Card>
      </div>
    )
  }
}
