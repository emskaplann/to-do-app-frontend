import React from 'react';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap/';
import TagSerivce from '../../services/TagService';
import TagComponent from '../sub-components/TagComponent';
import ProjectTitleComponent from '../sub-components/ProjectTitleComponent';
import NotesCard from '../sub-components/NotesCard';
import { TaskCard } from '../sub-components/TaskCard';
import { NotesModal } from '../sub-components/NotesModal';

export default class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: []
    }
    this.tagService = new TagSerivce(this)
  }

  componentDidMount() {
    this.tagService.fetchAll()
  }

  render() {
    const { project } = this.props
    if (!project) return null
    return (
      <Container fluid>
        <Row>
          <Col sm={7}>
            <ProjectTitleComponent project={project} className='mb-3' />
            <NotesCard className='mb-3' project={project} openModal={this.openOrCloseModal} />
            <Row>
              <Col sm={3}>
                <br />
                <Card>
                  <Card.Header style={{ backgroundColor: '#3c2359', color: '#fff' }}>
                    Count Down <i className="fa fa-fw fa-clock-o" style={{ fontSize: '1em', marginLeft: 5 }} />
                  </Card.Header>
                  <Card.Body>
                    <h1>00:04:56</h1>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={9}>
                <br />
                <Card>
                  <Card.Header style={{ backgroundColor: '#09224f', color: '#fff' }}>
                    Useful Links <i className="fa fa-fw fa-link" style={{ fontSize: '1em', marginLeft: 5 }} />
                  </Card.Header>
                  <Card.Body>
                    <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Vestibulum at eros</ListGroup.Item>
                    <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm={5}>
            <TaskCard project={project} className='mb-3' />
            <br />
            <Card>
              <Card.Header style={{ backgroundColor: '#669900', color: "#fff" }}>
                Completed Tasks <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 5 }} />
              </Card.Header>
              <Card.Body>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
