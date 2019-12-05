import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import SideNavPage from './components/sub-components/SideNav.js';
import LoginPage from './components/main-components/LoginPage';
import DashBoard from './components/main-components/DashBoard.js'
import Projects from './components/main-components/Projects.js'
import Tasks from './components/main-components/Tasks.js'
import { Route, useParams, Switch } from 'react-router-dom'
import ProjectService from './services/ProjectService.js'
import TaskService from './services/TaskService.js'
import './App.css';
import { MainViewRenderProps } from './components/main-components/MainViewRenderProps.js';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      loggedInUserId: null,
    }
  }

  authProps = () => ({ token: this.state.token, loggedInUserId: this.state.loggedInUserId })

  componentDidMount() {
    this.setState({
      token: localStorage.token,
      loggedInUserId: localStorage.userId
    })
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  showSideNavWithMain = ({ location, history }) => (
    <SideNavPage location={location} history={history}>
      <main style={{ marginLeft: 75, marginTop: 25 }}>
        <Switch>
          <Route path="/dashboard" exact component={props => <MainViewRenderProps children={DashBoard} authProps={this.authProps()} />} />
          <Route path="/projects/:id" component={props => <MainViewRenderProps children={Projects} id={useParams().id} authProps={this.authProps()} />} />
          {/* <Route path="/tasks" component={props => <MainViewRenderProps children={Tasks} authProps={this.authProps()} />} /> */}
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
        {this.state.token ?
          <Navbar.Collapse className="justify-content-end" onClick={() => this.logout()} >
            <Button> Logout </Button>
          </Navbar.Collapse>
          : null
        }

      </Navbar>
      {this.state.token ? this.showSideNavWithMain(this.props) : <LoginPage parent={this} />}
    </>
  }
}

export default App;


