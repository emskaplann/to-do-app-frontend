import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
const UpcomingTasks = ({ tasks }) => {
  const todaysDate = new Date().setHours(0, 0, 0, 0)
  const upcomingTasks = tasks.filter(task => new Date(task.deadline).valueOf() <= todaysDate.valueOf())
  console.log(upcomingTasks)
  return (
    <div>
      <Card style={{ width: '850px', maxWidth: '100%' }}>
        <Card.Header style={{ backgroundColor: '#0033CC', color: "#fff" }}>
          Upcoming Tasks <i className="fa fa-fw fa-caret-up" style={{ fontSize: '1em', marginLeft: 5 }} />
        </Card.Header>
        {upcomingTasks.map(task => <ListGroup.Item className='d-flex' key={`list-group-item-${task.id}`}>{task.title}<span className='flex-fill text-right'>Due today!</span></ListGroup.Item>)}
      </Card>
    </div>
  )
}

export default UpcomingTasks
