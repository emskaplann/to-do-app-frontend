import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const getSpanText = (text) => {
  if (text === 'Due Today') {
    return <span className='flex-fill text-right'>{text}</span>
  }
  return <span className='flex-fill text-right'><i style={{ color: "red" }}>{text}</i></span>
}

const UpcomingTasks = ({ tasks, dateFromState }) => {
  // console.log(dateFromState)
  // console.log(dateFromState.setHours(0, 0, 0, 0))
  // const todaysDate = new Date().setHours(0, 0, 0, 0)
  let upcomingTasks = tasks.filter(task => new Date(task.deadline).valueOf() <= dateFromState.setHours(0, 0, 0, 0).valueOf())
  upcomingTasks = upcomingTasks.map(task => {
    console.log(new Date(task.deadline))
    console.log(dateFromState)
    task['spanText'] = new Date(task.deadline).setHours(0, 0, 0, 0).valueOf() === dateFromState.setHours(0, 0, 0, 0).valueOf() ? 'Due Today' : 'Past Due'
    return task
  })
  console.log(upcomingTasks)
  return (
    <div>
      <Card style={{ width: '850px', maxWidth: '100%' }}>
        <Card.Header style={{ backgroundColor: '#0033CC', color: "#fff" }}>
          Upcoming Tasks <i className="fa fa-fw fa-caret-up" style={{ fontSize: '1em', marginLeft: 5 }} />
        </Card.Header>
        {upcomingTasks.map(task => <ListGroup.Item className='d-flex' key={`list-group-item-${task.id}`}>{task.title}{getSpanText(task.spanText)}</ListGroup.Item>)}
      </Card>
    </div>
  )
}

export default UpcomingTasks
