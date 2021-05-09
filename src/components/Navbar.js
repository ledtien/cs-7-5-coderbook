import React from "react";
import { Nav, Form, Navbar, Button, FormControl } from "react-bootstrap";

import { Link } from "react-router-dom";

import logo from "../img/logo.png";

import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar } from "@material-ui/core";

import { useSelector } from "react-redux";

export default function Navbarr() {
  const { auth } = useSelector((state) => state);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="coderbook" width="50px" />
        </Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-5 ">
          <Nav className="mr-auto ml-5">
            <Nav.Link href="#home">
              <HomeIcon fontSize="large" />
            </Nav.Link>
            <Nav.Link href="#home">
              <FlagIcon fontSize="large" />
            </Nav.Link>
            <Nav.Link href="#home">
              <SubscriptionsIcon fontSize="large" />
            </Nav.Link>
            <Nav.Link href="#home">
              <SupervisedUserCircleIcon fontSize="large" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="nav__right">
          <Nav.Link href="#link" className="mr-5 nav__info">
            <Avatar />
            <h6>{auth.email}</h6>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
