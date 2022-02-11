import React from "react"
import { Routes, Route } from "react-router-dom"
import {NotFound404, Login } from "../pages/index"
import Home from "../pages/Home"
import PrivateRouter from "./PrivateRouter"
import Detail from "../pages/Detail"
import Popular from "../components/Popular"
import TopRated from "../components/TopRated"

const Routers = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/:movieId" element={<Detail/>} />
      <Route path="popular" element={<Popular />} />
      <Route path="toprated" element={<TopRated />} />

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}

export default Routers
