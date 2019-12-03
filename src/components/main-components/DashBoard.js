import React from 'react';
import Container from 'react-bootstrap/Container';
import Calendar from 'react-calendar';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import NewProjectModal from '../sub-components/NewProjectModal.js'
import ProjectService from '../../services/ProjectService.js'

function CustomToggle({ children, eventKey, color }) {
  const changeContent = useAccordionToggle(eventKey, () =>
    console.log('works!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: color, color: '#fff', border: 0 }}
      onClick={changeContent}
    >
      {children}
    </button>
  );
}

export default class DashBoard extends React.Component {
  constructor(){
    super();
    this.state = {
      userId: 1,
      showNPM: false,
      date: new Date(),
      projects: [],
      inbox: [],
      trash: [],
      upcomingTasks: []
    }
    this.projectService = new ProjectService(this)
  }

  onChange = date => this.setState({ date })

  componentDidMount(){
    this.projectService.fetchProjects(1)
  }

  prosInRows = (pros) => {
    const size = 3
    const arrayOfArrays = []
    for (var i = 0; i < pros.length; i += size) {
      arrayOfArrays.push(pros.slice(i, i + size));
    }
    return arrayOfArrays
  }

  renderRows = () => {
    return this.prosInRows(this.state.projects).map((row, index) => this.renderRow(row, index))
  }

  renderRow = (row, index) => (
    <div className='row mx-auto' key={`row-${index}`} style={{marginTop: 10}}>
      {row.map(project =>
          <Col key={`project-${project.id}`} sm={4}>
            <Card key={`project-${project.id}`}>
              <Card.Header>
               {project.name}
              </Card.Header>
              <Card.Body>
                {project.description}
              </Card.Body>
            </Card>
          </Col>
       )}
    </div>
  )

  openModal = () => (
    this.setState({showNPM: true})
  )

  handleModalClose = () => {
    this.setState({showNPM: false})
  }

  handleProjectSubmit = (obj) => {
    let newObj = {...obj, userId: this.state.userId, isDeleted: false, isCompleted: false}
    this.setState({showNPM: false}, this.projectService.postProject(newObj))
  }

  render(){
    return(
      <Container fluid>
        <NewProjectModal handleProjectSubmit={this.handleProjectSubmit} show={this.state.showNPM} handleModalClose={this.handleModalClose} />
        <Row>
          <Col sm={3}>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          <br />
          <Card style={{ width: '350px', maxWidth: '100%' }}>
              <Card.Header style={{backgroundColor: '#669900', color: "#fff"}}>
                  Recently Completed Tasks <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 5}} />
              </Card.Header>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </Card>
          </Col>
          <Col sm={6}>
            <Card style={{ width: '850px', maxWidth: '100%', marginTop: 5 }}>
              <Card.Header style={{backgroundColor: '#0099FF', color: "#fff"}}>
              <div className='float-left'>
                My Projects <i className="fa fa-fw fa-th-large" style={{ fontSize: '1em', marginLeft: 5}} />
              </div>
              <div className='float-right' onClick={() => this.openModal()}>
                <strong>New</strong><i className="fa fa-fw fa-plus-square" style={{ fontSize: '1em', marginLeft: 5}} />
              </div>
              </Card.Header>
              <Card.Body>
                {this.renderRows()}
              </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '850px', maxWidth: '100%' }}>
              <Card.Header style={{backgroundColor: '#0033CC', color: "#fff"}}>
                Upcoming Tasks <i className="fa fa-fw fa-caret-up" style={{ fontSize: '1em', marginLeft: 5}} />
              </Card.Header>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
            </Card>
          </Col>
          <Col sm={3}>
          <Accordion defaultActiveKey="0">
            <Card style={{ width: '100%', maxWidth: '100%' }}>
              <Card.Header style={{backgroundColor: '#990033', color: '#fff'}}>
                Inbox <i className="fa fa-fw fa-inbox" style={{ fontSize: '1em', marginLeft: 5}} />
              </Card.Header>
                <ListGroup.Item>Inbox !</ListGroup.Item>
              <Card.Header style={{backgroundColor: '#666666', color: '#fff'}}>
                <CustomToggle eventkey="1" color='#666666'>
                  Trash <i className="fa fa-fw fa-trash" style={{ fontSize: '1em', marginLeft: 5}} />
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventkey="1">
                <ListGroup.Item>Trash HERE!</ListGroup.Item>
              </Accordion.Collapse>
                <Card.Header style={{backgroundColor: '#990033', color: '#fff'}}>
                  Upcoming Deadlines <i className="fa fa-fw fa-hourglass-end" style={{ fontSize: '1em', marginLeft: 5}} />
                </Card.Header>
                  <ListGroup.Item>Deadlines 1</ListGroup.Item>
                  <ListGroup.Item>Deadlines 2</ListGroup.Item>
                  <ListGroup.Item>Deadlines 3</ListGroup.Item>
                  <ListGroup.Item>Deadlines 4</ListGroup.Item>
            </Card>
          </Accordion>
          </Col>
        </Row>
      </Container>
    )
  }
}
