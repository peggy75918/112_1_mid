import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//import './App.css'
import Home from "./pages/Home"
import Works from "./pages/Works"
import projects from "./json/projects.json"

function App() {
  const [data] = useState(projects);

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {data.ntue !== undefined ? (
            <Route
              path="/ntue"
              element={
                <Navigate replace to={`/ntue/${Object.keys(data.ntue)[0]}`} />
              }
            />
          ) : null}
          <Route 
            path="/ntue/:categroy"
            element={<Works data={data.ntue} school={"ntue"} />} 
          />
          {data.ntut !== undefined ? (
            <Route
              path="/ntut"
              element={
                <Navigate replace to={`/ntut/${Object.keys(data.ntut)[0]}`} />
              }
            />
          ) : null}
          <Route 
            path="/ntut/:categroy" 
            element={<Works data={data.ntut} school={"ntut"} />} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
