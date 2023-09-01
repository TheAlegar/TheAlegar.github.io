import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbars.css"


const Navbars = () => {
    return(
        <Navbar className='color-nav' variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <NavDropdown title="Works" id="basic-nav-dropdown">
                <NavDropdown.Item href="clients">Clients</NavDropdown.Item>
                <NavDropdown.Item href="shows">Shows</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="media">Media</NavDropdown.Item>
                <NavDropdown.Item href="extras">Extra</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navbars