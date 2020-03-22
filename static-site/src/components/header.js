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
      <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link
              to="/">
              {siteTitle}
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  to="/about/">About</Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/services/"
                  className="ml-3">Services</Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/contact/"
                  className="ml-3">Contact</Link>
              </NavItem>
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
