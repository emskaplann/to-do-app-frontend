import React, { useState } from 'react'
import { Card, Button, Row, Col, Form } from 'react-bootstrap/'
import ProjectService from '../../services/ProjectService';

const handleSubmit = (isEditing, name, description, projectService, project) => {
  projectService.updateProject(project.id, { name, description })
  isEditing(false)
}

const ProjectTitleComponent = ({ project, className, projectService }) => {
  const [editing, isEditing] = useState(false)
  const [name, setName] = useState(project.name)
  const [desc, setDesc] = useState(project.desc)
  return (
    <Card className={className + ' d-flex'}>
      <Card.Header style={{ backgroundColor: '#0099FF', color: "#fff" }}>
        <Row>
          <Col sm={10} className='my-auto' >
            {editing ? <Form.Control value={name} placeholder={project.name} onChange={(e) => setName(e.target.value)} /> : project.name /* {project.name}<i className="fa fa-fw fa-square" style={{ fontSize: '1em', marginLeft: 5 }} /> */}
          </Col>
          <Col sm={2} className='text-right'>
            <Button variant='light' onClick={() => !editing ? isEditing(true) : handleSubmit(isEditing, name, desc, projectService, project)}>
              {editing ? 'Done' : 'Edit'}
            </Button>
          </Col>
        </Row>

      </Card.Header>
      <Card.Body>
        {editing ? <Form.Control value={desc} placeholder={project.description} onChange={(e) => setDesc(e.target.value)} /> : project.description}
      </Card.Body>
    </Card>
  )
}

export default ProjectTitleComponent
