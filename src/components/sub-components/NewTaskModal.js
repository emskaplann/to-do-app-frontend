import React from 'react'
import { Modal, Button, Form, Col, Row } from 'react-bootstrap'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"


export default class NewProjectModal extends React.Component {
  state = {
    date: new Date(),
    task: {
      deadline: "",
      title: "",
      projectId: 1,
    }
  }

  handleTitle = name => this.setState({ task: { ...this.state.task, title: name } })
  handleProjectSelect = projectId => this.setState({ task: { ...this.state.task, projectId: projectId } })
  handleChange = date => {
    let dateString = ""
    if (date !== null) {
      dateString = date.toUTCString()
    }
    this.setState({ date: date, task: { ...this.state.task, deadline: dateString } })
  }
  handleSelectChange = priority => this.setState({ task: { ...this.state.task, priority: priority } })

  renderSelect = () => (
    <Form.Control as="select" onChange={(event) => this.handleProjectSelect(event.target.value)} defaultValue={this.state.task.projectId}>
      {this.props.projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
    </Form.Control>
  )
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>New Task Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="formProName">
              <Form.Label column sm="2">
                <small>Title:</small>
              </Form.Label>
              <Col sm="10">
                <Form.Control onChange={(event) => this.handleTitle(event.target.value)} defaultValue={this.state.task.title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formProDesc">
              <Form.Label column sm="2">
                <small>Description:</small>
              </Form.Label>
              <Col sm="10">
                {this.props.projects ? this.renderSelect() : this.props.project.name}
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
                  selected={this.state.date}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button size='sm' variant="secondary" onClick={this.props.closeModal}>Close</Button>
          <Button size='sm' onClick={(event) => this.props.handleTaskSubmit(this.state.task)} variant="primary">Create New Task</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
