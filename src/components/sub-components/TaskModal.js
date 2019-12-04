import React from 'react'
import { Modal, Button, Form, Col, Row, Accordion, ListGroup, useAccordionToggle } from 'react-bootstrap'

function CustomToggle({ children, eventKey, color, comp }) {
  const changeContent = useAccordionToggle(eventKey, function(comp, eventKey){
    comp.setState({
      activeAccKey: eventKey
    })
  })

  return (
    <button
      type="button"
      style={{ backgroundColor: color, color: '#fff', border: 0 }}
      onClick={() => changeContent(comp)}
    >
      {children}
    </button>
  )
}

export default class TaskModal extends React.Component {

  render(){
    return(
      <Modal show={this.props.show}>
        <Modal.Header>
          <div className='float-left' style={{color: "black"}}>
            {this.props.task.title + "asd"}
          </div>
          <div className='float-right' onClick={() => this.props.closeModal()}>
            <i className="fa fa-fw fa-times-circle" style={{ fontSize: '1.5em'}} />
          </div>
        </Modal.Header>
        <Modal.Body>
          <Accordion>
          {
            this.props.checklists.map(checklist => {
              return(
            <div key={checklist.id}>
              <Accordion.Toggle eventkey={checklist.id}>
                  {checklist.title}
              </Accordion.Toggle>
            <Accordion.Collapse eventkey={checklist.id}>
              <div>
                {checklist.items.map(item => {
                  return(
                    <ListGroup.Item key={item.id}>
                      <div className='float-left'>
                        {item.text}
                      </div>
                      <br />
                      <div className='float-right' onClick={console.log(item.id + ' ' + checklist.id)}>
                        {item.is_completed ? <i className="fa fa-fw fa-check" style={{ fontSize: '1.5em', color: 'silver'}} /> : <i className="fa fa-fw fa-green" style={{ fontSize: '1.5em', color: 'green'}} />}
                      </div>
                    </ListGroup.Item>
                  )
                })}
                </div>
              </Accordion.Collapse>
            </div>
              )
          })
        }
        </Accordion>
      </Modal.Body>
    </Modal>
    )
  }
}
