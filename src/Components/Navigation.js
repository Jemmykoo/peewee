import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="secondary" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/page1">Page 1</Nav.Link>
          <Nav.Link href="/page2">Page 2</Nav.Link>
          <Nav.Link href="/page3">Page 3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navigation;
