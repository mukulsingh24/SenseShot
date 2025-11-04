import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { MdScanner } from "react-icons/md";
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
function Nav1() {
  return (
    <Navbar
      className="py-3"
      style={{ backgroundColor:"#000053", color: "white" }}
    >
      <Link to='/Home' className="text-decoration-none">
      <Navbar.Brand
        href="#home"
        className="fw-bold"
        style={{ color: "white", marginLeft:'100px',fontSize:'30px'}}
      >
        SenseShot
      </Navbar.Brand>
      </Link>

      <Form className="d-flex mx-auto align-items-center position-relative">

        <InputGroup.Text style={{ position: 'absolute',background: 'white', border: 'none', borderRadius: '25px 0 0 25px' }}>
            <FaSearch size={18} style={{ color: 'gray' }} />
          </InputGroup.Text>    
        <Form.Control
          type="text"
          placeholder="Enter the Image to Search"
          className="me-1 rounded-pill ps-5 pe-5"
          style={{ width: "500px" }}
        />
      </Form>

      <Nav style={{marginRight:'50px'}}>
        <Link to='/Login'>
        <Button className="me-3">Login</Button>
        </Link>
        <Link to='/Submit'>
        <Button>Submit an Image</Button>
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Nav1;
