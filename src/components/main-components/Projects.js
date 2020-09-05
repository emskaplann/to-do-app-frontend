import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap/'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import TagSerivce from '../../services/TagService'
import ProjectTitleComponent from '../sub-components/ProjectTitleComponent'
import NotesCard from '../sub-components/NotesCard'
import AllTasks from '../sub-components/AllTasks'
import NewTaskModal from '../sub-components/NewTaskModal'
import NewProjectModal from '../sub-components/NewProjectModal'

export default class Projects extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tags: [],
      showNTM: false,
      showNPM: false,
    }
    this.tagService = new TagSerivce(this)
  }

  openOrCloseModal = () => this.setState({ showNTM: !this.state.showNTM })

  completeTask = (taskId) => {
    this.props.taskService.completeTask(taskId)
  }

  handleProjectSubmit = (obj) => {
    let newObj = { ...obj, userId: this.props.authProps.loggedInUserId }
    this.props.projectService.postProject(newObj)
    this.setState({ showNPM: false })
  }

  handleModalClose = () => this.setState({ showNPM: false })

  componentDidMount() {
    // this.props.project === undefined ? this.setState({showNPM: true}) : this.setState({showNPM: false})
  }

  render() {
    const { project } = this.props
    if(project === undefined || project === null || project === 'undefined') {
     // show new project modal
     return (
      <Container fluid>
          <NewProjectModal handleProjectSubmit={this.handleProjectSubmit} show={this.state.showNPM} handleModalClose={this.handleModalClose} />
          <Row style={{justifyContent: 'center'}}>
            <Col sm={6} md={6} lg={6}>
              <Card style={{margin: 'auto', padding: '20px', marginTop: '50px'}}>
                <Header as='h4' style={{textAlign: 'center', marginTop: 5}}>
                  You need to create a project in order to view this page.
                </Header>
                <Card.Footer>
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <Link to="/"><Button size="sm" variant='secondary'>Back to Dashboard</Button></Link>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <Button size="sm" variant='primary' style={{float: 'right', backgroundColor: '#db3d44', borderColor: '#db3d44', marginLeft: '5px'}}>Create a Project!</Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
      </Container>
     )
    } else {
      const tasks = project.tasks.filter(task => !task.is_completed)
      const completedTasks = project.tasks.filter(task => task.is_completed)
      return (
        <Container fluid>
          <NewTaskModal show={this.state.showNTM} closeModal={this.openOrCloseModal} project={this.props.project} handleTaskSubmit={this.props.handleTaskSubmit} />
          <Row className='w-100'>
            <Col sm={7}>
              <ProjectTitleComponent projectService={this.props.projectService} project={project} className='mb-3' />
              <NotesCard authProps={this.props.authProps} className='mb-3' project={project} openModal={this.openOrCloseModal} />
            </Col>
            <Col sm={5}>
              {/* need to send in checklist service and item service from app.js  */}
              <AllTasks key={`length-of-tasks-${tasks.length}`} completeTask={this.completeTask} authProps={this.props.authProps} title='Upcoming Tasks' tasks={tasks} style={{ backgroundColor: '#4d1411', color: "#fff" }} openModal={this.openOrCloseModal} />
              <AllTasks key={`length-of-completedTasks-${completedTasks.length}`} authProps={this.props.authProps} title='Completed Tasks' tasks={completedTasks} style={{ backgroundColor: '#669900', color: "#fff" }} />
            </Col>
          </Row>
        </Container>
      )
    }
  }
}
