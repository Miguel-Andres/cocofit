import './global.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Login from "./components/Login"
import Footer from './components/Footer';
import Home from "./components/Home"
import Error404 from "./components/NotFound"

function App() {
  return (
    <Router>
      
      <div className="App ">
      
     <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Login />         
        </Route>

        <Route path="*">
          <Error404/>
        </Route>

      </Switch>
      <Footer />
     
     </div>


    </Router>

  );
}

export default App;
