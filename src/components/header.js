import { Link } from "gatsby";
import React from "react";
import {
  Container,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Col
} from 'reactstrap';

import Logo from './logo';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header
      className="sticky-top bg-white shadow-lg py-2 py-md-3">
      <Container>
        <Row>
          <Col
            xs={12}>
          <Navbar
            className="p-0"
            color="white"
            light
            expand="md">
              <Link
                aria-label="Hi-Tech Auto Logo"
                className="link nav-logo d-flex"
                to="/">
                  <Logo />
              </Link>
              <NavbarToggler
                className="mobile-pill"
                onClick={toggle} />
              <Collapse
                isOpen={isOpen}
                navbar>
                <Nav
                  className="ml-auto"
                  navbar>
                  <NavItem
                    className="my-2 my-md-0">
                    <Link
                      onClick={() => {
                        if (isOpen) {
                          toggle()
                        }
                      }}
                      className="header-nav-link nav-links d-block"
                      to="/">
                        Home
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      onClick={() => {
                        if (isOpen) {
                          toggle()
                        }
                      }}
                      className="header-nav-link nav-links d-block"
                      to="/about/">
                        About
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      onClick={() => {
                        if (isOpen) {
                          toggle()
                        }
                      }}
                      className="header-nav-link nav-links d-block"
                      to="/services/">
                        Services
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      onClick={() => {
                        if (isOpen) {
                          toggle()
                        }
                      }}
                      className="header-nav-link nav-links d-block"
                      to="/contact/">
                        Contact
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;
