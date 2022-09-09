import React from 'react'
import {Routes,Route} from "react-router-dom"
import App from "../App"


function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path='/' component={<App/>}/>
      </Routes>
    </div>
  )
}

export default Routing
