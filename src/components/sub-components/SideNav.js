import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import DashBoard from '../main-components/DashBoard.js';
import Projects from '../main-components/Projects.js';
import Tasks from '../main-components/Tasks.js'
import {BrowserRouter as Router,
        Route} from 'react-router-dom';


export default class SideNavPage extends React.Component {
  constructor(){
    super();

    this.state = {

    }
  }
  render(){
    return(
      <Router>
      <Route render={({ location, history }) => (
          <React.Fragment>
              <SideNav
                  onSelect={(selected) => {
                      const to = '/' + selected;
                      if (location.pathname !== to) {
                          history.push(to);
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
                  <Route path="/dashboard" exact component={props => <DashBoard />} />
                  <Route path="/projects" component={props => <Projects />} />
                  <Route path="/tasks" component={props => <Tasks />} />
              </main>
          </React.Fragment>
      )}
      />
  </Router>
    )
  }
}
