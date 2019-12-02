import React from 'react';
import Container from 'react-bootstrap/Container';
import Calendar from 'react-calendar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


export default class DashBoard extends React.Component {
  constructor(){
    super();
    this.state = {
      date: new Date(),
    }
  }

  onChange = date => this.setState({ date })

  render(){
    return(
      <Container fluid>
        <Row>
          <Col sm={3}>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
          <br />
          <Card style={{ width: '350px', maxWidth: '100%' }}>
              <Card.Header>
                Completed Tasks <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 5}} />
              </Card.Header>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </Card>
          </Col>
          <Col sm={9}>
            <br />
            <Card style={{ width: '850px', maxWidth: '100%' }}>
              <Card.Header>My Project</Card.Header>
              <Card.Body>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
