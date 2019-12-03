import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import DashBoard from '../main-components/DashBoard.js'
import Projects from '../main-components/Projects.js'
import Tasks from '../main-components/Tasks.js'
import {BrowserRouter as Router, Route, useParams} from 'react-router-dom'
import ProjectService from '../../services/ProjectService.js'


export default class SideNavPage extends React.Component {
  constructor(){
    super()
    this.state = {
        projects: [],
    }
    this.projectService = new ProjectService(this)
  }

  componentDidMount() {
    this.projectService.fetchProjects(1)
  }

  render(){
    return(
      <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
              <SideNav
                  style={{position: 'fixed'}}
                  onSelect={(selected) => {
                      const to = '/' + selected
                      if (location.pathname !== to) {
                          history.push(to)
                      }
                  }}
              >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="dashboard">
                      <NavItem eventKey="dashboard">
                          <NavIcon>
                              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              DashBoard
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="projects">
                          <NavIcon>
                              <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Projects
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="tasks">
                          <NavIcon>
                              <i className="fa fa-fw fa-tasks" style={{ fontSize: '1.75em' }} />
                          </NavIcon>
                          <NavText>
                              Tasks
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
              </SideNav>
              <main>
                  <Route path="/dashboard" exact component={props => <DashBoard projects={this.state.projects}/>} />
                  <Route path="/projects/:id" component={props => <Projects project={this.state.projects.find(project => project.id === parseInt(useParams().id))}/>} />
                  <Route path="/tasks" component={props => <Tasks />} />
              </main>
          </React.Fragment>
      )}
      />
  </Router>
    )
  }
}
