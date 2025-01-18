import React from "react";
import { Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="danger" variant="dark" className="py-3">
      <Navbar.Brand className="ps-5">File Processor</Navbar.Brand>
    </Navbar>
  );
};

export default NavbarComponent;
