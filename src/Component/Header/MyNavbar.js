import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaSearch} from 'react-icons/fa';


const MyNavbar = () =>{
    return (
    <Container fluid='md'>
        <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand as={Link} to="/dashboard" className='home'>Quiz<span className='span1'>App </span></Navbar.Brand>
        <Navbar.Toggle className='shadow-none' aria-controls="basic-navbar-nav" />
      </Container>
      
      <Container>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-end">
            <Nav.Link as={Link} to="/dashboard" className='active text-success'>Dashboard</Nav.Link>
            <Nav.Link as={Link}  className='list-item text-white' to="/">Sign up</Nav.Link>
            {/* <Nav.Link as={Link}  className='list-item text-white' to="login">Login</Nav.Link> */}
        
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </Container>
    )
}
export default MyNavbar;