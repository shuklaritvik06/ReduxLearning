import React from "react";
import { Puff } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <Puff color="#00BFFF" height={80} width={80} />{" "}
    </div>
  );
}
