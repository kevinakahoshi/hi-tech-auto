import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Header = ({ siteTitle }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar
        className = "shadow-lg"
        color="white"
        light
        expand="md">
          <NavbarBrand>
            <Link
              to="/">
              {siteTitle}
            </Link>
          </NavbarBrand>
          <NavbarToggler
            onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            navbar>
            <Nav
              className="ml-auto"
              navbar>
              <Link
                to="/about/">
                  <NavItem>
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
