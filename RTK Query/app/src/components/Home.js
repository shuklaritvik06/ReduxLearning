import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home() {
  return (
    <div className="p-3">
      <Link to="/add">
        <Button variant="primary">Add Post</Button>{" "}
      </Link>
      <Card />
    </div>
  );
}
