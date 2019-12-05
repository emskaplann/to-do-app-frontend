import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import SideNavPage from './components/sub-components/SideNav.js';
import LoginPage from './components/main-components/LoginPage';
import DashBoard from './components/main-components/DashBoard.js'
import Projects from './components/main-components/Projects.js'
import Tasks from './components/main-components/Tasks.js'
import { Route, useParams, Switch } from 'react-router-dom'
import ProjectService from './services/ProjectService.js'
import TaskService from './services/TaskService.js'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      loggedInUserId: null,
      projects: [],
      allTasks: [],
    }
    this.projectService = new ProjectService(this)
    this.taskService = new TaskService(this)
  }

  handleTaskSubmit = obj => this.projectService.postTask(obj)

  authProps = () => ({ token: this.state.token, loggedInUserId: this.state.loggedInUserId })

  componentDidMount() {
    this.setState({
      token: localStorage.token,
      loggedInUserId: localStorage.userId
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.loggedInUserId !== this.state.loggedInUserId && this.state.loggedInUserId) {
      this.projectService.fetchProjects(this.state.loggedInUserId)
    }
  }

  findProjectWith = (id) => this.state.projects.find(project => project.id === parseInt(id))

  showSideNavWithMain = ({ location, history }) => (
    <SideNavPage location={location} history={history}>
      <main style={{ marginLeft: 75, marginTop: 25 }}>
        <Switch>
          <Route path="/dashboard" exact component={props => <DashBoard projectService={this.projectService} taskService={this.taskService} projects={this.state.projects} authProps={this.authProps()} />} />
          <Route path="/projects/:id" component={props => <Projects project={this.findProjectWith(useParams().id)} handleTaskSubmit={this.handleTaskSubmit} authProps={this.authProps()} />} />
          <Route path="/tasks" component={props => <Tasks tasks={this.state.allTasks} projects={this.state.projects} handleTaskSubmit={this.handleTaskSubmit} authProps={this.authProps()} />} />
        </Switch>
      </main>
    </SideNavPage>
  )

  render() {
    return <>
      <Navbar variant="dark" style={{ backgroundColor: '#db3d44' }}>
        <Navbar.Brand href="#home">
          <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 60 }} />
          <span className='ml-2'>ToDo App</span>
        </Navbar.Brand>
      </Navbar>
      {this.state.token ? this.showSideNavWithMain(this.props) : <LoginPage parent={this} />}
    </>
  }
}

export default App;


