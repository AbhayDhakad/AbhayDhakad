import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/series">Series</Nav.Link>
             <Nav.Link href="/action">Action</Nav.Link>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.imdb.com/list/ls027328830/">Action</NavDropdown.Item>
              <NavDropdown.Item href="https://www.imdb.com/search/title/?genres=Adventure&ref_=nv_sr_srsg_0">
                Adventure
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.imdb.com/search/title/?genres=Comedy&ref_=nv_sr_srsg_1">Comedy</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;