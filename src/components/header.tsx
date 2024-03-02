import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <Navbar expand="lg" dark color="dark">
      <Container>
        <Row className=" align-items-center">
          <Col xs="7">
            <NavbarBrand href="/" className="me-auto">
              <StaticImage src="../images/gf_edit.png" alt="Logo" height={35} />
            </NavbarBrand>
          </Col>
          <Col xs="">
            <NavbarToggler onClick={toggleNav} />
          </Col>
          <Col xs="">
            <Collapse isOpen={isNavOpen} navbar>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <Link to="/about" className="nav-link" onClick={toggleNav}>About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact" className="nav-link" onClick={toggleNav}>Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;
