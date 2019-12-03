import React from 'react'
import {  Card } from 'react-bootstrap/'
const ProjectTitleComponent = ({ project, className }) => {
  return (
    <Card className={className}>
      <Card.Header style={{ backgroundColor: '#0099FF', color: "#fff" }}>
        {project.name}<i className="fa fa-fw fa-square" style={{ fontSize: '1em', marginLeft: 5 }} />
      </Card.Header>
      <Card.Body>
        {project.description}
      </Card.Body>
    </Card>
  )
}

export default ProjectTitleComponent
