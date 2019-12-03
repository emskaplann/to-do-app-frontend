import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

const RecentlyCompletedTasks = ({ tasks, openModal }) => {

  return (
    <Card style={{ width: '850px', maxWidth: '100%' }}>
      <Card.Header style={{ backgroundColor: '#4d1411', color: "#fff" }}>
      <div className="float-left">
          All Tasks <i className="fa fa-fw fa-th" style={{ fontSize: '1em', marginLeft: 5 }} />
      </div>
      <div className="float-right" onClick={openModal}>
        <strong>New</strong><i className="fa fa-fw fa-plus-square" style={{ fontSize: '1em', marginLeft: 5 }} />
      </div>
      </Card.Header>
      {
        tasks.map(task =>
          <ListGroup.Item key={`task-item-${task.id}`}>{task.title}</ListGroup.Item>
        )
      }
    </Card>
  );
}

export default RecentlyCompletedTasks;
