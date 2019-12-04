import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const getSpanText = (text, completeTask, task) => {
  if (text === 'Due Today') {
    return <span className='flex-fill text-right'>{text}<i onClick={() => completeTask(task.id)} className="fa fa-fw fa-check" style={{ color: '#d3d3d3' }} /></span>
  }
  return <span className='flex-fill text-right'><i style={{ color: "red" }}>{text}</i><i onClick={() => completeTask(task.id)} className="fa fa-fw fa-check" style={{ fontSize: '1.5em', color: '#d3d3d3'}} /></span>
}

const UpcomingTasks = ({ tasks, dateFromState, completeTask }) => {
  // console.log(dateFromState)
  // console.log(dateFromState.setHours(0, 0, 0, 0))
  // const todaysDate = new Date().setHours(0, 0, 0, 0)
  let upcomingTasks = tasks.filter(task => new Date(task.deadline).valueOf() <= dateFromState.setHours(0, 0, 0, 0).valueOf())
  upcomingTasks = upcomingTasks.map(task => {
    task['spanText'] = new Date(task.deadline).setHours(0, 0, 0, 0).valueOf() === dateFromState.setHours(0, 0, 0, 0).valueOf() ? 'Due Today' : 'Past Due'
    return task
  })
  return (
    <div>
      <Card style={{ width: '900px', maxWidth: '100%' }}>
        <Card.Header style={{ backgroundColor: '#0033CC', color: "#fff" }}>
          Upcoming Tasks <i className="fa fa-fw fa-caret-up" style={{ fontSize: '1em', marginLeft: 5 }} />
        </Card.Header>
        {upcomingTasks.map(task => {
          return (
            <ListGroup.Item className='d-flex' key={`list-group-item-${task.id}`}>
              {task.title}
              {getSpanText(task.spanText, completeTask, task)}
            </ListGroup.Item>)
        }
        )}
      </Card>
    </div>
  )
}

export default UpcomingTasks
