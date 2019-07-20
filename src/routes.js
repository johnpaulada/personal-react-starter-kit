import { Router } from "@reach/router"
import React from "react"
import { Home } from "./pages"

const Routes = () => (
  <Router>
    <Home path="/" />
  </Router>
)

export default Routes
