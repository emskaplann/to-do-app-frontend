import React from 'react';
import { Container, Col, Row } from 'react-bootstrap/';
import TagSerivce from '../../services/TagService';
import ProjectTitleComponent from '../sub-components/ProjectTitleComponent';
import NotesCard from '../sub-components/NotesCard';
import AllTasks from '../sub-components/AllTasks'
import NewTaskModal from '../sub-components/NewTaskModal.js'

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      showNTM: false
    }
    this.tagService = new TagSerivce(this)
  }

  openOrCloseModal = () => this.setState({ showNTM: !this.state.showNTM })

  componentDidMount() {
    this.tagService.fetchAll()
  }

  render() {
    const { project } = this.props
    if (!project) return null
    return (
      <Container fluid>
        <NewTaskModal show={this.state.showNTM} closeModal={this.openOrCloseModal} project={this.props.project} handleTaskSubmit={this.props.handleTaskSubmit} />
        <Row className='w-100'>
          <Col sm={7}>
            <ProjectTitleComponent project={project} className='mb-3' />
            <NotesCard authProps={this.props.authProps} className='mb-3' project={project} openModal={this.openOrCloseModal} />
          </Col>
          <Col sm={5}>
            {/* need to send in checklist service and item service from app.js  */}
            <AllTasks authProps={this.props.authProps} title='Upcoming Tasks' tasks={project.tasks.filter(task => !task.is_completed)} style={{ backgroundColor: '#4d1411', color: "#fff" }} openModal={this.openOrCloseModal} />
            <AllTasks authProps={this.props.authProps} title='Completed Tasks' tasks={project.tasks.filter(task => task.is_completed)} style={{ backgroundColor: '#669900', color: "#fff" }} />
          </Col>
        </Row>
      </Container>
    )
  }
}
