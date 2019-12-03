import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
const UpcomingTasks = ({ tasks }) => {
  tasks.filter(task => new Date(task.deadline))
  return (
    <div>
      <Card style={{ width: '850px', maxWidth: '100%' }}>
        <Card.Header style={{ backgroundColor: '#0033CC', color: "#fff" }}>
          Upcoming Tasks <i className="fa fa-fw fa-caret-up" style={{ fontSize: '1em', marginLeft: 5 }} />
        </Card.Header>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
      </Card>
    </div>
  )
}

export default UpcomingTasks
