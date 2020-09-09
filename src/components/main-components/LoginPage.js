import React, { useState } from "react";
import { Form, Container, Button, Card, Col, Row } from 'react-bootstrap'
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

const handleTestLogin = (parent) => {
  logUserIn('test_account1234', '123456', parent)
}

const LoginPage = ({ parent, state }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signup, setSignup] = useState(false)
  // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const errors = state.logErrors
  if(localStorage.token !== "" && localStorage.token !== undefined && localStorage.token !== "undefined" && localStorage.isF31 !== "true"){
    return <Redirect to="/" />
  } else {
      return (
        <Container className='d-flex justify-content-center flex-column h-100'>
          <Row style={{justifyContent: 'center'}}>
            <Col sm={4} md={6} lg={6}>
              <Card style={{margin: 'auto', padding: '20px', marginTop: '50px'}}>
                <Header as='h4' style={{textAlign: 'center', marginTop: 5}}>
                  <Button variant='primary' onClick={() => handleTestLogin(parent)} style={{backgroundColor: '#db3d44', borderColor: '#db3d44'}}>Log in with a Test Account</Button>
                </Header>
              </Card>
            </Col>
          </Row>
          <Row style={{justifyContent: 'center'}}>
            <Col sm={4} md={6} lg={6}>
              <Card style={{margin: 'auto', padding: '20px', marginTop: '30px'}}>
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
                <div className="w-50 d-flex align-self-center justify-content-end" >
                  <Button size='sm' style={{backgroundColor: '#db3d44', borderColor: '#db3d44'}} onClick={e => handleClick(signup, username, password, parent)} variant="primary">
                    {!signup ? "Sign in!" : "Create Account!"}
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      )
    }
}

export default LoginPage;
