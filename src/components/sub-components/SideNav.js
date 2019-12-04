import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import DashBoard from '../main-components/DashBoard.js'
import Projects from '../main-components/Projects.js'
import Tasks from '../main-components/Tasks.js'
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom'
import ProjectService from '../../services/ProjectService.js'
import TaskService from '../../services/TaskService.js'


export default class SideNavPage extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
      allTasks: [],
    }
    this.projectService = new ProjectService(this)
    this.taskService = new TaskService(this)
  }

  componentDidMount() {
    this.projectService.fetchProjects(this.props.authProps.loggedInUserId)
  }

  handleTaskSubmit = obj => this.projectService.postTask(obj)
  isActive = (location, pathName) => location.pathname.includes(pathName) ? true : false

  render() {
    const { authProps } = this.props
    return (
      <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              style={{ position: 'fixed' }}
              onSelect={(selected) => {
                const to = '/' + selected
                if (location.pathname !== to) {
                  history.push(to)
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav >
                <NavItem eventKey="dashboard" active={this.isActive(location, '/dashboard')}>
                  <NavIcon >
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    DashBoard
                  </NavText>
                </NavItem>
                <NavItem eventKey="projects/1" active={this.isActive(location, '/projects')}>
                  <NavIcon>
                    <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
                  </NavIcon>
                  <NavText>
                    Projects
                  </NavText>
                </NavItem>
                <NavItem eventKey="tasks" active={this.isActive(location, '/tasks')}>
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
              <Route path="/dashboard" exact component={props => <DashBoard taskService={this.taskService} projects={this.state.projects} authProps={authProps} />} />
              <Route path="/projects/:id" component={props => <Projects project={this.state.projects.find(project => project.id === parseInt(useParams().id))} handleTaskSubmit={this.handleTaskSubmit} authProps={authProps} />} />
              <Route path="/tasks" component={props => <Tasks tasks={this.state.allTasks} projects={this.state.projects} handleTaskSubmit={this.handleTaskSubmit} authProps={authProps} />} />
            </main>
          </React.Fragment>
        )}
        />
      </Router>
    )
  }
}
