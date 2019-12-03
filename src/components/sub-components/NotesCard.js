import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap/'
import NoteService from '../../services/NoteService';

class NotesCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this.noteService = new NoteService(this)
  }

  componentDidMount() {
    console.log(this.props.project);

    this.noteService.fetchNotesForProject(this.props.project.id)
  }

  render() {
    const { project, className } = this.props
    return (
      <Card className={className}>
        <Card.Header style={{ backgroundColor: '#990033', color: '#fff' }}>
          Notes <i className="fa fa-fw fa-pencil-square-o" style={{ fontSize: '1em', marginLeft: 5 }} />
        </Card.Header>
        <Card.Body>
          {this.state.notes.map(note => <ListGroup.Item key={`note-item-${note.id}`} style={{ border: '1px solid #d3d3d3' }}>{note.text}</ListGroup.Item>)}
        </Card.Body>
      </Card>
    )
  }

}

export default NotesCard