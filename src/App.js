import React,{Component} from "react";
import "./App.css";
import Firstpage from "./Firstpage"
import Snacks from "./Snacks"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {TransitionGroup,CSSTransition} from 'react-transition-group'

class App extends Component
{
  render()
  {
    return (
      
      <Router>
        <Route render={({location})=> (
          <div className="App">
            <TransitionGroup >
              <CSSTransition timeout={200} className="" key={location.key}>
              <Switch location={location} >
                <Route exact path="/" component={Firstpage}/>
                <Route exact path="/snacks" component={Snacks}/>
              </Switch>
              </CSSTransition>
            </TransitionGroup>        
          </div>
        )}/>
        
      </Router>
    );
  }
  
}
export default App