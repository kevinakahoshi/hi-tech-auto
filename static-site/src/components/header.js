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

import Logo from './logo';

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
                className="link nav-logo d-flex"
                to="/">
                  <Logo />
                  {/* Hi-Tech Aut
                <svg
                  className="bi bi-gear my-auto"
                  width=".8rem"
                  height=".8rem"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 014.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 01-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 011.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 012.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 012.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 011.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 01-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 018.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 001.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 00.52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 00-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 00-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 00-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 00-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 00.52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 001.255-.52l.094-.319z"
                      clipRule="evenodd"/>
                    <path
                      fillRule="evenodd"
                      d="M8 5.754a2.246 2.246 0 100 4.492 2.246 2.246 0 000-4.492zM4.754 8a3.246 3.246 0 116.492 0 3.246 3.246 0 01-6.492 0z"
                      clipRule="evenodd"/>
                </svg> */}
                {/* <svg
                  className="bi bi-gear-fill"
                  width=".75rem" height=".75rem"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z"
                    clipRule="evenodd"/>
                </svg> */}
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
                      className="header-nav-link nav-links d-block"
                      to="/">
                        Home
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      className="header-nav-link nav-links d-block"
                      to="/about/">
                        About
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
                      className="header-nav-link nav-links d-block"
                      to="/services/">
                        Services
                    </Link>
                  </NavItem>
                  <NavItem
                    className="my-2 my-md-0 ml-md-3">
                    <Link
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
