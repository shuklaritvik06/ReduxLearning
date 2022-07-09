import React from "react";
import { Route, Routes } from "react-router-dom";
import AddData from "./addData";
import Home from "./Home";
import PostDetail from "./postDetail";
import UpdateData from "./updateData";

export default function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData/>} />
        <Route path="/update/:id" element={<UpdateData/>} />
        <Route path="/posts/:id" element={<PostDetail/>} />
      </Routes>
    </div>
  );
}
