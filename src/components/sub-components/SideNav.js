import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'


const isActive = (location, pathName) => location.pathname === pathName ? true : false

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
        <SideNav.Nav defaultactivekey='/'>
          <NavItem eventKey="/" active={isActive(location, '/')}>
            <NavIcon >
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              DashBoard
                  </NavText>
          </NavItem>
          <NavItem eventKey={`/projects/${firstProjectId}`} active={isActive(location, `/projects/${firstProjectId}`)}>
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
