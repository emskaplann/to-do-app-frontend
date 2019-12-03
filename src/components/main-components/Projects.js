import React from 'react';
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap/';
import TagSerivce from '../../services/TagService';
import TagComponent from '../sub-components/TagComponent';

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
    return (
      <Container fluid>
        <Row>
          <Col sm={7}>
            <Card>
              <Card.Header style={{ backgroundColor: '#0099FF', color: "#fff" }}>
                My Pro
          </Card.Header>
              <Card.Body>
                Desc
          </Card.Body>
              <Card.Body style={{ border: '1px solid #d3d3d3' }}>
                <TagComponent tags={this.state.tags} />
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header style={{ backgroundColor: '#990033', color: '#fff' }}>
                Notes
            </Card.Header>
              <Card.Body>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <Card>
              <Card.Header style={{ backgroundColor: '#0033CC', color: "#fff" }}>
                Tasks
          </Card.Header>
              <Card.Body>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item style={{ border: '1px solid #d3d3d3' }}>Cras justo odio</ListGroup.Item>
              </Card.Body>
            </Card>
            <br />
            <Card>
              <Card.Header style={{ backgroundColor: '#669900', color: "#fff" }}>
                Completed Tasks
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
