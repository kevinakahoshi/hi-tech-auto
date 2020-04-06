import { Link } from "gatsby";
import PropTypes from "prop-types";
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

const Header = ({ siteTitle }) => {

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
                className="nav-logo"
                to="/">
                {siteTitle}
              </Link>
              <NavbarToggler
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
                      className="nav-links d-block"
                      to="/">
                          Home
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      className="nav-links d-block"
                      to="/about/">
                          About
                    </Link>
                  </NavItem>
                    <NavItem
                      className="my-2 my-md-0 ml-md-3">
                      <Link
                        className="nav-links d-block"
                        to="/services/">
                          Services
                      </Link>
                    </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      className="nav-links d-block"
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
