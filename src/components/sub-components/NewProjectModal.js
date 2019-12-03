import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



export default class NewProjectModal extends React.Component {
  constructor(props){
    super();

    this.state = {
      show: props.show,
      project: {
        date: "",
        description: "I want to this and that.",
        name: "My Cool Project.",
        priority: "Medium",
      }
    }
  }

  handleName = name => {
    this.setState({
      project: {...this.state.project, name: name}
    })
  }

  handleDesc = description => {
    this.setState({
      project: {...this.state.project, description: description}
    })
  }

  handleDate = date => (
    this.setState({
      project: {...this.state.project, date: date}
    })
  )

  handleChange = date => (
    this.setState({
      project: {...this.state.project, date: date}
    })
  )

  handleSelectChange = priority => {
    this.setState({
      project: {...this.state.project, priority: priority}
    })
  }

  render(){
    return(
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>New Project Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group as={Row} controlId="formProName">
              <Form.Label column sm="2">
                <small>Name:</small>
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={(event) => this.handleName(event.target.value)} plaintext defaultValue={this.state.project.name} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formProDesc">
                <Form.Label column sm="2">
                  <small>Description:</small>
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext onChange={(event) => this.handleDesc(event.target.value)} defaultValue={this.state.project.description} />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formProPriority">
                <Col sm='2'>
                  <Form.Label><small>Priority:</small></Form.Label>
                </Col>
                <Col sm='10'>
                    <Form.Control as="select" onChange={(event) => this.handleSelectChange(event.target.value)}>
                      <option value='Low'>Low</option>
                      <option value='Medium'>Medium</option>
                      <option value='High'>High</option>
                    </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formProDeadline">
              <Col sm='2'>
                <Form.Label>
                  <small>Deadline:</small>
                </Form.Label>
              </Col>
              <Col sm='10'>
                <DatePicker
                  onChange={this.handleChange}
                  selected={this.state.project.date}
                  onChange={this.handleChange}
                  dateFormat='Pp'
                  showTimeSelect
                />
              </Col>
              </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button size='sm' variant="secondary" onClick={this.props.handleModalClose}>Close</Button>
          <Button size='sm' onClick={(event) => this.props.handleProjectSubmit(this.state.project)} variant="primary">Create Project</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
