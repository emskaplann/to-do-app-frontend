import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'


const isActive = (location, pathName) => location.pathname.includes(pathName) ? true : false

const SideNavPage = ({ location, history, children, firstProjectId }) => {
  return (
    <>
      <SideNav
        style={{ position: 'fixed' }}
        onSelect={(selected) => {
          const to = selected
          if (location.pathname !== to) {
            history.push(to)
          }
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultActiveKey='/to-do-app-frontend/dashboard'>
          <NavItem eventKey="dashboard" active={isActive(location, '/to-do-app-frontend/dashboard')}>
            <NavIcon >
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              DashBoard
                  </NavText>
          </NavItem>
          <NavItem eventKey={`/to-do-app-frontend/projects/${firstProjectId}`} active={isActive(location, '/to-do-app-frontend/projects')}>
            <NavIcon>
              <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Projects
                  </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      {children}
    </>
  )
}

export default SideNavPage
