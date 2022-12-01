import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const cartLength = useSelector((state) => state.cart.data.length);
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>Jobs Search Engine</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Button
          variant="outline-success"
          onClick={() => navigate("/favorites")}
        >
          {cartLength > 0 ? (
            <span className="mr-2">
              View <b>{cartLength} </b>favorite companies <HeartFill />
            </span>
          ) : (
            "No companies selected"
          )}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
