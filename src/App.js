import React from "react";
import "./App.css";
import Firstpage from "./Firstpage"
import Snacks from "./Snacks"
import Beverages from "./Beverages"
import Cart from "./Cart"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Itemsprovider} from "./Itemscontext"
import {Locationprovider} from "./Locationcontext"
function App()
{
    return (
      <Locationprovider>
      <Itemsprovider>
      <Router>
        <Route render={({location})=> (
          <div className="App">
              <Switch location={location} >
                <Route exact path="/" component={Firstpage}/>
                <Route exact path="/snacks" component={Snacks}/>
                <Route exact path="/beverages" component={Beverages}/>
                <Route exact path="/cart" component={Cart}/>
                {window.scrollTo(0,0)}
              </Switch>
          </div>
        )}/>
        
      </Router>
      </Itemsprovider>
      </Locationprovider>
    );
  
}
export default App