import React from "react";
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/"><strong>Post Manager</strong></Navbar.Brand>
          <Button variant="primary">Check Projects</Button>  
        </Container>
      </Navbar>
    </>
  );
}
