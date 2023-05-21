import '../HomePage/home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from "../../redux/slice/homeDataSlice"
const HomeData = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const data = useSelector((state) => state.homedata.data)
   useEffect(() => {
      dispatch(fetchHomeData());
   }, [dispatch]);

   const Logout = () => {
      window.sessionStorage.removeItem("token")
      navigate('/')
   }

   // console.log(Object.keys(data))
   return (
      <div className="homepage">
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
               <Navbar.Brand href="#home" >BlogApp</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavLink to="/addnew" style={{ color: "white", textDecoration: "none", marginTop: "5%" }}
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
                        <NavDropdown.Item href="#" onClick={Logout}>
                           Logout
                        </NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <div className='m-auto' style={{ width: "30%" }}>
            {data.map((items, i) => {
               return (
                  <div key={i} style={{ boxShadow: "2px 2px 2px 2px #cccc" }} className='m-3 p-3'>
                     <h3>Title:- {items.title}</h3>
                     <p><b>Desc:-</b> {items.description}</p>
                      {/* <p><b>Image_URL:-</b>{items.file}</p> */}
                     <img src={items.file} alt="error" width="90%" />
                  </div>
               )
            })} 
         </div>
      </div>
   )
}
export default HomeData