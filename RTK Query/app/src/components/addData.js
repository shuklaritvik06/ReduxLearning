import React from "react";
import { Button, Container } from "react-bootstrap";
import { useAddPostMutation } from "../services/api";

export default function AddData() {
  const [addData] = useAddPostMutation();
  function addHandler(e){
    e.preventDefault();
    addData({
      title: e.target.title.value,
      userId: 31,
      body: "This is a new post"
    })
  }
  return (
    <div>
      <Container className="mt-3">
        <form onSubmit={addHandler}>
          <div className="form-group">
            <label htmlFor="email">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <input
              type="text"
              className="form-control"
              id="body"
              placeholder="Enter body"
              name="body"
            />
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}
