import React from 'react';
import {Container, Col, Row, Card, ListGroup} from 'react-bootstrap/';

export default class Projects extends React.Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
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
          <Card.Body style={{border: '1px solid #d3d3d3'}}>
            <Row>
            <Col sm={1.5}>
              <ListGroup.Item style={{marginRight: 5}}>Tags:</ListGroup.Item>
            </Col>
              <ListGroup>
                <ListGroup.Item style={{backgroundColor: '#d4c1c2', color: "#fff", border: '0.5px solid #d4c1c2', fontWeight: 'bold'}}>asdasd</ListGroup.Item>
              </ListGroup>
            </Row>
          </Card.Body>
        </Card>
        <br />
          <Card>
            <Card.Header style={{backgroundColor: '#990033', color: '#fff'}}>
              Notes
            </Card.Header>
            <Card.Body>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
            </Card.Body>
          </Card>
        <Row>
          <Col sm={3}>
            <br />
            <Card>
              <Card.Header style={{backgroundColor: '#3c2359', color: '#fff'}}>
                Timer
              </Card.Header>
              <Card.Body>
                <h1>00:04:56</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={9}>
            <br />
            <Card>
              <Card.Header style={{backgroundColor: '#09224f', color: '#fff'}}>
                Useful Links
              </Card.Header>
              <Card.Body>
                <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
                <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Vestibulum at eros</ListGroup.Item>
                <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col sm={5}>
        <Card>
          <Card.Header style={{ backgroundColor: '#0033CC', color: "#fff" }}>
            Tasks
          </Card.Header>
          <Card.Body>
            <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
          </Card.Body>
        </Card>
        <br />
          <Card>
            <Card.Header style={{ backgroundColor: '#669900', color: "#fff" }}>
              Completed Tasks
            </Card.Header>
            <Card.Body>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Vestibulum at eros</ListGroup.Item>
              <ListGroup.Item style={{border: '1px solid #d3d3d3'}}>Cras justo odio</ListGroup.Item>
            </Card.Body>
          </Card>
      </Col>
    </Row>
      </Container>
    )
  }
}
