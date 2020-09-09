import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LoginPage from './components/main-components/LoginPage';
import DashBoard from './components/main-components/DashBoard.js'
import Projects from './components/main-components/Projects.js'
import { Route, Link, useParams, Switch } from 'react-router-dom'
import { MainViewRenderProps } from './components/main-components/MainViewRenderProps.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null,
      loggedInUserId: null,
      logErrors: [],
      loading: false,
      projects: []
    }
  }

  authProps = () => ({ token: this.state.token, loggedInUserId: this.state.loggedInUserId })

  componentDidMount() {
    if(localStorage.token !== null && localStorage.token !== "" && localStorage.token !== undefined && localStorage.token !== "undefined" && (localStorage.isF31 == "false" || localStorage.isF31 == undefined)) { //eslint-disable-line
      this.setState({
        token: localStorage.token,
        loggedInUserId: localStorage.userId
      })
    }
  }

  logout = () => {
    localStorage.clear()
    this.setState({
      token: null,
      loggedInUserId: null
    })
  }

  // fetchForFirstProjectId = () => {
  //     fetch(`https://arcane-sands-50858.herokuapp.com/users/${this.state.loggedInUserId}/projects`, {
  //       headers: {
  //         "Authorization": this.state.token
  //       }
  //     }).then(response => {
  //       if (response.status > 199 && response.status < 300) return response.json()
  //       throw response.statusText
  //     }).then(projects => {
  //       this.setState({ projects })
  //     }).catch(reason => console.log(reason))
  // }

  showSideNavWithMain = ({ location, history }) => (
      <main style={{ marginTop: 25 }}>
        <Switch location={location}>
          <Route exact path="/" component={props => <MainViewRenderProps children={DashBoard} authProps={this.authProps()} />} />
          <Route exact path="/projects/:id" component={props => <MainViewRenderProps children={Projects} id={useParams().id} authProps={this.authProps()} />} />
        </Switch>
      </main>
  )

  render() {
    let showDashboardLink = this.props.location.pathname.includes("projects") ? true : false
    return <>
      <Navbar collapseOnSelect variant="dark" style={{ backgroundColor: '#db3d44' }}>
        <Navbar.Brand href="/to-do-app-frontend/">
          <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em' }} />
          <span className='ml-2'>ToDo App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {
        this.state.token ?
          <>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{color: '#fff'}}>
              <Nav>
                {showDashboardLink ? <Link to="/" style={{textDecoration: 'none', color: "#fff"}}><i className="fa fa-fw fa-home" style={{ fontSize: '1em' }} /><strong>Dashboard</strong></Link> : null}
                <span style={{marginLeft: 15}} onClick={() => this.logout()}><strong>Logout</strong><i className="fa fa-fw fa-sign-out" style={{ fontSize: '1em', marginLeft: 5 }} /></span>
              </Nav>
            </Navbar.Collapse>
          </>
          : null
        }
      </Navbar>
      {this.state.token !== null && this.state.token !== "" && this.state.token !== undefined && this.state.token !== "undefined" ? this.showSideNavWithMain(this.props) : <LoginPage parent={this} state={this.state} />}
    </>
  }
}

export default App;
