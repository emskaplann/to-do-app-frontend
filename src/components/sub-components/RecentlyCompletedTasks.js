import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

const RecentlyCompletedTasks = ({ tasks }) => {
  let todaysDate = new Date()
  todaysDate.setDate(todaysDate.getDate() - 7)
  const completed_tasks = tasks.filter(task => task.is_completed && new Date(task.deadline).valueOf() > todaysDate.setHours(0, 0, 0, 0).valueOf())
  return (
    <Card style={{ width: '350px', maxWidth: '100%' }}>
      <Card.Header style={{ backgroundColor: '#669900', color: "#fff" }}>
        Recently Completed Tasks <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 5 }} />
      </Card.Header>
      {
        completed_tasks.map(task =>
          <ListGroup.Item key={`task-item-${task.id}`}>task.title</ListGroup.Item>
        )
      }
    </Card>
  );
}

export default RecentlyCompletedTasks;
