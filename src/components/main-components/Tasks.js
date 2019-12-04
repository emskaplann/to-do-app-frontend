import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Calendar from 'react-calendar'
import UpcomingTasks from '../sub-components/UpcomingTasks.js'
import RecentlyCompletedTasks from '../sub-components/RecentlyCompletedTasks.js'
import AllTasks from '../sub-components/AllTasks.js'
import NewTaskModal from '../sub-components/NewTaskModal.js'



export default class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      showNTM: false,
    }
  }

  openOrCloseModal = () => this.setState({ showNTM: !this.state.showNTM })
  onChange = date => this.setState({ date })

  render() {
    return (
      <Container fluid>
        <NewTaskModal show={this.state.showNTM} closeModal={this.openOrCloseModal} projects={this.props.projects} handleTaskSubmit={this.props.handleTaskSubmit} />
        <Row>
          <Col sm={6}>
            <UpcomingTasks dateFromState={this.state.date} tasks={this.props.tasks.filter(task => !task.is_completed)} />
            <br />
            <AllTasks authProps={this.props.authProps} title="All Tasks" style={{ backgroundColor: '#4d1411', color: "#fff" }} tasks={this.props.tasks} openModal={this.openOrCloseModal} />
          </Col>
          <Col sm={3}>
            <RecentlyCompletedTasks tasks={this.props.tasks} />
          </Col>
          <Col sm={3}>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          </Col>
        </Row>
      </Container>


    )
  }
}
