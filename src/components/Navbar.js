import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = ({search}) => {
    const onsearch = (word) => {
        search(word);
    }
    return(
       <div className="nav w-100" >
        <Container >
         <Row className="p-3">
                <Col xs="2" lg="1">
                   <h2 className="logo">LOGO</h2>
                </Col>
                <Col xs="10" lg="11" className=" search ">
                    <div className="w-75 d-flex align-items-center ms-auto">
                    <i className="fa-solid fa-magnifying-glass fs-3"></i>
                        <input onChange={(e) => onsearch(e.target.value)} type="text" className="form-control ms-3" placeholder="Search"></input>
                    </div>
                </Col>
            </Row>
        </Container>
       </div>
          );
        }
        
       
export default NavBar;