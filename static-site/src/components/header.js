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
                    <Link
                    to="/">
                      <NavItem>
                        Home
                      </NavItem>
                    </Link>
                  <Link
                    to="/about/">
                      <NavItem
                        className="ml-md-3">
                        About
                      </NavItem>
                  </Link>
                  <Link
                    to="/services/">
                    <NavItem
                      className="ml-md-3">
                        Services
                    </NavItem>
                  </Link>
                  <Link
                    to="/contact/">
                    <NavItem
                      className="ml-md-3">
                        Contact
                    </NavItem>
                  </Link>
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
