import React from 'react'
import { Modal } from 'react-bootstrap'
import Checklist from './Checklist.js'

export default class TaskModal extends React.Component {

  render(){
    return(
      <Modal show={this.props.show}>
        <Modal.Header>
          <div className='float-left' style={{color: "black"}}>
            {this.props.task.title}
          </div>
          <div className='float-right' onClick={() => this.props.closeModal()}>
            <i className="fa fa-fw fa-times-circle" style={{ fontSize: '1.5em'}} />
          </div>
        </Modal.Header>
          <Modal.Body>
            { this.props.checklists.map(checklist => <Checklist checklist={checklist} key={checklist.id} />) }
          </Modal.Body>
      </Modal>
    )
  }
}
