import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import LogoutBtn from "../Logout/LogoutBtn";
 
export default function Header({isLogged, setIsLogged}){
    const navigate = useNavigate();

    function handleLogout () {
        setIsLogged(false);
        navigate("/login");
       }; 
    return (
        <> 
    <Navbar expand="lg" className="navbar navbar-primary bg-primary">
      <Container>
        <Navbar.Brand>Todo-List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
             {isLogged && (
             <Nav className="ms-auto d-flex align-items-center">
                <LogoutBtn handleLogout={handleLogout}/>
           </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
        </>
    );
}