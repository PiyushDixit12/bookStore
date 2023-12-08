import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
    return (
        <Navbar expand="lg" variant='dark' className=" bg-dark">
            <Container fluid>
                <Navbar.Brand href="#">Book-store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                    </Nav>
                    <Button variant="outline-primary">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;