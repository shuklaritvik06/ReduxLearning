import React from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useUpdatePostMutation } from "../services/api";

export default function UpdateData() {
  const { id } = useParams();
  const [updatePost] = useUpdatePostMutation();
  function updateHandler(e){
    e.preventDefault();
    const body = {
      title: e.target.title.value,
    }
    updatePost(id,body).then((res)=>{
      console.log(res);
    }).catch((e)=>console.log(e))
  }
  return (
    <div>
      <Container className="mt-3">
        <form onSubmit={updateHandler}>
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
