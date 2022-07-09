import React from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router";
import { useGetAPostQuery } from "../services/api";

export default function PostDetail() {
  const { id } = useParams();
  const { data, isLoading, isFetching, isSuccess, error } =
    useGetAPostQuery(id);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isFetching && <div>Fetching...</div>}
      {error && <div>Error: {error.message}</div>}
      {isSuccess && (
        <div className="card m-5 p-5">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            {data.tags.map((tag) => {
              return (
                <span className="me-3" key={tag}>
                  <Badge variant="primary" key={tag}>
                    {tag}
                  </Badge>
                </span>
              );
            })}
            <p className="card-text">{data.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
