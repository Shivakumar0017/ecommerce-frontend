import React from 'react'
import { Col, Container, Form ,Button,Row,Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";
import "./Login.css"
import { useLoginMutation } from "../services/appApi";

function Login() {
    const[email,setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    
    function handleLogin(e){
        e.preventDefault();
        login({ email, password });
    };
  return (
    <Container>
        <Row>
            <Col md={6} className="login__form--container">
                <Form style={{width:"100%"}} onSubmit={handleLogin} >
                    <h1>Login to your account</h1>
                    {isError && <Alert variant="danger">{error.data}</Alert>}
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter Email' value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Password' value={password}  required onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Button type="Submit" disabled={isLoading}>Login</Button>
                    </Form.Group>
                    <p>Dont have an account? <Link to="/signup">Create Account</Link>{""}</p>
                </Form>

            </Col>
            <Col md={6} className="login__image--container"></Col>
        </Row>
    </Container>
  )
}

export default Login