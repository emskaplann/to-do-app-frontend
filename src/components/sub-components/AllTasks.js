import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'

const AllTasks = ({ title, tasks, openModal, style }) => {
  return (
    <Card className='mb-2'>
      <Card.Header style={style}>
        <div className="float-left">
          {title} <i className="fa fa-fw fa-th" style={{ fontSize: '1em', marginLeft: 5 }} />
        </div>
        {title !== "Completed Tasks" ?
          <div className="float-right" onClick={openModal}>
            <strong>New</strong><i className="fa fa-fw fa-plus-square" style={{ fontSize: '1em', marginLeft: 5 }} />
          </div>
          : null
        }
      </Card.Header>
      {
        tasks.map(task =>
          <ListGroup.Item key={`task-item-${task.id}`}>{task.title}</ListGroup.Item>
        )
      }
    </Card>
  );
}

export default AllTasks;
//const { title, tasks, openModal, style } = this.props