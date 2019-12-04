import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import TaskModal from './TaskModal.js'
import ChecklistService from '../../services/ChecklistService.js'


class AllTasks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalHidden: true,
      task: {id: 1},
      checklists: [],
    }
    this.checklistService = new ChecklistService(this)
  }


  closeModal = () => this.setState({isModalHidden: true})

  shouldComponentUpdate(nextProps, nextState){
    if(nextState !== this.state){
      return true
    }
    return false
  }

  openModal = (task) => {
    this.checklistService.fetchChecklists(task.id)
    this.setState({isModalHidden: false, task: task})
  }

  render(){
    const { title, tasks, openModal, style } = this.props
    return(
      <Card className='mb-2'>
        <TaskModal task={this.state.task} show={!this.state.isModalHidden} checklists={this.state.checklists} closeModal={this.closeModal}/>
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
            <div key={`task-item${task.id}`}>
              <ListGroup.Item key={`task-item-${task.id}`} onClick={() => this.openModal(task)}>{task.title}</ListGroup.Item>
            </div>
          )
        }
      </Card>
    )
  }
}

export default AllTasks;
