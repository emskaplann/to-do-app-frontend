import React, { Component } from 'react';
import './App.css';
import SideNavPage from './components/sub-components/SideNav.js';
import Navbar from 'react-bootstrap/Navbar';
import LoginPage from './components/main-components/LoginPage';

class App extends Component {
  state = {
    token: null,
    loggedInUserId: null,
  }

  componentDidMount() {
    this.setState({
      token: localStorage.token,
      loggedInUserId: localStorage.userId
    })
  }

  renderConditional = () => {
    if (this.state.token) {
      return (
        <div>
          <Navbar variant="dark" style={{ backgroundColor: '#db3d44' }}>
            <Navbar.Brand href="#home">
              <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 60 }} />
              {' '}
              ToDo App
              </Navbar.Brand>
          </Navbar>
          <div style={{ marginLeft: 75, marginTop: 25 }}>
            <SideNavPage authProps={this.state} />
          </div>
        </div>
      )
    } else {
      return <LoginPage parent={this} />
    }
  }

  render() {
    return this.renderConditional()
  }
}

export default App;


