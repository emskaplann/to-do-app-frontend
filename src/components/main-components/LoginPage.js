import React, { useState } from "react";
import { Form, Container, Button, Card } from 'react-bootstrap'
import UserService from '../../services/UserService'
import { Redirect } from 'react-router-dom'
import { Header, Message } from 'semantic-ui-react'

const logUserIn = (username, password, parent) => {
  const userService = new UserService(parent)
  userService.login({ username, password })
}

const handleClick = (signup, username, password, parent) => {
  if (signup) {
    const userService = new UserService(parent)
    userService.createUser({ username, password })
  } else {
    logUserIn(username, password, parent)
  }
}

const LoginPage = ({ parent, state }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignup] = useState(false)
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const errors = state.logErrors
  if(localStorage.token !== "" && localStorage.token !== undefined && localStorage.token !== "undefined"){
    return <Redirect to="/to-do-app-frontend/dashboard" />
  } else {
      return (
        <Container className='d-flex justify-content-center flex-column  h-100'>
          <Card style={{margin: 'auto', width: isMobile ? '75%' : '50%', padding: '20px', marginTop: '50px'}}>
            <Header as='h4' style={{textAlign: 'center', marginTop: 5}}>
              {signup ? 'Sign Up' : 'Sign In'} or <span onClick={() => setSignup(!signup)}><u>{!signup ? 'Sign Up!' : 'Sign In!'}</u></span>
            </Header>
            {errors.length !== 0 && !state.loading ? <Message color='red' list={errors} header='oops, something went wrong!'/> : null }
            <span style={{textAlign: 'center'}}>{state.loading ? "Loading...": null}</span>
            <div className='d-flex flex-row w-100 h-100  flex-fill justify-content-center '>
              <Form >
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>
              </Form>
            </div>
            <div className="w-50 d-flex align-self-center justify-content-center" >
              <Button size='sm' style={{backgroundColor: '#db3d44', borderColor: '#db3d44'}} onClick={e => handleClick(signup, username, password, parent)} variant="primary">
                {!signup ? "Sign in!" : "Create Account!"}
              </Button>
            </div>
          </Card>
        </Container>
      )
    }
}

export default LoginPage;
