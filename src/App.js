import React from "react";
import "./App.css";
import Firstpage from "./Firstpage"
import Snacks from "./Snacks"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App()
{
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Firstpage}/>
          <Route exact path="/snacks" component={Snacks}/>
        </Switch>
      
      </div>
    </Router>
  );
}
export default App