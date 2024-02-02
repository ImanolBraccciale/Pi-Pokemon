import './App.css';

import {Route,Routes  } from "react-router-dom";
import Home from "./views/Home/home.component";
import Detail from "./views/Detail/detail.component";
import Create from "./views/Create/create.component";
import Landing from "./views/Landing/landing.component";
import axios from 'axios';
axios.defaults.baseURL="https://pi-pokemon-zeta.vercel.app/"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element = {<Landing/>}/>
      <Route exact path="/home" element ={<Home/>}/>
      <Route exact path="/home/:id" element ={<Detail/>}/>
      <Route exact path="/create" element ={<Create/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
