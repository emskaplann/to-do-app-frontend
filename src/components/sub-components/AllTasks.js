import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import TaskModal from './TaskModal.js'
import ChecklistService from '../../services/ChecklistService.js'
import ItemService from '../../services/ItemService.js';


class AllTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalHidden: true,
      task: { id: 1 },
      checklists: [],
    }
    this.ChecklistService = new ChecklistService(this)
    this.itemService = new ItemService(this)
  }

  closeModal = () => this.setState({ isModalHidden: true })
  updateChecklistsWith = (checklist) => {
    this.setState({
      checklists: this.state.checklists.map(list => list.id === checklist.id ? checklist : list)
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state) {
      return true
    }
    return false
  }

  openModal = (task) => {
    this.ChecklistService.fetchChecklists(task.id)
    this.setState({ isModalHidden: false, task: task })
  }

  render() {
    const { title, tasks, openModal, style } = this.props
    return (
      <Card className='mb-2' >
        <TaskModal itemService={this.itemService} checklistService={this.ChecklistService} authProps={this.props.authProps} task={this.state.task} show={!this.state.isModalHidden} checklists={this.state.checklists} closeModal={this.closeModal} />
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

// style={{ width: '850px' }}
