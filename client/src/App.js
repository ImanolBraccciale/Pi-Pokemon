import './App.css';

import {Route,Switch  } from "react-router-dom";
import Home from "./views/Home/home.component";
import Detail from "./views/Detail/detail.component";
import Create from "./views/Create/create.component";
import Landing from "./views/Landing/landing.component";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component = {Landing}/>
      <Route exact path="/home" component ={Home}/>
      <Route exact path="/home/:id" component ={Detail}/>
      <Route exact path="/create" component ={Create}/>
      
      </Switch>
    </div>
  );
}

export default App;
