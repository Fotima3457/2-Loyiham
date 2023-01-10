import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter,  Route} from "react-router-dom"
import Bir from "./components/bir";
import Ikki from "./components/ikki";
import Uch from "./components/uch";
import Tort from "./components/tort";
import Besh from "./components/besh";
import Salom from "./components/nav";
import Nol from "./components/nol"


const App = () => {
  return (
    <div>
    
    
  <BrowserRouter>
  <Salom/>
  
  <switch>
  <Route exact path="/" component={Nol}/>
  <Route path="/bir" component={Bir}/>
  <Route path="/ikki" component={Ikki}/>
  <Route path="/uch" component={Uch}/>
  <Route path="/tort" component={Tort}/>
  <Route path="/besh" component={Besh}/>
  </switch>
  </BrowserRouter>
    </div>
  )
}

export default App