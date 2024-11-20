import { useState } from 'react'
import './App.css'
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home.jsx"
import Form from "./Form.jsx"


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          ></Route>
          <Route
            path="/form"
            element={
              <Form />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  )
}
