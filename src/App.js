import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNavPage from './components/sub-components/SideNav.js';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
<div>
    <Navbar  variant="dark" style={{backgroundColor: '#db3d44'}}>
    <Navbar.Brand href="#home">
      <i className="fa fa-fw fa-check-square-o" style={{ fontSize: '1em', marginLeft: 60 }} />
      {' '}
      ToDo App
    </Navbar.Brand>
  </Navbar>
  <div style={{marginLeft: 75, marginTop: 25}}>
    <SideNavPage />
  </div>
</div>

  );
}

export default App;
