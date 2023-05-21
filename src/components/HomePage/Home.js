import '../HomePage/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from "../../redux/slice/homeDataSlice"
const HomeData = () => {
   const dispatch = useDispatch()
   const data = useSelector((state) => state.homedata.data)
     console.log(data)
   useEffect(() => {
      dispatch(fetchHomeData());
    
   }, [dispatch]);

   return (
      <div className="bg-dark homepage">
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home" >BlogApp</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavLink to="/addnew"
                     >New Blog</NavLink>
                     <Nav.Link href="#pricing">Pricing</Nav.Link>
                  </Nav>
                  <Nav>
                     <NavDropdown title="Profile" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                           settings
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           Logout
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <div style={{"color":"white"}}>
            {data.map((items, i) => {
               return (
                  <div key={i}>
                  <p>{items.title}</p>
                  <p>{items.file}</p>
                  <p>{items.title}</p>
                  </div>
               )
            })}
         </div>


      </div>
   )
}
export default HomeData