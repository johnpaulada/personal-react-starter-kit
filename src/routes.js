import { Router } from "@reach/router"
import React from "react"
import { Home, Login } from "./pages"

const Routes = () => (
  <Router>
    <Home path="/" />
    <Login path="/login" />
  </Router>
)

export default Routes
