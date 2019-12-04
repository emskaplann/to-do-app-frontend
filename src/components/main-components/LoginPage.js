import React, { useState } from "react";
import { Form, Container, Button } from 'react-bootstrap'
import UserService from '../../services/UserService'

const logUserIn = (username, password, parent) => {
  const userService = new UserService(parent)
  userService.login({ username, password })
}
const LoginPage = ({ parent }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container className='d-flex justify-content-center flex-column  h-100'>
      <div>

      </div>
      <div className='d-flex flex-row w-100 h-100  flex-fill justify-content-center '>
        <Form >
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder="Enter email" value={username} onChange={e => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>
        </Form>
      </div>
      <div className="w-50 d-flex align-self-center justify-content-center" >
        <Button size='sm' onClick={e => logUserIn(username, password, parent)} variant="primary">Login</Button>
      </div>

    </Container>

  )
}

export default LoginPage;