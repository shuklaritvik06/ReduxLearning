import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetAllPostsQuery,useDeletePostMutation } from "../services/api";

export default function Card() {
  const { data, isLoading, isFetching, isSuccess, error } =
    useGetAllPostsQuery();
  const [deletePost] = useDeletePostMutation();
  function deleteHandler(e){
    deletePost(e.target.id).then((res)=>{
      console.log(res);
    });
  }
  return (
    <div className="mt-5 row">
      {isLoading && <div>Loading...</div>}
      {isFetching && <div>Fetching...</div>}
      {error && <div>Error: {error.message}</div>}
      {isSuccess &&
        data.posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card col-3 mb-3" key={id}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {body}
              </p>
              <Link to={`/update/${id}`} className="btn btn-warning me-3">
                Update
              </Link>
              <Link to={`/posts/${id}`} className="btn btn-success me-3">
                View
              </Link>
              <Button className="btn btn-danger" onClick={deleteHandler} id={id}>
                Delete
              </Button>
            </div>
          </div>
          )
        })}
    </div>
  );
}
