import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { MdScanner } from "react-icons/md";
import InputGroup from 'react-bootstrap/InputGroup';

function Nav1() {
  return (
    <Navbar
      className="py-3"
      style={{ backgroundColor:"#000053", color: "white" }}
    >
      <Navbar.Brand
        href="#home"
        className="fw-bold"
        style={{ color: "white", marginLeft:'100px',fontSize:'30px'}}
      >
        Image Analysis
      </Navbar.Brand>

      <Form className="d-flex mx-auto align-items-center">

        <InputGroup.Text style={{ background: 'white', border: 'none', borderRadius: '25px 0 0 25px' }}>
            <FaSearch size={18} style={{ color: 'gray' }} />
          </InputGroup.Text>    
        <Form.Control
          type="text"
          placeholder="Enter the Image to Search"
          className="me-1 rounded-pill"
          style={{ width: "500px" }}
        />
        <InputGroup.Text style={{ background: 'white', border: 'none', cursor: 'pointer', borderRadius: '0 25px 25px 0' }}>
            <MdScanner size={25} style={{ color: 'black' }} />
          </InputGroup.Text>
      </Form>

      <Nav style={{marginRight:'50px'}}>
        <Button className="me-3">Login</Button> 
        <Button>Submit an Image</Button>
      </Nav>
    </Navbar>
  );
}

export default Nav1;
