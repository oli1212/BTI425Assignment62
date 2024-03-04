import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNav() {
    const router = useRouter();
    const [searchField, setSearchField] = useState("");

    function submitForm(e) {
        e.preventDefault();
        router.push(`/artwork?title=true&q=${searchField}`)
    }

    function changeForm(e) {
        setSearchField(e.target.value);
    }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Oscar Li</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-dark">
            <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced Search</Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={submitForm}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchField}
              onChange={changeForm}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container><br /><br />
    </Navbar>
  );
}
