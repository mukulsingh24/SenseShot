import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Login(){
    return(
    <div className="d-flex vh-80 justify-content-center align-items-center" style={{paddingTop:'8rem'}}>
    <Form className="rounded p-3" style={{border:'1px solid black', background: '#f8f8f8'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <div  className="text-center">
      <Button className="rounded" variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div> 
    )
}

export default Login
